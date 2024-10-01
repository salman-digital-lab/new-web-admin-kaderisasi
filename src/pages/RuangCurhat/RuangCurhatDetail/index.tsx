import { useRequest } from "ahooks";
import {
  Button,
  Card,
  Descriptions,
  DescriptionsProps,
  Dropdown,
  Flex,
  MenuProps,
  Space,
  Tag,
  Typography,
} from "antd";
import { Link, useParams } from "react-router-dom";
import { ArrowLeftOutlined, DownOutlined } from "@ant-design/icons";

import { Input } from "antd";

import {
  getRuangCurhat,
  putRuangCurhat,
} from "../../../api/services/ruangcurhat";
import {
  renderProblemOwner,
  renderProblemStatus,
  renderProblemStatusColor,
} from "../../../constants/render";
import { PROBLEM_STATUS_ENUM } from "../../../constants/enum/ruangcurhat";
import { useState } from "react";

const { TextArea } = Input;
const { Title } = Typography;

const UPDATE_STATUS_MENU: MenuProps["items"] = [
  {
    label: "Belum Ditangani",
    key: PROBLEM_STATUS_ENUM.BELUM_DITANGANI,
  },
  {
    label: "Sedang Ditangani",
    key: PROBLEM_STATUS_ENUM.SEDANG_DITANGANI,
  },
  {
    label: "Sudah Ditangani",
    key: PROBLEM_STATUS_ENUM.SUDAH_DITANGANI,
  },
  {
    label: "Batal",
    key: PROBLEM_STATUS_ENUM.BATAL,
  },
];

export function RuangCurhatDetail() {
  const { id } = useParams<{ id: string }>();
  const [additionalNotes, setAdditionalNotes] = useState("");

  const { data, loading, refresh } = useRequest(
    () => getRuangCurhat({ id: id || "" }),
    {
      onSuccess: (data) => setAdditionalNotes(data?.additional_notes || ""),
    },
  );

  const { loading: editLoading, runAsync } = useRequest(putRuangCurhat, {
    manual: true,
  });

  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "Pendaftar ",
      children: data?.publicUser.email,
    },
    {
      key: "2",
      label: "Kepemilikan ",
      children: renderProblemOwner(data?.problem_owner),
    },
    {
      key: "4",
      label: "Status",
      children: (
        <Tag color={renderProblemStatusColor(data?.status)}>
          {renderProblemStatus(data?.status)}
        </Tag>
      ),
    },
  ];

  const items2: DescriptionsProps["items"] = [
    {
      key: "3",
      label: "Nama",
      span: 3,
      children: data?.owner_name,
    },
    {
      key: "5",
      label: "Deskripsi",
      span: 3,
      children: data?.problem_description,
    },
  ];

  return (
    <Flex vertical gap="middle">
      <Space>
        <Button>
          <Link to="/ruang-curhat">
            <ArrowLeftOutlined /> Kembali
          </Link>
        </Button>
        <Dropdown
          menu={{
            items: UPDATE_STATUS_MENU?.map((item) => ({
              ...item,
              onClick: () =>
                runAsync({
                  id: id || "",
                  data: { status: Number(item?.key || "0") },
                }).finally(refresh),
            })) as MenuProps["items"],
          }}
        >
          <Button loading={editLoading}>
            <Space>
              Ubah Status
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </Space>
      <Card loading={loading}>
        <Descriptions title="Informasi Dasar" items={items} bordered />
      </Card>
      <Card loading={loading}>
        <Descriptions title="Detil Pemilik Masalah" items={items2} bordered />
      </Card>

      <Card loading={loading}>
        <Title level={5}>Catatan</Title>
        <TextArea
          rows={4}
          value={additionalNotes}
          onChange={(e) => setAdditionalNotes(e.target.value)}
        />
        <Button
          type="primary"
          style={{ marginTop: "1rem" }}
          loading={editLoading}
          onClick={() =>
            runAsync({
              id: id || "",
              data: { status: data?.status, additional_notes: additionalNotes },
            }).finally(refresh)
          }
        >
          {additionalNotes && additionalNotes.length
            ? "Ubah Catatan"
            : "Tambahkan Catatan"}
        </Button>
      </Card>
    </Flex>
  );
}
