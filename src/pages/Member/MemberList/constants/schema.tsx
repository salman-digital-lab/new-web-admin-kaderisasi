import { TableProps } from "antd";
import { Link } from "react-router-dom";

import { Member } from "../../../../types/model/members";

export const TABLE_SCHEMA: TableProps<Member>["columns"] = [
  {
    title: "No",
    dataIndex: "id",
    width: 80,
  },
  {
    title: "Nama Jamaah",
    dataIndex: "name",
    render: (text, data) => (
      <>{data && <Link to={`/member/${data?.id}`}>{text}</Link>}</>
    ),
  },
  {
    title: "Email",
    dataIndex: "publicUser",
    key: "email",
    render: (value) => value.email,
  },
  {
    title: "University",
    dataIndex: "university_temp",
  },
];
