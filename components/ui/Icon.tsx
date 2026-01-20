import * as React from "react";

export type IconName =
  | "eye"
  | "share"
  | "lock"
  | "info"
  | "play"
  | "check"
  | "x"
  | "chevL"
  | "chevR"
  | "star"
  | "compare"
  | "copy"
  | "qr"
  | "send"
  | "search"
  | "undo"
  | "spark"
  | "list"
  | "chatQ"
  | "riskLow"
  | "riskMed"
  | "riskHigh"
  | "pin";

export type IconProps = {
  name: IconName;
  size?: number;
  style?: React.CSSProperties;
};

export function Icon({ name, size = 18, style }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style,
    "aria-hidden": true,
    focusable: false,
  } as const;

  const svg = (...children: React.ReactNode[]) => React.createElement("svg", common, ...children);

  switch (name) {
    case "eye":
      return svg(
        React.createElement("path", { d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z", key: "eye-1" }),
        React.createElement("circle", { cx: "12", cy: "12", r: "3", key: "eye-2" })
      );
    case "share":
      return svg(
        React.createElement("path", { d: "M12 3v12", key: "share-1" }),
        React.createElement("path", { d: "M16 7l-4-4-4 4", key: "share-2" }),
        React.createElement("path", { d: "M4 13v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6", key: "share-3" })
      );
    case "lock":
      return svg(
        React.createElement("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2", key: "lock-1" }),
        React.createElement("path", { d: "M7 11V8a5 5 0 0 1 10 0v3", key: "lock-2" })
      );
    case "info":
      return svg(
        React.createElement("circle", { cx: "12", cy: "12", r: "10", key: "info-1" }),
        React.createElement("path", { d: "M12 16v-4", key: "info-2" }),
        React.createElement("path", { d: "M12 8h.01", key: "info-3" })
      );
    case "play":
      return svg(React.createElement("polygon", { points: "10 8 16 12 10 16 10 8", key: "play-1" }));
    case "check":
      return svg(React.createElement("path", { d: "M20 6L9 17l-5-5", key: "check-1" }));
    case "x":
      return svg(
        React.createElement("path", { d: "M18 6L6 18", key: "x-1" }),
        React.createElement("path", { d: "M6 6l12 12", key: "x-2" })
      );
    case "chevL":
      return svg(React.createElement("path", { d: "M15 18l-6-6 6-6", key: "chevL-1" }));
    case "chevR":
      return svg(React.createElement("path", { d: "M9 18l6-6-6-6", key: "chevR-1" }));
    case "star":
      return svg(React.createElement("path", { d: "M12 2l2.9 6.8L22 9.6l-5 4.2L18.6 22 12 18.3 5.4 22 7 13.8 2 9.6l7.1-.8L12 2z", key: "star-1" }));
    case "compare":
      return svg(
        React.createElement("rect", { x: "3", y: "4", width: "8", height: "16", rx: "2", key: "compare-1" }),
        React.createElement("rect", { x: "13", y: "4", width: "8", height: "16", rx: "2", key: "compare-2" }),
        React.createElement("path", { d: "M6 8h2", key: "compare-3" }),
        React.createElement("path", { d: "M6 12h2", key: "compare-4" }),
        React.createElement("path", { d: "M6 16h2", key: "compare-5" }),
        React.createElement("path", { d: "M16 10h2", key: "compare-6" }),
        React.createElement("path", { d: "M16 14h2", key: "compare-7" })
      );
    case "copy":
      return svg(
        React.createElement("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", key: "copy-1" }),
        React.createElement("rect", { x: "2", y: "2", width: "13", height: "13", rx: "2", key: "copy-2" })
      );
    case "qr":
      return svg(
        React.createElement("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1", key: "qr-1" }),
        React.createElement("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1", key: "qr-2" }),
        React.createElement("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1", key: "qr-3" }),
        React.createElement("path", { d: "M14 14h3v3h-3z", key: "qr-4" }),
        React.createElement("path", { d: "M18 18h3", key: "qr-5" }),
        React.createElement("path", { d: "M18 21v-3", key: "qr-6" })
      );
    case "send":
      return svg(
        React.createElement("path", { d: "M22 2L11 13", key: "send-1" }),
        React.createElement("path", { d: "M22 2l-7 20-4-9-9-4 20-7z", key: "send-2" })
      );
    case "search":
      return svg(
        React.createElement("circle", { cx: "11", cy: "11", r: "7", key: "search-1" }),
        React.createElement("path", { d: "M21 21l-4.3-4.3", key: "search-2" })
      );
    case "undo":
      return svg(
        React.createElement("path", { d: "M3 7v6h6", key: "undo-1" }),
        React.createElement("path", { d: "M21 17a8 8 0 0 0-13.3-6L3 13", key: "undo-2" })
      );
    case "spark":
      return svg(
        React.createElement("path", { d: "M12 2l1.6 4.6L18 8l-4.4 1.4L12 14l-1.6-4.6L6 8l4.4-1.4L12 2z", key: "spark-1" }),
        React.createElement("path", { d: "M19 13l.9 2.5L22 16l-2.1.7L19 19l-.9-2.3L16 16l2.1-.5L19 13z", key: "spark-2" })
      );
    case "list":
      return svg(
        React.createElement("path", { d: "M8 6h13", key: "list-1" }),
        React.createElement("path", { d: "M8 12h13", key: "list-2" }),
        React.createElement("path", { d: "M8 18h13", key: "list-3" }),
        React.createElement("path", { d: "M3 6h.01", key: "list-4" }),
        React.createElement("path", { d: "M3 12h.01", key: "list-5" }),
        React.createElement("path", { d: "M3 18h.01", key: "list-6" })
      );
    case "chatQ":
      return svg(
        React.createElement("path", { d: "M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z", key: "chatQ-1" }),
        React.createElement("path", { d: "M12 7.8a2 2 0 0 1 2 2c0 1.6-2 1.7-2 3", key: "chatQ-2" }),
        React.createElement("path", { d: "M12 16h.01", key: "chatQ-3" })
      );
    case "riskLow":
      return svg(
        React.createElement("path", { d: "M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z", key: "riskLow-1" }),
        React.createElement("path", { d: "M16 9l-4.5 5L9 11.5", key: "riskLow-2" })
      );
    case "riskMed":
      return svg(
        React.createElement("path", { d: "M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z", key: "riskMed-1" }),
        React.createElement("path", { d: "M12 7v6", key: "riskMed-2" }),
        React.createElement("path", { d: "M12 16h.01", key: "riskMed-3" })
      );
    case "riskHigh":
      return svg(
        React.createElement("path", { d: "M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z", key: "riskHigh-1" }),
        React.createElement("path", { d: "M15 9l-6 6", key: "riskHigh-2" }),
        React.createElement("path", { d: "M9 9l6 6", key: "riskHigh-3" })
      );
    case "pin":
      return svg(
        React.createElement("path", { d: "M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z", key: "pin-1" }),
        React.createElement("circle", { cx: "12", cy: "10", r: "2.5", key: "pin-2" })
      );
    default:
      return null;
  }
}
