import Navbar from "@/components/Navbar";
import CounterPickupTOC from "@/components/CounterPickupTOC";

const overviewWidth: React.CSSProperties = {
  padding: "0 124px",
  boxSizing: "border-box",
  width: "100%",
};

const heroTags = ["B2B", "Operation", "Usability Redesign"];

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

const mediaRowStyle: React.CSSProperties = {
  width: "100%",
  background: "#ECEFF5",
  borderRadius: 16,
  padding: 32,
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const mediaImageStyle: React.CSSProperties = {
  ...imgStyle,
  height: "auto",
  objectFit: "contain",
};

const singleMediaContentStyle: React.CSSProperties = {
  ...mediaImageStyle,
  width: "80%",
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

function MediaRow({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <div style={{ ...mediaRowStyle, ...style }}>{children}</div>;
}

function BeforeAfterImages() {
  const items = [
    {
      label: "Before",
      src: "/images/counter-pickup/ticket-queue-before.png",
      alt: "Before: Kody CRM transaction list designed around back-office order management.",
    },
    {
      label: "After",
      src: "/images/counter-pickup/order-received.png",
      alt: "After: received order queue with card-based tickets and visible action controls.",
    },
  ];

  return (
    <MediaRow>
      <div className="pickup-two-col" style={{ width: "100%" }}>
        {items.map((item) => (
          <figure key={item.label} style={{ margin: 0 }}>
            <figcaption
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(26,26,26,0.52)",
                marginBottom: 12,
              }}
            >
              {item.label}
            </figcaption>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                style={mediaImageStyle}
              />
            </div>
          </figure>
        ))}
      </div>
    </MediaRow>
  );
}

const heroOverviewColumns = [
  {
    label: "My role",
    text: "I led the workflow research, problem framing, interaction design, prototyping, validation, and final handoff for this 0-to-1 counter staff tool.",
  },
  {
    label: "Outcome",
    text: "The pilot supported 8 venues, 350-500 daily orders, and reached 100% adoption among counter staff during live food court service.",
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
          grid-template-columns: minmax(0, 571fr) minmax(0, 629fr);
          gap: 64px;
          align-items: flex-start;
          margin-bottom: 14px;
        }
        .pickup-hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 76px;
        }
        .pickup-hero-tag {
          font-family: var(--font-dm-sans);
          font-size: 13px;
          line-height: 20px;
          font-weight: 500;
          color: #1a1a1a;
          background: rgba(26,26,26,0.06);
          border-radius: 6px;
          padding: 4px 8px;
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
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .pickup-hero-device-band {
          width: 100%;
          height: min(37.7vw, 570px);
          min-height: 360px;
          overflow: hidden;
          display: block;
          object-fit: cover;
        }
        .pickup-hero-split-band {
          display: grid;
          grid-template-columns: 680fr 832fr;
          width: 100%;
          height: min(24.34vw, 368px);
          min-height: 240px;
          overflow: hidden;
          background: #fafafa;
        }
        .pickup-hero-split-band img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .pickup-hero-split-band video {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .pickup-hero-result-strip {
          display: grid;
          grid-template-columns: minmax(0, 547px) minmax(0, 530px);
          justify-content: space-between;
          gap: 72px;
          padding: 60px 124px;
          box-sizing: border-box;
          width: 100%;
          background: #fafafa;
        }
        .pickup-hero-metrics {
          display: flex;
          gap: 48px;
          align-items: flex-start;
          white-space: nowrap;
        }
        .pickup-hero-metric-number {
          font-family: var(--font-geist-mono), var(--font-dm-mono);
          font-size: 48px;
          line-height: 1;
          font-weight: 400;
          color: #3445ff;
          margin: 0 0 12px;
        }
        .pickup-hero-metric-label {
          font-family: var(--font-dm-sans);
          font-size: 16px;
          line-height: 1.75;
          color: rgba(26,26,26,0.72);
          margin: 0;
        }
        .pickup-hero-metric-caption {
          font-family: var(--font-dm-sans);
          font-size: 13px;
          line-height: 1.6;
          color: rgba(26,26,26,0.5);
          margin: 28px 0 0;
          max-width: 540px;
        }
        .pickup-hero-quote {
          font-family: var(--font-dm-sans);
          font-size: 24px;
          font-weight: 500;
          line-height: 1.5;
          letter-spacing: -0.022em;
          color: #737376;
          margin: 0;
        }
        .pickup-hero-quote-source {
          font-family: var(--font-dm-sans);
          font-size: 16px;
          font-weight: 500;
          line-height: 1.5;
          letter-spacing: -0.022em;
          color: #737376;
          text-align: right;
          margin: 0;
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
        .pickup-audit-list-img {
          width: 100% !important;
          border-radius: 0 !important;
        }
        .pickup-audit-detail-img {
          width: 80% !important;
          border-radius: 0 !important;
        }
        @media (max-width: 900px) {
          .pickup-overview-width { padding: 0 24px !important; }
          .pickup-hero-grid { grid-template-columns: 1fr; gap: 32px; margin-bottom: 56px; }
          .pickup-hero-tags { margin-bottom: 56px; }
          .pickup-overview-grid { grid-template-columns: 1fr; gap: 40px; }
          .pickup-hero-device-band { height: 420px; min-height: 420px; }
          .pickup-hero-split-band { grid-template-columns: 1fr; height: auto; }
          .pickup-hero-split-band img, .pickup-hero-split-band video { height: auto; }
          .pickup-hero-result-strip { grid-template-columns: 1fr; gap: 40px; padding: 48px 24px 72px; }
          .pickup-hero-metrics { flex-wrap: wrap; gap: 32px; white-space: normal; }
          .pickup-hero-metric-number { font-size: 38px; }
          .pickup-hero-metric-caption { margin-top: 8px; }
          .pickup-hero-quote { font-size: 20px; }
          .pickup-with-sidebar { flex-direction: column; padding: 0 24px; }
          .pickup-sidebar-col { display: none; }
          .pickup-content-col { width: 100%; }
          .pickup-two-col, .pickup-three-col { grid-template-columns: 1fr; }
          .pickup-audit-list-img { width: 100% !important; }
          .pickup-audit-detail-img { width: 80% !important; }
        }
      `}</style>

      <Navbar />

      <section id="overview" style={{ background: "#fafafa", paddingTop: 160 }}>
        <div style={overviewWidth} className="pickup-overview-width">
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
                  maxWidth: 571,
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
                  maxWidth: 543,
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

          <div className="pickup-hero-tags">
            {heroTags.map((tag) => (
              <span className="pickup-hero-tag" key={tag}>{tag}</span>
            ))}
          </div>

          <div style={{ paddingBottom: 80 }}>
            <div className="pickup-overview-grid">
              {heroOverviewColumns.map((item) => (
                <div key={item.label}>
                  <p className="pickup-summary-label">{item.label}</p>
                  <p className="pickup-summary-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <img
          className="pickup-hero-device-band"
          src="/Hero%201.png"
          alt="Counter pickup interface shown across vendor tablets"
        />
        <div className="pickup-hero-split-band">
          <video
            src="/ticket.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Counter ticket card states animation"
          />
          <img
            src="/hero2.png"
            alt="Food court counter staff handing a customer a pickup order."
          />
        </div>
        <div className="pickup-hero-result-strip">
          <div>
            <div className="pickup-hero-metrics">
              <div>
                <p className="pickup-hero-metric-number">350-500</p>
                <p className="pickup-hero-metric-label">daily orders supported through the workflow</p>
              </div>
              <div>
                <p className="pickup-hero-metric-number">95%</p>
                <p className="pickup-hero-metric-label">Positive NPS Feedback</p>
              </div>
            </div>
            <p className="pickup-hero-metric-caption">
              During the pilot, the product reached 100% adoption among counter staff and received positive feedback from staff and managers, especially around faster scanning, clearer urgency signals, and safer customer notifications.
            </p>
          </div>
          <div style={{ display: "grid", gap: 16 }}>
            <p className="pickup-hero-quote">“It feels much faster during lunch rush.”</p>
            <div style={{ display: "grid", gap: 8 }}>
              <p className="pickup-hero-quote">“Before, I had to keep checking timestamps. Now I know what’s getting risky.”</p>
              <p className="pickup-hero-quote-source">— Staff feedback</p>
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

            <MediaRow>
              <img
                src="/images/counter-pickup/food-court-ecosystem.png"
                alt="Food court workflow and Kody product coverage before the counter staff tool"
                style={mediaImageStyle}
              />
            </MediaRow>
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

            <MediaRow style={{ marginBottom: 56 }}>
              <div style={{ width: "80%", display: "grid", gap: 32, justifyItems: "start" }}>
                <img
                  className="pickup-audit-list-img"
                  src="/images/counter-pickup/crm-order-list-audit.png"
                  alt="Audit of Kody CRM order list page"
                  style={mediaImageStyle}
                />
                <img
                  className="pickup-audit-detail-img"
                  src="/images/counter-pickup/crm-order-detail-audit.png"
                  alt="Audit of Kody CRM order detail page"
                  style={mediaImageStyle}
                />
              </div>
            </MediaRow>

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
            <BeforeAfterImages />
            <div style={{ height: 28 }} />
            <p style={{ ...bodyStyle, marginBottom: 16 }}>
              During research, I noticed staff were constantly checking timestamps to judge whether an order needed attention. This created extra cognitive load, especially during busy periods.
            </p>
            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              So instead of asking staff to manually interpret time, I introduced two proactive urgency states: <strong>Due soon</strong> and <strong>Overdue</strong>.
            </p>
            <MediaRow>
              <video
                src="/Tab%20switching.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={singleMediaContentStyle}
              />
            </MediaRow>
            <div style={{ height: 28 }} />
            <MediaRow>
              <img
                src="/images/counter-pickup/ticket-status-system.png"
                alt="Ticket status system showing received, ready, completed, due soon, and overdue states."
                style={mediaImageStyle}
              />
            </MediaRow>
          </section>

          <section id="safer-actions" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h3 style={h3Style}>02. Adding a short undo window for safer notifications</h3>
            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              Because wrong customer notifications had immediate consequences, I designed a short undo window before the backend sent the message. This allowed staff to recover from accidental taps without adding friction to the normal workflow.
            </p>
            <MediaRow>
              <video
                src="/undo.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={singleMediaContentStyle}
              />
            </MediaRow>
          </section>

          <section id="availability" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h3 style={h3Style}>03. Supporting temporary item availability changes</h3>
            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              Stock changes happened constantly during service, but not every change meant an item was permanently sold out. I designed temporary availability controls so staff could pause items for short operational windows without leaving the service workflow.
            </p>
            <MediaRow>
              <video
                src="/item%20availability.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={singleMediaContentStyle}
              />
            </MediaRow>
          </section>

          <section id="final-design" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>Final design</h2>
            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              The final design reframed order management around counter staff rather than managers. It prioritised fast recognition, visible action controls, proactive urgency signals, safer customer notifications, and flexible stock handling.
            </p>

            <div style={{ display: "grid", gap: 28 }}>
              <img
                src="/images/counter-pickup/ipad-pro-final-design.png"
                alt="Final counter pickup order management interface shown on an iPad."
                style={imgStyle}
              />
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
