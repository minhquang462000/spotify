import { Edit, getValueFromEvent, useForm, useSelect } from "@refinedev/antd";
import { Checkbox, Form, Input, Select, Upload } from "antd";
import { ISinger, ISong, IUser } from "src/interfaces";

export default function EditPosts() {
  const { formProps, saveButtonProps, queryResult } = useForm<IUser>({
    resource: "users",
    action: "edit",
  });

  const { selectProps } = useSelect<ISong>({
    resource: "songs",
    optionLabel: "name",
    optionValue: "_id",
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
          label="Trạng thái"
          name="status"

        >
          {/* <Checkbox.Group options={["Hoạt động", "Không hoạt động"]} /> */}

          <Select
            options={[
              {
                label: "Active",
                value: 1,
              },
              {
                label: "Inactive",
                value: 0,
              },
            ]}
          />
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
                message: "Bạn chưa chọn ảnh đại diện",
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
          label="Bài Hát Yêu Thích "
          name={["likes"]}
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
