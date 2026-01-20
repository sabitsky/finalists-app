import * as React from "react";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { RecommendedPill } from "@/components/ui/RecommendedPill";
import { Candidate } from "@/data/finalists";
import { moneyEUR } from "@/lib/format";
import { colors, font } from "@/lib/designSystem";
import { sharedStyles } from "@/components/finalists/styles";
import Image from "next/image";

export type FinalistsTabProps = {
  candidates: Candidate[];
  pickedId: string | null;
  onOpenDetail: (index: number) => void;
};

export function FinalistsTab({ candidates, pickedId, onOpenDetail }: FinalistsTabProps) {
  const candidatePhotos: Record<string, string> = {
    c1: "/images/anna.jpeg",
    c2: "/images/maria.png",
    c3: "/images/elena.png",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ ...sharedStyles.rowBetween, padding: "0 2px" }}>
        <div style={{ fontSize: 14, fontWeight: font.weight.extrabold, color: colors.ink }}>3 финалиста</div>
        <div style={{ ...sharedStyles.muted12 }}>Нажмите для деталей</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {candidates.map((c, i) => {
          const isPicked = pickedId === c.id;
          return (
            <button
              key={c.id}
              onClick={() => onOpenDetail(i)}
              style={{
                appearance: "none",
                border: isPicked ? `1px solid ${colors.inkStrong}` : `1px solid ${colors.line}`,
                background: colors.white,
                borderRadius: 12,
                padding: 14,
                textAlign: "left",
                cursor: "pointer",
                boxShadow: "none",
                WebkitTapHighlightColor: "transparent",
              }}
              aria-label={`Открыть ${c.fullName}`}
            >
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ position: "relative", flexShrink: 0, display: "inline-block" }}>
                  <div
                    style={{
                      position: "relative",
                      width: 56,
                      height: 56,
                      borderRadius: 10,
                      overflow: "hidden",
                      background: colors.surfaceAlt,
                      border: `1px solid ${colors.line}`,
                    }}
                  >
                    <Image
                      src={candidatePhotos[c.id] ?? c.photoDataUri}
                      alt={`Фото ${c.fullName}`}
                      fill
                      sizes="56px"
                      style={{ objectFit: "cover" }}
                      priority={i === 0}
                    />
                  </div>
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
                        <div style={{ fontSize: 15, fontWeight: font.weight.bold, color: colors.ink, maxWidth: 220, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {c.fullName}
                        </div>
                      </div>
                      <div style={{ marginTop: 4, display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                        <div style={{ ...sharedStyles.muted12, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {c.categoryLabel || c.title}
                        </div>
                        {c.assistantRecommended ? <RecommendedPill /> : null}
                      </div>
                      <div style={{ marginTop: 4, display: "flex", alignItems: "center", gap: 6, color: colors.muted, fontSize: font.size.sm, fontWeight: font.weight.semibold, lineHeight: "16px" }}>
                        <Icon name="pin" size={14} style={{ color: colors.muted }} />
                        {c.locationLabel}
                      </div>
                    </div>

                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: font.weight.semibold, color: colors.ink }}>{moneyEUR(c.compMonthlyEUR)}</div>
                      <div style={{ ...sharedStyles.muted11 }}>в месяц</div>
                    </div>
                  </div>

                  <div style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                    <Badge variant="outline" style={{ background: colors.surfaceAlt }}>{c.availability}</Badge>
                  </div>

                  <div
                    style={{
                      marginTop: 10,
                      borderRadius: 10,
                      border: `1px solid ${colors.line}`,
                      background: colors.surfaceAlt,
                      padding: "8px 10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 10,
                      minHeight: 36,
                      opacity: c.hideIntro ? 0 : 1,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, fontWeight: font.weight.medium, color: colors.ink }}>
                      {c.hideIntro ? null : <Icon name="play" size={18} />}
                      {c.hideIntro ? null : `Видео-визитка · ${c.introSeconds}с`}
                    </div>
                  </div>

                  <div style={{ marginTop: 10 }}>
                    <div style={{ fontSize: 12, fontWeight: font.weight.semibold, color: colors.slate, lineHeight: "16px" }}>
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
