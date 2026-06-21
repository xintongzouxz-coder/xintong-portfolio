"use client";

import { useState } from "react";
import StrategicPivotDiagram from "./StrategicPivotDiagram";
import OriginalRoadmapDiagram from "./OriginalRoadmapDiagram";

export default function RoadmapToggle({
  swapPhaseColors = false,
}: {
  swapPhaseColors?: boolean;
}) {
  const [showNew, setShowNew] = useState(true);

  return (
    <div>
      {/* Diagrams */}
      <div>
        <div style={{ display: showNew ? "block" : "none" }}>
          <StrategicPivotDiagram swapPhaseColors={swapPhaseColors} />
        </div>
        <div style={{ display: showNew ? "none" : "block" }}>
          <OriginalRoadmapDiagram />
        </div>
      </div>

      {/* Toggle bar — below diagram, centered within 800px roadmap width */}
      <div
        style={{
          width: 800,
          maxWidth: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 14,
          marginTop: 28,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: 14,
            fontWeight: showNew ? 400 : 600,
            color: showNew ? "rgba(26,26,26,0.4)" : "#1a1a1a",
            transition: "color 0.2s",
            cursor: "pointer",
            userSelect: "none",
          }}
          onClick={() => setShowNew(false)}
        >
          Original roadmap
        </span>

        {/* Pill toggle */}
        <button
          onClick={() => setShowNew((v) => !v)}
          aria-label="Toggle roadmap"
          style={{
            width: 52,
            height: 28,
            borderRadius: 14,
            background: showNew ? "#3445ff" : "rgba(26,26,26,0.2)",
            border: "none",
            cursor: "pointer",
            position: "relative",
            flexShrink: 0,
            transition: "background 0.25s",
            padding: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 3,
              left: showNew ? 27 : 3,
              width: 22,
              height: 22,
              borderRadius: "50%",
              background: "#fff",
              transition: "left 0.22s cubic-bezier(0.4,0,0.2,1)",
              boxShadow: "0 1px 3px rgba(0,0,0,0.18)",
            }}
          />
        </button>

        <span
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: 14,
            fontWeight: showNew ? 600 : 400,
            color: showNew ? "#1a1a1a" : "rgba(26,26,26,0.4)",
            transition: "color 0.2s",
            cursor: "pointer",
            userSelect: "none",
          }}
          onClick={() => setShowNew(true)}
        >
          New roadmap
        </span>
      </div>
    </div>
  );
}
