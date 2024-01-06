import React from 'react';
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

interface SidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

const SideMenu: React.FC<SidebarProps> = ({ collapsed, onCollapse }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Dashboard',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Kegiatan & Aktivitas',
              children: [
                {
                  key: '2.1',
                  label: "Data Kegiatan",
                },
                {
                  key: '2.2',
                  label: "Kategori Kegiatan",
                },
              ],
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Aktifis & Jamaah',
            },
            {
              key: '4',
              icon: <UploadOutlined />,
              label: 'Alumni',
            },
            {
              key: '5',
              label: "Perguruan Tinggi",
              icon: <UserOutlined />,
            },
            {
              key: '6',
              label: "Ruang Curhat",
              icon: <UserOutlined />,
            },
            {
              key: '7',
              label: "Setting",
              icon: <UserOutlined />,
              children: [
                {
                  key: '8.1',
                  label: "Admin",
                  icon: <UploadOutlined />,
                },
              ],
            },
          ]}
        />
      </Sider>
  );
};

export default SideMenu;