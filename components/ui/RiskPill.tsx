import * as React from "react";
import { colors, font, radii } from "@/lib/designSystem";
import { Icon } from "@/components/ui/Icon";
import { RiskLevel } from "@/data/finalists";

export function RiskPill({ risk }: { risk: RiskLevel }) {
  const meta =
    risk === "low"
      ? {
          label: "Низкий",
          icon: "riskLow",
          bg: colors.successBg,
          bd: colors.successBd,
          fg: colors.successInk,
        }
      : risk === "high"
      ? {
          label: "Высокий",
          icon: "riskHigh",
          bg: "#FFF1F2",
          bd: "#FECDD3",
          fg: "#9F1239",
        }
      : {
          label: "Средний",
          icon: "riskMed",
          bg: colors.warnBg,
          bd: colors.warnBd,
          fg: colors.warnInk,
        };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 10px",
        borderRadius: radii.pill,
        background: meta.bg,
        border: `1px solid ${meta.bd}`,
        color: meta.fg,
        fontSize: font.size.xs,
        fontWeight: font.weight.bold,
        lineHeight: font.line.sm,
        whiteSpace: "nowrap",
      }}
    >
      <Icon name={meta.icon} size={14} /> Риск: {meta.label}
    </span>
  );
}
