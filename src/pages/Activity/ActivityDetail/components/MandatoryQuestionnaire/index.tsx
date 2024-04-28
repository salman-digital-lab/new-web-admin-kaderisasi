import React, { useState } from "react";
import { Button, Col, Empty, notification, Row, Space } from "antd";
import { PlusOutlined, SaveFilled } from "@ant-design/icons";

import QuestionField from "./components/QuestionField";
import { ProfileQuestionnaire } from "../../../../../types/model/activity";
import { generateMandatoryQuestion } from "../../constants/default";
import { getActivity, putActivity } from "../../../../../api/services/activity";
import { useRequest } from "ahooks";
import { useParams } from "react-router-dom";

const MandatoryQuestionnaire: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [cards, setCards] = useState<ProfileQuestionnaire[]>([]);

  const { data: activityData } = useRequest(() => getActivity(Number(id)), {
    cacheKey: `activity-${id}`,
    onSuccess: (data) => {
      if (data && Array.isArray(data.additional_config.mandatory_profile_data))
        setCards(data?.additional_config.mandatory_profile_data);
    },
  });

  const handleAddCard = () => {
    setCards([...cards, generateMandatoryQuestion("personal_id")]);
  };

  const handleChangeCard = (
    questionName: string,
    changeCb: (question: ProfileQuestionnaire) => ProfileQuestionnaire,
  ) => {
    setCards((prev) =>
      prev.map((oldQuestion) => {
        if (questionName !== oldQuestion.name) {
          return oldQuestion;
        }

        return changeCb(oldQuestion);
      }),
    );
  };

  const handleDeleteCard = (name: string) => {
    const updatedCards = cards.filter((card) => card.name !== name);
    setCards(updatedCards);
  };

  const { loading: editLoading, runAsync } = useRequest(putActivity, {
    manual: true,
  });

  const handleSave = async () => {
    if (activityData) {
      await runAsync(Number(id), {
        ...activityData.additional_config,
        additional_config: { mandatory_profile_data: cards },
      });
      notification.success({
        message: "Berhasil",
        description: "Data berhasil diubah",
      });
    }
  };

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <Row justify="end">
        <Space>
          <Button
            onClick={handleSave}
            icon={<SaveFilled />}
            loading={editLoading}
          >
            Simpan Pertanyaan
          </Button>
          <Button onClick={handleAddCard} icon={<PlusOutlined />}>
            Tambah Pertanyaan
          </Button>
        </Space>
      </Row>
      <Row gutter={24}>
        <Col span={24}>
          <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            {cards.length ? (
              cards.map((card) => (
                <QuestionField
                  key={card.name}
                  handleChangeCard={handleChangeCard}
                  question={card}
                  onDelete={() => handleDeleteCard(card.name)}
                />
              ))
            ) : (
              <Empty />
            )}
          </Space>
        </Col>
      </Row>
    </Space>
  );
};

export default MandatoryQuestionnaire;
