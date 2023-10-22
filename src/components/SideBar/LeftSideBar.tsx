import { Button } from "antd";
import Sider from "antd/es/layout/Sider";

const leftSiderStyle: React.CSSProperties = {
  backgroundColor: "white",
  paddingLeft: 10,
  paddingRight: 10,
};

export const LeftSider = () => {
  return (
    <Sider style={leftSiderStyle}>
      <Button type="text" block>
        Customers
      </Button>
      <Button type="text" block>
        Categories
      </Button>
      <Button type="text" block>
        Employees
      </Button>
      <Button type="text" block>
        Suppliers
      </Button>
    </Sider>
  );
};

export default LeftSider;
