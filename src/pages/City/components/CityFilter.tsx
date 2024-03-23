import React from 'react';
import { Input, Col, Row, Button, Form, Select, Card, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { FilterType } from '../constants/type';
import { useRequest } from "ahooks";
import { getProvinces } from '../../../api/services/province';

const { Option } = Select;

type FieldType = {
  name?: string; 
};

type FilterProps = {
  setParameter: React.Dispatch<React.SetStateAction<FilterType>>;
};

const CityFilter= ({ setParameter }: FilterProps) => {
  const [form] = Form.useForm<FieldType>();
  // const [state, { toggle }] = useToggle(false);
  const { data, loading } = useRequest(() =>getProvinces({
    search: setParameter.name,
  }), {
      refreshDeps: [setParameter],
    }
  );
  
  return (
    <Card>
      <Form
        layout="vertical"
        form={form}
        onFinish={(val) =>
          setParameter((prev) => ({
            ...prev,
            name: val.name || "",
          }))
        }
      >
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item label="Nama Kabupaten/Kota" name="name">
              <Input placeholder="Nama Kabupaten/Kota" allowClear />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Nama Provinsi" name="province_id">
              <Select
                placeholder="Provinsi"
                loading={loading}
                allowClear
                >
                {
                  data?.data.map(data => (
                  <Option key={data?.id} value={data?.name}>
                    {data?.name}
                  </Option>
              ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row justify="end">
          <Space>
            <Button icon={<SearchOutlined />} type="primary" htmlType="submit">
              Cari
            </Button>
            {/* <Button onClick={() => toggle()} icon={<PlusOutlined />}>
              Tambah Kegiatan
            </Button> */}
          </Space>
        </Row>
      </Form>

      {/* <CityForm open={state} onClose={() => toggle()} /> */}
    </Card>
  );
}

export default CityFilter;