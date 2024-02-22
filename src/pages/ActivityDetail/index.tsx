import React from "react";
import ActivityDetail from "./components/ActivityDetail";
import { Space, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import RegistrantFilter from "./components/RegistrantFilter";
import { DataRegistrant } from "../../types";
import RegistrantTable from "./components/RegistrantTable";
import QuestionnaireForm from "./components/Questionnaire";
import TabPane from "antd/es/tabs/TabPane";

const userData: DataRegistrant[] = [
  {
    key: '1',
    no : 1,
    name: 'John Brown',
    email: 'johnbrown@gmail.com',
    phone : '081804065926',
    univ: 'New York No. 1 Lake Park',
    jenjang: 'Aktivis',
    register: 'registered',
  },
  {
    key: '2',
    no : 2,
    name: 'Jim Green',
    email: 'jimgreen@gmail.com',
    phone: '081804065926',
    univ: 'Massachusets',
    jenjang: 'Aktivis',
    register: 'registered',
  },
  {
    key: '3',
    no : 3,
    name: 'Joe Black',
    email : 'joeblack@gmail.com',
    phone : '081804065928',
    univ: 'Sydney No. 1 Lake Park',
    jenjang: 'Aktivis',
    register: 'registered',
  },
  {
    key: '4',
    no : 4,
    name: 'Dwiana Kamila Auliananda Sundoro',
    email: 'johnbrown@gmail.com',
    phone : '081804065926',
    univ: 'New York No. 1 Lake Park',
    jenjang: 'Aktivis',
    register: 'registered',
  },
  {
    key: '5',
    no : 5,
    name: 'Jim Green',
    email: 'jimgreen@gmail.com',
    phone: '081804065926',
    univ: 'Massachusets',
    jenjang: 'Aktivis',
    register: 'registered',
  },
  {
    key: '6',
    no : 6,
    name: 'Joe Black',
    email : 'joeblack@gmail.com',
    phone : '081804065928',
    univ: 'Sydney No. 1 Lake Park',
    jenjang: 'Aktivis',
    register: 'registered',
  },
];

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
          <RegistrantTable data={userData} />
        </Space>
      )
    },
    {
      key: '3',
      label: 'KUESIONER',
      children: <QuestionnaireForm />,
    },
  ];

const MainActivityDetail : React.FC = () => {
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
