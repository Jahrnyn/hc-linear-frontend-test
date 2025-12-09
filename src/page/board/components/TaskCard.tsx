// src/page/board/components/TaskCard.tsx
// Egyetlen feladatkártya a boardon – drag source + törlés gomb.
import type { BoardTask } from "../../../types/boardTask.type";
import { TaskCardContainer, DeleteButton } from "../style/board.style";

type TaskCardProps = {
  task: BoardTask;
  onDelete: () => void;
  isDeleting: boolean;
};

export function TaskCard({ task, onDelete, isDeleting }: TaskCardProps) {
  // Drag startkor a feladat azonosítóját tesszük a drag payloadba ezt olvassa ki az oszlop drop handler-e.
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text/plain", String(task.id));
  };

  return (
    <TaskCardContainer draggable onDragStart={handleDragStart}>
      <span>
        {task.title}{" "}
        <small style={{ opacity: 0.7, fontSize: "0.8rem" }}>
          ({task.status})
        </small>
      </span>
      <DeleteButton type="button" onClick={onDelete} disabled={isDeleting}>
        Törlés
      </DeleteButton>
    </TaskCardContainer>
  );
}
