import { SearchOutlined } from "@ant-design/icons";
import {
  DateField,
  DeleteButton,
  EditButton,
  ImageField,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { Button, Form, Input, Space, Table } from "antd";
import { GetServerSideProps } from "next";
import React from "react";
import { authProvider } from "src/authProvider";
import { ICategory } from "src/interfaces";
interface ISearch {
  name: string;
}
export default function Categories() {
  const { tableProps, searchFormProps } = useTable<ICategory>({
    onSearch: (value: any) => {
      return [{ field: "name", operator: "eq", value: value.name }];
    },
  });
  return (
    <List title="Danh mục">
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
        <Table.Column dataIndex="name" width={300} title="Tên danh mục" />
        <Table.Column<ICategory>
          dataIndex="image"
          title="Ảnh nhỏ"
          width={500}
          render={(_, value) => (
            console.log(value.image),
            (
              <ImageField
                value={`http://localhost:3000/${value.image}`}
                style={{ objectFit: "cover" }}
                width={100}
                height={100}
              />
            )
          )}
        />
        <Table.Column dataIndex="description" title="Mô tả" />
        <Table.Column
          dataIndex="createdAt"
          title="Ngày tạo"
          render={(value) => {
            return <DateField value={value} format="HH:mm - DD/MM/YYYY" />;
          }}
        />
        <Table.Column<ICategory>
          dataIndex="actions"
          title="Thao tác"
          render={(value, record) => (
            <Space>
              <EditButton hideText size="large" recordItemId={record._id} />
              <DeleteButton hideText size="large" recordItemId={record._id} />
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
        destination: redirectTo ?? "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
