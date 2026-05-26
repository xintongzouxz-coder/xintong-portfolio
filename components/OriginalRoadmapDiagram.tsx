const assets = {
  vector1:  "/images/kody-pbb/roadmap/orig-vector1.png",
  vector2:  "/images/kody-pbb/roadmap/orig-vector2.png",
  frame1:   "/images/kody-pbb/roadmap/orig-frame1.png",
  frame2:   "/images/kody-pbb/roadmap/orig-frame2.png",
  blueDot:  "/images/kody-pbb/roadmap/blue-dot.svg",
  pinkDot:  "/images/kody-pbb/roadmap/pink-dot.svg",
};

const CANVAS_W = 3320;
const CANVAS_H = 3203;

export default function OriginalRoadmapDiagram() {
  const scale = 800 / CANVAS_W;
  const displayH = Math.round(CANVAS_H * scale);

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
          {/* ── Background blobs ── */}
          <div style={{ position: "absolute", height: 948.324, left: 1989.15, top: 351.34, width: 1130.135 }}>
            <div style={{ position: "absolute", top: "-21.14%", right: "-17.74%", bottom: "-21.14%", left: "-17.74%" }}>
              <img alt="" style={{ display: "block", maxWidth: "none", width: "100%", height: "100%" }} src={assets.vector1} />
            </div>
          </div>
          <div style={{ position: "absolute", height: 1096.5, left: 564, top: 555, width: 2644.241 }}>
            <div style={{ position: "absolute", top: "-18.24%", right: "-7.56%", bottom: "-18.24%", left: "-7.56%" }}>
              <img alt="" style={{ display: "block", maxWidth: "none", width: "100%", height: "100%" }} src={assets.vector2} />
            </div>
          </div>

          {/* ── Grid frames ── */}
          <div style={{ position: "absolute", height: 2730, left: 141, top: 36, width: 2729.001 }}>
            <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: "-0.5%" }}>
              <img alt="" style={{ display: "block", maxWidth: "none", width: "100%", height: "100%" }} src={assets.frame1} />
            </div>
          </div>
          {/* Frame 2 is rendered rotated -90deg in Figma to create horizontal grid lines */}
          <div style={{ position: "absolute", height: 2728.001, left: 141, top: 36, width: 2977, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ transform: "rotate(-90deg)", flexShrink: 0 }}>
              <div style={{ height: 2977, width: 2728.001, position: "relative" }}>
                <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: "-0.54%" }}>
                  <img alt="" style={{ display: "block", maxWidth: "none", width: "100%", height: "100%" }} src={assets.frame2} />
                </div>
              </div>
            </div>
          </div>

          {/* ── Axis labels ── */}
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

          {/* ── Axis sub-labels ── */}
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

          {/* ── Items ── */}
          <div style={{ position: "absolute", background: "#fff", display: "flex", gap: 40, alignItems: "center", left: 707, padding: 40, borderRadius: 20, top: 968 }}>
            <div style={{ position: "relative", flexShrink: 0, width: 24, height: 24 }}>
              <img alt="" style={{ position: "absolute", inset: 0, maxWidth: "none", width: "100%", height: "100%" }} src={assets.blueDot} />
            </div>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 64, color: "#1566d1", whiteSpace: "nowrap", margin: 0, lineHeight: "12.964px" }}>
              Expand bank coverage on terminal
            </p>
          </div>

          <div style={{ position: "absolute", background: "#fff", display: "flex", gap: 40, alignItems: "center", justifyContent: "center", left: 2197, padding: 40, borderRadius: 20, top: 780 }}>
            <div style={{ position: "relative", flexShrink: 0, width: 24, height: 24 }}>
              <img alt="" style={{ position: "absolute", inset: 0, maxWidth: "none", width: "100%", height: "100%" }} src={assets.pinkDot} />
            </div>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 64, color: "#d420c5", lineHeight: "normal", width: 763, margin: 0 }}>
              Terminal: explore new interaction methods (e.g., NFC)
            </p>
          </div>

          <div style={{ position: "absolute", background: "#fff", display: "flex", gap: 40, alignItems: "center", justifyContent: "center", left: 2422, padding: 40, borderRadius: 20, top: 1300 }}>
            <div style={{ position: "relative", flexShrink: 0, width: 24, height: 24 }}>
              <img alt="" style={{ position: "absolute", inset: 0, maxWidth: "none", width: "100%", height: "100%" }} src={assets.blueDot} />
            </div>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 64, color: "#1566d1", whiteSpace: "nowrap", margin: 0, lineHeight: "12.964px" }}>
              Refund support
            </p>
          </div>

          {/* ── Legend ── */}
          <div style={{ position: "absolute", display: "flex", gap: 40, alignItems: "center", left: 1345, top: 2996 }}>
            <div style={{ background: "rgba(21,102,209,0.6)", borderRadius: 20, flexShrink: 0, width: 125, height: 125 }} />
            <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 64, color: "#1566d1", whiteSpace: "nowrap", margin: 0, lineHeight: "12.964px" }}>
              P0
            </p>
          </div>
          <div style={{ position: "absolute", display: "flex", gap: 40, alignItems: "center", left: 1748, top: 2996 }}>
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
