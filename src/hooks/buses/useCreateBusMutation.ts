// src/hooks/buses/useCreateBusMutation.ts
// Új busz létrehozása
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBus, type CreateBusPayload } from "../../api/buses.api";

export const useCreateBusMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateBusPayload) => createBus(payload),
    onSuccess: () => {
      // miután sikerült a mentés, frissítjük a listát
      queryClient.invalidateQueries({ queryKey: ["buses"] }); // Mentés után újratöltjük a teljes busz listát.
    },
  });
};
