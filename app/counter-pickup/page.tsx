import Navbar from "@/components/Navbar";
import CounterPickupTOC from "@/components/CounterPickupTOC";

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

const glassCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.68)",
  backdropFilter: "blur(20px)",
  borderRadius: 16,
  border: "1px solid rgba(255,255,255,0.7)",
  padding: "32px 36px",
};

const divider = <div style={{ borderTop: "1px solid rgba(26,26,26,0.1)", marginBottom: 64 }} />;

function ImgPlaceholder({ label, aspect = "16/9" }: { label: string; aspect?: string }) {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: aspect,
        borderRadius: 14,
        background: "rgba(26,26,26,0.04)",
        border: "1px dashed rgba(26,26,26,0.18)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, color: "rgba(26,26,26,0.35)" }}>
        {label}
      </span>
    </div>
  );
}

const overviewItems = [
  {
    label: "My role",
    text: "Product designer for a 6-week 0-to-1 project. I led workflow research, problem framing, interaction design, prototyping, validation, and final handoff.",
  },
  {
    label: "Goal",
    text: "Help counter staff coordinate orders faster and more confidently during high-volume food court service.",
  },
  {
    label: "Outcome",
    text: "Designed a counter-first order management experience with card-based tickets, urgency states, visible actions, undo protection, and temporary item availability controls.",
  },
  {
    label: "Impact",
    text: "Piloted across 8 venues, supporting 350-500 daily orders, reaching 100% counter staff adoption and a reported 30% efficiency improvement.",
  },
];

const painPoints = [
  {
    title: "Cognitive overload",
    body: "Staff scanned for urgency, not full order details.",
  },
  {
    title: "High-cost action mistakes",
    body: "Wrong notifications could immediately affect the customer experience.",
  },
  {
    title: "Constant operational changes",
    body: "Stock availability changed during service and needed quick adjustment.",
  },
];

