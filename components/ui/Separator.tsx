import * as React from "react";
import { colors } from "@/lib/designSystem";

export type SeparatorProps = {
  style?: React.CSSProperties;
};

export function Separator({ style }: SeparatorProps) {
  return <div style={{ height: 1, background: colors.line, width: "100%", ...style }} />;
}
