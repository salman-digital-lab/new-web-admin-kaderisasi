import React, { useState } from 'react';
import { Button, Space, Table, TableProps, Modal, Input } from 'antd';
import { DataMaster } from '../../../types';
import { EditOutlined } from '@ant-design/icons';

interface DataTypeProps {
  data : DataMaster[];
}

const ProvinceTable: React.FC<DataTypeProps>  = ({ data }) => {
  const [dataEdit, setDataEdit] = useState<boolean>(false);

    const pagination = {
        pageSize: 5,
        showSizeChanger: true,
      };

  const columns : TableProps<DataMaster>['columns'] = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: 'Nama',
      dataIndex: 'name',
      key: 'name',
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
                onClick={() => setDataEdit(true)}
            > Edit </Button>
            <Modal
            title="Edit Provinsi"
            centered
            width={'40vw'}
            mask={false}
            open={dataEdit}
            onOk={() => setDataEdit(false)}
            onCancel={() => setDataEdit(false)}
          >
            <Input defaultValue="Jawa Barat" size='large' style={{margin:'20px 0px 20px'}}/>
          </Modal>
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

export default ProvinceTable;