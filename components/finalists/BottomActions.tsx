import * as React from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Candidate } from "@/data/finalists";
import { sharedStyles } from "@/components/finalists/styles";

export type BottomActionsProps = {
  picked: Candidate | null;
  pickedId: string | null;
  onConfirm: (type: "pick" | "none") => void;
};

export function BottomActions({ picked, pickedId, onConfirm }: BottomActionsProps) {
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <Button variant="secondary" onClick={() => onConfirm("none")} icon={<Icon name="search" size={18} />}>
          Никто не подошёл
        </Button>
        <Button onClick={() => onConfirm("pick")} disabled={!pickedId} icon={<Icon name="send" size={18} />}>
          {picked ? `Подтвердить: ${picked.fullName}` : "Подтвердить выбор"}
        </Button>
      </div>
      <div style={{ marginTop: 8, textAlign: "center", ...sharedStyles.muted11 }}>
        Решение уйдёт ассистенту в структурированном виде.
      </div>
    </div>
  );
}
