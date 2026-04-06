import Navbar from "@/components/Navbar";

// ── Figma icon assets ─────────────────────────────────────────────────────────
// Comparison card icons
const icCardIcon   = "https://www.figma.com/api/mcp/asset/2adcb1e6-5493-4ddf-a8ed-0a00a9acfd07";
const icSpeedFast  = "https://www.figma.com/api/mcp/asset/ad9e374d-b068-4340-ba76-b65dfb4e355b";
const icSignalGood = "https://www.figma.com/api/mcp/asset/5891cbdb-6983-494f-a43a-c04d4c0b820d";
const icBrainLow   = "https://www.figma.com/api/mcp/asset/2a5a1ea8-9bff-4dc7-a374-a9abf0f52db8";
const icBankIcon   = "https://www.figma.com/api/mcp/asset/13e29b2f-f110-4eef-8daa-93a962e436cd";
const icSpeedSlow  = "https://www.figma.com/api/mcp/asset/5cd68b7e-e8f8-463a-867f-ce080d8d8087";
const icSignalBad  = "https://www.figma.com/api/mcp/asset/05e7c2f3-e783-4d24-a1bd-1af9f9a9cdec";
const icQuestion   = "https://www.figma.com/api/mcp/asset/dc248b28-0cd8-42a4-becf-70684c3e1005";

// Insight icons
const icConnectivity = "https://www.figma.com/api/mcp/asset/f16ef691-132b-4078-874f-4f9dc538b320";
const icFriction     = "https://www.figma.com/api/mcp/asset/ef86d860-96eb-440b-b69e-ce75a8cb07aa";
const icRefund       = "https://www.figma.com/api/mcp/asset/5d5612d2-6af2-416d-b4b9-f3f7d581a62f";
const icComms        = "https://www.figma.com/api/mcp/asset/827a78f2-d2e3-4a62-a41e-624ef5ed6005";

// ── Shared styles ─────────────────────────────────────────────────────────────
const contentWidth: React.CSSProperties = {
  maxWidth: 960,
  margin: "0 auto",
  padding: "0 60px",
  boxSizing: "border-box",
  width: "100%",
};

const sectionGap = 120;

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
};

const imgStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: 14,
  display: "block",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans)",
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: "#E8561A",
  marginBottom: 14,
  display: "block",
};

const blockquoteStyle: React.CSSProperties = {
  borderLeft: "3px solid #E8561A",
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

const divider = (
  <div style={{ borderTop: "1px solid rgba(26,26,26,0.1)", marginBottom: 64 }} />
);

// ── Data ─────────────────────────────────────────────────────────────────────
const cohorts = [
  { name: "Recent PBB users (past 7 days)", count: 2 },
  { name: "Highest-value PBB transactions", count: 2 },
  { name: "Churned PBB users (no use in 3 weeks)", count: 4 },
  { name: "Negative feedback cases", count: 2 },
  { name: "Customer account managers", count: 4 },
];

const cardMetrics = [
  { label: "Speed: Fast (3–5S)",       fillPct: "91.8%", icon: icSpeedFast  },
  { label: "Reliability: High (Offline)", fillPct: "85.4%", icon: icSignalGood },
  { label: "Cognitive load: Low",        fillPct: "23.7%", icon: icBrainLow   },
];

const pbbMetrics = [
  { label: "Speed: Slow (30–75S)",                          fillPct: "29.7%", icon: icSpeedSlow },
  { label: "Reliability: Variable (Wifi)",                  fillPct: "52.8%", icon: icSignalBad },
  { label: "Cognitive load: High (Multi Step / App Switch)", fillPct: "92.4%", icon: icQuestion  },
];

const insights = [
  {
    icon: icConnectivity,
    title: "Connectivity issue",
    body: "Venue basements often have poor signal, killing the QR flow for both customers and staff.",
  },
  {
    icon: icFriction,
    title: "Adds friction & slowness",
    body: "Waitstaff prioritise rapid table turnover — PBB slows them down during peak hours.",
  },
  {
    icon: icRefund,
    title: "Refund limitations",
    body: "Merchants worried about complex refund processes on terminals.",
  },
  {
    icon: icComms,
    title: "Communication gap",
    body: "Launch emails only went to business owners. Staff operating the terminals were left in the dark about PBB's benefits.",
  },
];

// ── MetricRow sub-component ───────────────────────────────────────────────────
function MetricRow({
  label,
  fillPct,
  fillColor,
  icon,
}: {
  label: string;
  fillPct: string;
  fillColor: string;
  icon: string;
}) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: "20px 14px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: 18,
          fontWeight: 500,
          color: "#1a1a1a",
          margin: 0,
        }}
      >
        {label}
      </p>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <div
          style={{
            flex: 1,
            background: "#d9d9d9",
            borderRadius: 100,
            height: 18,
          }}
        >
          <div
            style={{
              width: fillPct,
              background: fillColor,
              borderRadius: 100,
              height: "100%",
            }}
          />
        </div>
        <img src={icon} alt="" style={{ width: 24, height: 24, flexShrink: 0 }} />
      </div>
    </div>
  );
}

