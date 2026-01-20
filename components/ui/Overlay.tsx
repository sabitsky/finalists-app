import * as React from "react";

export type OverlayProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  align?: "center" | "bottom";
};

export function Overlay({ open, onClose, children, align = "center" }: OverlayProps) {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: align === "bottom" ? "flex-end" : "center",
        justifyContent: "center",
        background: "rgba(17,24,39,0.40)",
        padding: 16,
      }}
    >
      <button
        aria-label="Закрыть"
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          border: "none",
          background: "transparent",
        }}
      />
      {children}
    </div>
  );
}
