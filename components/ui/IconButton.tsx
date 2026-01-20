import * as React from "react";
import { colors, radii } from "@/lib/designSystem";

export type IconButtonProps = {
  onClick?: () => void;
  icon: React.ReactNode;
  label: string;
  style?: React.CSSProperties;
};

export function IconButton({ onClick, icon, label, style }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        appearance: "none",
        border: `1px solid ${colors.line}`,
        background: colors.white,
        width: 36,
        height: 36,
        borderRadius: radii.pill,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 6px 18px rgba(17,24,39,0.06)",
        WebkitTapHighlightColor: "transparent",
        ...style,
      }}
    >
      {icon}
    </button>
  );
}
