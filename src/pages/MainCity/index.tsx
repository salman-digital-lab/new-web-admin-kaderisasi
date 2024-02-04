import React, { useState } from 'react';
import CityTable from './components/CityTable';
import CityFilter from './components/CityFilter';
import { DataMaster } from '../../types';

const userData: DataMaster[] = [
    {
        key: '1',
        no : 1,
        province_id: 'Jawa Barat',
        name: 'Bandung'
      },
      {
        key: '2',
        no : 2,
        province_id: 'Daerah Istimewwa Yogyakarta',
        name: 'Gunung Kidul',
      },
      {
        key: '3',
        no : 3,
        province_id: 'Jawa Barat',
        name: 'DKI Jakarta',
      },
      {
        key: '4',
        no : 4,
        province_id: 'Banten',
        name: 'Tangerang',
      },
      {
        key: '5',
        no : 5,
        province_id: 'Sumatera Barat',
        name: 'Padang',
      },
      {
        key: '6',
        no : 6,
        province_id: 'Aceh',
        name: 'Aceh',
      },
      {
        key: '7',
        no : 7,
        province_id: 'Manado',
        name: 'Sulawesi Utara',
      },
  ];

const MainCity: React.FC = () => {

  const [filteredData, setFilteredData] = useState<DataMaster[]>(userData);

  const handleSearch = (searchValue: string) => {
    const newData = userData.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(newData);
  };

  return (
    <div>
      <CityFilter onSearch={handleSearch}/>
      <CityTable data={filteredData} />
    </div>
  );
};

export default MainCity;
