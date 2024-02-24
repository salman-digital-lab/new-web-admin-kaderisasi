import React from 'react';
import { Card, Space, Table, TableProps, Tag } from 'antd';
import { Link } from "react-router-dom"
import { DataActivity } from '../../../types';
interface DataTypeProps {
  data : DataActivity[];
}

const ActivityTable: React.FC<DataTypeProps>  = ({ data }) => {

  const pagination = {
    pageSize: 5,
    showSizeChanger: true,
  };

  const columns : TableProps<DataActivity>['columns'] = [
    {
      title: 'No',
      dataIndex: 'id',
      key: 'id',
      width: 100,
    },
    {
      title: 'Judul Aktivitas/Kegiatan',
      dataIndex: 'name',
      key: 'name',
      render: (name) => <Link to={'/activity/detail'}>{name}</Link>,
      width: 200,
    },
    {
      title: 'Deskripsi',
      dataIndex: 'description',
      key: 'description',
      width: 550,
    },
    {
      title: 'Min. Jenjang',
      dataIndex: 'minimum_level',
      key: 'minimum_level',
      width: 150,
    },
    {
      title: 'Register',
      dataIndex: 'registration_start',
      key: 'registration_start',
      width: 180,
      // render: (text) => {
      //   const [start] = text;
      //   return (
      //     <div>
      //       <div>{start}</div>
      //       {/* <div>{`End :${end}`}</div> */}
      //     </div>
      //   );
      // },
    },
    {
      title: 'Tipe Aktivitas',
      dataIndex: 'activity_type',
      key: 'activity_type',
      width: 150,
    },
    {
      title: 'Seleksi',
      dataIndex: 'selection_start',
      key: 'selection_start',
      width: 180,
      // render: (text) => {
      //   const [start] = text;
      //   return (
      //     <div>
      //       <div>{start}</div>
      //       {/* <div>{`End :${end}`}</div> */}
      //     </div>
      //   );
      // },
    },
    {
      title: 'Tanggal Mulai',
      dataIndex: 'activity_start',
      key: 'activity_start',
      width: 180,
      // render: (text) => {
      //   const [start] = text;
      //   return (
      //     <div>
      //       <div>{start}</div>
      //       {/* <div>{`End :${end}`}</div> */}
      //     </div>
      //   );
      // },
    },
    {
        title: 'Publish',
        key: 'is_published',
        dataIndex: 'is_published',
        width: 120,
        render: (value) => (
          <Tag color={ value ? 'green' : 'purple' } key={value}>
              { value ? 'false' : 'true'}
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

export default ActivityTable;