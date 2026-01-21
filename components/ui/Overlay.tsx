"use client";
import * as React from "react";

export type OverlayProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  align?: "center" | "bottom";
};

export function Overlay({ open, onClose, children, align = "center" }: OverlayProps) {
  React.useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

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
        background: "rgba(17,24,39,0.32)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
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
