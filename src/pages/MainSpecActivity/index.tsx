import React, { useEffect, useState } from 'react';
import SpecActivityTable from './components/SpecActivityTable';
import SpecActivityFilter from './components/SpecActivityFilter';
import { DataActivity } from '../../types';
import { Space } from 'antd';
import axios from 'axios';

const MainSpecActivity: React.FC = () => {

  const [getData, setGetData] = useState<DataActivity[]>([]);

  useEffect(() => {
    getDataTable();
  }, [])

  const getDataTable = async () => {
    const user = localStorage.getItem("user");
    const parseData = JSON.parse(user || "{}");

    const token = parseData.token.token;
   
    try {
      const res = await axios.get('https://api-admin-dev.salmanitb.com/v2/activities', {
        headers: {"Authorization" : `Bearer ${token}`}
      });
      setGetData(res.data.data.data);
    } catch(error) {
      console.log("Error Fetching Data")
    }
  }

  const handleSearch = (searchValue: string) => {
    const newData = getData.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setGetData(newData);
  };

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <SpecActivityFilter onSearch={handleSearch}/>
      <SpecActivityTable data={getData} />
    </Space>
  );
};

export default MainSpecActivity;
