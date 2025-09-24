import { Button, Form, Input, Select, message } from "antd";
import { useUpdateUserMutation } from "../../redux/slices/apiSlice";


const Forma = ({ user }) => {
  const [form] = Form.useForm();
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const onFinish = async (values) => {
    const fullPayload = { ...user, ...values };
    try {
      await updateUser({ id: user.id, userData: fullPayload }).unwrap();
      message.success("Данные успешно обновлены");
    } catch (err) {
      message.error("Ошибка при обновлении данных");
    }
  };

  return (
    <div className="flex justify-center items-center w-full pt-10">
      <Form
        form={form}
        name="updateUser"
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
            { type: "string", message: "Неверное ФИО!" },
            { required: true, message: "Введите ФИО!" },
          ]}
        >
          <Input placeholder="Иванов Иван Андреевич" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Почта"
          rules={[
            { type: "email", message: "Неверная почта!" },
            { required: true, message: "Введите почту!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="address"
          label="Адрес"
          rules={[{ required: true, message: "Введите адрес!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Телефон"
          rules={[{ required: true, message: "Введите телефон!" }]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Пол"
          rules={[{ required: true, message: "Выберите пол!" }]}
        >
          <Select placeholder="Выберите пол">
            <Option value="Мужчина">Мужчина</Option>
            <Option value="Женщина">Женщина</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Сохранить изменения
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Forma;
