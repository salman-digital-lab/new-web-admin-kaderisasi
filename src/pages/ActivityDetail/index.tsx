/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ActivityDetail from "./components/ActivityDetail";
import { Space, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import RegistrantFilter from "./components/RegistrantFilter";
import { DataRegistrant } from "../../types";
import RegistrantTable from "./components/RegistrantTable";
import QuestionnaireForm from "./components/Questionnaire";
import TabPane from "antd/es/tabs/TabPane";
import { getDataRegistrants } from "../../api/services/activity";
import { useParams } from "react-router-dom";


const onChange = (key: string) => {
    console.log(key);
  };

  const largeScreenStyle = {
    width: "25vw",
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center", 
  }

  const smallScreenStyle = {
    width: "100%",
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center", 
  }

const MainActivityDetail : React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<DataRegistrant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getDataRegistrants(id);
        console.log(result)
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [])

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'DETAIL KEGIATAN',
      children: <ActivityDetail />,
    },
    {
      key: '2',
      label: 'PENDAFTARAN',
      children: (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <RegistrantFilter/>
          <RegistrantTable data={data} loading={loading}/>
        </Space>
      )
    },
    {
      key: '3',
      label: 'KUESIONER',
      children: <QuestionnaireForm />,
    },
  ];

  return (
    <Tabs 
        defaultActiveKey="1" 
        type="card" 
        tabPosition="top"
        onChange={onChange}
        tabBarStyle={{ 
          marginLeft: '-10px', 
          width: '100vw',
          height: '50px', 
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)', 
          borderRadius: '5px', 
          overflow: 'hidden',
          backgroundColor: '#fff', 
          color: '#767872'
        }}
        size="large"
      >
        {items.map(item => (
        <TabPane
          tab={<div style={window.innerWidth < 857 ? smallScreenStyle : largeScreenStyle}>{item.label}</div>}
          key={item.key}
        >
          {item.children}
        </TabPane>
      ))}
      </Tabs> 
  )
}



export default MainActivityDetail
