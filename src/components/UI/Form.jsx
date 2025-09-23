import { Button, Form, Input, Select } from "antd";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/slices/putSlice";

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
    console.log("Received values of form: ", values);
    const fullPayload = { ...user, ...values };
    dispatch(updateUser({ id: user.id, userData: fullPayload }));
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
          placeholder="Иванов Иван Андреевич"
          rules={[
            { type: "string", message: "The input is not valid full name!" },
            { required: true, message: "Please input your full name!" },
          ]}
        >
          <Input />
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
          label="Gender"
          rules={[{ required: true, message: "Please select gender!" }]}
        >
          <Select placeholder="select your gender">
            <Option value="Мужчина">Мужчина</Option>
            <Option value="Женщина">Женщина</Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Change data
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Forma;
