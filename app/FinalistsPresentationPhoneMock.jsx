'use client'
import * as React from "react";

/**
 * Framer-clean, self-contained React component.
 * - No shadcn/ui
 * - No Tailwind
 * - No TypeScript
 * - No external icon libs (inline SVG icons)
 *
 * Usage in Framer:
 * 1) Assets → Code → New Code Component
 * 2) Paste this file content
 * 3) Drag the component onto a page
 */

// -------------------------
// Helpers & tiny UI kit
// -------------------------

function moneyEUR(n) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}

function clamp2Style() {
  return {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };
}

const TOKENS = {
  colors: {
    ink: "#0F172A",
    inkStrong: "#111827",
    muted: "#64748B",
    slate: "#334155",
    border: "#E5E7EB",
    borderSoft: "rgba(229,231,235,0.8)",
    surface: "#FFFFFF",
    surfaceAlt: "#F8FAFC",
    surfaceSoft: "#F3F4F6",
    overlay: "rgba(17,24,39,0.40)",
    positive: "#10B981",
    negative: "#F43F5E",
    warn: "#F59E0B",
    violetBg: "#F5F3FF",
    violetText: "#5B21B6",
    violetBorder: "#EDE9FE",
    destructiveBg: "#FEE2E2",
    destructiveText: "#991B1B",
    destructiveBorder: "#FECACA",
    riskLowBg: "#ECFDF5",
    riskLowBorder: "#A7F3D0",
    riskLowText: "#065F46",
    riskHighBg: "#FFF1F2",
    riskHighBorder: "#FECDD3",
    riskHighText: "#9F1239",
    riskMedBg: "#FFFBEB",
    riskMedBorder: "#FDE68A",
    riskMedText: "#92400E",
    dot: "#94A3B8",
    avatarA1: "#E7E5FF",
    avatarA2: "#FDF2F8",
    avatarB1: "#E5F6FF",
    avatarB2: "#ECFDF5",
    avatarC1: "#FFF1E7",
    avatarC2: "#EEF2FF",
    avatarAccentA: "#7C3AED",
    avatarAccentB: "#0EA5E9",
    avatarAccentC: "#F97316",
  },
  shadows: {
    buttonPrimary: "0 8px 20px rgba(17,24,39,0.18)",
    buttonSecondary: "0 6px 18px rgba(17,24,39,0.08)",
    buttonOutline: "0 6px 18px rgba(17,24,39,0.06)",
    buttonDestructive: "0 6px 18px rgba(153,27,27,0.10)",
    iconButton: "0 6px 18px rgba(17,24,39,0.06)",
    card: "0 12px 28px rgba(17,24,39,0.06)",
    phone: "0 30px 60px rgba(15, 23, 42, 0.10)",
    toneDot: "0 6px 16px rgba(17,24,39,0.12)",
    chip: "0 10px 24px rgba(17,24,39,0.06)",
    segmentedActive: "0 10px 24px rgba(17,24,39,0.20)",
    segmentedInactive: "0 8px 18px rgba(17,24,39,0.06)",
    pickBadge: "0 10px 20px rgba(17,24,39,0.25)",
    cardButton: "0 18px 30px rgba(15, 23, 42, 0.08)",
    compareCard: "0 14px 24px rgba(15, 23, 42, 0.06)",
    compareCell: "0 12px 22px rgba(15, 23, 42, 0.05)",
    sheet: "0 -24px 60px rgba(15,23,42,0.20)",
  },
};

function Icon({ name, size = 18, style }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style,
    "aria-hidden": true,
    focusable: false,
  };

  switch (name) {
    case "eye":
      return (
        <svg {...common}>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "share":
      return (
        <svg {...common}>
          <path d="M12 3v12" />
          <path d="M16 7l-4-4-4 4" />
          <path d="M4 13v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6" />
        </svg>
      );
    case "lock":
      return (
        <svg {...common}>
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M7 11V8a5 5 0 0 1 10 0v3" />
        </svg>
      );
    case "info":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      );
    case "play":
      return (
        <svg {...common}>
          <polygon points="10 8 16 12 10 16 10 8" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="M20 6L9 17l-5-5" />
        </svg>
      );
    case "x":
      return (
        <svg {...common}>
          <path d="M18 6L6 18" />
          <path d="M6 6l12 12" />
        </svg>
      );
    case "chevL":
      return (
        <svg {...common}>
          <path d="M15 18l-6-6 6-6" />
        </svg>
      );
    case "chevR":
      return (
        <svg {...common}>
          <path d="M9 18l6-6-6-6" />
        </svg>
      );
    case "star":
      return (
        <svg {...common}>
          <path d="M12 2l2.9 6.8L22 9.6l-5 4.2L18.6 22 12 18.3 5.4 22 7 13.8 2 9.6l7.1-.8L12 2z" />
        </svg>
      );
    case "compare":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="8" height="16" rx="2" />
          <rect x="13" y="4" width="8" height="16" rx="2" />
          <path d="M6 8h2" />
          <path d="M6 12h2" />
          <path d="M6 16h2" />
          <path d="M16 10h2" />
          <path d="M16 14h2" />
        </svg>
      );
    case "copy":
      return (
        <svg {...common}>
          <rect x="9" y="9" width="13" height="13" rx="2" />
          <rect x="2" y="2" width="13" height="13" rx="2" />
        </svg>
      );
    case "qr":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <path d="M14 14h3v3h-3z" />
          <path d="M18 18h3" />
          <path d="M18 21v-3" />
        </svg>
      );
    case "send":
      return (
        <svg {...common}>
          <path d="M22 2L11 13" />
          <path d="M22 2l-7 20-4-9-9-4 20-7z" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
      );
    case "undo":
      return (
        <svg {...common}>
          <path d="M3 7v6h6" />
          <path d="M21 17a8 8 0 0 0-13.3-6L3 13" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="M12 2l1.6 4.6L18 8l-4.4 1.4L12 14l-1.6-4.6L6 8l4.4-1.4L12 2z" />
          <path d="M19 13l.9 2.5L22 16l-2.1.7L19 19l-.9-2.3L16 16l2.1-.5L19 13z" />
        </svg>
      );
    case "list":
      return (
        <svg {...common}>
          <path d="M8 6h13" />
          <path d="M8 12h13" />
          <path d="M8 18h13" />
          <path d="M3 6h.01" />
          <path d="M3 12h.01" />
          <path d="M3 18h.01" />
        </svg>
      );
    case "chatQ":
      return (
        <svg {...common}>
          <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z" />
          <path d="M12 7.8a2 2 0 0 1 2 2c0 1.6-2 1.7-2 3" />
          <path d="M12 16h.01" />
        </svg>
      );

    // Risk icons (shield)
    case "riskLow":
      return (
        <svg {...common}>
          <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
          <path d="M16 9l-4.5 5L9 11.5" />
        </svg>
      );
    case "riskMed":
      return (
        <svg {...common}>
          <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
          <path d="M12 7v6" />
          <path d="M12 16h.01" />
        </svg>
      );
    case "riskHigh":
      return (
        <svg {...common}>
          <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
          <path d="M15 9l-6 6" />
          <path d="M9 9l6 6" />
        </svg>
      );

    default:
      return null;
  }
}

