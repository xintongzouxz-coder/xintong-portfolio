import Navbar from "@/components/Navbar";
import LinkWithImagePreview from "@/components/LinkWithImagePreview";
import FinalDesignFlow from "@/components/FinalDesignFlow";
import CaseBTOC from "@/components/CaseBTOC";

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

const divider = (
  <div style={{ borderTop: "1px solid rgba(26,26,26,0.1)", marginBottom: 64 }} />
);


const bankSelectionApproaches = [
  {
    label: "Approach 01",
    title: "Bank list inside the Pay by Bank card",
    body: "Fewest steps. But it flattens two decisions of very different weight, choosing a method and searching more than 60 banks on one screen, competing for attention.",
    image: "/images/kody-pbb/Bank%20list%20inside%20the%20Pay%20by%20Bank%20card.png?v=20260525-2255",
    imageHeight: 205,
  },
  {
    label: "Approach 02",
    title: "Popular banks on the first screen, rest on a second screen",
    body: "Fast for common banks. But it splits bank selection across two screens, and the variant step still has to land somewhere.",
    image: "/images/kody-pbb/Popular%20banks%20on%20the%20first%20screen%2C%20rest%20on%20a%20second%20screen.png?v=20260525-2255",
    imageHeight: 219,
  },
  {
    label: "Approach 03",
    title: "Bank selection as its own dedicated screen",
    body: "One more step. But each screen asks for one kind of decision, pick a method, then pick a bank.",
    image: "/images/kody-pbb/Bank%20selection%20as%20its%20own%20dedicated%20screen.png?v=20260525-2255",
    imageHeight: 190,
    muted: true,
    selected: true,
  },
];


function Placeholder({
  label,
  aspect = "16 / 9",
}: {
  label: string;
  aspect?: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: aspect,
        borderRadius: 14,
        background: "rgba(255,255,255,0.55)",
        border: "1px dashed rgba(26,26,26,0.18)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        padding: 24,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: 13,
          color: "rgba(26,26,26,0.38)",
          textAlign: "center",
          lineHeight: 1.5,
        }}
      >
        Image placeholder: {label}
      </span>
    </div>
  );
}

function SoftCard({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.55)",
        backdropFilter: "blur(20px)",
        borderRadius: 16,
        border: "1px solid rgba(255,255,255,0.7)",
        padding: "32px 36px",
        boxSizing: "border-box",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function NumberedItem({
  index,
  title,
  body,
}: {
  index: string;
  title: string;
  body: string;
}) {
  return (
    <SoftCard>
      <span
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: 13,
          fontWeight: 700,
          color: "#3445ff",
          display: "block",
          marginBottom: 18,
        }}
      >
        {index}
      </span>
      <h3 style={{ ...h3Style, marginBottom: 12 }}>{title}</h3>
      <p style={{ ...bodyStyle, fontSize: 15 }}>{body}</p>
    </SoftCard>
  );
}

