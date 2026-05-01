import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #0d2818 0%, #202124 45%, #1a3a2a 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 14,
              height: 56,
              borderRadius: 4,
              background: "#009233",
            }}
          />
          <div
            style={{
              width: 14,
              height: 56,
              borderRadius: 4,
              background: "#e3000f",
            }}
          />
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: -1,
            fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
          }}
        >
          {SITE.name}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 32,
            fontWeight: 500,
            color: "rgba(255,255,255,0.88)",
            maxWidth: 900,
            lineHeight: 1.35,
            fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
          }}
        >
          {SITE.tagline}
        </div>
        <div
          style={{
            marginTop: "auto",
            fontSize: 22,
            color: "rgba(255,255,255,0.55)",
            fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
          }}
        >
          Köln · NRW · arbeitssicherheit.nrw
        </div>
      </div>
    ),
    { ...size }
  );
}
