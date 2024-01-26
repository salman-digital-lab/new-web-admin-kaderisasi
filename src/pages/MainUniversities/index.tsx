import React, { useState } from 'react';
import UniversitiesTable from './components/UniversitiesTable';
import UniversitiesFilter from './components/UniversitiesFilter';
import { DataUniversities } from '../../types';

const userData: DataUniversities[] = [
    {
        key: '1',
        no : 1,
        university: 'STIKES Cianjur'
      },
      {
        key: '2',
        no : 2,
        university: 'International Open University',
      },
      {
        key: '3',
        no : 3,
        university: 'Institut Teknologi Telkom Surabaya',
      },
      {
        key: '4',
        no : 4,
        university: 'Universitas Wanita Internasional',
      },
      {
        key: '5',
        no : 5,
        university: 'STAI Muttaqin Purwakarta',
      },
      {
        key: '6',
        no : 6,
        university: 'STAI al Muhajirin Purwakarta',
      },
      {
        key: '7',
        no : 7,
        university: 'Universitas Buana Perjuangan Karawang',
      },
  ];

const MainUniversities: React.FC = () => {

  const [filteredData, setFilteredData] = useState<DataUniversities[]>(userData);

  const handleSearch = (searchValue: string) => {
    const newData = userData.filter((item) =>
      item.university.toLowerCase().includes(searchValue.toLowerCase())
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
