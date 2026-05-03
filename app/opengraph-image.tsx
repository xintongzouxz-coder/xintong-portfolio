import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(weight: number): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=DM+Sans:wght@${weight}&display=swap`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36",
        },
      }
    ).then((r) => r.text());

    const url = css.match(/src: url\(([^)]+)\) format\('woff2'\)/)?.[1];
    if (!url) return null;
    return fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function Image() {
  const [fontRegular, fontMedium] = await Promise.all([
    loadFont(400),
    loadFont(500),
  ]);

  const fonts: ConstructorParameters<typeof ImageResponse>[1]["fonts"] = [];
  if (fontRegular) fonts.push({ name: "DM Sans", data: fontRegular, weight: 400 });
  if (fontMedium) fonts.push({ name: "DM Sans", data: fontMedium, weight: 500 });

  return new ImageResponse(
    (
      <div
        style={{
          background: "#fafafa",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 100px",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Name + description */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <p
            style={{
              fontSize: 64,
              fontWeight: 500,
              color: "#747474",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Xintong Zou
          </p>
          <p
            style={{
              fontSize: 26,
              fontWeight: 400,
              color: "#747474",
              margin: 0,
              lineHeight: 1.45,
              maxWidth: 780,
            }}
          >
            Product designer with experience in fintech, digital payments,
            healthcare and wellbeing — translating complex systems into clear,
            user-centred products.
          </p>
        </div>

        {/* Tag pills */}
        <div style={{ display: "flex", gap: 12 }}>
          {["B2B Fintech", "Digital Payments", "AI-assisted", "Mobile"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  fontSize: 18,
                  fontWeight: 400,
                  color: "#7A7A7A",
                  background: "rgba(231,231,231,0.8)",
                  padding: "8px 20px",
                  borderRadius: 100,
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
