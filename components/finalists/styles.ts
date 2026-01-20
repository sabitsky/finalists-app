import { colors, font, radii, shadows } from "@/lib/designSystem";
import type { CSSProperties } from "react";

export const layoutStyles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    background: `linear-gradient(180deg, ${colors.surface} 0%, ${colors.surfaceAlt} 100%)`,
    padding: 16,
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    color: colors.ink,
  } satisfies CSSProperties,
  phone: {
    width: "100%",
    maxWidth: 390,
    margin: "0 auto",
    borderRadius: radii.xxl,
    border: `1px solid ${colors.line}`,
    background: colors.white,
    boxShadow: shadows.phone,
    overflow: "hidden",
  } satisfies CSSProperties,
  inner: { padding: 12 } satisfies CSSProperties,
  topRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    padding: "2px 2px 10px",
  } satisfies CSSProperties,
  subtle: { color: colors.muted, fontSize: font.size.sm, fontWeight: font.weight.semibold } satisfies CSSProperties,
  stickyActions: {
    position: "sticky",
    bottom: 0,
    paddingTop: 12,
    paddingBottom: 12,
    background: "rgba(255,255,255,0.92)",
    backdropFilter: "blur(10px)",
    borderTop: "1px solid rgba(229,231,235,0.8)",
  } satisfies CSSProperties,
} as const;

export const sharedStyles = {
  rowCenter: { display: "flex", alignItems: "center" } satisfies CSSProperties,
  rowBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  } satisfies CSSProperties,
  muted12: { fontSize: font.size.sm, color: colors.muted, fontWeight: font.weight.semibold } satisfies CSSProperties,
  muted11: { fontSize: font.size.xs, color: colors.muted, fontWeight: font.weight.semibold } satisfies CSSProperties,
} as const;

export function clamp2Style(): CSSProperties {
  return {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };
}
