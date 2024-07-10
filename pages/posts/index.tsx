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
import { Select, Space, Table } from "antd";
import { GetServerSideProps } from "next";
import React from "react";
import { authProvider } from "src/authProvider";
import { IPosts, ICategory } from "src/interfaces";

export default function Posts() {
  const { tableProps } = useTable<IPosts>();
  const { selectProps } = useSelect<ICategory>({
    resource: "categories",
    optionLabel: "name",
    optionValue: "_id",
  });
  return (
    <List title="Bài viết">
      <Table {...tableProps} rowKey="_id">
        <Table.Column
          dataIndex="title"
          title="Tiêu đề"
          width={150}
        ></Table.Column>
        <Table.Column dataIndex="content" title="Nội dung" />
        <Table.Column dataIndex="description" title="Mô tả"></Table.Column>
        <Table.Column<IPosts>
          dataIndex="thumbnail"
          title="Ảnh nhỏ"
          width={120}
          render={(_, value) => (
            <ImageField value={value.thumbnail} width={50} />
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
          title="Danh mục"
          // dataIndex={["categories", "_id"]}
          width={230}
          key="category"
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Select
                mode="multiple"
                placeholder="Danh mục..."
                {...selectProps}
                style={{ minWidth: 200 }}
                
              />
            </FilterDropdown>
          )}
          render={(value) => {
            return (
              <TextField
                value={value.categories.map((item: any) => {
                  return <TagField value={item.name} />;
                })}
              />
            );
          }}
        />
        <Table.Column<IPosts>
          dataIndex="actions"
          title="Thao tác"
          width={50}
          render={(value, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record._id} />
              <ShowButton hideText size="small" recordItemId={record._id} />
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