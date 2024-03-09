import {
    UserOutlined,
    ScheduleOutlined,
    UsergroupAddOutlined,
    HomeOutlined
  } from '@ant-design/icons';
import { MenuItem } from '../../../types';


export const menuItems : MenuItem[] = [
    {
        key: '/dashboard',
        icon: <HomeOutlined />,
        label: 'Dashboard',
    },
    {
        key: '/activity',
        icon: <ScheduleOutlined />,
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
        icon: <UsergroupAddOutlined />,
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