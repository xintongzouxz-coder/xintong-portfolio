import Image from "next/image";
import Navbar from "@/components/Navbar";
import DesignSystemTOC from "@/components/DesignSystemTOC";

// ── Shared styles ─────────────────────────────────────────────────────────────
const contentWidth: React.CSSProperties = {
  maxWidth: 960,
  margin: "0 auto",
  padding: "0 60px",
  boxSizing: "border-box",
  width: "100%",
};

const overviewWidth: React.CSSProperties = {
  padding: "0 124px",
  boxSizing: "border-box",
  width: "100%",
};

const sectionGap = 120;

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans)",
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: "#3445ff",
  marginBottom: 14,
  display: "block",
};

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans)",
  fontSize: 20,
  fontWeight: 600,
  lineHeight: 1.3,
  letterSpacing: "-0.01em",
  color: "#1a1a1a",
  margin: "0 0 28px",
};

const h3Style: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans)",
  fontSize: 18,
  fontWeight: 600,
  lineHeight: 1.3,
  letterSpacing: "-0.01em",
  color: "#1a1a1a",
  margin: "0 0 16px",
};

const bodyStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans)",
  fontSize: 16,
  lineHeight: 1.75,
  color: "rgba(26,26,26,0.72)",
  margin: 0,
  maxWidth: 840,
};

const imgStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: 14,
  display: "block",
};

const blockquoteStyle: React.CSSProperties = {
  borderLeft: "3px solid #3445ff",
  paddingLeft: 24,
  margin: "40px 0",
};

const blockquoteTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans)",
  fontSize: "clamp(18px, 2vw, 26px)",
  fontWeight: 500,
  lineHeight: 1.4,
  letterSpacing: "-0.01em",
  color: "#1a1a1a",
  margin: 0,
};

const glassCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.55)",
  backdropFilter: "blur(20px)",
  borderRadius: 16,
  border: "1px solid rgba(255,255,255,0.7)",
  padding: "32px 36px",
};

const divider = (
  <div style={{ borderTop: "1px solid rgba(26,26,26,0.1)", marginBottom: 64 }} />
);

