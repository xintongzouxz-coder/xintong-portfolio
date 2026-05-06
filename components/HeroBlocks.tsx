"use client";

import { useState, useEffect, useRef } from "react";
import type { CSSProperties } from "react";

const IMG = {
  fileBack:     "/images/file-back.png",
  fileFront:    "/images/file-front.png",
  fileBack2:    "/images/file-back-2.png",
  fileFront2:   "/images/file-front-2.png",
  prorizon:     "/images/prorizon.png",
  payByBank:    "/images/pay-by-bank.png",
  designSystem: "/images/design-system.png",
  profile:      "/images/profile.jpg",
  barbican:     "/images/barbican.png",
  goldfish:     "/images/goldfish.png",
  brain:        "/images/brain.png",
};

const stackGrid: CSSProperties = {
  display: "inline-grid",
  gridTemplateColumns: "max-content",
  gridTemplateRows: "max-content",
};

const cell = (ml: number, mt: number): CSSProperties => ({
  gridColumn: 1,
  gridRow: 1,
  marginLeft: ml,
  marginTop: mt,
});

type Block = "left" | "center" | "right";
const EASE = "cubic-bezier(0.0, 0, 0.2, 1)";
const T = `opacity 500ms ${EASE}, transform 500ms ${EASE}`;
const LONG_PRESS_MS = 400;

