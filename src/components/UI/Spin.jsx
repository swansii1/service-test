import { Flex, Spin } from "antd";

const contentStyle = {
  padding: 50,
  background: "white",
  borderRadius: 4,
};

const content = <div style={contentStyle} />;

const Spiner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <Spin tip="Загрузка..." size="large">
      {content}
    </Spin>
  </div>
);

export default Spiner;