export default function KodyPBB() {
  return (
    <>
      <style>{`
        /* ── Hero grid ── */
        .kody-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          margin-bottom: 80px;
        }
        @media (max-width: 900px) {
          .kody-hero-grid { grid-template-columns: 1fr; gap: 40px; margin-bottom: 48px; }
        }

        /* ── Generic 2-col (cards, etc.) ── */
        .kody-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 768px) {
          .kody-two-col { grid-template-columns: 1fr; }
        }

        /* ── Image pairs: equal height via fixed aspect-ratio + object-fit: cover ── */
        .kody-img-pair {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          /* Slightly break out of padding for a wider, more immersive look */
          margin-left: -20px;
          margin-right: -20px;
        }
        .kody-img-pair > * {
          /* Fixed aspect-ratio guarantees equal height across both cells */
          aspect-ratio: 16 / 10;
          overflow: hidden;
          border-radius: 14px;
        }
        .kody-img-pair img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 0;
        }
        @media (max-width: 768px) {
          .kody-img-pair {
            grid-template-columns: 1fr;
            margin-left: 0;
            margin-right: 0;
          }
          .kody-img-pair > * {
            aspect-ratio: auto;
          }
          .kody-img-pair img {
            height: auto;
            object-fit: initial;
          }
        }

        /* ── Cohort grid ── */
        .kody-cohort-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .kody-cohort-grid { grid-template-columns: 1fr; }
        }

        /* ── Comparison card grid ── */
        .kody-compare-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 56px;
        }
        @media (max-width: 768px) {
          .kody-compare-grid { grid-template-columns: 1fr; }
        }

        /* ── Insight rows ── */
        .kody-insight-row {
          display: flex;
          gap: 24px;
          align-items: center;
        }
        .kody-insight-icon-tile {
          flex-shrink: 0;
          width: 180px;
          background: #ededed;
          border-radius: 20px;
          padding: 20px 10px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
          box-shadow: 8px 8px 10px 0px rgba(196,196,196,0.12);
        }
        @media (max-width: 640px) {
          .kody-insight-row { flex-direction: column; align-items: flex-start; }
          .kody-insight-icon-tile { width: 100%; }
          .kody-content-width { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>

      <Navbar />

      {/* ── HERO ── */}
      <section style={{ background: "#F5F1EB", paddingTop: 120 }}>
        <div style={contentWidth} className="kody-content-width">
          <span style={labelStyle}>Kody · 2025 · B2B2C · Open Banking</span>

          <div className="kody-hero-grid">
            <div>
              <h1
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(36px, 5vw, 66px)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: "#1a1a1a",
                  margin: "0 0 24px",
                }}
              >
                Choosing the Right Channel to Grow Pay by Bank
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(15px, 1.5vw, 18px)",
                  lineHeight: 1.55,
                  color: "rgba(26,26,26,0.55)",
                  margin: 0,
                }}
              >
                How pivoting Pay by Bank from POS terminals to payment links
                increased adoption by 120%
              </p>
            </div>
            <div>
              <img
                src="https://framerusercontent.com/images/agmFcSz8ZXRDwPq7Qj5yE69XCgY.png"
                alt="Kody Pay by Bank hero"
                style={{ width: "100%", display: "block", borderRadius: 14 }}
              />
            </div>
          </div>
        </div>

        {/* Full-width product image */}
        <div style={{ background: "#fff", width: "100%" }}>
          <img
            src="https://framerusercontent.com/images/714NknxAgrUaGhDpBlnLX0MXEo0.png"
            alt="Kody product overview"
            style={{ width: "100%", display: "block" }}
          />
        </div>

        {/* Intro paragraphs */}
        <div style={contentWidth} className="kody-content-width">
          <div style={{ paddingTop: 80, paddingBottom: sectionGap }}>
            <p style={{ ...bodyStyle, marginBottom: 16 }}>
              I led the redesign and adoption strategy for Kody's Pay by Bank
              (PBB) experience, an Open Banking payment method initially launched
              on in-person terminals.
            </p>
            <p style={{ ...bodyStyle, marginBottom: 16 }}>
              I reframed the problem, defined a persona aligned to a business
              needs and prioritised a new growth channel. The result was a ~120%
              usage uplift within a month, alongside increased payment-method
              share in eligible flows.
            </p>
            <p style={bodyStyle}>
              Starting from a request to add more banks to the terminal grid, I
              created lightweight prototypes to compare solution routes and
              conducted 10+ merchant and staff interviews to diagnose adoption
              blockers—channel fit.
            </p>
          </div>
        </div>
      </section>

      {/* ── A cold start with a clear target ── */}
      <section style={{ background: "#F5F1EB", paddingBottom: sectionGap }}>
        <div style={contentWidth} className="kody-content-width">
          {divider}
          <h2 style={h2Style}>A cold start with a clear target</h2>

          <p style={{ ...bodyStyle, marginBottom: 16, maxWidth: 680 }}>
            Pay by Bank (PBB) is Kody's Open Banking payment method. It launched
            on in-person terminals, prompting customers to scan a QR code and pay
            in their bank app on their mobile device (typically for transactions
            above £40).
          </p>
          <p style={{ ...bodyStyle, marginBottom: 16, maxWidth: 680 }}>
            However, after the first version launched in one and a half months,
            the numbers were flat. Adoption was low, and the data volume was too
            small to tell us why.
          </p>
          <p style={{ ...bodyStyle, marginBottom: 40, maxWidth: 680 }}>
            I collaborated with PM to clarify the ultimate goal of this project
            to tackle this 'cold start'.
          </p>

          <div className="kody-two-col" style={{ marginBottom: 64 }}>
            {/* Business requests */}
            <div
              style={{
                background: "rgba(255,255,255,0.55)",
                backdropFilter: "blur(20px)",
                borderRadius: 16,
                padding: "32px 36px",
                border: "1px solid rgba(255,255,255,0.7)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(26,26,26,0.4)",
                  display: "block",
                  marginBottom: 20,
                }}
              >
                Business requests
              </span>
              {[
                "Add 64 more banks into this payment method.",
                "Achieve a 30% increase in adoption rate in this iteration.",
              ].map((item, i) => (
                <div
                  key={i}
                  style={{ display: "flex", gap: 14, marginBottom: i === 1 ? 0 : 14, alignItems: "flex-start" }}
                >
                  <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 12, fontWeight: 500, color: "#E8561A", minWidth: 20, lineHeight: 1.6 }}>
                    {i + 1}.
                  </span>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.6, color: "#1a1a1a", margin: 0 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Constraints */}
            <div
              style={{
                background: "rgba(255,255,255,0.55)",
                backdropFilter: "blur(20px)",
                borderRadius: 16,
                padding: "32px 36px",
                border: "1px solid rgba(255,255,255,0.7)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(26,26,26,0.4)",
                  display: "block",
                  marginBottom: 20,
                }}
              >
                Constraints
              </span>
              {[
                "Terminal is a core tool that values speed and stability, which are the main requirements in an offline payment scenario.",
                "£40+ transaction threshold (cost/business constraint).",
                "Team resources are limited, requiring swift directional decisions.",
              ].map((item, i) => (
                <div
                  key={i}
                  style={{ display: "flex", gap: 14, marginBottom: i === 2 ? 0 : 14, alignItems: "flex-start" }}
                >
                  <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 12, fontWeight: 500, color: "rgba(26,26,26,0.35)", minWidth: 20, lineHeight: 1.6 }}>
                    {i + 1}.
                  </span>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.6, color: "#1a1a1a", margin: 0 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <img
            src="https://framerusercontent.com/images/5aMC2gmDgu05Wq9fPVcuyqKqI.png"
            alt="Cold start diagram"
            style={imgStyle}
          />
        </div>
      </section>

      {/* ── Learn why adoption stalled ── */}
      <section style={{ background: "#F5F1EB", paddingBottom: sectionGap }}>
        <div style={contentWidth} className="kody-content-width">
          {divider}
          <h2 style={h2Style}>Learn why adoption stalled</h2>

          <p style={{ ...bodyStyle, marginBottom: 16, maxWidth: 680 }}>
            With limited usage data and high implementation cost, shipping changes
            would have been largely guesswork. Instead, I ran 10+ rapid
            qualitative interviews with merchants and frontline staff to identify
            the real adoption blockers before investing in a build.
          </p>
          <p style={{ ...bodyStyle, marginBottom: 48, maxWidth: 680 }}>
            To capture a broader range of perspectives, I grouped participants
            into key cohorts before the interviews (recent users, churned users,
            high-value cases, negative feedback, and internal account managers).
          </p>

          {/* Cohort pills (left) + image (right) */}
          <div className="kody-cohort-grid">
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {cohorts.map(({ name, count }) => (
                <div
                  key={name}
                  style={{
                    background: "rgba(255,255,255,0.72)",
                    borderRadius: 100,
                    padding: "16px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "1px solid rgba(255,255,255,0.8)",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "#1a1a1a", lineHeight: 1.4 }}>
                    {name}
                  </span>
                  <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, fontWeight: 500, color: "rgba(26,26,26,0.35)", marginLeft: 16, flexShrink: 0 }}>
                    × {count}
                  </span>
                </div>
              ))}
            </div>
            <img
              src="https://framerusercontent.com/images/JK7qVKiapNC1LUHAch8nCMaZc8.png"
              alt="Research insights"
              style={imgStyle}
            />
          </div>
        </div>
      </section>

      {/* ── Why would I ever… ── */}
      <section style={{ background: "#F5F1EB", paddingBottom: sectionGap }}>
        <div style={contentWidth} className="kody-content-width">
          {divider}

          <h2 style={h2Style}>Why would I ever…</h2>
          <p style={{ ...bodyStyle, marginBottom: 32, maxWidth: 680 }}>
            During the interview, there is a most frequent challenge from
            merchants and customers, which is
          </p>

          <div style={{ ...blockquoteStyle, marginBottom: 32 }}>
            <p style={blockquoteTextStyle}>
              "Why would I ever do this instead of just tapping my card?"
            </p>
          </div>

          <p style={{ ...bodyStyle, marginBottom: 56, maxWidth: 680 }}>
            In a high-pressure hospitality environment, speed is currency. PBB
            added friction and was hard to explain to customers.
          </p>

          {/* ── Comparison cards — redesigned from Figma ── */}
          <div className="kody-compare-grid">
            {/* CARD */}
            <div
              style={{
                background: "rgba(255,255,255,0.52)",
                borderRadius: 12,
                padding: "22px 30px",
                display: "flex",
                flexDirection: "column",
                gap: 23,
              }}
            >
              {/* Header */}
              <div style={{ display: "flex", gap: 20, alignItems: "center", padding: "0 14px" }}>
                <img src={icCardIcon} alt="Card" style={{ width: 44, height: 35, flexShrink: 0 }} />
                <div>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 20, fontWeight: 500, color: "#1a1a1a", margin: 0, lineHeight: 1.2 }}>
                    CARD
                  </p>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 16, fontWeight: 500, color: "#1a1a1a", margin: 0, lineHeight: 1.4 }}>
                    (Tap/Insert)
                  </p>
                </div>
              </div>
              {/* Metrics */}
              {cardMetrics.map((m) => (
                <MetricRow key={m.label} {...m} fillColor="#1566d1" />
              ))}
            </div>

            {/* PBB TERMINAL */}
            <div
              style={{
                background: "rgba(255,255,255,0.52)",
                borderRadius: 12,
                padding: "22px 30px",
                display: "flex",
                flexDirection: "column",
                gap: 23,
              }}
            >
              {/* Header */}
              <div style={{ display: "flex", gap: 20, alignItems: "center", padding: "0 14px" }}>
                <img src={icBankIcon} alt="Bank" style={{ width: 44, height: 35, flexShrink: 0 }} />
                <div>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 20, fontWeight: 500, margin: 0, lineHeight: 1.2 }}>
                    <span style={{ color: "#1a1a1a" }}>PBB </span>
                    <span style={{ color: "#ff0303" }}>TERMINAL</span>
                  </p>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 16, fontWeight: 500, color: "#1a1a1a", margin: 0, lineHeight: 1.4 }}>
                    (Scan QR)
                  </p>
                </div>
              </div>
              {/* Metrics */}
              {pbbMetrics.map((m) => (
                <MetricRow key={m.label} {...m} fillColor="#686868" />
              ))}
            </div>
          </div>

          {/* ── 4 Insight rows — redesigned from Figma ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32, marginBottom: 56 }}>
            {insights.map(({ icon, title, body }) => (
              <div key={title} className="kody-insight-row">
                <div className="kody-insight-icon-tile">
                  <img src={icon} alt={title} style={{ width: 55, height: 55, objectFit: "contain" }} />
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: 16,
                      fontWeight: 500,
                      color: "#1a1a1a",
                      margin: 0,
                      textAlign: "center",
                      lineHeight: 1.3,
                    }}
                  >
                    {title}
                  </p>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: 18,
                    fontWeight: 500,
                    lineHeight: 1.6,
                    color: "#1a1a1a",
                    margin: 0,
                  }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div
            style={{
              background: "rgba(232,86,26,0.06)",
              border: "1px solid rgba(232,86,26,0.15)",
              borderRadius: 14,
              padding: "28px 36px",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.7, color: "#1a1a1a", margin: 0 }}>
              Despite adding more banks, terminal PBB adoption would likely
              remain low because the terminal checkout context prioritises speed,
              reliability, and refund expectations.
            </p>
          </div>
        </div>
      </section>

      {/* ── Where Pay by Bank can actually win ── */}
      <section style={{ background: "#F5F1EB", paddingBottom: sectionGap }}>
        <div style={contentWidth} className="kody-content-width">
          {divider}
          <h2 style={h2Style}>Where Pay by Bank can actually win</h2>

          <p style={{ ...bodyStyle, marginBottom: 40, maxWidth: 680 }}>
            After all the insights, I joined a deep-dive with the CTO, Head of PD
            and Tech Lead alongside the PM to align my findings and bring out my
            Opportunity hypothesis.
          </p>

          <div style={{ ...blockquoteStyle, marginBottom: 56 }}>
            <p style={blockquoteTextStyle}>
              "PBB is better suited to low-urgency, off-premise payment moments
              (e.g., prepayments, remote orders, booking deposits), where
              transactions are more likely to meet the £40+ threshold"
            </p>
          </div>

          {/* Proto-persona criteria — full width */}
          <div
            style={{
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(20px)",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.7)",
              padding: "32px 36px",
              marginBottom: 48,
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(26,26,26,0.4)",
                display: "block",
                marginBottom: 20,
              }}
            >
              Proto-persona criteria
            </span>
            {[
              "Low-urgency payment moments (not queue-based)",
              "Typical AOV above £40 (aligned with the business constraint)",
              "Serving repeat local customers (a supporting signal)",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#E8561A", marginTop: 8, flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.6, color: "#1a1a1a" }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Two images — equal height */}
          <div className="kody-img-pair" style={{ marginBottom: 48 }}>
            <div style={{ aspectRatio: "16/10", overflow: "hidden", borderRadius: 14 }}>
              <img
                src="https://framerusercontent.com/images/7gXg1nyte7NdyXrrf9aB42DADMQ.png"
                alt="Opportunity mapping"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <div style={{ aspectRatio: "16/10", overflow: "hidden", borderRadius: 14 }}>
              <img
                src="https://framerusercontent.com/images/sgFcfXgW4r37771dfWaPzXca34M.png"
                alt="Channel hypothesis"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(20px)",
              borderRadius: 14,
              padding: "24px 32px",
              marginBottom: 48,
              border: "1px solid rgba(255,255,255,0.7)",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.7, color: "#1a1a1a", margin: 0 }}>
              We shifted the centre of gravity from 'expanding banks on terminal'
              to 'making Pay by Bank succeed in Pay by Link'. Terminal expansion
              was de-scoped into a secondary track.
            </p>
          </div>

          <img
            src="https://framerusercontent.com/images/rTz4f1yx1NJimy0gBMviF8JUZU.png"
            alt="Strategic pivot diagram"
            style={imgStyle}
          />
        </div>
      </section>

      {/* ── Turning the pivot into a working flow ── */}
      <section style={{ background: "#F5F1EB", paddingBottom: sectionGap }}>
        <div style={contentWidth} className="kody-content-width">
          {divider}
          <h2 style={h2Style}>Turning the pivot into a working flow</h2>

          {/* ── 01 ── */}
          <div style={{ marginBottom: 80 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 500, color: "#E8561A", background: "rgba(232,86,26,0.1)", borderRadius: 100, padding: "4px 14px" }}>
                01
              </span>
              <h3 style={{ ...h3Style, margin: 0 }}>Pay by Link as the primary growth channel</h3>
            </div>

            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, fontWeight: 500, letterSpacing: "0.04em", color: "rgba(26,26,26,0.55)", margin: "0 0 12px" }}>
              Rapid ideation with implementation realism (AI-assisted)
            </p>
            <p style={{ ...bodyStyle, marginBottom: 32, maxWidth: 680 }}>
              To stay implementation-realistic and move quickly, I started from the
              existing Pay by Link checkout HTML and ran it locally to prototype and
              test alternative flows before committing to a full build.
            </p>

            <div className="kody-img-pair" style={{ marginBottom: 56 }}>
              <div style={{ aspectRatio: "16/10", overflow: "hidden", borderRadius: 14 }}><img src="https://framerusercontent.com/images/BS5EVmKQGbHsqbC5HHrzCZzxrE.png" alt="Ideation sketch 1" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /></div>
              <div style={{ aspectRatio: "16/10", overflow: "hidden", borderRadius: 14 }}><img src="https://framerusercontent.com/images/Et7DG6dmP5MoCVfCyknLxML05s.png" alt="Ideation sketch 2" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /></div>
            </div>

            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, fontWeight: 500, letterSpacing: "0.04em", color: "rgba(26,26,26,0.55)", margin: "0 0 16px" }}>
              The new flow we built around
            </p>
            <div style={{ background: "rgba(255,255,255,0.55)", backdropFilter: "blur(20px)", borderRadius: 14, border: "1px solid rgba(255,255,255,0.7)", padding: "24px 32px", marginBottom: 56, width: "100%", boxSizing: "border-box" }}>
              {[
                "Merchants create and share a payment link in Kody Universe (KU)",
                "Customers choose their bank in a web flow",
                "Clear messaging explains the benefits",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 14, marginBottom: i === 2 ? 0 : 14, alignItems: "flex-start" }}>
                  <span style={{ width: 22, height: 22, borderRadius: "50%", background: "#E8561A", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-dm-sans)", fontSize: 11, fontWeight: 600, color: "#fff", flexShrink: 0, marginTop: 2 }}>
                    {i + 1}
                  </span>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.6, color: "#1a1a1a", margin: 0 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Step 1 */}
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 500, color: "rgba(26,26,26,0.45)", margin: "0 0 8px", letterSpacing: "0.04em" }}>
              Step 1 — Merchant creates a payment link
            </p>
            <img src="https://framerusercontent.com/images/nYacGZfxhWTg7h6Zxn91Sa9yVs.png" alt="Step 1" style={{ ...imgStyle, marginBottom: 16 }} />
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 56 }}>
              {["Highlight fee savings", "Auto-deselect when below £40", "Easy promotion"].map((pt) => (
                <span key={pt} style={{ fontFamily: "var(--font-dm-sans)", fontSize: 12, fontWeight: 500, color: "rgba(26,26,26,0.55)", background: "rgba(255,255,255,0.7)", border: "1px solid rgba(26,26,26,0.08)", padding: "5px 14px", borderRadius: 100 }}>
                  {pt}
                </span>
              ))}
            </div>

            {/* Step 2 */}
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 500, color: "rgba(26,26,26,0.45)", margin: "0 0 8px", letterSpacing: "0.04em" }}>
              Step 2 — Customer selects bank in web flow
            </p>
            <img src="https://framerusercontent.com/images/whNYLOXC4li3FI5eJLLQyoAuWM.png" alt="Step 2" style={{ ...imgStyle, marginBottom: 16 }} />
            <div style={{ display: "flex", gap: 10, marginBottom: 56 }}>
              {["First-time customer", "Returning customer"].map((l) => (
                <span key={l} style={{ fontFamily: "var(--font-dm-sans)", fontSize: 12, fontWeight: 500, color: "rgba(26,26,26,0.55)", background: "rgba(255,255,255,0.7)", border: "1px solid rgba(26,26,26,0.08)", padding: "5px 14px", borderRadius: 100 }}>
                  {l}
                </span>
              ))}
            </div>

            {/* Step 3 */}
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 500, color: "rgba(26,26,26,0.45)", margin: "0 0 8px", letterSpacing: "0.04em" }}>
              Step 3 — Confirmation, status tracking, refund
            </p>
            <div className="kody-img-pair" style={{ marginBottom: 16 }}>
              <div style={{ aspectRatio: "16/10", overflow: "hidden", borderRadius: 14 }}><img src="https://framerusercontent.com/images/HaID7GQMFLULzJYz9ifNAZ4E8Q.png" alt="Step 3a" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /></div>
              <div style={{ aspectRatio: "16/10", overflow: "hidden", borderRadius: 14 }}><img src="https://framerusercontent.com/images/pGtHy5aANfKGxUofzWEAxYTxnjU.png" alt="Step 3b" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /></div>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {["For Customer (Text message)", "For Merchant (Email notification)", "Transaction details (KU)"].map((l) => (
                <span key={l} style={{ fontFamily: "var(--font-dm-sans)", fontSize: 12, fontWeight: 500, color: "rgba(26,26,26,0.55)", background: "rgba(255,255,255,0.7)", border: "1px solid rgba(26,26,26,0.08)", padding: "5px 14px", borderRadius: 100 }}>
                  {l}
                </span>
              ))}
            </div>
          </div>

          {/* ── 02 ── */}
          <div style={{ marginBottom: 80 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 500, color: "#E8561A", background: "rgba(232,86,26,0.1)", borderRadius: 100, padding: "4px 14px" }}>
                02
              </span>
              <h3 style={{ ...h3Style, margin: 0 }}>Deprioritise PBB on terminal</h3>
            </div>
            <div className="kody-img-pair">
              <div style={{ aspectRatio: "16/10", overflow: "hidden", borderRadius: 14 }}><img src="https://framerusercontent.com/images/AjiFjVr3HzqEmS2dldPxhLVhrKo.png" alt="Deprioritise terminal 1" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /></div>
              <div style={{ aspectRatio: "16/10", overflow: "hidden", borderRadius: 14 }}><img src="https://framerusercontent.com/images/vf9c9yJwOxpnBsVMv2U5yUjW4Q.png" alt="Deprioritise terminal 2" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /></div>
            </div>
          </div>

          {/* ── 03 ── */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 500, color: "#E8561A", background: "rgba(232,86,26,0.1)", borderRadius: 100, padding: "4px 14px" }}>
                03
              </span>
              <h3 style={{ ...h3Style, margin: 0 }}>Drive adoption with clear value messaging</h3>
            </div>
            <div className="kody-img-pair">
              <div style={{ aspectRatio: "16/10", overflow: "hidden", borderRadius: 14 }}><img src="https://framerusercontent.com/images/G52BM5ezBDUY8owh6LRgiL2tE.png" alt="Value messaging 1" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /></div>
              <div style={{ aspectRatio: "16/10", overflow: "hidden", borderRadius: 14 }}><img src="https://framerusercontent.com/images/Hbx2hd865yYm0hksNwIDCm5HVfo.png" alt="Value messaging 2" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Results ── */}
      <section style={{ background: "#F5F1EB", paddingBottom: sectionGap }}>
        <div style={contentWidth} className="kody-content-width">
          {divider}
          <span style={labelStyle}>Results</span>
          <h2 style={h2Style}>Within one month of shifting focus to Pay by Link</h2>

          <div className="kody-two-col" style={{ marginBottom: 64 }}>
            <div style={{ background: "rgba(255,255,255,0.55)", backdropFilter: "blur(20px)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.7)", padding: "36px 40px" }}>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 700, color: "#E8561A", margin: "0 0 8px", lineHeight: 1 }}>
                120%
              </p>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, color: "rgba(26,26,26,0.65)", margin: 0, lineHeight: 1.5 }}>
                relative uplift in PBB usage volume
              </p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.55)", backdropFilter: "blur(20px)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.7)", padding: "36px 40px", display: "flex", alignItems: "center" }}>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 17, lineHeight: 1.6, color: "#1a1a1a", margin: 0 }}>
                Increased share of wallet for PBB in eligible transactions
              </p>
            </div>
          </div>

          <img
            src="https://framerusercontent.com/images/Tpv41Z1ZkIuNRsAcANHsoVy4Gpc.png"
            alt="Results chart"
            style={imgStyle}
          />
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        style={{
          background: "#F5F1EB",
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
