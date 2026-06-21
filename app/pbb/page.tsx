import Navbar from "@/components/Navbar";
import FinalDesignFlow from "@/components/FinalDesignFlow";
import PbbTOC from "@/components/PbbTOC";
import RoadmapToggle from "@/components/RoadmapToggle";

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
    body: "Fewest steps. But it flattens two decisions of very different weight — choosing a method and searching across more than 60 banks — onto one screen, competing for attention.",
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
    body: "One more step. But each screen asks for one kind of decision: pick a method, then pick a bank.",
    image: "/images/kody-pbb/Bank%20selection%20as%20its%20own%20dedicated%20screen.png?v=20260525-2255",
    imageHeight: 190,
    muted: true,
    selected: true,
  },
];

const terminalUserSummary = [
  {
    role: "Merchant",
    emoji: "⚠️",
    point: "Invisible transaction fee saving",
    detail:
      "Even Pay by Bank can help save around 60% transaction fee, few business owners are aware of this benefit",
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

function FailsafeEmailDesign() {
  const smallText: React.CSSProperties = {
    fontFamily: "var(--font-dm-sans)",
    color: "#1a1a1a",
    margin: 0,
  };

  const stepRow = (
    index: string,
    text: string,
    icon: React.ReactNode
  ) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "2.2%",
        background: "#f3f6fb",
        borderRadius: "2.6%",
        padding: "2.7% 3.2%",
      }}
    >
      <span
        style={{
          width: "6.2%",
          aspectRatio: "1",
          borderRadius: "50%",
          background: "#1769d8",
          color: "#fff",
          fontFamily: "var(--font-dm-sans)",
          fontSize: 7,
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {index}
      </span>
      <p style={{ ...smallText, fontSize: 7, lineHeight: 1.35, color: "#0a3777", flex: 1 }}>
        {text}
      </p>
      <span style={{ width: 12, color: "#1769d8", display: "flex", justifyContent: "center" }}>
        {icon}
      </span>
    </div>
  );

  return (
    <div
      style={{
        background: "#efedf1",
        aspectRatio: "1000 / 754",
        width: "100%",
        borderRadius: 20,
        overflow: "hidden",
        position: "relative",
        marginTop: 32,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "16.9%",
          top: "7.8%",
          width: "36.1%",
          height: "5.0%",
          background: "#f9f9f9",
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ ...smallText, fontSize: 14, textAlign: "center" }}>Failsafe Email</p>
      </div>

      <div
        style={{
          position: "absolute",
          left: "16.9%",
          top: "17.2%",
          width: "36.1%",
          height: "69.2%",
          background: "#f6f8fb",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", left: "6.7%", top: "5.4%", display: "flex", alignItems: "center", gap: 6 }}>
          <span
            style={{
              width: 20,
              height: 20,
              position: "relative",
              display: "inline-block",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 1,
                top: 10,
                width: 17,
                height: 4,
                borderBottom: "4px solid #1769d8",
                borderLeft: "4px solid #1769d8",
                transform: "skew(-24deg)",
              }}
            />
            <span
              style={{
                position: "absolute",
                left: 9,
                top: 0,
                width: 4,
                height: 21,
                background: "#1769d8",
                transform: "skew(-24deg)",
              }}
            />
          </span>
          <span style={{ ...smallText, fontSize: 20, fontWeight: 700 }}>Kody</span>
        </div>

        <div
          style={{
            position: "absolute",
            left: "6.7%",
            top: "14.0%",
            width: "86.3%",
            height: "71.0%",
            background: "#fff",
            borderRadius: 10,
            padding: "4.4% 3.2%",
            boxSizing: "border-box",
          }}
        >
          <p style={{ ...smallText, fontSize: 7, lineHeight: 1.4, marginBottom: "4.4%" }}>Hi James,</p>
          <p
            style={{
              ...smallText,
              fontSize: 7,
              fontWeight: 700,
              lineHeight: 1.4,
              marginBottom: "0.8%",
              position: "relative",
              zIndex: 1,
            }}
          >
            Your previous payment attempt was still open.
          </p>
          <a
            href="#"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: 7,
              color: "#1769d8",
              display: "block",
              marginBottom: "4.0%",
              textDecoration: "underline",
            }}
          >
            http://erikodkkbody.com
          </a>
          <p style={{ ...smallText, fontSize: 7, lineHeight: 1.4, width: "90%", marginBottom: "5.2%" }}>
            {"This can happen if the selected bank account could not be verified, or if the account balance changed before the process was completed."}
          </p>

          <p style={{ ...smallText, fontSize: 9, fontWeight: 700, marginBottom: "2.6%" }}>What should I do?</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: "5.6%" }}>
            {stepRow(
              "1",
              "Confirm your selected bank account status",
              <svg viewBox="0 0 14 14" width="12" height="12" aria-hidden="true">
                <path d="M4 2.5h4.7L11 4.8v6.7H4z" fill="none" stroke="currentColor" strokeWidth="1.4" />
                <path d="M8.5 2.5v2.6H11" fill="none" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            )}
            {stepRow(
              "2",
              "Continue with payment using the selected bank",
              <svg viewBox="0 0 14 14" width="12" height="12" aria-hidden="true">
                <rect x="2" y="4" width="10" height="7" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
                <path d="M4 4V2.8h6V4" fill="none" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="7" cy="7.5" r="1.2" fill="currentColor" />
              </svg>
            )}
            {stepRow(
              "3",
              "After payment is complete, please return to [store name] and make sure you see the payment success page.",
              <svg viewBox="0 0 14 14" width="12" height="12" aria-hidden="true">
                <circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" strokeWidth="1.4" />
                <path d="M4.6 7.1 6.2 8.7 9.6 5.4" fill="none" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            )}
          </div>

          <p style={{ ...smallText, fontSize: 9, fontWeight: 700, marginBottom: "2.0%" }}>Ready to pay?</p>
          <button
            style={{
              border: "none",
              background: "#1769d8",
              color: "#fff",
              borderRadius: 4,
              padding: "3.0% 5.2%",
              fontFamily: "var(--font-dm-sans)",
              fontSize: 8,
              fontWeight: 700,
              marginBottom: "4.8%",
            }}
          >
            Pay now
          </button>
          <p style={{ ...smallText, fontSize: 7, lineHeight: 1.45, marginBottom: "3.0%" }}>
            If you have any questions or need further assistance, please feel free to{" "}
            <a href="#" style={{ color: "#1769d8" }}>contact us</a>.
          </p>
          <p style={{ ...smallText, fontSize: 7, lineHeight: 1.4, marginBottom: "3.0%" }}>Thank you for choosing Kody!</p>
          <p style={{ ...smallText, fontSize: 7, lineHeight: 1.4 }}>The Kody Team</p>
        </div>

        <p
          style={{
            ...smallText,
            position: "absolute",
            left: "11.4%",
            bottom: "7.8%",
            fontSize: 5.5,
            color: "#4d6c99",
            width: "74%",
            textAlign: "center",
          }}
        >
          KodyPay Ltd - Unit 42 24-28 St Leonard Road, Windsor, Berkshire, England, SL4 3BB
        </p>
        <p
          style={{
            ...smallText,
            position: "absolute",
            left: "43.6%",
            bottom: "4.9%",
            fontSize: 5.5,
            color: "#1769d8",
            textDecoration: "underline",
          }}
        >
          Unsubscribe
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          left: "19.6%",
          top: "31.0%",
          width: "20.9%",
          height: "2.25%",
          border: "1.5px solid #ff5f5f",
          borderRadius: 4,
          boxSizing: "border-box",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "40.5%",
          top: "32.2%",
          width: "19.8%",
          borderTop: "1.5px dashed #ff5f5f",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "60.3%",
          top: "26.8%",
          width: "29.1%",
          minHeight: "13.1%",
          background: "#fff",
          borderRadius: 10,
          padding: "1.0%",
          boxSizing: "border-box",
        }}
      >
        <span
          style={{
            display: "inline-block",
            background: "#f8e7e7",
            color: "#8f5d5d",
            borderRadius: 4,
            padding: "0.8% 2.4%",
            fontFamily: "var(--font-dm-sans)",
            fontSize: 10,
            marginBottom: "3.0%",
          }}
        >
          Copy & framing
        </span>
        <p style={{ ...smallText, fontSize: 16, lineHeight: 1.28, color: "#595959" }}>
          Using less tense copy — &apos;your payment is still open&apos; — to make clear this is not the payer&apos;s fault or a Pay by Bank failure
        </p>
      </div>
    </div>
  );
}

