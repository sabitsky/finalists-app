import * as React from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { IconButton } from "@/components/ui/IconButton";
import { Overlay } from "@/components/ui/Overlay";
import { Chip } from "@/components/ui/Chip";
import { ToneDot } from "@/components/ui/ToneDot";
import { RiskPill } from "@/components/ui/RiskPill";
import { RecommendedPill } from "@/components/ui/RecommendedPill";
import { Avatar } from "@/components/ui/Avatar";
import { Candidate } from "@/data/finalists";
import { moneyEUR } from "@/lib/format";
import { clamp2Style } from "@/components/finalists/styles";

export type DetailsSheetProps = {
  open: boolean;
  onClose: () => void;
  candidates: Candidate[];
  selectedIdx: number;
  onPrev: () => void;
  onNext: () => void;
  onPick: (id: string) => void;
};

export function DetailsSheet({ open, onClose, candidates, selectedIdx, onPrev, onNext, onPick }: DetailsSheetProps) {
  const current = candidates[selectedIdx];

  return (
    <Overlay open={open} onClose={onClose} align="bottom">
      <div style={{ width: "100%", maxWidth: 390 }}>
        <div
          style={{
            width: "100%",
            background: "#FFFFFF",
            borderRadius: "28px 28px 20px 20px",
            boxShadow: "0 -24px 60px rgba(15,23,42,0.20)",
            border: "1px solid rgba(229,231,235,0.9)",
            overflow: "hidden",
          }}
        >
          <div style={{ padding: 12 }}>
            <div style={{ width: 48, height: 6, borderRadius: 999, background: "#E5E7EB", margin: "4px auto 10px" }} />

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, padding: "0 2px 10px" }}>
              <div style={{ fontSize: 13, fontWeight: 900 }}>Детали кандидата</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <IconButton onClick={onPrev} label="Назад" icon={<Icon name="chevL" size={18} />} style={{ width: 34, height: 34 }} />
                <div style={{ fontSize: 12, color: "#64748B", fontWeight: 700 }}>
                  {selectedIdx + 1}/{candidates.length}
                </div>
                <IconButton onClick={onNext} label="Вперёд" icon={<Icon name="chevR" size={18} />} style={{ width: 34, height: 34 }} />
              </div>
            </div>

            <Card>
              <div style={{ padding: 12, display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ display: "flex", gap: 10, minWidth: 0 }}>
                    <Avatar src={current.photoDataUri} alt={`Фото ${current.fullName}`} size={56} radius={18} style={{ flexShrink: 0 }} />
                    <div style={{ minWidth: 0 }}>
                      <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                        <div style={{ fontSize: 15, fontWeight: 900 }}>{current.fullName}</div>
                        {current.assistantRecommended ? <RecommendedPill /> : null}
                      </div>
                      <div style={{ marginTop: 4, fontSize: 12, color: "#64748B", fontWeight: 650, ...clamp2Style() }}>
                        {current.title} · {current.location}
                      </div>
                      <div style={{ marginTop: 6, fontSize: 12, color: "#0F172A", fontWeight: 750 }}>
                        <span style={{ color: "#64748B", fontWeight: 650 }}>Доступность:</span> {current.availability}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, flexShrink: 0 }}>
                    <Badge variant="outline">{moneyEUR(current.compMonthlyEUR)}/мес</Badge>
                    <RiskPill risk={current.risk} />
                  </div>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {current.decisionReadyBadges.map((b) => (
                    <Badge key={b} variant="soft">
                      {b}
                    </Badge>
                  ))}
                </div>

                <div
                  style={{
                    borderRadius: 18,
                    border: "1px solid #E5E7EB",
                    background: "linear-gradient(180deg, #F8FAFC 0%, #F3F4F6 100%)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ width: "100%", aspectRatio: "16 / 9" }} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Button variant="primary" icon={<Icon name="play" size={18} />} onClick={() => {}} style={{ borderRadius: 999, padding: "10px 14px" }}>
                      Видео-визитка · {current.introSeconds}с
                    </Button>
                  </div>
                  <div style={{ position: "absolute", left: 10, top: 10 }}>
                    <Badge variant="soft">Транскрипт</Badge>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 900 }}>
                    <Icon name="list" size={18} /> Почему в финале
                  </div>
                  <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {current.why.map((w, i) => (
                      <li key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                        <span style={{ width: 6, height: 6, borderRadius: 999, background: "#94A3B8", marginTop: 6, flexShrink: 0 }} />
                        <span style={{ fontSize: 13, fontWeight: 700, color: "#0F172A", lineHeight: "17px" }}>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {current.highlights.map((h) => (
                    <Chip key={h.k}>
                      <ToneDot tone={h.tone} />
                      <span style={{ color: "#64748B", fontWeight: 650 }}>{h.k}:</span>
                      <span style={{ fontWeight: 850 }}>{h.v}</span>
                    </Chip>
                  ))}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                  <Button variant="secondary" icon={<Icon name="chatQ" size={18} />} onClick={() => {}} style={{ padding: "10px 10px" }}>
                    Вопросы
                  </Button>
                  <Button icon={<Icon name="check" size={18} />} onClick={() => onPick(current.id)} style={{ padding: "10px 10px" }}>
                    Выбрать
                  </Button>
                  <Button variant="destructive" icon={<Icon name="x" size={18} />} onClick={() => {}} style={{ padding: "10px 10px" }}>
                    Не подходит
                  </Button>
                </div>

                <Button variant="secondary" icon={<Icon name="undo" size={18} />} onClick={() => {}} style={{ width: "100%" }}>
                  На доработку ассистенту
                </Button>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{ fontSize: 13, fontWeight: 900 }}>Замечания по рискам</div>
                  <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {current.riskNotes.map((r, i) => (
                      <li key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                        <span style={{ width: 6, height: 6, borderRadius: 999, background: "#94A3B8", marginTop: 6, flexShrink: 0 }} />
                        <span style={{ fontSize: 13, fontWeight: 700, color: "#0F172A", lineHeight: "17px" }}>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="secondary" onClick={onClose} style={{ width: "100%" }}>
                  Закрыть
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Overlay>
  );
}
