import { Link } from "react-router-dom";

import { Button, Tabs } from "antd";
import type { TabsProps } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

import ActivityDetail from "./components/ActivityDetail";
import RegistrantList from "./components/RegistrantList";
import QuestionnaireForm from "./components/Questionnaire";
import MandatoryQuestionnaire from "./components/MandatoryQuestionnaire";

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
      children: <MandatoryQuestionnaire />,
    },
    {
      key: "5",
      label: "Tambahan Kuestioner",
      children: <QuestionnaireForm />,
    },
  ];

  return (
    <>
      <Button>
        <Link to="/activity">
          <ArrowLeftOutlined /> Kembali
        </Link>
      </Button>
      <Tabs defaultActiveKey="1" tabPosition="top" items={items} />
    </>
  );
};

export default MainActivityDetail;
