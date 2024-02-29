import React, { useEffect, useState } from 'react';
import ActivityTable from './components/ActivityTable';
import ActivityFilter from './components/ActivityFilter';
import { DataActivity } from '../../types';
import { Space } from 'antd';
import { getDataActivity } from '../../api/services/activity';


const MainActivity: React.FC = () => {

  const [data, setData] = useState<DataActivity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getDataActivity();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [])

  const handleSearch = (searchValue: string) => {
    const newData = data.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(newData);
  };

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <ActivityFilter onSearch={handleSearch}/>
      <ActivityTable data={data} loading={loading}/>
    </Space>
  );
};

export default MainActivity;
