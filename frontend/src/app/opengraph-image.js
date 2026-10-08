import { ImageResponse } from "next/og";

export const alt =
  "UX Hub — Software Development and Digital Growth in India, Saudi Arabia and the GCC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#111111",
          color: "#f5f5f0",
          padding: "68px 76px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, letterSpacing: "0.04em" }}>
          UX HUB
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              display: "flex",
              maxWidth: 1000,
              fontSize: 70,
              lineHeight: 1.02,
              letterSpacing: "-0.045em",
            }}
          >
            Build software. Launch products. Grow digitally.
          </div>
          <div style={{ display: "flex", fontSize: 27, color: "#aaa9a3" }}>
            India · Saudi Arabia · GCC
          </div>
        </div>
      </div>
    ),
    size,
  );
}
