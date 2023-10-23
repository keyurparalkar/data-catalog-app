import { Menu } from "antd";
import type { MenuProps } from "antd";

import Sider from "antd/es/layout/Sider";
import { useContext } from "react";
import { DataDispatchContext } from "../../store/providers";
import { SELECT_TABLE } from "../../store/actions";

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
  getItem("Customers", "customers"),
  getItem("Categories", "categories"),
  getItem("Employees", "employees"),
  getItem("Suppliers", "suppliers"),
];

export const LeftSider = () => {
  const dispatch = useContext(DataDispatchContext);

  const handleClick: MenuProps["onClick"] = ({ key }) => {
    dispatch({ type: SELECT_TABLE, payload: key });
  };

  return (
    <Sider style={leftSiderStyle}>
      <Menu
        defaultSelectedKeys={["customers"]}
        mode="inline"
        items={items}
        onClick={handleClick}
      />
    </Sider>
  );
};

export default LeftSider;
