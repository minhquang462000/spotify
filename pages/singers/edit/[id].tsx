import { Edit, getValueFromEvent, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, Upload } from "antd";
import Login from "pages/login";
import { ICategory, IPosts, IUser } from "src/interfaces";
import domain from "src/interfaces";

export default function EditPosts() {
  const { formProps, saveButtonProps, queryResult } = useForm<IPosts>({
    resource: "singers",
    action: "edit",
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form
        layout="vertical"
        {...formProps}
        onFinish={async (values: any) => {
          let urlAvatar = values.avatar;

          if (values.avatar[0].response) {
            urlAvatar = values.avatar[0].response[0];
          }
          formProps!.onFinish!({ ...values, avatar: urlAvatar });
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
          label="Tiểu Sử"
          name="story"
          rules={[
            {
              required: true,
              message: "Bạn chưa nhập tiểu sử ca sĩ",
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
                    url: "http://localhost:3000/" + value,
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
              action={"http://localhost:3000/upload/images"}
            >
              <p className="ant-upload-text">Chọn ảnh ở đây</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
      </Form>
    </Edit>
  );
}
