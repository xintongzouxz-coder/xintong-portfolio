"use client";

import { useEffect, useRef } from "react";

export default function BirdCursor() {
  const birdRef = useRef<SVGSVGElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const rotRef = useRef(0);
  const prevPosRef = useRef({ x: -100, y: -100 });
  const sizeRef = useRef(36);
  const targetSizeRef = useRef(36);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const bird = birdRef.current;
    if (!bird) return;

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };

      const dx = e.clientX - prevPosRef.current.x;
      const dy = e.clientY - prevPosRef.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 1) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        // Smooth angle interpolation (handles 360° wrap)
        let delta = angle - rotRef.current;
        while (delta > 180) delta -= 360;
        while (delta < -180) delta += 360;
        rotRef.current += delta * 0.12;
      }

      prevPosRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        targetSizeRef.current = 44;
        bird.style.color = "#E8561A";
      } else {
        targetSizeRef.current = 36;
        bird.style.color = "#1a1a1a";
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);

    const render = () => {
      const { x, y } = posRef.current;
      sizeRef.current += (targetSizeRef.current - sizeRef.current) * 0.15;
      const s = sizeRef.current;

      bird.style.transform = `translate(${x - s / 2}px, ${y - s / 2}px) rotate(${rotRef.current}deg)`;
      bird.style.width = `${s}px`;
      bird.style.height = `${s * (48 / 60)}px`;

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
      ref={birdRef}
      viewBox="0 0 60 48"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
        color: "#1a1a1a",
        transformOrigin: "center center",
        willChange: "transform",
      }}
    >
      <path
        d="M 58 24 L 38 12 L 28 0 L 32 18 L 2 14 L 18 24 L 2 34 L 32 30 L 28 48 L 38 36 Z"
        fill="currentColor"
      />
    </svg>
  );
}
