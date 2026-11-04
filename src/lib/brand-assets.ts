import "server-only";
import { readFileSync } from "node:fs";
import path from "node:path";

/** The Valexity "X" mark as a data URL, for use inside next/og ImageResponse. */
export const markDataUrl = () =>
  `data:image/png;base64,${readFileSync(path.join(process.cwd(), "public", "brand", "mark.png")).toString("base64")}`;

export const logoDataUrl = () =>
  `data:image/png;base64,${readFileSync(path.join(process.cwd(), "public", "brand", "logo.png")).toString("base64")}`;
