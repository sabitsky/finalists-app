import type { Metadata } from "next";
import { font } from "@/lib/designSystem";
import "./globals.css";

export const metadata: Metadata = {
  title: "EliteStaff — Private Staff OS for UHNW Households",
  description: "Shortlist, vetting, and operations for private household staff — powered by AI, delivered by people.",
  metadataBase: new URL("https://finalists-app.vercel.app"),
  openGraph: {
    title: "EliteStaff — Private Staff OS for UHNW Households",
    description: "Shortlist • Vetting • Operations — powered by AI, delivered by people.",
    siteName: "EliteStaff",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "EliteStaff — Private Staff OS for UHNW households",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EliteStaff — Private Staff OS for UHNW Households",
    description: "Shortlist • Vetting • Operations — powered by AI, delivered by people.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "EliteStaff OG image" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: font.family.ui, fontVariantNumeric: "lining-nums" }}>{children}</body>
    </html>
  );
}
