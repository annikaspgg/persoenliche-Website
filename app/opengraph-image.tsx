import { ImageResponse } from "next/og";

export const alt = "Annika Spegg — Geige, Dramaturgie, Performance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAF7F2",
          padding: "80px 100px",
          fontFamily: "ui-serif, Georgia, serif",
        }}
      >
        <div style={{ display: "flex" }}>
          <span
            style={{
              fontSize: 26,
              color: "#6B655C",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            annikaspegg.de
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <span
            style={{
              fontSize: 132,
              color: "#1A1815",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
            }}
          >
            Annika Spegg
          </span>
          <span
            style={{
              fontSize: 38,
              color: "#6B655C",
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
            }}
          >
            Geige · Dramaturgie · Performance
          </span>
        </div>

        <div style={{ display: "flex", height: 6, width: 220, background: "#C8392E" }} />
      </div>
    ),
    { ...size },
  );
}
