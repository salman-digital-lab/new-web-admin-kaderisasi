import React, { useEffect, useState } from 'react';
import { Flex, Col, Row, Select, Card, Divider, Typography, Switch, Space, Tooltip } from 'antd';
import { DeleteFilled, SwapOutlined } from '@ant-design/icons';
import LeftField from './form';
import { useSortable } from '@dnd-kit/sortable';

const { Text } = Typography;

interface QuestionData {
  number: number;
  id : number;
  onDelete: () => void; 
  isDragging?: boolean;
  onDragStart: (key: string) => void;
  activeDraggable: string | null;
}

const QuestionField: React.FC<QuestionData> = ({ number, onDelete, isDragging, id, onDragStart, activeDraggable }) => {
const [dropdownValue, setDropdownValue] = useState('Text');
const { attributes, listeners, setNodeRef, transform } = useSortable({ id: id.toString() });

  const style = {
    transform: `translate3d(${transform?.x ?? 0}px, ${transform?.y ?? 0}px, 0)`,
    opacity: isDragging ? 0.5 : 1,
    transition: isDragging ? 'none' : 'transform 250ms cubic-bezier(0.25, 0.8, 0.25, 1)',
  };

  useEffect(() => {
    if (isDragging && transform) {
      const draggedElement = document.getElementById(id.toString());
      if (draggedElement) {
        draggedElement.style.transform = `translate3d(${transform.x ?? 0}px, ${transform.y ?? 0}px, 0)`;
      }
    }
  }, [isDragging, transform, id]);

  const handleDropdownChange = (value: string) => {
    setDropdownValue(value);
  };

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`)
}

const circleStyle: React.CSSProperties = {
  width: '35px',
  height: '35px',
  borderRadius: '50%',
  border: '2px', 
  textAlign: 'center',
  lineHeight: '35px',
  fontWeight: 'bold',
  backgroundColor: '#ffb739',
  marginLeft: '-30px',
  marginTop: '-10px',
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
};

const componentStyle = {
    input: {
      marginBottom: "1.5em",
    },
    card: {
      marginBottom: "2em",
      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
    },
    cardContent: {
      paddingBottom: "1em",
      "&:lastChild": {
        paddingBottom: "1em",
      },
    },
    titleCard: {
      minWidth: 275,
      padding: "0 1em",
    },
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
    <Card 
      id = {id.toString()}
      style={{ ...componentStyle.card, ...componentStyle.titleCard }}
      extra={
        <SwapOutlined
          style={{ fontSize: '20px', cursor: 'pointer', color: activeDraggable === id.toString() ? 'blue' : 'inherit' }}
          {...listeners}
          onMouseDown={() => onDragStart(id.toString())}
        />
      }
      >
    <Flex vertical gap={12} style={{marginBottom:'16px'}}>
      <div style={circleStyle}>
        <Text style={{ color: '#fcfcf4', fontSize: '23px' }}>{number}</Text>
      </div>
      <Row gutter={[24, 16]}>
      <Col className="gutter-row" span={16}>
          <LeftField dropdownValue={dropdownValue} />
        </Col>
        <Col className="gutter-row" span={8}>
          <Select
            size="large"
            placeholder="Status"
            style={{ width: '100%' }}
            value={dropdownValue} 
            onChange={handleDropdownChange}
            allowClear
            dropdownStyle={{ maxHeight: 150, overflow: 'auto' }}
            options={[
              { value: 'text', label: 'Text' },
              { value: 'number', label: 'Number' },
              { value: 'radio', label: 'Radio' },
              { value: 'checkbox', label: 'CheckBox' },
              { value: 'scale', label: 'Scale' },
              { value: 'dropdown', label: 'Dropdown' },
            ]}
          />
        </Col>
      </Row>
      <Divider style={{ marginTop: '-10px' }}/>
      <Row justify="end">
        <Space size='large'>
          <Tooltip title="Delete">
            <DeleteFilled onClick={onDelete} style={{ color:"red", fontSize: '20px' }}/>
          </Tooltip>
          <Col>
            <Text style={{ color: 'black', fontSize: '15px', marginRight: 10 }}>Required</Text>
            <Switch defaultChecked onChange={onChange} size='small'/>
          </Col>
        </Space>
      </Row>
     </Flex>
    </Card>
    </div>
  );
}

export default QuestionField;