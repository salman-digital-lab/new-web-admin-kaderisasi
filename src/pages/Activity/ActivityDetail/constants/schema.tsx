import { TableProps } from "antd";
import { Link } from "react-router-dom";
import { Registrant } from "../../../../types/model/activity";
import { ColumnType } from "antd/es/table";
import { ProvinceRender } from "../../../../components/render/ProvinceRender";
import { UniversityRender } from "../../../../components/render/UniversityRender";

export const REGISTRANT_TABLE_SCHEMA: TableProps<Registrant>["columns"] = [
  {
    title: "No",
    dataIndex: "id",
    width: 80,
  },
  {
    title: "Nama Lengkap",
    dataIndex: "name",
    render: (text, record) => (
      <Link to={"/member/" + record.user_id}>{text}</Link>
    ),
    width: 200,
  },

  {
    title: "Status Pendaftaran",
    dataIndex: "status",
    width: 120,
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SCHEMA_MAP: Record<string, ColumnType<any>> = {
  intake_year: {
    title: "Angkatan",
    dataIndex: "intake_year",
    width: 80,
  },
  major: {
    title: "Jurusan",
    dataIndex: "major",
    width: 80,
  },
  instagram: {
    title: "Instagram",
    dataIndex: "instagram",
    width: 80,
  },
  line: {
    title: "Line",
    dataIndex: "line",
    width: 80,
  },
  whatsapp: {
    title: "Whatsapp",
    dataIndex: "whatsapp",
    width: 80,
  },
  province_id: {
    title: "Provinsi",
    dataIndex: "province_id",
    render: (val) => <ProvinceRender provinceId={val} />,
    width: 80,
  },
  university_id: {
    title: "Universitas",
    dataIndex: "university_id",
    render: (val) => <UniversityRender universityId={val} />,
    width: 80,
  },
};

export const generateTableSchema = (mandatoryProfileData: string[]) => {
  const ALLOWED_DATA = [
    "whatsapp",
    "province_id",
    "university_id",
    "instagram",
    "line",
    "major",
    "intake_year",
  ];

  const cleanList = mandatoryProfileData.filter((val) =>
    ALLOWED_DATA.includes(val),
  );
  const additionalProfileData = cleanList.map((val) => {
    return SCHEMA_MAP[val];
  });

  console.log(additionalProfileData);
  return [...REGISTRANT_TABLE_SCHEMA, ...additionalProfileData];
};
