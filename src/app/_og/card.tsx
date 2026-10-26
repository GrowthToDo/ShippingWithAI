import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const OG_SIZE = { width: 1200, height: 630 };

const titleSize = (t: string) => (t.length > 40 ? 72 : t.length > 22 ? 84 : 96);

export async function renderCard(title: string) {
  const font = await readFile(join(process.cwd(), "src/app/_og/space-grotesk-700.woff"));
  const cover = await readFile(join(process.cwd(), "src/app/_og/cover-420.png"));
  const coverSrc = `data:image/png;base64,${cover.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#994200",
          backgroundImage: "radial-gradient(circle at 100% 0%, rgba(235,226,207,0.22) 0%, rgba(153,66,0,0) 55%)",
          color: "#ffffff",
          fontFamily: "Space Grotesk",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 680 }}>
          <div style={{ display: "flex", fontSize: 28, letterSpacing: 5, color: "#EBE2CF" }}>SHIPPING WITH AI</div>
          <div style={{ display: "flex", fontSize: titleSize(title), lineHeight: 1.06, letterSpacing: -3, marginTop: 28 }}>
            {title}
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "rgba(255,255,255,0.7)", marginTop: 36 }}>
            shippingwith.ai
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={coverSrc} width={320} height={320} style={{ borderRadius: 160 }} alt="" />
      </div>
    ),
    { ...OG_SIZE, fonts: [{ name: "Space Grotesk", data: font, weight: 700, style: "normal" }] }
  );
}
