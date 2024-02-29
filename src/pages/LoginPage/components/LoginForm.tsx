import React, { useState } from 'react';
import { Button, Form, Input, Row, Col, Card, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../api/auth';

// const onFinish = (values: any) => {
//   console.log('Success:', values);
// };

// const onFinishFailed = (errorInfo: any) => {
//   console.log('Failed:', errorInfo);
// };

type FieldType = {
  email?: string;
  password?: string;
};

const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const onFinish = async (values : FieldType) => {
    setLoading(true);
    try{
       await loginUser(values);
       message.success('Login successful');
       navigate('/dashboard');
    } catch (error) {
      message.error('An error occured')
    } finally {
      setLoading(false);
    }
  }
  
  return (
  <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col xs={20} sm={16} md={12} lg={8}>
        <Card bordered={false} style={{ width: '100%' }}>
            <Form
              name="basic"
              style={{ maxWidth: 600, margin:'6vh' }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input placeholder="Email" style={{ height: '6vh' }}/>
              </Form.Item>

              <Form.Item<FieldType>
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password placeholder='Password' style={{ height: '6vh' }}/>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading} style={{ width: '100%', height: '6vh' }}>
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Card>
      </Col>
    </Row>
  )
};

export default LoginForm;