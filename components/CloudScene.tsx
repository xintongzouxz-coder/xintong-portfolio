"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function CloudScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const w = window.innerWidth;
    const h = window.innerHeight;

    // ── Renderer ──────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.85;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    // ── Scene / Camera ─────────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xc8c8c8);

    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    camera.position.z = 9;

    // ── Lighting — soft, no harsh point lights ─────────────────────
    // Hemisphere light: warm sky above, cool ground below — no specular spikes
    const hemi = new THREE.HemisphereLight(0xffecd0, 0xc8b090, 2.8);
    scene.add(hemi);

    // Very soft directional to give slight depth/shadow without glossy hot-spots
    const softDir = new THREE.DirectionalLight(0xffaa66, 0.4);
    softDir.position.set(3, 4, 5);
    scene.add(softDir);

    // ── Goldfish ───────────────────────────────────────────────────
    // fishContainer: receives mouse-tilt
    // fishGroup:     accumulates slow Y-spin
    const fishContainer = new THREE.Group();
    const fishGroup = new THREE.Group();
    fishContainer.add(fishGroup);

    // Shift fish left: body mostly behind the HTML glass grid,
    // only head/tail peek out to the right
    fishContainer.position.set(-1.6, 0, 0);
    scene.add(fishContainer);

    let mixer: THREE.AnimationMixer | null = null;
    let fishSpinY = 0;

    const loader = new GLTFLoader();
    loader.load(
      "/models/goldfish.glb",
      (gltf) => {
        const model = gltf.scene;

        // Scale so longest dimension = 4.5 world units
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scaleFactor = 4.5 / maxDim;
        model.scale.setScalar(scaleFactor);
        // Log bounding box center so we can tune fishContainer position
        const center = box.getCenter(new THREE.Vector3());
        console.log("Fish BB center (unscaled):", center.x.toFixed(2), center.y.toFixed(2), center.z.toFixed(2));
        console.log("Fish BB size (unscaled):", size.x.toFixed(2), size.y.toFixed(2), size.z.toFixed(2));

        fishGroup.add(model);

        // Play all animations at 0.5× speed
        if (gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(model);
          gltf.animations.forEach((clip) => {
            const action = mixer!.clipAction(clip);
            action.timeScale = 0.5;
            action.play();
          });
        }
      },
      undefined,
      (err) => console.warn("GLB load error:", err),
    );


    // ── Mouse parallax — fish moves less than HTML grid ────────────
    const mouse   = { x: 0, y: 0 };
    const fishCur = { x: 0, y: 0 };

    const onMouse = (e: MouseEvent) => {
      mouse.x =  (e.clientX / window.innerWidth  - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    // ── Animate ────────────────────────────────────────────────────
    const clock = new THREE.Clock();
    let raf: number;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Slow Y spin — 15 s per full revolution
      fishSpinY += delta * (Math.PI * 2 / 15);

      const LERP = 0.05;
      fishCur.x += (mouse.x * 0.10 - fishCur.x) * LERP;
      fishCur.y += (mouse.y * 0.07 - fishCur.y) * LERP;

      fishGroup.rotation.y     = fishSpinY;
      fishContainer.rotation.y = fishCur.x  * 0.14;
      fishContainer.rotation.x = fishCur.y  * 0.10;

      if (mixer) mixer.update(delta);
      renderer.render(scene, camera);
    };
    animate();

    // ── Resize ─────────────────────────────────────────────────────
    const onResize = () => {
      const nw = window.innerWidth;
      const nh = window.innerHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ position: "absolute", inset: 0, zIndex: 1 }}
    />
  );
}
