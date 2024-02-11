import React from "react";
import ActivityDetail from "./components/ActivityDetail";
import { Space, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import RegistrantFilter from "./components/RegistrantFilter";
import { DataRegistrant } from "../../types";
import RegistrantTable from "./components/RegistrantTable";


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

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: (
        <div style={{ width: "25vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
          DETAIL KEGIATAN
        </div>
      ),
      children: <ActivityDetail />,
    },
    {
      key: '2',
      label: (
        <div style={{ width: "25vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
          PENDAFTARAN
        </div>
      ),
      children: (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <RegistrantFilter/>
          <RegistrantTable data={userData} />
        </Space>
      )
    },
    {
      key: '3',
      label: (
        <div style={{ width: "25vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
          KUESIONER
        </div>
      ),
      children: 'Content of Tab Pane 3',
    },
  ];

const MainActivityDetail : React.FC = () => 
      <Tabs 
          defaultActiveKey="1" 
          type="card" 
          items={items} 
          onChange={onChange}
          tabBarStyle={{ 
            marginLeft: '-10px', 
            width: '83vw',
            height: '50px', 
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)', 
            borderRadius: '5px', 
            overflow: 'hidden' 
          }}
          size="large"
        />
    


export default MainActivityDetail
