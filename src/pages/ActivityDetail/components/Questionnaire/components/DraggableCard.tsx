import React from 'react';
import { useSortable} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface DraggableCardProps {
  id: number;
  children: React.ReactNode;
}

const DraggableCard: React.FC<DraggableCardProps> = ({ id, children }) => {
  const { attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,} = useSortable({
        id: String(id),
        resizeObserverConfig: {},
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition ?? undefined,
    cursor: isDragging ? 'grabbing' : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
};

export default DraggableCard;
