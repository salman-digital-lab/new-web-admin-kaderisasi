import { Col, Form, Input, InputNumber, Row } from "antd"
import React, { useState } from "react"

const { TextArea } = Input;

const ScaleForm : React.FC = () => {
    const [questionText, setQuestionText] = useState<string>('');

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
        <Form.Item>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <InputNumber
                    style={{ width: '100%' }}
                    size="large"
                    placeholder="Min Value" 
                    value={questionText}
                    // onChange={(e) => setQuestionText(e.target.value)}
                    />
                </Col>
                <Col span={12}>
                    <InputNumber
                    style={{ width: '100%' }}
                    size="large"
                    placeholder="Max Value" 
                    value={questionText}
                    // onChange={(e) => setQuestionText(e.target.value)}
                    />
                </Col>
            </Row>
        </Form.Item>
        </>     
    )
}

export default ScaleForm