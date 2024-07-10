import { Create, getValueFromEvent, useForm } from "@refinedev/antd";
import { Form, Input, Upload } from "antd";
import React from "react";

export default function CreateCategory() {
  const { formProps, saveButtonProps } = useForm();
  return (
    <Create title="Tạo mới" saveButtonProps={saveButtonProps}>
      <Form
        layout="vertical"
        {...formProps}
        onFinish={async (values: any) => {
          console.log(values);
          const urlImage = values.image[0].response[0];
          formProps!.onFinish!({ ...values, image: urlImage });
        }}
      >
        <Form.Item
          label="Tên danh mục"
          name="name"
          rules={[
            {
              required: true,
              message: "Bạn chưa nhập tên danh mục",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Mô tả"
          rules={[{ required: true, message: "Bạn chưa nhập mô tả" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Ảnh">
          <Form.Item
            name="image"
            valuePropName="fileList"
            getValueFromEvent={getValueFromEvent}
            noStyle
            rules={[
              {
                required: true,
                message: "Bạn chưa chọn ảnh cho danh mục",
              },
            ]}
          >
            <Upload.Dragger
              listType="picture"
              multiple={false}
              maxCount={1}
              name="images"
              action={"http://localhost:3000/upload/images"}
            >
              <p className="ant-upload-text">Chọn ảnh ở đây</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
      </Form>
    </Create>
  );
}
