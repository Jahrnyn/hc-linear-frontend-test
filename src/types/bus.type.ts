// src/types/bus.type.ts
export type BusStatus = 'operational' | 'maintenance' | string;

export interface Bus {
  id: number;
  plate: string;
  model: string;
  status: BusStatus;
  capacity: number;
}
