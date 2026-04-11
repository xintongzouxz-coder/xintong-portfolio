"use client";

import { useEffect, useRef } from "react";

// 3×3 glass grid — backdrop-filter blurs the Three.js canvas behind it
// Column colors: left=amber/brown, mid=golden, right=bright yellow
const COL_COLORS = [
  "rgba(148, 105, 38, 0.50)",  // amber / brown
  "rgba(182, 151, 30, 0.46)",  // golden yellow
  "rgba(212, 182, 18, 0.52)",  // bright yellow
];

const CELL = 155; // px
const GAP  = 9;   // px

export default function GlassGrid() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cur     = useRef({ x: 0, y: 0 });
  const tgt     = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      tgt.current.x =  (e.clientX / window.innerWidth  - 0.5) * 2; // –1…+1
      tgt.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    let raf: number;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const LERP = 0.06;
      cur.current.x += (tgt.current.x - cur.current.x) * LERP;
      cur.current.y += (tgt.current.y - cur.current.y) * LERP;

      // Grid tilts more than the fish for parallax depth illusion
      const rx = -cur.current.y * 9;  // pitch ±9°
      const ry =  cur.current.x * 11; // yaw  ±11°

      if (wrapRef.current) {
        wrapRef.current.style.transform =
          `translateY(-50%) perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      }
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      style={{
        position: "absolute",
        // Center-left: left edge sits ~25% from viewport left
        left: "calc(50% - 460px)",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 5,
        display: "grid",
        gridTemplateColumns: `repeat(3, ${CELL}px)`,
        gridTemplateRows:    `repeat(3, ${CELL}px)`,
        gap: GAP,
        pointerEvents: "none",
        transformOrigin: "center center",
      }}
    >
      {Array.from({ length: 9 }, (_, i) => {
        const col = i % 3;
        return (
          <div
            key={i}
            style={{
              borderRadius: 24,
              background: COL_COLORS[col],
              backdropFilter:       "blur(20px) saturate(1.7) brightness(1.05)",
              WebkitBackdropFilter: "blur(20px) saturate(1.7) brightness(1.05)",
              border: "1px solid rgba(255,255,255,0.30)",
              boxShadow: [
                "inset 0 1px 0 rgba(255,255,255,0.50)",   // top highlight
                "inset 0 -1px 0 rgba(0,0,0,0.10)",        // bottom shadow
                "inset 1px 0 0 rgba(255,255,255,0.20)",   // left glint
                "0 2px 12px rgba(0,0,0,0.08)",            // soft outer drop
              ].join(", "),
            }}
          />
        );
      })}
    </div>
  );
}
