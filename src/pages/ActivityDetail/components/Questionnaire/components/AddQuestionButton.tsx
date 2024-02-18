import { Col, Row, Tooltip } from 'antd';
import React from 'react';
import { AppstoreAddOutlined } from '@ant-design/icons';

interface AddIconProps {
    onClick: () => void;
  }

const AddQuestionButton : React.FC<AddIconProps> = ({ onClick }) => {

    const circleStyle: React.CSSProperties = {
        borderRadius: '100%',
        padding: '8px',
        transition: 'background-color 0.3s',
      };

      const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = event.currentTarget;
        target.style.backgroundColor = '#e2e2e2';
      };
    
      const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = event.currentTarget;
        target.style.backgroundColor = 'transparent';
      };

    return (
        <Row justify="center">
            <Col>
                <Tooltip title="Add">
                    <div 
                        style={circleStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <AppstoreAddOutlined onClick={onClick} style={{ color: '#aaceff', fontSize: '45px' }}/>
                    </div>
                </Tooltip>
            </Col>
        </Row>
    )
}

export default AddQuestionButton;

