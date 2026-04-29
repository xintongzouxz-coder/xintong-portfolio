"use client";

import { useEffect, useRef } from "react";

const DOT_SIZE    = 6;
const RING_DEFAULT = 32;
const RING_HOVER   = 44;
const RING_LERP    = 0.25;
const SIZE_LERP    = 0.14;

export default function BirdCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos  = useRef({ x: -300, y: -300 });
  const ringPos   = useRef({ x: -300, y: -300 });
  const ringSizeRef = useRef(RING_DEFAULT);
  const isHover   = useRef(false);
  const rafRef    = useRef<number>(0);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      isHover.current = !!(
        t.tagName === "A" ||
        t.tagName === "BUTTON" ||
        t.closest("a") ||
        t.closest("button")
      );
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);

    const render = () => {
      const dot  = dotRef.current;
      const ring = ringRef.current;

      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * RING_LERP;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * RING_LERP;

      const targetSize = isHover.current ? RING_HOVER : RING_DEFAULT;
      ringSizeRef.current += (targetSize - ringSizeRef.current) * SIZE_LERP;
      const s = ringSizeRef.current;

      if (dot) {
        dot.style.transform = `translate(${mousePos.current.x - DOT_SIZE / 2}px, ${mousePos.current.y - DOT_SIZE / 2}px)`;
        dot.style.opacity   = isHover.current ? "0" : "1";
      }

      if (ring) {
        ring.style.transform    = `translate(${ringPos.current.x - s / 2}px, ${ringPos.current.y - s / 2}px)`;
        ring.style.width        = `${s}px`;
        ring.style.height       = `${s}px`;
        ring.style.borderColor  = isHover.current ? "#3445ff" : "rgba(26,26,26,0.55)";
        ring.style.background   = isHover.current ? "rgba(52,69,255,0.08)" : "transparent";
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
    <>
      {/* Inner dot — follows mouse exactly */}
      <div
        ref={dotRef}
        style={{
          position:      "fixed",
          top:           0,
          left:          0,
          width:         DOT_SIZE,
          height:        DOT_SIZE,
          borderRadius:  "50%",
          background:    "#1a1a1a",
          pointerEvents: "none",
          zIndex:        9999,
          willChange:    "transform, opacity",
          transition:    "opacity 0.15s",
        }}
      />
      {/* Outer ring — follows with slight lag */}
      <div
        ref={ringRef}
        style={{
          position:      "fixed",
          top:           0,
          left:          0,
          width:         RING_DEFAULT,
          height:        RING_DEFAULT,
          borderRadius:  "50%",
          border:        "1.5px solid rgba(26,26,26,0.55)",
          pointerEvents: "none",
          zIndex:        9998,
          willChange:    "transform, width, height",
          transition:    "border-color 0.2s, background 0.2s",
        }}
      />
    </>
  );
}
