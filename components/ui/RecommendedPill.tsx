import * as React from "react";
import { colors, font, radii } from "@/lib/designSystem";
import { Icon } from "@/components/ui/Icon";

export function RecommendedPill() {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 10px",
        borderRadius: radii.md,
        background: colors.surfaceAlt,
        border: `1px solid ${colors.line}`,
        color: colors.ink,
        fontSize: font.size.xs,
        fontWeight: font.weight.medium,
        lineHeight: font.line.sm,
        whiteSpace: "nowrap",
      }}
    >
      <Icon name="star" size={14} /> Рекомендую
    </span>
  );
}
