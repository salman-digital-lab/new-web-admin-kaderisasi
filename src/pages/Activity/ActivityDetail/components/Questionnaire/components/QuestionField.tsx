import React from "react";
import {
  Flex,
  Col,
  Row,
  Select,
  Card,
  Typography,
  Switch,
  Space,
  Button,
} from "antd";
import { DeleteFilled } from "@ant-design/icons";
import LeftField from "./form";
import { Questionnaire } from "../../../../../../types/model/activity";
import { generateDefaultQuestion } from "../../../constants/default";

const { Text } = Typography;

interface QuestionFieldProps {
  question: Questionnaire;
  onDelete: () => void;
  handleChangeCard: (
    questionName: string,
    changeCb: (question: Questionnaire) => Questionnaire,
  ) => void;
}

const QuestionField: React.FC<QuestionFieldProps> = ({
  question,
  onDelete,
  handleChangeCard,
}) => {
  const handleDropdownChange = (value: "text" | "number" | "dropdown") => {
    handleChangeCard(question.name, (old) => {
      return { ...generateDefaultQuestion(value), name: old.name };
    });
  };

  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <Card
      title={question.name}
      id={question.name}
      extra={
        <Button onClick={onDelete}>
          <DeleteFilled />
        </Button>
      }
    >
      <Flex vertical gap={12}>
        <Row gutter={[24, 16]}>
          <Col className="gutter-row" span={16}>
            <LeftField
              question={question}
              handleChangeCard={handleChangeCard}
            />
          </Col>
          <Col className="gutter-row" span={8}>
            <Select
              style={{ width: "100%" }}
              value={question.type}
              onChange={handleDropdownChange}
              allowClear
              options={[
                { value: "text", label: "Teks" },
                { value: "number", label: "Angka" },
                { value: "dropdown", label: "Pilihan" },
              ]}
            />
          </Col>
        </Row>
        <Row justify="end">
          <Space>
            <Col>
              <Space>
                <Text>Wajib Diisi</Text>
                <Switch defaultChecked onChange={onChange} />
              </Space>
            </Col>
          </Space>
        </Row>
      </Flex>
    </Card>
  );
};

export default QuestionField;