function ReflectionBlock({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <SoftCard style={{ maxWidth: 900 }}>
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
      <h3 style={{ ...h3Style, fontSize: 20, marginBottom: 22 }}>{title}</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>{children}</div>
    </SoftCard>
  );
}

function ReflectionPhase({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginTop: 8 }}>
      <p
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: 14,
          fontWeight: 700,
          color: "#1a1a1a",
          margin: "0 0 10px",
        }}
      >
        {title}
      </p>
      {children}
    </div>
  );
}

function ReflectionBullets({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: 0, padding: "0 0 0 20px", display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((item) => (
        <li key={item} style={{ ...bodyStyle, fontSize: 15, maxWidth: 820 }}>
          {item}
        </li>
      ))}
    </ul>
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
              ? "rgba(99,225,158,0.22)"
              : item.muted
              ? "rgba(255,255,255,0.48)"
              : "rgba(255,255,255,0.55)",
            border: item.selected
              ? "none"
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

export default function Pbb() {
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
        .fee-saving-annotation {
          display: flex;
          border-radius: 20px;
          overflow: hidden;
          background: #efeef1;
          align-items: center;
          position: relative;
        }
        .fee-saving-image-panel {
          flex: 0 0 62%;
          position: relative;
          aspect-ratio: 1090 / 680;
        }
        .fee-saving-copy {
          flex: 1;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          justify-content: center;
          position: relative;
          z-index: 2;
        }
        .wrong-context-evidence-grid {
          display: flex;
          flex-direction: column;
          gap: 32px;
          margin-top: 32px;
        }
        .terminal-summary-card {
          background: rgba(52,69,255,0.06);
          border: 1px solid rgba(52,69,255,0.15);
          border-radius: 14px;
          padding: 28px 36px;
          box-sizing: border-box;
          width: 100%;
        }
        .terminal-summary-users {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }
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
        .kody-matrix-cell-dim {
          background: #f3f3f3;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .kody-matrix-cell-content { background: transparent; }
        .overview-summary-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 40px;
        }
        .overview-summary-label {
          font-family: var(--font-dm-sans);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(26,26,26,0.42);
          margin: 0 0 18px;
        }
        .overview-summary-text {
          font-family: var(--font-dm-sans);
          font-size: 16px;
          line-height: 1.6;
          letter-spacing: 0;
          color: #1a1a1a;
          margin: 0;
        }
        .roadmap-draft-scale {
          zoom: 0.7;
          width: fit-content;
          max-width: 100%;
          margin: 0 auto;
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
          .fee-saving-annotation {
            flex-direction: column;
          }
          .fee-saving-image-panel {
            flex: none;
            width: 100%;
          }
          .fee-saving-copy {
            width: 100%;
            box-sizing: border-box;
            padding: 24px !important;
          }
          .fee-saving-connectors {
            display: none;
          }
          .terminal-summary-users {
            grid-template-columns: 1fr;
          }
          .overview-summary-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .roadmap-draft-scale {
            zoom: 1;
            width: 100%;
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
                Growing Pay by Bank by Moving It to the Right Payment Context
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
                How I helped Kody pivot Pay by Bank from a busy terminal
                checkout into Pay by Link, then designed the merchant and payer
                experience that drove measurable adoption.
              </p>
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
            src="/images/kody-pbb/head.webp"
            alt="Kody Pay by Bank overview"
            style={{ width: "100%", display: "block" }}
          />
        </div>

        <div style={overviewWidth} className="kody-overview-width">
          <div style={{ paddingTop: 80, paddingBottom: sectionGap }}>
            <div className="overview-summary-grid">
              <div>
                <p className="overview-summary-label">My role</p>
                <p className="overview-summary-text">
                  Leading research, strategy pivot, and end-to-end Pay by Link
                  beta design. Worked with 1 Product, Head of Product Design,
                  Tech Lead, and 3 developers.
                </p>
              </div>
              <div>
                <p className="overview-summary-label">Goal</p>
                <p className="overview-summary-text">
                  Make Pay by Bank understandable, visible, and easy to
                  complete inside the Pay by Link journey.
                </p>
              </div>
              <div>
                <p className="overview-summary-label">Outcome</p>
                <p className="overview-summary-text">
                  Pivoted the roadmap from terminal bank expansion to Pay by
                  Link, then designed the merchant and payer beta flow.
                </p>
              </div>
              <div>
                <p className="overview-summary-label">Impact</p>
                <p className="overview-summary-text">
                  Within one month, Pay by Bank usage volume grew{" "}
                  <strong style={{ fontWeight: 700 }}>120%</strong>, and{" "}
                  <strong style={{ fontWeight: 700 }}>69%</strong> of all Pay by
                  Bank transactions across Kody came from Pay by Link.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="kody-with-sidebar">
        <div className="kody-sidebar-col">
          <PbbTOC />
        </div>

        <div className="kody-content-col">
          <section id="original-brief" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>The original brief: grow adoption by adding more banks</h2>
            <p style={{ ...bodyStyle, marginBottom: 16 }}>
              Pay by Bank (PBB) is Kody&apos;s Open Banking payment method. It
              launched on in-person terminals with 9 bank options, prompting
              customers to scan a QR code and pay in their bank app on their
              mobile device (typically for transactions above £40).
            </p>
            <p style={{ ...bodyStyle, marginBottom: 16 }}>
              However, after the first version launched in one and a half
              months, the numbers were flat. Adoption was low, and the data
              volume was too small to tell us why.
            </p>
            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              When I joined, the brief was already in place: integrate 64 more
              banks into Pay by Bank, and lift Pay by Bank adoption by 30% this
              quarter. Five weeks of development.
            </p>

            <div className="kody-two-col" style={{ marginBottom: 64 }}>
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

            <img
              src="/images/kody-pbb/cold-start.png"
              alt="First version: Pay by Bank in person experience"
              style={imgStyle}
            />
          </section>

          <section id="wrong-context" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>Research showed the terminal was the wrong context</h2>
            <p style={{ ...bodyStyle, marginBottom: 16 }}>
              I ran rapid qualitative interviews with merchants, frontline
              staff, and payers to understand why adoption had stalled. The
              signal was consistent: Pay by Bank was not losing because it
              lacked more banks. It was losing because it asked people to add
              steps in a checkout moment where speed, familiarity, and public
              confidence mattered most.
            </p>
            <div className="wrong-context-evidence-grid">
              <div
                style={{
                  borderRadius: 14,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/images/kody-pbb/research-insights.png"
                  alt="Merchant visit record"
                  style={{ ...imgStyle, width: "50%" }}
                />
              </div>
            </div>

            <div className="kody-scroll-x" style={{ marginTop: 48, marginBottom: 48 }}>
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

            <p style={{ ...bodyStyle, marginTop: 40, marginBottom: 24 }}>
              During the interviews, the most frequent challenge from merchants
              and customers was:
            </p>

            <div style={blockquoteStyle}>
              <p style={blockquoteTextStyle}>
                &quot;Why would I ever do this instead of just tapping my card?&quot;
              </p>
            </div>

            <div className="wrong-context-evidence-grid">
              <div className="terminal-summary-card">
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 17, fontWeight: 600, color: "#1a1a1a", margin: "0 0 10px" }}>
                  What does PAY BY BANK on terminal mean to users?
                </p>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.65, color: "#1a1a1a", margin: "0 0 22px" }}>
                  At the offline payment context, card payment is the default —
                  fastest, most familiar, most reliable method. PBB never
                  offers users more than card does.
                </p>
                <div className="terminal-summary-users">
                  {terminalUserSummary.map(({ role, emoji, point, detail, avatar }) => (
                    <div
                      key={role}
                      style={{
                        background: "rgba(255,255,255,0.78)",
                        borderRadius: 16,
                        padding: "20px",
                        minHeight: 190,
                        minWidth: 0,
                      }}
                    >
                      <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 18 }}>
                        <img src={avatar} alt={role} style={{ width: 36, height: 36, borderRadius: "50%", flexShrink: 0, objectFit: "cover", display: "block" }} />
                        <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, fontWeight: 600, color: "#1a1a1a", lineHeight: 1.2 }}>{role}</span>
                      </div>
                      <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ fontSize: 16, lineHeight: 1.4, flexShrink: 0 }}>{emoji}</span>
                        <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, fontWeight: 600, color: "#1a1a1a", margin: 0, lineHeight: 1.5 }}>
                          {point}
                          {detail && <><br /><span style={{ fontWeight: 400, color: "rgba(26,26,26,0.62)" }}>{detail}</span></>}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p style={{ ...bodyStyle, color: "#1a1a1a", maxWidth: "none", marginTop: 40 }}>
              The product-strategy problem shifted from improving Pay by Bank on
              terminal to{" "}
              <strong style={{ fontWeight: 700 }}>
                finding a payment context where it could create net upside for
                all users in the transaction.
              </strong>
            </p>
          </section>

          <section id="choosing-pbl" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>Choosing Pay by Link as the right channel</h2>
            <p style={{ ...bodyStyle, marginBottom: 28 }}>
              I aligned with the CTO, Head of Product Design, Tech Lead, and PM
              around three criteria for a better Pay by Bank context: low
              urgency, typical order value above £40, and a self-controlled
              environment where the payer is not dependent on a venue&apos;s signal
              or staff explanation.{" "}
              <strong style={{ fontWeight: 700 }}>
                Pay by Link emerged as the primary fit for Pay by Bank.
              </strong>
            </p>

            <div className="kody-scroll-x" style={{ marginBottom: 48 }}>
              <table style={{ width: "100%", minWidth: 640, borderCollapse: "collapse", fontFamily: "var(--font-dm-sans)" }}>
                <thead>
                  <tr style={{ background: "#e8e8e8" }}>
                    {["Channel", "Time pressure low?", "AOV ≥ £40 likely?", "Self-controlled environment?", "Verdict"].map((col) => (
                      <th key={col} style={{ padding: "16px 20px", fontSize: 14, fontWeight: 500, color: "#1a1a1a", textAlign: col === "Channel" ? "left" : "center", border: "1px solid #d4d4d4", lineHeight: 1.4 }}>
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Terminal", "❌", "⚠️", "❌", "Current failure mode", false],
                    ["Pay by Link", "✅", "✅", "✅", "Match, primary fit", true],
                    ["Online checkout", "✅", "⚠️ varies", "✅", "Secondary fit, low Kody coverage", false],
                    ["QR payment at table", "❌", "❌", "⚠️", "Time-pressure issue + low AOV", false],
                  ].map(([channel, pressure, aov, controlled, verdict, highlight]) => (
                    <tr key={String(channel)} style={{ background: highlight ? "#deeaf7" : "#fff" }}>
                      {[channel, pressure, aov, controlled, verdict].map((value, i) => (
                        <td key={i} style={{ padding: "16px 20px", fontSize: i > 0 && i < 4 ? 16 : 14, color: "#1a1a1a", fontWeight: highlight && i === 0 ? 600 : 400, textAlign: i === 0 ? "left" : "center", border: "1px solid #d4d4d4", lineHeight: 1.4 }}>
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: 48 }}>
              <span style={labelStyle}>Roadmap updated</span>
              <p style={{ ...bodyStyle, marginBottom: 48 }}>
                The pivot was successfully reflected on the product roadmap.
                Instead of having &ldquo;expand bank options&rdquo; as the P0 task,
                the P0 task became &ldquo;explore integrating PBB into Pay by Link
                and help business owners understand the benefit of PBB.&rdquo; The
                new P1 requirement became deprioritising PBB on terminal for
                target users — for a better terminal experience and brand
                reputation.
              </p>

              <div className="roadmap-draft-scale">
                <RoadmapToggle swapPhaseColors />
              </div>
            </div>
          </section>

          <section id="design-challenge" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>From strategy decision to design brief</h2>
            <p style={{ ...bodyStyle, marginBottom: 20 }}>
              Once Pay by Link became the chosen channel, the project moved from
              a strategy question to a product design question: how do we make
              Pay by Bank visible, understandable, and easy to complete inside
              Pay by Link?
            </p>
            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              This changed the user problem. On terminal, the blocker was
              context fit. In Pay by Link, the blocker became behaviour change:{" "}
              <strong style={{ fontWeight: 700, color: "#1a1a1a" }}>
                merchants needed a reason to enable Pay by Bank, and payers
                needed a reason to choose and complete it.
              </strong>
            </p>

            <h2 style={{ ...h2Style, marginTop: 56 }}>What is Pay by Link, and who are the users?</h2>
            <p style={{ ...bodyStyle, marginBottom: 32 }}>
              Pay by Link lets a merchant create a payment link and send it to
              a customer to complete remotely. The flow has two sides: the
              operation manager creates the link, and the payer opens the link
              and chooses how to pay.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <img
                src="/images/kody-pbb/Payment%20link%20flow.png"
                alt="Payment link flow"
                style={imgStyle}
              />
              <img
                src="/images/kody-pbb/user-barriers.png"
                alt="Pay by Link users and adoption barriers"
                style={imgStyle}
              />
            </div>

            <h2 style={{ ...h2Style, marginTop: 56 }}>Design challenge</h2>
            <p style={{ ...bodyStyle, color: "#1a1a1a", maxWidth: "none" }}>
              Make Pay by Bank worth enabling for operation managers, and worth
              choosing and completing for payers inside the Pay by Link journey.
            </p>
          </section>

          <section id="merchant-awareness" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <span style={labelStyle}>Design for merchants</span>
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
                    To save front-end resource and backend calculation work, I
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
            <span style={labelStyle}>Design for payers</span>
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

            {/* Error EOP canvas */}
            <div style={{ background: "#efeef1", aspectRatio: "1000 / 760", width: "100%", borderRadius: 20, overflow: "hidden", position: "relative", marginTop: 32 }}>

              {/* Column labels */}
              <div style={{ position: "absolute", left: "13.4%", top: "8.6%", width: "17.3%", background: "#f9f9f9", borderRadius: 10, padding: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "#1a1a1a", margin: 0, textAlign: "center" }}>Original error EOP</p>
              </div>
              <div style={{ position: "absolute", left: "47.9%", top: "8.6%", width: "39.1%", background: "#f9f9f9", borderRadius: 10, padding: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "#1a1a1a", margin: 0, textAlign: "center" }}>PBB Error EOP</p>
              </div>

              {/* Description text */}
              <p style={{ position: "absolute", left: "13.4%", top: "16.7%", width: "17.3%", fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "#1a1a1a", margin: 0, lineHeight: 1.5 }}>
                All error scenarios led to this general error page
              </p>
              <p style={{ position: "absolute", left: "47.9%", top: "16.7%", width: "39.1%", fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "#1a1a1a", margin: 0, lineHeight: 1.5 }}>
                Instead of a single generic error page that gave users no useful information, I worked with engineering to identify two scenarios that happen most often — and designed for each separately
              </p>

              {/* Phone mockups */}
              <img src="/images/kody-pbb/error-original-eop.png" alt="Original error end-of-payment screen"
                style={{ position: "absolute", left: "13.4%", top: "31.7%", width: "17.3%", height: "auto", display: "block" }} />
              <img src="/images/kody-pbb/error-pbb-pending.png" alt="PBB error: time lag pending screen"
                style={{ position: "absolute", left: "47.9%", top: "31.7%", width: "17.3%", height: "auto", display: "block" }} />
              <img src="/images/kody-pbb/error-pbb-wrong-account.png" alt="PBB error: wrong account type screen"
                style={{ position: "absolute", left: "68.4%", top: "31.7%", width: "17.3%", height: "auto", display: "block" }} />

              {/* Captions below PBB phones */}
              <div style={{ position: "absolute", left: "47.9%", top: "85.4%", width: "17.3%", background: "#f9f9f9", borderRadius: 10, padding: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 10, color: "#1a1a1a", margin: 0, textAlign: "center", lineHeight: 1.4 }}>Time lag between the API and the bank&apos;s response</p>
              </div>
              <div style={{ position: "absolute", left: "69.0%", top: "85.4%", width: "16.7%", background: "#f9f9f9", borderRadius: 10, padding: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 10, color: "#1a1a1a", margin: 0, textAlign: "center", lineHeight: 1.4 }}>Authorisation with wrong account type</p>
              </div>
            </div>

            <FailsafeEmailDesign />
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
                <div className="fee-saving-annotation">
                  {/* SVG connecting lines — spans full container */}
                  <svg className="fee-saving-connectors" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1, overflow: "visible" }}>
                    {/* Save badge → Card 1 */}
                    <path d="M39,63.2 L56,63.2 L56,40 L68,40" stroke="#FF7E7E" strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeDasharray="4 4" fill="none" />
                    {/* Eligibility copy → Card 2 */}
                    <path d="M25,66.3 L25,78 L68,78" stroke="#FF7E7E" strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeDasharray="4 4" fill="none" />
                  </svg>

                  {/* Left: screenshot with red highlights */}
                  <div className="fee-saving-image-panel">
                    <img
                      alt=""
                      src="/images/kody-pbb/pay-bank-fee-saving-highlight.png"
                      style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                    />
                    {/* Red highlight: "Save 60% in fees" badge */}
                    <div style={{ position: "absolute", background: "rgba(243,210,210,0.3)", border: "1.5px solid #ff7e7e", borderRadius: 8, left: "50.9%", top: "58.4%", width: "11.6%", height: "6.9%" }} />
                    {/* Red highlight: "Only available for immediate payment above £40" */}
                    <div style={{ position: "absolute", background: "rgba(243,210,210,0.3)", border: "1.5px solid #ff7e7e", borderRadius: 8, left: "7.3%", top: "62.2%", width: "33.6%", height: "5.2%" }} />
                  </div>

                  {/* Right: annotation cards */}
                  <div className="fee-saving-copy">
                    <div style={{ background: "#fff", borderRadius: 10, padding: "12px 14px", display: "flex", flexDirection: "column", gap: 6 }}>
                      <span style={{ background: "#fde4e4", borderRadius: 4, padding: "3px 8px", fontFamily: "var(--font-dm-sans)", fontSize: 10, color: "#595959", alignSelf: "flex-start", lineHeight: 1.6 }}>
                        Copy &amp; framing
                      </span>
                      <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "#595959", margin: 0, lineHeight: 1.5 }}>
                        &ldquo;Save 60% in fees&rdquo; — Highlight fee savings to drive Pay by Bank adoption
                      </p>
                    </div>
                    <div style={{ background: "#fff", borderRadius: 10, padding: "12px 14px", display: "flex", flexDirection: "column", gap: 6 }}>
                      <span style={{ background: "#fde4fa", borderRadius: 4, padding: "3px 8px", fontFamily: "var(--font-dm-sans)", fontSize: 10, color: "#595959", alignSelf: "flex-start", lineHeight: 1.6 }}>
                        Interaction model
                      </span>
                      <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "#595959", margin: 0, lineHeight: 1.5 }}>
                        Auto-deselect Pay by Bank when eligibility requirements aren&apos;t met (e.g., payment below £40) — showing it deselected, with the reason, teaches them the rule
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={h3Style}>2. Launch message through Intercom and email to reach the right merchants</h3>
                <p style={{ ...bodyStyle, marginBottom: 24 }}>
                  Intercom (inside Kody Universe) and email together targeted
                  operation managers — the people who actually create links —
                  rather than relying on business owners to pass information
                  down. The two channels carry the same information in different
                  shapes: Intercom leads with a visual hero for fast scanning;
                  the email is structured for closer reading.
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
                    background: "#efeef1",
                    aspectRatio: "1000 / 645",
                    width: "100%",
                    borderRadius: 20,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  {/* Left phone — first-time payer */}
                  <img
                    src="/images/kody-pbb/pbb-first-time-payer.png"
                    alt="First-time payer Pay by Bank selection"
                    style={{ position: "absolute", left: "26.4%", top: "12.8%", width: "21.5%", height: "auto", display: "block" }}
                  />
                  {/* Right phone — returning payer */}
                  <img
                    src="/images/kody-pbb/pbb-return-payer.png"
                    alt="Returning payer previous bank pre-filled"
                    style={{ position: "absolute", left: "51.5%", top: "12.8%", width: "21.4%", height: "auto", display: "block" }}
                  />

                  {/* SVG dashed lines */}
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "visible" }}>
                    <path d="M21.6,50.2 L26.4,50.2" stroke="#FF7E7E" strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeDasharray="4 4" fill="none" />
                    <path d="M72.9,56.2 L79.3,56.2" stroke="#FF7E7E" strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeDasharray="4 4" fill="none" />
                  </svg>

                  {/* Left annotation card — first-time payer */}
                  <div style={{ position: "absolute", left: "1.1%", top: "42.2%", width: "20.5%", background: "#fff", borderRadius: 10, padding: "10px", display: "flex", flexDirection: "column", gap: 4 }}>
                    <span style={{ background: "#fde4fa", borderRadius: 4, padding: "4px", fontFamily: "var(--font-dm-sans)", fontSize: 10, color: "#595959", alignSelf: "flex-start", lineHeight: "normal", whiteSpace: "nowrap" }}>
                      Interaction model
                    </span>
                    <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "#1a1a1a", margin: 0, lineHeight: 1.4 }}>
                      <strong>First-time payer</strong>: Pay by Bank is pre-selected and visually led, with bank logos shown to build recognition
                    </p>
                  </div>

                  {/* Right annotation card — returning payer */}
                  <div style={{ position: "absolute", left: "79.3%", top: "50.2%", width: "17.7%", background: "#fff", borderRadius: 10, padding: "10px", display: "flex", flexDirection: "column", gap: 4 }}>
                    <span style={{ background: "#fde4fa", borderRadius: 4, padding: "4px", fontFamily: "var(--font-dm-sans)", fontSize: 10, color: "#595959", alignSelf: "flex-start", lineHeight: "normal", whiteSpace: "nowrap" }}>
                      Interaction model
                    </span>
                    <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "#1a1a1a", margin: 0, lineHeight: 1.4 }}>
                      <strong>Returning payer</strong>: their previous bank is pre-filled to speed up Pay by Bank
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={h3Style}>4. Streamline flow to select banks and complete authorisation</h3>
                <p style={{ ...bodyStyle, marginBottom: 24 }}>
                  The bank selection and Open Banking authorisation steps are
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

                {/* Bank selection annotation canvas */}
                <div style={{ background: "#efeef1", aspectRatio: "1000 / 640", width: "100%", borderRadius: 20, overflow: "hidden", position: "relative", marginTop: 20 }}>
                  {/* Phone mockup — centered horizontally */}
                  <img
                    src="/images/kody-pbb/bank-selection-screen.png"
                    alt="Bank selection screen"
                    style={{ position: "absolute", left: "22.4%", top: "14.4%", width: "20.7%", height: "auto", display: "block" }}
                  />

                  {/* SVG dashed lines */}
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "visible" }}>
                    <path d="M40.6,47.5 L48.5,47.5" stroke="#FF7E7E" strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeDasharray="4 4" fill="none" />
                    <path d="M40.6,74.4 L48.5,74.4" stroke="#FF7E7E" strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeDasharray="4 4" fill="none" />
                  </svg>

                  {/* Card 1 — pinned popular banks */}
                  <div style={{ position: "absolute", left: "48.5%", top: "37.0%", width: "29.1%", background: "#fff", borderRadius: 10, padding: "10px", display: "flex", flexDirection: "column", gap: 4 }}>
                    <span style={{ background: "#e4f2fd", borderRadius: 4, padding: "4px", fontFamily: "var(--font-dm-sans)", fontSize: 10, color: "#595959", alignSelf: "flex-start", lineHeight: "normal", whiteSpace: "nowrap" }}>
                      Visual hierarchy
                    </span>
                    <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "#595959", margin: 0, lineHeight: 1.4 }}>
                      The 9 pinned banks at the top are personal variants, covering the majority of payers without changing the interaction model.
                    </p>
                  </div>

                  {/* Card 2 — alphabetical rest */}
                  <div style={{ position: "absolute", left: "48.5%", top: "67.3%", width: "29.1%", background: "#fff", borderRadius: 10, padding: "10px", display: "flex", flexDirection: "column", gap: 4 }}>
                    <span style={{ background: "#e4f2fd", borderRadius: 4, padding: "4px", fontFamily: "var(--font-dm-sans)", fontSize: 10, color: "#595959", alignSelf: "flex-start", lineHeight: "normal", whiteSpace: "nowrap" }}>
                      Visual hierarchy
                    </span>
                    <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "#595959", margin: 0, lineHeight: 1.4 }}>
                      The rest of the bank options are listed in alphabetical order.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={h3Style}>5. Confirmation, status tracking, and refund handling</h3>
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

          <section id="reflection" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
            {divider}
            <h2 style={h2Style}>Reflection</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <p style={{ ...bodyStyle, maxWidth: 900 }}>
                After completing the beta version, I looked back on the project and realised there are still several areas that need improvement.
              </p>

              <ReflectionBlock index="01" title="Building the Trust Layer Behind Default Pre-selection">
                <p style={{ ...bodyStyle, maxWidth: 820 }}>
                  The primary goal of the beta was to validate whether Pay by Bank could drive transaction volume. To achieve this, we shifted the payment journey from terminal-based payments to Pay by Link and introduced Pay by Bank as the pre-selected payment method.
                </p>
                <p style={{ ...bodyStyle, maxWidth: 820 }}>
                  While this decision successfully increased adoption, it also amplified one of the key concerns associated with Open Banking payments: the lack of chargeback protection.
                </p>
                <p style={{ ...bodyStyle, maxWidth: 820 }}>
                  Although we do not yet have sufficient data to quantify the impact of this trust gap, it remains an important risk that should be addressed in a safe and transparent way.
                </p>
                <ReflectionPhase title="Near-term">
                  <ReflectionBullets
                    items={[
                      'Make the "no automatic refund" limitation visible at the point of payment selection, rather than burying it within terms and conditions.',
                      "Clearly communicate refund expectations before payment is completed.",
                    ]}
                  />
                </ReflectionPhase>
                <ReflectionPhase title="Medium-term">
                  <ReflectionBullets
                    items={[
                      "Allow payers who require a refund to contact the merchant directly through the payment link experience, rather than searching for contact details independently.",
                      "Introduce merchant verification signals during checkout to reassure users that the merchant is verified by Kody.",
                    ]}
                  />
                </ReflectionPhase>
                <ReflectionPhase title="Long-term">
                  <ReflectionBullets
                    items={[
                      "Integrate direct refund capabilities as Open Banking refund APIs mature and become more widely supported.",
                      "Remove the limitation through product capability rather than relying solely on communication.",
                    ]}
                  />
                </ReflectionPhase>
                <p style={{ ...bodyStyle, maxWidth: 820 }}>
                  The pre-selection strategy was the right decision for a beta focused on proving adoption. Building trust is what will make the approach sustainable in the long term.
                </p>
              </ReflectionBlock>

              <ReflectionBlock index="02" title="Strengthening the Merchant Fee-Saving Mindset">
                <p style={{ ...bodyStyle, maxWidth: 820 }}>
                  Several interventions in the beta contributed to Pay by Bank adoption, including the payment-link builder indicators, Intercom messages, and merchant email campaigns.
                </p>
                <p style={{ ...bodyStyle, maxWidth: 820 }}>
                  However, there is still uncertainty around whether merchants truly understand and internalise the value proposition of Pay by Bank as a cost-saving payment method.
                </p>
                <p style={{ ...bodyStyle, maxWidth: 820 }}>
                  To validate this assumption, I would conduct qualitative research to better understand merchant perceptions and identify whether cost savings are influencing payment method adoption decisions.
                </p>
                <ReflectionPhase title="Near-term">
                  <ReflectionBullets
                    items={[
                      "Include transaction fee comparisons between payment methods in settlement reports.",
                      "Gradually surface cost-saving insights within the Kody Universe dashboard.",
                    ]}
                  />
                </ReflectionPhase>
                <ReflectionPhase title="Long-term">
                  <p style={{ ...bodyStyle, fontSize: 15, maxWidth: 820 }}>
                    The ultimate goal is not simply to communicate lower fees, but to establish a merchant mindset where Pay by Bank becomes the preferred payment method for eligible transactions.
                  </p>
                </ReflectionPhase>
                <p style={{ ...bodyStyle, maxWidth: 820 }}>
                  Beyond improving awareness, expanding Pay by Bank into additional payment channels remains an important growth opportunity once the technical limitations of terminal-based Pay by Bank experiences are resolved.
                </p>
              </ReflectionBlock>
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
