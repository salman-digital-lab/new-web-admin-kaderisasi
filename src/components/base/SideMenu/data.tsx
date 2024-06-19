import {
  UserOutlined,
  HomeOutlined,
  ScheduleOutlined,
  DatabaseOutlined,
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
    key: "/universities",
    label: "Pusat Data",
    icon: <DatabaseOutlined />,
    children: [
      {
        key: "/province",
        label: "Provinsi",
      },
      {
        key: "/universities",
        label: "Perguruan Tinggi",
      },
    ],
  },
];
