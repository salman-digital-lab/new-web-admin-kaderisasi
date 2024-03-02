import React, { useEffect, useState } from 'react';
import SpecActivityTable from './components/SpecActivityTable';
import SpecActivityFilter from './components/SpecActivityFilter';
import { DataActivity } from '../../types';
import { Space } from 'antd';
import { getDataActivity } from '../../api/services/activity';

const MainSpecActivity: React.FC = () => {

  const [data, setData] = useState<DataActivity[]>([]);
  const [filteredData, setFilteredData] = useState<DataActivity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getDataActivity();
        setData(result);
        setFilteredData(result)
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [])

  const handleSearch = (searchValue: string) => {
    if (searchValue === '') {
       setData(filteredData);
     } else {
       const newData = filteredData.filter((item) =>
         item.name.toLowerCase().includes(searchValue.toLowerCase())
       );
      //  console.log('search', searchValue)
       setData(newData);
     }
   };

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <SpecActivityFilter onSearch={handleSearch}/>
      <SpecActivityTable data={data} loading={loading}/>
    </Space>
  );
};

export default MainSpecActivity;
