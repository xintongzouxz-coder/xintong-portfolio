"use client";

import { useEffect, useRef } from "react";

// Fish image: head points UP (12 o'clock).
// atan2 returns 0° for rightward movement, 90° for downward, etc.
// Subtracting 90° maps "head up = 12 o'clock" to match mouse direction:
//   moving right  →  0° - 90° = -90°  → fish rotates so head faces right  ✓
//   moving down   → 90° - 90° =   0°  → fish rotates so head faces down   ✓
//   moving left   → 180°- 90° =  90°  → fish rotates so head faces left   ✓
//   moving up     → -90°- 90° = -180° → fish rotates so head faces up     ✓
const ANGLE_OFFSET = 90;

const SIZE_DEFAULT = 52;
const SIZE_HOVER   = 65;

export default function BirdCursor() {
  const wrapRef    = useRef<HTMLDivElement>(null);
  const blackRef   = useRef<HTMLImageElement>(null);
  const orangeRef  = useRef<HTMLImageElement>(null);

  const posRef         = useRef({ x: -300, y: -300 });
  const rotRef         = useRef(0);
  const prevPosRef     = useRef({ x: -300, y: -300 });
  const sizeRef        = useRef(SIZE_DEFAULT);
  const targetSizeRef  = useRef(SIZE_DEFAULT);
  const isHoverRef     = useRef(false);
  const rafRef         = useRef<number>(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };

      const dx = e.clientX - prevPosRef.current.x;
      const dy = e.clientY - prevPosRef.current.y;

      if (Math.sqrt(dx * dx + dy * dy) > 1) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI) - ANGLE_OFFSET;
        let delta = angle - rotRef.current;
        while (delta >  180) delta -= 360;
        while (delta < -180) delta += 360;
        rotRef.current += delta * 0.25;
      }

      prevPosRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive =
        t.tagName === "A" ||
        t.tagName === "BUTTON" ||
        !!t.closest("a") ||
        !!t.closest("button");

      isHoverRef.current    = interactive;
      targetSizeRef.current = interactive ? SIZE_HOVER : SIZE_DEFAULT;
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);

    const render = () => {
      const { x, y } = posRef.current;
      sizeRef.current += (targetSizeRef.current - sizeRef.current) * 0.15;
      const s = sizeRef.current;

      wrap.style.width     = `${s}px`;
      wrap.style.transform = `translate(${x - s / 2}px, ${y - s / 2}px) rotate(${rotRef.current}deg)`;

      if (blackRef.current && orangeRef.current) {
        blackRef.current.style.opacity  = isHoverRef.current ? "0" : "1";
        orangeRef.current.style.opacity = isHoverRef.current ? "1" : "0";
      }

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
    <div
      ref={wrapRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
        willChange: "transform",
      }}
    >
      {/* Black — default */}
      <img
        ref={blackRef}
        src="/images/cursor-fish-black.png"
        alt=""
        style={{ width: "100%", height: "auto", display: "block", opacity: 1 }}
        draggable={false}
      />
      {/* Orange — on hover over links/buttons */}
      <img
        ref={orangeRef}
        src="/images/cursor-fish-orange.png"
        alt=""
        style={{
          position: "absolute",
          top: 0, left: 0,
          width: "100%", height: "auto",
          display: "block",
          opacity: 0,
        }}
        draggable={false}
      />
    </div>
  );
}
