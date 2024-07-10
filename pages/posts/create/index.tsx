
import { Create, getValueFromEvent, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, Upload } from "antd";
import React from "react";
import { ICategory } from "src/interfaces";

export default function CreatePost() {
  const { formProps, saveButtonProps } = useForm();
  const { selectProps } = useSelect<ICategory>({
    resource: "categories",
    optionLabel: "name",
    optionValue: "_id",
  });

  return (
    <Create title="Tạo mới" saveButtonProps={saveButtonProps}>
      <Form
        layout="vertical"
        {...formProps}
        onFinish={async (values:any) => {
      const urlThumbnail = values.thumbnail[0].response[0];
      formProps!.onFinish!({...values, thumbnail : urlThumbnail})
        }}
      >
        <Form.Item
          label="Tiêu đề bài viết"
          name="title"
          rules={[
            {
              required: true,
              message: "Bạn chưa nhập tiêu đề danh mục",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Mô tả"
          name="description"
          rules={[
            {
              required: true,
              message: "Bạn chưa nhập mô tả",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Nội dung"
          name="content"
          rules={[
            {
              required: true,
              message: "Bạn chưa nhập nội dung",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Ảnh">
          <Form.Item
            name="thumbnail"
            valuePropName="fileList"
            getValueFromEvent={getValueFromEvent}
            noStyle
            rules={[
              {
                required: true,
                message: "Bạn chưa chọn ảnh cho bài viết",
              },
            ]}
          >
            <Upload.Dragger
              listType="picture"
              multiple={false}
              maxCount={1}
              name="images"
              action={"http://localhost:3000/upload/image"}
            >
              <p className="ant-upload-text">Chọn ảnh ở đây</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="Danh mục"
          name={["categories"]}
          rules={[
            { required: true, message: "Bạn chưa nhập danh mục bài viết" },
          ]}
        >
          <Select mode="multiple" {...selectProps} />
        </Form.Item>
      </Form>
    </Create>
  );
}
