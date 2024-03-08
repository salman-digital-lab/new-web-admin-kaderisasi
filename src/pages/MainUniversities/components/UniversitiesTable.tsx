import React, { useState } from 'react';
import { Button, Space, Table, TableProps, Card } from 'antd';
import { DataMaster } from '../../../types';
import { EditOutlined } from '@ant-design/icons';
import UniversitiesModal from './UniversitiesModal';

interface DataTypeProps {
  data : DataMaster[];
  loading: boolean;
}

const UniversitiesTable: React.FC<DataTypeProps>  = ({ data, loading }) => {
  const [open, setOpen] = useState<boolean>(false); 
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [dataEdit, setDataEdit] = useState<{id: number | undefined, name: string}>({
    id : 0,
    name : ''
  })

  const handlePageChange = (page : number) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (_current: number, size: number) => {
    setPageSize(size);
  };

  const handleEditUniversity = (id : number | undefined, name : string) => {
    console.log('id', id, name)
    setDataEdit({ id, name })
    setOpen(true)
  }

  const columns : TableProps<DataMaster>['columns'] = [
    {
      title: 'No',
      dataIndex: 'no',
      render: (_,_record,index) => (currentPage - 1) * pageSize + index + 1,
      width: 80,
    },
    {
      title: 'Universitas',
      dataIndex: 'name',
      key: 'name',
      width: 500,
    },
    {
      title: 'Action',
      key: 'action',
      width: 500,
      render: (_name, record) => (
        <Space size="middle">
          <Button
              type='primary'
              size='large'
              shape='round'
              icon={ <EditOutlined /> }
              style={{ backgroundColor:'teal' }}
              onClick={() => handleEditUniversity(record.id, record.name)}
          > Edit </Button>
        </Space>
      ),
    },
  ];

  return (
  <>
    <Card>
      <Table 
        rowKey={(record) => record.name}
        columns={columns} 
        dataSource={data}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          onChange: handlePageChange,
          onShowSizeChange: handlePageSizeChange,
          showSizeChanger: true,
        }}  
        scroll={{ x: 500, y: 500 }}
        loading={loading}
       />
    </Card>
     <UniversitiesModal open={open} onCancel={() => setOpen(false)} data={dataEdit}/>
     </>
  )
}

export default UniversitiesTable;