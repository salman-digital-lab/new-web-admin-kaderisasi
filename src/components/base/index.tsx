import React, { useEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  Layout,
  Button,
  theme,
  Typography,
  Avatar,
  Dropdown,
  Space,
  MenuProps,
  message,
  Flex,
} from "antd";
import SideMenu from "./SideMenu";
import { Outlet } from "react-router-dom";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { logout } from "../../api/auth";
import { useNavigate } from "react-router-dom";

const { Header, Content } = Layout;
const { Text } = Typography;

const items: MenuProps["items"] = [
  {
    label: "Logout",
    key: "1",
    icon: <UserOutlined />,
  },
];

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [displayName, setDisplayName] = useState<string>("");

  const navigate = useNavigate();

  const handleMenuClick: MenuProps["onClick"] = async () => {
    try {
      await logout();
      message.success("Logout successful");
      navigate("/login");
    } catch (error) {
      message.error("An error occured");
    }
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  useEffect(() => {
    const user = localStorage.getItem("user");

    const parseData = JSON.parse(user || "{}");

    setDisplayName(parseData?.user?.display_name || "");
  }, []);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout>
      <SideMenu collapsed={collapsed} onCollapse={handleCollapse} />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Flex justify="space-between" align="center">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <Dropdown menu={menuProps}>
              <Button size="large" style={{ marginRight: 24 }}>
                <Space>
                  <Avatar size="small" icon={<UserOutlined />} />
                  <Text>Hello, {displayName}!</Text>
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </Flex>
        </Header>
        <Content
          style={{
            padding: 24,
            minHeight: "calc(100vh - 64px)",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
