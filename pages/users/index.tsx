import { SearchOutlined } from "@ant-design/icons";
import {
  DateField,
  DeleteButton,
  EditButton,
  ImageField,
  List,
  useTable,
  TextField,
  TagField,
} from "@refinedev/antd";
import { useSelect } from "@refinedev/core";
import { Button, Form, Input, Space, Table } from "antd";
import { GetServerSideProps } from "next";
import React from "react";
import { authProvider } from "src/authProvider";
import { IPosts, IUser } from "src/interfaces";

export default function Posts() {
  const { tableProps, searchFormProps } = useTable<IUser>({
    onSearch: (value: any) => {
      return [{ field: "name", operator: "eq", value: value.name }];
    },
  });
  return (
    <List title="Người dùng">
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
          title="Tên người dùng"
          width={150}
        ></Table.Column>
        <Table.Column width={200} dataIndex="email" title="Email" />
        <Table.Column
          width={100}
          dataIndex="status"
          title="Trạng thái"
          render={(value) => (
            <TagField value={value === 1 ? "Active" : "Inactive"} />
          )}
        />
        <Table.Column<IUser>
          dataIndex="avatar"
          title="Avatar"
          width={200}
          render={(_, value) => (
            <ImageField
              value={`http://localhost:3000/${value.avatar}`}
              width={50}
            />
          )}
        />
        <Table.Column
          // dataIndex={"likes"}
          title="Yêu thích"
          width={250}
          key="likes"
          render={(value) => {
            return (
              <TextField
                value={value.likes.map((item: any) => {
                  return <TagField value={item.name} />;
                })}
              />
            );
          }}
        />
        <Table.Column
          dataIndex="createdAt"
          width={120}
          title="Ngày tạo"
          render={(value) => {
            return <DateField value={value} format="HH:mm - DD/MM/YYYY" />;
          }}
        />
        <Table.Column<IPosts>
          dataIndex="actions"
          title="Thao tác"
          width={50}
          render={(value, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record._id} />
              <DeleteButton hideText size="small" recordItemId={record._id} />
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
