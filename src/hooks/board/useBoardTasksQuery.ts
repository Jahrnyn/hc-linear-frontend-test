// src/hooks/board/useBoardTasksQuery.ts
// A board feladatainak listázó lekérdezése.
import { useQuery } from "@tanstack/react-query";
import { fetchBoardTasks } from "../../api/board.api";

export const useBoardTasksQuery = () => {
  return useQuery({
    queryKey: ["board", "tasks"], // cache kulcs a board feladatokra
    queryFn: fetchBoardTasks,
  });
};
