import { Create, getValueFromEvent, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { ICategory, ISinger, ISong } from "src/interfaces";

export default function CreatePost() {
  const { formProps, saveButtonProps } = useForm();
  const { selectProps } = useSelect<ISong>({
    resource: "songs",
    optionLabel: "name",
    optionValue: "_id",
  });
  const { selectProps: selectProps2 } = useSelect<ISinger>({
    resource: "singers",
    optionLabel: "name",
    optionValue: "_id",
  });

  return (
    <Create title="Tạo mới" saveButtonProps={saveButtonProps}>
      <Form
        layout="vertical"
        {...formProps}
        onFinish={async (values: any) => {
          const urlImage = values.image[0].response[0];
          formProps!.onFinish!({ ...values, image: urlImage });
        }}
      >
        <Form.Item
          label="Tên Album"
          name="name"
          rules={[
            {
              required: true,
              message: "Bạn chưa nhập tên Album",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Mô Tả Ngán"
          name="description"
          rules={[
            {
              required: true,
              message: "Bạn chưa nhập mô tả ",
            },
          ]}
        >
        <Input.TextArea />
        </Form.Item>
        <Form.Item label="Ảnh Nhỏ">
          <Form.Item
            name="image"
            valuePropName="fileList"
            getValueFromEvent={getValueFromEvent}
            noStyle
            rules={[
              {
                required: true,
                message: "Bạn chưa chọn ảnh cho Album",
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

        <Form.Item
          label="Bài Hát"
          name={["songs"]}
          rules={[
            { required: true, message: "Bạn chưa nhập bài hát" },
          ]}
        >
          <Select mode="multiple" {...selectProps} />
        </Form.Item>
        <Form.Item
          label="Ca Sĩ Thể Hiện"
          name={["singers"]}
          rules={[{ required: true, message: "Bạn chưa nhập ca sĩ thể hiện" }]}
        >
          <Select mode="multiple" {...selectProps2} />
        </Form.Item>

      </Form>
    </Create>
  );
}
