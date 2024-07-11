import { Edit, getValueFromEvent, useForm, useSelect } from "@refinedev/antd";
import { Checkbox, Form, Input, Select, Upload } from "antd";
import { ISinger, ISong, IUser } from "src/interfaces";

export default function EditPosts() {
  const { formProps, saveButtonProps, queryResult } = useForm<IUser>({
    resource: "albums",
    action: "edit",
  });

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
    <Edit saveButtonProps={saveButtonProps}>
      <Form
        layout="vertical"
        {...formProps}
        onFinish={async (values: any) => {
          let urlImage = values.image;

          if (values.image[0].response) {
            urlImage = values.image[0].response[0];
          }
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
          label="Mô Tả Ngắn"
          name="description"
          rules={[
            {
              required: true,
              message: "Bạn chưa nhập mô tả ngắn",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Ảnh">
          <Form.Item
            name="image"
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
          label="Bài Hát Liên Kết "
          name={["songs"]}
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
            { required: true, message: "Bạn chưa chọn bài hát liên kết" },
          ]}
        >
          <Select mode="multiple" {...selectProps} />
        </Form.Item>
        <Form.Item
          label="Ca Sĩ Thể Hiện"
          name={["singers"]}
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
            { required: true, message: "Bạn chưa nhập tên Ca sĩ" },
          ]}
        >
          <Select mode="multiple" {...selectProps2} />
        </Form.Item>
      </Form>
    </Edit>
  );
}
