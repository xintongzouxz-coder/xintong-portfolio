import Navbar from "@/components/Navbar";

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

const tocItems = [
  { href: "#overview", label: "OVERVIEW" },
  { href: "#background", label: "BACKGROUND" },
  { href: "#users", label: "USERS" },
  { href: "#opportunity", label: "OPPORTUNITY" },
  { href: "#merchant-awareness", label: "MERCHANT AWARENESS" },
  { href: "#payer-choice", label: "PAYER CHOICE" },
  { href: "#prototype", label: "RAPID PROTOTYPE" },
  { href: "#final-design", label: "FINAL DESIGN" },
  { href: "#result", label: "RESULT" },
  { href: "#next-steps", label: "NEXT STEPS" },
];

const opportunityCards = [
  {
    title: "Merchant fee awareness",
    body: "Merchants did not know Pay by Bank could reduce transaction fees by around 60%.",
    type: "opportunity",
  },
  {
    title: "Payer default to card / Apple Pay",
    body: "Payers were not rejecting Pay by Bank. They were defaulting past it.",
    type: "opportunity",
  },
  {
    title: "GBP40 minimum",
    body: "A product and policy constraint that design could explain but not remove in beta.",
    type: "constraint",
  },
  {
    title: "No chargeback",
    body: "A trust concern to design around, not a behaviour problem that UI alone could solve.",
    type: "constraint",
  },
];

const bankSelectionTradeoffs = [
  {
    approach: "Bank list inside the Pay by Bank card",
    tradeoff:
      "Fewest steps, but it puts payment-method choice and a 60+ bank search on one screen.",
  },
  {
    approach: "Popular banks on the first screen, rest on a second screen",
    tradeoff:
      "Fast for common banks, but selection is split across two places and still needs a variant step.",
  },
  {
    approach: "Bank selection as its own dedicated screen",
    tradeoff:
      "One more step, but each screen asks for one clear decision: choose a method, then choose a bank.",
  },
];

function CaseBToc() {
  return (
    <div style={{ fontFamily: "var(--font-dm-sans)" }}>
      <div style={{ marginBottom: 40 }}>
        <span
          style={{
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#aaaaaa",
            display: "block",
            marginBottom: 10,
          }}
        >
          Case Study
        </span>
        <p
          style={{
            fontSize: 15,
            fontWeight: 500,
            lineHeight: 1.4,
            color: "#1a1a1a",
            margin: 0,
          }}
        >
          Pay by Bank in Pay by Link
        </p>
      </div>

      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            left: 5,
            top: 8,
            bottom: 18,
            width: 1,
            background: "#E0E0E0",
            pointerEvents: "none",
          }}
        />
        {tocItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="kody-toc-link"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "0 0 24px",
              color: "#A2A2A2",
            }}
          >
            <span
              style={{
                width: 11,
                height: 11,
                borderRadius: "50%",
                background: "#A2A2A2",
                flexShrink: 0,
                position: "relative",
                zIndex: 1,
              }}
            />
            <span style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.2 }}>
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

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

