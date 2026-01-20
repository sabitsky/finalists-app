import * as React from "react";
import type { Candidate, ComparisonRow, ComparisonRowKey } from "@/types";
import { comparisonColors, comparisonShadows } from "@/lib/comparisonTokens";
import { colors, font, radii } from "@/lib/designSystem";
import { RecommendedPill } from "@/components/ui/RecommendedPill";
import styles from "@/components/finalists/comparison.module.css";

// Re-export types for backwards compatibility
export type { ComparisonRowKey, ComparisonRow } from "@/types";

export type ComparisonSectionProps = {
  candidates: Candidate[];
  comparison: ComparisonRow[];
  activeId: string | null;
  recommendedId: string;
  onActivate: (id: string) => void;
  onOpenDetail: (id: string) => void;
  headerTitle: string;
  headerSubtitle: string;
  footerActions?: React.ReactNode;
};

const rowOrder: ComparisonRowKey[] = ["Английский", "Ротации", "Репетиторство", "Старт", "€ / месяц"];

export function ComparisonSection({
  candidates,
  comparison,
  activeId,
  recommendedId,
  onActivate,
  onOpenDetail,
  headerTitle,
  headerSubtitle,
  footerActions,
}: ComparisonSectionProps) {
  const recommended = candidates.find((c) => c.id === recommendedId) || null;
  const orderedCandidates = recommended
    ? [recommended, ...candidates.filter((c) => c.id !== recommendedId)]
    : candidates;
  const indexById = new Map(candidates.map((c, index) => [c.id, index]));
  const rowsByKey = new Map(comparison.map((row) => [row.k, row]));

  const orderedRows = rowOrder.map((key) => {
    const row = rowsByKey.get(key);
    return {
      k: key,
      v: orderedCandidates.map((c) => row?.v[indexById.get(c.id) ?? 0] ?? ""),
    };
  });

  const totalRows = 1 + orderedRows.length;

  return (
    <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <ComparisonHeader title={headerTitle} subtitle={headerSubtitle} />

      <div className={styles.scrollWrap}>
        <ComparisonGrid>
          {orderedCandidates.map((candidate, idx) => (
            <CandidateCard
              key={candidate.id}
              columnIndex={idx + 1}
              totalRows={totalRows}
              candidate={candidate}
              isActive={candidate.id === activeId}
              isRecommended={candidate.id === recommendedId}
              onActivate={() => onActivate(candidate.id)}
              onOpenDetail={() => onOpenDetail(candidate.id)}
              rows={orderedRows.map((row) => ({ key: row.k, value: row.v[idx] ?? "" }))}
            />
          ))}
        </ComparisonGrid>
      </div>

      <ComparisonFooterActions>{footerActions}</ComparisonFooterActions>
    </section>
  );
}

export function ComparisonHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <div style={{ fontSize: 16, fontWeight: font.weight.semibold, color: comparisonColors.textPrimary }}>
        {title}
      </div>
      {subtitle ? (
        <div style={{ fontSize: 13, fontWeight: font.weight.medium, color: comparisonColors.textSecondary }}>
          {subtitle}
        </div>
      ) : null}
    </div>
  );
}

export function ComparisonGrid({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={styles.grid}
      style={{
        paddingBottom: 4,
        fontFamily: font.family.ui,
      }}
    >
      {children}
    </div>
  );
}

export function CandidateCard({
  columnIndex,
  totalRows,
  candidate,
  rows,
  isActive,
  isRecommended,
  onActivate,
  onOpenDetail,
}: {
  columnIndex: number;
  totalRows: number;
  candidate: Candidate;
  rows: { key: ComparisonRowKey; value: string }[];
  isActive: boolean;
  isRecommended: boolean;
  onActivate: () => void;
  onOpenDetail: () => void;
}) {
  const cardVars: React.CSSProperties = {
    "--card-bg": comparisonColors.surface,
    "--card-bg-recommended": comparisonColors.recommendedBg,
    "--card-border": isRecommended ? comparisonColors.borderStrong : comparisonColors.borderSoft,
    "--card-border-hover": comparisonColors.borderStrong,
    "--card-border-active": colors.inkStrong,
    "--card-shadow": isRecommended ? comparisonShadows.cardStrong : "none",
    "--card-shadow-hover": comparisonShadows.cardStrong,
    "--card-shadow-active": "none",
    "--card-radius": `${radii.lg}px`,
  } as React.CSSProperties;

  return (
    <div
      onClick={onActivate}
      className={[
        styles.candidateCard,
        isActive ? styles.candidateCardActive : "",
        isRecommended ? styles.candidateCardRecommended : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        ...cardVars,
        gridColumn: `${columnIndex} / span 1`,
        gridRow: `1 / span ${totalRows}`,
        padding: "8px 6px 10px",
        textAlign: "left",
        cursor: "pointer",
        minHeight: 36 * totalRows,
        position: "relative",
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onActivate();
        }
      }}
      aria-pressed={isActive}
      aria-label={`${candidate.fullName}. ${candidate.title}. ${candidate.compMonthlyEUR.toLocaleString("ru-RU")} € в месяц.`}
    >
      <CardHeader candidate={candidate} isRecommended={isRecommended} />
      {rows.slice(0, 6).map((row, index) => (
        <ComparisonValue key={`${candidate.id}-${row.key}`} value={row.value} rowKey={row.key} isPrice={index === rows.length - 1} />
      ))}
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onOpenDetail();
        }}
        style={{
          marginTop: 6,
          background: "transparent",
          border: "none",
          padding: 0,
          color: comparisonColors.textPrimary,
          fontSize: 10,
          fontWeight: font.weight.medium,
          cursor: "pointer",
          textAlign: "left",
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          textDecoration: "underline",
        }}
      >
        <span style={{ color: comparisonColors.textMuted }}>›</span>
        Открыть полное резюме
      </button>
    </div>
  );
}

export function CardHeader({ candidate, isRecommended }: { candidate: Candidate; isRecommended: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: 4,
        height: 36,
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: font.weight.semibold,
          color: comparisonColors.textPrimary,
          lineHeight: "12px",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {candidate.fullName}
      </div>
      <div style={{ alignSelf: "flex-start", minHeight: 18 }}>
        {isRecommended ? <RecommendedPill /> : <span style={{ visibility: "hidden" }}><RecommendedPill /></span>}
      </div>
    </div>
  );
}

export function ComparisonValue({
  value,
  rowKey,
  isPrice,
}: {
  value: string;
  rowKey: ComparisonRowKey;
  isPrice: boolean;
}) {
  const isPrimary = rowKey === "Английский" || rowKey === "€ / месяц";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 2,
        fontSize: 11,
        fontWeight: isPrimary ? font.weight.semibold : font.weight.medium,
        color: comparisonColors.textPrimary,
        fontVariantNumeric: isPrice ? "tabular-nums" : "normal",
        height: 36,
      }}
    >
      <span
        style={{
          fontSize: 10,
          color: comparisonColors.textMuted,
          fontWeight: font.weight.medium,
          lineHeight: "12px",
        }}
      >
        {rowKey}:
      </span>
      <span
        style={{
          fontWeight: isPrimary ? font.weight.semibold : font.weight.medium,
          color: isPrimary ? comparisonColors.textPrimary : comparisonColors.textSecondary,
          lineHeight: "12px",
        }}
      >
        {value}
      </span>
    </div>
  );
}

export function ComparisonFooterActions({ children }: { children?: React.ReactNode }) {
  if (!children) return null;
  return <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>{children}</div>;
}

