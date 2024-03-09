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
  Divider,
  Transfer,
} from 'antd';
import type { TransferProps } from 'antd';
import dayjs from 'dayjs';
import { EditOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"
import { DataActivityDetail } from '../../../types';
import QuillEditor from '../../../components/common/RichTextEditor';

const dateFormat = 'DD/MM/YYYY';
const { Title } = Typography;

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
  
  const ActivityDetail: React.FC = () => {
  const initialContent = `<p><strong>Sedekah Berjamaah Batch 6 Buka Pendaftaran!!</strong>
  <br><br>Assalamu'alaikum Semua!
  <br><br>Hadir kembali untuk kalian,
  <br><br>'Sedekah Berjamaah Batch 6.0'
  <br><br>Cocok banget ni untuk kalian yang pengen punya komunitas kebaikan. 
  <br><br>Sedekah berjamaah adalah wadah yang berfokus untuk membangun rutinitas bersedekah setiap bulan. 
  Sedekah ditujukan untuk penguatan, pemenuhan kesejahteraan dan saling tolong menolong sesama aktivis Salman 
  dan orang yang membutuhkan.
  <br><br>Yuk, ambil peran dari skenario kebaikan kali ini. 
  Biar ngga sepi jangan sendiri, sini barengan sama yang lain.
  <br><br>[Pendaftaran dibuka sampai 15 Februari 2023]
  <br><br>Daftar sekarang di<br>kaderisasi.salmanitb.com
  <br><br>Info lebih lengkap kunjungi :
  <br><br>bit.ly/SiteSedekahBerjamaah
  <br><br>Jangan tunda lagi! Tanpamu kurang satu..
  <br><br>_ _ _ _ _ _ _ _ _ _ 
  <br><br>#SedekahBerjamaah
  <br><br>#TemanSedekahmu<br><br>#BangunIndonesia<br><br>#NaikLevel </p>`;
  
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);
  const [DataActivity, setDataActivity] = useState<DataActivityDetail>({
        activity_name: 'Pendaftaran Anggota Sedekah Berjamaah Batch 6',
        description: initialContent,
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
                        icon={ !componentDisabled ? <EditOutlined /> : <></>}
                    >
                       { !componentDisabled ? 'Edit' : 'Simpan' } 
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
                            <Form.Item label="Data Profil Wajib">
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
                        onChange={ value => handleInputChange('description', value)} 
                    />
                </Col>
            </Form>
        </Col>
    </Row>
    </Card>
  );
};

export default ActivityDetail;