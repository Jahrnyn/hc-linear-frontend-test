// src/page/buses/BusesListPage.tsx
// Buszok listázása, törlése és új busz felvétele modálon keresztül
import { useState } from "react";
import { useBusesQuery } from "../../hooks/buses/useBusesQuery";
import { useDeleteBusMutation } from "../../hooks/buses/useDeleteBusMutation";
import { useCreateBusMutation } from "../../hooks/buses/useCreateBusMutation";
import type { CreateBusPayload } from "../../api/buses.api";
import { BusTable } from "./components/BusTable";
import { CreateBusModal } from "./components/CreateBusModal";
import {
  BusesPageContainer,
  PageTitle,
  AddBusButtonWrapper,
  AddBusButton,
} from "./style/buses.style";
import { SectionCard } from "../../component/layout/style/layout.style";

export default function BusesListPage() {
  // Lekérdezés TanStack Query-vel.
  const { data: buses, isLoading, isError } = useBusesQuery();
  const deleteMutation = useDeleteBusMutation();
  const createMutation = useCreateBusMutation();

  // Modal + form state az új busz felvételéhez.
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [form, setForm] = useState<CreateBusPayload>({
    plate: "",
    model: "",
    status: "operational",
    capacity: 0,
  });

  // Alap handling
  if (isLoading) {
    return <div style={{ color: "white", padding: "24px" }}>Betöltés...</div>;
  }

  if (isError || !buses) {
    return (
      <div style={{ color: "white", padding: "24px" }}>
        Hiba történt a buszok betöltésekor.
      </div>
    );
  }

  // Törlés + megerősítés, majd mutation
  const handleDelete = (id: number) => {
    const confirmed = window.confirm("Biztosan törölni szeretnéd ezt a buszt?");
    if (!confirmed) return;

    deleteMutation.mutate(id);
  };

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const resetForm = () => {
    setForm({
      plate: "",
      model: "",
      status: "operational",
      capacity: 0,
    });
  };

  const handleCancelForm = () => {
    setIsFormOpen(false);
    resetForm();
  };

  // Új busz form mezőinek változáskezelése
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "capacity" ? Number(value) : value,
    }));
  };

  // Új busz mentése – siker esetén modál zárása + form reset.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.plate || !form.model) {
      alert("A rendszám és a modell megadása kötelező.");
      return;
    }

    createMutation.mutate(form, {
      onSuccess: () => {
        resetForm();
        setIsFormOpen(false);
      },
    });
  };

  return (
  <BusesPageContainer>
    <PageTitle>Buszok</PageTitle>

    <AddBusButtonWrapper>
      <AddBusButton type="button" onClick={handleOpenForm}>
        Új busz hozzáadása
      </AddBusButton>
    </AddBusButtonWrapper>

    <SectionCard elevation={0}>
      <BusTable
        buses={buses}
        onDelete={handleDelete}
        isDeleting={deleteMutation.isPending}
      />
    </SectionCard>

    <CreateBusModal
      open={isFormOpen}
      form={form}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onCancel={handleCancelForm}
      isSubmitting={createMutation.isPending}
    />
  </BusesPageContainer>
  );
}
