import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
import { MenuItem } from '../../types';


export const menuItems : MenuItem[] = [
    {
        key: '/dashboard',
        icon: <UserOutlined />,
        label: 'Dashboard',
    },
    {
        key: '/activity',
        icon: <VideoCameraOutlined />,
        label: 'Kegiatan & Aktivitas',
        children: [
        {
            key: '/activity',
            label: "Data Kegiatan",
        },
        {
            key: '/activity/detail',
            label: "Kategori Kegiatan",
        },
        ],
    },
    {
        key: '/member',
        icon: <UploadOutlined />,
        label: 'Aktifis & Jamaah',
    },
    {
        key: '/alumni',
        icon: <UploadOutlined />,
        label: 'Alumni',
    },
    {
        key: '/universities',
        label: "Perguruan Tinggi",
        icon: <UserOutlined />,
    },
    {
        key: '/chat-room',
        label: "Ruang Curhat",
        icon: <UserOutlined />,
    },
    {
        key: '/user',
        label: "Setting",
        icon: <UserOutlined />,
        children: [
        {
            key: '/user',
            label: "Admin",
            icon: <UploadOutlined />,
        },
        ],
    },
]