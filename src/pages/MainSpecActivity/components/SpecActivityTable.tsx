import React from 'react';
import { Card, Space, Table, TableProps, Tag } from 'antd';
import { Link } from "react-router-dom"
import { DataActivity } from '../../../types';

interface DataTypeProps {
  data : DataActivity[];
}

const SpecActivityTable: React.FC<DataTypeProps>  = ({ data }) => {
  const pagination = {
    pageSize: 5,
    showSizeChanger: true,
  };

  const columns : TableProps<DataActivity>['columns'] = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
      width: 80,
    },
    {
      title: 'Judul Aktivitas/Kegiatan',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <Link to={'/activity/detail'}>{text}</Link>,
      width: 200,
    },
    {
      title: 'Deskripsi',
      dataIndex: 'description',
      key: 'description',
      width: 150,
    },
    {
      title: 'Min. Jenjang',
      dataIndex: 'minRole',
      key: 'minRole',
      width: 150,
    },
    {
      title: 'Register',
      dataIndex: 'registrationDate',
      key: 'registrationDate',
      width: 180,
      render: (text) => {
        const [start, end] = text.split('End :');
        return (
          <div>
            <div>{start}</div>
            <div>{`End :${end}`}</div>
          </div>
        );
      },
    },
    {
      title: 'Tipe Aktivitas',
      dataIndex: 'activityType',
      key: 'activityType',
      width: 150,
    },
    {
      title: 'Pertanyaan',
      dataIndex: 'questionnaire',
      key: 'questionnaire',
      width: 150,
    },
    {
      title: 'Seleksi',
      dataIndex: 'selectionDate',
      key: 'selectionDate',
      width: 180,
      render: (text) => {
        const [start, end] = text.split('End :');
        return (
          <div>
            <div>{start}</div>
            <div>{`End :${end}`}</div>
          </div>
        );
      },
    },
    {
      title: 'Tanggal Mulai',
      dataIndex: 'activityDate',
      key: 'activityDate',
      width: 180,
      render: (text) => {
        const [start, end] = text.split('End :');
        return (
          <div>
            <div>{start}</div>
            <div>{`End :${end}`}</div>
          </div>
        );
      },
    },
    {
        title: 'Publish',
        key: 'publish',
        dataIndex: 'publish',
        width: 120,
        render: (_, { publish }) => (
          <Tag color={ publish === 'published' ? 'green' : 'purple' } key={publish}>
              {publish.toUpperCase()}
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
      <Table columns={columns} dataSource={data} pagination={pagination} scroll={{ x: 1500, y: 400 }}/>
    </Card>
  )
}

export default SpecActivityTable;