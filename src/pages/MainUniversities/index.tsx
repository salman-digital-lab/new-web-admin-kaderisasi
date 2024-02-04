import React, { useState } from 'react';
import UniversitiesTable from './components/UniversitiesTable';
import UniversitiesFilter from './components/UniversitiesFilter';
import { DataMaster } from '../../types';

const userData: DataMaster[] = [
    {
        key: '1',
        no : 1,
        name: 'STIKES Cianjur'
      },
      {
        key: '2',
        no : 2,
        name: 'International Open University',
      },
      {
        key: '3',
        no : 3,
        name: 'Institut Teknologi Telkom Surabaya',
      },
      {
        key: '4',
        no : 4,
        name: 'Universitas Wanita Internasional',
      },
      {
        key: '5',
        no : 5,
        name: 'STAI Muttaqin Purwakarta',
      },
      {
        key: '6',
        no : 6,
        name: 'STAI al Muhajirin Purwakarta',
      },
      {
        key: '7',
        no : 7,
        name: 'Universitas Buana Perjuangan Karawang',
      },
  ];

const MainUniversities: React.FC = () => {

  const [filteredData, setFilteredData] = useState<DataMaster[]>(userData);

  const handleSearch = (searchValue: string) => {
    const newData = userData.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(newData);
  };

  return (
    <div>
      <UniversitiesFilter onSearch={handleSearch}/>
      <UniversitiesTable data={filteredData} />
    </div>
  );
};

export default MainUniversities;
