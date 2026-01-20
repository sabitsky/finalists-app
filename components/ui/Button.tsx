import * as React from "react";
import { colors, font, motion, radii, shadows } from "@/lib/designSystem";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive" | "outline";

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  title?: string;
};

export function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  icon,
  style,
  title,
}: ButtonProps) {
  const base: React.CSSProperties = {
    appearance: "none",
    border: "1px solid transparent",
    borderRadius: radii.md,
    padding: "10px 12px",
    fontSize: font.size.md,
    fontWeight: font.weight.medium,
    lineHeight: font.line.md,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    userSelect: "none",
    WebkitTapHighlightColor: "transparent",
    transition: `transform ${motion.fast} ease, box-shadow ${motion.normal} ease, background ${motion.normal} ease, border-color ${motion.normal} ease`,
  };

  const variants: Record<ButtonVariant, React.CSSProperties> = {
    primary: {
      background: colors.brand,
      color: colors.white,
      borderColor: colors.brand,
      boxShadow: "none",
    },
    secondary: {
      background: colors.surfaceAlt,
      color: colors.ink,
      borderColor: colors.line,
      boxShadow: "none",
    },
    ghost: {
      background: "transparent",
      color: colors.ink,
      borderColor: "transparent",
      boxShadow: "none",
    },
    destructive: {
      background: colors.dangerBg,
      color: colors.dangerInk,
      borderColor: colors.dangerBd,
      boxShadow: "none",
    },
    outline: {
      background: colors.white,
      color: colors.ink,
      borderColor: colors.line,
      boxShadow: "none",
    },
  };

  return (
    <button
      title={title}
      onClick={disabled ? undefined : onClick}
      style={{ ...base, ...(variants[variant] || variants.primary), ...style }}
      onMouseDown={(e) => {
        if (disabled) return;
        e.currentTarget.style.transform = "scale(0.99)";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      {icon ? <span style={{ display: "inline-flex" }}>{icon}</span> : null}
      {children}
    </button>
  );
}
