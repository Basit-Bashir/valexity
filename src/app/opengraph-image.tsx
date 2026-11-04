import { ImageResponse } from "next/og";
import { logoDataUrl } from "@/lib/brand-assets";

export const alt = "Valexity Technologies: managed IT, cybersecurity, telecom and web services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** 1200×630 share image (the old site used a 192 px logo, which rendered tiny and blurry). */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "radial-gradient(circle at 85% 0%, rgba(154,78,230,0.55), transparent 55%), radial-gradient(circle at 0% 100%, rgba(255,95,31,0.28), transparent 45%), #0b0912",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoDataUrl()} width={387} height={112} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>Redefining tech.</div>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, color: "#c39cf6" }}>Smarter, safer, seamless.</div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#bdb8c7" }}>
            Managed IT · Cybersecurity · Cloud · VoIP · Web development
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#938da0" }}>
          <span>valexity.com</span>
          <span>Hanover Park, Illinois</span>
        </div>
      </div>
    ),
    size,
  );
}
