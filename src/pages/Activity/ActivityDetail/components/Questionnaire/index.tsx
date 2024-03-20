import React, { useState } from "react";
import { Button, Col, notification, Row, Space } from "antd";
import { PlusOutlined, SaveFilled } from "@ant-design/icons";

import QuestionField from "./components/QuestionField";
import { Questionnaire } from "../../../../../types/model/activity";
import { generateDefaultQuestion } from "../../constants/default";
import { getActivity, putActivity } from "../../../../../api/services/activity";
import { useRequest } from "ahooks";
import { useParams } from "react-router-dom";

const QuestionnaireForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [cards, setCards] = useState<Questionnaire[]>([
    generateDefaultQuestion("text"),
  ]);

  useRequest(() => getActivity(Number(id)), {
    cacheKey: `activity-${id}`,
    onSuccess: (data) => {
      if (data) setCards(JSON.parse(data?.additional_questionnaire));
    },
  });

  const handleAddCard = () => {
    setCards([...cards, generateDefaultQuestion("text")]);
  };

  const handleChangeCard = (
    questionName: string,
    changeCb: (question: Questionnaire) => Questionnaire
  ) => {
    setCards((prev) =>
      prev.map((oldQuestion) => {
        if (questionName !== oldQuestion.name) {
          return oldQuestion;
        }

        return changeCb(oldQuestion);
      })
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
    await runAsync(Number(id), {
      additional_questionnaire: JSON.stringify(cards),
    });
    notification.success({
      message: "Berhasil",
      description: "Data berhasil diubah",
    });
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
            {cards.map((card) => (
              <QuestionField
                key={card.name}
                handleChangeCard={handleChangeCard}
                question={card}
                onDelete={() => handleDeleteCard(card.name)}
              />
            ))}
          </Space>
        </Col>
      </Row>
    </Space>
  );
};

export default QuestionnaireForm;
