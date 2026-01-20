import * as React from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Position } from "@/data/finalists";
import { sharedStyles } from "@/components/finalists/styles";
import { colors, font } from "@/lib/designSystem";

export type PositionHeaderProps = {
  position: Position;
  onWhy: () => void;
};

export function PositionHeader({ position, onWhy }: PositionHeaderProps) {
  return (
    <div style={{ padding: 12 }}>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: font.weight.extrabold, lineHeight: "18px", color: colors.ink }}>
          {position.role}
        </div>
        <div style={{ marginTop: 4, ...sharedStyles.muted12 }}>{position.location}</div>
      </div>

      <div style={{ marginTop: 10, ...sharedStyles.rowBetween, alignItems: "center", gap: 12 }}>
        <div style={{ fontSize: font.size.sm, fontWeight: font.weight.semibold, color: colors.muted }}>
          Top {position.finalists} из {position.total}
        </div>
        <Button
          variant="ghost"
          onClick={onWhy}
          icon={<Icon name="info" size={18} />}
          style={{ padding: "8px 10px", borderRadius: 999, borderColor: "transparent", fontWeight: font.weight.regular, color: colors.inkStrong }}
        >
          Методика подбора
        </Button>
      </div>
    </div>
  );
}
