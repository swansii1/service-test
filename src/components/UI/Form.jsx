import { Button, Form, Input, Select, message } from "antd";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/slices/apiSlice"; // ✅ из usersSlice

const { Option } = Select;

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 8 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 16 } },
};
const tailFormItemLayout = {
  wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } },
};

const Forma = ({ user }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const fullPayload = { ...user, ...values };

    dispatch(updateUser({ id: user.id, userData: fullPayload }))
      .unwrap()
      .then(() => {
        message.success("Данные успешно обновлены ");
      })
      .catch(() => {
        message.error("Ошибка при обновлении данных");
      });
  };

  return (
    <div className="flex justify-center items-center w-full pt-10">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          fio: user.fio,
          email: user.email,
          phone: user.phone,
          gender: user.gender,
          address: user.address,
        }}
        style={{ width: "50%" }}
        scrollToFirstError
      >
        <Form.Item
          name="fio"
          label="ФИО"
          rules={[
            { type: "string", message: "The input is not valid full name!" },
            { required: true, message: "Please input your full name!" },
          ]}
        >
          <Input placeholder="Иванов Иван Андреевич" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Почта"
          rules={[
            { type: "email", message: "The input is not valid E-mail!" },
            { required: true, message: "Please input your E-mail!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="address"
          label="Адрес"
          rules={[{ required: true, message: "Please input your adress!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Номер телефона"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Пол"
          rules={[{ required: true, message: "Please select gender!" }]}
        >
          <Select placeholder="Выберите пол">
            <Option value="Мужчина">Мужчина</Option>
            <Option value="Женщина">Женщина</Option>
          </Select>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Сохранить изменения
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Forma;
