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
        label: 'Kegiatan',
        children: [
        {
            key: '/activity',
            label: "Kegiatan Umum",
        },
        {
            key: '/activity/specific',
            label: "Kegiatan Khusus",
        },
        ],
    },
    {
        key: '/member',
        icon: <UploadOutlined />,
        label: 'Aktifis & Jamaah',
    },
    {
        key: '/universities',
        label: "Master Data",
        icon: <UserOutlined />,
        children: [
            {
                key: '/universities',
                label: "Peguruan Tinggi",
            },
            {
                key: '/province',
                label: "Provinsi",
            },
            {
                key: '/city',
                label: "Kabupaten/Kota",
            },
            ],
    },
]