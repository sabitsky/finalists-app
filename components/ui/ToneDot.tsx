import * as React from "react";
import { colors } from "@/lib/designSystem";
import type { Tone } from "@/types";

export function ToneDot({ tone }: { tone: Tone }) {
  const color = tone === "pos" ? colors.positive : tone === "neg" ? colors.negative : colors.warnStrong;
  return (
    <span
      style={{
        width: 8,
        height: 8,
        borderRadius: 999,
        background: color,
        boxShadow: "0 6px 16px rgba(17,24,39,0.12)",
        display: "inline-block",
      }}
    />
  );
}