function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  icon,
  style,
  title,
}) {
  const base = {
    appearance: "none",
    border: "1px solid transparent",
    borderRadius: 16,
    padding: "10px 12px",
    fontSize: 13,
    fontWeight: 650,
    lineHeight: "16px",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    userSelect: "none",
    WebkitTapHighlightColor: "transparent",
    transition:
      "transform 120ms ease, box-shadow 160ms ease, background 160ms ease, border-color 160ms ease",
  };

  const variants = {
    primary: {
      background: TOKENS.colors.inkStrong,
      color: TOKENS.colors.surface,
      boxShadow: TOKENS.shadows.buttonPrimary,
    },
    secondary: {
      background: TOKENS.colors.surfaceSoft,
      color: TOKENS.colors.inkStrong,
      borderColor: TOKENS.colors.border,
      boxShadow: TOKENS.shadows.buttonSecondary,
    },
    ghost: {
      background: "transparent",
      color: TOKENS.colors.inkStrong,
      borderColor: "transparent",
      boxShadow: "none",
    },
    destructive: {
      background: TOKENS.colors.destructiveBg,
      color: TOKENS.colors.destructiveText,
      borderColor: TOKENS.colors.destructiveBorder,
      boxShadow: TOKENS.shadows.buttonDestructive,
    },
    outline: {
      background: TOKENS.colors.surface,
      color: TOKENS.colors.inkStrong,
      borderColor: TOKENS.colors.border,
      boxShadow: TOKENS.shadows.buttonOutline,
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

function IconButton({ onClick, icon, label, style }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        appearance: "none",
        border: `1px solid ${TOKENS.colors.border}`,
        background: TOKENS.colors.surface,
        width: 36,
        height: 36,
        borderRadius: 999,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: TOKENS.shadows.iconButton,
        WebkitTapHighlightColor: "transparent",
        ...style,
      }}
    >
      {icon}
    </button>
  );
}

function Badge({ children, variant = "soft", style }) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "4px 10px",
    fontSize: 11,
    fontWeight: 650,
    borderRadius: 999,
    border: "1px solid transparent",
    lineHeight: "14px",
    whiteSpace: "nowrap",
  };
  const variants = {
    soft: {
      background: TOKENS.colors.surfaceSoft,
      color: TOKENS.colors.inkStrong,
      borderColor: TOKENS.colors.border,
    },
    outline: {
      background: TOKENS.colors.surface,
      color: TOKENS.colors.inkStrong,
      borderColor: TOKENS.colors.border,
    },
    violet: {
      background: TOKENS.colors.violetBg,
      color: TOKENS.colors.violetText,
      borderColor: TOKENS.colors.violetBorder,
    },
  };
  return (
    <span style={{ ...base, ...(variants[variant] || variants.soft), ...style }}>
      {children}
    </span>
  );
}

function Card({ children, style }) {
  return (
    <div
      style={{
        border: `1px solid ${TOKENS.colors.border}`,
        background: TOKENS.colors.surface,
        borderRadius: 20,
        boxShadow: TOKENS.shadows.card,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Separator({ style }) {
  return (
    <div
      style={{ height: 1, background: TOKENS.colors.border, width: "100%", ...style }}
    />
  );
}

function Segmented({ value, onChange }) {
  const wrap = {
    display: "flex",
    gap: 6,
    padding: 6,
    borderRadius: 999,
    background: TOKENS.colors.surfaceSoft,
    border: `1px solid ${TOKENS.colors.border}`,
  };

  function Seg({ id, label }) {
    const active = value === id;
    return (
      <button
        onClick={() => onChange(id)}
        style={{
          flex: 1,
          padding: "10px 12px",
          borderRadius: 999,
          border: "1px solid transparent",
          fontSize: 12,
          fontWeight: 750,
          cursor: "pointer",
          background: active ? TOKENS.colors.inkStrong : TOKENS.colors.surface,
          color: active ? TOKENS.colors.surface : TOKENS.colors.inkStrong,
          boxShadow: active
            ? TOKENS.shadows.segmentedActive
            : TOKENS.shadows.segmentedInactive,
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

function Overlay({ open, onClose, children, align = "center" }) {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: align === "bottom" ? "flex-end" : "center",
        justifyContent: "center",
        background: TOKENS.colors.overlay,
        padding: 16,
      }}
    >
      <button
        aria-label="Закрыть"
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          border: "none",
          background: "transparent",
        }}
      />
      {children}
    </div>
  );
}

function ToneDot({ tone }) {
  const color =
    tone === "pos" ? TOKENS.colors.positive : tone === "neg" ? TOKENS.colors.negative : TOKENS.colors.warn;
  return (
    <span
      style={{
        width: 8,
        height: 8,
        borderRadius: 999,
        background: color,
        boxShadow: TOKENS.shadows.toneDot,
        display: "inline-block",
      }}
    />
  );
}

function Chip({ children }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "7px 10px",
        borderRadius: 999,
        border: `1px solid ${TOKENS.colors.border}`,
        background: TOKENS.colors.surface,
        fontSize: 12,
        fontWeight: 650,
        boxShadow: TOKENS.shadows.chip,
      }}
    >
      {children}
    </span>
  );
}

function Avatar({ src, alt, size = 56, radius = 18, style, children }) {
  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        borderRadius: radius,
        overflow: "hidden",
        background: TOKENS.colors.border,
        flexShrink: 0,
        ...style,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      {children}
    </div>
  );
}

