import React, { useState } from 'react';
import { Form, Input, Checkbox, Space, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Text } = Typography;

const CheckBoxForm : React.FC = () => {
    const [questionText, setQuestionText] = useState<string>('');
    const circleStyle: React.CSSProperties = {
      borderRadius: '100%',
      padding: '8px',
      transition: 'background-color 0.3s',
    };

    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const target = event.currentTarget;
      target.style.backgroundColor = '#F2EFE5';
    };
  
    const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const target = event.currentTarget;
      target.style.backgroundColor = 'transparent';
    };
    
    return (
        <>
        <Form.Item name="leftTextField">
            <TextArea 
              size="large"
              placeholder="Question" 
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              autoSize={{ minRows: 1 }}
            />
        </Form.Item>
        <Form.Item name="leftCheckbox">
          <Space>
            <Checkbox/>
            <Input 
                style={{ 
                    width: '44vw',
                    border: 'none',
                    borderBottom: '1px solid #d9d9d9',
                    padding: '8px 12px',
                  }}
                bordered={false}
                placeholder='Yes Of Course'
            />
            <div
                style={circleStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <CloseOutlined style={{ fontSize: '20px', color: '#C7C8CC' }}/>
            </div>
          </Space>
        </Form.Item> 
        <Form.Item>
          <Space>
            <Checkbox/>
            <Text
                style={{
                    color: '#3aaaef',
                    cursor: "pointer",
                    fontSize: '16px',
                }}
            >Tambahkan Opsi</Text>
          </Space>
        </Form.Item> 
        </>
    )
}

export default CheckBoxForm