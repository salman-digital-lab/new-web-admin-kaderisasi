import { Button, Col, Row } from 'antd';
import React from 'react';
import { SaveFilled } from '@ant-design/icons';

interface FieldData {
    onSave : () => void, 
}

const SaveButton : React.FC<FieldData> = ({ onSave }) => {
   
    return(
        <Row justify='end'>
            <Col>
                <Button 
                    onClick={onSave}
                    size='large' 
                    icon={<SaveFilled />}
                    style={{ backgroundColor: '#00a3ff', color: '#fcfcf4' }}
                    > Save Question</Button>
            </Col>
        </Row>
    )
}

export default SaveButton;