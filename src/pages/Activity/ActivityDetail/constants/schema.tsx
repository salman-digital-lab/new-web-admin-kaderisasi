import { TableProps } from "antd";
import { Link } from "react-router-dom";
import { Registrant } from "../../../../types/model/activity";

export const REGISTRANT_TABLE_SCHEMA: TableProps<Registrant>["columns"] = [
  {
    title: "No",
    dataIndex: "id",
    width: 80,
  },
  {
    title: "Nama Lengkap",
    dataIndex: "name",
    render: (text) => <Link to={"/member/detail"}>{text}</Link>,
    width: 200,
  },

  {
    title: "Status Pendaftaran",
    dataIndex: "status",
    width: 120,
  },
];
