import React, { useEffect, useState } from 'react';
import {
  Form,
  Input,
  Avatar,
  Col,
  Row,
  Typography,
  Button,
  Card,
} from 'antd';
import { EditOutlined, StopOutlined, ArrowLeftOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useParams } from "react-router-dom"
import { DataMemberDetail } from '../../../types';
import axios from 'axios';

const { Title, Text } = Typography;

const MemberDetail: React.FC = () => {
  const { id } = useParams();
  console.log(id);
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);
  const [dataMembers, setDataMembers] = useState<DataMemberDetail>({
        email: '',
        gender: '',
        line: '',
        whatsapp: '',
        instagram: '',
        university: '',
        major: '',
        intake_year: 0,
        city: '',
        province: '',
        name: '',
  })

  useEffect(() => {
    getDataTable();
  }, [])

  const getDataTable = async () => {
    const user = localStorage.getItem("user");
    const parseData = JSON.parse(user || "{}");

    const token = parseData.token.token;
   
    try {
      const res = await axios.get(`https://api-admin-dev.salmanitb.com/v2/profiles/${id}`, {
        headers: {"Authorization" : `Bearer ${token}`}
      });
       console.log('res', res.data.data.profile)
      setDataMembers(prevState => ({
        ...prevState,
        email: res.data.data.userData.email,
        name: res.data.data.profile[0]?.name,
        gender: res.data.data.profile[0]?.gender,
        line: res.data.data.profile[0]?.line,
        whatsapp: res.data.data.profile[0]?.whatsapp,
        instagram: res.data.data.profile[0]?.instagram,
        university: res.data.data.profile[0]?.university_id,
        major: res.data.data.profile[0]?.major,
        intake_year: res.data.data.profile[0]?.intake_year,
        city: res.data.data.profile[0]?.city?.name,
        province: res.data.data.profile[0]?.province?.name,
    }));
    } catch(error) {
      console.log("Error Fetching Data")
    }
  }

  const handleInputChange = (key: keyof DataMemberDetail, value: string) => {
    setDataMembers((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  return (
    <Card style={{ height: '100vh' }}>
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
                    <Title level={4}>{dataMembers.name}</Title>
                    <Text type="secondary">{dataMembers.university}</Text>
                    <Text type="secondary">{dataMembers.gender}</Text>
                </Col>
                <Col span={24} style={{ position: 'absolute', top: 0, right: 0, padding: 20 }}>
                    <Button
                        type='primary'
                        size='large'
                        onClick={() => setComponentDisabled(!componentDisabled)}
                        style={{ marginRight: 10 }}
                        icon={ !componentDisabled ? <EditOutlined /> : <></>}
                    >
                       { !componentDisabled ? 'Edit' : 'Simpan' } 
                    </Button>
                    <Button
                        type='primary'
                        size='large'
                        danger
                        icon={<StopOutlined />}
                    >
                     Blokir
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
                            <Form.Item label="Whatsapp">
                                <Input value={dataMembers.whatsapp} size='large' onChange={(e) => handleInputChange('whatsapp', e.target.value)}/>
                            </Form.Item>
                            <Form.Item label="Instagram">
                                <Input value={dataMembers.instagram} size='large' onChange={(e) => handleInputChange('instagram', e.target.value)}/>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Perguruan Tinggi">
                                <Input value={dataMembers.university} size='large' onChange={(e) => handleInputChange('university', e.target.value)}/>
                            </Form.Item>
                            <Form.Item label="Jurusan">
                                <Input value={dataMembers.major} size='large' onChange={(e) => handleInputChange('major', e.target.value)}/>
                            </Form.Item>
                            <Form.Item label="Angkatan">
                                <Input value={dataMembers.intake_year} size='large' onChange={(e) => handleInputChange('intake_year', e.target.value)}/>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Kota/Kabupaten">
                                <Input value={dataMembers.city} size='large' onChange={(e) => handleInputChange('city', e.target.value)}/>
                            </Form.Item>
                            <Form.Item label="Provinsi">
                                <Input value={dataMembers.province} size='large' onChange={(e) => handleInputChange('province', e.target.value)}/>
                            </Form.Item>
                            <Form.Item label="ID Line">
                                <Input value={dataMembers.line} size='large' onChange={(e) => handleInputChange('line', e.target.value)}/>
                            </Form.Item>
                        </Col>
                </Row>
            </Form>
        </Col>
    </Row>
    </Card>
  );
};

export default MemberDetail;