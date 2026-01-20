import * as React from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { RiskPill } from "@/components/ui/RiskPill";
import { Separator } from "@/components/ui/Separator";
import { Avatar } from "@/components/ui/Avatar";
import { Candidate } from "@/data/finalists";
import { sharedStyles } from "@/components/finalists/styles";
import { moneyEUR } from "@/lib/format";
import { colors, font } from "@/lib/designSystem";

export type CompareTabProps = {
  candidates: Candidate[];
  pickedId: string | null;
  selectedIdx: number;
  onOpenDetail: (index: number) => void;
  comparison: { k: string; v: string[] }[];
};

export function CompareTab({ candidates, pickedId, selectedIdx, onOpenDetail, comparison }: CompareTabProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ ...sharedStyles.rowBetween, padding: "0 2px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: font.weight.extrabold, color: colors.ink }}>
          <Icon name="compare" size={18} /> Сравнение
        </div>
        <div style={{ ...sharedStyles.muted12 }}>Нажмите по колонке</div>
      </div>

      <Card>
        <div style={{ padding: 12, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
            {candidates.map((c, j) => {
              const isPicked = pickedId === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => onOpenDetail(j)}
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
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Avatar src={c.photoDataUri} alt={`Фото ${c.fullName}`} size={38} radius={14} style={{ flexShrink: 0 }} />
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: font.weight.extrabold, color: colors.ink, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {c.fullName}
                      </div>
                      <div style={{ fontSize: font.size.sm, fontWeight: font.weight.bold, color: colors.ink }}>{moneyEUR(c.compMonthlyEUR)}</div>
                      <div style={{ ...sharedStyles.muted11 }}>в месяц</div>
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

          {comparison.map((row, i) => (
            <div key={row.k} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ fontSize: 12, fontWeight: font.weight.black, color: colors.slate }}>{row.k}</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                {row.v.map((v, j) => (
                  <button
                    key={`${row.k}-${j}`}
                    onClick={() => onOpenDetail(j)}
                    style={{
                      appearance: "none",
                      borderRadius: 14,
                      border: "1px solid #E5E7EB",
                      background: j === selectedIdx ? "#F8FAFC" : "#FFFFFF",
                      padding: "9px 10px",
                      fontSize: 13,
                      fontWeight: font.weight.bold,
                      color: colors.ink,
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

          <div style={{ ...sharedStyles.muted11 }}>
            В сравнении показано только то, что помогает принять решение быстро.
          </div>
        </div>
      </Card>
    </div>
  );
}
