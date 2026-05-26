const assets = {
  vector242:  "/images/kody-pbb/roadmap/vector242.svg",
  vector241:  "/images/kody-pbb/roadmap/vector241.svg",
  frame85:    "/images/kody-pbb/roadmap/frame85.svg",
  frame86:    "/images/kody-pbb/roadmap/frame86.svg",
  blueDot:    "/images/kody-pbb/roadmap/blue-dot.svg",
  pinkDot:    "/images/kody-pbb/roadmap/pink-dot.svg",
};

const CANVAS_W = 3320;
const CANVAS_H = 3203;

export default function OriginalRoadmapDiagram() {
  const axisLabel: React.CSSProperties = {
    fontFamily: "var(--font-dm-sans)",
    fontWeight: 700,
    fontSize: 96,
    color: "#1566d1",
    whiteSpace: "nowrap",
    margin: 0,
    lineHeight: "12.964px",
  };
  const axisSubLabel: React.CSSProperties = {
    fontFamily: "var(--font-dm-sans)",
    fontWeight: 400,
    fontSize: 64,
    color: "#1566d1",
    whiteSpace: "nowrap",
    margin: 0,
    lineHeight: "12.964px",
  };

  const card: React.CSSProperties = {
    position: "absolute",
    background: "#fff",
    display: "flex",
    gap: 40,
    alignItems: "center",
    padding: 40,
    borderRadius: 20,
  };

  const scale = 800 / CANVAS_W;
  const displayH = Math.round(CANVAS_H * scale);

  return (
    <div style={{ width: "100%", overflowX: "auto" }} className="kody-scroll-x">
      <div
        style={{
          width: 800,
          height: displayH,
          borderRadius: 14,
          overflow: "hidden",
          position: "relative",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: CANVAS_W,
            height: CANVAS_H,
            transformOrigin: "top left",
            transform: `scale(${scale})`,
            background: "rgba(225,227,232,0.4)",
          }}
        >
          {/* ── Background vectors (same as updated roadmap) ── */}
          <div style={{ position: "absolute", height: 2107.097, left: 913, top: 351.34, width: 2206.285 }}>
            <div style={{ position: "absolute", top: "-9.52%", right: "-9.09%", bottom: "-9.52%", left: "-9.09%" }}>
              <img alt="" style={{ display: "block", maxWidth: "none", width: "100%", height: "100%" }} src={assets.vector242} />
            </div>
          </div>
          <div style={{ position: "absolute", height: 1643.292, left: 265.74, top: 200.81, width: 1763.837 }}>
            <div style={{ position: "absolute", top: "-12.17%", right: "-11.34%", bottom: "-12.17%", left: "-11.34%" }}>
              <img alt="" style={{ display: "block", maxWidth: "none", width: "100%", height: "100%" }} src={assets.vector241} />
            </div>
          </div>

          {/* ── Grid frames (identical to updated roadmap) ── */}
          <div style={{ position: "absolute", height: 2730, left: 141, top: 36, width: 2729.001 }}>
            <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: "-0.5%" }}>
              <img alt="" style={{ display: "block", maxWidth: "none", width: "100%", height: "100%" }} src={assets.frame85} />
            </div>
          </div>
          <div style={{ position: "absolute", height: 2728.001, left: 141, top: 36, width: 2977 }}>
            <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }}>
              <img alt="" style={{ display: "block", maxWidth: "none", width: "100%", height: "100%" }} src={assets.frame86} />
            </div>
          </div>

          {/* ── Axis labels (identical to updated roadmap) ── */}
          <div style={{ position: "absolute", background: "#fff", border: "2px solid #1566d1", display: "flex", alignItems: "center", justifyContent: "center", left: 1449, padding: 40, borderRadius: 200, top: 2692 }}>
            <p style={axisLabel}>Effort</p>
          </div>
          <div style={{ position: "absolute", display: "flex", height: 415, alignItems: "center", justifyContent: "center", left: 52, top: 1323, width: 147 }}>
            <div style={{ transform: "rotate(-90deg)", flexShrink: 0 }}>
              <div style={{ background: "#fff", border: "2px solid #1566d1", display: "flex", alignItems: "center", justifyContent: "center", padding: 40, borderRadius: 200 }}>
                <p style={axisLabel}>Impact</p>
              </div>
            </div>
          </div>

          {/* ── Axis sub-labels (identical to updated roadmap) ── */}
          <div style={{ position: "absolute", left: 126, top: 2776, padding: 40 }}>
            <p style={axisSubLabel}>Low effort</p>
          </div>
          <div style={{ position: "absolute", display: "flex", height: 437, alignItems: "center", justifyContent: "center", left: 1, top: 72, width: 125 }}>
            <div style={{ transform: "rotate(-90deg)", flexShrink: 0 }}>
              <div style={{ padding: 40 }}><p style={axisSubLabel}>High impact</p></div>
            </div>
          </div>
          <div style={{ position: "absolute", left: 2737, top: 2776, padding: 40 }}>
            <p style={axisSubLabel}>High effort</p>
          </div>
          <div style={{ position: "absolute", display: "flex", height: 423, alignItems: "center", justifyContent: "center", left: 0, top: 2341, width: 125 }}>
            <div style={{ transform: "rotate(-90deg)", flexShrink: 0 }}>
              <div style={{ padding: 40 }}><p style={axisSubLabel}>Low impact</p></div>
            </div>
          </div>

          {/* ── Items (from Figma node 2841:7336) ── */}
          <div style={{ ...card, left: 707, top: 968, width: "max-content" }}>
            <div style={{ position: "relative", flexShrink: 0, width: 24, height: 24 }}>
              <img alt="" style={{ position: "absolute", inset: 0, maxWidth: "none", width: "100%", height: "100%" }} src={assets.blueDot} />
            </div>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 64, color: "#1566d1", whiteSpace: "nowrap", margin: 0, lineHeight: "12.964px" }}>
              Expand bank coverage on terminal
            </p>
          </div>

          <div style={{ ...card, left: 2197, top: 780 }}>
            <div style={{ position: "relative", flexShrink: 0, width: 24, height: 24 }}>
              <img alt="" style={{ position: "absolute", inset: 0, maxWidth: "none", width: "100%", height: "100%" }} src={assets.pinkDot} />
            </div>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 64, color: "#d420c5", lineHeight: "normal", width: 763, margin: 0 }}>
              Terminal: explore new interaction methods (e.g., NFC)
            </p>
          </div>

          <div style={{ ...card, left: 2422, top: 1300, width: "max-content" }}>
            <div style={{ position: "relative", flexShrink: 0, width: 24, height: 24 }}>
              <img alt="" style={{ position: "absolute", inset: 0, maxWidth: "none", width: "100%", height: "100%" }} src={assets.blueDot} />
            </div>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 64, color: "#1566d1", whiteSpace: "nowrap", margin: 0, lineHeight: "12.964px" }}>
              Refund support
            </p>
          </div>

          {/* ── Legend ── */}
          <div style={{ position: "absolute", display: "flex", gap: 40, alignItems: "center", left: 1345, top: 3014 }}>
            <div style={{ background: "rgba(21,102,209,0.6)", borderRadius: 20, flexShrink: 0, width: 125, height: 125 }} />
            <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 64, color: "#1566d1", whiteSpace: "nowrap", margin: 0, lineHeight: "12.964px" }}>
              P0
            </p>
          </div>
          <div style={{ position: "absolute", display: "flex", gap: 40, alignItems: "center", left: 1748, top: 3014 }}>
            <div style={{ background: "rgba(212,32,197,0.44)", borderRadius: 20, flexShrink: 0, width: 125, height: 125 }} />
            <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 64, color: "#d420c5", whiteSpace: "nowrap", margin: 0, lineHeight: "normal" }}>
              P1
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
