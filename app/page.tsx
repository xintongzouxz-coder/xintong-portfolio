import Navbar from "@/components/Navbar";
import SplineGoldfish from "@/components/SplineGoldfish";
import CaseCard from "@/components/CaseCard";
import HeroBlocks from "@/components/HeroBlocks";
import Link from "next/link";


// ── Case cards ────────────────────────────────────────────────────────────────
const CASES = [
  {
    href: "/kody-pbb",
    image: "https://framerusercontent.com/images/zMuPydpVzQipc4F6g78jnLwmU.png",
    tags: ["B2B2C", "Adoption & Growth", "Cross-channel", "AI-assisted"],
    title: "Kody Pay by Bank experience",
    year: "2025",
    description:
      "Pivoting Pay by Bank from POS terminals to payment links increased adoption by 120%",
  },
  {
    href: "#",
    image: undefined,
    tags: ["Design System", "AI-assisted"],
    title: "Rebuilding the Kody Design System",
    year: "2025",
    description:
      "Simplified design foundations by up to 75%, improved consistency across 4 products",
  },
  {
    href: "#",
    image: undefined,
    tags: ["B2C", "Engagement Optimisation", "Mobile App"],
    title: "Prorizon",
    year: "2024",
    description:
      "Redesigned a self-record health app for young athletes to enhance user engagement",
  },
  {
    href: "#",
    image: undefined,
    tags: ["Workflow Optimisation", "AI-agent"],
    title: "PitchME",
    year: "2024",
    description:
      "An AI-assisted evaluation platform to streamline judges' workflow during live pitch sessions",
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
          overflowX: "hidden",
        }}
      >
        {/* Introduction */}
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 16 }}>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 500,
              fontSize: 36,
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
              fontSize: 18,
              color: "#747474",
              maxWidth: 781,
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Product designer with experience in fintech, digital payments, healthcare and wellbeing — translating complex systems into clear, user-centred products.
          </p>
        </div>

        <HeroBlocks />
      </section>

      {/* ── Project ──────────────────────────────────────────────────────────── */}
      <section
        id="work"
        style={{
          background: "var(--bg)",
          padding: "100px var(--project-padding-x) 120px",
          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-mono)",
            fontSize: 20,
            fontWeight: 400,
            letterSpacing: "0.08em",
            textAlign: "center",
            color: "#1a1a1a",
            margin: 0,
            marginBottom: 60,
          }}
        >
          PROJECT
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "var(--project-columns)",
            gap: 60,
            justifyContent: "center",
          }}
        >
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
