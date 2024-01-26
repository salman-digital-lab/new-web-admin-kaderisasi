import React, { useState } from 'react';
import { Input, Flex, Col, Row, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { PlusCircleFilled } from '@ant-design/icons';

interface FilterProps{
    onSearch : (searchText: string) => void;
}

const UniversitiesFilter: React.FC<FilterProps>= ({ onSearch }) => {
  const [searchText, setSearchText] = useState<string>('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <Flex vertical gap={12} style={{marginBottom:'16px'}}>
      <Row gutter={16}>
        <Col className="gutter-row" span={18}>
            <Input 
              size="large"
              placeholder="input search text" 
              prefix={<SearchOutlined />}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onPressEnter={handleSearch}
            />
        </Col>
        <Col className="gutter-row" span={6}>
            <Button type='primary' size='large' icon={<PlusCircleFilled />} block>
               Universitas
            </Button>
        </Col>
      </Row>
  </Flex>
  );
}

export default UniversitiesFilter;