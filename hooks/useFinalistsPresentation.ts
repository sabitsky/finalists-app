import * as React from "react";
import { candidates as candidatesData } from "@/data/finalists";
import type { ComparisonRow } from "@/components/finalists/ComparisonSection";
import { moneyEUR } from "@/lib/format";

export type TabKey = "finalists" | "compare";
export type ConfirmKey = "pick" | "none" | null;

export function useFinalistsPresentation() {
  const [tab, setTab] = React.useState<TabKey>("finalists");
  const [selectedIdx, setSelectedIdx] = React.useState(0);
  const [detailOpen, setDetailOpen] = React.useState(false);
  const [whyOpen, setWhyOpen] = React.useState(false);
  const [shareOpen, setShareOpen] = React.useState(false);
  const [confirmOpen, setConfirmOpen] = React.useState<ConfirmKey>(null);
  const [pickedId, setPickedId] = React.useState<string | null>(null);

  const candidates = React.useMemo(() => candidatesData, []);
  const current = candidates[selectedIdx];
  const picked = pickedId ? candidates.find((c) => c.id === pickedId) || null : null;

  const comparison = React.useMemo<ComparisonRow[]>(
    () => [
      { k: "Английский", v: ["C2", "B2+", "C1"] },
      { k: "Ротации", v: ["да", "ограниченно", "да"] },
      { k: "Репетиторство", v: ["опц.", "нет", "да"] },
      { k: "Старт", v: ["10 дней", "3–4 недели", "след. неделя"] },
      { k: "€ / месяц", v: [moneyEUR(5200), moneyEUR(4600), moneyEUR(5900)] },
    ],
    []
  );

  return {
    tab,
    setTab,
    selectedIdx,
    setSelectedIdx,
    detailOpen,
    setDetailOpen,
    whyOpen,
    setWhyOpen,
    shareOpen,
    setShareOpen,
    confirmOpen,
    setConfirmOpen,
    pickedId,
    setPickedId,
    candidates,
    current,
    picked,
    comparison,
  };
}
