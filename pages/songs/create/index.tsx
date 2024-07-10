import { Create, getValueFromEvent, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, Upload } from "antd";
import React from "react";
import { ICategory, ISinger } from "src/interfaces";

export default function CreatePost() {
  const { formProps, saveButtonProps } = useForm();
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
    <Create title="Tạo mới" saveButtonProps={saveButtonProps}>
      <Form
        layout="vertical"
        {...formProps}
        onFinish={async (values: any) => {
          const urlImage = values.images[0].response[0];
          const urlSong = values.song[0].response[0];
          formProps!.onFinish!({ ...values, images: urlImage, song: urlSong });
        }}
      >
        <Form.Item
          label="Tên Bài Hát"
          name="name"
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
        <Form.Item label="Bài Hát">
          <Form.Item
            name="song"
            valuePropName="fileList"
            getValueFromEvent={getValueFromEvent}
            noStyle
            rules={[
              {
                required: true,
                message: "Bạn chưa chọn bài hát",
              },
            ]}
          >
            <Upload.Dragger
              listType="text"
              multiple={false}
              maxCount={1}
              name="songs"
              action={"http://localhost:3000/upload/musics"}
            >
              <p className="ant-upload-text">
                Kéo thả hoặc click để tải lên file âm thanh
              </p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="Lời Bài Hát "
          name="lyric"
          rules={[
            {
              required: true,
              message: "Bạn chưa nhập lời bài hát",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Ảnh">
          <Form.Item
            name="images"
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
              action={"http://localhost:3000/upload/images"}
            >
              <p className="ant-upload-text">Chọn ảnh ở đây</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="Danh mục"
          name={["categories"]}
          rules={[
            { required: true, message: "Bạn chưa nhập danh mục bài hát" },
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
