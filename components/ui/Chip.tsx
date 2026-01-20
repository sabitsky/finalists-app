import * as React from "react";
import { colors, font, radii } from "@/lib/designSystem";

export type ChipProps = {
  children: React.ReactNode;
};

export function Chip({ children }: ChipProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "7px 10px",
        borderRadius: radii.pill,
        border: `1px solid ${colors.line}`,
        background: colors.white,
        fontSize: font.size.sm,
        fontWeight: font.weight.semibold,
        boxShadow: "0 10px 24px rgba(17,24,39,0.06)",
      }}
    >
      {children}
    </span>
  );
}
