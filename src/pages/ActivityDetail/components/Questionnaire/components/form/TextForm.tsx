import { Col, Input, Row } from "antd"
import React, { useState } from "react"

const { TextArea } = Input;

const TextForm : React.FC = () => {
    const [questionText, setQuestionText] = useState<string>('');

    return (
        <Row>
            <Col>
                <TextArea
                size="large"
                placeholder="Question" 
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                autoSize={{ minRows: 1 }}
                />
            </Col>
        </Row>
    )
}

export default TextForm