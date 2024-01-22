import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Avatar,
  Col,
  Row,
  Typography,
  Button,
} from 'antd';
import { EditOutlined, StopOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"

const { Title, Text } = Typography;

interface DataMembers {
    email: string;
    idLine: string;
    whatsapp: string;
    instagram: string;
    universitas: string;
    fakultas: string;
    jurusan: string;
    angkatan: number;
    address: string;
    kecamatan: string;
    kota: string;
    provinsi: string;
  }

const MemberDetail: React.FC = () => {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);
  const [dataMembers, setDataMembers] = useState<DataMembers>({
        email: 'dwianakas@gmail.com',
        idLine: 'dwianakml',
        whatsapp: '081804065926',
        instagram: 'dwianakmlas',
        universitas: 'Politeknik Negeri Bandung',
        fakultas: 'Teknik Komputer dan Informatika',
        jurusan: 'Teknik Informatika',
        angkatan: 2018,
        address: 'Komp Pondok Padalarang Indah',
        kecamatan: 'Padalarang',
        kota: 'Kab. Bandung Barat',
        provinsi: 'Jawa Barat'
  })

  const handleInputChange = (key: keyof DataMembers, value: string) => {
    setDataMembers((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  return (
    <Row style={{ minHeight: '100vh'}}>
        <Col span={24}>
            <Button
                type="dashed"
                size='large'
            >
                <Link to="/member">
                    <ArrowLeftOutlined /> Kembali
                </Link>
            </Button> 
            <Row justify="center" align="middle">
                <Col span={24} style={{ textAlign: 'center' }}>
                    <Avatar size={128} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                        
                </Col>
                <Col span={24} style={{ textAlign: 'center', marginTop: 10, display: 'flex', flexDirection: 'column' }}>
                    <Title level={4}>Dwiana Kamila A.S</Title>
                    <Text type="secondary">Aktivis</Text>
                    <Text type="secondary">Politeknik Negeri Bandung</Text>
                    <Text type="secondary">Wanita</Text>
                    <Text type="secondary">Bandung, 16 Januari 2001</Text>
                </Col>
                <Col span={24} style={{ position: 'absolute', top: 0, right: 0, padding: 20 }}>
                    <Button
                        type='primary'
                        size='large'
                        onClick={() => setComponentDisabled(!componentDisabled)}
                        style={{ marginRight: 10 }}
                    >
                       { !componentDisabled ? <><EditOutlined /> Edit</> : 'Simpan' } 
                    </Button>
                    <Button
                        type='primary'
                        size='large'
                        danger
                    >
                        <StopOutlined /> Blokir
                    </Button>
                </Col>
            </Row>
                <Form
                    // labelCol={{ span: 4 }}
                    // wrapperCol={{ span: 14 }}
                    layout="vertical"
                    disabled={!componentDisabled}
                    style={{ maxWidth: '100%', marginTop: 10}}
                >
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item label="Email">
                                <Input value={dataMembers.email} size='large' onChange={(e) => handleInputChange('email', e.target.value)}/>
                            </Form.Item>
                            <Form.Item label="ID Line">
                                <Input value={dataMembers.idLine} size='large' onChange={(e) => handleInputChange('idLine', e.target.value)}/>
                            </Form.Item>
                            <Form.Item label="Whatsapp">
                                <Input value={dataMembers.whatsapp} size='large' onChange={(e) => handleInputChange('whatsapp', e.target.value)}/>
                            </Form.Item>
                            <Form.Item label="Instagram">
                                <Input value={dataMembers.instagram} size='large' onChange={(e) => handleInputChange('instagram', e.target.value)}/>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Perguruan Tinggi">
                                <Input value={dataMembers.universitas} size='large' onChange={(e) => handleInputChange('universitas', e.target.value)}/>
                            </Form.Item>
                            <Form.Item label="Fakultas">
                                <Input value={dataMembers.fakultas} size='large' onChange={(e) => handleInputChange('fakultas', e.target.value)}/>
                            </Form.Item>
                            <Form.Item label="Jurusan">
                                <Input value={dataMembers.jurusan} size='large' onChange={(e) => handleInputChange('jurusan', e.target.value)}/>
                            </Form.Item>
                            <Form.Item label="Angkatan">
                                <Input value={dataMembers.angkatan} size='large' onChange={(e) => handleInputChange('angkatan', e.target.value)}/>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Alamat">
                                <Input value={dataMembers.address} size='large' onChange={(e) => handleInputChange('address', e.target.value)}/>
                            </Form.Item>
                            <Form.Item label="Kecamatan">
                                <Input value={dataMembers.kecamatan} size='large' onChange={(e) => handleInputChange('kecamatan', e.target.value)}/>
                            </Form.Item>
                            <Form.Item label="Kota/Kabupaten">
                                <Input value={dataMembers.kota} size='large' onChange={(e) => handleInputChange('kota', e.target.value)}/>
                            </Form.Item>
                            <Form.Item label="Provinsi">
                                <Input value={dataMembers.provinsi} size='large' onChange={(e) => handleInputChange('provinsi', e.target.value)}/>
                            </Form.Item>
                        </Col>
                </Row>
            </Form>
        </Col>
    </Row>
  );
};

export default MemberDetail;