import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

import { menuItems } from "./data";
import { MenuItem, SidebarProps } from "../../../types";
import logo from "../../../assets/images/BMKALogo.png";

const { Sider } = Layout;

const renderMenuItems = (items: MenuItem[]) => {
  return items.map((item: MenuItem) => {
    if (item.children) {
      return (
        <Menu.SubMenu key={item.key} title={item.label} icon={item.icon}>
          {renderMenuItems(item.children)}
        </Menu.SubMenu>
      );
    } else {
      return (
        <Menu.Item key={item.key}>
          <Link to={item.key}>
            {item.icon}
            <span>{item.label}</span>
          </Link>
        </Menu.Item>
      );
    }
  });
};

const SideMenu: React.FC<SidebarProps> = ({ collapsed, onCollapse }) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <img width="auto" height={100} src={logo} />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        {renderMenuItems(menuItems)}
      </Menu>
    </Sider>
  );
};

export default SideMenu;
