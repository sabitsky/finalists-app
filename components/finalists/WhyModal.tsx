import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Overlay } from "@/components/ui/Overlay";
import { Position } from "@/data/finalists";
import { sharedStyles } from "@/components/finalists/styles";

export type WhyModalProps = {
  open: boolean;
  onClose: () => void;
  position: Position;
};

export function WhyModal({ open, onClose, position }: WhyModalProps) {
  return (
    <Overlay open={open} onClose={onClose} align="center">
      <div style={{ width: "100%", maxWidth: 380 }}>
        <Card>
          <div style={{ padding: 12 }}>
            <div style={{ fontSize: 15, fontWeight: 900 }}>Почему это лучше «бумажек»</div>
            <div style={{ marginTop: 4, ...sharedStyles.muted12 }}>
              Подготовил: {position.preparedBy} · обновлено: {position.updatedAt}
            </div>

            <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ borderRadius: 18, border: "1px solid #E5E7EB", background: "#F8FAFC", padding: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 900 }}>
                  <Icon name="spark" size={18} /> Привычный формат = быстрее решение
                </div>
                <div style={{ marginTop: 6, ...sharedStyles.muted12, lineHeight: "16px" }}>
                  Один и тот же шаблон дисциплинирует ассистента и снимает лишнюю когнитивную нагрузку у принципала.
                </div>
              </div>

              <div style={{ borderRadius: 18, border: "1px solid #E5E7EB", background: "#F8FAFC", padding: 12 }}>
                <div style={{ fontSize: 13, fontWeight: 900 }}>Короткая мысль по сути</div>
                <div style={{ marginTop: 8, borderRadius: 16, border: "1px solid #E5E7EB", background: "#FFFFFF", padding: 12 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#0F172A", lineHeight: "17px" }}>
                    «Если вы не можете описать то, что делаете, как процесс — вы не знаете, что вы делаете»
                  </div>
                  <div style={{ marginTop: 6, ...sharedStyles.muted12 }}>— У. Эдвардс Деминг</div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <div style={{ borderRadius: 18, border: "1px solid #E5E7EB", background: "#F8FAFC", padding: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 900 }}>
                    <Icon name="send" size={18} /> Решение фиксируется
                  </div>
                  <div style={{ marginTop: 6, ...sharedStyles.muted12, lineHeight: "16px" }}>
                    Выбор/вопросы уходят ассистенту сразу, без пересказов.
                  </div>
                </div>
                <div style={{ borderRadius: 18, border: "1px solid #E5E7EB", background: "#F8FAFC", padding: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 900 }}>
                    <Icon name="lock" size={18} /> Приватно
                  </div>
                  <div style={{ marginTop: 6, ...sharedStyles.muted12, lineHeight: "16px" }}>
                    Только по ссылке. Можно отозвать доступ.
                  </div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <Button variant="secondary" onClick={onClose}>
                  Закрыть
                </Button>
                <Button onClick={onClose}>Понял</Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Overlay>
  );
}
