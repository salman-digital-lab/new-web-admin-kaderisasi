import React, { useState } from 'react';
import ProvinceTable from './components/ProvinceTable';
import ProvinceFilter from './components/ProvinceFilter';
import { DataMaster } from '../../types';
import { Space } from 'antd';

const userData: DataMaster[] = [
    {
        key: '1',
        no : 1,
        name: 'Jawa Barat'
      },
      {
        key: '2',
        no : 2,
        name: 'Jawa Timur',
      },
      {
        key: '3',
        no : 3,
        name: 'Bali',
      },
      {
        key: '4',
        no : 4,
        name: 'Aceh',
      },
      {
        key: '5',
        no : 5,
        name: 'Banten',
      },
      {
        key: '6',
        no : 6,
        name: 'Sumatera Utara',
      },
      {
        key: '7',
        no : 7,
        name: 'Daerah Istimewa Yogyakarta',
      },
  ];

const MainProvince: React.FC = () => {

  const [filteredData, setFilteredData] = useState<DataMaster[]>(userData);

  const handleSearch = (searchValue: string) => {
    const newData = userData.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(newData);
  };

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <ProvinceFilter onSearch={handleSearch}/>
      <ProvinceTable data={filteredData} />
    </Space>
  );
};

export default MainProvince;
