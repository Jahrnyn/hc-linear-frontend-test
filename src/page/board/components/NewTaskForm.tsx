// src/page/board/components/NewTaskForm.tsx
// Új feladat felvétele a board tetején – egyszerű form input + gomb.
import React from "react";
import {
  NewTaskFormContainer,
  NewTaskInput,
  NewTaskButton,
} from "../style/board.style";

type NewTaskFormProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
};

export function NewTaskForm({
  value,
  onChange,
  onSubmit,
  isSubmitting,
}: NewTaskFormProps) {
  return (
    <NewTaskFormContainer onSubmit={onSubmit}>
      <NewTaskInput
        type="text"
        placeholder="Új feladat címe..."
        value={value}
        onChange={onChange}
      />
      <NewTaskButton type="submit" disabled={isSubmitting}>
        Hozzáadás
      </NewTaskButton>
    </NewTaskFormContainer>
  );
}
