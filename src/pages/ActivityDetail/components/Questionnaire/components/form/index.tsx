import React, { useState } from 'react';
import { Form, Input } from 'antd';
import NumberForm from './NumberForm';
import DropdownForm from './DropdownForm';

const { TextArea } = Input;

const LeftField: React.FC<{ dropdownValue: string }> = ({ dropdownValue }) => {
    const [questionText, setQuestionText] = useState<string>('');

if (dropdownValue === 'number') {
    return (
        <>
        <NumberForm />
        </>
    );
    }
  if (dropdownValue === 'dropdown') {
    return (
        <>
         <DropdownForm />
        </>
    )
  }

  return (
    <Form.Item name="leftField">
      <TextArea 
            size="large"
            placeholder="Question" 
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            autoSize={{ minRows: 1 }}
        />
    </Form.Item>
  );
};

export default LeftField;