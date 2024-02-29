import React, { useEffect, useState } from 'react';
import UniversitiesTable from './components/UniversitiesTable';
import UniversitiesFilter from './components/UniversitiesFilter';
import { DataMaster } from '../../types';
import { Space } from 'antd';
import { getDataUniversity } from '../../api/services/university';

const MainUniversities: React.FC = () => {

  const [filteredData, setFilteredData] = useState<DataMaster[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getDataUniversity();
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
    const newData = filteredData.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(newData);
  };

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <UniversitiesFilter onSearch={handleSearch}/>
      <UniversitiesTable data={filteredData} loading={loading}/>
    </Space>
  );
};

export default MainUniversities;
