// src/api/board.api.ts
import { boardAxiosClient } from "../config/axios.config";
import type { BoardTask, TaskStatus } from "../types/boardTask.type";

// Az összes board feladat lekérdezése.
export const fetchBoardTasks = async (): Promise<BoardTask[]> => {
  const response = await boardAxiosClient.get<BoardTask[]>("/tasks");
  return response.data;
};

// Új feladat létrehozásához használt payload
export type CreateTaskPayload = {
  title: string;
  status: TaskStatus;
};

// Új feladat létrehozása BE.-n
export const createTask = async (
  payload: CreateTaskPayload,
): Promise<BoardTask> => {
  const response = await boardAxiosClient.post<BoardTask>("/tasks", payload);
  return response.data;
};

// Törlés ID alapján.
export const deleteTask = async (id: number): Promise<void> => {
  await boardAxiosClient.delete(`/tasks/${id}`);
};

// drag & drop után feladat státuszának frissítése. PATCH, mert csak a status mezőt módosítjuk.
export const updateTaskStatus = async (
  id: number,
  status: TaskStatus,
): Promise<BoardTask> => {
  const response = await boardAxiosClient.patch<BoardTask>(`/tasks/${id}`, {
    status,
  });
  return response.data;
};
