import { SearchOutlined } from "@ant-design/icons";
import SongAlbum from "@components/SongAlbum";
import {
  DateField,
  DeleteButton,
  EditButton,
  ImageField,
  List,
  useTable,
  TextField,
  TagField,
  FilterDropdown,
  useSelect,
} from "@refinedev/antd";
import { Button, Col, Form, Input, Select, Space, Table } from "antd";
import { GetServerSideProps } from "next";
import React from "react";
import { authProvider } from "src/authProvider";
import { IAlbum, ISinger } from "src/interfaces";

export default function Posts() {
  const { tableProps, searchFormProps } = useTable<ISinger>({
    onSearch: (value: any) => {
      return [{ field: "name", operator: "eq", value: value.name }];
    },
  });

  const { selectProps } = useSelect<ISinger>({
    resource: "singers",
    optionLabel: "name",
    optionValue: "_id",
  });
  return (
    <List title="Album">
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
        <Table.Column dataIndex="name" title="Album" width={150}></Table.Column>
        <Table.Column width={200} dataIndex="description" title="Mô Tả Ngắn" />
        <Table.Column<IAlbum>
          dataIndex="image"
          title="Ảnh Nhỏ"
          width={200}
          render={(_, value) => (
            <ImageField
              value={`http://localhost:3000/${value.image}`}
              width={150}
              height={150}
              style={{ objectFit: "cover" }}
            />
          )}
        />
        <Table.Column
          // dataIndex={"likes"}
          title="Danh Sách Bài Hát"
          width={250}
          key="likes"
          render={(value: any) => {
            return <SongAlbum songs={value.songs} />;
          }}
        />
        <Table.Column
          title="Ca Sĩ Thể Hiện"
          width={150}
          key="singer"
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Select
                mode="multiple"
                placeholder="Ca sĩ .."
                {...selectProps}
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
        <Table.Column
          width={150}
          title="Thông Tin"
          render={(_, value: IAlbum) => (
            <Col>
              <p>{`Lượt Xem : ${value.views}`}</p>
              <p>{`Lượt Thích : ${value.likes}`}</p>
            </Col>
          )}
        />
        <Table.Column
          dataIndex="createdAt"
          width={120}
          title="Ngày tạo"
          render={(value) => {
            return <DateField value={value} format="HH:mm - DD/MM/YYYY" />;
          }}
        />
        <Table.Column<IAlbum>
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
