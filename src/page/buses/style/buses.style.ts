// src/page/buses/style/buses.style.ts
// A Bus CRUD oldalhoz kapcsolódó stílus komponensek.
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

// Egységes info üzenet (hiba, betöltés stb.)
export const InfoMessage = styled("div")({
  padding: "24px",
  color: "var(--text-color-light)",
});

// A listázó oldal fő konténere.
export const BusesPageContainer = styled("div")({
  padding: "24px",
  color: "var(--text-color-light)",
});

export const PageTitle = styled("h1")({
  marginBottom: "16px",
});

// Új busz gomnb
export const AddBusButton = styled("button")({
  padding: "8px 16px",
  borderRadius: "var(--button-border-radius)",
  border: "none",
  cursor: "pointer",
  backgroundColor: "var(--button-background-color)",
  color: "white",
  boxShadow: "none",
  transition: "0.2s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 0 12px rgba(27, 226, 154, 0.35)",
  },
});

export const AddBusButtonWrapper = styled("div")({
  margin: "16px 0",
});

// Táblázat
export const BusTableElement = styled("table")({
  width: "100%",
  marginTop: "16px",
  borderCollapse: "collapse",
  background: "var(--main-color-50)",
});

export const TableHeadCell = styled("th")({
  textAlign: "left",
  padding: "8px 12px",
  borderBottom: "1px solid var(--border-color)",
});

export const TableCell = styled("td")({
  padding: "8px 12px",
  borderBottom: "1px solid var(--border-color)",
});

// Szerkesztés gomb (ami iagzából link)
export const EditButton = styled(Link)({
  padding: "6px 14px",
  borderRadius: "var(--button-border-radius)",
  border: "none",
  cursor: "pointer",
  display: "inline-block",
  fontSize: "0.9rem",
  textAlign: "center",
  textDecoration: "none",
  lineHeight: 1.2,
  backgroundColor: "var(--button-background-color-grey)",
  color: "var(--text-color-dark)",
  boxShadow: "none",
  marginRight: "8px",
  transition: "0.2s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 0 12px rgba(27, 226, 154, 0.35)",
  },
});

// Törlés gomb
export const DangerButton = styled("button")({
  padding: "6px 14px",
  borderRadius: "var(--button-border-radius)",
  border: "none",
  cursor: "pointer",
  display: "inline-block",
  fontSize: "0.9rem",
  textAlign: "center",
  textDecoration: "none",
  lineHeight: 1.2,
  backgroundColor: "var(--cancel-delete-button-color)",
  color: "white",
  boxShadow: "none",
  transition: "0.2s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 0 12px rgba(27, 226, 154, 0.35)",
  },
});

// Modal
export const ModalBackdrop = styled("div")({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
});

export const ModalContainer = styled("div")({
  backgroundColor: "var(--main-color)",
  borderRadius: "12px",
  padding: "24px",
  minWidth: "320px",
  maxWidth: "500px",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
});

export const ModalTitle = styled("h2")({
  marginTop: 0,
  marginBottom: "16px",
});

export const FormField = styled("div")({
  marginBottom: "12px",
});

export const FieldLabel = styled("label")({
  display: "block",
  marginBottom: "4px",
});

// Input mezők
export const TextInput = styled("input")({
  width: "100%",
  padding: "8px",
  borderRadius: "var(--input-border-radius)",
  border: "1px solid var(--border-color)",
  boxSizing: "border-box",
});

export const SelectInput = styled("select")({
  width: "100%",
  padding: "8px",
  borderRadius: "var(--input-border-radius)",
  border: "1px solid var(--border-color)",
  boxSizing: "border-box",
});

// Modal alján a gombok vízszintesen, jobbra igazítva.
export const ModalActions = styled("div")({
  display: "flex",
  gap: "8px",
  marginTop: "16px",
  justifyContent: "flex-end",
});

// Mégse
export const SecondaryButton = styled("button")({
  padding: "8px 16px",
  borderRadius: "var(--button-border-radius)",
  border: "none",
  cursor: "pointer",
  backgroundColor: "rgba(255,255,255,0.2)",
  color: "white",
  transition: "0.2s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 0 12px rgba(27, 226, 154, 0.35)",
  },
});

// Mentés
export const PrimaryButton = styled("button")({
  padding: "8px 16px",
  borderRadius: "var(--button-border-radius)",
  border: "none",
  cursor: "pointer",
  backgroundColor: "rgba(255,255,255,0.2)",
  color: "white",
  transition: "0.2s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 0 12px rgba(27, 226, 154, 0.35)",
  },
});

export const BackButtonWrapper = styled("div")({
  marginTop: "8px",
  marginBottom: "16px",
});

/** BusDetail specifikus konténerek */

// Részletező oldal fő konténer.
export const DetailPageContainer = styled("div")({
  padding: "24px",
  color: "var(--text-color-light)",
});

// Szerkesztő form a busz részletező oldalon.
export const DetailForm = styled("form")({
  marginTop: "16px",
  padding: "16px",
  backgroundColor: "var(--main-color-50)",
  borderRadius: "8px",
  maxWidth: "600px",
});

// Alsó gombsor konténer
export const DetailActions = styled("div")({
  display: "flex",
  gap: "8px",
  marginTop: "16px",
});

