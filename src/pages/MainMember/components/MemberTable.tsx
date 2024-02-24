import React, { useEffect } from 'react';
import { Card, Space, Table, TableProps, Tag } from 'antd';
import { Link } from "react-router-dom"
import { DataMembers } from '../../../types';
import axios from 'axios';

interface DataTypeProps {
  data : DataMembers[];
}

const MemberTable: React.FC<DataTypeProps>  = ({ data }) => {
  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    await axios.get('https://api-admin-dev.salmanitb.com/v2/profiles', {
    }).then(
      res => {
        console.log('res', res);
      }
    )
  }

  const pagination = {
    pageSize: 5,
    showSizeChanger: true,
  };

  const columns : TableProps<DataMembers>['columns'] = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
      width: 80,
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
          {
          aktivis?.map((aktivis) => {
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

export default MemberTable;