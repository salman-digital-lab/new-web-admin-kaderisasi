import React, { useState } from 'react';
import { Input, Flex, Col, Row, DatePicker, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


interface FilterProps{
    onSearch : (searchText: string) => void;
}

const { RangePicker } = DatePicker;

const MemberFilter: React.FC<FilterProps>= ({ onSearch }) => {
  const [searchText, setSearchText] = useState<string>('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <Flex vertical gap={12} style={{marginBottom:'16px'}}>
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
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
          <Select
            size="large"
            defaultValue=""
            style={{ width: '100%' }}
            allowClear
            options={[
              { value: 'wanita', label: 'Wanita' },
              { value: 'pria', label: 'Pria' },
            ]}
          />
        </Col>
        <Col className="gutter-row" span={6}>
          <RangePicker 
            size="large"
          />
        </Col>
        <Col className="gutter-row" span={6}>
            <Input 
              size="large"
              placeholder="input search text" 
              prefix={<SearchOutlined />}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onPressEnter={handleSearch}
            />
        </Col>
      </Row>
  </Flex>
  );
}

export default MemberFilter;