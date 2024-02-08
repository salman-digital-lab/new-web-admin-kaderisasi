import React, { useState } from 'react';
import { Button, Space, Table, TableProps, Modal, Input, Form, Select, Card } from 'antd';
import { DataMaster } from '../../../types';
import { EditOutlined } from '@ant-design/icons';

interface DataTypeProps {
  data : DataMaster[];
}

const { Option } = Select;

const CityTable: React.FC<DataTypeProps>  = ({ data }) => {
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
      width: 80,
    },
    {
      title: 'Nama Provinsi',
      dataIndex: 'province_id',
      key: 'province_id',
    },
    {
      title: 'Nama Kota',
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
            title="Edit Kabupaten/Kota"
            centered
            width={'40vw'}
            mask={false}
            open={dataEdit}
            onOk={() => setDataEdit(false)}
            onCancel={() => setDataEdit(false)}
          >
            <Form layout='vertical'>
              <Form.Item label="Provinsi">
                <Select placeholder="Nama Provinsi" defaultValue="Jawa Barat">
                    <Option value="1">Jawa Barat</Option>
                    <Option value="2">Banten</Option>
                    <Option value="3">Aceh</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Kabupaten/Kota">
                <Input defaultValue="Bandung" size='large'/>
              </Form.Item>
            </Form>
          </Modal>
        </Space>
      ),
    },
  ];

  return (
    <Card>
      <Table 
        columns={columns} 
        dataSource={data}
        pagination={pagination}
        scroll={{ x: 500, y: 400 }} 
       />
    </Card>
  )
}

export default CityTable;