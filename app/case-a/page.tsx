import Navbar from "@/components/Navbar";
import CaseATOC from "@/components/CaseATOC";
import RoadmapToggle from "@/components/RoadmapToggle";
import LinkWithImagePreview from "@/components/LinkWithImagePreview";

// ── Shared styles ─────────────────────────────────────────────────────────────
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
  { name: "Merchants / Business Owners", count: 4 },
  { name: "Frontline staff", count: 6 },
  { name: "End payer", count: 3 },
];

const matrixRows = [
  {
    dimension: "Awareness",
    merchant: "Doesn't know when to recommend it",
    staff: "Doesn't know what it is",
    payer: "Doesn't know why they'd use it",
  },
  {
    dimension: "Operation",
    merchant: "Not present at checkout, can't observe what's happening",
    staff: "High explanation cost, awkward fallback when it fails",
    payer: "Three context switches: terminal → QR → bank app → back",
  },
  {
    dimension: "Risk",
    merchant: "Anxious about the refund flow",
    staff: "Fumbling in front of customers when signal drops",
    payer: "Fear of a public failure while others wait",
  },
  {
    dimension: "Perceived value",
    merchant: "Fee savings exist but are invisible",
    staff: "Absorbs 100% of operational cost, captures 0% of the savings",
    payer: "Absorbs 100% of cognitive cost, captures 0% of the savings",
  },
];

const userSummary = [
  {
    role: "Merchant",
    emoji: "⚠️",
    point: "Invisible transaction fee saving",
    detail: "Even Pay by Bank can help save around 60% transaction fee, few business owners are aware of this benefit",
    avatar: "/images/kody-pbb/avatar-merchant.png",
  },
  {
    role: "Front line staff",
    emoji: "❌",
    point: "Zero upside — only added work",
    detail: "",
    avatar: "/images/kody-pbb/avatar-staff.png",
  },
  {
    role: "Payer",
    emoji: "❌",
    point: "Zero upside — only added steps",
    detail: "",
    avatar: "/images/kody-pbb/avatar-payer.png",
  },
];

