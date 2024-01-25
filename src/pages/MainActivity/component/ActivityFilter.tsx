import React, { useState } from 'react';
import { Input, Flex, Col, Row, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


interface FilterProps{
    onSearch : (searchText: string) => void;
}

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
            defaultValue="Semua"
            style={{ width: '100%' }}
            allowClear
            dropdownStyle={{ maxHeight: 150, overflowY: 'auto' }}
            options={[
              { value: 'semua', label: 'Semua' },
              { value: 'jamaah', label: 'Jamaah' },
              { value: 'aktivis', label: 'Aktivis' },
              { value: 'kader', label: 'Kader' },
              { value: 'kader-lanjutan', label: 'Kader-lanjutan' },
              { value: 'aktivis-kk', label: 'Aktivis-KK' },
              { value: 'kader-inventra', label: 'Kader-inventra' },
              { value: 'kader-komprof', label: 'Kader-komprof' },
            ]}
          />
        </Col>
        <Col className="gutter-row" span={6}>
            <Select
                size="large"
                defaultValue="Semua"
                style={{ width: '100%' }}
                allowClear
                dropdownStyle={{ maxHeight: 150, overflowY: 'auto' }}
                options={[
                { value: 'semua', label: 'Semua' },
                { value: 'jamaah', label: 'Jamaah' },
                { value: 'aktivis', label: 'Aktivis' },
                { value: 'kader', label: 'Kader' },
                { value: 'kader-lanjutan', label: 'Kader-lanjutan' },
                { value: 'aktivis-kk', label: 'Aktivis-KK' },
                { value: 'kader-inventra', label: 'Kader-inventra' },
                { value: 'kader-komprof', label: 'Kader-komprof' },
                ]}
          />
        </Col>
        <Col className="gutter-row" span={6}>
            <Select
                size="large"
                defaultValue="Semua"
                style={{ width: '100%' }}
                allowClear
                dropdownStyle={{ maxHeight: 150, overflowY: 'auto' }}
                options={[
                { value: 'semua', label: 'Semua' },
                { value: 'beasiswa', label: 'Beasiswa Inovator Muda Nusantara' },
                { value: 'SSC', label: 'SSC' },
                { value: 'Inventra', label: 'Inventra' },
                ]}
          />
        </Col>
      </Row>
  </Flex>
  );
}

export default MemberFilter;