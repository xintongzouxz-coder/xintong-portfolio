import Navbar from "@/components/Navbar";
import TableOfContents from "@/components/TableOfContents";
import StrategicPivotDiagram from "@/components/StrategicPivotDiagram";

// ── Icon assets (local, in /public/icons/kody-pbb/) ──────────────────────────
const icCardIcon   = "/icons/kody-pbb/ic-card.svg";
const icSpeedFast  = "/icons/kody-pbb/ic-speed-fast.svg";
const icSignalGood = "/icons/kody-pbb/ic-signal-good.svg";
const icBrainLow   = "/icons/kody-pbb/ic-brain-low.svg";
const icBankIcon   = "/icons/kody-pbb/ic-bank.svg";
const icSpeedSlow  = "/icons/kody-pbb/ic-speed-slow.svg";
const icSignalBad  = "/icons/kody-pbb/ic-signal-bad.svg";
const icQuestion   = "/icons/kody-pbb/ic-question.svg";

const icConnectivity = "/icons/kody-pbb/ic-connectivity.svg";
const icFriction     = "/icons/kody-pbb/ic-friction.svg";
const icRefund       = "/icons/kody-pbb/ic-refund.svg";
const icComms        = "/icons/kody-pbb/ic-comms.svg";

// ── Shared styles ─────────────────────────────────────────────────────────────

