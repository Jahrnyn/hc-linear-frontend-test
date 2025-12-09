// src/hooks/board/useDeleteTaskMutation.ts
// Feladat törlése a boardról.
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "../../api/board.api";

export const useDeleteTaskMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["board", "tasks"] }); // Törlés után is újratöltjük a feladatokat
    },
  });
};
