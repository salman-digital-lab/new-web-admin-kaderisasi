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
    Space
} from 'antd';
import QuillEditor from '../../../components/RichTextEditor';

const { Option } = Select;

interface SpecActivityFormProps {
    open: boolean;
    onClose: () => void;
  }

const SpecActivityForm: React.FC<SpecActivityFormProps> = ({ open, onClose }) => {
    const [content, setContent] = useState<string>('');

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
            <Col span={24}>
              <Form.Item
                name="description"
                label="Deskripsi"
                rules={[
                  {
                    required: true,
                    message: 'Deskripsi',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="Deskripsi" />
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