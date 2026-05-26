const BASE = "/images/kody-pbb/final-flow";

const col: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 40,
  alignItems: "center",
  flexShrink: 0,
};

const caption: React.CSSProperties = {
  background: "#f9f9f9",
  borderRadius: 10,
  padding: 10,
  textAlign: "center",
  fontFamily: "var(--font-dm-sans)",
  fontSize: 16,
  fontWeight: 400,
  color: "#000",
  lineHeight: "normal",
  boxSizing: "border-box",
};

function PhoneFrame({ src, alt, imgWidth, imgHeight }: {
  src: string; alt: string; imgWidth: number; imgHeight: number;
}) {
  const pad = 10;
  const outerR = 36;
  const innerR = outerR - pad;
  return (
    <div style={{ position: "relative", flexShrink: 0 }}>
      <div style={{
        width: imgWidth + pad * 2,
        height: imgHeight + pad * 2,
        borderRadius: outerR,
        background: "#1c1c1e",
        padding: pad,
        boxSizing: "border-box",
        boxShadow: "0 12px 40px rgba(0,0,0,0.28), inset 0 0 0 1px rgba(255,255,255,0.10)",
      }}>
        <div style={{ width: "100%", height: "100%", borderRadius: innerR, overflow: "hidden" }}>
          <img src={src} alt={alt} style={{ width: imgWidth, height: imgHeight, display: "block" }} />
        </div>
      </div>
      {/* Volume up */}
      <div style={{ position: "absolute", left: -3, top: 72, width: 3, height: 24, background: "#3a3a3c", borderRadius: "2px 0 0 2px" }} />
      {/* Volume down */}
      <div style={{ position: "absolute", left: -3, top: 104, width: 3, height: 24, background: "#3a3a3c", borderRadius: "0 2px 2px 0" }} />
      {/* Power button */}
      <div style={{ position: "absolute", right: -3, top: 88, width: 3, height: 48, background: "#3a3a3c", borderRadius: "0 2px 2px 0" }} />
    </div>
  );
}

function BrowserFrame({ src, alt, width, height, url }: {
  src: string; alt: string; width: number; height: number; url: string;
}) {
  return (
    <div style={{
      width,
      borderRadius: 10,
      overflow: "hidden",
      boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
      border: "1px solid rgba(0,0,0,0.08)",
      flexShrink: 0,
    }}>
      {/* Browser chrome */}
      <div style={{
        background: "#EBEBEB",
        height: 36,
        display: "flex",
        alignItems: "center",
        padding: "0 12px",
        gap: 10,
        flexShrink: 0,
      }}>
        <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FF5F56" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FEBC2E" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28C840" }} />
        </div>
        <div style={{
          flex: 1,
          height: 20,
          borderRadius: 4,
          background: "#fff",
          display: "flex",
          alignItems: "center",
          paddingLeft: 8,
          fontSize: 11,
          color: "rgba(0,0,0,0.4)",
          fontFamily: "var(--font-dm-sans)",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}>
          {url}
        </div>
      </div>
      <img src={src} alt={alt} style={{ width, height, display: "block" }} />
    </div>
  );
}

export default function FinalDesignFlow() {
  return (
    <div style={{ display: "flex", gap: 60, alignItems: "flex-start" }}>

      {/* 1. Merchant creates payment link */}
      <div style={col}>
        <BrowserFrame
          src={`${BASE}/merchant-create-link.png`}
          alt="Merchant creates a payment link"
          width={766} height={531}
          url="kodyuniverse.com/payments/new"
        />
        <div style={{ ...caption, width: 766 }}>
          Merchant creates a payment link for an amount above £40
        </div>
      </div>

      {/* 2. Payer receives link, opens, selects Pay by Bank and bank */}
      <div style={col}>
        <div style={{ display: "flex", gap: 20, alignItems: "center", flexShrink: 0 }}>
          <PhoneFrame src={`${BASE}/payer-log-in.png`} alt="Payer receives link" imgWidth={246} imgHeight={533} />
          <PhoneFrame src={`${BASE}/payer-kody-3.png`} alt="Payer opens checkout" imgWidth={238} imgHeight={533} />
          <PhoneFrame src={`${BASE}/payer-kody-23.png`} alt="Payer selects bank" imgWidth={242} imgHeight={533} />
        </div>
        {/* caption width = sum of framed widths + gaps: (266+258+262) + 2×20 */}
        <div style={{ ...caption, width: 826 }}>
          Payer receives the link by email or SMS, opens it, chooses Pay by Bank, and selects their bank
        </div>
      </div>

      {/* 3. Connect to bank app */}
      <div style={{ ...col, alignItems: "center" }}>
        <PhoneFrame src={`${BASE}/bank-connect.png`} alt="Connect to bank app" imgWidth={247} imgHeight={533} />
        <div style={{ ...caption, width: 267 }}>
          Connect to the bank app
        </div>
      </div>

      {/* 4. Payment confirmed */}
      <div style={{ ...col, alignItems: "center" }}>
        <PhoneFrame src={`${BASE}/payment-confirmed.png`} alt="Payment confirmed" imgWidth={240} imgHeight={533} />
        <div style={{ ...caption, width: 260 }}>
          Payment completed — the payer sees confirmation
        </div>
      </div>

      {/* 5. Digital receipt by SMS and email */}
      <div style={col}>
        <div style={{ display: "flex", gap: 20, alignItems: "center", flexShrink: 0 }}>
          {/* SMS receipt thumbnail — clipped to 240×95 */}
          <div style={{ width: 240, height: 95, position: "relative", overflow: "hidden", flexShrink: 0 }}>
            <img
              src={`${BASE}/receipt-sms.png`}
              alt="SMS receipt"
              style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "131.95%", maxWidth: "none" }}
            />
          </div>
          <BrowserFrame
            src={`${BASE}/receipt-email.png`}
            alt="Email receipt"
            width={372} height={533}
            url="mail.google.com"
          />
        </div>
        <div style={{ ...caption, width: 632 }}>
          Payer also receives a digital receipt by SMS and email
        </div>
      </div>

      {/* 6. Merchant tracks in Kody Universe */}
      <div style={col}>
        <div style={{ display: "flex", gap: 20, alignItems: "flex-start", flexShrink: 0 }}>
          <BrowserFrame
            src={`${BASE}/link-details.png`}
            alt="Link details"
            width={542} height={533}
            url="kodyuniverse.com/payments/links/overview"
          />
          <BrowserFrame
            src={`${BASE}/kody-universe.png`}
            alt="Kody Universe dashboard"
            width={904} height={533}
            url="kodyuniverse.com/sales"
          />
        </div>
        <div style={{ ...caption, width: 1466 }}>
          {`Merchant can track the payment link's status in Kody Universe`}
        </div>
      </div>

    </div>
  );
}
