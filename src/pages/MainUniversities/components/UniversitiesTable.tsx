import React from 'react';
import { Button, Space, Table, TableProps } from 'antd';
import { DataUniversities } from '../../../types';
import { EditOutlined } from '@ant-design/icons';

interface DataTypeProps {
  data : DataUniversities[];
}

const UniversitiesTable: React.FC<DataTypeProps>  = ({ data }) => {
    const pagination = {
        pageSize: 5,
        showSizeChanger: false,
      };

  const columns : TableProps<DataUniversities>['columns'] = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: 'Universitas',
      dataIndex: 'university',
      key: 'university',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
            <Button
                type='primary'
                size='large'
                shape='round'
                icon={ <EditOutlined /> }
                style={{ backgroundColor:'teal' }}
            > Edit </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table 
        columns={columns} 
        dataSource={data}
        pagination={pagination} 
       />
    </div>
  )
}

export default UniversitiesTable;