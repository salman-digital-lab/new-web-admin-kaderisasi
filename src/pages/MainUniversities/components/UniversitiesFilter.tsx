import React, { useState } from 'react';
import { Input, Flex, Col, Row, Button, Card } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { PlusCircleFilled } from '@ant-design/icons';
import UniversitiesModal from './UniversitiesModal';

interface FilterProps{
    onSearch : (searchText: string) => void;
}

const UniversitiesFilter: React.FC<FilterProps>= ({ onSearch }) => {
  const [searchText, setSearchText] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false); 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    onSearch(e.target.value);
  };

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
              allowClear 
              prefix={<SearchOutlined />}
              value={searchText}
              onChange={handleInputChange}
              onBlur={handleSearch}
            />
        </Col>
        <Col className="gutter-row" span={6}>
            <Button 
                type='primary' 
                size='large' 
                icon={<PlusCircleFilled />} 
                block
                onClick={() => setOpen(true)}
              >
               Universitas
            </Button>
            <UniversitiesModal open={open} onCancel={() => setOpen(false)} />
        </Col>
      </Row>
  </Flex>
    </Card>
  );
}

export default UniversitiesFilter;