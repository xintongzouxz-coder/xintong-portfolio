import Navbar from "@/components/Navbar";
import SplineGoldfish from "@/components/SplineGoldfish";
import CaseCard from "@/components/CaseCard";
import Link from "next/link";

// ── Hero image assets (Figma CDN, valid ~7 days from 2026-04-29) ──────────────
const IMG = {
  fileBack:     "https://www.figma.com/api/mcp/asset/dad6ddf5-b0cf-4ce2-b3d7-3cca066fdc7a",
  fileFront:    "https://www.figma.com/api/mcp/asset/281f83ed-cee4-4a9c-8029-2ad277e006fd",
  fileBack2:    "https://www.figma.com/api/mcp/asset/e8a30134-858e-4931-94dc-faa9ff0752a2",
  fileFront2:   "https://www.figma.com/api/mcp/asset/68ab5327-22e0-4a36-9b3b-5168b3c041be",
  prorizon:     "https://www.figma.com/api/mcp/asset/0dfa189a-b362-4701-9047-cdae89242ac5",
  payByBank:    "https://www.figma.com/api/mcp/asset/c19d578e-6de6-4bfe-aa90-738c064a6e98",
  designSystem: "https://www.figma.com/api/mcp/asset/8fd47608-dcf9-4fc0-92c3-1f4e5b9b223c",
  profile:      "https://www.figma.com/api/mcp/asset/296dc1cd-d024-4f10-ac3b-d5ab3d959447",
  barbican:     "https://www.figma.com/api/mcp/asset/34e0d3ba-d61e-4baa-847e-3271a4386ded",
  goldfish:     "https://www.figma.com/api/mcp/asset/35678c32-d38f-4349-9e69-9f3bc45b7ecf",
  brain:        "https://www.figma.com/api/mcp/asset/eff6b2e8-0bb4-4638-9064-62eaf91f1669",
};

// Stacking grid: all children placed in same cell, offset by margin
const stackGrid: React.CSSProperties = {
  display: "inline-grid",
  gridTemplateColumns: "max-content",
  gridTemplateRows: "max-content",
};

const cell = (ml: number, mt: number): React.CSSProperties => ({
  gridColumn: 1,
  gridRow: 1,
  marginLeft: ml,
  marginTop: mt,
});