function RiskPill({ risk }) {
  const meta =
    risk === "low"
      ? {
          label: "Низкий",
          icon: "riskLow",
          bg: TOKENS.colors.riskLowBg,
          bd: TOKENS.colors.riskLowBorder,
          fg: TOKENS.colors.riskLowText,
        }
      : risk === "high"
      ? {
          label: "Высокий",
          icon: "riskHigh",
          bg: TOKENS.colors.riskHighBg,
          bd: TOKENS.colors.riskHighBorder,
          fg: TOKENS.colors.riskHighText,
        }
      : {
          label: "Средний",
          icon: "riskMed",
          bg: TOKENS.colors.riskMedBg,
          bd: TOKENS.colors.riskMedBorder,
          fg: TOKENS.colors.riskMedText,
        };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 10px",
        borderRadius: 999,
        background: meta.bg,
        border: `1px solid ${meta.bd}`,
        color: meta.fg,
        fontSize: 11,
        fontWeight: 750,
        lineHeight: "14px",
        whiteSpace: "nowrap",
      }}
    >
      <Icon name={meta.icon} size={14} /> Риск: {meta.label}
    </span>
  );
}

function RecommendedPill() {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 10px",
        borderRadius: 999,
        background: TOKENS.colors.violetBg,
        border: `1px solid ${TOKENS.colors.violetBorder}`,
        color: TOKENS.colors.violetText,
        fontSize: 11,
        fontWeight: 750,
        lineHeight: "14px",
        whiteSpace: "nowrap",
      }}
    >
      <Icon name="star" size={14} /> Рекомендую
    </span>
  );
}

function svgAvatar(seed, title) {
  // Lightweight pseudo-photo placeholder (always works offline).
  const bg1 = seed === "a" ? TOKENS.colors.avatarA1 : seed === "b" ? TOKENS.colors.avatarB1 : TOKENS.colors.avatarC1;
  const bg2 = seed === "a" ? TOKENS.colors.avatarA2 : seed === "b" ? TOKENS.colors.avatarB2 : TOKENS.colors.avatarC2;
  const accent = seed === "a" ? TOKENS.colors.avatarAccentA : seed === "b" ? TOKENS.colors.avatarAccentB : TOKENS.colors.avatarAccentC;
  const initials = title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => (s[0] ? s[0].toUpperCase() : ""))
    .join("");

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${bg1}"/>
        <stop offset="1" stop-color="${bg2}"/>
      </linearGradient>
      <radialGradient id="r" cx="35%" cy="30%" r="70%">
        <stop offset="0" stop-color="white" stop-opacity="0.85"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="160" height="160" rx="28" fill="url(#g)"/>
    <circle cx="60" cy="62" r="44" fill="url(#r)"/>
    <circle cx="86" cy="78" r="52" fill="${accent}" opacity="0.10"/>
    <path d="M40 130c9-26 28-39 40-39s31 13 40 39" fill="${accent}" opacity="0.14"/>
    <circle cx="80" cy="66" r="26" fill="${accent}" opacity="0.18"/>
    <text x="80" y="94" font-family="Inter, system-ui, -apple-system" font-size="28" text-anchor="middle" fill="${accent}" opacity="0.78" font-weight="800">${initials}</text>
  </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

// -------------------------
// Main component
// -------------------------

