import React, { useEffect, useState } from 'react';
import ProvinceTable from './components/ProvinceTable';
import ProvinceFilter from './components/ProvinceFilter';
import { DataMaster } from '../../types';
import { Space } from 'antd';
import { getDataProvince } from '../../api/services/province';

const MainProvince: React.FC = () => {

  const [filteredData, setFilteredData] = useState<DataMaster[]>([]);
  const [data, setData] = useState<DataMaster[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getDataProvince();
        // console.log('result', result)
        setData(result);
        setFilteredData(result);
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
       setFilteredData(data);
     } else {
       const newData = filteredData.filter((item) =>
         item.name.toLowerCase().includes(searchValue.toLowerCase())
       );
       console.log('search', searchValue)
       setFilteredData(newData);
     }
   };

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <ProvinceFilter onSearch={handleSearch}/>
      <ProvinceTable data={filteredData} loading={loading}/>
    </Space>
  );
};

export default MainProvince;
