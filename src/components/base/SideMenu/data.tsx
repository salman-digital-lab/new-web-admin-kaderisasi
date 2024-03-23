import {
  UserOutlined,
  HomeOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import { MenuItem } from "../../../types";

export const menuItems: MenuItem[] = [
  {
    key: "/dashboard",
    icon: <HomeOutlined />,
    label: "Dashboard",
  },
  {
    key: "/activity",
    icon: <ScheduleOutlined />,
    label: "Kegiatan",
  },
  {
    key: "/member",
    icon: <UserOutlined />,
    label: "Jamaah",
  },
  {
      key: '/universities',
      label: "Pusat Data",
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
];
