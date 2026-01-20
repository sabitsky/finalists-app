import * as React from "react";
import { colors } from "@/lib/designSystem";

export type AvatarProps = {
  src: string;
  alt: string;
  size?: number;
  radius?: number;
  style?: React.CSSProperties;
};

export function Avatar({ src, alt, size = 56, radius = 18, style }: AvatarProps) {
  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        borderRadius: radius,
        overflow: "hidden",
        background: colors.line,
        ...style,
      }}
    >
      <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
  );
}
