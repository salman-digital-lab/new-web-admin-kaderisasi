import React, { useState } from 'react';
import {
  Form,
  Input,
  Col,
  Row,
  Button,
  Card,
  DatePicker,
  Typography,
  Checkbox,
  Divider,
} from 'antd';
import dayjs from 'dayjs';
import { EditOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"
import { DataActivityDetail } from '../../../types';
import QuillEditor from '../../../components/RichTextEditor';

const dateFormat = 'DD/MM/YYYY';
const { Title } = Typography;

const ActivityDetail: React.FC = () => {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);
  const [DataActivity, setDataActivity] = useState<DataActivityDetail>({
        activity_name: 'Pendaftaran Anggota Sedekah Berjamaah Batch 6',
        description: 'dwianakml',
        minimum_role: 'Aktivis',
        activity_type: 'Open Recruitment',
        registration_start: '09/02/2024',
        registration_end: '09/02/2024',
        selection_start: '09/02/2024',
        selection_end: '09/02/2024',
        activity_start: '09/02/2024',
        activity_end: '09/02/2024',
        is_published: true,
        additional_questionnaire: '',
  })

  const handleInputChange = (key: keyof DataActivityDetail, value: string) => {
    setDataActivity((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  return (
    <Card bordered={true} style={{ height: '100vh', overflow: 'auto', marginBottom: 50 }}>
    <Row style={{ minHeight: '100vh'}}>
        <Col span={24}>
            <Button
                type="dashed"
                size='large'
            >
                <Link to="/activity">
                    <ArrowLeftOutlined /> Kembali
                </Link>
            </Button> 
            <Row justify="center" align="middle">
                <Col span={24} style={{ position: 'absolute', top: 0, right: 0 }}>
                    <Button
                        type='primary'
                        size='large'
                        onClick={() => setComponentDisabled(!componentDisabled)}
                        style={{ marginRight: 10 }}
                    >
                       { !componentDisabled ? <><EditOutlined /> Edit</> : 'Simpan' } 
                    </Button>
                </Col>
            </Row>
                <Form
                    // labelCol={{ span: 4 }}
                    // wrapperCol={{ span: 14 }}
                    layout="vertical"
                    disabled={!componentDisabled}
                    style={{ maxWidth: '100%', marginTop: 50}}
                >
                    <Row gutter={48}>
                        <Col span={12}>
                            <Form.Item label="Nama Kegiatan">
                                <Input value={DataActivity.activity_name} size='large' onChange={(e) => handleInputChange('activity_name', e.target.value)}/>
                            </Form.Item>
                            <Form.Item label="Jenjang Minimum">
                                <Input value={DataActivity.minimum_role} size='large' onChange={(e) => handleInputChange('minimum_role', e.target.value)}/>
                            </Form.Item>
                            <Form.Item label="Kategori Kegiatan">
                                <Input value={DataActivity.activity_type} size='large' onChange={(e) => handleInputChange('activity_type', e.target.value)}/>
                            </Form.Item>
                            <Form.Item label="Status Publikasi">
                                <Checkbox defaultChecked={DataActivity.is_published}>Published</Checkbox>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Tanggal Mulai & Selesai Registrasi">
                                <DatePicker.RangePicker
                                    style={{ width: '100%' }}
                                    defaultValue={[dayjs(DataActivity.registration_start, dateFormat), dayjs(DataActivity.registration_end, dateFormat)]}
                                    getPopupContainer={(trigger) => trigger.parentElement!}
                                    format={dateFormat}
                                />
                            </Form.Item>
                            <Form.Item label="Tanggal Mulai & Selesai Seleksi">
                                <DatePicker.RangePicker
                                    style={{ width: '100%' }}
                                    defaultValue={[dayjs(DataActivity.selection_start, dateFormat), dayjs(DataActivity.selection_end, dateFormat)]}
                                    getPopupContainer={(trigger) => trigger.parentElement!}
                                    format={dateFormat}
                                />
                            </Form.Item>
                            <Form.Item label="Tanggal Mulai & Selesai Kegiatan">
                                <DatePicker.RangePicker
                                    style={{ width: '100%' }}
                                    defaultValue={[dayjs(DataActivity.activity_start, dateFormat), dayjs(DataActivity.activity_end, dateFormat)]}
                                    getPopupContainer={(trigger) => trigger.parentElement!}
                                    format={dateFormat}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                <Divider style={{ marginTop: 0 }}/>
                <Col style={{ marginBottom: 50 }}>
                <Title level={4}>Deskripsi</Title>
                    <QuillEditor 
                        value={DataActivity.description} 
                        onChange={() => handleInputChange('description', '')} 
                    />
                </Col>
            </Form>
        </Col>
    </Row>
    </Card>
  );
};

export default ActivityDetail;