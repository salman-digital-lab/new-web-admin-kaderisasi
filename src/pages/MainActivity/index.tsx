import React, { useState } from 'react';
import ActivityTable from './component/ActivityTable';
import ActivityFilter from './component/ActivityFilter';
import { DataActivity } from '../../types';

const userData: DataActivity[] = [
    {
        key: '1',
        no : 1,
        title: 'Pendaftaran Anggota Sedekah Berjamaah Batch 6',
        registrationDate: 'Start : 2023-02-02 End : 2023-02-15',
        minLevel: 'Aktivis',
        maxLevel: 'Kader-lanjutan',
        category: 'Open Recruitment',
        register: 'opened',
        publish : 'published',
      },
      {
        key: '2',
        no : 2,
        title: 'Pendaftaran Tim Sedekah Berjamaah',
        registrationDate: 'Start : 2023-02-04 End : 2023-02-10',
        minLevel: 'Aktivis',
        maxLevel: 'Kader-lanjutan',
        category: 'Open Recruitment',
        register: 'closed',
        publish : 'unpublished',
      },
      {
        key: '3',
        no : 3,
        title: 'Pendaftaran I-Class Public Speaking: Master of Ceremony',
        registrationDate: 'Start : 2023-01-23 End : 2023-02-03',
        minLevel: 'Jamaah',
        maxLevel: 'Kader-lanjutan',
        category: 'Aktualisasi Diri',
        register: 'closed',
        publish : 'published',
      },
  ];

const MainActivity: React.FC = () => {

  const [filteredData, setFilteredData] = useState<DataActivity[]>(userData);

  const handleSearch = (searchValue: string) => {
    const newData = userData.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(newData);
  };

  return (
    <div>
      <ActivityFilter onSearch={handleSearch}/>
      <ActivityTable data={filteredData} />
    </div>
  );
};

export default MainActivity;
