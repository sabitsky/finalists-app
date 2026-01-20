import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Overlay } from "@/components/ui/Overlay";
import { sharedStyles } from "@/components/finalists/styles";

export type ShareModalProps = {
  open: boolean;
  onClose: () => void;
};

export function ShareModal({ open, onClose }: ShareModalProps) {
  return (
    <Overlay open={open} onClose={onClose} align="center">
      <div style={{ width: "100%", maxWidth: 380 }}>
        <Card>
          <div style={{ padding: 12 }}>
            <div style={{ fontSize: 15, fontWeight: 900 }}>Поделиться приватной ссылкой</div>
            <div style={{ marginTop: 4, ...sharedStyles.muted12, lineHeight: "16px" }}>
              Например, супруге: она сможет выбрать кандидата, задать вопросы или вернуть на доработку.
            </div>

            <div style={{ marginTop: 12, borderRadius: 18, border: "1px solid #E5E7EB", background: "#F8FAFC", padding: 12 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <Icon name="lock" size={18} style={{ marginTop: 1 }} />
                <div style={{ ...sharedStyles.muted12, lineHeight: "16px" }}>
                  Доступ только по прямой ссылке. Не индексируется. Данные принципала не отображаются.
                </div>
              </div>
            </div>

            <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <Button variant="secondary" icon={<Icon name="copy" size={18} />} onClick={() => {}}>
                Скопировать
              </Button>
              <Button variant="secondary" icon={<Icon name="qr" size={18} />} onClick={() => {}}>
                QR-код
              </Button>
            </div>

            <div style={{ marginTop: 12 }}>
              <Button onClick={onClose} style={{ width: "100%" }}>
                Готово
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </Overlay>
  );
}
