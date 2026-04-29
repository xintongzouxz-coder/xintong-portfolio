import Navbar from "@/components/Navbar";
import SplineGoldfish from "@/components/SplineGoldfish";
import CaseCard from "@/components/CaseCard";
import HeroBlocks from "@/components/HeroBlocks";
import AboutIntro from "@/components/AboutIntro";
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
          paddingLeft: 124,
          paddingRight: 124,
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
            display: "flex",
            flexWrap: "wrap",
            gap: 60,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {CASES.map((c) => (
            <CaseCard key={c.title} {...c} />
          ))}
        </div>
      </section>

      {/* ── About Intro ──────────────────────────────────────────────────────── */}
      <AboutIntro />

      {/* ── Other ────────────────────────────────────────────────────────────── */}
      <section
        id="other"
        style={{
          background: "var(--bg)",
          padding: "120px 124px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: 80,
        }}
      >
        {/* Title */}
        <p
          style={{
            fontFamily: "var(--font-dm-mono)",
            fontSize: 20,
            fontWeight: 400,
            letterSpacing: "0.08em",
            color: "#747474",
            margin: 0,
            textAlign: "center",
          }}
        >
          OTHER
        </p>

        {/* Goldfish — width fill, height 520px */}
        <div
          style={{
            width: "100%",
            height: 520,
            borderRadius: 20,
            overflow: "hidden",
            position: "relative",
            background: "#c8c8c8",
          }}
        >
          <SplineGoldfish />
        </div>

        {/* Project cards — two side by side */}
        <div style={{ display: "flex", gap: 40, alignItems: "flex-start" }}>
          {/* Brain Fog */}
          <div style={{ flex: 1, borderRadius: 20, overflow: "hidden" }}>
            <img src="/images/brain.png" alt="Brain Fog" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          {/* Barbican Plants */}
          <div style={{ flex: 1, borderRadius: 20, overflow: "hidden" }}>
            <img src="/images/barbican.png" alt="Barbican Plants" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
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
