import React, {useState} from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { 
  Layout, 
  Button, 
  theme, 
  Typography, 
  Row, 
  Col, 
  Avatar, 
  Dropdown, 
  Space, 
  MenuProps,
  message 
} from 'antd';
import SideMenu from '../SideMenu';
import { Outlet } from 'react-router-dom';
import { UserOutlined, DownOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;
const { Text } = Typography;

// type ContentProps = {
//   children : React.ReactNode
// }

const handleMenuClick: MenuProps['onClick'] = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const items: MenuProps['items'] = [
  {
    label: 'Logout',
    key: '1',
    icon: <UserOutlined />,
  }
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

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
          <Row justify="space-between">
            <Col>
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
            </Col>
            <Col>
              <Dropdown menu={menuProps}>
                <Button style={{height:'5vh', width:'auto', marginRight:'20px', borderRadius: '20px'}}>
                  <Space>
                    <Avatar size={25} style={{ backgroundColor: '#87d068', marginRight:'5px' }} icon={<UserOutlined />} />
                    <Text style={{ textAlign: 'right', marginRight:'5px'}}>Hello, administrator!</Text>
                    <DownOutlined style={{marginRight:'10px'}}/>
                  </Space>
                </Button>
              </Dropdown>
            </Col>
          </Row>
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
