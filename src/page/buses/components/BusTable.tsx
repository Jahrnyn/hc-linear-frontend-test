// src/page/buses/components/BusTable.tsx
// Buszok listája táblázat - a törlést és szerkesztésre navigációt kívülről kapja 

import type { Bus } from "../../../types/bus.type";
import {
  BusTableElement,
  TableHeadCell,
  TableCell,
  DangerButton,
  EditButton,
} from "../style/buses.style";

type BusTableProps = {
  buses: Bus[];
  onDelete: (id: number) => void;
  isDeleting: boolean;
};

export function BusTable({ buses, onDelete, isDeleting }: BusTableProps) {
  return (
    <BusTableElement>
      <thead>
        <tr>
          <TableHeadCell>Rendszám</TableHeadCell>
          <TableHeadCell>Modell</TableHeadCell>
          <TableHeadCell>Státusz</TableHeadCell>
          <TableHeadCell>Kapacitás</TableHeadCell>
          <TableHeadCell>Műveletek</TableHeadCell>
        </tr>
      </thead>
      <tbody>
        {buses.map((bus) => (
          <tr key={bus.id}>
            <TableCell>{bus.plate}</TableCell>
            <TableCell>{bus.model}</TableCell>
            <TableCell>{bus.status}</TableCell>
            <TableCell>{bus.capacity}</TableCell>
            <TableCell>
              <EditButton to={`/buses/${bus.id}`}>
                Szerkesztés
              </EditButton>

              <DangerButton
                type="button"
                onClick={() => onDelete(bus.id)}
                disabled={isDeleting}
              >
                Törlés
              </DangerButton>
            </TableCell>
          </tr>
        ))}
      </tbody>
    </BusTableElement>
  );
}