// ── Case cards ────────────────────────────────────────────────────────────────
const CASES = [
  {
    href: "/kody-pbb",
    image: "https://framerusercontent.com/images/zMuPydpVzQipc4F6g78jnLwmU.png",
    tags: ["B2B2C", "Adoption & Growth", "Cross-channel"],
    title: "Kody Pay by Bank Experience",
    year: "2025",
    description:
      "Redesigning the end-to-end Pay by Bank journey to drive adoption and reduce drop-off across merchant and consumer touchpoints.",
  },
  {
    href: "#",
    image: "https://framerusercontent.com/images/Tyf1nHVahYeKA9GbYXRZBJEohY.png",
    tags: ["B2C", "Engagement Optimisation", "Mobile App"],
    title: "Prorizon",
    year: "2024",
    description:
      "Optimising a mobile app's core engagement loops to increase retention and daily active usage.",
  },
  {
    href: "#",
    image: "https://framerusercontent.com/images/wZB93rUKMo0womtaklcfVaQU.png",
    tags: ["Workflow Optimisation", "AI-assisted"],
    title: "PitchME",
    year: "2024",
    description:
      "An AI-assisted pitch preparation tool that streamlines how founders structure and rehearse investor narratives.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "#fafafa",
          paddingTop: 160,
          paddingBottom: 60,
          paddingLeft: 130,
          paddingRight: 130,
          display: "flex",
          flexDirection: "column",
          gap: 60,
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Introduction */}
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 16 }}>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 500,
              fontSize: 48,
              color: "#747474",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Xintong Zou
          </p>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 400,
              fontSize: 24,
              color: "#747474",
              maxWidth: 781,
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Product designer with experience in fintech, digital payments, healthcare and wellbeing — translating complex systems into clear, user-centred products.
          </p>
        </div>

        {/* Three card stacks */}
        <div style={{ display: "flex", alignItems: "flex-start", paddingRight: 75 }}>

          {/* ── Left: Case study file ── */}
          <div
            style={{
              display: "flex",
              width: 485,
              height: 558,
              alignItems: "center",
              justifyContent: "center",
              marginRight: -75,
              flexShrink: 0,
            }}
          >
            <div style={{ transform: "rotate(-5deg)" }}>
              <div style={stackGrid}>

                {/* File back */}
                <div style={cell(0, 62.53)}>
                  <div style={{ width: 428, height: 458, position: "relative" }}>
                    <img
                      src={IMG.fileBack} alt=""
                      style={{ position: "absolute", top: "-0.11%", right: 0, bottom: "-0.11%", left: "-0.12%", width: "100.12%", height: "100.22%", display: "block", maxWidth: "none" }}
                    />
                  </div>
                </div>

                {/* Prorizon card */}
                <div style={{ ...cell(47.85, 176.91) }}>
                  <div style={{ transform: "rotate(5deg)" }}>
                    <div style={{ width: 303, height: 202, borderRadius: 20, overflow: "hidden", boxShadow: "10px 10px 10px rgba(167,167,167,0.25)", position: "relative" }}>
                      <div style={{ position: "absolute", background: "#e9e9e9", inset: 0 }} />
                      <img src={IMG.prorizon} alt="Prorizon" style={{ position: "absolute", width: "117.47%", height: "131.87%", left: "-11.16%", top: "-17.58%", maxWidth: "none" }} />
                    </div>
                  </div>
                </div>

                {/* Pay by Bank card */}
                <div style={cell(190.19, 31.06)}>
                  <div style={{ transform: "rotate(10.07deg)" }}>
                    <div style={{ width: 215, height: 226, borderRadius: 20, overflow: "hidden", boxShadow: "10px 10px 10px rgba(167,167,167,0.25)", position: "relative" }}>
                      <div style={{ position: "absolute", background: "white", inset: 0 }} />
                      <img src={IMG.payByBank} alt="Pay by Bank" style={{ position: "absolute", width: "119.62%", height: "100.06%", left: 0, top: "-0.03%", maxWidth: "none" }} />
                    </div>
                  </div>
                </div>

                {/* Design System card */}
                <div style={cell(1.46, 0)}>
                  <div style={{ transform: "rotate(-2.93deg)" }}>
                    <div style={{ width: 239, height: 181, borderRadius: 20, overflow: "hidden", boxShadow: "10px 10px 10px rgba(167,167,167,0.25)", position: "relative" }}>
                      <div style={{ position: "absolute", background: "white", inset: 0 }} />
                      <img src={IMG.designSystem} alt="Design System" style={{ position: "absolute", width: "117.84%", height: "108%", left: "-8.92%", top: "-3.88%", maxWidth: "none" }} />
                    </div>
                  </div>
                </div>

                {/* File front */}
                <div style={cell(0.15, 85.87)}>
                  <div style={{ width: 414, height: 435, position: "relative" }}>
                    <img
                      src={IMG.fileFront} alt=""
                      style={{ position: "absolute", top: "-9.31%", right: "-8.57%", bottom: "-4.71%", left: "-6.16%", width: "114.73%", height: "114.02%", display: "block", maxWidth: "none" }}
                    />
                  </div>
                </div>

                {/* CTA button */}
                <div style={cell(101.39, 421.67)}>
                  <Link href="/#work" style={{ textDecoration: "none" }}>
                    <div style={{ background: "#292929", padding: 16, borderRadius: 8 }}>
                      <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 20, color: "white", whiteSpace: "nowrap" }}>
                        Read case studies
                      </span>
                    </div>
                  </Link>
                </div>

              </div>
            </div>
          </div>

          {/* ── Center: Profile photo ── */}
          <div
            style={{
              display: "flex",
              width: 418,
              height: 480,
              alignItems: "center",
              justifyContent: "center",
              marginRight: -75,
              flexShrink: 0,
            }}
          >
            <div style={{ transform: "rotate(5deg)" }}>
              <div style={{ width: 380, height: 449, borderRadius: 20, overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", background: "rgba(217,217,217,0.2)", inset: 0 }} />
                <img
                  src={IMG.profile} alt="Xintong Zou"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* ── Right: Fun project file ── */}
          <div
            style={{
              display: "flex",
              width: 512,
              height: 588,
              alignItems: "center",
              justifyContent: "center",
              marginRight: -75,
              flexShrink: 0,
            }}
          >
            <div style={{ transform: "rotate(10deg)" }}>
              <div style={stackGrid}>

                {/* File back */}
                <div style={cell(0.49, 63.04)}>
                  <div style={{ width: 428, height: 458, position: "relative" }}>
                    <img
                      src={IMG.fileBack2} alt=""
                      style={{ position: "absolute", top: "-0.11%", right: 0, bottom: "-0.11%", left: "-0.12%", width: "100.12%", height: "100.22%", display: "block", maxWidth: "none" }}
                    />
                  </div>
                </div>

                {/* Barbican */}
                <div style={cell(181.35, 14)}>
                  <div style={{ transform: "rotate(9.48deg)" }}>
                    <div style={{ width: 190, height: 250, borderRadius: 20, overflow: "hidden", boxShadow: "10px 10px 20px rgba(167,167,167,0.25)", position: "relative" }}>
                      <img src={IMG.barbican} alt="Barbican" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  </div>
                </div>

                {/* Goldfish (flipped) */}
                <div style={cell(46.17, 181.64)}>
                  <div style={{ transform: "scaleY(-1) rotate(168.8deg)" }}>
                    <div style={{ width: 325, height: 189, borderRadius: 20, overflow: "hidden", boxShadow: "10px 10px 20px rgba(167,167,167,0.25)", position: "relative" }}>
                      <img src={IMG.goldfish} alt="Goldfish" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  </div>
                </div>

                {/* Brain */}
                <div style={cell(16.46, 0)}>
                  <div style={{ transform: "rotate(-12.23deg)" }}>
                    <div style={{ width: 288, height: 164, borderRadius: 20, overflow: "hidden", boxShadow: "10px 10px 20px rgba(167,167,167,0.25)", position: "relative" }}>
                      <img src={IMG.brain} alt="Brain" style={{ position: "absolute", width: "163.79%", height: "181.78%", left: "-35.89%", top: "-55.94%", maxWidth: "none" }} />
                    </div>
                  </div>
                </div>

                {/* File front */}
                <div style={cell(0, 85)}>
                  <div style={{ width: 414, height: 435, position: "relative" }}>
                    <img
                      src={IMG.fileFront2} alt=""
                      style={{ position: "absolute", top: "-9.31%", right: "-8.57%", bottom: "-4.71%", left: "-6.16%", width: "114.73%", height: "114.02%", display: "block", maxWidth: "none" }}
                    />
                  </div>
                </div>

                {/* CTA button */}
                <div style={cell(90.48, 424.83)}>
                  <div style={{ background: "#292929", padding: 16, borderRadius: 8 }}>
                    <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 20, color: "white", whiteSpace: "nowrap" }}>
                      Check my fun project
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Selected Work ────────────────────────────────────────────────────── */}
      <section
        id="work"
        style={{
          background: "var(--bg)",
          padding: "100px 60px 80px",
          maxWidth: 1200,
          margin: "0 auto",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: 56,
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: "-0.01em",
              color: "#1a1a1a",
              margin: 0,
            }}
          >
            Selected Work
          </h2>
          <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, color: "rgba(26,26,26,0.4)" }}>
            {CASES.length} projects
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
          {CASES.map((c) => (
            <CaseCard key={c.title} {...c} />
          ))}
        </div>
      </section>

      {/* ── Goldfish ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          background: "#c8c8c8",
        }}
      >
        <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
          <SplineGoldfish />
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer
        style={{
          background: "var(--bg)",
          borderTop: "1px solid rgba(26,26,26,0.08)",
          padding: "32px 60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, color: "rgba(26,26,26,0.4)" }}>
          © 2026 Xintong Zou
        </span>
        <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, color: "rgba(26,26,26,0.25)" }}>
          London, UK
        </span>
      </footer>
    </>
  );
}
