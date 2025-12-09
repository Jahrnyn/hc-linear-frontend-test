// src/page/buses/BusDetailPage.tsx
// Busz részletező + szerkesztő oldal. A módosítások TanStack Mutation-nel, a kiinduló adatot egy query tölti be
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBusQuery } from "../../hooks/buses/useBusQuery";
import { useUpdateBusMutation } from "../../hooks/buses/useUpdateBusMutation";
import type { Bus } from "../../types/bus.type";

import {
  InfoMessage,
  DetailPageContainer,
  DetailForm,
  FormField,
  FieldLabel,
  TextInput,
  SelectInput,
  DetailActions,
  PrimaryButton,
  SecondaryButton,
  BackButtonWrapper,
} from "./style/buses.style";

// Lokális „draft” típus – csak azok a mezők, amiket user módosít
type BusDraft = Partial<Bus>;

export default function BusDetailPage() {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id ? Number(params.id) : null;
  // BE. lekérdezése az adott buszra.
  const { data: bus, isLoading, isError } = useBusQuery(id);
  const updateMutation = useUpdateBusMutation();

  const [draft, setDraft] = useState<BusDraft>({});

  // Alap guard
  if (id === null || Number.isNaN(id)) {
    return <InfoMessage>Hibás azonosító.</InfoMessage>;
  }

  if (isLoading || !bus) {
    return <InfoMessage>Betöltés...</InfoMessage>;
  }

  if (isError) {
    return (
      <InfoMessage>
        Hiba történt a busz adatainak betöltésekor.
      </InfoMessage>
    );
  }

  // Az aktuális form érték: az eredeti busz + a lokális draft. Ha egy mezőhöz nem nyúlnak, az eredeti érték marad.
  const merged: Bus = {
    ...bus,
    ...draft,
    capacity: draft.capacity ?? bus.capacity,
  };

  // Input mezők változáskezelője – a megfelelő mezőt frissítjük a draftban
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setDraft((prev) => ({
      ...prev,
      [name]: name === "capacity" ? Number(value) : value,
    }));
  };

  // Mentés gomb kezelése – validáció + mutation
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!merged.plate || !merged.model) {
      alert("A rendszám és a modell megadása kötelező.");
      return;
    }

    updateMutation.mutate(merged, {
      onSuccess: () => {
        navigate("/buses");
      },
    });
  };

  const handleBack = () => {
    navigate("/buses");
  };

  return (
    <DetailPageContainer>
      <h1>Busz részletei / szerkesztése</h1>

      <BackButtonWrapper>
        <SecondaryButton type="button" onClick={handleBack}>
          Vissza a listához
        </SecondaryButton>
      </BackButtonWrapper>

      <DetailForm onSubmit={handleSubmit}>
        <FormField>
          <FieldLabel>Rendszám</FieldLabel>
          <TextInput
            name="plate"
            value={merged.plate}
            onChange={handleChange}
          />
        </FormField>

        <FormField>
          <FieldLabel>Modell</FieldLabel>
          <TextInput
            name="model"
            value={merged.model}
            onChange={handleChange}
          />
        </FormField>

        <FormField>
          <FieldLabel>Státusz</FieldLabel>
          <SelectInput
            name="status"
            value={merged.status}
            onChange={handleChange}
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
            value={merged.capacity}
            onChange={handleChange}
          />
        </FormField>

        <DetailActions>
          <PrimaryButton
            type="submit"
            disabled={updateMutation.isPending}
          >
            Mentés
          </PrimaryButton>

          <SecondaryButton type="button" onClick={handleBack}>
            Mégse
          </SecondaryButton>
        </DetailActions>
      </DetailForm>
    </DetailPageContainer>
  );
}
