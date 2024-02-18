import React, { useState } from 'react';
import { Col, Row } from 'antd'
import QuestionField from './components/QuestionField';
import AddQuestionButton from './components/AddQuestionButton';
import SaveButton from './components/SaveButton';
import {
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverlay,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';


interface CardData {
  id: number;
}

const QuestionnaireForm: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([{id : 1}]);
  const [activeDraggable, setActiveDraggable] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (key: string) => {
    setActiveDraggable(key);
  };

  const handleDragEnd = (event : DragEndEvent) => {
    const {active, over} = event;
    if (active.id && over?.id && active.id !== over.id) {
      const oldIndex = cards.findIndex(card => card.id.toString() === active.id);
      const newIndex = cards.findIndex(card => card.id.toString() === over.id);
      const reorderedFields = arrayMove(cards, oldIndex, newIndex);
      setCards(reorderedFields);
    }
    setActiveDraggable(null);
  }

  const handleAddCard = () => {
    const newId = cards.length + 1;
    setCards([...cards, { id: newId }]);
  };

  const handleDeleteCard = (id: number) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  return (
      <Row gutter={[16,24]}>
        <Col span={24}>
          <SaveButton />
        </Col>
        <Col span={24}>
        <DndContext 
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext 
            items={cards.map(card => card.id)}
          >
          {
            cards.map((card, index) => (
              <QuestionField 
                key={card.id}
                id={card.id} 
                number={index + 1}
                onDelete={() => handleDeleteCard(card.id)}
                onDragStart={handleDragStart}
                activeDraggable={activeDraggable}
                isDragging
              />
            ))
          }
          </SortableContext>
      </DndContext>
      <DragOverlay>
      {
            cards.map((card, index) => (
              <QuestionField 
                key={card.id}
                id={card.id} 
                number={index + 1}
                onDelete={() => handleDeleteCard(card.id)}
                onDragStart={handleDragStart}
                activeDraggable={activeDraggable}
                isDragging
              />
            ))
          }
      </DragOverlay>
          <AddQuestionButton onClick={handleAddCard}/>
        </Col>
      </Row>
  );
}

export default QuestionnaireForm;