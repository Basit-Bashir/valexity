import { ImageResponse } from "next/og";
import { markDataUrl } from "@/lib/brand-assets";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0b0912", borderRadius: 112 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={markDataUrl()} width={300} height={354} alt="" />
      </div>
    ),
    size,
  );
}
