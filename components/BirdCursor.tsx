"use client";

import { useEffect, useRef } from "react";

// ViewBox 110 × 100. Fish faces RIGHT (→). Nose tip at (109, 50).
// Rotation pivots around the nose — it stays locked to the cursor at all times.
const VB_W = 110;
const VB_H = 100;
const NOSE_X = 109;
const NOSE_Y = 50;

export default function BirdCursor() {
  const svgRef = useRef<SVGSVGElement>(null);
  const posRef = useRef({ x: -300, y: -300 });
  const rotRef = useRef(0);
  const prevPosRef = useRef({ x: -300, y: -300 });
  const sizeRef = useRef(52);
  const targetSizeRef = useRef(52);
  const colorRef = useRef("#1a1a1a");
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };

      const dx = e.clientX - prevPosRef.current.x;
      const dy = e.clientY - prevPosRef.current.y;

      if (Math.sqrt(dx * dx + dy * dy) > 1) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        let delta = angle - rotRef.current;
        while (delta > 180) delta -= 360;
        while (delta < -180) delta += 360;
        rotRef.current += delta * 0.12;
      }

      prevPosRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive =
        t.tagName === "A" || t.tagName === "BUTTON" || !!t.closest("a") || !!t.closest("button");
      targetSizeRef.current = interactive ? 64 : 52;
      colorRef.current = interactive ? "#E8561A" : "#1a1a1a";
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);

    const render = () => {
      const { x, y } = posRef.current;
      sizeRef.current += (targetSizeRef.current - sizeRef.current) * 0.15;
      const s = sizeRef.current;

      const fishW = s;
      const fishH = s * (VB_H / VB_W);
      // Pixel offset from SVG top-left to the nose point
      const noseOffX = fishW * (NOSE_X / VB_W);
      const noseOffY = fishH * (NOSE_Y / VB_H);

      svg.style.width = `${fishW}px`;
      svg.style.height = `${fishH}px`;
      svg.style.color = colorRef.current;
      // 1. shift nose to origin  2. rotate around origin  3. move to cursor
      svg.style.transform = `translate(${x}px, ${y}px) rotate(${rotRef.current}deg) translate(${-noseOffX}px, ${-noseOffY}px)`;

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
        color: "#1a1a1a",
        willChange: "transform",
        overflow: "visible",
      }}
    >
      {/*
       * ─── TAIL FINS ────────────────────────────────────────────────────────────
       * Two blade-shaped lobes. Outer edge sweeps wide, inner edge returns
       * closer to create the thin tapered fin shape.
       */}

      {/* Upper tail lobe — flows upper-left to tip at (4, 8) */}
      <path
        d="M 32 42
           C 20 32, 10 18, 4 8
           C 10 14, 22 28, 32 48
           Z"
        fill="currentColor"
      />

      {/* Lower tail lobe — mirror, flows lower-left to tip at (4, 92) */}
      <path
        d="M 32 58
           C 20 68, 10 82, 4 92
           C 10 86, 22 72, 32 52
           Z"
        fill="currentColor"
      />

      {/*
       * ─── CAUDAL PEDUNCLE ──────────────────────────────────────────────────────
       * Narrow lens bridging the two tail lobes to the body.
       * Left apex x≈27, right side x≈38 merges into the body ellipse.
       */}
      <path
        d="M 32 42
           C 28 44, 27 47, 27 50
           C 27 53, 28 56, 32 58
           C 36 56, 38 53, 38 50
           C 38 47, 36 44, 32 42
           Z"
        fill="currentColor"
      />

      {/*
       * ─── BODY ────────────────────────────────────────────────────────────────
       * Large ryukin-style rounded oval (rx > ry for a plump, humped look).
       * Left edge at x=34, overlaps peduncle for seamless merge.
       */}
      <ellipse cx="68" cy="52" rx="34" ry="27" fill="currentColor" />

      {/*
       * ─── HEAD ────────────────────────────────────────────────────────────────
       * Smaller oval overlapping the body's right side.
       * Rightmost point (nose): cx + rx = 93 + 16 = 109 = NOSE_X ✓
       */}
      <ellipse cx="93" cy="50" rx="16" ry="14" fill="currentColor" />

      {/*
       * ─── DORSAL FIN ──────────────────────────────────────────────────────────
       * Arches up from the body shoulder. Two bezier edges create fin thickness.
       */}
      <path
        d="M 62 27
           C 58 14, 52 6, 48 10
           C 46 14, 52 22, 60 28
           Z"
        fill="currentColor"
      />

      {/*
       * ─── PECTORAL FIN ────────────────────────────────────────────────────────
       * Side fin extending from the belly.
       */}
      <path
        d="M 65 76
           C 56 86, 46 86, 44 80
           C 43 74, 53 70, 65 73
           Z"
        fill="currentColor"
      />

      {/*
       * ─── SCALE PATTERN ───────────────────────────────────────────────────────
       * Six ∪-arcs in a staggered 3-column × 2-row grid on the upper body.
       * Each arc opens upward, suggesting overlapping imbricate scales.
       */}
      <g stroke="white" strokeWidth="2" fill="none" strokeLinecap="round">
        {/* Column 1 (posterior) */}
        <path d="M 60 40 Q 66 32 72 40" />
        <path d="M 60 51 Q 66 43 72 51" />
        {/* Column 2 (mid) */}
        <path d="M 71 36 Q 77 28 83 36" />
        <path d="M 71 47 Q 77 39 83 47" />
        {/* Column 3 (anterior) */}
        <path d="M 80 42 Q 86 34 92 42" />
        <path d="M 80 53 Q 86 45 92 53" />
      </g>

      {/*
       * ─── TAIL FIN RAYS ───────────────────────────────────────────────────────
       * White centre-lines inside each tail lobe, tracing the fin ray direction.
       */}
      <g stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round">
        <path d="M 32 45 C 20 34, 10 20, 4 8" />
        <path d="M 32 55 C 20 66, 10 80, 4 92" />
      </g>

      {/*
       * ─── EYE ─────────────────────────────────────────────────────────────────
       */}
      <circle cx="100" cy="45" r="3" fill="white" />
    </svg>
  );
}
