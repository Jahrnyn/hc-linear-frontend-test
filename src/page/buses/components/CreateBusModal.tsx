// src/page/buses/components/CreateBusModal.tsx
// Új busz felvételét modal - form állapot, submit kivülről érkezik (listázó oldal)
import type { CreateBusPayload } from "../../../api/buses.api";
import {
  ModalBackdrop,
  ModalContainer,
  ModalTitle,
  FormField,
  FieldLabel,
  TextInput,
  SelectInput,
  ModalActions,
  SecondaryButton,
  PrimaryButton,
} from "../style/buses.style";

type CreateBusModalProps = {
  open: boolean;
  form: CreateBusPayload;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  isSubmitting: boolean;
};

export function CreateBusModal({
  open,
  form,
  onChange,
  onSubmit,
  onCancel,
  isSubmitting,
}: CreateBusModalProps) {
  if (!open) return null; // Ha nincs nyitva a modál, semmit nem renderelünk.

  // A backdrop-on való kattintás bezárja a modált, a belső konténer viszont megfogja a click eseményt
  return (
    <ModalBackdrop onClick={onCancel}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalTitle>Új busz felvétele</ModalTitle>

        <form onSubmit={onSubmit}>
          <FormField>
            <FieldLabel>Rendszám</FieldLabel>
            <TextInput name="plate" value={form.plate} onChange={onChange} />
          </FormField>

          <FormField>
            <FieldLabel>Modell</FieldLabel>
            <TextInput name="model" value={form.model} onChange={onChange} />
          </FormField>

          <FormField>
            <FieldLabel>Státusz</FieldLabel>
            <SelectInput
              name="status"
              value={form.status}
              onChange={onChange}
            >
              <option value="operational">operational</option>
              <option value="maintenance">maintenance</option>
            </SelectInput>
          </FormField>

          <FormField>
            <FieldLabel>Kapacitás</FieldLabel>
            <TextInput
              name="capacity"
              type="number"
              value={form.capacity}
              onChange={onChange}
            />
          </FormField>

          <ModalActions>
            <PrimaryButton type="submit" disabled={isSubmitting}>
              Mentés
            </PrimaryButton>
            <SecondaryButton type="button" onClick={onCancel}>
              Mégse
            </SecondaryButton>
          </ModalActions>
        </form>
      </ModalContainer>
    </ModalBackdrop>
  );
}
