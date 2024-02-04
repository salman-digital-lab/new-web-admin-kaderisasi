import React from 'react';
import { Space, Table, TableProps, Tag } from 'antd';
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
    },
    {
      title: 'Judul Aktivitas/Kegiatan',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <Link to={'/activity/detail'}>{text}</Link>,
    },
    {
      title: 'Deskripsi',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Min. Jenjang',
      dataIndex: 'minRole',
      key: 'minRole',
    },
    {
      title: 'Register',
      dataIndex: 'registrationDate',
      key: 'registrationDate',
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
    },
    {
      title: 'Pertanyaan',
      dataIndex: 'questionnaire',
      key: 'questionnaire',
    },
    {
      title: 'Seleksi',
      dataIndex: 'selectionDate',
      key: 'selectionDate',
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
        render: (_, { publish }) => (
          <Tag color={ publish === 'published' ? 'green' : 'purple' } key={publish}>
              {publish.toUpperCase()}
          </Tag>
        )
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
          <a>View</a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={pagination}/>
    </div>
  )
}

export default SpecActivityTable;