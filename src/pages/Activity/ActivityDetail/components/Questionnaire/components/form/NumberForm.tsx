import { Form, Input } from "antd";
import { useState } from "react";

const NumberForm = () => {
  const [questionText, setQuestionText] = useState<string>("");

  return (
    <>
      <Form.Item name="leftTextField">
        <Input
          placeholder="Question"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          type="number"
        />
      </Form.Item>
    </>
  );
};

export default NumberForm;
