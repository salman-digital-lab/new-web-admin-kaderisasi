import React, { useEffect, useState } from 'react';
import MemberTable from './components/MemberTable';
import MemberFilter from './components/MemberFilter';
import { DataMembers } from '../../types';
import { Space } from 'antd';
import axios from 'axios';

const MainAlumni: React.FC = () => {

  const [filteredData, setFilteredData] = useState<DataMembers[]>([]);

  useEffect(() => {
    getDataTable();
  }, [])

  const getDataTable = async () => {
    const user = localStorage.getItem("user");
    const parseData = JSON.parse(user || "{}");

    const token = parseData.token.token;
   
    try {
      const res = await axios.get('https://api-admin-dev.salmanitb.com/v2/profiles', {
        headers: {"Authorization" : `Bearer ${token}`}
      });
       console.log('res', res.data.data.data)
      setFilteredData(res.data.data.data);
    } catch(error) {
      console.log("Error Fetching Data")
    }
  }

  const handleSearch = (searchValue: string) => {
    const newData = filteredData.filter((item) =>
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
