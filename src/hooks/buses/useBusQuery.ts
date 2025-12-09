// src/hooks/buses/useBusQuery.ts
// Egyetlen busz lekérdezése ID alapján (részletező oldalhoz).
import { useQuery } from "@tanstack/react-query";
import { fetchBusById } from "../../api/buses.api";

export const useBusQuery = (id: number | null) => {
  return useQuery({
    queryKey: ["bus", id],
    // A queryFn csak akkor fut le, ha van érvényes ID.
    queryFn: () => {
      if (id === null) {
         return Promise.reject(new Error("Missing id")); // TypeScript miatt kell, de az 'enabled' úgyis megállítja
      }
      return fetchBusById(id);
    },
    enabled: id !== null,
  });
};