export default function FinalistsPresentationPhoneMock() {
  const position = {
    role: "Англоговорящая няня (с проживанием)",
    location: "Дубай ⇄ Белград",
    finalists: 3,
    total: 42,
    preparedBy: "Ассистент",
    updatedAt: "сегодня 13:40",
  };

  const candidates = React.useMemo(
    () => [
      {
        id: "c1",
        name: "А.К.",
        title: "Гувернантка / English-only",
        location: "Белград (готова к релокации)",
        compMonthlyEUR: 5200,
        availability: "Старт через 10 дней",
        risk: "low",
        assistantRecommended: true,
        decisionReadyBadges: ["ID подтверждён", "Дипломы проверены", "Рекомендации созвонены"],
        why: [
          "8 лет в UHNW-семьях + 2 года гувернанткой",
          "Режим и границы: спокойно, без давления",
          "Сильные долгие рекомендации",
        ],
        riskNotes: ["Рисков не выявлено", "Стабильные долгие контракты"],
        highlights: [
          { k: "Английский", v: "C2 (IELTS 8.0)", tone: "pos" },
          { k: "Ротации", v: "ОК", tone: "pos" },
          { k: "Опыт", v: "8 лет UHNW", tone: "pos" },
          { k: "Животные", v: "аллергий нет", tone: "pos" },
        ],
        introSeconds: 22,
        photoDataUri: svgAvatar("a", "A K"),
      },
      {
        id: "c2",
        name: "М.С.",
        title: "Няня (Montessori)",
        location: "Алматы",
        compMonthlyEUR: 4600,
        availability: "Старт через 3–4 недели",
        risk: "med",
        decisionReadyBadges: ["ID подтверждён", "First-aid сертификат", "Рекомендации созвонены"],
        why: [
          "Montessori (3–7 лет) + раннее развитие",
          "Тёплая коммуникация с родителями",
          "Хорошо в семьях с несколькими детьми",
        ],
        riskNotes: ["Нужны чёткие границы графика", "Не водит авто"],
        highlights: [
          { k: "Английский", v: "B2+", tone: "mid" },
          { k: "First aid", v: "есть", tone: "pos" },
          { k: "Ротации", v: "ограниченно", tone: "mid" },
          { k: "Вождение", v: "нет", tone: "neg" },
        ],
        introSeconds: 28,
        photoDataUri: svgAvatar("b", "M S"),
      },
      {
        id: "c3",
        name: "Е.П.",
        title: "Няня + репетитор (англ/мат)",
        location: "Киев (сейчас в ЕС)",
        compMonthlyEUR: 5900,
        availability: "Старт на следующей неделе",
        risk: "med",
        decisionReadyBadges: ["ID подтверждён", "Дипломы проверены", "Рекомендации созвонены"],
        why: [
          "Плюс репетиторство: английский + математика",
          "Энергия: спорт, прогулки, режим",
          "Готов(а) закрывать вечера при необходимости",
        ],
        riskNotes: ["Высокий уровень компенсации", "Стиль может быть слишком энергичным"],
        highlights: [
          { k: "Английский", v: "C1", tone: "pos" },
          { k: "Репетитор", v: "да", tone: "pos" },
          { k: "Вечера", v: "да", tone: "pos" },
          { k: "Компенсация", v: "высокая", tone: "neg" },
        ],
        introSeconds: 18,
        photoDataUri: svgAvatar("c", "E P"),
      },
    ],
    []
  );

  const [tab, setTab] = React.useState("finalists");
  const [selectedIdx, setSelectedIdx] = React.useState(0);

  const [detailOpen, setDetailOpen] = React.useState(false);
  const [whyOpen, setWhyOpen] = React.useState(false);
  const [shareOpen, setShareOpen] = React.useState(false);
  const [confirmOpen, setConfirmOpen] = React.useState(null); // "pick" | "none" | null

  const [pickedId, setPickedId] = React.useState(null);

  const current = candidates[selectedIdx];
  const picked = pickedId ? candidates.find((c) => c.id === pickedId) : null;

  const comparison = React.useMemo(() => {
    return [
      { k: "Английский", v: ["C2", "B2+", "C1"] },
      { k: "Ротации", v: ["да", "ограниченно", "да"] },
      { k: "Репетиторство", v: ["опц.", "нет", "да"] },
      { k: "Старт", v: ["10 дней", "3–4 недели", "след. неделя"] },
      { k: "€ / месяц", v: [moneyEUR(5200), moneyEUR(4600), moneyEUR(5900)] },
    ];
  }, []);

  // -------------------------
  // Layout styles
  // -------------------------

  const page = {
    minHeight: "100vh",
    width: "100%",
    background: `linear-gradient(180deg, ${TOKENS.colors.surfaceAlt} 0%, ${TOKENS.colors.surfaceSoft} 100%)`,
    padding: 16,
    fontFamily:
      "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    color: TOKENS.colors.ink,
  };

  const phone = {
    width: "100%",
    maxWidth: 390,
    margin: "0 auto",
    borderRadius: 36,
    border: `1px solid ${TOKENS.colors.border}`,
    background: TOKENS.colors.surface,
    boxShadow: TOKENS.shadows.phone,
    overflow: "hidden",
  };

  const inner = { padding: 12 };

  const topRow = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    padding: "2px 2px 10px",
  };

  const subtle = { color: TOKENS.colors.muted, fontSize: 12, fontWeight: 650 };

  const stickyActions = {
    position: "sticky",
    bottom: 0,
    paddingTop: 10,
    paddingBottom: 6,
    background: "rgba(255,255,255,0.92)",
    backdropFilter: "blur(10px)",
    borderTop: `1px solid ${TOKENS.colors.borderSoft}`,
  };

  const styles = {
    rowBetween: { display: "flex", alignItems: "center", justifyContent: "space-between" },
    rowCenter: { display: "flex", alignItems: "center" },
    rowStart: { display: "flex", alignItems: "flex-start" },
    col: { display: "flex", flexDirection: "column" },
    grid2: { display: "grid", gridTemplateColumns: "1fr 1fr" },
    grid3: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr" },
    mutedSm: { fontSize: 12, color: TOKENS.colors.muted, fontWeight: 650 },
    mutedXs: { fontSize: 11, color: TOKENS.colors.muted, fontWeight: 650 },
  };

  // -------------------------
  // Render
  // -------------------------

  return (
    <div style={page}>
      <div style={phone}>
        <div style={inner}>
          {/* Top bar */}
          <div style={topRow}>
            <div style={{ ...styles.rowCenter, gap: 8, ...subtle }}>
              <Icon name="eye" size={18} style={{ color: "#111827" }} />
              Просмотр (принципал)
            </div>

            <IconButton
              onClick={() => setShareOpen(true)}
              label="Поделиться"
              icon={<Icon name="share" size={18} style={{ color: "#111827" }} />}
            />
          </div>

          {/* Ultra-short position header */}
          <Card>
            <div style={{ padding: 14 }}>
              <div style={{ ...styles.rowBetween, alignItems: "flex-start", gap: 12 }}>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 15, fontWeight: 800, lineHeight: "18px" }}>
                    {position.role}
                  </div>
                  <div style={{ marginTop: 4, ...styles.mutedSm }}>
                    {position.location}
                  </div>
                </div>
                <Badge variant="soft" style={{ flexShrink: 0 }}>
                  {position.finalists}/{position.total}
                </Badge>
              </div>

              <div style={{ marginTop: 10, ...styles.rowBetween, alignItems: "flex-start", gap: 10 }}>
                <div style={{ ...styles.rowStart, gap: 8, minWidth: 0 }}>
                  <Icon name="lock" size={18} style={{ color: "#111827", marginTop: 1 }} />
                  <div style={{ ...styles.mutedSm, lineHeight: "16px" }}>
                    Приватно: доступ только по прямой ссылке, не индексируется.
                    <br />
                    Данных принципала здесь нет — только анкеты соискателей.
                  </div>
                </div>

                <Button
                  variant="ghost"
                  onClick={() => setWhyOpen(true)}
                  icon={<Icon name="info" size={18} />}
                  style={{ padding: "8px 10px", borderRadius: 999, borderColor: "transparent" }}
                >
                  Почему
                </Button>
              </div>
            </div>
          </Card>

          {/* Segmented nav */}
          <div style={{ marginTop: 12 }}>
            <Segmented value={tab} onChange={setTab} />
          </div>

          {/* Tab content */}
          <div style={{ marginTop: 12 }}>
            {tab === "finalists" ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ ...styles.rowBetween, padding: "0 2px" }}>
                  <div style={{ fontSize: 14, fontWeight: 850 }}>3 финалиста</div>
                  <div style={styles.mutedSm}>Нажмите для деталей</div>
                </div>

                <div style={{ ...styles.col, gap: 10 }}>
                  {candidates.map((c, i) => {
                    const isPicked = pickedId === c.id;
                    return (
                      <button
                        key={c.id}
                        onClick={() => {
                          setSelectedIdx(i);
                          setDetailOpen(true);
                        }}
                        style={{
                          appearance: "none",
                          border: isPicked ? "1px solid #111827" : "1px solid #E5E7EB",
                          background: "#FFFFFF",
                          borderRadius: 20,
                          padding: 12,
                          textAlign: "left",
                          cursor: "pointer",
                          boxShadow: "0 18px 30px rgba(15, 23, 42, 0.08)",
                          WebkitTapHighlightColor: "transparent",
                        }}
                        aria-label={`Открыть ${c.name}`}
                      >
                        <div style={{ ...styles.rowStart, gap: 12 }}>
                          <Avatar src={c.photoDataUri} alt={`Фото ${c.name}`} size={56} radius={18}>
                            {isPicked ? (
                              <span
                                style={{
                                  position: "absolute",
                                  top: -6,
                                  right: -6,
                                  width: 26,
                                  height: 26,
                                  borderRadius: 999,
                                  background: "#111827",
                                  color: "#FFFFFF",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  boxShadow: "0 10px 20px rgba(17,24,39,0.25)",
                                }}
                              >
                                <Icon name="check" size={16} />
                              </span>
                            ) : null}
                          </Avatar>

                          <div style={{ minWidth: 0, flex: 1 }}>
                            <div style={{ ...styles.rowBetween, alignItems: "flex-start", gap: 10 }}>
                              <div style={{ minWidth: 0 }}>
                                <div style={{ ...styles.rowCenter, gap: 8, flexWrap: "wrap" }}>
                                  <div style={{ fontSize: 15, fontWeight: 850, maxWidth: 150, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                    {c.name}
                                  </div>
                                  {c.assistantRecommended ? <RecommendedPill /> : null}
                                </div>
                                <div style={{ marginTop: 3, ...styles.mutedSm, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                  {c.title}
                                </div>
                              </div>

                              <div style={{ textAlign: "right", flexShrink: 0 }}>
                                <div style={{ fontSize: 14, fontWeight: 900 }}>{moneyEUR(c.compMonthlyEUR)}</div>
                                <div style={styles.mutedXs}>в месяц</div>
                              </div>
                            </div>

                            <div style={{ marginTop: 8, ...styles.rowCenter, gap: 8, flexWrap: "wrap" }}>
                              <RiskPill risk={c.risk} />
                              <Badge variant="soft">{c.availability}</Badge>
                            </div>

                            <div
                              style={{
                                marginTop: 8,
                                borderRadius: 16,
                                border: "1px solid #E5E7EB",
                                background: "#F8FAFC",
                                padding: "8px 10px",
                                ...styles.rowBetween,
                                gap: 10,
                              }}
                            >
                              <div style={{ ...styles.rowCenter, gap: 8, fontSize: 12, fontWeight: 750, color: "#0F172A" }}>
                                <Icon name="play" size={18} />
                                Видео-визитка · {c.introSeconds}с
                              </div>
                              <Badge variant="outline">Транскрипт</Badge>
                            </div>

                            <div style={{ marginTop: 8 }}>
                              <div style={{ fontSize: 11, fontWeight: 900, color: "#334155" }}>Почему этот кандидат</div>
                              <ul style={{ marginTop: 6, paddingLeft: 0, listStyle: "none", ...styles.col, gap: 6 }}>
                                {c.why.slice(0, 3).map((w, wi) => (
                                  <li key={wi} style={{ ...styles.rowStart, gap: 8 }}>
                                    <span style={{ width: 6, height: 6, borderRadius: 999, background: "#94A3B8", marginTop: 6, flexShrink: 0 }} />
                                    <span style={{ fontSize: 12, fontWeight: 650, color: "#0F172A", lineHeight: "16px", ...clamp2Style() }}>
                                      {w}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div style={{ padding: "0 2px", ...styles.mutedXs, lineHeight: "14px" }}>
                  Можно переслать ссылку супруге: она сможет выбрать кандидата, задать вопросы или вернуть на доработку.
                </div>
              </div>
            ) : null}

            {tab === "compare" ? (
              <div style={{ ...styles.col, gap: 10 }}>
                <div style={{ ...styles.rowBetween, padding: "0 2px" }}>
                  <div style={{ ...styles.rowCenter, gap: 8, fontSize: 14, fontWeight: 850 }}>
                    <Icon name="compare" size={18} /> Сравнение
                  </div>
                  <div style={styles.mutedSm}>Нажмите по колонке</div>
                </div>

                <Card>
                  <div style={{ padding: 14, ...styles.col, gap: 12 }}>
                    {/* Compare header */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                      {candidates.map((c, j) => {
                        const isPicked = pickedId === c.id;
                        return (
                          <button
                            key={c.id}
                            onClick={() => {
                              setSelectedIdx(j);
                              setDetailOpen(true);
                            }}
                            style={{
                              appearance: "none",
                              borderRadius: 18,
                              border: isPicked ? "1px solid #111827" : "1px solid #E5E7EB",
                              background: isPicked ? "#F8FAFC" : "#FFFFFF",
                              padding: 10,
                              textAlign: "left",
                              cursor: "pointer",
                              boxShadow: "0 14px 24px rgba(15, 23, 42, 0.06)",
                              WebkitTapHighlightColor: "transparent",
                            }}
                          >
                            <div style={{ ...styles.rowCenter, gap: 8 }}>
                              <Avatar src={c.photoDataUri} alt={`Фото ${c.name}`} size={38} radius={14} />
                              <div style={{ minWidth: 0 }}>
                                <div style={{ fontSize: 13, fontWeight: 850, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                  {c.name}
                                </div>
                                <div style={{ ...styles.mutedXs, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                  {moneyEUR(c.compMonthlyEUR)}
                                </div>
                              </div>
                            </div>

                            <div style={{ marginTop: 8, display: "flex", gap: 6, flexWrap: "wrap" }}>
                              <RiskPill risk={c.risk} />
                              {c.assistantRecommended ? <Badge variant="violet">★ Рекомендую</Badge> : null}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <Separator />

                    {/* Compare rows */}
                    {comparison.map((row, i) => (
                      <div key={row.k} style={{ ...styles.col, gap: 8 }}>
                        <div style={{ fontSize: 12, fontWeight: 900, color: "#334155" }}>{row.k}</div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                          {row.v.map((v, j) => (
                            <button
                              key={j}
                              onClick={() => {
                                setSelectedIdx(j);
                                setDetailOpen(true);
                              }}
                              style={{
                                appearance: "none",
                                borderRadius: 14,
                                border: "1px solid #E5E7EB",
                                background: j === selectedIdx ? "#F8FAFC" : "#FFFFFF",
                                padding: "9px 10px",
                                fontSize: 13,
                                fontWeight: 800,
                                color: "#0F172A",
                                textAlign: "left",
                                cursor: "pointer",
                                boxShadow: "0 12px 22px rgba(15, 23, 42, 0.05)",
                                WebkitTapHighlightColor: "transparent",
                              }}
                            >
                              {v}
                            </button>
                          ))}
                        </div>
                        {i !== comparison.length - 1 ? <Separator style={{ opacity: 0.6 }} /> : null}
                      </div>
                    ))}

                    <div style={styles.mutedXs}>
                      В сравнении показано только то, что помогает принять решение быстро.
                    </div>
                  </div>
                </Card>
              </div>
            ) : null}
          </div>

          {/* Bottom actions */}
          <div style={stickyActions}>
            <div style={{ ...styles.grid2, gap: 10 }}>
              <Button
                variant="secondary"
                onClick={() => setConfirmOpen("none")}
                icon={<Icon name="search" size={18} />}
              >
                Никто не подошёл
              </Button>
              <Button
                onClick={() => setConfirmOpen("pick")}
                disabled={!pickedId}
                icon={<Icon name="send" size={18} />}
              >
                {picked ? `Подтвердить: ${picked.name}` : "Подтвердить выбор"}
              </Button>
            </div>
            <div style={{ marginTop: 8, textAlign: "center", ...styles.mutedXs }}>
              Решение уйдёт ассистенту в структурированном виде.
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 390, margin: "10px auto 0", textAlign: "center", ...styles.mutedSm }}>
        Прототип · мобильный экран · заглушки для фото/видео/документов.
      </div>

      {/* WHY modal */}
      <Overlay open={whyOpen} onClose={() => setWhyOpen(false)} align="center">
        <div style={{ width: "100%", maxWidth: 380 }}>
          <Card>
            <div style={{ padding: 14 }}>
              <div style={{ fontSize: 15, fontWeight: 900 }}>Почему это лучше «бумажек»</div>
              <div style={{ marginTop: 4, ...styles.mutedSm }}>
                Подготовил: {position.preparedBy} · обновлено: {position.updatedAt}
              </div>

              <div style={{ marginTop: 12, ...styles.col, gap: 10 }}>
                <div style={{ borderRadius: 18, border: "1px solid #E5E7EB", background: "#F8FAFC", padding: 12 }}>
                  <div style={{ ...styles.rowCenter, gap: 8, fontSize: 13, fontWeight: 900 }}>
                    <Icon name="spark" size={18} /> Привычный формат = быстрее решение
                  </div>
                  <div style={{ marginTop: 6, ...styles.mutedSm, lineHeight: "16px" }}>
                    Один и тот же шаблон дисциплинирует ассистента и снимает лишнюю когнитивную нагрузку у принципала.
                  </div>
                </div>

                <div style={{ borderRadius: 18, border: "1px solid #E5E7EB", background: "#F8FAFC", padding: 12 }}>
                  <div style={{ fontSize: 13, fontWeight: 900 }}>Короткая мысль по сути</div>
                  <div style={{ marginTop: 8, borderRadius: 16, border: "1px solid #E5E7EB", background: "#FFFFFF", padding: 12 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#0F172A", lineHeight: "17px" }}>
                      «Если вы не можете описать то, что делаете, как процесс — вы не знаете, что вы делаете»
                    </div>
                    <div style={{ marginTop: 6, ...styles.mutedSm }}>
                      — У. Эдвардс Деминг
                    </div>
                  </div>
                </div>

                <div style={{ ...styles.grid2, gap: 10 }}>
                  <div style={{ borderRadius: 18, border: "1px solid #E5E7EB", background: "#F8FAFC", padding: 12 }}>
                    <div style={{ ...styles.rowCenter, gap: 8, fontSize: 13, fontWeight: 900 }}>
                      <Icon name="send" size={18} /> Решение фиксируется
                    </div>
                    <div style={{ marginTop: 6, ...styles.mutedSm, lineHeight: "16px" }}>
                      Выбор/вопросы уходят ассистенту сразу, без пересказов.
                    </div>
                  </div>
                  <div style={{ borderRadius: 18, border: "1px solid #E5E7EB", background: "#F8FAFC", padding: 12 }}>
                    <div style={{ ...styles.rowCenter, gap: 8, fontSize: 13, fontWeight: 900 }}>
                      <Icon name="lock" size={18} /> Приватно
                    </div>
                    <div style={{ marginTop: 6, ...styles.mutedSm, lineHeight: "16px" }}>
                      Только по ссылке. Можно отозвать доступ.
                    </div>
                  </div>
                </div>

                <div style={{ ...styles.grid2, gap: 10 }}>
                  <Button variant="secondary" onClick={() => setWhyOpen(false)}>
                    Закрыть
                  </Button>
                  <Button onClick={() => setWhyOpen(false)}>Понял</Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Overlay>

      {/* SHARE modal */}
      <Overlay open={shareOpen} onClose={() => setShareOpen(false)} align="center">
        <div style={{ width: "100%", maxWidth: 380 }}>
          <Card>
            <div style={{ padding: 14 }}>
              <div style={{ fontSize: 15, fontWeight: 900 }}>Поделиться приватной ссылкой</div>
              <div style={{ marginTop: 4, ...styles.mutedSm, lineHeight: "16px" }}>
                Например, супруге: она сможет выбрать кандидата, задать вопросы или вернуть на доработку.
              </div>

              <div style={{ marginTop: 12, borderRadius: 18, border: "1px solid #E5E7EB", background: "#F8FAFC", padding: 12 }}>
                <div style={{ ...styles.rowStart, gap: 8 }}>
                  <Icon name="lock" size={18} style={{ marginTop: 1 }} />
                  <div style={{ ...styles.mutedSm, lineHeight: "16px" }}>
                    Доступ только по прямой ссылке. Не индексируется. Данные принципала не отображаются.
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 12, ...styles.grid2, gap: 10 }}>
                <Button variant="secondary" icon={<Icon name="copy" size={18} />} onClick={() => {}}>
                  Скопировать
                </Button>
                <Button variant="secondary" icon={<Icon name="qr" size={18} />} onClick={() => {}}>
                  QR-код
                </Button>
              </div>

              <div style={{ marginTop: 12 }}>
                <Button onClick={() => setShareOpen(false)} style={{ width: "100%" }}>
                  Готово
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Overlay>

      {/* CONFIRM modals */}
      <Overlay open={confirmOpen !== null} onClose={() => setConfirmOpen(null)} align="center">
        <div style={{ width: "100%", maxWidth: 380 }}>
          <Card>
            <div style={{ padding: 14 }}>
              <div style={{ fontSize: 15, fontWeight: 900 }}>
                {confirmOpen === "pick" ? "Подтвердить выбор" : "Продолжить поиск"}
              </div>
              <div style={{ marginTop: 4, ...styles.mutedSm, lineHeight: "16px" }}>
                {confirmOpen === "pick"
                  ? picked
                    ? `Отправить ассистенту выбор: ${picked.name}?`
                    : "Сначала выберите кандидата"
                  : "Сообщить ассистенту, что ни один кандидат не подошёл?"}
              </div>

              {confirmOpen === "pick" && picked ? (
                <div style={{ marginTop: 12, borderRadius: 18, border: "1px solid #E5E7EB", background: "#F8FAFC", padding: 12 }}>
                  <div style={{ ...styles.rowCenter, gap: 10 }}>
                    <Avatar src={picked.photoDataUri} alt={`Фото ${picked.name}`} size={48} radius={18} />
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 900 }}>{picked.name}</div>
                      <div style={{ ...styles.mutedSm, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {picked.title}
                      </div>
                      <div style={{ marginTop: 4, ...styles.mutedSm }}>
                        {moneyEUR(picked.compMonthlyEUR)} / мес · {picked.availability}
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              <div style={{ marginTop: 12, ...styles.grid2, gap: 10 }}>
                <Button variant="secondary" onClick={() => setConfirmOpen(null)}>
                  Отмена
                </Button>
                <Button onClick={() => setConfirmOpen(null)} disabled={confirmOpen === "pick" && !picked}>
                  Отправить
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Overlay>

      {/* Candidate details bottom sheet */}
      <Overlay open={detailOpen} onClose={() => setDetailOpen(false)} align="bottom">
        <div style={{ width: "100%", maxWidth: 390 }}>
          <div
            style={{
              width: "100%",
              background: "#FFFFFF",
              borderRadius: "28px 28px 20px 20px",
              boxShadow: "0 -24px 60px rgba(15,23,42,0.20)",
              border: "1px solid rgba(229,231,235,0.9)",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: 12 }}>
              <div style={{ width: 48, height: 6, borderRadius: 999, background: "#E5E7EB", margin: "4px auto 10px" }} />

              <div style={{ ...styles.rowBetween, gap: 10, padding: "0 2px 10px" }}>
                <div style={{ fontSize: 13, fontWeight: 900 }}>Детали кандидата</div>
                <div style={{ ...styles.rowCenter, gap: 8 }}>
                  <IconButton
                    onClick={() => setSelectedIdx((v) => (v - 1 + candidates.length) % candidates.length)}
                    label="Назад"
                    icon={<Icon name="chevL" size={18} />}
                    style={{ width: 34, height: 34 }}
                  />
                  <div style={{ fontSize: 12, color: "#64748B", fontWeight: 700 }}>
                    {selectedIdx + 1}/{candidates.length}
                  </div>
                  <IconButton
                    onClick={() => setSelectedIdx((v) => (v + 1) % candidates.length)}
                    label="Вперёд"
                    icon={<Icon name="chevR" size={18} />}
                    style={{ width: 34, height: 34 }}
                  />
                </div>
              </div>

              <Card>
                <div style={{ padding: 14, ...styles.col, gap: 14 }}>
                  {/* Header */}
                  <div style={{ ...styles.rowBetween, alignItems: "flex-start", gap: 10 }}>
                    <div style={{ ...styles.rowStart, gap: 10, minWidth: 0 }}>
                      <Avatar src={current.photoDataUri} alt={`Фото ${current.name}`} size={56} radius={18} />
                      <div style={{ minWidth: 0 }}>
                        <div style={{ ...styles.rowCenter, gap: 8, flexWrap: "wrap" }}>
                          <div style={{ fontSize: 15, fontWeight: 900 }}>{current.name}</div>
                          {current.assistantRecommended ? <RecommendedPill /> : null}
                        </div>
                        <div style={{ marginTop: 4, ...styles.mutedSm, ...clamp2Style() }}>
                          {current.title} · {current.location}
                        </div>
                        <div style={{ marginTop: 6, fontSize: 12, color: "#0F172A", fontWeight: 750 }}>
                          <span style={{ color: "#64748B", fontWeight: 650 }}>Доступность:</span> {current.availability}
                        </div>
                      </div>
                    </div>

                    <div style={{ ...styles.col, alignItems: "flex-end", gap: 8, flexShrink: 0 }}>
                      <Badge variant="outline">{moneyEUR(current.compMonthlyEUR)}/мес</Badge>
                      <RiskPill risk={current.risk} />
                    </div>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {current.decisionReadyBadges.map((b) => (
                      <Badge key={b} variant="soft">
                        {b}
                      </Badge>
                    ))}
                  </div>

                  {/* Video */}
                  <div
                    style={{
                      borderRadius: 18,
                      border: "1px solid #E5E7EB",
                      background: "linear-gradient(180deg, #F8FAFC 0%, #F3F4F6 100%)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div style={{ width: "100%", aspectRatio: "16 / 9" }} />
                    <div style={{ position: "absolute", inset: 0, ...styles.rowCenter, justifyContent: "center" }}>
                      <Button variant="primary" icon={<Icon name="play" size={18} />} onClick={() => {}} style={{ borderRadius: 999, padding: "10px 14px" }}>
                        Видео-визитка · {current.introSeconds}с
                      </Button>
                    </div>
                    <div style={{ position: "absolute", left: 10, top: 10 }}>
                      <Badge variant="soft">Транскрипт</Badge>
                    </div>
                  </div>

                  {/* Why */}
                  <div style={{ ...styles.col, gap: 8 }}>
                    <div style={{ ...styles.rowCenter, gap: 8, fontSize: 13, fontWeight: 900 }}>
                      <Icon name="list" size={18} /> Почему в финале
                    </div>
                    <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", ...styles.col, gap: 8 }}>
                      {current.why.map((w, i) => (
                        <li key={i} style={{ ...styles.rowStart, gap: 8 }}>
                          <span style={{ width: 6, height: 6, borderRadius: 999, background: "#94A3B8", marginTop: 6, flexShrink: 0 }} />
                          <span style={{ fontSize: 13, fontWeight: 700, color: "#0F172A", lineHeight: "17px" }}>{w}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quick facts */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {current.highlights.map((h) => (
                      <Chip key={h.k}>
                        <ToneDot tone={h.tone} />
                        <span style={{ color: "#64748B", fontWeight: 650 }}>{h.k}:</span>
                        <span style={{ fontWeight: 850 }}>{h.v}</span>
                      </Chip>
                    ))}
                  </div>

                  {/* Actions */}
                  <div style={{ ...styles.grid3, gap: 8 }}>
                    <Button variant="secondary" icon={<Icon name="chatQ" size={18} />} onClick={() => {}} style={{ padding: "10px 10px" }}>
                      Вопросы
                    </Button>
                    <Button icon={<Icon name="check" size={18} />} onClick={() => { setPickedId(current.id); setDetailOpen(false); }} style={{ padding: "10px 10px" }}>
                      Выбрать
                    </Button>
                    <Button variant="destructive" icon={<Icon name="x" size={18} />} onClick={() => {}} style={{ padding: "10px 10px" }}>
                      Не подходит
                    </Button>
                  </div>

                  <Button variant="secondary" icon={<Icon name="undo" size={18} />} onClick={() => {}} style={{ width: "100%" }}>
                    На доработку ассистенту
                  </Button>

                  <div style={{ ...styles.col, gap: 8 }}>
                    <div style={{ fontSize: 13, fontWeight: 900 }}>Замечания по рискам</div>
                    <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", ...styles.col, gap: 8 }}>
                      {current.riskNotes.map((r, i) => (
                        <li key={i} style={{ ...styles.rowStart, gap: 8 }}>
                          <span style={{ width: 6, height: 6, borderRadius: 999, background: "#94A3B8", marginTop: 6, flexShrink: 0 }} />
                          <span style={{ fontSize: 13, fontWeight: 700, color: "#0F172A", lineHeight: "17px" }}>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="secondary" onClick={() => setDetailOpen(false)} style={{ width: "100%" }}>
                    Закрыть
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Overlay>
    </div>
  );
}
