import React, { useState } from 'react';
import ActivityTable from './components/ActivityTable';
import ActivityFilter from './components/ActivityFilter';
import { DataActivity } from '../../types';

const userData: DataActivity[] = [
    {
        key: '1',
        no : 1,
        title: 'Pendaftaran Anggota Sedekah Berjamaah Batch 6',
        description: 'Pendaftaran',
        registrationDate: 'Start : 2023-02-02 End : 2023-02-15',
        minRole: 'Aktivis',
        activityType: 'Kegiatan Umum',
        questionnaire: 'Open Recruitment',
        selectionDate: 'Start : 2023-02-02 End : 2023-02-15',
        activityDate: 'Start : 2023-02-02 End : 2023-02-15',
        publish : 'published',
      },
      {
        key: '2',
        no : 2,
        title: 'Pendaftaran Anggota Sedekah Berjamaah Batch 6',
        description: 'Pendaftaran',
        registrationDate: 'Start : 2023-02-02 End : 2023-02-15',
        minRole: 'Aktivis',
        activityType: 'Kegiatan Umum',
        questionnaire: 'Open Recruitment',
        selectionDate: 'Start : 2023-02-02 End : 2023-02-15',
        activityDate: 'Start : 2023-02-02 End : 2023-02-15',
        publish : 'published',
      },
      {
        key: '3',
        no : 3,
        title: 'Pendaftaran Anggota Sedekah Berjamaah Batch 6',
        description: 'Pendaftaran',
        registrationDate: 'Start : 2023-02-02 End : 2023-02-15',
        minRole: 'Aktivis',
        activityType: 'Kegiatan Umum',
        questionnaire: 'Open Recruitment',
        selectionDate: 'Start : 2023-02-02 End : 2023-02-15',
        activityDate: 'Start : 2023-02-02 End : 2023-02-15',
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
