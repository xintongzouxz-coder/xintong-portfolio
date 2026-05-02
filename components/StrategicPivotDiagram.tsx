"use client";

import { useState, useRef, useEffect } from "react";

const assets = {
  vector242:  "/images/kody-pbb/roadmap/vector242.svg",
  vector241:  "/images/kody-pbb/roadmap/vector241.svg",
  frame85:    "/images/kody-pbb/roadmap/frame85.svg",
  frame86:    "/images/kody-pbb/roadmap/frame86.svg",
  blueDot:    "/images/kody-pbb/roadmap/blue-dot.svg",
  arrowIcon:  "/images/kody-pbb/roadmap/arrow-icon.svg",
  pinkDot:    "/images/kody-pbb/roadmap/pink-dot.svg",
};

const CANVAS_W = 3320;
const CANVAS_H = 3203;
const MIN_DISPLAY_W = 320;

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 120;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function StrategicPivotDiagram() {
  const [hovered, setHovered] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [displayW, setDisplayW] = useState(800);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const w = entries[0].contentRect.width;
      setDisplayW(Math.min(Math.max(w, MIN_DISPLAY_W), 800));
    });
    observer.observe(el);
    setDisplayW(Math.min(Math.max(el.offsetWidth, MIN_DISPLAY_W), 800));
    return () => observer.disconnect();
  }, []);

  const scale = displayW / CANVAS_W;
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

  function cardBase(id: string, extra?: React.CSSProperties): React.CSSProperties {
    return {
      position: "absolute",
      background: "#fff",
      display: "flex",
      gap: 40,
      alignItems: "center",
      padding: 40,
      borderRadius: 20,
      cursor: "pointer",
      filter: hovered === id ? "drop-shadow(0px 0px 30px rgba(255,255,255,0.7))" : "none",
      transition: "filter 0.2s ease",
      ...extra,
    };
  }

  const isIntegrateHovered = hovered === "integrate";

  return (
    <div ref={wrapperRef} style={{ width: "100%", overflowX: displayW <= MIN_DISPLAY_W ? "auto" : "visible" }} className="kody-scroll-x">
      <div
        style={{
          width: displayW,
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
          {/* ── Background vectors ── */}
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

          {/* ── Grid frames ── */}
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

          {/* ── Integrate PBB into PBL — hover expands ── */}
          <div
            style={cardBase("integrate", {
              left: 628,
              top: 469,
              width: 900,
              flexDirection: "column",
              alignItems: "stretch",
              justifyContent: "center",
              gap: 0,
            })}
            onMouseEnter={() => setHovered("integrate")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => scrollToSection("solutions-integrate")}
          >
            {/* Row 1: always visible */}
            <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
              <div style={{ position: "relative", flexShrink: 0, width: 24, height: 24 }}>
                <img alt="" style={{ position: "absolute", inset: 0, maxWidth: "none", width: "100%", height: "100%" }} src={assets.blueDot} />
              </div>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 64, color: "#1566d1", whiteSpace: "nowrap", margin: 0, lineHeight: "12.964px" }}>
                Integrate PBB into PBL
              </p>
            </div>

            {/* Row 2: slides in on hover */}
            <div
              style={{
                overflow: "hidden",
                maxHeight: isIntegrateHovered ? "400px" : "0",
                opacity: isIntegrateHovered ? 1 : 0,
                transition: "max-height 0.35s ease, opacity 0.25s ease",
              }}
            >
              <div style={{ paddingTop: 40, display: "flex", gap: 40, alignItems: "flex-start" }}>
                <div style={{ position: "relative", flexShrink: 0, width: 38, height: 38 }}>
                  <div style={{ position: "absolute", top: "-8.14%", right: "-7.89%", bottom: "-8.14%", left: 0 }}>
                    <img alt="" style={{ display: "block", maxWidth: "none", width: "100%", height: "100%" }} src={assets.arrowIcon} />
                  </div>
                </div>
                <div style={{ flex: "1 0 0", minWidth: 1 }}>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 48, color: "#595959", margin: "0 0 0", lineHeight: "normal" }}>
                    Check solution
                  </p>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 36, color: "#595959", margin: 0, lineHeight: "normal" }}>
                    Pay by Link as the primary growth channel
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Deprioritise PBB on terminal ── */}
          <div
            style={cardBase("deprioritise", { left: 769, top: 965 })}
            onMouseEnter={() => setHovered("deprioritise")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => scrollToSection("solutions-deprioritise")}
          >
            <div style={{ position: "relative", flexShrink: 0, width: 24, height: 24 }}>
              <img alt="" style={{ position: "absolute", inset: 0, maxWidth: "none", width: "100%", height: "100%" }} src={assets.blueDot} />
            </div>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 64, color: "#1566d1", whiteSpace: "nowrap", margin: 0, lineHeight: "12.964px" }}>
              Deprioritise PBB on terminal
            </p>
          </div>

          {/* ── Expand bank coverage ── */}
          <div
            style={cardBase("expand", { left: 265, top: 1540 })}
            onMouseEnter={() => setHovered("expand")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => scrollToSection("solutions-step-2")}
          >
            <div style={{ position: "relative", flexShrink: 0, width: 24, height: 24 }}>
              <img alt="" style={{ position: "absolute", inset: 0, maxWidth: "none", width: "100%", height: "100%" }} src={assets.blueDot} />
            </div>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 64, color: "#1566d1", whiteSpace: "nowrap", margin: 0, lineHeight: "12.964px" }}>
              Expand bank coverage
            </p>
          </div>

          {/* ── Highlight PBB cost-saving benefits ── */}
          <div
            style={cardBase("highlight", { left: 785, top: 1760 })}
            onMouseEnter={() => setHovered("highlight")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => scrollToSection("solutions-highlight")}
          >
            <div style={{ position: "relative", flexShrink: 0, width: 24, height: 24 }}>
              <img alt="" style={{ position: "absolute", inset: 0, maxWidth: "none", width: "100%", height: "100%" }} src={assets.pinkDot} />
            </div>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 64, color: "#d420c5", whiteSpace: "nowrap", margin: 0, lineHeight: "12.964px" }}>
              Highlight PBB&apos;s cost-saving benefits
            </p>
          </div>

          {/* ── Non-interactive labels ── */}
          <div style={{ position: "absolute", background: "#fff", display: "flex", gap: 40, alignItems: "center", justifyContent: "center", left: 1995, padding: 40, borderRadius: 20, top: 594 }}>
            <div style={{ position: "relative", flexShrink: 0, width: 24, height: 24 }}>
              <img alt="" style={{ position: "absolute", inset: 0, maxWidth: "none", width: "100%", height: "100%" }} src={assets.pinkDot} />
            </div>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 64, color: "#d420c5", lineHeight: "normal", width: 763, margin: 0 }}>
              Terminal: explore new interaction methods (e.g., NFC)
            </p>
          </div>
          <div style={{ position: "absolute", background: "#fff", display: "flex", gap: 40, alignItems: "center", left: 1925, padding: 40, borderRadius: 20, top: 2115 }}>
            <div style={{ position: "relative", flexShrink: 0, width: 24, height: 24 }}>
              <img alt="" style={{ position: "absolute", inset: 0, maxWidth: "none", width: "100%", height: "100%" }} src={assets.pinkDot} />
            </div>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 64, color: "#d420c5", whiteSpace: "nowrap", margin: 0, lineHeight: "12.964px" }}>
              Refund support
            </p>
          </div>

          {/* ── Legend ── */}
          <div style={{ position: "absolute", display: "flex", gap: 40, alignItems: "center", left: 145, top: 3014 }}>
            <div style={{ background: "rgba(21,102,209,0.6)", borderRadius: 20, flexShrink: 0, width: 125, height: 125 }} />
            <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 64, color: "#1566d1", whiteSpace: "nowrap", margin: 0, lineHeight: "12.964px" }}>
              Phase One: Focus on key users&apos; needs
            </p>
          </div>
          <div style={{ position: "absolute", display: "flex", gap: 40, alignItems: "center", left: 1660, top: 3014 }}>
            <div style={{ background: "rgba(212,32,197,0.44)", borderRadius: 20, flexShrink: 0, width: 125, height: 125 }} />
            <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 64, color: "#d420c5", whiteSpace: "nowrap", margin: 0, lineHeight: "normal" }}>
              Phase Two: Expand to broader merchant base
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
