import {
  Input,
  Col,
  Row,
  Card,
  Form,
  Button,
  Space,
  Table,
  Select,
} from "antd";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { generateTableSchema } from "../constants/schema";
import { useState } from "react";
import { useRequest, useToggle } from "ahooks";
import { getActivity, getRegistrants } from "../../../../api/services/activity";
import { useParams } from "react-router-dom";
import { ACTIVITY_STATUS_LIST } from "../constants/default";
import MembersListModal from "./MembersListModal";

type FieldType = {
  fullname?: string;
  status?: string;
};

const RegistrantList = () => {
  const { id } = useParams<{ id: string }>();

  const [form] = Form.useForm<FieldType>();

  const [modalState, { toggle: toggleModal }] = useToggle();

  const [parameters, setParameter] = useState({
    page: 1,
    per_page: 10,
    name: "",
    status: "",
  });

  const [mandatoryData, setMandatoryData] = useState<string[]>([]);

  const { data, loading } = useRequest(
    () =>
      getRegistrants(id, {
        page: String(parameters.page),
        per_page: String(parameters.per_page),
        name: parameters.name,
        status: parameters.status,
      }),
    {
      refreshDeps: [parameters],
    },
  );

  useRequest(() => getActivity(Number(id)), {
    cacheKey: `activity-${id}`,
    onSuccess: (data) => {
      if (data && data.additional_config.mandatory_profile_data) {
        setMandatoryData(
          data.additional_config.mandatory_profile_data.map(
            (item) => item.name,
          ),
        );
      }
    },
  });

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <MembersListModal open={modalState} toggle={toggleModal} />
      <Card>
        <Form
          layout="vertical"
          form={form}
          onFinish={(val) =>
            setParameter((prev) => ({
              ...prev,
              name: val.fullname || "",
              page: 1,
              status: val.status || "",
            }))
          }
        >
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item label="Nama Pendaftar" name="fullname">
                <Input placeholder="Nama Pendaftar" allowClear />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="Status Pendaftaran" name="status">
                <Select
                  options={ACTIVITY_STATUS_LIST}
                  placeholder="Status Pendaftaran"
                  allowClear
                />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="end">
            <Space>
              <Button onClick={() => toggleModal()} icon={<PlusOutlined />}>
                Tambah Peserta
              </Button>
              <Button
                icon={<SearchOutlined />}
                type="primary"
                htmlType="submit"
              >
                Cari
              </Button>
            </Space>
          </Row>
        </Form>
      </Card>

      <Card>
        <Table
          rowKey="id"
          columns={generateTableSchema(mandatoryData)}
          dataSource={data?.data}
          pagination={{
            current: data?.meta.current_page,
            pageSize: data?.meta.per_page,
            showSizeChanger: true,
            total: data?.meta.total,
          }}
          loading={loading}
          onChange={(pagination) =>
            setParameter((prev) => ({
              ...prev,
              page: pagination.current || 1,
              per_page: pagination.pageSize || 10,
            }))
          }
          scroll={{ x: 1200 }}
        />
      </Card>
    </Space>
  );
};

export default RegistrantList;
