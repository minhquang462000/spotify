import { Edit, getValueFromEvent, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, Upload } from "antd";
import { ICategory, IPosts } from "src/interfaces";

export default function EditPosts() {
  const { formProps, saveButtonProps, queryResult } = useForm<IPosts>({
    resource: "posts",
    action: "edit",
  });

  const { selectProps } = useSelect<ICategory>({
    resource: "categories",
    optionLabel: "name",
    optionValue: "_id",
  });
  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form
        layout="vertical"
        {...formProps}
        onFinish={async (values: any) => {
          let urlThumbnail = values.thumbnail;

          if (values.thumbnail[0].response) {
            urlThumbnail = values.thumbnail[0].response[0];
          }
          formProps!.onFinish!({ ...values, thumbnail: urlThumbnail });
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
            getValueProps={(value) => {
              if (!value) {
                return {
                  fileList: [],
                };
              }
              if (value instanceof Array) {
                return {
                  fileList: value,
                };
              }
              return {
                fileList: [
                  {
                    url: value,
                    name: value.split("/").pop(),
                  },
                ],
              };
            }}
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
          getValueProps={(value) => {
            const ids: string[] = [];
            value?.forEach((item: any) => {
              if (typeof item === "string") {
                ids.push(item);
              } else {
                ids.push(item._id);
              }
            });
            return { value: ids };
          }}
          rules={[
            { required: true, message: "Bạn chưa nhập danh mục bài viết" },
          ]}
        >
          <Select mode="multiple" {...selectProps} />
        </Form.Item>
      </Form>
    </Edit>
  );
}
