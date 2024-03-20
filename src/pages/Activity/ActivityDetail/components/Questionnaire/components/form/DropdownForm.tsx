import { Button, Input, Space } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { Questionnaire } from "../../../../../../../types/model/activity";
import { generateDefaultQuestion } from "../../../../constants/default";

const { TextArea } = Input;

const DropdownForm: React.FC<{
  question: Questionnaire;
  handleChangeCard: (
    questionName: string,
    changeCb: (question: Questionnaire) => Questionnaire
  ) => void;
}> = ({ question, handleChangeCard }) => {
  const handleAdd = () => {
    handleChangeCard(question.name, (old) => {
      if (old.type === "dropdown")
        return {
          ...old,
          data: [
            ...old.data,
            { label: "", value: "", id: Math.floor(Math.random() * 10000) },
          ],
        };
      return generateDefaultQuestion("dropdown");
    });
  };

  const handleDelete = (id: number) => {
    handleChangeCard(question.name, (old) => {
      if (old.type === "dropdown")
        return {
          ...old,
          data: old.data.filter((input) => input.id !== id),
        };
      return generateDefaultQuestion("dropdown");
    });
  };

  return (
    <Space direction="vertical" style={{ display: "flex" }}>
      <TextArea
        placeholder="Pertanyaan"
        value={question.label}
        onChange={(e) =>
          handleChangeCard(question.name, (old) => ({
            ...old,
            label: e.target.value,
          }))
        }
        autoSize={{ minRows: 1 }}
      />

      {question.type === "dropdown" &&
        question.data.map((input) => (
          <Space key={input.id}>
            <Input
              value={input.label}
              placeholder="Tulisakan Opsi"
              onChange={(e) => {
                handleChangeCard(question.name, (old) => {
                  if (old.type === "dropdown")
                    return {
                      ...old,
                      data: old.data.map((option) => {
                        if (option.id === input.id)
                          return {
                            label: e.target.value,
                            value: e.target.value,
                            id: option.id,
                          };
                        return option;
                      }),
                    };
                  return generateDefaultQuestion("dropdown");
                });
              }}
            />
            <Button onClick={() => handleDelete(input.id)}>
              <CloseOutlined />
            </Button>
          </Space>
        ))}
      <Space>
        <Button onClick={handleAdd}>Tambahkan Opsi</Button>
      </Space>
    </Space>
  );
};

export default DropdownForm;
