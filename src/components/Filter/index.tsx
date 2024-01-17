import React, { useState } from 'react';
import { Input, Flex } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


interface FilterProps{
    onSearch : (searchText: string) => void;
}

const Filter: React.FC<FilterProps>= ({ onSearch }) => {
  const [searchText, setSearchText] = useState<string>('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <Flex vertical gap={12} style={{marginBottom:'16px'}}>
      <Input 
        size="large"
        placeholder="input search text" 
        prefix={<SearchOutlined />}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onPressEnter={handleSearch}
      />
  </Flex>
  );
}

export default Filter;