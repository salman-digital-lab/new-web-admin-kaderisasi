import { Input } from "antd";

import { Questionnaire } from "../../../../../../../types/model/activity";

import DropdownForm from "./DropdownForm";

const { TextArea } = Input;

const LeftField = ({
  question,
  handleChangeCard,
}: {
  question: Questionnaire;
  handleChangeCard: (
    questionName: string,
    changeCb: (question: Questionnaire) => Questionnaire,
  ) => void;
}) => {
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
