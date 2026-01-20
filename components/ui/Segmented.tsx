import * as React from "react";
import { colors, font, radii } from "@/lib/designSystem";

export type SegmentedProps = {
  value: "finalists" | "compare";
  onChange: (value: "finalists" | "compare") => void;
};

export function Segmented({ value, onChange }: SegmentedProps) {
  const wrap: React.CSSProperties = {
    display: "flex",
    gap: 6,
    padding: 6,
    borderRadius: radii.pill,
    background: colors.surfaceAlt,
    border: `1px solid ${colors.line}`,
  };

  function Seg({ id, label }: { id: "finalists" | "compare"; label: string }) {
    const active = value === id;
    return (
      <button
        onClick={() => onChange(id)}
        style={{
          flex: 1,
          padding: "10px 12px",
          borderRadius: radii.pill,
          border: "1px solid transparent",
          fontSize: font.size.sm,
          fontWeight: 750,
          cursor: "pointer",
          background: active ? colors.inkStrong : colors.white,
          color: active ? colors.white : colors.inkStrong,
          boxShadow: active
            ? "0 10px 24px rgba(17,24,39,0.20)"
            : "0 8px 18px rgba(17,24,39,0.06)",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        {label}
      </button>
    );
  }

  return (
    <div style={wrap}>
      <Seg id="finalists" label="Финалисты" />
      <Seg id="compare" label="Сравнение" />
    </div>
  );
}
