
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
        onFinish={async (values: any) => {
          const urlAvatar = values.avatar[0].response[0];
          formProps!.onFinish!({ ...values, avatar: urlAvatar })
        }}
      >
        <Form.Item
          label="Tên người dùng"
          name="name"
          rules={[
            {
              required: true,
              message: "Bạn chưa nhập tên người dùng",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Bạn chưa nhập Email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[
            {
              required: true,
              message: "Bạn chưa nhập mật khẩu",
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* <Form.Item
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
        </Form.Item> */}
        <Form.Item label="Ảnh">
          <Form.Item
            name="avatar"
            valuePropName="fileList"
            getValueFromEvent={getValueFromEvent}
            noStyle
            rules={[
              {
                required: true,
                message: "Bạn chưa chọn Avatar người dùng",
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
