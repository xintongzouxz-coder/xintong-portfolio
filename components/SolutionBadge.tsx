"use client";

import { useState } from "react";
import RoadmapTooltip, { type LabelId } from "./RoadmapTooltip";

interface Props {
  labelId: LabelId;
  dotColor: string;
  textColor: string;
  label: string;
}

export default function SolutionBadge({ labelId, dotColor, textColor, label }: Props) {
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <>
      <div
        style={{
          background: "#fff",
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: 12,
          borderRadius: 20,
          flexShrink: 0,
          boxShadow: "8px 8px 20px rgba(197,197,197,0.25)",
          cursor: "default",
        }}
        onMouseEnter={(e) => { setHovered(true); setMouse({ x: e.clientX, y: e.clientY }); }}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
      >
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: dotColor, flexShrink: 0 }} />
        <span style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 14, color: textColor, whiteSpace: "nowrap" }}>
          {label}
        </span>
      </div>
      <RoadmapTooltip labelId={labelId} mouseX={mouse.x} mouseY={mouse.y} visible={hovered} />
    </>
  );
}
