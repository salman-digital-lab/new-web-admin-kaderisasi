import { Input, Col, Row, Card, Form, Button, Space, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { REGISTRANT_TABLE_SCHEMA } from "../constants/schema";
import { useState } from "react";
import { useRequest } from "ahooks";
import { getRegistrants } from "../../../../api/services/activity";
import { useParams } from "react-router-dom";

type FieldType = {
  fullname?: string;
};

const RegistrantList = () => {
  const { id } = useParams<{ id: string }>();

  const [form] = Form.useForm<FieldType>();

  const [parameters, setParameter] = useState({
    page: 1,
    per_page: 10,
    name: "",
  });

  const { data, loading } = useRequest(() => getRegistrants(id), {
    refreshDeps: [parameters],
  });

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <Card>
        <Form
          layout="vertical"
          form={form}
          onFinish={(val) =>
            setParameter((prev) => ({
              ...prev,
              name: val.fullname || "",
              page: 1,
            }))
          }
        >
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item label="Nama Aktivitas" name="fullname">
                <Input placeholder="Nama Aktivitas" allowClear />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Space>
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
          columns={REGISTRANT_TABLE_SCHEMA}
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
