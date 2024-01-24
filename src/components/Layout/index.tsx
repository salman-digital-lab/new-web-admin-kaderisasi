import React, {useState} from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Button, theme } from 'antd';
import SideMenu from '../SideMenu';
import { Outlet } from 'react-router-dom';

const { Header, Content } = Layout;

// type ContentProps = {
//   children : React.ReactNode
// }

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
     <Layout style={{ minHeight: '100vh' }}>
      <SideMenu collapsed={collapsed} onCollapse={handleCollapse}/>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            height: '100vh',
            background: colorBgContainer,
            overflow: 'initial'
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default AppLayout
