import React from "react";
import { Input } from "antd";
import DropdownForm from "./DropdownForm";
import { Questionnaire } from "../../../../../../../types/model/activity";

const { TextArea } = Input;

const LeftField: React.FC<{
  question: Questionnaire;
  handleChangeCard: (
    questionName: string,
    changeCb: (question: Questionnaire) => Questionnaire,
  ) => void;
}> = ({ question, handleChangeCard }) => {
  if (question.type === "dropdown") {
    return (
      <DropdownForm question={question} handleChangeCard={handleChangeCard} />
    );
  }

  return (
    <TextArea
      placeholder="Question"
      value={question.label}
      onChange={(e) =>
        handleChangeCard(question.name, (old) => ({
          ...old,
          label: e.target.value,
        }))
      }
      autoSize={{ minRows: 1 }}
    />
  );
};

export default LeftField;
