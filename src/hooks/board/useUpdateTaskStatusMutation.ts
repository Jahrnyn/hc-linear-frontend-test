// src/hooks/board/useUpdateTaskStatusMutation.ts
// Feladat státuszának frissítése (drag & drop után).
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTaskStatus } from "../../api/board.api";
import type { TaskStatus } from "../../types/boardTask.type";

type UpdateTaskStatusPayload = {
  id: number;
  status: TaskStatus;
};

export const useUpdateTaskStatusMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, status }: UpdateTaskStatusPayload) =>
      updateTaskStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["board", "tasks"] });  // Státuszváltás után is frissítjük a teljes boardot
    },
  });
};
