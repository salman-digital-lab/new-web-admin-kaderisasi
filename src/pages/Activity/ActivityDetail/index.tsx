import { Button, Space, Tabs } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

import type { TabsProps } from "antd";

import ActivityDetail from "./components/ActivityDetail";
import RegistrantList from "./components/RegistrantList";
import QuestionnaireForm from "./components/Questionnaire";
import ActivityDescription from "./components/ActivityDescription";
import { Link } from "react-router-dom";

const MainActivityDetail = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Detil Kegiatan",
      children: <ActivityDetail />,
    },
    {
      key: "2",
      label: "Deskripsi Kegiatan",
      children: <ActivityDescription />,
    },
    {
      key: "3",
      label: "Peserta",
      children: <RegistrantList />,
    },
    {
      key: "4",
      label: "Kuestioner",
      children: <QuestionnaireForm />,
    },
  ];

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <Button>
        <Link to="/activity">
          <ArrowLeftOutlined /> Kembali
        </Link>
      </Button>
      <Tabs defaultActiveKey="1" tabPosition="top" items={items} />
    </Space>
  );
};

export default MainActivityDetail;
