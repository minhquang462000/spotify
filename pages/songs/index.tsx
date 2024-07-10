import { SearchOutlined } from "@ant-design/icons";
import {
  DateField,
  DeleteButton,
  EditButton,
  ImageField,
  List,
  useTable,
  FilterDropdown,
  useSelect,
  TextField,
  TagField,
} from "@refinedev/antd";
import { Button, Col, Form, Input, Select, Space, Table } from "antd";
import MusicPlayer from "components/MusicPlayer";
import { GetServerSideProps } from "next";
import React from "react";
import { authProvider } from "src/authProvider";
import { ICategory, ISinger, ISong } from "src/interfaces";

export default function Posts() {
  const { tableProps, searchFormProps } = useTable<ISong>({
    onSearch: (value: any) => {
      return [{ field: "name", operator: "eq", value: value.name }];
    },
  });
  const { selectProps } = useSelect<ICategory>({
    resource: "categories",
    optionLabel: "name",
    optionValue: "_id",
  });
  const { selectProps: selectProps2 } = useSelect<ISinger>({
    resource: "singers",
    optionLabel: "name",
    optionValue: "_id",
  });
  return (
    <List title="Bài Hát">
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
        {/* <Table.Column dataIndex="name" title="Tên" width={150} /> */}
        <Table.Column
          title="Bài Hát"
          dataIndex="song"
          render={(_, value: ISong) => (
            <MusicPlayer
              title={value.name}
              singer={value.singers.map((singer) => singer.name).join(", ")}
              coverImage={`http://localhost:3000/${value.images}`}
              audioSrc={`http://localhost:3000/${value.song}`}
            />
          )}
          width={300}
        />
        <Table.Column width={400} dataIndex="lyric" title="Lời Bài Hát" />
        <Table.Column width={300} dataIndex="description" title="Mô Tả" />
        <Table.Column
          width={150}
          title="Thông Tin"
          render={(_, value: ISong) => (
            <Col>
              <p>{`Lượt Xem : ${value.views}`}</p>
              <p>{`Lượt Thích : ${value.likes}`}</p>
            </Col>
          )}
        />
        {/* <Table.Column<ISong>
          dataIndex="images"
          title="Ảnh Nhỏ"
          render={(_, value) => (
            <ImageField
              value={`http://localhost:3000/${value.images}`}
              width={100}
              height={100}
              style={{ objectFit: "cover" }}
            />
          )}
        /> */}

        <Table.Column
          dataIndex="createdAt"
          width={200}
          title="Ngày Tạo"
          render={(value) => {
            return <DateField value={value} format="HH:mm - DD/MM/YYYY" />;
          }}
        />
        <Table.Column
          // dataIndex="categories"
          title="Danh Mục"
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
        <Table.Column
          // dataIndex="categories"
          title="Ca Sĩ Thể Hiện"
          // dataIndex={["categories", "_id"]}
          width={230}
          key="singer"
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Select
                mode="multiple"
                placeholder="Ca sĩ .."
                {...selectProps2}
                style={{ minWidth: 200 }}
              />
            </FilterDropdown>
          )}
          render={(value) => {
            return (
              <TextField
                value={value.singers.map((item: any) => {
                  return <TagField value={item.name} />;
                })}
              />
            );
          }}
        />
        <Table.Column<ISong>
          dataIndex="actions"
          title="Thao Tác"
          width={150}
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
        destination: `${redirectTo}?to=${encodeURIComponent("/posts")}`,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
