import React from 'react';
import { Space, Table, TableProps, Tag } from 'antd';
import { Link } from "react-router-dom"
import { DataActivity } from '../../../types';

interface DataTypeProps {
  data : DataActivity[];
}

const ActivityTable: React.FC<DataTypeProps>  = ({ data }) => {

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
      title: 'Tanggal Pendaftaran',
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
      title: 'Min. Jenjang',
      dataIndex: 'minLevel',
      key: 'minLevel',
    },
    {
      title: 'Max. Jenjang',
      dataIndex: 'maxLevel',
      key: 'maxLevel',
    },
    {
      title: 'Kategori',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Register',
      key: 'register',
      dataIndex: 'register',
      render: (_, { register }) => (
        <Tag color={ register === 'opened' ? 'green' : 'red' } key={register}>
            {register.toUpperCase()}
        </Tag>
      )
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
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default ActivityTable;