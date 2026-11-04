import { ImageResponse } from "next/og";
import { markDataUrl } from "@/lib/brand-assets";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0b0912" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={markDataUrl()} width={104} height={123} alt="" />
      </div>
    ),
    size,
  );
}
