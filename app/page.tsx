import Navbar from "@/components/Navbar";
import FluidReveal from "@/components/FluidReveal";
import CaseCard from "@/components/CaseCard";

const HERO_TEXT =
  "XINTONG IS A DIGITAL PRODUCT DESIGNER WITH EXPERIENCE IN B2B FINTECH, HEALTHCARE AND AI.";

const heroTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-serif)",
  fontSize: "clamp(52px, 7.5vw, 118px)",
  lineHeight: 1.0,
  letterSpacing: "-0.03em",
  textTransform: "uppercase",
  maxWidth: "75vw",
  paddingLeft: 60,
  margin: 0,
};

const LABELS = ["Product Design", "UX Design", "Vibe-coding"];

const CASES = [
  {
    href: "#",
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

      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Layer 1 (bottom): Orange */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#E8561A",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 28,
          }}
        >
          <p style={{ ...heroTextStyle, color: "#1a1a1a" }}>{HERO_TEXT}</p>

          {/* Labels row */}
          <div
            style={{
              paddingLeft: 60,
              display: "flex",
              gap: 10,
              alignItems: "center",
            }}
          >
            {LABELS.map((label, i) => (
              <span
                key={label}
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: 13,
                  fontWeight: 400,
                  color: "rgba(26,26,26,0.55)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                {label}
                {i < LABELS.length - 1 && (
                  <span style={{ opacity: 0.3 }}>·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Layer 2: WebGL fluid canvas */}
        <FluidReveal />

        {/* Layer 3: Ghost text + labels (cream, above canvas) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 28,
            pointerEvents: "none",
            zIndex: 2,
          }}
        >
          <p style={{ ...heroTextStyle, color: "rgba(26,26,26,0.07)" }}>
            {HERO_TEXT}
          </p>

          {/* Ghost labels */}
          <div
            style={{
              paddingLeft: 60,
              display: "flex",
              gap: 10,
              alignItems: "center",
            }}
          >
            {LABELS.map((label, i) => (
              <span
                key={label}
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: 13,
                  fontWeight: 400,
                  color: "rgba(26,26,26,0.25)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                {label}
                {i < LABELS.length - 1 && (
                  <span style={{ opacity: 0.3 }}>·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            opacity: 0.4,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#1a1a1a",
            }}
          >
            Scroll
          </span>
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
            <rect
              x="1"
              y="1"
              width="10"
              height="18"
              rx="5"
              stroke="#1a1a1a"
              strokeWidth="1.2"
            />
            <circle cx="6" cy="6" r="2" fill="#1a1a1a">
              <animate
                attributeName="cy"
                values="6;12;6"
                dur="1.8s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="1;0.3;1"
                dur="1.8s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      </section>

      {/* ── Selected Work ── */}
      <section
        style={{
          background: "var(--bg)",
          padding: "100px 60px 80px",
          maxWidth: 1200,
          margin: "0 auto",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        {/* Section header */}
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
              fontFamily: "var(--font-dm-serif)",
              fontSize: "clamp(28px, 3vw, 42px)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#1a1a1a",
              margin: 0,
            }}
          >
            Selected Work
          </h2>
          <span
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: 13,
              color: "rgba(26,26,26,0.4)",
            }}
          >
            {CASES.length} projects
          </span>
        </div>

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {CASES.map((c) => (
            <CaseCard key={c.title} {...c} />
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
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
        <span
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: 13,
            color: "rgba(26,26,26,0.4)",
          }}
        >
          © 2026 Xintong Zou
        </span>
        <span
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: 13,
            color: "rgba(26,26,26,0.25)",
          }}
        >
          London, UK
        </span>
      </footer>
    </>
  );
}
