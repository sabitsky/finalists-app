export const colors = {
  ink: "#0F172A",
  inkStrong: "#111827",
  muted: "#64748B",
  slate: "#334155",
  white: "#FFFFFF",
  line: "#E5E7EB",
  surface: "#F8FAFC",
  surfaceAlt: "#F3F4F6",
  violetBg: "#F5F3FF",
  violetBd: "#EDE9FE",
  violetInk: "#5B21B6",
  dangerBg: "#FEE2E2",
  dangerBd: "#FECACA",
  dangerInk: "#991B1B",
  successBg: "#ECFDF5",
  successBd: "#A7F3D0",
  successInk: "#065F46",
  warnBg: "#FFFBEB",
  warnBd: "#FDE68A",
  warnInk: "#92400E",
  warnStrong: "#F59E0B",
  negative: "#F43F5E",
  positive: "#10B981",
} as const;

export const radii = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20,
  xl: 28,
  xxl: 36,
  pill: 999,
} as const;

export const shadows = {
  soft: "0 12px 28px rgba(17,24,39,0.06)",
  phone: "0 30px 60px rgba(15, 23, 42, 0.10)",
  button: "0 8px 20px rgba(17,24,39,0.18)",
  buttonSoft: "0 6px 18px rgba(17,24,39,0.08)",
  cardLift: "0 18px 30px rgba(15, 23, 42, 0.08)",
} as const;

export const space = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
  xxl: 14,
  xxxl: 16,
  huge: 18,
  mega: 20,
  giant: 24,
  jumbo: 28,
  massive: 30,
  avatarSm: 38,
  avatarMd: 48,
  avatarLg: 56,
} as const;

export const font = {
  size: {
    xs: 11,
    sm: 12,
    md: 13,
    lg: 14,
    xl: 15,
  },
  weight: {
    regular: 500,
    semibold: 650,
    bold: 750,
    extrabold: 850,
    black: 900,
  },
  line: {
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "17px",
  },
} as const;

export const motion = {
  fast: "120ms",
  normal: "160ms",
} as const;
