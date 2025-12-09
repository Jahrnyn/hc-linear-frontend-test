// src/page/board/components/BoardColumn.tsx
// Egyetlen oszlop a boardon a hozzá tartozó feladatkártyákkal és drop-kezeléssel.
import type { BoardTask, TaskStatus } from "../../../types/boardTask.type";
import { TaskCard } from "./TaskCard";
import {
  ColumnContainer,
  ColumnTitle,
  EmptyColumnText,
} from "../style/board.style";

type BoardColumnProps = {
  status: TaskStatus;
  title: string;
  tasks: BoardTask[];
  onDeleteTask: (id: number) => void;
  isDeleting: boolean;
  onDropTask: (taskId: number, newStatus: TaskStatus) => void;
};

export function BoardColumn({
  status,
  title,
  tasks,
  onDeleteTask,
  isDeleting,
  onDropTask,
}: BoardColumnProps) { 
  // Drag over alatt megakadályozzuk az alapértelmezett viselkedést, hogy a drop event működhessen.
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => { 
    e.preventDefault(); 
  };

  // Dropkor kiolvassuk a feladat ID-ját a drag payloadból és értesítjük a szülő komponenst az új státuszról.
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => { 
    e.preventDefault();
    const taskIdString = e.dataTransfer.getData("text/plain");
    const taskId = Number(taskIdString);
    if (!Number.isNaN(taskId)) {
      onDropTask(taskId, status);
    }
  };

  return (
    <ColumnContainer onDragOver={handleDragOver} onDrop={handleDrop}>
      <ColumnTitle>{title}</ColumnTitle>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {tasks.length === 0 && (
          <EmptyColumnText>
            Nincs feladat ebben az oszlopban.
          </EmptyColumnText>
        )}

        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={() => onDeleteTask(task.id)}
            isDeleting={isDeleting}
          />
        ))}
      </div>
    </ColumnContainer>
  );
}
