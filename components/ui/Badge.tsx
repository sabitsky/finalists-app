import * as React from "react";
import { colors, font, radii } from "@/lib/designSystem";

export type BadgeVariant = "soft" | "outline" | "violet";

export type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  style?: React.CSSProperties;
};

export function Badge({ children, variant = "soft", style }: BadgeProps) {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "4px 10px",
    fontSize: font.size.xs,
    fontWeight: font.weight.medium,
    borderRadius: radii.md,
    border: "1px solid transparent",
    lineHeight: font.line.sm,
    whiteSpace: "nowrap",
  };

  const variants: Record<BadgeVariant, React.CSSProperties> = {
    soft: { background: colors.surfaceAlt, color: colors.ink, borderColor: colors.line },
    outline: { background: colors.white, color: colors.ink, borderColor: colors.line },
    violet: { background: colors.violetBg, color: colors.violetInk, borderColor: colors.violetBd },
  };

  return (
    <span style={{ ...base, ...(variants[variant] || variants.soft), ...style }}>
      {children}
    </span>
  );
}
