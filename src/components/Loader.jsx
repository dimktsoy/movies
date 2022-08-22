import { Spin } from "antd";

function Loader() {
  return (
    <div style={{ textAlign: "center", padding: "30px 50px" }}>
      <Spin size="large" />
    </div>
  );
}

export default Loader;
