import Navbar from "@/components/Navbar";
import FluidReveal from "@/components/FluidReveal";

const HERO_TEXT =
  "XINTONG IS A DIGITAL PRODUCT DESIGNER WITH EXPERIENCE IN B2B FINTECH, HEALTHCARE AND AI.";

const heroStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-serif)",
  fontSize: "clamp(52px, 7.5vw, 118px)",
  lineHeight: 1.0,
  letterSpacing: "-0.03em",
  textTransform: "uppercase",
  maxWidth: "75vw",
  paddingLeft: 60,
};

export default function Home() {
  return (
    <main style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Navbar />

      {/* Layer 1 (bottom): Orange layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#E8561A",
          display: "flex",
          alignItems: "center",
        }}
      >
        <p style={{ ...heroStyle, color: "#1a1a1a" }}>{HERO_TEXT}</p>
      </div>

      {/* Layer 2 (top): WebGL fluid canvas renders cream with alpha holes */}
      <FluidReveal />

      {/* Ghost text — sits above canvas, very faint */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        <p style={{ ...heroStyle, color: "rgba(26,26,26,0.07)" }}>
          {HERO_TEXT}
        </p>
      </div>

      {/* Scroll CTA */}
      <button
        aria-label="Scroll down"
        style={{
          position: "fixed",
          right: 60,
          bottom: 60,
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "#1a1a1a",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 100,
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 3v10M3 8l5 5 5-5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </main>
  );
}
