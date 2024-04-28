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
import { ProfileQuestionnaire } from "../../../../../../types/model/activity";
import {
  generateMandatoryQuestion,
  PROFILE_FIELD_OPTIONS,
} from "../../../constants/default";
import { Member } from "../../../../../../types/model/members";

const { Text } = Typography;

interface QuestionFieldProps {
  question: ProfileQuestionnaire;
  onDelete: () => void;
  handleChangeCard: (
    questionName: string,
    changeCb: (question: ProfileQuestionnaire) => ProfileQuestionnaire,
  ) => void;
}

const QuestionField: React.FC<QuestionFieldProps> = ({
  question,
  onDelete,
  handleChangeCard,
}) => {
  const handleDropdownChange = (value: keyof Member) => {
    handleChangeCard(question.name, (old) => {
      return { ...generateMandatoryQuestion(value), name: old.name };
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
          <Col className="gutter-row" span={8}>
            <Select
              style={{ width: "100%" }}
              value={question.name}
              onChange={handleDropdownChange}
              allowClear
              options={PROFILE_FIELD_OPTIONS}
            />
          </Col>
        </Row>
        <Row justify="end">
          <Space>
            <Col>
              <Space>
                <Text>Wajib Diisi</Text>
                <Switch checked={question.required} onChange={onChange} />
              </Space>
            </Col>
          </Space>
        </Row>
      </Flex>
    </Card>
  );
};

export default QuestionField;