function scrollEaseOut(targetId: string) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const start = window.scrollY;
  const end = el.getBoundingClientRect().top + start;
  const duration = 950;
  const startTime = performance.now();
  function tick(now: number) {
    const elapsed = now - startTime;
    const t = Math.min(elapsed / duration, 1);
    const eased = t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;
    window.scrollTo(0, start + (end - start) * eased);
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

export default function HeroBlocks() {
  const [hovered, setHovered] = useState<Block | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchOrigin = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  function startLongPress(block: Block, e: React.TouchEvent) {
    touchOrigin.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    longPressTimer.current = setTimeout(() => setHovered(block), LONG_PRESS_MS);
  }

  function cancelLongPress() {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
    touchOrigin.current = null;
    setHovered(null);
  }

  function handleTouchMove(e: React.TouchEvent) {
    if (!touchOrigin.current) return;
    const dx = Math.abs(e.touches[0].clientX - touchOrigin.current.x);
    const dy = Math.abs(e.touches[0].clientY - touchOrigin.current.y);
    // Cancel if the finger moves more than 10px (user is scrolling)
    if (dx > 10 || dy > 10) cancelLongPress();
  }

  function blockStyle(block: Block): CSSProperties {
    const isActive = hovered === block;
    const isDimmed = hovered !== null && !isActive;

    let tx = 0;
    if (!isMobile && isDimmed) {
      if (hovered === "center") {
        tx = block === "left" ? -35 : 35;
      } else if (hovered === "left") {
        tx = block === "center" ? 35 : 14;
      } else {
        tx = block === "center" ? -35 : -14;
      }
    }

    const defaultZ: Record<Block, number> = { left: 1, center: 2, right: 1 };
    return {
      position: "relative",
      zIndex: isActive ? 10 : defaultZ[block],
      opacity: isDimmed ? 0.5 : 1,
      // Mobile long-press: scale down dimmed cards; desktop: translateX + scale
      transform: isDimmed
        ? isMobile ? "scale(0.92)" : `translateX(${tx}px) scale(0.85)`
        : "none",
      transition: T,
    };
  }

  function rotStyle(block: Block, deg: number): CSSProperties {
    // On mobile with no long-press active: static rotation, no transition
    if (isMobile && hovered === null) return { transform: `rotate(${deg}deg)` };
    return {
      transform: hovered === block ? "rotate(0deg)" : `rotate(${deg}deg)`,
      transition: T,
    };
  }

  function fly(block: Block, py: number): CSSProperties {
    // On mobile with no long-press active: no fly
    if (isMobile && hovered === null) return {};
    return {
      transform: hovered === block ? `translateY(${py}px)` : "translateY(0px)",
      transition: T,
    };
  }

  function blockBase(block: Block, width: number, height: number): CSSProperties {
    const base: CSSProperties = {
      display: "flex",
      width,
      height,
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      cursor: "pointer",
    };
    // Mobile with no long-press: bare base (no hover effects, no negative margin)
    if (isMobile && hovered === null) return base;
    // Mobile with long-press active: add blockStyle but no negative margin
    if (isMobile) return { ...base, ...blockStyle(block) };
    // Desktop: full hover logic + negative overlap margin
    return { ...base, marginRight: -64, ...blockStyle(block) };
  }

  const mobileWrap = (mb: number): CSSProperties =>
    isMobile
      ? { transform: "scale(0.48)", transformOrigin: "top center", marginBottom: mb }
      : {};

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "center" : "flex-start",
        paddingRight: isMobile ? 0 : 64,
      }}
    >

      {/* ── Left: Case study file ── */}
      <div style={mobileWrap(-292)}>
        <div
          style={blockBase("left", 412, 474)}
          onMouseEnter={isMobile ? undefined : () => setHovered("left")}
          onMouseLeave={isMobile ? undefined : () => setHovered(null)}
          onTouchStart={isMobile ? (e) => startLongPress("left", e) : undefined}
          onTouchMove={isMobile ? handleTouchMove : undefined}
          onTouchEnd={isMobile ? cancelLongPress : undefined}
          onTouchCancel={isMobile ? cancelLongPress : undefined}
          onClick={() => scrollEaseOut("work")}
        >
          <div style={rotStyle("left", isMobile ? -5 : -6.76)}>
            <div style={stackGrid}>

              <div style={cell(0, 53.15)}>
                <div style={{ width: 364, height: 389, position: "relative" }}>
                  <div style={{ position: "absolute", top: "-4.48%", right: "-13.95%", bottom: "-13.21%", left: "-4.79%" }}>
                    <img src={IMG.fileBack} alt="" style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }} />
                  </div>
                </div>
              </div>

              <div style={cell(40.67, 150.37)}>
                <div style={fly("left", -40)}>
                  <div style={{ transform: "rotate(5deg)" }}>
                    <div style={{ width: 258, height: 172, borderRadius: 20, overflow: "hidden", boxShadow: "10px 10px 10px rgba(167,167,167,0.25)" }}>
                      <img src={IMG.prorizon} alt="Prorizon" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
                    </div>
                  </div>
                </div>
              </div>

              <div style={cell(161.66, 26.4)}>
                <div style={fly("left", -65)}>
                  <div style={{ transform: "rotate(10.07deg)" }}>
                    <div style={{ width: 183, height: 192, borderRadius: 20, overflow: "hidden", boxShadow: "10px 10px 10px rgba(167,167,167,0.25)" }}>
                      <img src={IMG.payByBank} alt="Pay by Bank" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
                    </div>
                  </div>
                </div>
              </div>

              <div style={cell(1.24, 0)}>
                <div style={fly("left", -120)}>
                  <div style={{ transform: "rotate(-2.93deg)" }}>
                    <div style={{ width: 203, height: 154, borderRadius: 20, overflow: "hidden", boxShadow: "10px 10px 10px rgba(167,167,167,0.25)" }}>
                      <img src={IMG.designSystem} alt="Design System" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top left", display: "block" }} />
                    </div>
                  </div>
                </div>
              </div>

              <div style={cell(0.13, 73.0)}>
                <div style={{ width: 352, height: 370, position: "relative" }}>
                  <img src={IMG.fileFront} alt="" style={{ position: "absolute", top: "-9.31%", right: "-8.57%", bottom: "-4.71%", left: "-6.16%", width: "114.73%", height: "114.02%", display: "block", maxWidth: "none" }} />
                </div>
              </div>

              <div style={{ ...cell(isMobile ? 106 : 86.18, isMobile ? 301 : 358.42), width: "max-content", position: "relative", zIndex: 10 }}>
                <div style={{ background: "#292929", padding: isMobile ? 17 : 16, borderRadius: isMobile ? 17 : 8 }}>
                  <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: isMobile ? 29 : 16, color: "white", whiteSpace: "nowrap" }}>Read case studies</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ── Center: Profile photo ── */}
      <div style={mobileWrap(-257)}>
        <div
          style={blockBase("center", 355, 408)}
          onMouseEnter={isMobile ? undefined : () => setHovered("center")}
          onMouseLeave={isMobile ? undefined : () => setHovered(null)}
          onTouchStart={isMobile ? (e) => startLongPress("center", e) : undefined}
          onTouchMove={isMobile ? handleTouchMove : undefined}
          onTouchEnd={isMobile ? cancelLongPress : undefined}
          onTouchCancel={isMobile ? cancelLongPress : undefined}
        >
          <div style={rotStyle("center", 5)}>
            <div style={{ width: 323, height: 382, borderRadius: 20, overflow: "hidden", position: "relative", background: "#d4cfc9" }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={IMG.profile}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "65% center" }}
              >
                <source src="/images/intro.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right: Fun project file ── */}
      <div style={mobileWrap(-260)}>
        <div
          style={blockBase("right", 435, 500)}
          onMouseEnter={isMobile ? undefined : () => setHovered("right")}
          onMouseLeave={isMobile ? undefined : () => setHovered(null)}
          onTouchStart={isMobile ? (e) => startLongPress("right", e) : undefined}
          onTouchMove={isMobile ? handleTouchMove : undefined}
          onTouchEnd={isMobile ? cancelLongPress : undefined}
          onTouchCancel={isMobile ? cancelLongPress : undefined}
          onClick={() => scrollEaseOut("other")}
        >
          <div style={rotStyle("right", 10)}>
            <div style={stackGrid}>

              <div style={cell(0.42, 53.58)}>
                <div style={{ width: 364, height: 389, position: "relative" }}>
                  <div style={{ position: "absolute", top: "-4.48%", right: "-13.95%", bottom: "-13.21%", left: "-4.79%" }}>
                    <img src={IMG.fileBack2} alt="" style={{ display: "block", width: "100%", height: "100%", maxWidth: "none" }} />
                  </div>
                </div>
              </div>

              <div style={cell(154.15, 11.9)}>
                <div style={fly("right", -50)}>
                  <div style={{ transform: "rotate(9.48deg)" }}>
                    <div style={{ width: 162, height: 213, borderRadius: 20, overflow: "hidden", boxShadow: "10px 10px 20px rgba(167,167,167,0.25)", position: "relative" }}>
                      <img src={IMG.barbican} alt="Barbican" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  </div>
                </div>
              </div>

              <div style={cell(isMobile ? 40 : 17, 154.39)}>
                <div style={fly("right", -120)}>
                  <div style={{ transform: "scaleY(-1) rotate(168.8deg)" }}>
                    <div style={{ width: 276, height: 161, borderRadius: 20, overflow: "hidden", boxShadow: "10px 10px 20px rgba(167,167,167,0.25)", position: "relative" }}>
                      <img src={IMG.goldfish} alt="Goldfish" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  </div>
                </div>
              </div>

              <div style={cell(13.99, 0)}>
                <div style={fly("right", -60)}>
                  <div style={{ transform: "rotate(-12.23deg)" }}>
                    <div style={{ width: 245, height: 139, borderRadius: 20, overflow: "hidden", boxShadow: "10px 10px 20px rgba(167,167,167,0.25)", position: "relative" }}>
                      <img src={IMG.brain} alt="Brain" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
                    </div>
                  </div>
                </div>
              </div>

              <div style={cell(0, 72.25)}>
                <div style={{ width: 352, height: 370, position: "relative" }}>
                  <img src={IMG.fileFront2} alt="" style={{ position: "absolute", top: "-9.31%", right: "-8.57%", bottom: "-4.71%", left: "-6.16%", width: "114.73%", height: "114.02%", display: "block", maxWidth: "none" }} />
                </div>
              </div>

              <div style={{ ...cell(isMobile ? 79 : 76.91, isMobile ? 372 : 361.11), width: "max-content", position: "relative", zIndex: 10 }}>
                <div style={{ background: "#292929", padding: isMobile ? 17 : 16, borderRadius: isMobile ? 17 : 8 }}>
                  <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: isMobile ? 29 : 16, color: "white", whiteSpace: "nowrap" }}>Check my fun project</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
