"use client";

import Link from "next/link";
import { useState } from "react";
import type { CSSProperties } from "react";

const IMG = {
  fileBack:     "https://www.figma.com/api/mcp/asset/dad6ddf5-b0cf-4ce2-b3d7-3cca066fdc7a",
  fileFront:    "https://www.figma.com/api/mcp/asset/281f83ed-cee4-4a9c-8029-2ad277e006fd",
  fileBack2:    "https://www.figma.com/api/mcp/asset/e8a30134-858e-4931-94dc-faa9ff0752a2",
  fileFront2:   "https://www.figma.com/api/mcp/asset/68ab5327-22e0-4a36-9b3b-5168b3c041be",
  prorizon:     "https://www.figma.com/api/mcp/asset/0dfa189a-b362-4701-9047-cdae89242ac5",
  payByBank:    "https://www.figma.com/api/mcp/asset/c19d578e-6de6-4bfe-aa90-738c064a6e98",
  designSystem: "https://www.figma.com/api/mcp/asset/8fd47608-dcf9-4fc0-92c3-1f4e5b9b223c",
  profile:      "https://www.figma.com/api/mcp/asset/296dc1cd-d024-4f10-ac3b-d5ab3d959447",
  barbican:     "https://www.figma.com/api/mcp/asset/34e0d3ba-d61e-4baa-847e-3271a4386ded",
  goldfish:     "https://www.figma.com/api/mcp/asset/35678c32-d38f-4349-9e69-9f3bc45b7ecf",
  brain:        "https://www.figma.com/api/mcp/asset/eff6b2e8-0bb4-4638-9064-62eaf91f1669",
};

const stackGrid: CSSProperties = {
  display: "inline-grid",
  gridTemplateColumns: "max-content",
  gridTemplateRows: "max-content",
};

const cell = (ml: number, mt: number): CSSProperties => ({
  gridColumn: 1,
  gridRow: 1,
  marginLeft: ml,
  marginTop: mt,
});

type Block = "left" | "center" | "right";
const EASE = "cubic-bezier(0.0, 0, 0.2, 1)";
const T = `opacity 500ms ${EASE}, transform 500ms ${EASE}`;

