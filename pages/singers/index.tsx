import { SearchOutlined } from "@ant-design/icons";
import {
  DateField,
  DeleteButton,
  EditButton,
  ImageField,
  List,
  ShowButton,
  useTable,
  FilterDropdown,
  useSelect,
  TextField,
  TagField,
} from "@refinedev/antd";
import { Button, Form, Input, Select, Space, Table } from "antd";
import { GetServerSideProps } from "next";
import React from "react";
import { authProvider } from "src/authProvider";
import { ISinger } from "src/interfaces";

export default function Posts() {
  const { tableProps, searchFormProps } = useTable<ISinger>({
    onSearch: (value: any) => {
      return [{ field: "name", operator: "eq", value: value.name }];
    },
  });
  return (
    <List title="Ca Sĩ">
      <Form {...searchFormProps} style={{ marginBottom: 10 }} layout="inline">
        <Form.Item name="name">
          <Input placeholder="Tìm kiếm..." />
        </Form.Item>
        <Button
          icon={<SearchOutlined />}
          htmlType="submit"
          value="small"
          type="primary"
          onClick={searchFormProps.form?.submit}
        />
      </Form>
      <Table {...tableProps} rowKey="_id">
        <Table.Column
          dataIndex="name"
          title="Tên ca sĩ"
          width={150}
        ></Table.Column>
        <Table.Column width={500} dataIndex="story" title="Tiểu sử ca sĩ" />
        <Table.Column<ISinger>
          dataIndex="avatar"
          title="Ảnh nhỏ"
          width={120}
          render={(_, value) => (
            <ImageField
              value={`http://localhost:3000/${value.avatar}`}
              width={200}
              height={100}
              style={{ objectFit: "cover" }}
            />
          )}
        />
        <Table.Column
          dataIndex="createdAt"
          width={200}
          title="Ngày tạo"
          render={(value) => {
            return <DateField value={value} format="HH:mm - DD/MM/YYYY" />;
          }}
        />
        <Table.Column
          // dataIndex="categories"
          title="Ngưới theo dõi"
          // dataIndex={["categories", "_id"]}
          width={100}
          key="users"
          render={(value: ISinger) => {
            return <TextField value={value.followers.length} />;
          }}
        />
        <Table.Column<ISinger>
          dataIndex="actions"
          title="Thao tác"
          width={50}
          render={(value, record) => (
            <Space>
              <EditButton hideText size="middle" recordItemId={record._id} />
              <DeleteButton hideText size="middle" recordItemId={record._id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const { authenticated, redirectTo } = await authProvider.check(context);

  if (!authenticated) {
    return {
      props: {},
      redirect: {
        destination: `${redirectTo}?to=${encodeURIComponent("/posts")}`,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