// ── Image placeholder ─────────────────────────────────────────────────────────
function ImgPlaceholder({ label, aspect = "16/9" }: { label: string; aspect?: string }) {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: aspect,
        borderRadius: 14,
        background: "rgba(26,26,26,0.05)",
        border: "1px dashed rgba(26,26,26,0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, color: "rgba(26,26,26,0.35)" }}>
        {label}
      </span>
    </div>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────
const products = [
  { name: "Terminal", desc: "Offline payment experience" },
  { name: "Terminal APP", desc: "Android companion app" },
  { name: "Receipt", desc: "Physical artefact that is printed" },
  { name: "Kody App", desc: "Bank application" },
  { name: "Kody Universe", desc: "Merchant web app for reconciliation" },
  { name: "Kody Order", desc: "QR ordering experience" },
];

const findings = [
  "Hundreds of tokens were used across products, with no shared structure or naming system",
  "The same UI patterns were implemented differently across platforms, leading to duplication and inconsistency",
];

const principles = [
  {
    icon: "/images/kody-design-system/north-star-1.svg",
    title: "Simplify, don't redesign",
    body: "The same components were implemented in multiple styles, especially in Terminal, with no clear standard.",
  },
  {
    icon: "/images/kody-design-system/north-star-2.svg",
    title: "Foundation-first",
    body: "Tokens before components.",
  },
  {
    icon: "/images/kody-design-system/north-star-3.svg",
    title: "Progressive adoption",
    body: "Start with high-impact surfaces and migrate iteratively.",
  },
];

const outcomes = [
  "Reduced colour tokens from 138 to 35 (~75% reduction), improving consistency and maintainability across products",
  "Optimised receipt structure, reducing paper usage by 16% and improving operational efficiency",
  "Improved QA efficiency through a structured design reference system",
];

// ── Page ─────────────────────────────────────────────────────────────────────
export default function DesignSystem() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section id="overview" style={{ background: "#fafafa", paddingTop: 120 }}>
        <div style={overviewWidth}>
          <span style={labelStyle}>Kody · 2025 · Design System · AI-assisted</span>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", marginBottom: 80 }}>
            <div>
              <h1
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(36px, 5vw, 66px)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: "#1a1a1a",
                  margin: 0,
                }}
              >
                Rebuilding the Kody Design System
              </h1>
            </div>
            <div>
              <Image src="/images/kody-design-system/hero.png" alt="旧版 Kody 设计系统全览" width={6180} height={4400} style={{ ...imgStyle }} />
            </div>
          </div>
        </div>

        {/* Opening statement */}
        <div style={overviewWidth}>
          <div style={{ paddingTop: 80, paddingBottom: sectionGap }}>
            <div style={{ ...blockquoteStyle, margin: "0 0 40px" }}>
              <p style={blockquoteTextStyle}>
                "Reduced foundation tokens by 76%, cutting design-to-code handoff ambiguity and enabling a 16% reduction in receipt paper usage across the merchant network."
              </p>
            </div>
            <p style={{ ...bodyStyle, marginBottom: 16, maxWidth: "none" }}>
              Kody's product ecosystem had grown into four platforms, each evolving independently. As the system scaled, the UI became fragmented — slowing down delivery, creating inconsistencies, and making design-to-development alignment difficult.
            </p>
            <p style={{ ...bodyStyle, maxWidth: "none" }}>
              I led efforts to bring structure by defining a shared foundation and constrained reusable components that could scale across 4 products.
            </p>
          </div>
        </div>
      </section>

      {/* ── SIDEBAR + CONTENT LAYOUT ── */}
      <style>{`
        .ds-with-sidebar {
          display: flex;
          align-items: flex-start;
          gap: 40px;
          padding: 0 124px 0 100px;
          box-sizing: border-box;
          width: 100%;
        }
        .ds-sidebar-col {
          width: 274px;
          flex-shrink: 0;
          position: sticky;
          top: 72px;
          padding: 32px;
          box-sizing: border-box;
        }
        .ds-content-col {
          flex: 1;
          min-width: 0;
        }
        @media (max-width: 900px) {
          .ds-with-sidebar { flex-direction: column; padding: 0 24px; }
          .ds-sidebar-col { display: none; }
          .ds-content-col { width: 100%; }
        }
      `}</style>

      <div className="ds-with-sidebar">
        {/* Sidebar */}
        <div className="ds-sidebar-col">
          <DesignSystemTOC />
        </div>

        {/* Content column */}
        <div className="ds-content-col">

          {/* ── Multiplatform ── */}
          <section id="multiplatform" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>Multiplatform</h2>

            <p style={{ ...bodyStyle, marginBottom: 24 }}>
              Kody has multiple product streams:
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 32 }}>
              {products.map(({ name, desc }) => (
                <div key={name} style={{ ...glassCard, padding: "24px 28px" }}>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, fontWeight: 600, color: "#1a1a1a", margin: "0 0 6px" }}>
                    {name}
                  </p>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, lineHeight: 1.5, color: "rgba(26,26,26,0.55)", margin: 0 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            <Image src="/images/kody-design-system/multiplatform.png" alt="Kody product ecosystem: Terminal APP, Receipt, Kody Universe, Kody Order, Kody APP" width={2000} height={900} style={{ ...imgStyle, marginBottom: 48 }} />

            <p style={{ ...bodyStyle, marginBottom: 16 }}>
              Each was built by different members at different points in time. As the suite expanded, the UI drifted apart, and the existing "design system" was no longer a system but a loose collection of overlapping patterns.
            </p>
            <p style={bodyStyle}>
              The cost showed up most clearly inside the team. Engineers flagged it repeatedly: new joiners kept rebuilding components that already existed, because the source of truth lived in a handful of long-tenured colleagues — creating constant back-and-forth before and after implementation just to verify correctness. At four products and a growing team, institutional memory had become the scaling bottleneck.
            </p>
          </section>

          {/* ── Evidence of system fragmentation ── */}
          <section id="problem" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>Evidence of system fragmentation</h2>

            <p style={{ ...bodyStyle, marginBottom: 40 }}>
              I conducted a UI audit across products revealed significant inconsistency in both foundations and components.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 48 }}>
              {findings.map((f, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#3445ff", marginTop: 10, flexShrink: 0 }} />
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.6, color: "#1a1a1a", margin: 0 }}>
                    {f}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ maxWidth: "70%", margin: "0 auto 32px" }}>
              <Image src="/images/kody-design-system/ui-audit-overview.png" alt="UI audit findings: 138 colours, 23 typography styles, 30+ spacings, 10+ border radius values" width={1400} height={350} style={{ ...imgStyle }} />
            </div>

            {/* 2×2 image grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              {[
                {
                  src: "/images/kody-design-system/ui-audit.png",
                  width: 2118,
                  height: 1374,
                  caption: "No consistent token structure across products",
                },
                {
                  src: "/images/kody-design-system/reference-impl.png",
                  width: 4954,
                  height: 4626,
                  caption: "Inconsistent component implementation across products",
                },
                {
                  src: "/images/kody-design-system/problem-mixed-tokens.png",
                  width: 1456,
                  height: 768,
                  caption: "Different product tokens were mixed within the same interface",
                },
                {
                  src: "/images/kody-design-system/problem-receipt-mismatch.png",
                  width: 700,
                  height: 900,
                  caption: "Receipt templates in Figma didn't match the actual printer paper dimensions",
                },
              ].map(({ src, width, height, caption }, i) => (
                <div key={i}>
                  <Image
                    src={src!}
                    alt={caption}
                    width={width!}
                    height={height!}
                    style={{ ...imgStyle, marginBottom: 10 }}
                  />
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, lineHeight: 1.5, color: "rgba(26,26,26,0.55)", margin: 0 }}>
                    {caption}
                  </p>
                </div>
              ))}
            </div>

            <p style={{ ...bodyStyle, marginTop: 32, marginBottom: 24 }}>
              After Audit i led a cross-functional workshop to align the these findings design, engineering, and QA.
            </p>

            <div style={{ maxWidth: "70%", margin: "0 auto" }}>
              <Image src="/images/kody-design-system/key-issues.png" alt="Design system SWOT workshop FigJam" width={930} height={644} style={{ ...imgStyle }} />
            </div>
          </section>

          {/* ── Key Issues ── */}
          <section id="key-issues" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>Key Issues</h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 48 }}>
              {/* Developers */}
              <div style={glassCard}>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "rgba(26,26,26,0.4)", display: "block", marginBottom: 8 }}>
                  For Developers
                </span>
                <h3 style={{ ...h3Style, marginBottom: 20 }}>Growing code debt</h3>
                {[
                  <>Design values weren't reliably tokenised: engineers <strong>used one-off hex values</strong> or picked between same-named tokens that resolved to different actual colours across products.</>,
                  <>Core patterns like buttons existed as individual instances; the <strong>same components were implemented in multiple styles</strong>, especially in Terminal, with no clear standard.</>,
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, marginBottom: i === 1 ? 0 : 14, alignItems: "flex-start" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#3445ff", marginTop: 10, flexShrink: 0 }} />
                    <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, lineHeight: 1.6, color: "#1a1a1a", margin: 0 }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Designers & QA */}
              <div style={glassCard}>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "rgba(26,26,26,0.4)", display: "block", marginBottom: 8 }}>
                  For Designers & QA
                </span>
                <h3 style={{ ...h3Style, marginBottom: 20 }}>Errors compound silently</h3>
                {[
                  <>Without a source of truth, new joiners couldn't tell which reference was correct and which was outdated, <strong>replicating legacy errors into new work</strong>.</>,
                  <><strong>Designers didn't know which design system version to follow</strong> — multiple overlapping versions existed in Figma, each partially outdated, with no clear owner or canonical source.</>,
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, marginBottom: i === 1 ? 0 : 14, alignItems: "flex-start" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#3445ff", marginTop: 10, flexShrink: 0 }} />
                    <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, lineHeight: 1.6, color: "#1a1a1a", margin: 0 }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </section>

          {/* ── North Star design principles ── */}
          <section id="north-star" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>North Star design principles</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {principles.map(({ icon, title, body }) => (
                <div key={title} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={icon}
                    alt={title}
                    width={32}
                    height={32}
                    style={{ flexShrink: 0, marginTop: 2 }}
                  />
                  <div>
                    <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 16, fontWeight: 600, color: "#1a1a1a", margin: "0 0 4px" }}>
                      {title}
                    </p>
                    <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.6, color: "rgba(26,26,26,0.65)", margin: 0 }}>
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Solution ── */}
          <section id="solutions" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>Solution</h2>

            {/* 01 — Source of truth */}
            <div id="solutions-source-of-truth" style={{ marginBottom: 80 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 500, color: "#3445ff", background: "rgba(52,69,255,0.1)", borderRadius: 100, padding: "4px 14px" }}>01</span>
                <h3 style={{ ...h3Style, margin: 0 }}>No single source of truth → 1 Source of truth</h3>
              </div>
              <p style={{ ...bodyStyle, marginBottom: 32 }}>
                A key deliverable was a clear, accessible source of truth for design, QA, and engineering. I collaborated with QA to organise 67 terminal designs and 23 receipt designs based on the payment flow — speeding up QA and designer processes.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                <Image src="/images/kody-design-system/source-of-truth.png" alt="Terminal/Receipt design library organised by payment flow" width={1730} height={1350} style={{ ...imgStyle }} />
                <Image src="/images/kody-design-system/source-of-truth-2.png" alt="Figma payment flow overview organised by section" width={3348} height={496} style={{ ...imgStyle }} />
              </div>
            </div>

            {/* 02 — Token system */}
            <div id="solutions-token-system" style={{ marginBottom: 80 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 500, color: "#3445ff", background: "rgba(52,69,255,0.1)", borderRadius: 100, padding: "4px 14px" }}>02</span>
                <h3 style={{ ...h3Style, margin: 0 }}>Inconsistent foundations → Define a token system</h3>
              </div>
              <p style={{ ...bodyStyle, marginBottom: 24 }}>
                I collaborated with other designers to introduce a scalable token system that standardised visual decisions across platforms and aligned design with engineering implementation.
              </p>

              <div style={{ maxWidth: "70%", margin: "0 auto 16px" }}>
                <Image src="/images/kody-design-system/token-intro.png" alt="Token system overview" width={1600} height={900} style={{ ...imgStyle }} />
              </div>

              {/* Token system image — moved above the text blocks */}
              <div style={{ maxWidth: "70%", margin: "0 auto 40px" }}>
                <Image src="/images/kody-design-system/token-system.png" alt="BEFORE/NOW token comparison" width={3604} height={1872} style={{ ...imgStyle }} />
              </div>

              {/* Text blocks — stacked vertically */}
              <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>

                {/* Colors */}
                <div>
                  <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "rgba(26,26,26,0.4)", display: "block", marginBottom: 12 }}>Colors</span>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.6, color: "#1a1a1a", margin: "0 0 20px" }}>
                    We reduced <strong>138 inconsistent colour tokens into 35 palette tokens</strong>, then redefined the semantic structure to ensure consistent usage across different contexts. This enabled designers to apply colours based on meaning rather than manual selection.
                  </p>
                  {/* 1 left + 2 stacked vertically on right */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <Image src="/images/kody-design-system/colors-palette.png" alt="35 colour palette tokens" width={800} height={600} style={{ ...imgStyle, borderRadius: 10 }} />
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      <Image src="/images/kody-design-system/colors-semantic-1.png" alt="Semantic colour usage example" width={800} height={400} style={{ ...imgStyle, borderRadius: 10 }} />
                      <Image src="/images/kody-design-system/colors-semantic-2.png" alt="Semantic colour usage example" width={800} height={400} style={{ ...imgStyle, borderRadius: 10 }} />
                    </div>
                  </div>
                </div>

                {/* Multi-dimensional tokens */}
                <div>
                  <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "rgba(26,26,26,0.4)", display: "block", marginBottom: 12 }}>Multi-dimensional tokens</span>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.6, color: "#1a1a1a", margin: "0 0 20px" }}>
                    Beyond colour, the system extended to cover typography, spacing, and border radius, ensuring consistent behaviour across components and platforms.
                  </p>
                  {/* 1 full-width top + 2 side-by-side bottom */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <Image src="/images/kody-design-system/tokens-multi-overview.png" alt="Typography, spacing, and border radius token overview" width={1600} height={900} style={{ ...imgStyle, borderRadius: 10 }} />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      <Image src="/images/kody-design-system/tokens-multi-1.png" alt="Multi-dimensional token detail" width={800} height={600} style={{ ...imgStyle, borderRadius: 10 }} />
                      <Image src="/images/kody-design-system/tokens-multi-2.png" alt="Multi-dimensional token detail" width={800} height={600} style={{ ...imgStyle, borderRadius: 10 }} />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* 03 — Component specs */}
            <div id="solutions-component-specs" style={{ marginBottom: 80 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 500, color: "#3445ff", background: "rgba(52,69,255,0.1)", borderRadius: 100, padding: "4px 14px" }}>03</span>
                <h3 style={{ ...h3Style, margin: 0 }}>Excessive component variants → Build core component specs</h3>
              </div>
              <p style={{ ...bodyStyle, marginBottom: 24 }}>
                While tokens established a consistent visual foundation, components were still fragmented across products. The team first separated components into web, Android, and iOS groups. Given resource constraints, Terminal (Android) was prioritised as the primary surface to establish component standards before scaling across platforms.
              </p>

              {/* 2 stacked images */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32, maxWidth: "70%", margin: "0 auto 32px" }}>
                <Image src="/images/kody-design-system/component-top-1.png" alt="Component categorisation across web, Android, and iOS" width={1600} height={900} style={{ ...imgStyle }} />
                <Image src="/images/kody-design-system/component-top-2.png" alt="Terminal component audit overview" width={1600} height={900} style={{ ...imgStyle }} />
              </div>

              <div style={{ ...blockquoteStyle, marginBottom: 24 }}>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 16, fontWeight: 500, lineHeight: 1.6, color: "#1a1a1a", margin: 0 }}>
                  Action-Button
                </p>
              </div>

              <p style={{ ...bodyStyle, marginBottom: 24 }}>
                Through auditing terminal flows, I found that buttons were designed case by case, without a shared structure. The same action (e.g. "Pay" or "Continue") appeared with different styles, sizes, and visual weights, with no clear relationship between intent and appearance.
              </p>

              {/* component-specs image moved here, above the dimensions text */}
              <div style={{ maxWidth: "70%", margin: "0 auto 24px" }}>
                <Image src="/images/kody-design-system/component-specs.png" alt="Button variants across terminal flows" width={2880} height={2396} style={{ ...imgStyle }} />
              </div>

              <p style={{ ...bodyStyle, marginBottom: 24 }}>
                Instead of standardising each button individually, a compositional model was defined by breaking buttons into four independent dimensions:
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 32 }}>
                {[
                  { label: "Semantic role", value: "Primary / Secondary / Tertiary" },
                  { label: "Visual variant", value: "Filled / Outline / Text" },
                  { label: "Size", value: "XS / S / M / L" },
                  { label: "State", value: "Default / Disabled / Loading" },
                ].map(({ label, value }) => (
                  <div key={label} style={{ ...glassCard, padding: "20px 22px" }}>
                    <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "rgba(26,26,26,0.4)", display: "block", marginBottom: 8 }}>
                      {label}
                    </span>
                    <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, lineHeight: 1.5, color: "#1a1a1a", margin: 0, fontWeight: 500 }}>
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* 2 side-by-side images */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                <Image src="/images/kody-design-system/component-bottom-left.png" alt="Button variant specification" width={800} height={600} style={{ ...imgStyle }} />
                <Image src="/images/kody-design-system/component-bottom-right.png" alt="Button variant specification" width={800} height={600} style={{ ...imgStyle }} />
              </div>
            </div>

            {/* 04 — Reference implementation */}
            <div id="solutions-implementation" style={{ marginBottom: 80 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 500, color: "#3445ff", background: "rgba(52,69,255,0.1)", borderRadius: 100, padding: "4px 14px" }}>04</span>
                <h3 style={{ ...h3Style, margin: 0 }}>Create a reference implementation</h3>
              </div>
              <p style={{ ...bodyStyle, marginBottom: 32 }}>
                Rather than attempting a full migration across all products, a progressive rollout strategy was suggested to minimise disruption and reduce implementation risk. Terminal (Android) was selected as the initial surface due to its high usage frequency and relatively controlled scope. The new token and component system was applied to key user flows (new payment), creating a working reference for how the system should be used in practice. Legacy screens were maintained temporarily, while all new designs followed the updated token and component system.
              </p>
              <Image src="/images/kody-design-system/implementation.png" alt="Terminal new payment flow with updated token and component system applied" width={1600} height={900} style={{ ...imgStyle }} />
            </div>

            {/* 05 — Receipt */}
            <div id="solutions-receipt" style={{ marginBottom: 80 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 500, color: "#3445ff", background: "rgba(52,69,255,0.1)", borderRadius: 100, padding: "4px 14px" }}>05</span>
                <h3 style={{ ...h3Style, margin: 0 }}>From tokens to paper: a downstream win</h3>
              </div>
              <p style={{ ...bodyStyle, marginBottom: 32 }}>
                Receipt was one of the most problematic surfaces flagged in the audit, the Figma template didn't match the actual paper size, and the drift kept getting worse with every iteration. Once the token system was ready, I used receipt as the first reference implementation.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 32 }}>
                <Image src="/images/kody-design-system/receipt-comparison.png" alt="Receipt templates in Figma didn't match the actual printer paper dimensions" width={970} height={900} style={{ ...imgStyle }} />
                <Image src="/images/kody-design-system/receipt-drift.png" alt="Original vs updated receipt design showing saved paper cost" width={970} height={900} style={{ ...imgStyle }} />
              </div>
              <p style={{ ...bodyStyle, marginBottom: 12 }}>Detailed action :</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  "43% less typographic variation: reduced 7 font sizes (8 / 10 / 11 / 12 / 14 / 16 / 18 pt) down to 4",
                  "34% less spacing variation: consolidated 6 vertical spacing values into 2",
                  "Combined effect: average receipt length dropped from 24.1 cm to 20.24 cm",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(26,26,26,0.72)", marginTop: 10, flexShrink: 0 }} />
                    <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 16, lineHeight: 1.75, color: "rgba(26,26,26,0.72)", margin: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 06 — AI */}
            <div id="solutions-ai">
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 500, color: "#3445ff", background: "rgba(52,69,255,0.1)", borderRadius: 100, padding: "4px 14px" }}>06</span>
                <h3 style={{ ...h3Style, margin: 0 }}>Operationalising the design system with AI</h3>
              </div>

              <p style={{ ...bodyStyle, marginBottom: 24 }}>
                To support ongoing consistency, the design system was translated into a set of machine-readable rules using Claude Code, enabling automated validation of design outputs. Designers could submit Figma designs for automated checks, where elements that deviated from token were identified and flagged.
              </p>

              <Image src="/images/kody-design-system/ai-validation.png" alt="AI-powered automated design validation flagging token deviations in Figma" width={1600} height={900} style={{ ...imgStyle }} />
            </div>
          </section>

          {/* ── Outcome ── */}
          <section id="outcome" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <span style={labelStyle}>Outcome</span>
            <h2 style={h2Style}>Results</h2>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginBottom: 48 }}>
              {[
                { stat: "76%", label: "reduction in foundation tokens" },
                { stat: "138→35", label: "colour tokens consolidated" },
                { stat: "16%", label: "less receipt paper used" },
              ].map(({ stat, label }) => (
                <div key={stat} style={{ ...glassCard, padding: "36px 32px" }}>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(36px,4vw,56px)", fontWeight: 700, color: "#3445ff", margin: "0 0 8px", lineHeight: 1 }}>
                    {stat}
                  </p>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "rgba(26,26,26,0.65)", margin: 0, lineHeight: 1.5 }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* Outcome list */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 48 }}>
              {outcomes.map((o, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#3445ff", marginTop: 10, flexShrink: 0 }} />
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.6, color: "#1a1a1a", margin: 0 }}>
                    {o}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div style={{ ...blockquoteStyle, marginBottom: 0 }}>
              <p style={blockquoteTextStyle}>
                "Now I can directly access to the terminal design bank to validate some legacy design instead of finding clues in lots of back-and-forth conversations."
              </p>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "rgba(26,26,26,0.45)", margin: "12px 0 0" }}>
                — QA
              </p>
            </div>
          </section>

          {/* ── What's Next ── */}
          <section id="whats-next" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <span style={labelStyle}>Looking ahead</span>
            <h2 style={h2Style}>What's Next</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {[
                {
                  bold: "Scaling the system to other products.",
                  rest: " Terminal was the starting point, not the end. Next is migrating Kody App, Universe, and Order onto the same token foundation, flow by flow. By the end, no product should rely on its own one-off values.",
                },
                {
                  bold: "Building an adoption dashboard.",
                  rest: " Right now, “is the system being used” is a qualitative answer. I want to make it measurable: how many new screens use system tokens, which components get reused most, and where designers are still working around the system. This turns the design system from a deliverable into a product with its own metrics.",
                },
                {
                  bold: "AI-assisted build for complex components.",
                  rest: " As the system expands to cover forms, modals, and data tables, manually building every variant in Figma becomes a bottleneck. Using AI to generate Figma components from token specs can keep the system's growth from outpacing the team's capacity to maintain it.",
                },
              ].map(({ bold, rest }, i) => (
                <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, fontWeight: 600, color: "#3445ff", minWidth: 24, marginTop: 2 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 16, lineHeight: 1.75, color: "rgba(26,26,26,0.72)", margin: 0 }}>
                    <strong style={{ color: "#1a1a1a" }}>{bold}</strong>{rest}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>{/* end ds-content-col */}
      </div>{/* end ds-with-sidebar */}

      {/* ── Footer ── */}
      <footer
        style={{
          background: "#fafafa",
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
