import React, { useEffect, useState } from 'react';
import MemberTable from './components/MemberTable';
import MemberFilter from './components/MemberFilter';
import { DataMembers } from '../../types';
import { Space } from 'antd';
import { getDataMember } from '../../api/services/member';
import { getDataUniversity } from '../../api/services/university';

const MainAlumni: React.FC = () => {

  const [filteredData, setFilteredData] = useState<DataMembers[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getDataMember();
        const univRes = await getDataUniversity();

        const universityData: DataMembers[] = result.map((data: DataMembers) => {
          const university = univRes.find(( univ : DataMembers) => univ.id == data.university_id);
          const universityName = university ? university.name : '-';
          return { ...data, universityName };
        });
        

        setFilteredData(universityData);

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
      <MemberFilter onSearch={handleSearch}/>
      <MemberTable data={filteredData} loading={loading}/>
    </Space>
  );
};

export default MainAlumni;
