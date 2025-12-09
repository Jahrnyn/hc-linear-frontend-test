// src/hooks/buses/useBusesQuery.ts
// Busz lista lekérdezése.
import { useQuery } from "@tanstack/react-query";
import { fetchBuses } from "../../api/buses.api";

export const useBusesQuery = () => {
  return useQuery({
    queryKey: ["buses"],
    queryFn: fetchBuses,
  });
};
