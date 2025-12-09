// src/hooks/board/useCreateTaskMutation.ts
// Új feladat létrehozása a boardon
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask, type CreateTaskPayload } from "../../api/board.api";

export const useCreateTaskMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateTaskPayload) => createTask(payload),
    onSuccess: () => {
      // Mentés után érvénytelenítjük a listázó query-t így frissül a board.
      queryClient.invalidateQueries({ queryKey: ["board", "tasks"] });
    },
  });
};
