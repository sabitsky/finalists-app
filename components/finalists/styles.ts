import { colors, font, radii, shadows } from "@/lib/designSystem";
import type { CSSProperties } from "react";

export const layoutStyles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    background: colors.surface,
    padding: 16,
    fontFamily: font.family.ui,
    fontVariantNumeric: "lining-nums",
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
    background: "rgba(245,247,250,0.95)",
    backdropFilter: "blur(8px)",
    borderTop: `1px solid ${colors.line}`,
  } satisfies CSSProperties,
} as const;

export const sharedStyles = {
  rowCenter: { display: "flex", alignItems: "center" } satisfies CSSProperties,
  rowBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  } satisfies CSSProperties,
  muted12: {
    fontSize: font.size.sm,
    color: colors.muted,
    fontWeight: font.weight.medium,
    fontFamily: font.family.ui,
  } satisfies CSSProperties,
  muted11: {
    fontSize: font.size.xs,
    color: colors.muted,
    fontWeight: font.weight.medium,
    fontFamily: font.family.ui,
  } satisfies CSSProperties,
} as const;

export function clamp2Style(): CSSProperties {
  return {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };
}
