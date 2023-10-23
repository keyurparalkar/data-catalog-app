import { Menu } from "antd";
import type { MenuProps } from "antd";

import Sider from "antd/es/layout/Sider";

const leftSiderStyle: React.CSSProperties = {
  backgroundColor: "white",
};

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Customers", "1"),
  getItem("Categories", "2"),
  getItem("Employees", "3"),
  getItem("Suppliers", "4"),
];

export const LeftSider = () => {
  return (
    <Sider style={leftSiderStyle}>
      <Menu defaultSelectedKeys={["1"]} mode="inline" items={items} />
    </Sider>
  );
};

export default LeftSider;
