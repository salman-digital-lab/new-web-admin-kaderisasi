import React, { useState } from 'react';
import { Input, Flex, Col, Row, Button, Modal, Card } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { PlusCircleFilled } from '@ant-design/icons';

interface FilterProps{
    onSearch : (searchText: string) => void;
}

const UniversitiesFilter: React.FC<FilterProps>= ({ onSearch }) => {
  const [searchText, setSearchText] = useState<string>('');
  const [dataAdd, setDataAdd] = useState<boolean>(false); 

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <Card style={{ height: 90 }}>
      <Flex vertical gap={12} style={{marginBottom:'16px'}}>
      <Row gutter={16}>
        <Col className="gutter-row" span={18}>
            <Input 
              size="large"
              placeholder="nama universitas" 
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
               Universitas
            </Button>
            <Modal
            title="Tambah Universitas"
            centered
            width={'40vw'}
            mask={false}
            open={dataAdd}
            onOk={() => setDataAdd(false)}
            onCancel={() => setDataAdd(false)}
          >
            <Input placeholder="Nama Universitas*" size='large' style={{margin:'20px 0px 20px'}}/>
          </Modal>
        </Col>
      </Row>
  </Flex>
    </Card>
  );
}

export default UniversitiesFilter;