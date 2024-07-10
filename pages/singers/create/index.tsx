
import { Create, getValueFromEvent, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, Upload } from "antd";
import React from "react";
import { ICategory } from "src/interfaces";

export default function CreatePost() {
  const { formProps, saveButtonProps } = useForm();
  return (
    <Create title="Tạo mới" saveButtonProps={saveButtonProps}>
      <Form
        layout="vertical"
        {...formProps}
        onFinish={async (values:any) => {
      const urlAvatar = values.avatar[0].response[0];
      formProps!.onFinish!({...values, avatar : urlAvatar})
        }}
      >
        <Form.Item
          label="Tên Ca Sĩ"
          name="name"
          rules={[
            {
              required: true,
              message: "Bạn chưa nhập tên ca sĩ",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Tiếu Sử"
          name="story"
          rules={[
            {
              required: true,
              message: "Bạn chưa nhập tiếu sử ca sĩ",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Ảnh">
          <Form.Item
            name="avatar"
            valuePropName="fileList"
            getValueFromEvent={getValueFromEvent}
            noStyle
            rules={[
              {
                required: true,
                message: "Bạn chưa chọn ảnh đại diện ca sĩ",
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
