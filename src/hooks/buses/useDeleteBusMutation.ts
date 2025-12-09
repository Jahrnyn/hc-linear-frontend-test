// src/hooks/buses/useDeleteBusMutation.ts
// Busz törlése
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBus } from "../../api/buses.api";

export const useDeleteBusMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteBus(id),
    onSuccess: () => {
      // újratölti a "buses" listát
      queryClient.invalidateQueries({ queryKey: ["buses"] }); // Törlés után is érvénytelenítjük a listázó query-t.
    },
  });
};
