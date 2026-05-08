"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

const CANVAS_W = 3320;
const CANVAS_H = 3203;
const MINI_W = 280;
const MINI_H = Math.round(CANVAS_H * (MINI_W / CANVAS_W));
const SCALE = MINI_W / CANVAS_W;
const CIRCLE_SIZE = 50;
const OFFSET = 16;

const assets = {
  vector242: "/images/kody-pbb/roadmap/vector242.svg",
  vector241: "/images/kody-pbb/roadmap/vector241.svg",
  frame85:   "/images/kody-pbb/roadmap/frame85.svg",
  frame86:   "/images/kody-pbb/roadmap/frame86.svg",
};

export type LabelId = "integrate" | "deprioritise" | "expand" | "highlight";

// Dot icon center positions in canvas coordinates (padding 40 + dot half-size 12)
const DOT_CENTER: Record<LabelId, { x: number; y: number }> = {
  integrate:    { x: 680, y: 521 },
  deprioritise: { x: 821, y: 1017 },
  expand:       { x: 317, y: 1592 },
  highlight:    { x: 837, y: 1812 },
};

interface Props {
  labelId: LabelId;
  mouseX: number;
  mouseY: number;
  visible: boolean;
}

export default function RoadmapTooltip({ labelId, mouseX, mouseY, visible }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const dot = DOT_CENTER[labelId];
  const circleLeft = dot.x * SCALE - CIRCLE_SIZE / 2;
  const circleTop  = dot.y * SCALE - CIRCLE_SIZE / 2;

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  let tx = mouseX + OFFSET;
  let ty = mouseY - MINI_H / 2;
  if (tx + MINI_W > vw - 8) tx = mouseX - MINI_W - OFFSET;
  if (ty < 8) ty = 8;
  if (ty + MINI_H > vh - 8) ty = vh - MINI_H - 8;

  return createPortal(
    <div
      style={{
        position: "fixed",
        left: tx,
        top: ty,
        width: MINI_W,
        height: MINI_H,
        borderRadius: 12,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 50000,
        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.18s ease",
      }}
    >
      {/* Scaled-down roadmap background */}
      <div style={{ position: "relative", width: MINI_W, height: MINI_H, background: "rgba(225,227,232,0.4)" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: CANVAS_W,
            height: CANVAS_H,
            transformOrigin: "top left",
            transform: `scale(${SCALE})`,
          }}
        >
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
        </div>

        {/* Location circle — positioned in display coordinates */}
        <div
          style={{
            position: "absolute",
            left: circleLeft,
            top: circleTop,
            width: CIRCLE_SIZE,
            height: CIRCLE_SIZE,
            borderRadius: "50%",
            background: "rgba(200,200,200,0.5)",
            border: "1px solid #AFAFAF",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>,
    document.body
  );
}
