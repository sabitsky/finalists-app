import * as React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Overlay } from "@/components/ui/Overlay";
import { Position } from "@/data/finalists";
import { sharedStyles } from "@/components/finalists/styles";
import { colors, font } from "@/lib/designSystem";

export type WhyModalProps = {
  open: boolean;
  onClose: () => void;
  position: Position;
};

export function WhyModal({ open, onClose, position }: WhyModalProps) {
  return (
    <Overlay open={open} onClose={onClose} align="center">
      <div style={{ width: "100%", maxWidth: 380 }}>
        <div
          style={{
            borderRadius: 16,
            border: "1px solid rgba(215,218,214,0.6)",
            background: "rgba(255,255,255,0.98)",
            boxShadow: "0 16px 40px rgba(27,30,35,0.16), 0 2px 10px rgba(27,30,35,0.08)",
            overflow: "hidden",
          }}
        >
          <Card>
            <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 12 }}>
              {/* Header */}
              <div
                style={{
                  fontSize: font.size.xl,
                  fontWeight: font.weight.black,
                  color: colors.ink,
                  lineHeight: font.line.lg,
                  letterSpacing: "-0.2px",
                }}
              >
                Как мы выбрали 3 финалистов
              </div>

              {/* KPI chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["15 000 кандидатов", "42 в шорт-лист", "3 финалиста"].map((chip) => (
                  <span
                    key={chip}
                    style={{
                      padding: "6px 10px",
                      borderRadius: 999,
                      background: colors.surfaceAlt,
                      border: `1px solid ${colors.line}`,
                      fontSize: font.size.sm,
                      fontWeight: font.weight.semibold,
                      color: colors.ink,
                      lineHeight: font.line.md,
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>

              {/* Subheader */}
              <div style={{ ...sharedStyles.muted12, lineHeight: font.line.lg }}>AI отобрал, команда подтвердила вручную.</div>

              {/* Bullets */}
              <ul
                style={{
                  margin: 0,
                  paddingLeft: 18,
                  ...sharedStyles.muted12,
                  lineHeight: font.line.lg,
                  display: "grid",
                  gap: 6,
                }}
              >
                <li>Сравните ответы и опыт кандидатов.</li>
                <li>Пригласите на интервью в один клик.</li>
              </ul>

              {/* Footer info */}
              <div style={{ ...sharedStyles.muted12 }}>Сформировано {position.updatedAt}</div>
              <div style={{ ...sharedStyles.muted12 }}>Кандидаты не видят вас до приглашения.</div>

              {/* Methodology */}
              <div style={{ ...sharedStyles.muted11, lineHeight: font.line.lg }}>
                Методика: Наша база структурирована для быстрого поиска наиболее подходящего специалиста. Благодаря этому
                алгоритмы AI помогают человеческому глазу быстрее выделять лучших. Но человек всегда участвует в процессе,
                пока AI еще не умеет читать между строк :)
              </div>

              {/* CTA */}
              <div>
                <Button onClick={onClose}>Здорово, великолепно.</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Overlay>
  );
}
