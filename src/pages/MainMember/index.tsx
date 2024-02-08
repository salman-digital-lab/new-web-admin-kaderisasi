import React, { useState } from 'react';
import MemberTable from './components/MemberTable';
import MemberFilter from './components/MemberFilter';
import { DataMembers } from '../../types';
import { Space } from 'antd';

const userData: DataMembers[] = [
    {
        key: '1',
        no : 1,
        name: 'John Brown',
        email: 'johnbrown@gmail.com',
        phone : '081804065926',
        univ: 'New York No. 1 Lake Park',
        jenjang: 'aktivis',
        aktivis: ['nice', 'developer'],
      },
      {
        key: '2',
        no : 2,
        name: 'Jim Green',
        email: 'jimgreen@gmail.com',
        phone: '081804065926',
        univ: 'Massachusets',
        jenjang: 'Aktivis',
        aktivis: ['loser'],
      },
      {
        key: '3',
        no : 3,
        name: 'Joe Black',
        email : 'joeblack@gmail.com',
        phone : '081804065928',
        univ: 'Sydney No. 1 Lake Park',
        jenjang: 'Aktivis',
        aktivis: ['cool', 'teacher'],
      },
      {
        key: '4',
        no : 4,
        name: 'Dwiana Kamila Auliananda Sundoro',
        email: 'johnbrown@gmail.com',
        phone : '081804065926',
        univ: 'New York No. 1 Lake Park',
        jenjang: 'aktivis',
        aktivis: ['nice', 'developer'],
      },
      {
        key: '5',
        no : 5,
        name: 'Jim Green',
        email: 'jimgreen@gmail.com',
        phone: '081804065926',
        univ: 'Massachusets',
        jenjang: 'Aktivis',
        aktivis: ['loser'],
      },
      {
        key: '6',
        no : 6,
        name: 'Joe Black',
        email : 'joeblack@gmail.com',
        phone : '081804065928',
        univ: 'Sydney No. 1 Lake Park',
        jenjang: 'Aktivis',
        aktivis: ['cool', 'teacher'],
      },
  ];

const MainAlumni: React.FC = () => {

  const [filteredData, setFilteredData] = useState<DataMembers[]>(userData);

  const handleSearch = (searchValue: string) => {
    const newData = userData.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(newData);
  };

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <MemberFilter onSearch={handleSearch}/>
      <MemberTable data={filteredData} />
    </Space>
  );
};

export default MainAlumni;
