import React, { useState } from 'react';
import { Input, Flex, Col, Row, Button, Modal, Form, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { PlusCircleFilled } from '@ant-design/icons';

interface FilterProps{
    onSearch : (searchText: string) => void;
}

const { Option } = Select;

const CityFilter: React.FC<FilterProps>= ({ onSearch }) => {
  const [searchText, setSearchText] = useState<string>('');
  const [dataAdd, setDataAdd] = useState<boolean>(false); 

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <Flex vertical gap={12} style={{marginBottom:'16px'}}>
      <Row gutter={16}>
        <Col className="gutter-row" span={18}>
            <Input 
              size="large"
              placeholder="nama Kabupaten/Kota" 
              prefix={<SearchOutlined />}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onPressEnter={handleSearch}
            />
        </Col>
        <Col className="gutter-row" span={6}>
            <Button 
              type='primary' 
              size='large' 
              icon={<PlusCircleFilled />} 
              block
              onClick={() => setDataAdd(true)}
              >
               Kabupaten/Kota
            </Button>
            <Modal
            title="Tambah Kabupaten/Kota"
            centered
            width={'40vw'}
            mask={false}
            open={dataAdd}
            onOk={() => setDataAdd(false)}
            onCancel={() => setDataAdd(false)}
          >
            <Form layout='vertical'>
              <Form.Item label='Provinsi'>
                  <Select placeholder="Nama Provinsi">
                    <Option value="1">Jawa Barat</Option>
                    <Option value="2">Banten</Option>
                    <Option value="3">Aceh</Option>
                  </Select>
              </Form.Item>
              <Form.Item label='Kabupaten/Kota'>
                <Input placeholder="Nama Kabupaten/Kota*" size='large'/>
              </Form.Item>
            </Form>
          </Modal>
        </Col>
      </Row>
  </Flex>
  );
}

export default CityFilter;