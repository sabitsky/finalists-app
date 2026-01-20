import * as React from "react";
import { colors, radii, shadows } from "@/lib/designSystem";

export type CardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export function Card({ children, style }: CardProps) {
  return (
    <div
      style={{
        border: `1px solid ${colors.line}`,
        background: colors.white,
        borderRadius: radii.lg,
        boxShadow: "none",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
