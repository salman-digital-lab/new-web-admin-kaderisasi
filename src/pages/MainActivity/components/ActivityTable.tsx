import React, { useState } from 'react';
import { Card, Space, Table, TableProps, Tag } from 'antd';
import { Link } from "react-router-dom"
import { DataActivity } from '../../../types';
import { renderUserLevel } from '../../../constants/render';
interface DataTypeProps {
  data : DataActivity[];
  loading: boolean;
}

const ActivityTable: React.FC<DataTypeProps>  = ({ data, loading }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const handlePageChange = (page : number) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (_current: number, size: number) => {
    setPageSize(size);
  };

  const columns : TableProps<DataActivity>['columns'] = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
      render: (_,_record,index) => (currentPage - 1) * pageSize + index + 1,
      width: 100,
    },
    {
      title: 'Judul Aktivitas/Kegiatan',
      dataIndex: 'name',
      key: 'name',
      render: (name, record) => <Link to={`/activity/${record.id}`}>{name}</Link>,
      width: 200,
    },
    {
      title: 'Deskripsi',
      dataIndex: 'description',
      key: 'description',
      render : (desc) => <>{desc.substring(0, 250)}...</>,
      width: 550,
    },
    {
      title: 'Min. Jenjang',
      dataIndex: 'minimum_level',
      key: 'minimum_level',
      width: 150,
      render : (_text, data) => <>{renderUserLevel(data.minimum_level)}</>
    },
    {
      title: 'Register',
      dataIndex: ['registration_start', 'registration_end'],
      key: 'registration_start',
      width: 180,
      render: (_text, record) => {
        return (
          <div>
            <div>{`Start : ${record.registration_start}`}</div>
            <div>{`End :${record.registration_end}`}</div>
          </div>
        );
      },
    },
    {
      title: 'Tipe Aktivitas',
      dataIndex: 'activity_type',
      key: 'activity_type',
      width: 150,
    },
    {
      title: 'Seleksi',
      dataIndex: ['selection_start', 'selection_end'],
      key: 'selection_start',
      width: 180,
      render: (_text, record) => {
        return (
          <div>
            <div>{`Start : ${record.selection_start}`}</div>
            <div>{`End :${record.selection_end}`}</div>
          </div>
        );
      },
    },
    {
      title: 'Tanggal Mulai',
      dataIndex: ['activity_start', 'activity_end'],
      key: 'activity_start',
      width: 180,
      render: (_text, record) => {
        return (
          <div>
            <div>{`Start : ${record.activity_start}`}</div>
            <div>{`End :${record.activity_end}`}</div>
          </div>
        );
      },
    },
    {
        title: 'Publish',
        key: 'is_published',
        dataIndex: 'is_published',
        width: 120,
        render: (value) => (
          <Tag color={ value == 0 ? 'purple' : 'green' } key={value}>
              { value == 0 ? 'false' : 'true' }
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
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          onChange: handlePageChange,
          onShowSizeChange: handlePageSizeChange,
          showSizeChanger: true,
        }} 
        scroll={{ x: 1500, y: 500 }}
        loading={loading}
        />
    </Card>
  )
}

export default ActivityTable;