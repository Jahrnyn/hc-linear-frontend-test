// src/page/board/BoardPage.tsx
// Drag & drop board oldal (todo / in_progress / done oszlopokkal).
import { useMemo, useState } from "react";
import { useBoardTasksQuery } from "../../hooks/board/useBoardTasksQuery";
import { useCreateTaskMutation } from "../../hooks/board/useCreateTaskMutation";
import { useDeleteTaskMutation } from "../../hooks/board/useDeleteTaskMutation";
import { useUpdateTaskStatusMutation } from "../../hooks/board/useUpdateTaskStatusMutation";
import type { BoardTask, TaskStatus } from "../../types/boardTask.type";
import { BoardPageContainer, ColumnsWrapper } from "./style/board.style";
import { BoardColumn } from "./components/BoardColumn";
import { NewTaskForm } from "./components/NewTaskForm";

// Az oszlopok definíciója és mi jelenljen meg 
const STATUS_COLUMNS: { key: TaskStatus; label: string }[] = [
  { key: "todo", label: "Teendő" },
  { key: "in_progress", label: "Folyamatban" },
  { key: "done", label: "Kész" },
];

export default function BoardPage() {
  // Lista lekérdezése TanStack Query-vel.
  const { data: tasks, isLoading, isError, error } = useBoardTasksQuery();
  // Mutációk: új, törlés, státuszváltás
  const createMutation = useCreateTaskMutation();
  const deleteMutation = useDeleteTaskMutation();
  const updateStatusMutation = useUpdateTaskStatusMutation();
  // Új f. címe (lokális state)
  const [newTitle, setNewTitle] = useState("");

  // A backendről érkező flat listát csoportosítjuk státusz szerint. (csak akkor számoljuk újra, ha a tasks változik.)
  const grouped = useMemo(() => {
    const initial: Record<TaskStatus, BoardTask[]> = {
      todo: [],
      in_progress: [],
      done: [],
    };

    (tasks ?? []).forEach((task) => {
      initial[task.status]?.push(task);
    });

    return initial;
  }, [tasks]);

  // Alap handling
  if (isLoading) {
    return <div style={{ color: "white", padding: "24px" }}>Betöltés...</div>;
  }

  if (isError) {
    console.error(error);
    return (
      <div style={{ color: "white", padding: "24px" }}>
        Hiba történt a feladatok betöltésekor.
      </div>
    );
  }

  // Új feladat submit (mindig todo státusszal jön létre)
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newTitle.trim()) {
      alert("Adj meg egy címet az új feladathoz.");
      return;
    }

    createMutation.mutate(
      {
        title: newTitle.trim(),
        status: "todo",
      },
      {
        onSuccess: () => {
          setNewTitle("");
        },
      }
    );
  };

  // Törlés + megerősítés.
  const handleDeleteTask = (id: number) => {
    const confirmed = window.confirm(
      "Biztosan törölni szeretnéd ezt a feladatot?"
    );
    if (!confirmed) return;

    deleteMutation.mutate(id);
  };

  const handleDropTask = (taskId: number, newStatus: TaskStatus) => {
    updateStatusMutation.mutate({ id: taskId, status: newStatus });
  };

  return (
    <BoardPageContainer>
      <h1>Feladat Board</h1>

      <NewTaskForm
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        onSubmit={handleAddTask}
        isSubmitting={createMutation.isPending}
      />

      <ColumnsWrapper>
        {STATUS_COLUMNS.map((column) => (
          <BoardColumn
            key={column.key}
            status={column.key}
            title={column.label}
            tasks={grouped[column.key]}
            onDeleteTask={handleDeleteTask}
            isDeleting={deleteMutation.isPending}
            onDropTask={handleDropTask}
          />
        ))}
      </ColumnsWrapper>
    </BoardPageContainer>
  );
}