function OpportunitySpectrum() {
  const itemText: React.CSSProperties = {
    fontFamily: "var(--font-dm-sans)",
    fontSize: 15,
    lineHeight: 1.5,
    color: "#1a1a1a",
    margin: 0,
  };

  const captionText: React.CSSProperties = {
    fontFamily: "var(--font-dm-mono)",
    fontSize: 11,
    lineHeight: 1.4,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    margin: 0,
  };

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.58)",
        border: "1px solid rgba(255,255,255,0.75)",
        borderRadius: 16,
        padding: "34px 38px",
        marginTop: 44,
        boxSizing: "border-box",
        boxShadow: "20px 20px 28px rgba(212,212,212,0.18)",
      }}
    >
      <div
        style={{
          marginBottom: 28,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 24,
            alignItems: "flex-end",
            marginBottom: 18,
          }}
        >
          <p style={{ ...captionText, color: "#3445ff", textAlign: "left" }}>
            Design can solve it
          </p>
          <p style={{ ...captionText, color: "rgba(26,26,26,0.42)", textAlign: "right" }}>
            Design cannot remove it
          </p>
        </div>
        <div
          style={{
            width: "100%",
            height: 3,
            borderRadius: 100,
            background:
              "linear-gradient(90deg, rgba(52,69,255,0.72), rgba(26,26,26,0.16))",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: -1,
              top: -5,
              width: 12,
              height: 12,
              borderLeft: "2px solid rgba(52,69,255,0.72)",
              borderBottom: "2px solid rgba(52,69,255,0.72)",
              transform: "rotate(45deg)",
              background: "transparent",
            }}
          />
          <span
            style={{
              position: "absolute",
              right: -1,
              top: -5,
              width: 12,
              height: 12,
              borderRight: "2px solid rgba(26,26,26,0.22)",
              borderTop: "2px solid rgba(26,26,26,0.22)",
              transform: "rotate(45deg)",
              background: "transparent",
            }}
          />
        </div>
      </div>

      <div className="kody-spectrum-grid">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#3445ff", marginTop: 7, flexShrink: 0 }} />
              <p style={itemText}>Merchant fee awareness</p>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#3445ff", marginTop: 7, flexShrink: 0 }} />
              <p style={itemText}>Payer default to card or Apple Pay</p>
            </div>
          </div>
          <div
            style={{
              border: "1px dashed rgba(52,69,255,0.45)",
              borderRadius: 12,
              padding: "14px 16px",
              width: "fit-content",
              maxWidth: "100%",
            }}
          >
            <p style={{ ...captionText, color: "#3445ff", marginBottom: 4 }}>
              Opportunities
            </p>
            <p style={{ ...bodyStyle, fontSize: 14, lineHeight: 1.5 }}>
              Designed for
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(26,26,26,0.36)", marginTop: 7, flexShrink: 0 }} />
              <p style={itemText}>£40 minimum</p>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(26,26,26,0.36)", marginTop: 7, flexShrink: 0 }} />
              <p style={itemText}>No chargeback</p>
            </div>
          </div>
          <div
            style={{
              border: "1px dashed rgba(26,26,26,0.24)",
              borderRadius: 12,
              padding: "14px 16px",
              width: "fit-content",
              maxWidth: "100%",
            }}
          >
            <p style={{ ...captionText, color: "rgba(26,26,26,0.42)", marginBottom: 4 }}>
              Constraints
            </p>
            <p style={{ ...bodyStyle, fontSize: 14, lineHeight: 1.5 }}>
              Designed around
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BankSelectionApproaches() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 980,
        margin: "0 auto 48px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      {bankSelectionApproaches.map((item) => (
        <div
          key={item.label}
          className="bank-approach-row"
          style={{
            display: "grid",
            gridTemplateColumns: "220px minmax(0, 1fr)",
            gap: 48,
            alignItems: "center",
            padding: "28px 36px",
            borderRadius: 16,
            background: item.selected
              ? "rgba(76,175,80,0.08)"
              : item.muted
              ? "rgba(255,255,255,0.48)"
              : "rgba(255,255,255,0.55)",
            border: item.selected
              ? "1.5px solid rgba(76,175,80,0.34)"
              : "1px solid rgba(255,255,255,0.7)",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: 124,
              minHeight: 228,
              justifySelf: "center",
              borderRadius: 14,
              overflow: "hidden",
              background: "rgba(255,255,255,0.9)",
              boxShadow: "0 16px 28px rgba(26,26,26,0.07)",
              border: "1px solid rgba(26,26,26,0.06)",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={item.image}
              alt=""
              style={{
                width: "auto",
                height: item.imageHeight,
                maxWidth: "100%",
                display: "block",
              }}
            />
          </div>

          <div style={{ maxWidth: 430 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 14,
                flexWrap: "wrap",
              }}
            >
              <span style={{ ...labelStyle, marginBottom: 0 }}>
                {item.label}
              </span>
              {item.selected ? (
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#2e7d32",
                    background: "rgba(76,175,80,0.1)",
                    border: "1px solid rgba(76,175,80,0.24)",
                    borderRadius: 999,
                    padding: "4px 9px",
                    lineHeight: 1,
                  }}
                >
                  Selected
                </span>
              ) : null}
            </div>
            <h3
              style={{
                ...h3Style,
                fontSize: 18,
                fontWeight: 400,
                lineHeight: 1.35,
                marginBottom: 14,
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                ...bodyStyle,
                fontSize: 15,
                lineHeight: 1.7,
                color: "rgba(26,26,26,0.68)",
                maxWidth: 430,
              }}
            >
              {item.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function KodyPBBCaseB() {
  return (
    <>
      <style>{`
        .case-a-link {
          box-shadow: 0 2px 16px rgba(0,0,0,0.08);
          transition: background 0.2s, box-shadow 0.2s;
        }
        .case-a-link:hover {
          background: rgba(52,69,255,0.06) !important;
          box-shadow: 0 2px 16px rgba(0,0,0,0.08);
        }
        .kody-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          margin-bottom: 80px;
        }
        .kody-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        .kody-three-col {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
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
        .kody-overview-width {
          padding-left: 124px;
          padding-right: 124px;
        }
        .kody-scroll-x {
          overflow-x: auto;
        }
        .kody-spectrum-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          max-width: 860px;
          margin: 0 auto;
          justify-items: center;
        }
        .kody-scroll-x::-webkit-scrollbar { height: 4px; }
        .kody-scroll-x::-webkit-scrollbar-track { background: transparent; }
        .kody-scroll-x::-webkit-scrollbar-thumb { background: #A2A2A2; border-radius: 2px; }
        .kody-toc-link:hover {
          color: #1a1a1a !important;
          transform: translateX(2px);
        }
        .kody-toc-link {
          transition: transform 0.18s ease, color 0.25s;
        }
        @keyframes scroll-nudge {
          0%, 100% { transform: translateX(0); opacity: 0.5; }
          50% { transform: translateX(6px); opacity: 1; }
        }
        .scroll-hint-arrow {
          animation: scroll-nudge 1.6s ease-in-out infinite;
          display: inline-block;
        }
        @media (max-width: 900px) {
          .kody-hero-grid,
          .kody-two-col,
          .kody-three-col,
          .kody-spectrum-grid {
            grid-template-columns: 1fr;
          }
          .kody-hero-grid {
            gap: 40px;
            margin-bottom: 48px;
          }
          .kody-with-sidebar {
            flex-direction: column;
            padding: 0 24px;
          }
          .kody-sidebar-col {
            display: none;
          }
          .kody-content-col {
            width: 100%;
            max-width: none;
          }
          .kody-overview-width {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .bank-approach-row {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            padding: 32px 24px !important;
          }
        }
      `}</style>

      <Navbar />

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
                Pay by Bank in Pay by Link
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(15px, 1.5vw, 18px)",
                  lineHeight: 1.55,
                  color: "rgba(26,26,26,0.55)",
                  margin: "0 0 28px",
                }}
              >
                Designing Pay by Bank&apos;s integration into Kody&apos;s Pay by Link
                channel, designed for a merchant who does not know it saves money and a
                payer who never thinks to choose it.
              </p>
              <a
                href="/case-a"
                className="case-a-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  background: "#fff",
                  borderRadius: 16,
                  padding: "16px 20px",
                  textDecoration: "none",
                  maxWidth: 600,
                }}
              >
                <img
                  src="/images/kody-pbb/roadmap-mini.png"
                  alt="Case A cover"
                  style={{ width: 80, height: 56, objectFit: "cover", borderRadius: 10, flexShrink: 0, display: "block" }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#3445ff", display: "block", marginBottom: 4 }}>
                    Case A
                  </span>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, fontWeight: 600, color: "#1a1a1a", margin: 0, lineHeight: 1.4 }}>
                    Choosing the Right Channel to Grow Pay by Bank
                  </p>
                </div>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 18, color: "rgba(26,26,26,0.3)", flexShrink: 0 }}>→</span>
              </a>
            </div>
            <div>
              <img
                src="/images/kody-pbb/hero-app.png"
                alt="Kody Pay by Bank hero"
                style={{ width: "100%", display: "block", borderRadius: 14 }}
              />
            </div>
          </div>
        </div>

        <div style={{ background: "#fff", width: "100%" }}>
          <img
            src="/images/kody-pbb/head.png"
            alt="Kody Pay by Bank overview"
            style={{ width: "100%", display: "block" }}
          />
        </div>

        <div style={overviewWidth} className="kody-overview-width">
          <div style={{ paddingTop: 80, paddingBottom: sectionGap }}>
            <p style={{ ...bodyStyle, marginBottom: 16, maxWidth: "none" }}>
              This case covers the design work after{" "}
              <LinkWithImagePreview
                href="/case-a"
                label="Pay by Bank moved to the Pay by Link channel"
                previewSrc="/images/kody-pbb/roadmap-mini.png"
                previewAlt="Case A cover"
              />
              . The work was about integrating it into checkout so merchants
              would enable it and payers would actually choose it.
            </p>
            <p style={{ ...bodyStyle, marginBottom: 16, maxWidth: "none" }}>
              Two users defaulted away from Pay by Bank for different reasons.
              Merchants did not know it cut transaction fees by around 60%.
              Payers reached for card or Apple Pay out of habit, without
              considering it.
            </p>
            <p style={{ ...bodyStyle, maxWidth: "none" }}>
              I designed for both: surfacing the fee saving to merchants at the
              point of link creation, and shaping how Pay by Bank is presented
              and selected in the payer checkout, including a flow for selecting banks
              flow built around our Open Banking provider&apos;s constraints.
            </p>
          </div>
        </div>
      </section>

      <div className="kody-with-sidebar">
        <div className="kody-sidebar-col">
          <CaseBTOC />
        </div>

        <div className="kody-content-col">
          <section id="background" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>Background</h2>
            <p style={{ ...bodyStyle, marginBottom: 16 }}>
              Pay by Bank lets customers pay directly from their bank accounts,
              without using cards. It is a cost effective option for both
              consumers and businesses. Kody first brought this technology into
              the in person experience through its terminal product.
            </p>
            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              The terminal launch did not get good market feedback. Two months
              in, it was clear that Pay by Bank did not fit the busy offline
              checkout environment because it is a context sensitive payment method. I
              analysed the problem and identified Pay by Link as a payment
              channel better matched to PBB&apos;s strengths.
            </p>

            <img
              src="/images/kody-pbb/cold-start.png"
              alt="First version: Pay by Bank in person experience"
              style={imgStyle}
            />

            <div className="kody-two-col" style={{ marginTop: 48 }}>
              <NumberedItem
                index="P0 ITEM 01"
                title="Add Pay by Bank into Pay by Link"
                body="Bring PBB into the Pay by Link checkout as a new payment method."
              />
              <NumberedItem
                index="P0 ITEM 02"
                title="Expand available banks"
                body="Increase supported bank options in Pay by Bank from 9 to 64."
              />
            </div>
          </section>

          <section id="users" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>Who is the user?</h2>
            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              Link creation is manager-level work, and link payment happens
              between the payer and their bank.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <img
                src="/images/kody-pbb/User.png"
                alt="Pay by Link user groups"
                style={imgStyle}
              />
              <img
                src="/images/kody-pbb/Payment%20link%20flow.png"
                alt="Payment link flow"
                style={imgStyle}
              />
            </div>
          </section>

          <section id="opportunity" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>Finding and defining the opportunity</h2>
            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              Looking again at the interviews through the lens of Pay by Link
              surfaced four themes. I separated them with one question: which
              can design actually move?
            </p>

            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 18,
                paddingLeft: 22,
                margin: 0,
                maxWidth: 920,
              }}
            >
              <li style={{ ...bodyStyle, maxWidth: "none" }}>
                <strong style={{ color: "#1a1a1a" }}>
                  Merchants don&apos;t know Pay by Bank saves them money.
                </strong>{" "}
                The launch communication reached business owners, not the
                operation managers who actually create links.
              </li>
              <li style={{ ...bodyStyle, maxWidth: "none" }}>
                <strong style={{ color: "#1a1a1a" }}>
                  Payers default to card or Apple Pay.
                </strong>{" "}
                Familiar methods win when there is no reason to consider an
                alternative.
              </li>
              <li style={{ ...bodyStyle, maxWidth: "none" }}>
                <strong style={{ color: "#1a1a1a" }}>The GBP40 minimum.</strong>{" "}
                Merchants don&apos;t want it and don&apos;t fully understand it.
              </li>
              <li style={{ ...bodyStyle, maxWidth: "none" }}>
                <strong style={{ color: "#1a1a1a" }}>No chargeback.</strong>{" "}
                Unlike cards, Pay by Bank can&apos;t be reversed, which creates a
                potential trust concern for payers.
              </li>
            </ul>

            <OpportunitySpectrum />

            <div style={{ marginTop: 32 }}>
              <p style={{ ...bodyStyle, marginBottom: 16 }}>
                The first two are awareness and behaviour problems. Design can
                shift them, so they became my two opportunities.
              </p>
              <p style={bodyStyle}>
                The £40 minimum and the lack of chargeback are product and
                policy constraints. Design can&apos;t remove them at this stage.
              </p>
            </div>
          </section>

          <section id="merchant-awareness" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <span style={labelStyle}>Opportunity 1</span>
            <h2 style={h2Style}>Merchant fee saving awareness</h2>
            <p style={{ ...bodyStyle, marginBottom: 16 }}>
              Pay by Bank can save merchants around 60% in transaction fees by
              removing interchange fees and card scheme fees. Most merchants did
              not realise this.
            </p>
            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              Part of the reason was organisational. Manager levels differ
              across companies, and the first launch communication often reached
              only the business owner, not the payment link operators or
              managers who create links day to day.
            </p>

            <div style={blockquoteStyle}>
              <p style={blockquoteTextStyle}>
                &quot;I have no idea it can actually save money, and no one told me
                about this. If you told me, I would let my employee prompt this
                payment method, of course.&quot;
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: 14,
                  color: "rgba(26,26,26,0.45)",
                  margin: "14px 0 0",
                }}
              >
                Manager of a London restaurant
              </p>
            </div>

            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              Rather than putting all the effort into marketing, the opportunity
              was to make the saving visible at a moment when the merchant could
              act on it.
            </p>

            <img
              src="/images/kody-pbb/Four%20candidate%20places%20to%20surface%20Pay%20by%20Bank%20savings.png?v=20260525-2245"
              alt="Four candidate places to surface Pay by Bank savings"
              style={imgStyle}
            />

            <SoftCard style={{ marginTop: 48 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                <div>
                  <span style={labelStyle}>Beta decision</span>
                  <h3 style={h3Style}>Approximate saving at link creation</h3>
                  <p style={{ ...bodyStyle, fontSize: 15 }}>
                    To save front end resource and backend calculation work, I
                    chose to surface an approximate saving percentage at the point
                    of link creation. It informed the merchant without requiring a
                    full savings calculation system.
                  </p>
                </div>
                <div>
                  <h3 style={h3Style}>Reach the actual operators</h3>
                  <p style={{ ...bodyStyle, fontSize: 15 }}>
                    I proposed and helped build the launch email template and
                    Intercom message so managers creating payment links in Kody
                    Universe would receive the launch message in the right place.
                  </p>
                </div>
              </div>
            </SoftCard>
          </section>

          <section id="payer-choice" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <span style={labelStyle}>Opportunity 2</span>
            <h2 style={h2Style}>Earning the payer&apos;s choice, then their trust</h2>
            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              The opportunity was to design the two moments that decide whether
              a payer chooses Pay by Bank and completes it: the moment of choice
              on the landing screen, and the moment of finding their bank.
            </p>

            <h3 style={h3Style}>Moment 1: The landing screen</h3>
            <p style={{ ...bodyStyle, marginBottom: 16 }}>
              A Pay by Link page offers multiple payment methods. Payers follow
              muscle memory and reach for card or a digital wallet. UK consumer
              familiarity with the term &quot;Pay by Bank&quot; was cited as 38%, so
              unfamiliar wording pushed people back to methods they recognised.
            </p>
            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              I could not change Apple Pay and Google Pay buttons because they
              render as components defined by the platform. What I could control was
              how much visual weight the Pay by Bank block carried.
            </p>

            <img
              src="/images/kody-pbb/Three%20landing%20screen%20presentation%20options.png?v=20260525-2245"
              alt="Three landing screen presentation options"
              style={imgStyle}
            />

            <SoftCard style={{ marginTop: 32, marginBottom: 56 }}>
              <span style={labelStyle}>Decision</span>
              <p style={{ ...bodyStyle, color: "#1a1a1a", maxWidth: "none" }}>
                I chose the third approach: Pay by Bank selected by default and visually
                dominant, with card, Apple Pay, Google Pay, and digital wallets grouped
                into a secondary &quot;Card or QR payment&quot; block. For a beta that
                needed to prove the channel, a presentation with equal visual weight would
                likely have left Pay by Bank rarely chosen.
              </p>
            </SoftCard>

            <h3 style={h3Style}>Moment 2: Choosing a bank</h3>
            <p style={{ ...bodyStyle, marginBottom: 24 }}>
              Before designing the bank list, one decision came first: should
              bank selection be its own screen? I prototyped three simple
              approaches to feel the difference in flow.
            </p>

            <BankSelectionApproaches />

            <SoftCard style={{ marginBottom: 56 }}>
              <span style={labelStyle}>Decision</span>
              <p style={{ ...bodyStyle, color: "#1a1a1a", maxWidth: "none" }}>
                I chose the dedicated screen. Choosing a method and searching across more than 60 banks
                are different kinds of task; giving each its own screen keeps one
                from crowding the other.
              </p>
            </SoftCard>

            <SoftCard style={{ marginBottom: 56, overflow: "hidden" }}>
              <div
                className="kody-two-col"
                style={{ alignItems: "center", gap: 40 }}
              >
                <div>
                  <span style={labelStyle}>Provider constraint</span>
                  <h3 style={h3Style}>Yapily returns a flat variant list</h3>
                  <p style={{ ...bodyStyle, fontSize: 15 }}>
                    &quot;Monzo Personal&quot; and &quot;Monzo Business&quot; are separate entries.
                    Collapsing them into one entry per brand would need a
                    maintained mapping and ongoing upkeep that the beta timeline
                    did not allow.
                  </p>
                </div>
                <img
                  src="/images/kody-pbb/Yapily%20raw%20bank%20variant%20list.png"
                  alt="Yapily raw bank variant list"
                  style={{
                    width: "100%",
                    borderRadius: 12,
                    display: "block",
                  }}
                />
              </div>
            </SoftCard>

            <h3 style={h3Style}>Designing the list</h3>
            <p style={{ ...bodyStyle, marginBottom: 16 }}>
              I used the variant list directly: no aggregation and nothing to
              maintain. To make it usable, the 9 most used personal account
              variants were pinned to the top, with the rest in an alphabetical list
              below. Every row behaved the same way: tap a variant, it is
              selected.
            </p>
            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              Kody&apos;s transaction data showed 87% of Pay by Link payments came
              from merchant categories where payers are overwhelmingly
              individuals, so personal account variants were the pragmatic first
              priority.
            </p>

            <img
              src="/images/kody-pbb/Pinned%20popular%20banks%20and%20alphabetical%20list.png"
              alt="Pinned popular banks and alphabetical list"
              style={imgStyle}
            />

            <h3 style={{ ...h3Style, marginTop: 40 }}>
              Designing for the wrong choice
            </h3>
            <p style={{ ...bodyStyle, marginBottom: 16 }}>
              The flat list made one failure predictable: a payer choosing the
              wrong variant, such as personal instead of business. The cost of
              that is not one lost payment; it is a payer who walks away
              believing Pay by Bank does not work.
            </p>
            <p style={bodyStyle}>
              The error copy names a neutral mismatch and routes them straight
              back to the bank picker with Pay by Bank still selected. For
              payers who had already left, email and SMS bring them back to
              the same link, framed as finishing an open payment rather than
              retrying a failed one.
            </p>

            <div className="kody-scroll-x" style={{ marginTop: 32 }}>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <img
                  src="/images/kody-pbb/wrong-variant-error.png"
                  alt="Wrong variant error screen"
                  style={{ height: 420, width: "auto", borderRadius: 14, display: "block", flexShrink: 0 }}
                />
                <img
                  src="/images/kody-pbb/wrong-variant-pending.png"
                  alt="Wrong variant pending/recovery screen"
                  style={{ height: 420, width: "auto", borderRadius: 14, display: "block", flexShrink: 0 }}
                />
                <img
                  src="/images/kody-pbb/wrong-variant-email.png"
                  alt="Email and SMS for returning payer"
                  style={{ height: 420, width: "auto", borderRadius: 14, display: "block", flexShrink: 0 }}
                />
              </div>
            </div>
          </section>

          <section id="prototype" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>Rapid prototype with AI help, kept realistic for implementation</h2>
            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              The web payment link design was missing from the design library, so
              I started from the existing Pay by Link checkout HTML to generate
              the correct design file. I used Claude Code to create initial PBB
              flows on top of the current UI system, then iterated in Figma on
              hierarchy, nudges, and bank selection patterns.
            </p>

            <div className="kody-two-col">
              {[
                {
                  src: "/images/kody-solution/ideation-sketch-1.png",
                  alt: "Rapid ideation sketch 1",
                },
                {
                  src: "/images/kody-solution/ideation-sketch-2.png",
                  alt: "Rapid ideation sketch 2",
                },
              ].map((image) => (
                <div
                  key={image.src}
                  style={{
                    height: 360,
                    borderRadius: 14,
                    background: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </div>
              ))}
            </div>
          </section>

          <section id="final-design" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={{ ...h2Style, textAlign: "center" }}>Final design</h2>
            <p style={{ ...bodyStyle, marginBottom: 16, textAlign: "center" }}>
              Here is the full shipped flow, from a merchant creating a link to
              both sides seeing the payment settle.
            </p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 32, fontFamily: "var(--font-dm-sans)", fontSize: 13, color: "rgba(26,26,26,0.4)" }}>
              <span>scroll to explore</span>
              <span className="scroll-hint-arrow">→</span>
            </div>

            <div className="kody-scroll-x" style={{ marginBottom: 56 }}>
              <FinalDesignFlow />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
              <div>
                <h3 style={h3Style}>1. Select Pay by Bank by default and highlight fee saving for merchant understanding</h3>
                <p style={{ ...bodyStyle, marginBottom: 24 }}>
                  Pay by Bank is selected as one of the payment methods by
                  default, and the fee saving benefit is surfaced during payment
                  link creation.
                </p>
	                <div
	                  style={{
	                    background: "#fff",
	                    aspectRatio: "780 / 340",
	                    width: "100%",
	                    borderRadius: 20,
	                    overflow: "hidden",
	                    position: "relative",
	                  }}
	                >
	                  <div
	                    style={{
	                      position: "absolute",
	                      left: "-2.3%",
	                      top: 0,
	                      width: "72.2%",
	                      height: "100%",
	                      borderRadius: 10,
	                      overflow: "hidden",
	                    }}
	                  >
	                    <img
	                      alt=""
	                      style={{
	                        width: "100%",
	                        height: "100%",
	                        objectFit: "cover",
	                        objectPosition: "left top",
	                        display: "block",
	                      }}
	                      src="/images/kody-pbb/pay-bank-fee-saving-highlight.png?v=20260525-2356"
	                    />
	                  </div>
	                  <div style={{ position: "absolute", background: "rgba(243,210,210,0.3)", border: "1px solid #ff7e7e", height: "5%", left: "33.7%", top: "60.1%", width: "8%", borderRadius: 4 }} />
	                  <div style={{ position: "absolute", background: "rgba(243,210,210,0.3)", border: "1px solid #ff7e7e", height: "5.1%", left: "3.1%", top: "66.1%", width: "21.8%", borderRadius: 4 }} />
	                  <svg viewBox="0 0 780 340" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "visible" }}>
	                    <path d="M325,211 L517,211 L517,84 L552,84" stroke="#FF7E7E" strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeDasharray="4 4" fill="none" />
	                    <path d="M194,234 L194,252 L559,252" stroke="#FF7E7E" strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeDasharray="4 4" fill="none" />
	                  </svg>
	                  <p style={{ position: "absolute", fontFamily: "var(--font-dm-sans)", fontWeight: 400, lineHeight: "normal", left: "71.7%", color: "#595959", fontSize: 14, top: "19.4%", width: "27.1%", margin: 0 }}>
	                    Highlight fee savings to drive Pay by Bank adoption
	                  </p>
	                  <p style={{ position: "absolute", fontFamily: "var(--font-dm-sans)", fontWeight: 400, lineHeight: "normal", left: "72.3%", color: "#595959", fontSize: 14, top: "57.6%", width: "25.8%", margin: 0 }}>
	                    Automatically deselect Pay by Bank when eligibility requirements aren&apos;t met, such as payment below £40
	                  </p>
	                </div>
              </div>

              <div>
                <h3 style={h3Style}>2. Launch message through Intercom and email to reach fit merchant</h3>
                <p style={{ ...bodyStyle, marginBottom: 24 }}>
                  Intercom and email reach the managers who create payment links
                  inside Kody Universe, without requiring another in product
                  messaging system.
                </p>
                <div className="kody-two-col">
                  <div style={{ aspectRatio: "2880 / 2124", borderRadius: 14, overflow: "hidden", background: "#f5f7fb" }}>
                    <img
                      src="/images/kody-pbb/Intercom%20launch%20message.png"
                      alt="Intercom launch message"
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                  <div style={{ aspectRatio: "2880 / 2124", borderRadius: 14, overflow: "hidden", background: "#f5f7fb", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
                    <img
                      src="/images/kody-pbb/Launch%20email%20template.png?v=20260525-2049"
                      alt="Launch email template"
                      style={{ width: "auto", height: "100%", maxWidth: "100%", display: "block" }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 style={h3Style}>3. Remember the customer&apos;s previous bank</h3>
                <p style={{ ...bodyStyle, marginBottom: 24 }}>
                  Returning customers can reuse their previous bank selection,
                  reducing steps and making Pay by Bank feel faster on repeat
                  payments.
                </p>
                <div
                  style={{
                    background: "#fff",
                    aspectRatio: "1000 / 645",
                    width: "100%",
                    borderRadius: 20,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                    <img
                      src="/images/kody-pbb/previous-bank-first-time.png"
                      alt="First-time payer Pay by Bank selection"
	                      style={{
	                        position: "absolute",
                        left: "28.3%",
                        top: "12.4%",
                        width: "20.7%",
	                        height: "auto",
	                        display: "block",
	                      }}
                    />
                    <img
                      src="/images/kody-pbb/previous-bank-return-payer.png"
                      alt="Return payer previous bank selection"
	                      style={{
	                        position: "absolute",
                        left: "52.5%",
                        top: "12.4%",
                        width: "20.6%",
	                        height: "auto",
	                        display: "block",
	                      }}
                    />
                    <svg
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none",
                        overflow: "visible",
                      }}
                    >
                      <path
                        d="M23.8,48.5 L31.6,48.5"
                        stroke="#FF7E7E"
                        strokeWidth="1.5"
                        vectorEffect="non-scaling-stroke"
                        strokeDasharray="4 4"
                        fill="none"
                      />
                      <path
                        d="M71.5,54.3 L79.3,54.3"
                        stroke="#FF7E7E"
                        strokeWidth="1.5"
                        vectorEffect="non-scaling-stroke"
                        strokeDasharray="4 4"
                        fill="none"
                      />
                    </svg>
                    <p
                      style={{
                        position: "absolute",
                        fontFamily: "var(--font-dm-sans)",
                        fontWeight: 400,
                        lineHeight: "normal",
                        left: "5%",
	                        color: "#595959",
	                        fontSize: 14,
                        top: "40.8%",
                        width: "17.8%",
                        margin: 0,
                      }}
                    >
                      First-time payer: Pay by Bank is pre-selected and visually
                      led, with bank logos shown to build recognition
                    </p>
                    <p
                      style={{
                        position: "absolute",
                        fontFamily: "var(--font-dm-sans)",
                        fontWeight: 400,
                        lineHeight: "normal",
                        left: "80.3%",
	                        color: "#595959",
	                        fontSize: 14,
                        top: "48.5%",
                        width: "15.1%",
                        margin: 0,
                      }}
                    >
                      Return payer: their previous bank is pre-filled to speed
                      up Pay by Bank
                    </p>
                </div>
              </div>

              <div>
                <h3 style={h3Style}>4. Streamline flow to select banks and complete authorization</h3>
                <p style={{ ...bodyStyle, marginBottom: 24 }}>
                  The bank selection and Open Banking authorization steps are
                  consolidated into a single guided flow, reducing drop-off at
                  the most unfamiliar part of the checkout.
                </p>
                <div style={{
                  width: "100%",
                  borderRadius: 20,
                  overflow: "hidden",
                  background: "#fff",
                }}>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: "100%", height: "auto", display: "block" }}
                  >
                    <source src="/PBB%20flow.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              <div>
                <h3 style={h3Style}>5. Confirmation, status tracking, and refund</h3>
                <p style={{ ...bodyStyle, marginBottom: 24 }}>
                  Refunds are not automatic for Pay by Bank. We added a clear
                  explanation on the transaction details page so merchants
                  understand the refund model and can guide customers through
                  the correct next step.
                </p>
                {/* Canvas: 791×466 — all positions converted to % */}
                <div style={{
                  background: "#fff",
                  aspectRatio: "791 / 466",
                  width: "100%",
                  borderRadius: 20,
                  overflow: "hidden",
                  position: "relative",
                }}>
                  {/* Email document */}
                  <div style={{ position: "absolute", left: "18.21%", top: "18.24%", width: "31.10%", height: "78.76%", overflow: "hidden" }}>
                    <img alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} src="/images/kody-solution/step3-payment.png" />
                  </div>
                  {/* SMS thumbnail */}
                  <div style={{ position: "absolute", left: "25.41%", top: "13.52%", width: "21.62%", height: "13.52%", borderRadius: 10, overflow: "hidden" }}>
                    <img alt="" style={{ position: "absolute", height: "109.95%", left: 0, maxWidth: "none", top: "-0.21%", width: "135.09%", display: "block" }} src="/images/kody-solution/step3-frame1.png" />
                  </div>
                  {/* Kody Universe panel */}
                  <div style={{ position: "absolute", left: "56.01%", top: "13.52%", width: "30.09%", height: "80.04%", overflow: "hidden" }}>
                    <img alt="" style={{ position: "absolute", height: "100%", left: "-165.59%", maxWidth: "none", top: 0, width: "265.62%", display: "block" }} src="/images/kody-solution/step3-frame2.png" />
                  </div>
                  {/* For Merchant badge */}
                  <div style={{ position: "absolute", background: "#707070", display: "flex", alignItems: "center", justifyContent: "center", left: "56.01%", padding: "8px 20px", borderRadius: 8, top: "3.00%", width: "30.59%" }}>
                    <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 16, color: "#fff", margin: 0, whiteSpace: "nowrap" }}>For Merchant</p>
                  </div>
                  {/* For Customer badge */}
                  <div style={{ position: "absolute", background: "#ededed", display: "flex", alignItems: "center", justifyContent: "center", left: "18.21%", padding: "8px 20px", borderRadius: 8, top: "3.00%", width: "30.59%" }}>
                    <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 16, color: "#595959", margin: 0, whiteSpace: "nowrap" }}>For Customer</p>
                  </div>
                  {/* Text message label */}
                  <p style={{ position: "absolute", fontFamily: "var(--font-dm-sans)", fontWeight: 400, fontSize: 14, color: "#595959", left: "3.03%", top: "20.39%", width: "12.77%", margin: 0 }}>Text message</p>
                  {/* Email notification label */}
                  <p style={{ position: "absolute", fontFamily: "var(--font-dm-sans)", fontWeight: 400, fontSize: 14, color: "#595959", left: "3.03%", top: "60.30%", width: "12.77%", margin: 0 }}>Email notification</p>
                  {/* Email result label */}
                  <p style={{ position: "absolute", fontFamily: "var(--font-dm-sans)", fontWeight: 400, fontSize: 14, color: "#1a1a1a", left: "87.49%", top: "60.52%", margin: 0 }}>Email result</p>
                </div>
              </div>
            </div>
          </section>

          <section id="result" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <span style={labelStyle}>Result</span>
            <h2 style={h2Style}>Within one month of shifting focus to Pay by Link</h2>

            <div className="kody-two-col" style={{ marginBottom: 64 }}>
              <SoftCard style={{ padding: "36px 40px" }}>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 700, color: "#3445ff", margin: "0 0 8px", lineHeight: 1 }}>
                  120%
                </p>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, color: "rgba(26,26,26,0.65)", margin: 0, lineHeight: 1.5 }}>
                  relative uplift in Pay by Bank usage volume
                </p>
              </SoftCard>
              <SoftCard style={{ padding: "36px 40px" }}>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 700, color: "#3445ff", margin: "0 0 8px", lineHeight: 1 }}>
                  69%
                </p>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, color: "rgba(26,26,26,0.65)", margin: 0, lineHeight: 1.5 }}>
                  of all Pay by Bank transactions across Kody now come from Pay by Link
                </p>
              </SoftCard>
            </div>

            <img
              src="/images/kody-pbb/results-chart.png"
              alt="Results chart"
              style={{ ...imgStyle, marginBottom: 48 }}
            />

            <div className="kody-two-col">
              {/* What Worked */}
              <div>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 18, fontWeight: 700, color: "#1a1a1a", margin: "0 0 20px", display: "flex", alignItems: "center", gap: 8 }}>
                  <span>✅</span> What worked
                </p>
                <ul style={{ margin: 0, padding: "0 0 0 20px", display: "flex", flexDirection: "column", gap: 16 }}>
                  <li style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.65, color: "#1a1a1a" }}>
                    <strong>Channel fit confirmed.</strong> Pay by Link drove a 120% uplift in Pay by Bank transaction volume within the first month. Pay by Link now accounts for 69% of all Pay by Bank transactions across Kody.
                  </li>
                  <li style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.65, color: "#1a1a1a" }}>
                    <strong>Fee saving reached the right people.</strong> 87% of Kody Universe users who received the launch message opened it — confirming the Intercom notification reached operation managers, not just business owners.
                  </li>
                  <li style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.65, color: "#1a1a1a" }}>
                    <strong>Usability held up under testing.</strong> 8 internal participants rated the flow 4.7/5 across web and mobile, completing both the merchant and payer flows without guidance.
                  </li>
                </ul>
              </div>

              {/* What Can Be Improved */}
              <div>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 18, fontWeight: 700, color: "#1a1a1a", margin: "0 0 20px", display: "flex", alignItems: "center", gap: 8 }}>
                  <span>💪</span> What can be improved
                </p>
                <ul style={{ margin: 0, padding: "0 0 0 20px", display: "flex", flexDirection: "column", gap: 16 }}>
                  <li style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.65, color: "#1a1a1a" }}>
                    <strong>Desktop payer experience is incomplete.</strong> The flow was optimised for mobile — payers opening a link on desktop face an unguided mobile handoff for bank authentication.
                  </li>
                  <li style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.65, color: "#1a1a1a" }}>
                    <strong>Business account payers are under-served.</strong> Personal variants are pinned at the top, which helps most payers but increases wrong-pick risk for business account holders.
                  </li>
                  <li style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.65, color: "#1a1a1a" }}>
                    <strong>Payer-side experience data is missing.</strong> 120% uplift confirms selection — not satisfaction. Drop-off rate, repeat use, and support tickets would complete the picture.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="next-steps" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>Next steps</h2>
            <div className="kody-three-col">
              <NumberedItem
                index="01"
                title="Dashboard widget and savings report"
                body="Use reporting to repeatedly show the comparison between card and PBB transaction fees, building merchant trust over time."
              />
              <NumberedItem
                index="02"
                title="Aggregate the bank list by brand"
                body="Collapse the raw 60+ variant list into one entry per bank, then move variant selection into the bank app."
              />
              <NumberedItem
                index="03"
                title="Let adoption compound across channels"
                body="Merchants who learn the value of Pay by Bank through Pay by Link do not unlearn it, making later channel expansion easier."
              />
            </div>
          </section>
        </div>
      </div>

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