// Used for overview section content
const overviewWidth: React.CSSProperties = {
  padding: "0 124px",
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
  maxWidth: 840,
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
  color: "#3445ff",
  marginBottom: 14,
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


// ── MetricRow ─────────────────────────────────────────────────────────────────
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
        borderRadius: 7,
        padding: "12px 8px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: 16,
          fontWeight: 500,
          color: "#1a1a1a",
          margin: 0,
        }}
      >
        {label}
      </p>
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        <div
          style={{
            flex: 1,
            background: "#d9d9d9",
            borderRadius: 100,
            height: 11,
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
        <img src={icon} alt="" style={{ width: 14, height: 14, flexShrink: 0 }} />
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

        /* ── Generic 2-col ── */
        .kody-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        @media (max-width: 768px) {
          .kody-two-col { grid-template-columns: 1fr; }
        }

        /* ── Image pairs ── */
        .kody-img-pair {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .kody-img-pair > * {
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
          .kody-img-pair { grid-template-columns: 1fr; }
          .kody-img-pair > * { aspect-ratio: auto; }
          .kody-img-pair img { height: auto; object-fit: initial; }
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
          gap: 12px;
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
          width: 140px;
          border-radius: 12px;
          padding: 16px 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: center;
        }

        /* ── Sidebar + content layout ── */
        .kody-with-sidebar {
          display: flex;
          align-items: flex-start;
          gap: 40px;
          padding: 0 124px 0 100px;
          box-sizing: border-box;
          width: 100%;
        }
        .kody-sidebar-col {
          width: 274px;
          flex-shrink: 0;
          position: sticky;
          top: 72px;
          padding: 32px;
          box-sizing: border-box;
        }
        .kody-content-col {
          flex: 1;
          min-width: 0;
        }

        /* ── Overview content width ── */
        .kody-overview-width {
          padding-left: 124px;
          padding-right: 124px;
        }

        /* ── Mobile ── */
        @media (max-width: 900px) {
          .kody-with-sidebar { flex-direction: column; padding: 0 24px; justify-content: flex-start; }
          .kody-sidebar-col { display: none; }
          .kody-content-col { width: 100%; max-width: none; }
          .kody-overview-width { padding-left: 24px; padding-right: 24px; }
          .kody-insight-row { flex-direction: column; align-items: flex-start; }
          .kody-insight-icon-tile { width: 100%; }
        }

        /* ── Horizontal scroll containers ── */
        .kody-scroll-x { overflow-x: auto; }
        .kody-scroll-x::-webkit-scrollbar { height: 4px; }
        .kody-scroll-x::-webkit-scrollbar-track { background: transparent; }
        .kody-scroll-x::-webkit-scrollbar-thumb { background: #A2A2A2; border-radius: 2px; }
      `}</style>

      <Navbar />

      {/* ── OVERVIEW ─────────────────────────────────────────────────────────── */}
      <section id="overview" style={{ background: "#fafafa", paddingTop: 120 }}>
        <div style={overviewWidth} className="kody-overview-width">
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
        <div style={overviewWidth} className="kody-overview-width">
          <div style={{ paddingTop: 80, paddingBottom: sectionGap }}>
            <p style={{ ...bodyStyle, marginBottom: 16, maxWidth: "none" }}>
              I led the redesign and adoption strategy for Kody's Pay by Bank
              (PBB) experience, an Open Banking payment method initially launched
              on in-person terminals.
            </p>
            <p style={{ ...bodyStyle, marginBottom: 16, maxWidth: "none" }}>
              I reframed the problem, defined a persona aligned to a business
              needs and prioritised a new growth channel. The result was a ~120%
              usage uplift within a month, alongside increased payment-method
              share in eligible flows.
            </p>
            <p style={{ ...bodyStyle, maxWidth: "none" }}>
              Starting from a request to add more banks to the terminal grid, I
              created lightweight prototypes to compare solution routes and
              conducted 10+ merchant and staff interviews to diagnose adoption
              blockers—channel fit.
            </p>
          </div>
        </div>
      </section>

      {/* ── SIDEBAR + CONTENT LAYOUT ─────────────────────────────────────────── */}
      <div className="kody-with-sidebar">

        {/* Sticky TOC sidebar */}
        <div className="kody-sidebar-col">
          <TableOfContents />
        </div>

        {/* Content column */}
        <div className="kody-content-col">

          {/* ── BUSINESS GOAL ─────────────────────────────────────────────── */}
          <section id="business-goal" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>A cold start with a clear target</h2>

            <p style={{ ...bodyStyle, marginBottom: 16, maxWidth: 840 }}>
              Pay by Bank (PBB) is Kody's Open Banking payment method. It launched
              on in-person terminals, prompting customers to scan a QR code and pay
              in their bank app on their mobile device (typically for transactions
              above £40).
            </p>
            <p style={{ ...bodyStyle, marginBottom: 16, maxWidth: 840 }}>
              I collaborated with PM to clarify the ultimate goal of this project
              to tackle this 'cold start'.
            </p>
            <p style={{ ...bodyStyle, marginBottom: 40, maxWidth: 840 }}>
              However, after the first version launched in one and a half months,
              the numbers were flat. Adoption was low, and the data volume was too
              small to tell us why.
            </p>

            <div className="kody-two-col" style={{ marginBottom: 64 }}>
              {/* Business requests */}
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: 16,
                  padding: "32px 36px",
                  border: "1px solid rgba(180,180,180,0.6)",
                  boxShadow: "20px 20px 20px rgba(212,212,212,0.25)",
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
                  { bold: "Add 64 more banks options", rest: " into this payment method." },
                  { bold: "Achieve a 30% increase in adoption rate", rest: " in this iteration." },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", gap: 14, marginBottom: i === 1 ? 0 : 14, alignItems: "flex-start" }}
                  >
                    <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 12, fontWeight: 500, color: "#3445ff", minWidth: 20, lineHeight: 1.6 }}>
                      {i + 1}.
                    </span>
                    <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.6, color: "#1a1a1a", margin: 0 }}>
                      <strong style={{ fontWeight: 700 }}>{item.bold}</strong>{item.rest}
                    </p>
                  </div>
                ))}
              </div>

              {/* Constraints */}
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: 16,
                  padding: "32px 36px",
                  border: "1px solid rgba(180,180,180,0.6)",
                  boxShadow: "20px 20px 20px rgba(212,212,212,0.25)",
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
          </section>

          {/* ── RESEARCH ──────────────────────────────────────────────────────── */}
          <section id="research" style={{ background: "#fafafa" }}>

            {/* Interview sub-section */}
            <div id="research-interview" style={{ paddingBottom: sectionGap }}>
              {divider}
              <h2 style={h2Style}>Learn why adoption stalled</h2>

              <p style={{ ...bodyStyle, marginBottom: 16, maxWidth: 840 }}>
                With limited usage data and high implementation cost, shipping changes
                would have been largely guesswork. Instead, I ran 10+ rapid
                qualitative interviews with merchants and frontline staff to identify
                the real adoption blockers before investing in a build.
              </p>
              <p style={{ ...bodyStyle, marginBottom: 48, maxWidth: 840 }}>
                To capture a broader range of perspectives, I grouped participants
                into key cohorts before the interviews (recent users, churned users,
                high-value cases, negative feedback, and internal account managers).
              </p>

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

            {/* Insights sub-section */}
            <div id="research-insights" style={{ paddingBottom: sectionGap }}>
              {divider}
              <h2 style={h2Style}>Why would I ever…</h2>
              <p style={{ ...bodyStyle, marginBottom: 32, maxWidth: 840 }}>
                During the interview, there is a most frequent challenge from
                merchants and customers, which is
              </p>

              <div style={{ ...blockquoteStyle, marginBottom: 32 }}>
                <p style={blockquoteTextStyle}>
                  "Why would I ever do this instead of just tapping my card?"
                </p>
              </div>

              <p style={{ ...bodyStyle, marginBottom: 56, maxWidth: 840 }}>
                In a high-pressure hospitality environment, speed is currency. PBB
                added friction and was hard to explain to customers.
              </p>

              <div className="kody-compare-grid">
                {/* CARD */}
                <div
                  style={{
                    background: "rgba(255,255,255,0.52)",
                    borderRadius: 7,
                    padding: "13px 18px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                  }}
                >
                  <div style={{ display: "flex", gap: 12, alignItems: "center", padding: "0 8px" }}>
                    <img src={icCardIcon} alt="Card" style={{ width: 26, height: 21, flexShrink: 0 }} />
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 20, fontWeight: 500, color: "#1a1a1a", margin: 0, lineHeight: 1.2 }}>
                        CARD
                      </p>
                      <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 16, fontWeight: 500, color: "#1a1a1a", margin: 0, lineHeight: 1.4 }}>
                        (Tap/Insert)
                      </p>
                    </div>
                  </div>
                  {cardMetrics.map((m) => (
                    <MetricRow key={m.label} {...m} fillColor="#1566d1" />
                  ))}
                </div>

                {/* PBB TERMINAL */}
                <div
                  style={{
                    background: "rgba(255,255,255,0.52)",
                    borderRadius: 7,
                    padding: "13px 18px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                  }}
                >
                  <div style={{ display: "flex", gap: 12, alignItems: "center", padding: "0 8px" }}>
                    <img src={icBankIcon} alt="Bank" style={{ width: 26, height: 21, flexShrink: 0 }} />
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
                  {pbbMetrics.map((m) => (
                    <MetricRow key={m.label} {...m} fillColor="#686868" />
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 32, marginBottom: 56 }}>
                {insights.map(({ icon, title, body }) => (
                  <div key={title} className="kody-insight-row">
                    <div className="kody-insight-icon-tile">
                      <img src={icon} alt={title} style={{ width: 40, height: "auto" }} />
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
                        fontSize: 16,
                        fontWeight: 500,
                        lineHeight: 1.75,
                        color: "rgba(26,26,26,0.72)",
                        margin: 0,
                      }}
                    >
                      {body}
                    </p>
                  </div>
                ))}
              </div>

              <div
                style={{
                  background: "rgba(52,69,255,0.06)",
                  border: "1px solid rgba(52,69,255,0.15)",
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

          {/* ── PIVOT & ROADMAP ───────────────────────────────────────────────── */}
          <section id="pivot-roadmap" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>Where Pay by Bank can actually win</h2>

            <p style={{ ...bodyStyle, marginBottom: 40, maxWidth: 840 }}>
              After all the insights, I joined a deep-dive with the CTO, Head of PD
              and Tech Lead alongside the PM to align my findings and bring out my
              Opportunity hypothesis.
            </p>

            <div style={{ borderLeft: "3px solid #bb3546", paddingLeft: 27, marginBottom: 40 }}>
              <p style={{ ...blockquoteTextStyle, color: "#bb3546", fontSize: "clamp(18px, 2vw, 24px)" }}>
                "PBB is better suited to low-urgency, off-premise payment moments
                (e.g., prepayments, remote orders, booking deposits), where
                transactions are more likely to meet the £40+ threshold"
              </p>
            </div>

            <p style={{ ...bodyStyle, marginBottom: 28 }}>
              Based on this hypothesis, I drafted a few criteria to define a proto-persona for Pay by Bank:
            </p>

            <div
              style={{
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
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#3445ff", marginTop: 8, flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.6, color: "#1a1a1a" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 32, alignItems: "stretch", marginBottom: 40, height: 224 }}>
              <div style={{ flexShrink: 0, width: 466, borderRadius: 14, overflow: "hidden" }}>
                <img
                  src="https://framerusercontent.com/images/7gXg1nyte7NdyXrrf9aB42DADMQ.png"
                  alt="Opportunity mapping"
                  style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ flex: 1, minWidth: 0, borderRadius: 14, overflow: "hidden" }}>
                <img
                  src="https://framerusercontent.com/images/sgFcfXgW4r37771dfWaPzXca34M.png"
                  alt="Channel hypothesis"
                  style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            <p style={{ ...bodyStyle, marginBottom: 24 }}>
              To sanity-check the hypothesis, I partnered with our data team to run a lightweight segmentation check using "merchant category (KYC code) + typical AOV ≥ £40". From the resulting merchant list, we saw that Pay by Link appeared more frequently in higher-value, off-premise scenarios—supporting it as the primary channel to prioritise for PBB adoption.
            </p>
            <p style={{ ...bodyStyle, marginBottom: 48 }}>
              We shifted the centre of gravity from 'expanding banks on terminal' to 'making Pay by Bank succeed in Pay by Link'. Terminal expansion was de-scoped into a secondary track.
            </p>

            <StrategicPivotDiagram />
          </section>

          {/* ── SOLUTIONS ─────────────────────────────────────────────────────── */}
          <section id="solutions" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>Turning the pivot into a working flow</h2>

            {/* 01 */}
            <div id="solutions-integrate" style={{ marginBottom: 80 }}>

              {/* ── Section header + badge ── */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 16, fontWeight: 700, color: "#3445ff", background: "rgba(255,255,255,0.1)", borderRadius: 100, padding: "4px 14px" }}>
                    01
                  </span>
                  <h3 style={{ ...h3Style, margin: 0, color: "#3445ff" }}>Pay by Link as the primary growth channel</h3>
                </div>
                <div style={{ background: "#fff", display: "flex", alignItems: "center", gap: 8, padding: 12, borderRadius: 20, flexShrink: 0, boxShadow: "8px 8px 20px rgba(197,197,197,0.25)" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1566d1", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 14, color: "#1566d1", whiteSpace: "nowrap" }}>Integrate PBB into PBL</span>
                </div>
              </div>

              {/* ── Rapid ideation ── */}
              <div style={{ marginBottom: 32 }}>
                <ul style={{ paddingLeft: 24, margin: "0 0 24px" }}>
                  <li style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 16, color: "#1a1a1a", letterSpacing: "0.035em", lineHeight: 1.3 }}>
                    Rapid ideation with implementation realism (AI-assisted)
                  </li>
                </ul>
                <p style={{ ...bodyStyle, marginBottom: 16, maxWidth: 840 }}>
                  To stay implementation-realistic and move quickly, I started from the existing Pay by Link checkout HTML and ran it locally. Using Claude Code, I generated an initial Pay by Bank flow (eligibility ≥ £40, bank list, connecting state) directly on top of the current UI system.
                </p>
                <p style={{ ...bodyStyle, marginBottom: 16, maxWidth: 840 }}>
                  I then brought the potential flow into Figma (via MCP) to iterate on hierarchy, nudges, and bank selection patterns, producing a small set of variants for review.
                </p>
                <p style={{ ...bodyStyle, marginBottom: 32, maxWidth: 840 }}>
                  Once aligned, I mapped the final components back to the running HTML and reviewed feasibility and edge cases with PM and engineers.
                </p>
              </div>

              {/* Ideation sketches */}
              <div style={{ display: "flex", gap: 32, marginBottom: 56 }}>
                <div style={{ flex: 1, height: 270, borderRadius: 14, overflow: "hidden" }}>
                  <img src="/images/kody-solution/ideation-sketch-1.png" alt="Ideation sketch 1" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <div style={{ flex: 1, height: 270, borderRadius: 14, overflow: "hidden" }}>
                  <img src="/images/kody-solution/ideation-sketch-2.png" alt="Ideation sketch 2" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
              </div>

              {/* ── The new flow we built around ── */}
              <div style={{ marginBottom: 56 }}>
                <ul style={{ paddingLeft: 24, margin: "0 0 16px" }}>
                  <li style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 16, color: "#1a1a1a", letterSpacing: "0.035em" }}>
                    The new flow we built around
                  </li>
                </ul>
                <p style={{ ...bodyStyle, marginBottom: 4 }}>
                  We prioritised Pay by Link as the primary channel for PBB, designed for low-urgency, higher-value payments
                </p>
                <ul style={{ paddingLeft: 24, margin: "0 0 24px" }}>
                  {[
                    "Merchants create and share a payment link in Kody Universe (KU).",
                    "Customers choose their bank in a web flow (popular banks, search, and recent banks).",
                    "Clear messaging explains the benefits and builds confidence.",
                  ].map((item) => (
                    <li key={item} style={{ ...bodyStyle, marginBottom: 4 }}>{item}</li>
                  ))}
                </ul>

                {/* 3-column flow diagram */}
                <div className="kody-scroll-x">
                  <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "center", minWidth: 999 }}>
                    {/* Timeline connector: ●———●———● */}
                    <svg width="706" height="20" viewBox="0 0 706 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                      <circle cx="10" cy="10" r="10" fill="#A2A2A2" fillOpacity="0.6" />
                      <path d="M20 10.158L339 9.84204" stroke="#A2A2A2" strokeOpacity="0.6" strokeWidth="2" />
                      <circle cx="349" cy="10" r="10" fill="#A2A2A2" fillOpacity="0.6" />
                      <line x1="358.999" y1="9.158" x2="685.999" y2="8.842" stroke="#A2A2A2" strokeOpacity="0.6" strokeWidth="2" />
                      <circle cx="696" cy="10" r="10" fill="#A2A2A2" fillOpacity="0.6" />
                    </svg>
                    <div style={{ display: "flex", justifyContent: "space-between", width: 999 }}>
                      {/* Merchant create */}
                      <div style={{ display: "flex", flexDirection: "column", gap: 40, alignItems: "center", width: 300 }}>
                        <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 14, color: "#000", lineHeight: 1.4, margin: 0, width: 298 }}>
                          Merchant create payment link on internal SaaS Platform
                        </p>
                        <div style={{ height: 160, width: 298, borderRadius: 10, overflow: "hidden", position: "relative" }}>
                          <img src="/images/kody-solution/create-link-picker.png" alt="Create payment link" style={{ position: "absolute", width: "99.95%", height: "402.36%", top: "-235.56%", left: 0, display: "block" }} />
                        </div>
                      </div>
                      {/* Customer open link */}
                      <div style={{ display: "flex", flexDirection: "column", gap: 40, alignItems: "center", width: 285 }}>
                        <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 14, color: "#000", lineHeight: 1.4, margin: 0, whiteSpace: "nowrap" }}>
                          Customer open payment link
                        </p>
                        <div style={{ height: 224, width: 244, position: "relative", flexShrink: 0 }}>
                          <img src="/images/kody-solution/customer-open-link.png" alt="Customer opens payment link" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                        </div>
                      </div>
                      {/* Merchant check payment details */}
                      <div style={{ display: "flex", flexDirection: "column", gap: 30, alignItems: "center" }}>
                        <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 14, color: "#070707", lineHeight: 1.4, margin: 0, width: 280 }}>
                          {`Merchant check payment  details on internal SaaS Platform`}
                        </p>
                        <div style={{ height: 224, width: 101, position: "relative", flexShrink: 0 }}>
                          <img src="/images/kody-solution/acq-txn-details.png" alt="Transaction details" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Step 1 ── */}
              <div style={{ marginBottom: 56 }}>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 16, color: "#1a1a1a", letterSpacing: "0.0325em", lineHeight: "19.5px", margin: "0 0 24px" }}>
                  Step 1 — Merchant creates a payment link
                </p>
                <div className="kody-scroll-x">
                  <div style={{ background: "#fff", height: 340, width: 780, borderRadius: 20, overflow: "hidden", position: "relative", flexShrink: 0 }}>
                    {/* Screenshot */}
                    <div style={{ position: "absolute", left: -18, top: 0, width: 563, height: 340, borderRadius: 10, overflow: "hidden" }}>
                      <img alt="" style={{ position: "absolute", height: "357.39%", left: 0, maxWidth: "none", top: "-208.06%", width: "99.95%", display: "block" }} src="/images/kody-solution/create-link-picker.png" />
                    </div>
                    {/* Annotation box — fee savings */}
                    <div style={{ position: "absolute", background: "rgba(243,210,210,0.3)", border: "1px solid #ff7e7e", height: 25, left: 297, top: 186, width: 76, borderRadius: 4 }} />
                    {/* Annotation box — £40 threshold */}
                    <div style={{ position: "absolute", background: "rgba(243,210,210,0.3)", border: "1px solid #ff7e7e", height: 18, left: 108, top: 202, width: 135, borderRadius: 4 }} />
                    {/* Connector lines — SVG dashed #FF7E7E 1.5px */}
                    <svg style={{ position: "absolute", inset: 0, width: 780, height: 340, pointerEvents: "none", overflow: "visible" }}>
                      {/* Callout 1: from box1 right-centre → right → up → right to callout */}
                      <path d="M373,199 L517,199 L517,84 L552,84" stroke="#FF7E7E" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                      {/* Callout 2: from box2 bottom-centre → down → right to callout */}
                      <path d="M213,220 L213,233 L559,233" stroke="#FF7E7E" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                    </svg>
                    {/* Callout text 1 */}
                    <p style={{ position: "absolute", fontFamily: "var(--font-dm-sans)", fontWeight: 400, lineHeight: "normal", left: 559, color: "#595959", fontSize: 14, top: 66, width: 211, margin: 0 }}>
                      Highlight fee savings to drive Pay by Bank adoption
                    </p>
                    {/* Callout text 2 */}
                    <p style={{ position: "absolute", fontFamily: "var(--font-dm-sans)", fontWeight: 400, lineHeight: "normal", left: 564, color: "#595959", fontSize: 14, top: 196, width: 201, margin: 0 }}>
                      Auto-deselect Pay by Bank when eligibility requirements aren&apos;t met (e.g., payment below £40)
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Step 2 ── */}
              <div id="solutions-step-2" style={{ marginBottom: 56 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 16, color: "#1a1a1a", letterSpacing: "0.0325em", lineHeight: "19.5px", margin: 0, whiteSpace: "nowrap" }}>
                    Step 2 — Customer selects bank in web flow
                  </p>
                  <div style={{ background: "#fff", display: "flex", alignItems: "center", gap: 8, padding: 12, borderRadius: 20, flexShrink: 0, boxShadow: "8px 8px 20px rgba(197,197,197,0.25)" }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1566d1", flexShrink: 0 }} />
                    <span style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 14, color: "#1566d1", whiteSpace: "nowrap" }}>Expand bank coverage</span>
                  </div>
                </div>
                <p style={{ ...bodyStyle, marginBottom: 24, maxWidth: 840 }}>
                  Customers open the link from SMS or email, choose Pay by Bank, and complete authorisation in their banking app.
                </p>
                <div className="kody-scroll-x">
                  <div style={{ height: 496, position: "relative", width: 935, flexShrink: 0 }}>
                    {/* Main bank flow image */}
                    <div style={{ position: "absolute", height: 495, left: 286, top: 0.82, width: 649, overflow: "hidden" }}>
                      <img alt="" style={{ position: "absolute", height: "100%", left: "-16.2%", maxWidth: "none", top: 0, width: "116.22%", display: "block" }} src="/images/kody-solution/step2-bank-flow.png" />
                    </div>
                    {/* First customer */}
                    <div style={{ position: "absolute", display: "flex", flexDirection: "column", gap: 8, alignItems: "center", left: 0, top: 45.82 }}>
                      <div style={{ background: "#ededed", display: "flex", alignItems: "center", justifyContent: "center", padding: "8px 20px", borderRadius: 8, width: 242 }}>
                        <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 16, color: "#595959", margin: 0, whiteSpace: "nowrap" }}>First customer</p>
                      </div>
                      <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 400, fontSize: 14, color: "#1a1a1a", width: 242, margin: 0, lineHeight: "normal" }}>
                        If the customer is new to PBB (or cookies are declined), prioritise Pay by Bank as the primary option to drive adoption.
                      </p>
                    </div>
                    {/* Return customer */}
                    <div style={{ position: "absolute", display: "flex", flexDirection: "column", gap: 8, alignItems: "center", left: 0, top: 322.82 }}>
                      <div style={{ background: "#ededed", display: "flex", alignItems: "center", justifyContent: "center", padding: "8px 20px", borderRadius: 8, width: 242 }}>
                        <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 16, color: "#595959", margin: 0, whiteSpace: "nowrap" }}>Return customer</p>
                      </div>
                      <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 400, fontSize: 14, color: "#1a1a1a", width: 242, margin: 0, lineHeight: "normal" }}>
                        Remember the previous bank selection to reduce steps for returning customers and improve adoption.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Step 3 ── */}
              <div>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 16, color: "#1a1a1a", letterSpacing: "0.0325em", lineHeight: "19.5px", margin: "0 0 24px" }}>
                  Step 3 — Confirmation, status tracking, refund
                </p>
                <p style={{ ...bodyStyle, marginBottom: 24, maxWidth: 840 }}>
                  Refunds are not automatic for Pay by Bank. We added a clear explanation on the transaction details page so merchants understand the refund model and can guide customers through the correct next step.
                </p>
                <div className="kody-scroll-x">
                  <div style={{ background: "#fff", height: 466, width: 791, borderRadius: 20, overflow: "hidden", position: "relative", flexShrink: 0 }}>
                    <div style={{ position: "absolute", height: 367, left: 144, top: 85, width: 246 }}>
                      <img alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} src="/images/kody-solution/step3-payment.png" />
                    </div>
                    <div style={{ position: "absolute", height: 63, left: 201, top: 63, width: 171, borderRadius: 10, overflow: "hidden" }}>
                      <img alt="" style={{ position: "absolute", height: "109.95%", left: 0, maxWidth: "none", top: "-0.21%", width: "135.09%", display: "block" }} src="/images/kody-solution/step3-frame1.png" />
                    </div>
                    <div style={{ position: "absolute", height: 373, left: 443, top: 63, width: 238, overflow: "hidden" }}>
                      <img alt="" style={{ position: "absolute", height: "100%", left: "-165.59%", maxWidth: "none", top: 0, width: "265.62%", display: "block" }} src="/images/kody-solution/step3-frame2.png" />
                    </div>
                    <div style={{ position: "absolute", background: "#707070", display: "flex", alignItems: "center", justifyContent: "center", left: 443, padding: "8px 20px", borderRadius: 8, top: 14, width: 242 }}>
                      <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 16, color: "#fff", margin: 0, whiteSpace: "nowrap" }}>For Merchant</p>
                    </div>
                    <p style={{ position: "absolute", fontFamily: "var(--font-dm-sans)", fontWeight: 400, fontSize: 14, color: "#595959", left: 24, top: 95, width: 101, margin: 0 }}>Text message</p>
                    <p style={{ position: "absolute", fontFamily: "var(--font-dm-sans)", fontWeight: 400, fontSize: 14, color: "#595959", left: 24, top: 281, width: 101, margin: 0 }}>Email notification</p>
                    <p style={{ position: "absolute", fontFamily: "var(--font-dm-sans)", fontWeight: 400, fontSize: 14, color: "#1a1a1a", left: 692, top: 282, margin: 0, whiteSpace: "nowrap" }}>Email result</p>
                    <div style={{ position: "absolute", background: "#ededed", display: "flex", alignItems: "center", justifyContent: "center", left: 144, padding: "8px 20px", borderRadius: 8, top: 14, width: 242 }}>
                      <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 16, color: "#595959", margin: 0, whiteSpace: "nowrap" }}>For Customer</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* 02 */}
            <div id="solutions-deprioritise" style={{ marginBottom: 80 }}>

              {/* ── Header + badge ── */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 16, fontWeight: 700, color: "#3445ff", background: "rgba(255,255,255,0.1)", borderRadius: 100, padding: "4px 14px" }}>
                    02
                  </span>
                  <h3 style={{ ...h3Style, margin: 0, color: "#3445ff" }}>Deprioritise PBB on the terminal and expand bank coverage</h3>
                </div>
                <div style={{ background: "#fff", display: "flex", alignItems: "center", gap: 8, padding: 12, borderRadius: 20, flexShrink: 0, boxShadow: "8px 8px 20px rgba(197,197,197,0.25)" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1566d1", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 14, color: "#1566d1", whiteSpace: "nowrap" }}>Deprioritise PBB on terminal</span>
                </div>
              </div>

              {/* ── Body text ── */}
              <p style={{ ...bodyStyle, marginBottom: 24, maxWidth: 840 }}>
                To protect the core checkout flow, we kept card payment as the primary option and moved Pay by Bank (and other immediate payment methods) into a secondary menu—reducing cognitive load for staff.
              </p>

              {/* ── Image pair ── */}
              <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
                <div style={{ width: 432, height: 270, borderRadius: 14, overflow: "hidden", flexShrink: 0 }}>
                  <img src="/images/kody-solution/deprioritise-1.png" alt="Deprioritise terminal 1" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <div style={{ width: 492, height: 270, borderRadius: 14, overflow: "hidden", flexShrink: 0, position: "relative" }}>
                  <img src="/images/kody-solution/deprioritise-2.png" alt="Deprioritise terminal 2" style={{ position: "absolute", height: "100%", left: "-5.27%", maxWidth: "none", top: "-0.07%", width: "105.26%", display: "block" }} />
                </div>
              </div>

            </div>

            {/* 03 */}
            <div id="solutions-highlight">

              {/* ── Header + badge ── */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 16, fontWeight: 700, color: "#3445ff", background: "rgba(255,255,255,0.1)", borderRadius: 100, padding: "4px 14px" }}>
                    03
                  </span>
                  <h3 style={{ ...h3Style, margin: 0, color: "#3445ff" }}>Drive adoption with clear value messaging</h3>
                </div>
                <div style={{ background: "#fff", display: "flex", alignItems: "center", gap: 8, padding: 12, borderRadius: 20, flexShrink: 0, boxShadow: "8px 8px 20px rgba(197,197,197,0.25)" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#d521c6", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 14, color: "#d521c6", whiteSpace: "nowrap" }}>Highlight PBB&apos;s cost-saving benefits</span>
                </div>
              </div>

              {/* ── Body text 1 ── */}
              <p style={{ ...bodyStyle, marginBottom: 24, maxWidth: 840 }}>
                To support merchant adoption and address low awareness of the fee-saving value proposition, I prepared launch enablement materials alongside development—creating a step-by-step guide, drafting Intercom prompts, and producing email communications that clearly explain PBB&apos;s fee-saving benefits.
              </p>

              {/* ── Image pair ── */}
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 24 }}>
                <div style={{ width: 553, height: 270, borderRadius: 14, overflow: "hidden", flexShrink: 0 }}>
                  <img src="/images/kody-solution/value-messaging-1.png" alt="Value messaging 1" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <div style={{ width: 432, height: 270, borderRadius: 14, overflow: "hidden", flexShrink: 0 }}>
                  <img src="/images/kody-solution/value-messaging-2.png" alt="Value messaging 2" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
              </div>

            </div>
          </section>

          {/* ── RESULTS ───────────────────────────────────────────────────────── */}
          <section id="results" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <span style={labelStyle}>Results</span>
            <h2 style={h2Style}>Within one month of shifting focus to Pay by Link</h2>

            <div className="kody-two-col" style={{ marginBottom: 64 }}>
              <div style={{ background: "rgba(255,255,255,0.55)", backdropFilter: "blur(20px)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.7)", padding: "36px 40px" }}>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 700, color: "#3445ff", margin: "0 0 8px", lineHeight: 1 }}>
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
          </section>

        </div>{/* end .kody-content-col */}
      </div>{/* end .kody-with-sidebar */}

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
