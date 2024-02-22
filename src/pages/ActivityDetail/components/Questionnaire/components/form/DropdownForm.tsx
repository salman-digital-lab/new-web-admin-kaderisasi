import React, { useState } from 'react';
import { Form, Input, Space, Typography } from 'antd';
import { CaretDownFilled, CloseOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Text } = Typography;

interface DropdownData {
    id: number;
  }

const DropdownForm : React.FC = () => {
    const [questionText, setQuestionText] = useState<string>('');
    const [dropdown, setDropdown] = useState<DropdownData[]>([{id : 1}]);

    const circleStyle: React.CSSProperties = {
        borderRadius: '100%',
        padding: '8px',
        transition: 'background-color 0.3s',
        cursor: 'pointer'
      };

      const handleAdd = () => {
        const newId = dropdown.length + 1;
        setDropdown([...dropdown, { id: newId }]);
      };

      const handleDelete = (id: number) => {
        const updatedDropdown = dropdown.filter((input) => input.id !== id);
        setDropdown(updatedDropdown);
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
        {
          dropdown.map((input) => (
            <Form.Item key={input.id} name="leftCheckbox">
                <Space>
                    <CaretDownFilled />
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
                        onClick={() => handleDelete(input.id)} 
                    >
                        <CloseOutlined style={{ fontSize: '20px', color: '#C7C8CC' }}/>
                    </div>
                </Space>
            </Form.Item> 
          ))
        }
        <Form.Item>
            <Space>
                <CaretDownFilled />
                <Text
                    onClick={handleAdd}
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

export default DropdownForm