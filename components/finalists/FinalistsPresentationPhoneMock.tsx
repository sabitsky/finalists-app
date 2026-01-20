"use client";
import * as React from "react";
import { position } from "@/data/finalists";
import { Card } from "@/components/ui/Card";
import { Segmented } from "@/components/ui/Segmented";
import { layoutStyles } from "@/components/finalists/styles";
import { TopShareBar } from "@/components/finalists/TopShareBar";
import { PositionHeader } from "@/components/finalists/PositionHeader";
import { FinalistsTab } from "@/components/finalists/FinalistsTab";
import { CompareTab } from "@/components/finalists/CompareTab";
import { BottomActions } from "@/components/finalists/BottomActions";
import { WhyModal } from "@/components/finalists/WhyModal";
import { ShareModal } from "@/components/finalists/ShareModal";
import { ConfirmModal } from "@/components/finalists/ConfirmModal";
import { DetailsSheet } from "@/components/finalists/DetailsSheet";
import { useFinalistsPresentation } from "@/hooks/useFinalistsPresentation";

export function FinalistsPresentationPhoneMock() {
  const {
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
    picked,
    comparison,
  } = useFinalistsPresentation();

  const handleOpenDetail = (index: number) => {
    setSelectedIdx(index);
    setDetailOpen(true);
  };

  return (
    <div style={layoutStyles.page}>
      <div style={layoutStyles.phone}>
        <div style={layoutStyles.inner}>
          <Card>
            <PositionHeader position={position} onWhy={() => setWhyOpen(true)} />
          </Card>

          <div style={{ marginTop: 12 }}>
            <Segmented value={tab} onChange={setTab} />
          </div>

          <div style={{ marginTop: 12 }}>
            {tab === "finalists" ? (
              <FinalistsTab candidates={candidates} pickedId={pickedId} onOpenDetail={handleOpenDetail} />
            ) : null}
            {tab === "compare" ? (
              <CompareTab
                candidates={candidates}
                pickedId={pickedId}
                selectedIdx={selectedIdx}
                onOpenDetail={handleOpenDetail}
                comparison={comparison}
              />
            ) : null}
          </div>

          <div style={layoutStyles.stickyActions}>
            <BottomActions picked={picked} pickedId={pickedId} onConfirm={(type) => setConfirmOpen(type)} />

            <div style={{ marginTop: 10 }}>
              <TopShareBar onShare={() => setShareOpen(true)} />
            </div>
          </div>
        </div>
      </div>

      <WhyModal open={whyOpen} onClose={() => setWhyOpen(false)} position={position} />
      <ShareModal open={shareOpen} onClose={() => setShareOpen(false)} />
      <ConfirmModal open={confirmOpen} onClose={() => setConfirmOpen(null)} picked={picked} />
      <DetailsSheet
        open={detailOpen}
        onClose={() => setDetailOpen(false)}
        candidates={candidates}
        selectedIdx={selectedIdx}
        onPrev={() => setSelectedIdx((v) => (v - 1 + candidates.length) % candidates.length)}
        onNext={() => setSelectedIdx((v) => (v + 1) % candidates.length)}
        onPick={(id) => {
          setPickedId(id);
          setDetailOpen(false);
        }}
      />
    </div>
  );
}

export default FinalistsPresentationPhoneMock;