export default function HeroBlocks() {
  const [hovered, setHovered] = useState<Block | null>(null);

  function blockStyle(block: Block): CSSProperties {
    const isActive = hovered === block;
    const isDimmed = hovered !== null && !isActive;

    // Push direction: away from hovered block.
    // Edge blocks (left/right) get a smaller push so they don't go off-screen.
    let tx = 0;
    if (isDimmed) {
      if (hovered === "center") {
        tx = block === "left" ? -35 : 35;
      } else if (hovered === "left") {
        tx = block === "center" ? 35 : 14; // right is edge — small push
      } else {
        tx = block === "center" ? -35 : -14; // left is edge — small push
      }
    }

    const defaultZ: Record<Block, number> = { left: 1, center: 2, right: 1 };
    return {
      position: "relative",
      zIndex: isActive ? 10 : defaultZ[block],
      opacity: isDimmed ? 0.5 : 1,
      transform: isDimmed ? `translateX(${tx}px) scale(0.85)` : "none",
      transition: T,
    };
  }

  function rotStyle(block: Block, deg: number): CSSProperties {
    return {
      transform: hovered === block ? "rotate(0deg)" : `rotate(${deg}deg)`,
      transition: T,
    };
  }

  // Each photo card can fly a custom amount (py px upward in screen space)
  function fly(block: Block, py: number): CSSProperties {
    return {
      transform: hovered === block ? `translateY(${py}px)` : "translateY(0px)",
      transition: T,
    };
  }

  function blockBase(block: Block, width: number, height: number): CSSProperties {
    return {
      display: "flex",
      width,
      height,
      alignItems: "center",
      justifyContent: "center",
      marginRight: -64,
      flexShrink: 0,
      cursor: "pointer",
      ...blockStyle(block),
    };
  }

  return (
    <div style={{ display: "flex", alignItems: "flex-start", paddingRight: 64 }}>

      {/* ── Left: Case study file ── */}
      <div
        style={blockBase("left", 412, 474)}
        onMouseEnter={() => setHovered("left")}
        onMouseLeave={() => setHovered(null)}
      >
        <div style={rotStyle("left", -5)}>
          <div style={stackGrid}>

            {/* File back */}
            <div style={cell(0, 53.15)}>
              <div style={{ width: 364, height: 389, position: "relative" }}>
                <img src={IMG.fileBack} alt="" style={{ position: "absolute", top: "-0.11%", right: 0, bottom: "-0.11%", left: "-0.12%", width: "100.12%", height: "100.22%", display: "block", maxWidth: "none" }} />
              </div>
            </div>

            {/* Design System — back z (2nd in DOM, rendered below Pay by Bank & Prorizon) */}
            <div style={cell(1.24, 0)}>
              <div style={fly("left", -40)}>
                <div style={{ transform: "rotate(-2.93deg)" }}>
                  <div style={{ width: 203, height: 154, borderRadius: 20, overflow: "hidden", boxShadow: "10px 10px 10px rgba(167,167,167,0.25)", position: "relative" }}>
                    <div style={{ position: "absolute", background: "white", inset: 0 }} />
                    <img src={IMG.designSystem} alt="Design System" style={{ position: "absolute", width: "117.84%", height: "108%", left: "-8.92%", top: "-3.88%", maxWidth: "none" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Pay by Bank — middle z (3rd in DOM) */}
            <div style={cell(161.66, 26.4)}>
              <div style={fly("left", -65)}>
                <div style={{ transform: "rotate(10.07deg)" }}>
                  <div style={{ width: 183, height: 192, borderRadius: 20, overflow: "hidden", boxShadow: "10px 10px 10px rgba(167,167,167,0.25)", position: "relative" }}>
                    <div style={{ position: "absolute", background: "white", inset: 0 }} />
                    <img src={IMG.payByBank} alt="Pay by Bank" style={{ position: "absolute", width: "119.62%", height: "100.06%", left: 0, top: "-0.03%", maxWidth: "none" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Prorizon — front z (4th in DOM, rendered on top) */}
            <div style={cell(40.67, 150.37)}>
              <div style={fly("left", -120)}>
                <div style={{ transform: "rotate(5deg)" }}>
                  <div style={{ width: 258, height: 172, borderRadius: 20, overflow: "hidden", boxShadow: "10px 10px 10px rgba(167,167,167,0.25)", position: "relative" }}>
                    <div style={{ position: "absolute", background: "#e9e9e9", inset: 0 }} />
                    <img src={IMG.prorizon} alt="Prorizon" style={{ position: "absolute", width: "117.47%", height: "131.87%", left: "-11.16%", top: "-17.58%", maxWidth: "none" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* File front */}
            <div style={cell(0.13, 73.0)}>
              <div style={{ width: 352, height: 370, position: "relative" }}>
                <img src={IMG.fileFront} alt="" style={{ position: "absolute", top: "-9.31%", right: "-8.57%", bottom: "-4.71%", left: "-6.16%", width: "114.73%", height: "114.02%", display: "block", maxWidth: "none" }} />
              </div>
            </div>

            {/* CTA */}
            <div style={{ ...cell(86.18, 358.42), width: "max-content" }}>
              <Link href="/#work" style={{ textDecoration: "none" }}>
                <div style={{ background: "#292929", padding: 16, borderRadius: 8 }}>
                  <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 16, color: "white", whiteSpace: "nowrap" }}>Read case studies</span>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* ── Center: Profile photo ── */}
      <div
        style={blockBase("center", 355, 408)}
        onMouseEnter={() => setHovered("center")}
        onMouseLeave={() => setHovered(null)}
      >
        <div style={rotStyle("center", 5)}>
          <div style={{ width: 323, height: 382, borderRadius: 20, overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", background: "rgba(217,217,217,0.2)", inset: 0 }} />
            <img src={IMG.profile} alt="Xintong Zou" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </div>

      {/* ── Right: Fun project file ── */}
      <div
        style={blockBase("right", 435, 500)}
        onMouseEnter={() => setHovered("right")}
        onMouseLeave={() => setHovered(null)}
      >
        <div style={rotStyle("right", 10)}>
          <div style={stackGrid}>

            {/* File back */}
            <div style={cell(0.42, 53.58)}>
              <div style={{ width: 364, height: 389, position: "relative" }}>
                <img src={IMG.fileBack2} alt="" style={{ position: "absolute", top: "-0.11%", right: 0, bottom: "-0.11%", left: "-0.12%", width: "100.12%", height: "100.22%", display: "block", maxWidth: "none" }} />
              </div>
            </div>

            {/* Barbican — back z (2nd in DOM) */}
            <div style={cell(154.15, 11.9)}>
              <div style={fly("right", -50)}>
                <div style={{ transform: "rotate(9.48deg)" }}>
                  <div style={{ width: 162, height: 213, borderRadius: 20, overflow: "hidden", boxShadow: "10px 10px 20px rgba(167,167,167,0.25)", position: "relative" }}>
                    <img src={IMG.barbican} alt="Barbican" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Goldfish (flipped) — middle z (3rd in DOM); outer wrapper moves in screen-space Y */}
            <div style={cell(17, 154.39)}>
              <div style={fly("right", -120)}>
                <div style={{ transform: "scaleY(-1) rotate(168.8deg)" }}>
                  <div style={{ width: 276, height: 161, borderRadius: 20, overflow: "hidden", boxShadow: "10px 10px 20px rgba(167,167,167,0.25)", position: "relative" }}>
                    <img src={IMG.goldfish} alt="Goldfish" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Brain — front z (4th in DOM, rendered on top) */}
            <div style={cell(13.99, 0)}>
              <div style={fly("right", -60)}>
                <div style={{ transform: "rotate(-12.23deg)" }}>
                  <div style={{ width: 245, height: 139, borderRadius: 20, overflow: "hidden", boxShadow: "10px 10px 20px rgba(167,167,167,0.25)", position: "relative" }}>
                    <img src={IMG.brain} alt="Brain" style={{ position: "absolute", width: "163.79%", height: "181.78%", left: "-35.89%", top: "-55.94%", maxWidth: "none" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* File front */}
            <div style={cell(0, 72.25)}>
              <div style={{ width: 352, height: 370, position: "relative" }}>
                <img src={IMG.fileFront2} alt="" style={{ position: "absolute", top: "-9.31%", right: "-8.57%", bottom: "-4.71%", left: "-6.16%", width: "114.73%", height: "114.02%", display: "block", maxWidth: "none" }} />
              </div>
            </div>

            {/* CTA */}
            <div style={{ ...cell(76.91, 361.11), width: "max-content" }}>
              <div style={{ background: "#292929", padding: 16, borderRadius: 8 }}>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 16, color: "white", whiteSpace: "nowrap" }}>Check my fun project</span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