export default function CounterPickupCase() {
  return (
    <>
      <style>{`
        .pickup-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          margin-bottom: 80px;
        }
        .pickup-with-sidebar {
          display: flex;
          align-items: flex-start;
          gap: 40px;
          padding: 0 124px 0 100px;
          box-sizing: border-box;
          width: 100%;
          background: #fafafa;
        }
        .pickup-sidebar-col {
          width: 274px;
          flex-shrink: 0;
          position: sticky;
          top: 72px;
          padding: 32px;
          box-sizing: border-box;
        }
        .pickup-content-col {
          flex: 1;
          min-width: 0;
        }
        .pickup-overview-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 40px;
        }
        .pickup-summary-label {
          font-family: var(--font-dm-sans);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(26,26,26,0.42);
          margin: 0 0 18px;
        }
        .pickup-summary-text {
          font-family: var(--font-dm-sans);
          font-size: 16px;
          line-height: 1.6;
          letter-spacing: 0;
          color: #1a1a1a;
          margin: 0;
        }
        .pickup-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .pickup-three-col {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .pickup-overview-width { padding: 0 24px !important; }
          .pickup-hero-grid { grid-template-columns: 1fr; gap: 32px; margin-bottom: 56px; }
          .pickup-overview-grid { grid-template-columns: 1fr; gap: 40px; }
          .pickup-with-sidebar { flex-direction: column; padding: 0 24px; }
          .pickup-sidebar-col { display: none; }
          .pickup-content-col { width: 100%; }
          .pickup-two-col, .pickup-three-col { grid-template-columns: 1fr; }
        }
      `}</style>

      <Navbar />

      <section id="overview" style={{ background: "#fafafa", paddingTop: 120 }}>
        <div style={overviewWidth} className="pickup-overview-width">
          <span style={labelStyle}>Kody · 2025 · B2B · Operations</span>

          <div className="pickup-hero-grid">
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
                Counter-side Pickup Coordination for Food Court Vendors
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
                Designing a counter-first order management system that helped frontline staff coordinate digital orders, kitchen tickets, customer pickup notifications, and real-time stock changes during busy service.
              </p>
            </div>
            <div>
              <img
                src="/images/home/kitchen-ticketing-cover.webp"
                alt="Counter-side pickup coordination cover"
                style={imgStyle}
              />
            </div>
          </div>
        </div>

        <div style={overviewWidth} className="pickup-overview-width">
          <div style={{ paddingTop: 80, paddingBottom: sectionGap }}>
            <div className="pickup-overview-grid">
              {overviewItems.map((item) => (
                <div key={item.label}>
                  <p className="pickup-summary-label">{item.label}</p>
                  <p className="pickup-summary-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="pickup-with-sidebar">
        <div className="pickup-sidebar-col">
          <CounterPickupTOC />
        </div>

        <div className="pickup-content-col">
          <section id="context" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>Context: Expanding into QR-first food court operations</h2>
            <p style={{ ...bodyStyle, marginBottom: 16 }}>
              Kody saw an opportunity to expand beyond smaller hospitality businesses into QR-first food court operations, where payments are centralised and vendors focus mainly on fulfilment.
            </p>
            <p style={{ ...bodyStyle, marginBottom: 16 }}>
              Few competitor products were built specifically for this model. The target food court was relying on multiple third-party systems across ordering, payment, and operations, which created a fragmented workflow for staff and led them to partner with Kody.
            </p>
            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              Kody&apos;s existing product set covered enough of the journey for an early launch, including customer ordering, manager reconciliation, and kitchen tickets. The missing piece was a dedicated operational tool for frontline counter staff.
            </p>

            <img
              src="/images/counter-pickup/food-court-ecosystem.png"
              alt="Food court workflow and Kody product coverage before the counter staff tool"
              style={imgStyle}
            />
          </section>

          <section id="problem" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>Problem Framing</h2>
            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              To frame the problem, I interviewed 8 staff members across 6 venues and observed how counter teams handled orders during live service.
            </p>

            <div className="pickup-three-col" style={{ marginBottom: 48 }}>
              {painPoints.map((item, index) => (
                <div key={item.title} style={glassCard}>
                  <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 500, color: "#3445ff", display: "block", marginBottom: 18 }}>
                    0{index + 1}
                  </span>
                  <h3 style={h3Style}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.65, color: "rgba(26,26,26,0.68)", margin: 0 }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              I audited Kody&apos;s existing CRM product, which integrated back-office order and kitchen ticket management for small owner-operated businesses. I focused on the order list and order detail pages to understand what could and could not support counter staff in a food court setting.
            </p>

            <div className="pickup-two-col" style={{ marginBottom: 56 }}>
              <img
                src="/images/counter-pickup/crm-order-list-audit.png"
                alt="Audit of Kody CRM order list page"
                style={imgStyle}
              />
              <img
                src="/images/counter-pickup/crm-order-detail-audit.png"
                alt="Audit of Kody CRM order detail page"
                style={imgStyle}
              />
            </div>

            <div style={{ borderLeft: "3px solid #3445ff", paddingLeft: 24, margin: "40px 0" }}>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(18px, 2vw, 26px)",
                  fontWeight: 500,
                  lineHeight: 1.4,
                  letterSpacing: "-0.01em",
                  color: "#1a1a1a",
                  margin: 0,
                }}
              >
                Design challenge: helping frontline staff coordinate orders faster and more confidently in a high-pressure environment.
              </p>
            </div>
          </section>

          <section id="ticket-queue" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>Design Decision</h2>
            <h3 style={h3Style}>01. Reducing time-to-action through faster scanning and urgency states</h3>
            <p style={{ ...bodyStyle, marginBottom: 24 }}>
              The first design direction focused on helping staff recognise what needed attention and act faster. I explored list-based and card-based layouts, then validated prototypes with staff and internal stakeholders. The card-based direction created clearer separation between tickets and allowed key actions to stay visible upfront.
            </p>
            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              I also introduced Due Soon and Overdue states to reduce manual timestamp checking. Instead of interpreting raw time data under pressure, staff could identify risky tickets through clear attention signals.
            </p>
            <ImgPlaceholder label="Placeholder - first round ticket queue explorations" />
            <div style={{ height: 28 }} />
            <ImgPlaceholder label="Placeholder - Due Soon and Overdue state system" />
          </section>

          <section id="safer-actions" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h3 style={h3Style}>02. Adding a short undo window for safer notifications</h3>
            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              Because wrong customer notifications had immediate consequences, I designed a short undo window before the backend sent the message. This allowed staff to recover from accidental taps without adding friction to the normal workflow.
            </p>
            <ImgPlaceholder label="Placeholder - undo interaction flow" />
          </section>

          <section id="availability" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h3 style={h3Style}>03. Supporting temporary item availability changes</h3>
            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              Stock changes happened constantly during service, but not every change meant an item was permanently sold out. I designed temporary availability controls so staff could pause items for short operational windows without leaving the service workflow.
            </p>
            <ImgPlaceholder label="Placeholder - item availability controls" />
          </section>

          <section id="final-design" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>Final design</h2>
            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              The final design reframed order management around counter staff rather than managers. It prioritised fast recognition, visible action controls, proactive urgency signals, safer customer notifications, and flexible stock handling.
            </p>

            <ImgPlaceholder label="Placeholder - final counter-first order management system" />
          </section>

          <section id="result" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>Result</h2>
            <div className="pickup-three-col" style={{ marginBottom: 48 }}>
              {[
                { metric: "8", label: "venues in the pilot food court" },
                { metric: "350-500", label: "daily orders supported through the workflow" },
                { metric: "30%", label: "reported operational efficiency improvement" },
              ].map((item) => (
                <div key={item.metric} style={glassCard}>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 36, fontWeight: 700, letterSpacing: "-0.03em", color: "#3445ff", margin: "0 0 12px" }}>
                    {item.metric}
                  </p>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.55, color: "#1a1a1a", margin: 0 }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <p style={bodyStyle}>
              During the pilot, the product reached 100% adoption among counter staff and received positive feedback from staff and managers, especially around faster scanning, clearer urgency signals, and safer customer notifications.
            </p>
          </section>

          <section id="reflection" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>Reflection</h2>
            <p style={{ ...bodyStyle, marginBottom: 16 }}>
              This project reinforced that active listening can uncover operational needs that were not part of the original scope. Attention states, undo actions, and temporary availability controls came from observing how staff actually handled service pressure.
            </p>
            <p style={bodyStyle}>
              It also showed the value of designing for where the business is today. Because the food court still relied on kitchen paper tickets, the solution did not try to replace the full operational model at once. Instead, it connected the critical handoff points around the counter staff workflow.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
