import Navbar from "@/components/Navbar";
import SplineGoldfish from "@/components/SplineGoldfish";
import CaseCard from "@/components/CaseCard";

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

        <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
          {CASES.map((c) => (
            <CaseCard key={c.title} {...c} />
          ))}
        </div>
      </section>

      {/* ── Goldfish ── */}
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
