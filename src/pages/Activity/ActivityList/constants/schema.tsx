import { Link } from "react-router-dom";
import { TableProps, Tag } from "antd";

import { Activity } from "../../../../types/model/activity";
import {
  renderActivityCategory,
  renderActivityType,
} from "../../../../constants/render";

export const TABLE_SCHEMA: TableProps<Activity>["columns"] = [
  {
    title: "No",
    dataIndex: "id",
    key: "id",
    width: 80,
  },
  {
    title: "Judul Aktivitas/Kegiatan",
    dataIndex: "name",
    key: "name",
    render: (name, record) => <Link to={`/activity/${record.id}`}>{name}</Link>,
    width: 200,
  },
  {
    title: "Pendaftaran",
    dataIndex: ["registration_start", "registration_end"],
    key: "registration_start",
    width: 180,
    render: (_text, record) => {
      return (
        <div>
          <div>{`Mulai : ${record.registration_start || "-"}`}</div>
          <div>{`Akhir : ${record.registration_end || "-"}`}</div>
        </div>
      );
    },
  },
  {
    title: "Tipe Aktivitas",
    dataIndex: "activity_type",
    width: 150,
    render: (value) => renderActivityType(value),
  },
  {
    title: "Kategori Aktivitas",
    dataIndex: "activity_category",
    width: 150,
    render: (value) => renderActivityCategory(value),
  },
  {
    title: "Tanggal Mulai",
    dataIndex: ["activity_start", "activity_end"],
    key: "activity_start",
    width: 180,
    render: (_text, record) => {
      return (
        <div>
          <div>{`Mulai : ${record.activity_start || "-"}`}</div>
          <div>{`Akhir : ${record.activity_end || "-"}`}</div>
        </div>
      );
    },
  },
  {
    title: "Tampil Pada Web",
    dataIndex: "is_published",
    width: 120,
    render: (value) => (
      <Tag color={value == 0 ? "purple" : "green"}>
        {value == 0 ? "Tidak" : "Iya"}
      </Tag>
    ),
  },
];
