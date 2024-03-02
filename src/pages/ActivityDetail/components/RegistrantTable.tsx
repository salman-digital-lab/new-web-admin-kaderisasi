import React from 'react';
import { Card, Space, Table, TableProps, Tag } from 'antd';
import { Link } from "react-router-dom"
import { DataRegistrant } from '../../../types';

interface DataTypeProps {
  data : DataRegistrant[];
  loading: boolean;
}

const RegistrantTable: React.FC<DataTypeProps>  = ({ data, loading }) => {
  const pagination = {
    pageSize: 5,
    showSizeChanger: true,
  };

  const columns : TableProps<DataRegistrant>['columns'] = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
      width: 80,
    },
    {
      title: 'Nama Lengkap',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <Link to={'/member/detail'}>{text}</Link>,
      width: 200,
    },
    {
      title: 'Jenjang',
      dataIndex: 'jenjang',
      key: 'jenjang',
      width: 150,
    },
    {
      title: 'Email & Whatsapp',
      dataIndex: 'email',
      key: 'email',
      width: 150,
    },
    {
      title: 'Perguruan Tinggi',
      dataIndex: 'univ',
      key: 'univ',
      width: 150,
    },
    {
        title: 'Status Pendaftaran',
        key: 'register',
        dataIndex: 'register',
        width: 120,
        render: (_, { register }) => (
          <Tag color={ register === 'registered' ? 'purple' : 'red' } key={register}>
              {register.toUpperCase()}
          </Tag>
        )
    },
    {
      title: 'Action',
      key: 'action',
      width: 100,
      render: () => (
        <Space size="middle">
          <a>View</a>
        </Space>
      ),
    },
  ];

  return (
    <Card>
      <Table 
        columns={columns} 
        dataSource={data} 
        pagination={pagination} 
        scroll={{ x: 1500, y: 400 }}
        loading={loading}
        />
    </Card>
  )
}

export default RegistrantTable;