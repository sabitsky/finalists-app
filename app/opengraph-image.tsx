import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "EliteStaff — Private Staff OS for UHNW households";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  // Fetch Inter font
  const interSemiBold = fetch(
    new URL("https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hjp-Ek-_EeA.woff2")
  ).then((res) => res.arrayBuffer());

  const interBold = fetch(
    new URL("https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hjp-Ek-_EeA.woff2")
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "56px 64px",
          background: "linear-gradient(145deg, #FAFAF8 0%, #F5F3EE 50%, #F0EDE6 100%)",
          fontFamily: "Inter",
        }}
      >
        {/* Logo top-left */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {/* Leaf icon */}
          <svg width="44" height="44" viewBox="0 0 120 120" fill="none">
            <path
              d="M60 108C28 100 8 72 10 40C12 10 34 -8 60 -8C92 -8 114 14 114 46C114 78 92 102 60 108Z"
              transform="rotate(-14 60 50)"
              fill="#1F3D32"
            />
            <path
              d="M84 106C66 102 52 88 50 70C48 48 64 26 88 24C114 22 132 42 128 66C124 90 102 102 84 106Z"
              transform="rotate(14 88 68)"
              fill="#1F3D32"
              opacity="0.7"
            />
          </svg>
          <span
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#1B1E23",
              letterSpacing: "-0.5px",
            }}
          >
            EliteStaff
          </span>
        </div>

        {/* Main content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: 56,
            marginTop: 24,
          }}
        >
          {/* Browser mockup with app screenshot */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 520,
              height: 380,
              background: "#FFFFFF",
              borderRadius: 16,
              boxShadow: "0 20px 60px rgba(27,30,35,0.12), 0 4px 16px rgba(27,30,35,0.06)",
              border: "1px solid rgba(215,218,214,0.6)",
              overflow: "hidden",
            }}
          >
            {/* Browser top bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 16px",
                background: "#F9FAFB",
                borderBottom: "1px solid #E5E7EB",
              }}
            >
              <div style={{ display: "flex", gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: 10, background: "#E5E7EB" }} />
                <div style={{ width: 10, height: 10, borderRadius: 10, background: "#E5E7EB" }} />
                <div style={{ width: 10, height: 10, borderRadius: 10, background: "#E5E7EB" }} />
              </div>
              <div
                style={{
                  flex: 1,
                  height: 24,
                  background: "#F3F4F6",
                  borderRadius: 6,
                  marginLeft: 12,
                }}
              />
            </div>

            {/* App content - Comparison table mockup */}
            <div style={{ display: "flex", flexDirection: "column", padding: 20, gap: 16, flex: 1 }}>
              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: "#1B1E23" }}>3 финалиста</span>
                <span style={{ fontSize: 12, fontWeight: 500, color: "#6B7280" }}>Сравнение</span>
              </div>

              {/* Candidate cards row */}
              <div style={{ display: "flex", gap: 10 }}>
                {[
                  { name: "А.К.", badge: true, price: "€5 200" },
                  { name: "М.В.", badge: false, price: "€4 600" },
                  { name: "Е.С.", badge: false, price: "€5 900" },
                ].map((c, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                      padding: "12px 10px",
                      background: c.badge ? "#F1EEE7" : "#FAFAFA",
                      borderRadius: 10,
                      border: `1px solid ${c.badge ? "#E2D8C6" : "#E5E7EB"}`,
                      gap: 6,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 8,
                          background: c.badge ? "#1F3D32" : "#D1D5DB",
                        }}
                      />
                      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <span style={{ fontSize: 13, fontWeight: 700, color: "#1B1E23" }}>{c.name}</span>
                        <span style={{ fontSize: 11, fontWeight: 600, color: "#6B7280" }}>{c.price}</span>
                      </div>
                    </div>
                    {c.badge && (
                      <div
                        style={{
                          fontSize: 9,
                          fontWeight: 600,
                          color: "#8F7A4A",
                          background: "#FDF9F0",
                          padding: "3px 6px",
                          borderRadius: 4,
                          alignSelf: "flex-start",
                        }}
                      >
                        Рекомендован
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Comparison rows */}
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {[
                  { label: "Английский", values: ["C2", "B2+", "C1"] },
                  { label: "Ротации", values: ["да", "ограниченно", "да"] },
                  { label: "Старт", values: ["10 дней", "3–4 нед.", "сразу"] },
                ].map((row, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 10,
                    }}
                  >
                    {row.values.map((v, j) => (
                      <div
                        key={j}
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          padding: "8px 10px",
                          background: "#FAFAFA",
                          borderRadius: 6,
                          border: "1px solid #E5E7EB",
                          gap: 2,
                        }}
                      >
                        <span style={{ fontSize: 9, fontWeight: 600, color: "#9CA3AF" }}>{row.label}</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: "#1B1E23" }}>{v}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              gap: 20,
              paddingRight: 20,
            }}
          >
            <h1
              style={{
                fontSize: 44,
                fontWeight: 700,
                color: "#1B1E23",
                lineHeight: 1.15,
                letterSpacing: "-1px",
                margin: 0,
              }}
            >
              Private Staff OS
              <br />
              for UHNW households
            </h1>
            <p
              style={{
                fontSize: 18,
                fontWeight: 500,
                color: "#6B7280",
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              Shortlist • Vetting • Operations
              <br />
              <span style={{ color: "#8F7A4A" }}>powered by AI, delivered by people</span>
            </p>
          </div>
        </div>

        {/* Bottom subtle branding */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 8,
            marginTop: 16,
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 500, color: "#9CA3AF" }}>elitestaff.io</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interSemiBold,
          weight: 600,
          style: "normal",
        },
        {
          name: "Inter",
          data: await interBold,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
