import * as React from "react";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { RecommendedPill } from "@/components/ui/RecommendedPill";
import { RiskPill } from "@/components/ui/RiskPill";
import { Avatar } from "@/components/ui/Avatar";
import { Candidate } from "@/data/finalists";
import { moneyEUR } from "@/lib/format";
import { colors, font } from "@/lib/designSystem";
import { sharedStyles } from "@/components/finalists/styles";

export type FinalistsTabProps = {
  candidates: Candidate[];
  pickedId: string | null;
  onOpenDetail: (index: number) => void;
};

export function FinalistsTab({ candidates, pickedId, onOpenDetail }: FinalistsTabProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ ...sharedStyles.rowBetween, padding: "0 2px" }}>
        <div style={{ fontSize: 14, fontWeight: 850 }}>3 финалиста</div>
        <div style={{ ...sharedStyles.muted12 }}>Нажмите для деталей</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {candidates.map((c, i) => {
          const isPicked = pickedId === c.id;
          return (
            <button
              key={c.id}
              onClick={() => onOpenDetail(i)}
              style={{
                appearance: "none",
                border: isPicked ? "1px solid #111827" : "1px solid #E5E7EB",
                background: "#FFFFFF",
                borderRadius: 20,
                padding: 12,
                textAlign: "left",
                cursor: "pointer",
                boxShadow: "0 18px 30px rgba(15, 23, 42, 0.08)",
                WebkitTapHighlightColor: "transparent",
              }}
              aria-label={`Открыть ${c.fullName}`}
            >
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ position: "relative", flexShrink: 0, display: "inline-block" }}>
                  <Avatar src={c.photoDataUri} alt={`Фото ${c.fullName}`} size={56} radius={18} />
                  {isPicked ? (
                    <span
                      style={{
                        position: "absolute",
                        top: -6,
                        right: -6,
                        width: 26,
                        height: 26,
                        borderRadius: 999,
                        background: "#111827",
                        color: "#FFFFFF",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 10px 20px rgba(17,24,39,0.25)",
                      }}
                    >
                      <Icon name="check" size={16} />
                    </span>
                  ) : null}
                </div>

                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }}>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                        <div style={{ fontSize: 15, fontWeight: 850, color: colors.ink, maxWidth: 220, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {c.fullName}
                        </div>
                      </div>
                      <div style={{ marginTop: 4, display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                        <div style={{ ...sharedStyles.muted12, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {c.title}
                        </div>
                        {c.assistantRecommended ? <RecommendedPill /> : null}
                      </div>
                    </div>

                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: 900, color: colors.ink }}>{moneyEUR(c.compMonthlyEUR)}</div>
                      <div style={{ ...sharedStyles.muted11 }}>в месяц</div>
                    </div>
                  </div>

                  <div style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                    <RiskPill risk={c.risk} />
                    <Badge variant="soft">{c.availability}</Badge>
                  </div>

                  <div
                    style={{
                      marginTop: 8,
                      borderRadius: 16,
                      border: "1px solid #E5E7EB",
                      background: "#F8FAFC",
                      padding: "8px 10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 10,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, fontWeight: 750, color: "#0F172A" }}>
                      <Icon name="play" size={18} />
                      Видео-визитка · {c.introSeconds}с
                    </div>
                    <Badge variant="outline">Транскрипт</Badge>
                  </div>

                  <div style={{ marginTop: 8 }}>
                    <div style={{ fontSize: 13, fontWeight: font.weight.bold, color: colors.slate, lineHeight: "16px" }}>
                      Почему этот кандидат
                    </div>
                    <div
                      style={{
                        marginTop: 6,
                        fontSize: 12,
                        fontWeight: font.weight.regular,
                        color: colors.ink,
                        lineHeight: "16px",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {(() => {
                        const text = c.whyText ?? c.why.join("\n");
                        const limit = 280;
                        return text.length > limit ? `${text.slice(0, limit - 1)}…` : text;
                      })()}
                    </div>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
