"use client";

import { useEffect, useRef } from "react";

interface Blob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  maxR: number;
  phase: number;
  wobbleSpeed: number;
  wobbleAmp: number;
  born: number;
}

export default function FluidReveal() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let blobs: Blob[] = [];
    let mouse = { x: -999, y: -999 };
    let prevMouse = { x: -999, y: -999 };
    let idleTimer: ReturnType<typeof setTimeout> | null = null;
    let idleInterval: ReturnType<typeof setInterval> | null = null;
    let rafId: number;
    let lastTime = performance.now();

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const spawnBlob = (
      x: number,
      y: number,
      vx: number,
      vy: number,
      r: number
    ) => {
      if (blobs.length >= 100) blobs.shift();
      blobs.push({
        x,
        y,
        vx,
        vy,
        r: r * 0.3,
        maxR: r,
        phase: Math.random() * Math.PI * 2,
        wobbleSpeed: 1.5 + Math.random() * 2,
        wobbleAmp: 3 + Math.random() * 5,
        born: performance.now(),
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY };

      const dx = mouse.x - prevMouse.x;
      const dy = mouse.y - prevMouse.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      if (speed > 0.5) {
        const count = Math.floor(Math.random() * 2) + 1; // 1-3 blobs
        for (let i = 0; i < count; i++) {
          const spread = 20 + Math.random() * 20; // 20-40px
          const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 0.8;
          const sx = mouse.x + Math.cos(angle) * spread * (Math.random() - 0.5);
          const sy = mouse.y + Math.sin(angle) * spread * (Math.random() - 0.5);
          const speedBonus = Math.min(speed * 0.6, 30);
          const r = 35 + Math.random() * 40 + speedBonus;
          const burst = speed * 0.08;
          spawnBlob(
            sx,
            sy,
            (dx / speed) * burst * (0.5 + Math.random()),
            (dy / speed) * burst * (0.5 + Math.random()),
            r
          );
        }
      }

      prevMouse = { ...mouse };

      // Reset idle interval on movement
      if (idleTimer) clearTimeout(idleTimer);
      if (idleInterval) clearInterval(idleInterval);
      idleTimer = setTimeout(() => {
        idleInterval = setInterval(() => {
          if (mouse.x < 0) return;
          const angle = Math.random() * Math.PI * 2;
          const dist = 15 + Math.random() * 25;
          spawnBlob(
            mouse.x + Math.cos(angle) * dist,
            mouse.y + Math.sin(angle) * dist,
            Math.cos(angle) * 0.3,
            Math.sin(angle) * 0.3,
            40 + Math.random() * 55
          );
        }, 120);
      }, 80);
    };

    document.addEventListener("mousemove", onMouseMove);

    // Start idle spawning immediately
    idleInterval = setInterval(() => {
      if (mouse.x < -900) return;
      const angle = Math.random() * Math.PI * 2;
      const dist = 15 + Math.random() * 25;
      spawnBlob(
        mouse.x + Math.cos(angle) * dist,
        mouse.y + Math.sin(angle) * dist,
        Math.cos(angle) * 0.3,
        Math.sin(angle) * 0.3,
        40 + Math.random() * 55
      );
    }, 120);

    const CREAM = "#F5F1EB";

    const render = (now: number) => {
      const dt = Math.min(now - lastTime, 32);
      lastTime = now;

      const w = canvas.width / dpr;
      const h = canvas.height / dpr;

      ctx.clearRect(0, 0, w, h);

      // Fill entire canvas with cream (the mask layer)
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = CREAM;
      ctx.fillRect(0, 0, w, h);

      // Now draw blobs using destination-out to "erase" cream and reveal orange below
      ctx.globalCompositeOperation = "destination-out";

      blobs = blobs.filter((b) => b.r < b.maxR * 1.5 || b.maxR > 0);

      for (let i = blobs.length - 1; i >= 0; i--) {
        const b = blobs[i];

        // Grow fast
        b.r += (b.maxR - b.r) * 0.18;

        // Decelerate
        const decay = Math.pow(0.97, dt / 16);
        b.vx *= decay;
        b.vy *= decay;

        // Wobble
        const t = (now - b.born) / 1000;
        b.x += b.vx + Math.cos(b.phase + t * b.wobbleSpeed) * b.wobbleAmp * 0.04;
        b.y += b.vy + Math.sin(b.phase + t * b.wobbleSpeed * 1.3) * b.wobbleAmp * 0.04;

        // Remove tiny blobs that have stopped
        if (b.r > b.maxR * 0.99 && Math.abs(b.vx) < 0.05 && Math.abs(b.vy) < 0.05) {
          // keep them — they form the static revealed area
        }

        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        grad.addColorStop(0, "rgba(0,0,0,1)");
        grad.addColorStop(0.6, "rgba(0,0,0,0.95)");
        grad.addColorStop(0.85, "rgba(0,0,0,0.5)");
        grad.addColorStop(1, "rgba(0,0,0,0)");

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // Metaball threshold — pixel-level alpha quantization
      ctx.globalCompositeOperation = "source-over";
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      for (let i = 3; i < data.length; i += 4) {
        const a = data[i];
        if (a < 140) {
          data[i] = 0;
        } else if (a < 200) {
          data[i] = Math.round(((a - 140) / 60) * 255);
        } else {
          data[i] = 255;
        }
      }
      ctx.putImageData(imageData, 0, 0);

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
      if (idleTimer) clearTimeout(idleTimer);
      if (idleInterval) clearInterval(idleInterval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}
