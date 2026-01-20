export const colors = {
  ink: "#1B1E23",
  inkStrong: "#1B1E23",
  muted: "#6B7280",
  slate: "#3A424A",
  white: "#FFFFFF",
  line: "#D7DAD6",
  surface: "#F5F7FA",
  surfaceAlt: "#EFEFEA",
  brand: "#1F3D32",
  accent: "#8F7A4A",
  violetBg: "#F1EEE7",
  violetBd: "#E2D8C6",
  violetInk: "#8F7A4A",
  dangerBg: "#F2E9E9",
  dangerBd: "#E6DADA",
  dangerInk: "#6F3A3A",
  successBg: "#E9EFEA",
  successBd: "#D6E0D8",
  successInk: "#1F3D32",
  warnBg: "#F3EFE6",
  warnBd: "#E6DCC9",
  warnInk: "#8F7A4A",
  warnStrong: "#8F7A4A",
  negative: "#6F3A3A",
  positive: "#1F3D32",
} as const;

export const radii = {
  xs: 6,
  sm: 8,
  md: 10,
  lg: 12,
  xl: 14,
  xxl: 16,
  pill: 10,
} as const;

export const shadows = {
  soft: "0 2px 6px rgba(27,30,35,0.06)",
  phone: "0 10px 30px rgba(27,30,35,0.10)",
  button: "0 2px 6px rgba(27,30,35,0.08)",
  buttonSoft: "0 1px 4px rgba(27,30,35,0.06)",
  cardLift: "0 4px 10px rgba(27,30,35,0.08)",
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
  family: {
    ui: "Inter, 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif",
    display: "'Libre Baskerville', 'Playfair Display', 'Times New Roman', serif",
  },
  size: {
    xs: 11,
    sm: 12,
    md: 13,
    lg: 14,
    xl: 15,
  },
  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
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
