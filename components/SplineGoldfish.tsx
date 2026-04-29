"use client";

import { useEffect, useRef, useCallback } from "react";

const SCENE_URL = "https://prod.spline.design/8nPmqtgUtNLiByGi/scene.splinecode";
const FISH_NAME = "ryukin_goldfish";

const FOLLOW_LERP = 0.05;
const BASE_SWIM_SPEED = 4;
const MID_SPEED_BOOST = 0.2;   // 20% faster in the middle
const IDLE_DELAY = 1500;
const WORLD_SCALE = 2;
const FLIP_LERP_BASE = 0.02;

export default function SplineGoldfish({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<{
    app: { dispose: () => void } | null;
    fish: { position: { x: number; y: number }; rotation: { y: number } } | null;
    fishX: number; fishY: number;
    mouseX: number; mouseY: number;
    mouseActive: boolean; lastMouseMove: number;
    sceneWidth: number; sceneHeight: number;
    initialFishX: number; initialFishY: number;
    initialRotY: number;
    currentRotY: number;
    targetRotY: number;
    direction: number;
    swimTargetY: number;
    worldLeftX: number; worldRightX: number;
    worldTopY: number; worldBottomY: number;
    fishWorldWidth: number;
    loaded: boolean; raf: number | null;
  }>({
    app: null, fish: null,
    fishX: 0, fishY: 0,
    mouseX: 0, mouseY: 0,
    mouseActive: false, lastMouseMove: 0,
    sceneWidth: 0, sceneHeight: 0,
    initialFishX: 0, initialFishY: 0,
    initialRotY: 0,
    currentRotY: 0,
    targetRotY: 0,
    direction: 1,
    swimTargetY: 0,
    worldLeftX: 0, worldRightX: 0,
    worldTopY: 0, worldBottomY: 0,
    fishWorldWidth: 0, // estimated fish model width in world units
    loaded: false, raf: null,
  });

  const screenToWorld = useCallback((px: number, py: number) => {
    const s = stateRef.current;
    const cx = s.sceneWidth / 2;
    const cy = s.sceneHeight / 2;
    return {
      x: s.initialFishX + (px - cx) * WORLD_SCALE,
      y: s.initialFishY - (py - cy) * WORLD_SCALE,
    };
  }, []);

  const updateBounds = useCallback(() => {
    const s = stateRef.current;
    const left = screenToWorld(0, s.sceneHeight / 2);
    const right = screenToWorld(s.sceneWidth, s.sceneHeight / 2);
    const top = screenToWorld(s.sceneWidth / 2, 0);
    const bottom = screenToWorld(s.sceneWidth / 2, s.sceneHeight);
    s.worldLeftX = left.x;
    s.worldRightX = right.x;
    s.worldTopY = Math.max(top.y, bottom.y);
    s.worldBottomY = Math.min(top.y, bottom.y);
    // Estimate fish width as 15% of the total screen width in world units
    s.fishWorldWidth = Math.abs(s.worldRightX - s.worldLeftX) * 0.4;
  }, [screenToWorld]);

  const pickRandomY = useCallback(() => {
    const s = stateRef.current;
    const padding = (s.worldTopY - s.worldBottomY) * 0.15;
    s.swimTargetY = s.worldBottomY + padding + Math.random() * (s.worldTopY - s.worldBottomY - padding * 2);
  }, []);

  // Get speed multiplier based on position (1.0 at edges, 1.0 + boost at center)
  const getSpeedMultiplier = useCallback(() => {
    const s = stateRef.current;
    const totalWidth = s.worldRightX - s.worldLeftX;
    if (totalWidth === 0) return 1;
    // Normalise fish position: 0 at left edge, 1 at right edge
    const t = (s.fishX - s.worldLeftX) / totalWidth;
    // Clamp to 0-1
    const clamped = Math.max(0, Math.min(1, t));
    // Sine curve: 0 at edges, 1 at center
    return 1 + MID_SPEED_BOOST * Math.sin(clamped * Math.PI);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const s = stateRef.current;

    async function init() {
      const { Application } = await import("@splinetool/runtime");
      if (cancelled) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const app = new Application(canvas);
      await app.load(SCENE_URL);
      if (cancelled) return;
      const fish = app.findObjectByName(FISH_NAME);
      if (!fish) { console.warn(`Object "${FISH_NAME}" not found`); return; }

      s.app = app;
      s.fish = fish;
      s.initialFishX = fish.position.x;
      s.initialFishY = fish.position.y;
      s.initialRotY = fish.rotation.y;
      s.currentRotY = fish.rotation.y;
      s.targetRotY = fish.rotation.y;
      s.fishX = fish.position.x;
      s.fishY = fish.position.y;
      s.sceneWidth = canvas.clientWidth;
      s.sceneHeight = canvas.clientHeight;
      s.direction = 1;
      updateBounds();
      s.swimTargetY = fish.position.y;
      s.loaded = true;
      loop();
    }

    function loop() {
      if (cancelled) return;
      s.raf = requestAnimationFrame(loop);
      if (!s.fish) return;

      const now = performance.now();
      const idleTime = now - s.lastMouseMove;
      const isFollowing = s.mouseActive && idleTime < IDLE_DELAY;

      // Edge boundaries: fish must travel past edge by its full visual width
      const buffer = s.fishWorldWidth;
      const rightEdge = s.worldRightX + buffer * 2;
      const leftEdge = s.worldLeftX - buffer;

      if (isFollowing) {
        const world = screenToWorld(s.mouseX, s.mouseY);
        const dx = world.x - s.fishX;

        s.fishX += (world.x - s.fishX) * FOLLOW_LERP;
        s.fishY += (world.y - s.fishY) * FOLLOW_LERP;

        if (dx > 5) {
          s.direction = 1;
          s.targetRotY = s.initialRotY;
        } else if (dx < -5) {
          s.direction = -1;
          s.targetRotY = s.initialRotY - Math.PI;
        }
      } else {
        if (s.mouseActive && idleTime >= IDLE_DELAY) {
          s.mouseActive = false;
          pickRandomY();
        }

        // Speed with center boost
        const speed = BASE_SWIM_SPEED * getSpeedMultiplier();
        s.fishX += speed * s.direction;
        s.fishY += (s.swimTargetY - s.fishY) * 0.02;

        // Fish fully off right edge → instant flip, swim back
        if (s.direction === 1 && s.fishX > rightEdge) {
          s.direction = -1;
          s.targetRotY = s.initialRotY - Math.PI;
          s.currentRotY = s.initialRotY - Math.PI;
          pickRandomY();
          s.fishY = s.swimTargetY;
        }

        // Fish fully off left edge → instant flip, swim back
        if (s.direction === -1 && s.fishX < leftEdge) {
          s.direction = 1;
          s.targetRotY = s.initialRotY;
          s.currentRotY = s.initialRotY;
          pickRandomY();
          s.fishY = s.swimTargetY;
        }
      }

      // Smooth easeInOut rotation
      let rotDiff = s.targetRotY - s.currentRotY;
      while (rotDiff > Math.PI) rotDiff -= Math.PI * 2;
      while (rotDiff < -Math.PI) rotDiff += Math.PI * 2;
      const absDiff = Math.abs(rotDiff);
      const t = 1 - (absDiff / Math.PI);
      const easedLerp = FLIP_LERP_BASE + 0.12 * Math.sin(t * Math.PI);
      s.currentRotY += rotDiff * easedLerp;

      // Apply
      s.fish.position.x = s.fishX;
      s.fish.position.y = s.fishY;
      s.fish.rotation.y = s.currentRotY;
    }

    function onMouseMove(e: MouseEvent) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      if (!inside) {
        s.mouseActive = false;
        return;
      }
      s.mouseX = e.clientX - rect.left;
      s.mouseY = e.clientY - rect.top;
      s.mouseActive = true;
      s.lastMouseMove = performance.now();
    }
    function onResize() {
      if (canvasRef.current) {
        s.sceneWidth = canvasRef.current.clientWidth;
        s.sceneHeight = canvasRef.current.clientHeight;
        updateBounds();
      }
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);
    init();
    return () => {
      cancelled = true;
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (s.raf) cancelAnimationFrame(s.raf);
      if (s.app) s.app.dispose();
    };
  }, [screenToWorld, updateBounds, pickRandomY, getSpeedMultiplier]);

  return <canvas ref={canvasRef} className={className} style={{ width: "100%", height: "100%", pointerEvents: "none" }} />;
}
