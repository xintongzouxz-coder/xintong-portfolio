"use client";

import { useEffect, useRef, useCallback } from "react";

const SCENE_URL = "https://prod.spline.design/8nPmqtgUtNLiByGi/scene.splinecode";
const FISH_NAME = "ryukin_goldfish";

const FOLLOW_LERP = 0.05;
const SWIM_SPEED = 3;
const IDLE_DELAY = 1500;
const WORLD_SCALE = 2;
const OFFSCREEN_BUFFER = 100;

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
    direction: number;
    swimTargetY: number;
    worldLeftX: number; worldRightX: number;
    worldTopY: number; worldBottomY: number;
    loaded: boolean; raf: number | null;
  }>({
    app: null, fish: null,
    fishX: 0, fishY: 0,
    mouseX: 0, mouseY: 0,
    mouseActive: false, lastMouseMove: 0,
    sceneWidth: 0, sceneHeight: 0,
    initialFishX: 0, initialFishY: 0,
    initialRotY: 0,
    direction: 1,
    swimTargetY: 0,
    worldLeftX: 0, worldRightX: 0,
    worldTopY: 0, worldBottomY: 0,
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
  }, [screenToWorld]);

  const pickRandomY = useCallback(() => {
    const s = stateRef.current;
    const padding = (s.worldTopY - s.worldBottomY) * 0.15;
    s.swimTargetY = s.worldBottomY + padding + Math.random() * (s.worldTopY - s.worldBottomY - padding * 2);
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
      s.fishX = fish.position.x;
      s.fishY = fish.position.y;
      s.sceneWidth = canvas.clientWidth;
      s.sceneHeight = canvas.clientHeight;
      s.direction = 1;
      updateBounds();
      s.swimTargetY = fish.position.y;
      s.loaded = true;

      console.log("[Goldfish] loaded", {
        initialPos: { x: s.initialFishX, y: s.initialFishY },
        initialRotY: s.initialRotY,
        bounds: { L: s.worldLeftX, R: s.worldRightX, T: s.worldTopY, B: s.worldBottomY },
      });

      loop();
    }

    function loop() {
      if (cancelled) return;
      s.raf = requestAnimationFrame(loop);
      if (!s.fish) return;

      const now = performance.now();
      const idleTime = now - s.lastMouseMove;
      const isFollowing = s.mouseActive && idleTime < IDLE_DELAY;

      if (isFollowing) {
        const world = screenToWorld(s.mouseX, s.mouseY);
        const dx = world.x - s.fishX;

        s.fishX += (world.x - s.fishX) * FOLLOW_LERP;
        s.fishY += (world.y - s.fishY) * FOLLOW_LERP;

        if (dx > 5) {
          s.direction = 1;
          s.fish.rotation.y = s.initialRotY;
        } else if (dx < -5) {
          s.direction = -1;
          s.fish.rotation.y = s.initialRotY - Math.PI;
        }
      } else {
        if (s.mouseActive && idleTime >= IDLE_DELAY) {
          s.mouseActive = false;
          pickRandomY();
        }

        s.fishX += SWIM_SPEED * s.direction;
        s.fishY += (s.swimTargetY - s.fishY) * 0.02;

        if (s.direction === 1 && s.fishX > s.worldRightX + OFFSCREEN_BUFFER) {
          s.direction = -1;
          s.fishX = s.worldRightX + OFFSCREEN_BUFFER;
          s.fish.rotation.y = s.initialRotY - Math.PI;
          pickRandomY();
          s.fishY = s.swimTargetY;
        }

        if (s.direction === -1 && s.fishX < s.worldLeftX - OFFSCREEN_BUFFER) {
          s.direction = 1;
          s.fishX = s.worldLeftX - OFFSCREEN_BUFFER;
          s.fish.rotation.y = s.initialRotY;
          pickRandomY();
          s.fishY = s.swimTargetY;
        }
      }

      s.fish.position.x = s.fishX;
      s.fish.position.y = s.fishY;
    }

    function onMouseMove(e: MouseEvent) {
      s.mouseX = e.clientX;
      s.mouseY = e.clientY;
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
  }, [screenToWorld, updateBounds, pickRandomY]);

  return <canvas ref={canvasRef} className={className} style={{ width: "100%", height: "100%" }} />;
}