export default function KodyPBBCaseB() {
  return (
    <>
      <style>{`
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
        @media (max-width: 900px) {
          .kody-hero-grid,
          .kody-two-col,
          .kody-three-col {
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
                channel - for a merchant who does not know it saves money, and a
                payer who never thinks to choose it.
              </p>
              <SoftCard style={{ padding: "22px 24px" }}>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: "rgba(26,26,26,0.72)",
                    margin: 0,
                  }}
                >
                  <strong style={{ color: "#1a1a1a" }}>Role:</strong> Sole
                  designer · Team of four (design lead, tech lead, engineer,
                  me) · No PM
                </p>
              </SoftCard>
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
            src="/images/kody-pbb/product-overview.png"
            alt="Kody product overview"
            style={{ width: "100%", display: "block" }}
          />
        </div>

        <div style={overviewWidth} className="kody-overview-width">
          <div style={{ paddingTop: 80, paddingBottom: sectionGap }}>
            <p style={{ ...bodyStyle, marginBottom: 16, maxWidth: "none" }}>
              This case covers the design work after Pay by Bank moved to the
              Pay by Link channel - integrating it into checkout so merchants
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
              and selected in the payer checkout, including a bank-selection
              flow built around our Open Banking provider&apos;s constraints.
            </p>
          </div>
        </div>
      </section>

      <div className="kody-with-sidebar">
        <div className="kody-sidebar-col">
          <CaseBToc />
        </div>

        <div className="kody-content-col">
          <section id="background" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>Background</h2>
            <p style={{ ...bodyStyle, marginBottom: 16 }}>
              Pay by Bank lets customers pay directly from their bank accounts,
              without using cards. It is a cost-effective option for both
              consumers and businesses. Kody first brought this technology into
              the in-person experience through its terminal product.
            </p>
            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              The terminal launch did not get good market feedback. Two months
              in, it was clear that Pay by Bank - a context-sensitive payment
              method - did not fit the busy offline checkout environment. I
              analysed the problem and identified Pay by Link as a payment
              channel better matched to PBB&apos;s strengths.
            </p>

            <Placeholder label="First version: Pay by Bank in-person experience" />

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
              Unlike the terminal project, the Pay by Link channel has only two
              user groups. Frontline staff, a key user group in the terminal
              project, are effectively absent from this flow. Link creation is
              manager-level work, and link payment happens between the payer and
              their bank.
            </p>

            <div className="kody-two-col" style={{ marginBottom: 40 }}>
              <SoftCard>
                <span style={labelStyle}>Merchant-side user</span>
                <h3 style={h3Style}>Manager or payment link operator</h3>
                <p style={{ ...bodyStyle, fontSize: 15 }}>
                  Creates links in Kody Universe and decides whether Pay by Bank
                  is included in the link.
                </p>
              </SoftCard>
              <SoftCard>
                <span style={labelStyle}>Payer-side user</span>
                <h3 style={h3Style}>Customer paying through a link</h3>
                <p style={{ ...bodyStyle, fontSize: 15 }}>
                  Opens the link, chooses a payment method, selects a bank, and
                  authorises payment in their banking app.
                </p>
              </SoftCard>
            </div>

            <div className="kody-two-col">
              <Placeholder label="Merchant-side user diagram" />
              <Placeholder label="Payer-side user diagram" />
            </div>
          </section>

          <section id="opportunity" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>Finding and defining the opportunity</h2>
            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              Re-examining the interviews for Pay by Link-specific problems
              surfaced four themes. I separated them with one question: which
              can design actually move?
            </p>

            <div className="kody-two-col" style={{ marginBottom: 40 }}>
              <SoftCard style={{ borderLeft: "3px solid #3445ff" }}>
                <span style={labelStyle}>Design can solve it</span>
                <h3 style={h3Style}>Opportunities</h3>
                <p style={bodyStyle}>
                  Merchant awareness and payer default behaviour can be shifted
                  through product presentation, timing, and communication.
                </p>
              </SoftCard>
              <SoftCard style={{ borderLeft: "3px solid rgba(26,26,26,0.24)" }}>
                <span style={{ ...labelStyle, color: "rgba(26,26,26,0.45)" }}>
                  Design cannot remove it
                </span>
                <h3 style={h3Style}>Constraints</h3>
                <p style={bodyStyle}>
                  The GBP40 minimum and no-chargeback model had to be designed
                  around because they were product and policy constraints.
                </p>
              </SoftCard>
            </div>

            <div className="kody-two-col">
              {opportunityCards.map((item) => (
                <SoftCard key={item.title}>
                  <span
                    style={{
                      ...labelStyle,
                      color: item.type === "opportunity" ? "#3445ff" : "rgba(26,26,26,0.45)",
                    }}
                  >
                    {item.type === "opportunity" ? "Opportunity" : "Constraint"}
                  </span>
                  <h3 style={h3Style}>{item.title}</h3>
                  <p style={{ ...bodyStyle, fontSize: 15 }}>{item.body}</p>
                </SoftCard>
              ))}
            </div>
          </section>

          <section id="merchant-awareness" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <span style={labelStyle}>Opportunity 1</span>
            <h2 style={h2Style}>Merchant fee-saving awareness</h2>
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

            <Placeholder label="Four candidate places to surface Pay by Bank savings" />

            <div className="kody-two-col" style={{ marginTop: 48 }}>
              <SoftCard>
                <span style={labelStyle}>Beta decision</span>
                <h3 style={h3Style}>Approximate saving at link creation</h3>
                <p style={{ ...bodyStyle, fontSize: 15 }}>
                  To save front-end resource and backend calculation work, I
                  chose to surface an approximate saving percentage at the point
                  of link creation. It informed the merchant without requiring a
                  full savings-calculation system.
                </p>
              </SoftCard>
              <SoftCard>
                <span style={labelStyle}>Launch communication</span>
                <h3 style={h3Style}>Reach the actual operators</h3>
                <p style={{ ...bodyStyle, fontSize: 15 }}>
                  I proposed and helped build the launch email template and
                  Intercom message so managers creating payment links in Kody
                  Universe would receive the launch message in the right place.
                </p>
              </SoftCard>
            </div>

            <div className="kody-two-col" style={{ marginTop: 32 }}>
              <Placeholder label="Percentage label in payment link creation" />
              <Placeholder label="Launch email and Intercom message" />
            </div>
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

            <h3 style={h3Style}>Moment 1 - The landing screen</h3>
            <p style={{ ...bodyStyle, marginBottom: 16 }}>
              A Pay by Link page offers multiple payment methods. Payers follow
              muscle memory and reach for card or e-wallet. UK consumer
              familiarity with the term &quot;Pay by Bank&quot; was cited as 38%, so
              unfamiliar wording pushed people back to methods they recognised.
            </p>
            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              I could not change Apple Pay and Google Pay buttons because they
              render as platform-defined components. What I could control was
              how much visual weight the Pay by Bank block carried.
            </p>

            <Placeholder label="Three landing-screen presentation options" />

            <SoftCard style={{ marginTop: 32, marginBottom: 56 }}>
              <span style={labelStyle}>Decision</span>
              <p style={{ ...bodyStyle, color: "#1a1a1a", maxWidth: "none" }}>
                I chose the third approach: Pay by Bank pre-selected and visually
                dominant, with card, Apple Pay, Google Pay, and e-wallet grouped
                into a secondary &quot;Card or QR payment&quot; block. For a beta that
                needed to prove the channel, an equal-weight presentation would
                likely have left Pay by Bank rarely chosen.
              </p>
            </SoftCard>

            <h3 style={h3Style}>Moment 2 - Choosing a bank</h3>
            <p style={{ ...bodyStyle, marginBottom: 24 }}>
              Before designing the bank list, one decision came first: should
              bank selection be its own screen? I prototyped three low-fidelity
              approaches to feel the difference in flow.
            </p>

            <div className="kody-three-col" style={{ marginBottom: 40 }}>
              {bankSelectionTradeoffs.map((item, index) => (
                <SoftCard key={item.approach}>
                  <span style={labelStyle}>Approach 0{index + 1}</span>
                  <h3 style={h3Style}>{item.approach}</h3>
                  <p style={{ ...bodyStyle, fontSize: 15 }}>{item.tradeoff}</p>
                </SoftCard>
              ))}
            </div>

            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              I chose the dedicated screen. A method choice and a 60-bank search
              are different kinds of task; giving each its own screen keeps one
              from crowding the other.
            </p>

            <div className="kody-two-col" style={{ marginBottom: 56 }}>
              <SoftCard>
                <span style={labelStyle}>Provider constraint</span>
                <h3 style={h3Style}>Yapily returns a flat variant list</h3>
                <p style={{ ...bodyStyle, fontSize: 15 }}>
                  &quot;Monzo Personal&quot; and &quot;Monzo Business&quot; are separate entries.
                  Collapsing them into one entry per brand would need a
                  maintained mapping and ongoing upkeep that the beta timeline
                  did not allow.
                </p>
              </SoftCard>
              <Placeholder label="Yapily raw bank variant list" />
            </div>

            <h3 style={h3Style}>Designing the list</h3>
            <p style={{ ...bodyStyle, marginBottom: 16 }}>
              I used the variant list directly: no aggregation and nothing to
              maintain. To make it usable, the 9 most-used personal-account
              variants were pinned to the top, with the rest in an A-Z list
              below. Every row behaved the same way: tap a variant, it is
              selected.
            </p>
            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              Kody&apos;s transaction data showed 87% of Pay by Link payments came
              from merchant categories where payers are overwhelmingly
              individuals, so personal-account variants were the pragmatic first
              priority.
            </p>

            <Placeholder label="Pinned popular banks and A-Z list" />

            <SoftCard style={{ marginTop: 32 }}>
              <span style={labelStyle}>Failure recovery</span>
              <h3 style={h3Style}>Designing for the wrong choice</h3>
              <p style={{ ...bodyStyle, fontSize: 15, marginBottom: 16 }}>
                The flat list made one failure predictable: a payer choosing the
                wrong variant, such as personal instead of business. The cost of
                that is not one lost payment; it is a payer who walks away
                believing Pay by Bank does not work.
              </p>
              <p style={{ ...bodyStyle, fontSize: 15 }}>
                The error copy names a neutral mismatch and routes them straight
                back to the bank picker with Pay by Bank still selected. For
                payers who had already left, email and SMS bring them back to
                the same link, framed as finishing an open payment rather than
                retrying a failed one.
              </p>
            </SoftCard>

            <div className="kody-two-col" style={{ marginTop: 32 }}>
              <Placeholder label="Wrong-variant recovery flow" />
              <Placeholder label="Email and SMS return-to-payment messages" />
            </div>
          </section>

          <section id="prototype" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>Rapid prototype, kept implementation-realistic</h2>
            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              The web payment link design was missing from the design library, so
              I started from the existing Pay by Link checkout HTML to generate
              the correct design file. I used Claude Code to create initial PBB
              flows on top of the current UI system, then iterated in Figma on
              hierarchy, nudges, and bank selection patterns.
            </p>

            <div className="kody-two-col">
              <Placeholder label="Rapid ideation sketch 1" />
              <Placeholder label="Rapid ideation sketch 2" />
            </div>
          </section>

          <section id="final-design" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>Final design</h2>
            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              Here is the full shipped flow, from a merchant creating a link to
              both sides seeing the payment settle.
            </p>

            <div className="kody-scroll-x" style={{ marginBottom: 56 }}>
              <div style={{ minWidth: 920 }}>
                <Placeholder label="Release design scroll - full shipped flow" aspect="18 / 8" />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
              <div>
                <h3 style={h3Style}>1. Default-select Pay by Bank and highlight fee saving</h3>
                <p style={{ ...bodyStyle, marginBottom: 24 }}>
                  Pay by Bank is selected as one of the payment methods by
                  default, and the fee-saving benefit is surfaced during payment
                  link creation.
                </p>
                <Placeholder label="Pay by Bank default selection and fee-saving highlight" />
              </div>

              <div>
                <h3 style={h3Style}>2. Launch message through Intercom and email</h3>
                <p style={{ ...bodyStyle, marginBottom: 24 }}>
                  Intercom and email reach the managers who create payment links
                  inside Kody Universe, without requiring another in-product
                  messaging system.
                </p>
                <div className="kody-two-col">
                  <Placeholder label="Intercom launch message" />
                  <Placeholder label="Launch email template" />
                </div>
              </div>

              <div>
                <h3 style={h3Style}>3. Remember the customer&apos;s previous bank</h3>
                <p style={{ ...bodyStyle, marginBottom: 24 }}>
                  Returning customers can reuse their previous bank selection,
                  reducing steps and making Pay by Bank feel faster on repeat
                  payments.
                </p>
                <Placeholder label="Remember previous bank option" />
              </div>
            </div>
          </section>

          <section id="result" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <span style={labelStyle}>Result</span>
            <h2 style={h2Style}>Within one month of shifting focus to Pay by Link</h2>

            <div className="kody-two-col" style={{ marginBottom: 64 }}>
              <SoftCard style={{ padding: "36px 40px" }}>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(40px, 5vw, 64px)",
                    fontWeight: 700,
                    color: "#3445ff",
                    margin: "0 0 8px",
                    lineHeight: 1,
                  }}
                >
                  120%
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: 15,
                    color: "rgba(26,26,26,0.65)",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  relative uplift in Pay by Bank usage volume
                </p>
              </SoftCard>
              <SoftCard
                style={{
                  padding: "36px 40px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: 17,
                    lineHeight: 1.6,
                    color: "#1a1a1a",
                    margin: 0,
                  }}
                >
                  Increased share of wallet for Pay by Bank in eligible
                  transactions.
                </p>
              </SoftCard>
            </div>

            <img
              src="/images/kody-pbb/results-chart.png"
              alt="Results chart"
              style={imgStyle}
            />
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
