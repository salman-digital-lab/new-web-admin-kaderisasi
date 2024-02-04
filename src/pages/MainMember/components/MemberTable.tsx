import React from 'react';
import { Space, Table, TableProps, Tag } from 'antd';
import { Link } from "react-router-dom"
import { DataMembers } from '../../../types';

interface DataTypeProps {
  data : DataMembers[];
}

const MemberTable: React.FC<DataTypeProps>  = ({ data }) => {
  const pagination = {
    pageSize: 5,
    showSizeChanger: true,
  };

  const columns : TableProps<DataMembers>['columns'] = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: 'Nama Jamaah',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <Link to={'/member/detail'}>{text}</Link>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone/WA',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Perguruan Tinggi/Univ',
      dataIndex: 'univ',
      key: 'univ',
    },
    {
      title: 'Jenjang',
      dataIndex: 'jenjang',
      key: 'jenjang',
    },
    {
      title: 'SSC, LMD & SPC',
      key: 'aktivis',
      dataIndex: 'aktivis',
      render: (_, { aktivis }) => (
        <>
          {aktivis.map((aktivis) => {
            let color = aktivis.length > 5 ? 'geekblue' : 'green';
            if (aktivis === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={aktivis}>
                {aktivis.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
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

export default MemberTable;