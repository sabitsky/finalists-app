import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Overlay } from "@/components/ui/Overlay";
import { Avatar } from "@/components/ui/Avatar";
import { Candidate } from "@/data/finalists";
import { moneyEUR } from "@/lib/format";
import { sharedStyles } from "@/components/finalists/styles";

export type ConfirmModalProps = {
  open: "pick" | "none" | null;
  onClose: () => void;
  picked: Candidate | null;
};

export function ConfirmModal({ open, onClose, picked }: ConfirmModalProps) {
  return (
    <Overlay open={open !== null} onClose={onClose} align="center">
      <div style={{ width: "100%", maxWidth: 380 }}>
        <Card>
          <div style={{ padding: 12 }}>
            <div style={{ fontSize: 15, fontWeight: 900 }}>
              {open === "pick" ? "Подтвердить выбор" : "Продолжить поиск"}
            </div>
            <div style={{ marginTop: 4, ...sharedStyles.muted12, lineHeight: "16px" }}>
              {open === "pick"
                ? picked
                  ? `Отправить ассистенту выбор: ${picked.fullName}?`
                  : "Сначала выберите кандидата"
                : "Сообщить ассистенту, что ни один кандидат не подошёл?"}
            </div>

            {open === "pick" && picked ? (
              <div style={{ marginTop: 12, borderRadius: 18, border: "1px solid #E5E7EB", background: "#F8FAFC", padding: 12 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <Avatar src={picked.photoDataUri} alt={`Фото ${picked.fullName}`} size={48} radius={18} />
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 900 }}>{picked.fullName}</div>
                    <div style={{ fontSize: 12, color: "#64748B", fontWeight: 650, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {picked.title}
                    </div>
                    <div style={{ marginTop: 4, fontSize: 12, color: "#64748B", fontWeight: 650 }}>
                      {moneyEUR(picked.compMonthlyEUR)} / мес · {picked.availability}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <Button variant="secondary" onClick={onClose}>
                Отмена
              </Button>
              <Button onClick={onClose} disabled={open === "pick" && !picked}>
                Отправить
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </Overlay>
  );
}
