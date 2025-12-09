// src/api/buses.api.ts
import { busesAxiosClient } from "../config/axios.config";
import type { Bus } from "../types/bus.type";   

export const fetchBuses = async (): Promise<Bus[]> => {
  const response = await busesAxiosClient.get<Bus[]>("/buses");
  return response.data;
};

// Delete
export const deleteBus = async (id: number): Promise<void> => {
  await busesAxiosClient.delete(`/buses/${id}`);
};

// Új busz létrehozása
export type CreateBusPayload = Omit<Bus, "id">;

export const createBus = async (payload: CreateBusPayload): Promise<Bus> => {
  const response = await busesAxiosClient.post<Bus>("/buses", payload);
  return response.data;
};

// Egy busz lekérése ID alapján
export const fetchBusById = async (id: number): Promise<Bus> => {
  const response = await busesAxiosClient.get<Bus>(`/buses/${id}`);
  return response.data;
};

// Busz frissítése
export const updateBus = async (bus: Bus): Promise<Bus> => {
  const response = await busesAxiosClient.put<Bus>(`/buses/${bus.id}`, bus);
  return response.data;
};
