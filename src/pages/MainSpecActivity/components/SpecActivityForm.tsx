import React, { useState } from 'react';
import { 
    Button, 
    Col, 
    DatePicker, 
    Drawer, 
    Form, 
    Input, 
    Row, 
    Select, 
    Space,
    Transfer,
} from 'antd';
import type { TransferProps } from 'antd';
import QuillEditor from '../../../components/common/RichTextEditor';

const { Option } = Select;

interface SpecActivityFormProps {
    open: boolean;
    onClose: () => void;
  }
  interface RecordType {
    key: string;
    title: string;
    description: string;
  }

  const data : RecordType[] = [ 
    {key: "0", title: "Nama", description: "Sample Description 0"},  
    {key: "1", title: "Jenis Kelamin", description: "Sample Description 1"}, 
    {key: "2", title: "Provinsi", description: "Sample Description 2"}, 
    {key: "3", title: "Kota", description: "Sample Description 3"}, 
    {key: "4", title: "Universitas", description: "Sample Description 4"}, 
    {key: "5", title: "Angkatan", description: "Sample Description 5"}, 
    {key: "6", title: "Whatsapp", description: "Sample Description 6"}, 
    {key: "7", title: "Line", description: "Sample Description 7"},
    {key: "8", title: "Instagram", description: "Sample Description 8"}, 
    {key: "9", title: "Jenjang", description: "Sample Description 9"},  
  ];
  
  const mockData = data.map((item) => ({
    key: item.key,
    title: item.title,
    description: item.description,
  }));
  
  const oriTargetKeys = mockData.filter((item) => Number(item.key) % 3 > 1).map((item) => item.key);

const SpecActivityForm: React.FC<SpecActivityFormProps> = ({ open, onClose }) => {
    const [content, setContent] = useState<string>('');
    const [targetKeys, setTargetKeys] = useState<string[]>(oriTargetKeys);
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

    const handleChange: TransferProps<RecordType>['onChange'] = (newTargetKeys : string[], direction, moveKeys) => {
      setTargetKeys(newTargetKeys);

      console.log('targetKeys: ', newTargetKeys);
      console.log('direction: ', direction);
      console.log('moveKeys: ', moveKeys);
    };

    const handleSelectChange = (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => {
      setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);

      console.log('sourceSelectedKeys: ', sourceSelectedKeys);
      console.log('targetSelectedKeys: ', targetSelectedKeys);
    };

    const handleScroll: TransferProps<RecordType>['onScroll'] = (direction, e) => {
      console.log('direction:', direction);
      console.log('target:', e.target);
    };

    const handleContentChange = (newContent: string) => {
      setContent(newContent);
    };

  return (
    <>
      <Drawer
        title="Tambah Kegiatan Khusus"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical">
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Nama Kegiatan"
                rules={[
                  {
                    required: true,
                    message: 'Nama Kegiatan',
                  },
                ]}
              >
                <Input placeholder="Nama Kegiatan" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Minimum Jenjang"
                rules={[{ required: true, message: 'Minimum Jenjang' }]}
              >
                <Select placeholder="Pilih Minimum Jenjang">
                  <Option value="jack">Aktivis</Option>
                  <Option value="tom">Kader</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="url"
                label="Tanggal Mulai & Selesai Kegiatan"
                rules={[{ required: true, message: 'Tanggal Mulai & Selesai Kegiatan' }]}
              >
                <DatePicker.RangePicker
                  style={{ width: '100%' }}
                  getPopupContainer={(trigger) => trigger.parentElement!}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="owner"
                label="Tanggal Mulai & Selesai Registrasi"
                rules={[{ required: true, message: 'Tanggal Mulai & Selesai Registrasi' }]}
              >
                <DatePicker.RangePicker
                  style={{ width: '100%' }}
                  getPopupContainer={(trigger) => trigger.parentElement!}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="type"
                label="Tanggal Mulai & Selesai Seleksi"
                rules={[{ required: true, message: 'Tanggal Mulai & Selesai Seleksi' }]}
              >
                <DatePicker.RangePicker
                  style={{ width: '100%' }}
                  getPopupContainer={(trigger) => trigger.parentElement!}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Transfer
                dataSource={mockData}
                titles={['Source', 'Data Profil Wajib']}
                targetKeys={targetKeys}
                selectedKeys={selectedKeys}
                onChange={handleChange}
                onSelectChange={handleSelectChange}
                onScroll={handleScroll}
                render={(item) => item.title}
                oneWay
                style={{ marginBottom: 30 }}
                listStyle={{
                  width: 250,
                }}
              />
            </Col>
          </Row>
          <QuillEditor 
            value={content} 
            onChange={handleContentChange} 
        />
        </Form>
      </Drawer>
    </>
  );
};

export default SpecActivityForm;