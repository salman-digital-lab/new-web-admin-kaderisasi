import React, { useEffect, useState } from 'react';
import CityTable from './components/CityTable';
import CityFilter from './components/CityFilter';
import { DataMaster } from '../../types';
import { Space } from 'antd';
import { getDataCity } from '../../api/services/city';
import { getDataProvince } from '../../api/services/province';

const MainCity: React.FC = () => {

  const [filteredData, setFilteredData] = useState<DataMaster[]>([]);
  const [data, setData] = useState<DataMaster[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const citiesData = await getDataCity();
        const provincesData = await getDataProvince();

        const updatedCities: DataMaster[] = citiesData.map((city: DataMaster) => {
          const province = provincesData.find((province : DataMaster) => province.id === city.province_id);
          const provinceName = province ? province.name : 'Unknown Province';
          return { ...city, provinceName };
        });
        setData(updatedCities);
        setFilteredData(updatedCities);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
      <CityFilter onSearch={handleSearch}/>
      <CityTable data={filteredData} loading={loading}/>
    </Space>
  );
};

export default MainCity;
