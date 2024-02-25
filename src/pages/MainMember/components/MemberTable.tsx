import React, { useState } from 'react';
import { Card, Space, Table, TableProps } from 'antd';
import { Link } from "react-router-dom"
import { DataMembers } from '../../../types';

interface DataTypeProps {
  data : DataMembers[];
}

const MemberTable: React.FC<DataTypeProps>  = ({ data }) => {
  console.log('data', data)
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const handlePageChange = (page : number) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (_current: number, size: number) => {
    setPageSize(size);
  };

  const columns : TableProps<DataMembers>['columns'] = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
      render: (_,record,index) => (currentPage - 1) * pageSize + index + 1,
      width: 80,
    },
    {
      title: 'Nama Jamaah',
      dataIndex: 'name',
      key: 'name',
      render: (text, data) => (
        <>
      {
        data && ( 
          <Link to={`/member/${data?.id}`}>{text}</Link>
        )
      }
    </>
    )
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (text, record) => <>{record.publicUser?.email}</>,
    },
    {
      title: 'Phone/WA',
      dataIndex: 'whatsapp',
      key: 'whatsapp',
    },
    {
      title: 'Perguruan Tinggi/Univ',
      dataIndex: 'university_id',
      key: 'university_id',
    },
    {
      title: 'Jenjang',
      dataIndex: 'level',
      key: 'level',
    },
    // {
    //   title: 'SSC, LMD & SPC',
    //   key: 'aktivis',
    //   dataIndex: 'aktivis',
    //   render: (_, { aktivis }) => (
    //     <>
    //       {
    //       aktivis?.map((aktivis) => {
    //         let color = aktivis.length > 5 ? 'geekblue' : 'green';
    //         if (aktivis === 'loser') {
    //           color = 'volcano';
    //         }
    //         return (
    //           <Tag color={color} key={aktivis}>
    //             {aktivis.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
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
      />
    </Card>
  )
}

export default MemberTable;