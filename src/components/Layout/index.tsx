import React, {useEffect, useState} from 'react'
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
  const [displayName, setDisplayName] = useState<string>('');

  useEffect(() => {
    const user = localStorage.getItem("user");

    const parseData = JSON.parse(user || "{}");

    setDisplayName(parseData.user.display_name || "")
  },[])


  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
     <Layout style={{ minHeight: '100vh' }}>
      <SideMenu collapsed={collapsed} onCollapse={handleCollapse}/>
      <Layout style={{ backgroundColor: '#fff' }}>
        <Header style={{background: colorBgContainer, position: 'fixed', zIndex: 1, width: '100%' }}>
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
                  marginLeft: '-50px',
                }}
              />
            </Col>
            <Col>
              <Dropdown menu={menuProps}>
                <Button style={{height:'5vh', marginRight:'180px', borderRadius: '20px'}}>
                  <Space>
                    <Avatar size={25} style={{ backgroundColor: '#87d068', marginRight:'5px' }} icon={<UserOutlined />} />
                    <Text style={{ textAlign: 'right', marginRight:'5px'}}>Hello, {displayName}!</Text>
                    <DownOutlined style={{marginRight:'10px'}}/>
                  </Space>
                </Button>
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            margin: '70px 16px',
            padding: 24,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default AppLayout
