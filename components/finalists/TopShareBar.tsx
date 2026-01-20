import * as React from "react";
import { Icon } from "@/components/ui/Icon";
import { IconButton } from "@/components/ui/IconButton";
import { sharedStyles } from "@/components/finalists/styles";
import { colors, font } from "@/lib/designSystem";

export type TopShareBarProps = {
  onShare: () => void;
};

export function TopShareBar({ onShare }: TopShareBarProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: 12,
        width: "100%",
        padding: "10px 12px",
        borderRadius: 18,
        border: "1px solid #E5E7EB",
        background: "#F8FAFC",
      }}
    >
      <div
        style={{
          fontSize: font.size.sm,
          fontWeight: font.weight.regular,
          lineHeight: "16px",
          color: colors.slate,
        }}
      >
        Можно переслать ссылку доверенному лицу: оно сможет за вас выбрать кандидата, задать вопросы или вернуть на доработку.
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
        <IconButton onClick={onShare} label="Поделиться" icon={<Icon name="share" size={18} style={{ color: colors.inkStrong }} />} />
      </div>
    </div>
  );
}