export default function CaseA() {
  return (
    <>
      <style>{`
        /* ── Case B link bar ── */
        .case-b-link {
          box-shadow: 0 2px 16px rgba(0,0,0,0.08);
          transition: background 0.2s, box-shadow 0.2s;
        }
        .case-b-link:hover {
          background: rgba(52,69,255,0.06) !important;
          box-shadow: 0 2px 16px rgba(0,0,0,0.08);
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

        /* ── Cohort grid ── */
        .kody-cohort-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .kody-cohort-grid { grid-template-columns: 1fr; }
        }

        /* ── Research matrix ── */
        .kody-matrix-header, .kody-matrix-row {
          display: grid;
          grid-template-columns: 140px 1fr 1fr 1fr;
          gap: 16px;
          margin-bottom: 8px;
        }
        .kody-matrix-cell {
          font-family: var(--font-dm-sans);
          font-size: 14px;
          font-weight: 500;
          color: #1a1a1a;
          padding: 14px 16px;
          border-radius: 16px;
          line-height: 1.5;
        }
        .kody-matrix-cell-head {
          background: #eeeffa;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .kody-matrix-cell-head:first-child { background: transparent; }
        .kody-matrix-cell-dim {
          background: #f3f3f3;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .kody-matrix-cell-content { background: transparent; }

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
          .kody-with-sidebar { flex-direction: column; padding: 0 24px; }
          .kody-sidebar-col { display: none; }
          .kody-content-col { width: 100%; }
          .kody-overview-width { padding-left: 24px; padding-right: 24px; }
          .kody-matrix-header, .kody-matrix-row { grid-template-columns: 90px 1fr 1fr 1fr; gap: 8px; }
        }

        /* ── Horizontal scroll ── */
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

          <h1
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 700,
              lineHeight: 1.12,
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
              margin: "0 0 40px",
              maxWidth: 840,
            }}
          >
            Detailed process of how I contributed to finding the strategy and pivoting to the correct channel for Pay by Bank
          </p>

          <div style={{ paddingBottom: sectionGap, display: "flex", flexDirection: "column", gap: 16, maxWidth: 840 }}>
            <p style={{ ...bodyStyle, maxWidth: "none" }}>
              At Kody, a UK payments startup, leadership asked the team to add 64 more banks to our in-person terminal in order to lift Pay by Bank adoption. After one week of user research, I made the case for a different direction: Pay by Bank is a context-sensitive product, and the terminal wasn&apos;t the right context. The team pivoted to integrating Pay by Bank into Pay by Link instead — a channel where the product&apos;s strengths actually translate into adoption.
            </p>
            <p style={{ ...bodyStyle, maxWidth: "none" }}>
              After pivoting, Pay by Bank transaction volume grew 120% in the first month.
            </p>
            {/* Case B link bar */}
            <a
              href="/kody-pbb-b"
              className="case-b-link"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                background: "#fff",
                borderRadius: 16,
                padding: "16px 20px",
                textDecoration: "none",
                marginTop: 8,
                maxWidth: 600,
              }}
            >
              <img
                src="/images/kody-pbb/product-overview.png"
                alt="Case B cover"
                style={{ width: 80, height: 56, objectFit: "cover", borderRadius: 10, flexShrink: 0, display: "block" }}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#3445ff", display: "block", marginBottom: 4 }}>
                  Case B
                </span>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, fontWeight: 600, color: "#1a1a1a", margin: 0, lineHeight: 1.4 }}>
                  Designing Pay by Bank for Pay by Link
                </p>
              </div>
              <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 18, color: "rgba(26,26,26,0.3)", flexShrink: 0 }}>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── SIDEBAR + CONTENT ─────────────────────────────────────────────────── */}
      <div className="kody-with-sidebar">
        <div className="kody-sidebar-col">
          <CaseATOC />
        </div>

        <div className="kody-content-col">

          {/* ── BUSINESS GOAL ─────────────────────────────────────────────── */}
          <section id="business-goal" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>A cold start with a clear target</h2>

            <p style={{ ...bodyStyle, marginBottom: 16 }}>
              Pay by Bank (PBB) is Kody&apos;s Open Banking payment method. It launched on in-person terminals, prompting customers to scan a QR code and pay in their bank app on their mobile device (typically for transactions above £40).
            </p>
            <p style={{ ...bodyStyle, marginBottom: 16 }}>
              However, after the first version launched in one and a half months, the numbers were flat. Adoption was low, and the data volume was too small to tell us why.
            </p>
            <p style={{ ...bodyStyle, marginBottom: 40 }}>
              When I joined, the brief was already in place: integrate 64 more banks into our in-person payment terminal, and lift Pay by Bank adoption by 30% this quarter. Five weeks of development.
            </p>

            <div className="kody-two-col" style={{ marginBottom: 64 }}>
              {/* Business requests */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: "32px 36px",
                  border: "1px solid rgba(180,180,180,0.6)",
                  boxShadow: "20px 20px 20px rgba(212,212,212,0.25)",
                }}
              >
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(26,26,26,0.4)", display: "block", marginBottom: 20 }}>
                  Business requests
                </span>
                {[
                  { bold: "Add 64 more bank options", rest: " into this payment method." },
                  { bold: "Achieve a 30% increase in adoption rate", rest: " in this iteration." },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, marginBottom: i === 1 ? 0 : 14, alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 12, fontWeight: 500, color: "#3445ff", minWidth: 20, lineHeight: 1.6 }}>{i + 1}.</span>
                    <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.6, color: "#1a1a1a", margin: 0 }}>
                      <strong style={{ fontWeight: 700 }}>{item.bold}</strong>{item.rest}
                    </p>
                  </div>
                ))}
              </div>

              {/* Constraints */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: "32px 36px",
                  border: "1px solid rgba(180,180,180,0.6)",
                  boxShadow: "20px 20px 20px rgba(212,212,212,0.25)",
                }}
              >
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(26,26,26,0.4)", display: "block", marginBottom: 20 }}>
                  Constraints
                </span>
                {[
                  "Terminal is a core tool that values speed and stability, which are the main requirements in an offline payment scenario.",
                  "£40+ transaction threshold (cost/business constraint).",
                  "Team resources are limited, requiring swift directional decisions.",
                  "No PM in the team for this version development.",
                ].map((item, i, arr) => (
                  <div key={i} style={{ display: "flex", gap: 14, marginBottom: i === arr.length - 1 ? 0 : 14, alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 12, fontWeight: 500, color: "rgba(26,26,26,0.35)", minWidth: 20, lineHeight: 1.6 }}>{i + 1}.</span>
                    <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.6, color: "#1a1a1a", margin: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <img src="/images/kody-pbb/cold-start.png" alt="Cold start diagram" style={imgStyle} />
          </section>

          {/* ── RESEARCH ──────────────────────────────────────────────────────── */}
          <section id="research" style={{ background: "#fafafa" }}>

            {/* Interview */}
            <div id="research-interview" style={{ paddingBottom: sectionGap }}>
              {divider}
              <h2 style={h2Style}>Learn why adoption stalled</h2>

              <p style={{ ...bodyStyle, marginBottom: 48 }}>
                With limited usage data and a high implementation cost, shipping changes without research would have been largely guesswork. Rather than having engineers spend 4 weeks hardcoding bank options — with considerable maintenance to follow — I ran 10+ rapid qualitative interviews with merchants and frontline staff to identify the real adoption blockers before investing in a build.
              </p>

              {/* Cohorts + image */}
              <div className="kody-cohort-grid" style={{ marginBottom: 48 }}>
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
                        border: "1px solid rgba(180,180,180,0.6)",
                        boxShadow: "20px 20px 40px rgba(212,212,212,0.25)",
                      }}
                    >
                      <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "#1a1a1a", lineHeight: 1.4 }}>{name}</span>
                      <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, fontWeight: 500, color: "rgba(26,26,26,0.35)", marginLeft: 16, flexShrink: 0 }}>× {count}</span>
                    </div>
                  ))}
                </div>
                <img src="/images/kody-pbb/research-insights.png" alt="Research insights" style={imgStyle} />
              </div>

              {/* Matrix intro */}
              <p style={{ ...bodyStyle, marginBottom: 32 }}>
                Three different user groups raised multiple issues about the Pay by Bank method. I organised them into three dimensions:
              </p>

              {/* Matrix table */}
              <div className="kody-scroll-x" style={{ marginBottom: 56 }}>
                <div style={{ minWidth: 680 }}>
                  <div className="kody-matrix-header">
                    <div className="kody-matrix-cell" style={{ background: "transparent" }} />
                    {["Merchant", "Front line staff", "Payer"].map((col) => (
                      <div key={col} className="kody-matrix-cell kody-matrix-cell-head">{col}</div>
                    ))}
                  </div>
                  {matrixRows.map((row) => (
                    <div key={row.dimension} className="kody-matrix-row">
                      <div className="kody-matrix-cell kody-matrix-cell-dim">{row.dimension}</div>
                      <div className="kody-matrix-cell kody-matrix-cell-content">{row.merchant}</div>
                      <div className="kody-matrix-cell kody-matrix-cell-content">{row.staff}</div>
                      <div className="kody-matrix-cell kody-matrix-cell-content">{row.payer}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p style={{ ...bodyStyle, marginBottom: 32 }}>
                During the interviews, the most frequent challenge from merchants and customers was:
              </p>

              <div style={{ borderLeft: "3px solid #3445ff", paddingLeft: 24, margin: "0 0 32px" }}>
                <p style={blockquoteTextStyle}>
                  &ldquo;Why would I ever do this instead of just tapping my card?&rdquo;
                </p>
              </div>

              {/* Summary card */}
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
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 16, fontWeight: 500, color: "#1a1a1a", margin: "0 0 8px" }}>
                  What does PAY BY BANK on terminal mean to users?
                </p>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.7, color: "#1a1a1a", margin: "0 0 28px" }}>
                  At the offline payment context, card payment is the default — fastest, most familiar, most reliable method. PBB never offers users more than card does.
                </p>
                <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                  {userSummary.map(({ role, emoji, point, detail, avatar }) => (
                    <div
                      key={role}
                      style={{
                        flex: "1 1 180px",
                        background: "rgba(255,255,255,0.7)",
                        borderRadius: 16,
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                      }}
                    >
                      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                        <img src={avatar} alt={role} style={{ width: 36, height: 36, borderRadius: "50%", flexShrink: 0, objectFit: "cover", display: "block" }} />
                        <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, fontWeight: 500, color: "#1a1a1a" }}>{role}</span>
                      </div>
                      <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ fontSize: 16, lineHeight: 1.4, flexShrink: 0 }}>{emoji}</span>
                        <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, fontWeight: 500, color: "#1a1a1a", margin: 0, lineHeight: 1.5 }}>
                          {point}
                          {detail && <><br /><span style={{ fontWeight: 400, color: "rgba(26,26,26,0.65)" }}>{detail}</span></>}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Strategy Problem */}
            <div id="research-insights" style={{ paddingBottom: sectionGap }}>
              {divider}
              <h2 style={h2Style}>What&apos;s the Product-strategy Problem?</h2>

              <p style={{ ...bodyStyle, marginBottom: 40 }}>
                From the qualitative research, it is clear that PBB isn&apos;t losing to card on product capability in the offline payment environment — it&apos;s losing on context fit. The problem shifts from &ldquo;how to improve PBB on terminal&rdquo; to:
              </p>

              <div style={{ borderLeft: "3px solid #3445ff", paddingLeft: 27, marginBottom: 40 }}>
                <p style={{ ...blockquoteTextStyle, fontSize: "clamp(18px, 2vw, 24px)" }}>
                  Where can PBB deliver net upside to all three users in a transaction — and does that context exist within Kody&apos;s current product surface?
                </p>
              </div>
            </div>
          </section>

          {/* ── CHANNEL AUDIT ─────────────────────────────────────────────────── */}
          <section id="channel-audit" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>Channel Audit</h2>

            <p style={{ ...bodyStyle, marginBottom: 28 }}>
              After all the insights, I held a deep-dive with the CTO, Head of PD, Tech Lead, and PM to align on my findings and present my hypothesis on the right channel.
            </p>

            <p style={{ ...bodyStyle, marginBottom: 28 }}>
              Based on this hypothesis, I drafted a few criteria to define a context for Pay by Bank:
            </p>

            <div
              style={{
                padding: "32px 36px",
                marginBottom: 40,
                width: "100%",
                boxSizing: "border-box",
                background: "rgba(255,255,255,0.55)",
                border: "1px solid rgba(180,180,180,0.6)",
                borderRadius: 16,
                boxShadow: "20px 20px 40px rgba(212,212,212,0.25)",
              }}
            >
              <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(26,26,26,0.4)", display: "block", marginBottom: 20 }}>
                Criteria
              </span>
              {[
                "Low-urgency payment moments (not queue-based)",
                "Typical AOV above £40 (aligned with the business constraint)",
                "A self-controlled environment (payer is not dependent on a venue's connection or a staff member to explain the flow)",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#3445ff", marginTop: 8, flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.6, color: "#1a1a1a" }}>{item}</span>
                </div>
              ))}
            </div>

            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              With those criteria, I listed all the payment channels Kody was operating and pulled AOV data for each with help from data analytics, evaluating each against the context requirements from the previous section. Pay by Link emerged as the primary fit for Pay by Bank.
            </p>

            {/* Channel comparison table */}
            <div className="kody-scroll-x">
              <table style={{ width: "100%", minWidth: 640, borderCollapse: "collapse", fontFamily: "var(--font-dm-sans)" }}>
                <thead>
                  <tr style={{ background: "#e8e8e8" }}>
                    {["Channel", "Time pressure low?", "AOV ≥ £40 likely?", "Self-controlled environment?", "Verdict"].map((col) => (
                      <th
                        key={col}
                        style={{
                          padding: "16px 20px",
                          fontSize: 14,
                          fontWeight: 500,
                          color: "#1a1a1a",
                          textAlign: col === "Channel" ? "left" : "center",
                          border: "1px solid #d4d4d4",
                          lineHeight: 1.4,
                        }}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      channel: "Terminal",
                      timePressure: "❌",
                      aov: "⚠️",
                      selfControlled: "❌",
                      verdict: "Current failure mode",
                      highlight: false,
                    },
                    {
                      channel: "Pay by Link",
                      timePressure: "✅",
                      aov: "✅",
                      selfControlled: "✅",
                      verdict: "Match, primary fit",
                      highlight: true,
                    },
                    {
                      channel: "Online checkout",
                      timePressure: "✅",
                      aov: "⚠️ varies",
                      selfControlled: "✅",
                      verdict: "Secondary fit, low Kody coverage",
                      highlight: false,
                    },
                    {
                      channel: "QR payment at table",
                      timePressure: "❌",
                      aov: "❌",
                      selfControlled: "⚠️",
                      verdict: "Time-pressure issue + low AOV",
                      highlight: false,
                    },
                  ].map((row) => (
                    <tr key={row.channel} style={{ background: row.highlight ? "#deeaf7" : "#fff" }}>
                      <td style={{ padding: "16px 20px", fontSize: 14, color: "#1a1a1a", fontWeight: row.highlight ? 600 : 400, border: "1px solid #d4d4d4" }}>
                        {row.channel}
                      </td>
                      {[row.timePressure, row.aov, row.selfControlled].map((val, i) => (
                        <td key={i} style={{ padding: "16px 20px", fontSize: 16, textAlign: "center", border: "1px solid #d4d4d4" }}>
                          {val}
                        </td>
                      ))}
                      <td style={{ padding: "16px 20px", fontSize: 14, color: "#1a1a1a", textAlign: "center", border: "1px solid #d4d4d4", lineHeight: 1.4 }}>
                        {row.verdict}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── PIVOT DECISION ────────────────────────────────────────────────── */}
          <section id="pivot-decision" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>The Pivot Decision</h2>

            <p style={{ ...bodyStyle, marginBottom: 40 }}>
              In a discussion with the Tech Lead and Design Lead, alongside the insights from interviews and the channel hypothesis, I presented high-fidelity prototypes — one with extended bank options on terminal, and one with Pay by Bank in the payment link.{" "}
              <strong style={{ fontWeight: 700, color: "#1a1a1a" }}>
                I quickly built the prototypes with the help of AI (Figma Make) to walk everybody through the pros and cons from tech cost and experience perspectives to persuade my team.
              </strong>
            </p>

            <img
              src="/images/kody-pbb/pivot-prototype-comparison.png"
              alt="Prototype comparison: terminal expansion vs Pay by Link"
              style={{ width: "100%", display: "block", borderRadius: 14, marginBottom: 32 }}
            />

            {/* Option A */}
            <div style={{ marginBottom: 40 }}>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 16, fontWeight: 700, color: "#1a1a1a", margin: "0 0 12px" }}>
                Only expand the bank options on terminal
              </p>
              <p style={{ ...bodyStyle, marginBottom: 8 }}>
                <strong style={{ fontWeight: 600, color: "#1a1a1a" }}>Pros:</strong> Fits with the initial business requirement without significant structural changes.
              </p>
              <p style={{ ...bodyStyle }}>
                <strong style={{ fontWeight: 600, color: "#1a1a1a" }}>Cons:</strong> Significantly slows down staff operation speed and increases the error rate. Engineers would need to hardcode each bank option — extra cost and at least 3 weeks of implementation time.
              </p>
            </div>

            <img
              src="/images/kody-pbb/pivot-prototype-pbl.png"
              alt="Pay by Bank in Pay by Link flow example"
              style={{ width: "100%", maxWidth: 619, display: "block", borderRadius: 14, marginBottom: 12 }}
            />
            <p style={{ ...bodyStyle, marginBottom: 40, color: "rgba(26,26,26,0.55)", fontSize: 14 }}>
              This image is an example of the PBB flow, not the final design. Please check{" "}
              <LinkWithImagePreview
                href="/kody-pbb-b"
                label="Designing Pay by Bank for Pay by Link"
                previewSrc="/images/kody-pbb/product-overview.png"
                previewAlt="Case B cover"
              />{" "}
              for the final design.
            </p>

            {/* Option B */}
            <div>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 16, fontWeight: 700, color: "#1a1a1a", margin: "0 0 12px" }}>
                Integrate PBB into the payment link channel while deprioritising PBB on terminal
              </p>
              <p style={{ ...bodyStyle, marginBottom: 8 }}>
                <strong style={{ fontWeight: 600, color: "#1a1a1a" }}>Pros:</strong> Can directly use the API provider on the web environment to save development time. Applying PBB on the user&apos;s own device instead of switching between devices better matches the payment context.
              </p>
              <p style={{ ...bodyStyle }}>
                <strong style={{ fontWeight: 600, color: "#1a1a1a" }}>Cons:</strong> Requires redesigning the Pay by Link checkout flow and coordinating cross-team on terminal deprioritisation messaging.
              </p>
            </div>
          </section>

          {/* ── ROADMAP ───────────────────────────────────────────────────────── */}
          <section id="roadmap" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <span style={labelStyle}>Results</span>
            <h2 style={h2Style}>Roadmap updated</h2>

            <p style={{ ...bodyStyle, marginBottom: 48 }}>
              The pivot was successfully reflected on the product roadmap. Instead of having &ldquo;expand bank options&rdquo; as the P0 task, the P0 task became &ldquo;explore integrating PBB into Pay by Link and help business owners understand the benefit of PBB.&rdquo; The new P1 requirement became deprioritising PBB on terminal for target users — for a better terminal experience and brand reputation.
            </p>

            <RoadmapToggle />

            <p style={{ ...bodyStyle, marginTop: 48, marginBottom: 20 }}>
              In a separate case study I cover how I designed the actual Pay by Link checkout integration — the UX work that brought this pivot to life.
            </p>

            <a
              href="/kody-pbb-b"
              className="case-b-link"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                background: "#fff",
                borderRadius: 16,
                padding: "16px 20px",
                textDecoration: "none",
                maxWidth: 840,
              }}
            >
              <img
                src="/images/kody-pbb/product-overview.png"
                alt="Case B cover"
                style={{ width: 80, height: 56, objectFit: "cover", borderRadius: 10, flexShrink: 0, display: "block" }}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#3445ff", display: "block", marginBottom: 4 }}>
                  Case B
                </span>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, fontWeight: 600, color: "#1a1a1a", margin: 0, lineHeight: 1.4 }}>
                  Designing Pay by Bank for Pay by Link
                </p>
              </div>
              <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 18, color: "rgba(26,26,26,0.3)", flexShrink: 0 }}>→</span>
            </a>
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
