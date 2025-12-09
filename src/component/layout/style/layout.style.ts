/* src/component/layout/style/layout.style.ts */
import { styled } from "@mui/material/styles";
import { Box, Paper } from "@mui/material";

export const PageLayout = styled(Box)({
  minHeight: "100vh",
  padding: "64px 32px",
  background: "linear-gradient(145deg, var(--main-color), #062f41 60%)",
  color: "var(--text-color-light)",
  display: "flex",
  flexDirection: "column",
  gap: "40px",
});

// alap kártya – nincs rajta hover
export const SectionCard = styled(Paper)({
  padding: "32px",
  borderRadius: "22px",
  background: "rgba(255,255,255,0.03)",
  backdropFilter: "blur(6px)",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
});

// HOVER-es variáns
export const HoverSectionCard = styled(SectionCard)({
  transition: "0.25s ease",
  "&:hover": {
    borderColor: "var(--primary-color)",
    boxShadow: "0 0 16px rgba(27,226,154,0.35)",
    transform: "translateY(-3px)",
  },
});
