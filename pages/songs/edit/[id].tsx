import { Edit, getValueFromEvent, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, Upload } from "antd";
import Login from "pages/login";
import { ICategory, ISinger, ISong } from "src/interfaces";

export default function EditPosts() {
  const { formProps, saveButtonProps, queryResult } = useForm<ISong>({
    resource: "songs",
    action: "edit",
  });

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
    <Edit saveButtonProps={saveButtonProps}>
      <Form
        layout="vertical"
        {...formProps}
        onFinish={async (values: any) => {
          let urlImage = values.images;
          let urlSong = values.song;
          if (values.images[0].response) {
            urlImage = values.images[0].response[0];
          }
          if (values.song[0].response) {
            urlSong = values.song[0].response[0];
          }
          formProps!.onFinish!({ ...values, images: urlImage, song: urlSong });
        }}
      >
        <Form.Item
          label="Tên bài hát"
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
        <Form.Item
          label="Lời Bài Hát"
          name="lyric"
          rules={[
            {
              required: true,
              message: "Bạn chưa nhập lời bai hát",
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
                    name: value,
                  },
                ],
              };
            }}
            noStyle
            rules={[
              {
                required: true,
                message: "Bạn chưa chọn  bài hát",
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
        <Form.Item label="Ảnh">
          <Form.Item
            name="images"
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
                message: "Bạn chưa chọn ảnh đại diện cho bài hát",
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
            { required: true, message: "Bạn chưa nhập danh mục bài hát" },
          ]}
        >
          <Select mode="multiple" {...selectProps} />
        </Form.Item>
        <Form.Item
          label="Ca sĩ bài hát"
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
            { required: true, message: "Bạn chưa nhập danh mục bài hát" },
          ]}
        >
          <Select mode="multiple" {...selectProps2} />
        </Form.Item>
      </Form>
    </Edit>
  );
}
