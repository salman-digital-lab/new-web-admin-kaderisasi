import { TableProps, Tag } from "antd";
import { Link } from "react-router-dom";
import { RuangCurhatData } from "../../../../types/model/ruangcurhat";
import {
  renderProblemOwner,
  renderProblemStatus,
  renderProblemStatusColor,
} from "../../../../constants/render";

export const TABLE_SCHEMA: TableProps<RuangCurhatData>["columns"] = [
  {
    title: "Pendaftar Masalah",
    dataIndex: "user_id",
    render: (text, record) => (
      <>{<Link to={`/member/${text}`}>{record.publicUser.email}</Link>}</>
    ),
  },
  {
    title: "Kepemilikan Masalah",
    dataIndex: "problem_owner",
    render: (text) => renderProblemOwner(text),
  },

  {
    title: "Status",
    dataIndex: "status",
    render: (text) => (
      <Tag color={renderProblemStatusColor(text)}>
        {renderProblemStatus(text)}
      </Tag>
    ),
  },
];
