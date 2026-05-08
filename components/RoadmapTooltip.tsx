"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

const CANVAS_W = 3320;
const CANVAS_H = 3203;
const MINI_W = 280;
const MINI_H = Math.round(CANVAS_H * (MINI_W / CANVAS_W));
const SCALE = MINI_W / CANVAS_W;
const CIRCLE_SIZE = 80;
const OFFSET = 16;

export type LabelId = "integrate" | "deprioritise" | "expand" | "highlight";

// Card center positions in canvas coordinates (derived from roadmap-mini.png)
const DOT_CENTER: Record<LabelId, { x: number; y: number }> = {
  integrate:    { x: 1240, y: 521 },
  deprioritise: { x: 1454, y: 1017 },
  expand:       { x:  735, y: 1592 },
  highlight:    { x: 1520, y: 1812 },
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
      <div style={{ position: "relative", width: MINI_W, height: MINI_H, background: "rgba(225,227,232,0.9)" }}>
        <img
          alt=""
          src="/images/kody-pbb/roadmap-mini.png"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
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
          }}
        />
      </div>
    </div>,
    document.body
  );
}
