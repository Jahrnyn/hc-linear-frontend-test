/* src/page/board/style/board.style.ts */
import { styled } from "@mui/material/styles";

// Teljes oldal konténer a boardhoz.
export const BoardPageContainer = styled("div")({
  padding: "24px",
  color: "var(--text-color-light)",
});

// A három oszlop vízszintesen egymás mellett.
export const ColumnsWrapper = styled("div")({
  marginTop: "16px",
  display: "flex",
  gap: "16px",
});

// Egy oszlop (todo / in_progress / done) kerete.
export const ColumnContainer = styled("div")({
  flex: 1,
  backgroundColor: "var(--main-color-30)",
  borderRadius: "12px",
  padding: "12px",
  minHeight: "200px",
});

export const ColumnTitle = styled("h2")({
  fontSize: "18px",
  marginBottom: "8px",
});

export const EmptyColumnText = styled("div")({
  fontSize: "14px",
  color: "var(--text-color-lighter)",
  fontStyle: "italic",
});

// Drag&drop kártya stílusa
export const TaskCardContainer = styled("div")({
  backgroundColor: "var(--background-color-dark)",
  borderRadius: "8px",
  padding: "8px 10px",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
  fontSize: "14px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "8px",
  cursor: "grab",
  transition: "0.2s ease",
  "&:hover": {
    boxShadow: "0 0 12px rgba(27,226,154,0.35)",
    transform: "translateY(-2px)",
  },
});

export const DeleteButton = styled("button")({
  border: "none",
  borderRadius: "4px",
  padding: "4px 8px",
  cursor: "pointer",
  backgroundColor: "var(--cancel-delete-button-color)",
  color: "white",
  fontSize: "12px",
});

// Új feladat
export const NewTaskFormContainer = styled("form")({
  marginTop: "12px",
  marginBottom: "20px",
  display: "flex",
  gap: "8px",
  maxWidth: "480px",
});

export const NewTaskInput = styled("input")({
  flex: 1,
  padding: "8px",
  borderRadius: "var(--input-border-radius)",
  border: "1px solid var(--border-color)",
});

export const NewTaskButton = styled("button")({
  padding: "8px 12px",
  borderRadius: "var(--button-border-radius)",
  border: "none",
  cursor: "pointer",
  backgroundColor: "var(--button-background-color)",
  color: "white",
  transition: "0.2s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 0 12px rgba(27, 226, 154, 0.35)",
  },
});

