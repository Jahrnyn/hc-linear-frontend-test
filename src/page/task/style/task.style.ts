// src/page/task/style/task.style.ts
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import {
  PageLayout,
  HoverSectionCard,
} from "../../../component/layout/style/layout.style";

// Az egész Task oldal a közös PageLayout stílust használja.
export const Page = PageLayout;

// Fejléc konténer a cím + alcím számára.
export const Header = styled("div")({
  textAlign: "center",
  marginBottom: "16px",
});

// A feladat-szekciók (kártyák) a hover-es SectionCard komponensre épülnek.
export const Card = HoverSectionCard;

// Kártya címsorának tipográfiája.
export const Title = styled(Typography)({
  fontWeight: 700,
  color: "var(--primary-color)",
  letterSpacing: ".5px",
  marginBottom: "4px",
});

// Alcím stílus a fő cím alatt.
export const Subtitle = styled(Typography)({
  color: "var(--text-color-lighter)",
  marginTop: "8px",
  fontSize: "1.1rem",
});

export const CodeBlock = styled("pre")({
    background: "rgba(0,0,0,0.35)",
    padding: "20px",
    borderRadius: "12px",
    color: "#cfe8ff",
    overflowX: "auto",
    marginTop: "16px",
    border: "1px solid rgba(255,255,255,0.1)",
});

export const Logo = styled("img")({
    width: "180px",
    height: "auto",
    margin: "0 auto",
    display: "block",
    marginBottom: "24px",
    filter: "drop-shadow(0 0 6px rgba(27,226,154,0.35))",
});
