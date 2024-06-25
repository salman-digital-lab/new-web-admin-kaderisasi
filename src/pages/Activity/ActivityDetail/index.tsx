import { Tabs } from "antd";
import type { TabsProps } from "antd";

import ActivityDetail from "./components/ActivityDetail";
import RegistrantList from "./components/RegistrantList";
import QuestionnaireForm from "./components/Questionnaire";
import ActivityDescription from "./components/ActivityDescription";

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

  return <Tabs defaultActiveKey="1" tabPosition="top" items={items} />;
};

export default MainActivityDetail;
