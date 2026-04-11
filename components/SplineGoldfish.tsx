"use client";

import { useEffect, useRef, useCallback } from "react";

const SCENE_URL = "https://prod.spline.design/8nPmqtgUtNLiByGi/scene.splinecode";
const FISH_NAME = "ryukin_goldfish";

const FOLLOW_LERP = 0.06;
const WANDER_LERP = 0.015;
const IDLE_DELAY = 1500;
const WANDER_RADIUS = 250;
const WANDER_INTERVAL = 2500;
const TURN_SPEED = 0.12;

export default function SplineGoldfish({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<{
    app: { dispose: () => void } | null;
    fish: { position: { x: number; y: number; z: number }; rotation: { z: number } } | null;
    fishX: number; fishY: number; targetX: number; targetY: number;
    mouseX: number; mouseY: number; mouseActive: boolean; lastMouseMove: number;
    wanderOriginX: number; wanderOriginY: number;
    wanderTargetX: number; wanderTargetY: number; lastWanderPick: number;
    sceneWidth: number; sceneHeight: number;
    initialFishX: number; initialFishY: number; initialFishZ: number;
    loaded: boolean; raf: number | null;
  }>({
    app: null, fish: null,
    fishX: 0, fishY: 0, targetX: 0, targetY: 0,
    mouseX: 0, mouseY: 0, mouseActive: false, lastMouseMove: 0,
    wanderOriginX: 0, wanderOriginY: 0,
    wanderTargetX: 0, wanderTargetY: 0, lastWanderPick: 0,
    sceneWidth: 0, sceneHeight: 0,
    initialFishX: 0, initialFishY: 0, initialFishZ: 0,
    loaded: false, raf: null,
  });

  const pickWanderTarget = useCallback(() => {
    const s = stateRef.current;
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * WANDER_RADIUS;
    s.wanderTargetX = s.wanderOriginX + Math.cos(angle) * dist;
    s.wanderTargetY = s.wanderOriginY + Math.sin(angle) * dist;
    s.lastWanderPick = performance.now();
  }, []);

  const screenToWorld = useCallback((px: number, py: number) => {
    const s = stateRef.current;
    const cx = s.sceneWidth / 2;
    const cy = s.sceneHeight / 2;
    const scale = 0.5;
    return {
      x: s.initialFishX + (px - cx) * scale,
      y: s.initialFishY - (py - cy) * scale,
    };
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

      s.app = app; s.fish = fish;
      s.initialFishX = fish.position.x;
      s.initialFishY = fish.position.y;
      s.initialFishZ = fish.position.z;
      s.fishX = fish.position.x; s.fishY = fish.position.y;
      s.targetX = fish.position.x; s.targetY = fish.position.y;
      s.wanderOriginX = fish.position.x; s.wanderOriginY = fish.position.y;
      s.wanderTargetX = fish.position.x; s.wanderTargetY = fish.position.y;
      s.sceneWidth = canvas.clientWidth;
      s.sceneHeight = canvas.clientHeight;
      s.loaded = true;
      loop();
    }

    function loop() {
      if (cancelled) return;
      s.raf = requestAnimationFrame(loop);
      if (!s.fish) return;
      const now = performance.now();
      const idleTime = now - s.lastMouseMove;

      if (s.mouseActive && idleTime < IDLE_DELAY) {
        const world = screenToWorld(s.mouseX, s.mouseY);
        s.targetX = world.x; s.targetY = world.y;
        s.fishX += (s.targetX - s.fishX) * FOLLOW_LERP;
        s.fishY += (s.targetY - s.fishY) * FOLLOW_LERP;
      } else {
        if (s.mouseActive && idleTime >= IDLE_DELAY) {
          s.wanderOriginX = s.fishX; s.wanderOriginY = s.fishY;
          s.mouseActive = false;
          pickWanderTarget();
        }
        if (now - s.lastWanderPick > WANDER_INTERVAL) pickWanderTarget();
        s.targetX = s.wanderTargetX; s.targetY = s.wanderTargetY;
        s.fishX += (s.targetX - s.fishX) * WANDER_LERP;
        s.fishY += (s.targetY - s.fishY) * WANDER_LERP;
      }

      s.fish.position.x = s.fishX;
      s.fish.position.y = s.fishY;

      const dx = s.targetX - s.fishX;
      const dy = s.targetY - s.fishY;
      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        const targetAngle = Math.atan2(dy, dx);
        let currentAngle = s.fish.rotation.z;
        let diff = targetAngle - currentAngle;
        while (diff > Math.PI) diff -= Math.PI * 2;
        while (diff < -Math.PI) diff += Math.PI * 2;
        s.fish.rotation.z += diff * TURN_SPEED;
      }
    }

    function onMouseMove(e: MouseEvent) {
      s.mouseX = e.clientX; s.mouseY = e.clientY;
      s.mouseActive = true; s.lastMouseMove = performance.now();
    }
    function onResize() {
      if (canvasRef.current) {
        s.sceneWidth = canvasRef.current.clientWidth;
        s.sceneHeight = canvasRef.current.clientHeight;
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
  }, [screenToWorld, pickWanderTarget]);

  return <canvas ref={canvasRef} className={className} style={{ width: "100%", height: "100%" }} />;
}
