// src/hooks/buses/useUpdateBusMutation.ts
// Busz adatainak frissítése (részletező oldalról).
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBus } from "../../api/buses.api";
import type { Bus } from "../../types/bus.type";

export const useUpdateBusMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (bus: Bus) => updateBus(bus),
    onSuccess: (updatedBus) => {
      // frissítjük a listát és az adott busz cache-ét is
      queryClient.invalidateQueries({ queryKey: ["buses"] });
      queryClient.invalidateQueries({ queryKey: ["bus", updatedBus.id] });
    },
  });
};
