"use client";

import { useState, useEffect } from "react";

type SubItem = { id: string; label: string };
type NavItem = { id: string; label: string; subItems?: SubItem[] };

const NAV_ITEMS: NavItem[] = [
  { id: "overview", label: "OVERVIEW" },
  { id: "background", label: "BACKGROUND" },
  { id: "problem", label: "PROBLEM" },
  {
    id: "research",
    label: "RESEARCH",
    subItems: [
      { id: "research-focus-group", label: "Focus Group" },
      { id: "research-empathy-map", label: "Empathy Map" },
      { id: "research-findings", label: "Findings" },
    ],
  },
  { id: "opportunities", label: "OPPORTUNITIES" },
  {
    id: "ideation-validation",
    label: "IDEATION VALIDATION",
    subItems: [
      { id: "ideation-interview", label: "Interview & A/B Test" },
      { id: "ideation-prototype", label: "Low-Fi prototype" },
    ],
  },
  {
    id: "solutions",
    label: "SOLUTIONS",
    subItems: [
      { id: "solutions-personalisation", label: "Personalisation" },
      { id: "solutions-daily-login", label: "Daily Log-in" },
      { id: "solutions-data-collection", label: "Smarter data collection" },
    ],
  },
  { id: "final-design", label: "FINAL DESIGN" },
  { id: "learning", label: "LEARNING" },
];

// Sub-sections listed before parent so the most specific match wins
const OBSERVE_IDS = [
  "overview",
  "background",
  "problem",
  "research-focus-group",
  "research-empathy-map",
  "research-findings",
  "research",
  "opportunities",
  "ideation-interview",
  "ideation-prototype",
  "ideation-validation",
  "solutions-personalisation",
  "solutions-daily-login",
  "solutions-data-collection",
  "solutions",
  "final-design",
  "learning",
];

export default function ProrizonTOC() {
  const [activeId, setActiveId] = useState<string>("overview");

  useEffect(() => {
    const handleScroll = () => {
      const offsets = OBSERVE_IDS.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: el.getBoundingClientRect().top };
      });

      const THRESHOLD = window.innerHeight * 0.35;
      const passed = offsets.filter((o) => o.top <= THRESHOLD);

      if (passed.length > 0) {
        setActiveId(passed[passed.length - 1].id);
      } else {
        setActiveId("overview");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activePrimary = (() => {
    for (const item of NAV_ITEMS) {
      if (item.id === activeId) return item.id;
      if (item.subItems?.some((s) => s.id === activeId)) return item.id;
    }
    return "overview";
  })();

  const font = "var(--font-dm-sans)";

  return (
    <div style={{ fontFamily: font }}>
      <style>{`
        .prorizon-toc-btn:hover .prorizon-toc-label {
          transform: translateX(2px);
        }
        .prorizon-toc-label {
          transition: transform 0.18s ease, color 0.25s;
        }
        .prorizon-toc-sub-btn {
          transition: transform 0.18s ease, color 0.25s;
        }
        .prorizon-toc-sub-btn:hover {
          transform: translateX(2px);
        }
      `}</style>

      {/* Case study header */}
      <div style={{ marginBottom: 40 }}>
        <span
          style={{
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#aaaaaa",
            display: "block",
            marginBottom: 10,
          }}
        >
          Case Study
        </span>
        <p
          style={{
            fontSize: 15,
            fontWeight: 500,
            lineHeight: 1.4,
            color: "#1a1a1a",
            margin: 0,
          }}
        >
          Wellness Optimisation App
        </p>
      </div>

      {/* Nav items */}
      <div style={{ position: "relative" }}>
        {/* Vertical connecting line */}
        <div
          style={{
            position: "absolute",
            left: 5,
            top: 8,
            bottom: 40,
            width: 1,
            background: "#E0E0E0",
            pointerEvents: "none",
          }}
        />

        {NAV_ITEMS.map((item) => {
          const isPrimActive = activePrimary === item.id;
          const hasChildren = !!item.subItems?.length;

          return (
            <div key={item.id}>
              <button
                className="prorizon-toc-btn"
                onClick={() =>
                  document
                    .getElementById(item.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  background: "none",
                  border: "none",
                  padding: `0 0 ${hasChildren && isPrimActive ? 10 : 32}px`,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  cursor: "pointer",
                  textAlign: "left",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    background: isPrimActive ? "#1A1A1A" : "#A2A2A2",
                    flexShrink: 0,
                    position: "relative",
                    zIndex: 1,
                    transition: "background 0.25s",
                  }}
                />
                <span
                  className="prorizon-toc-label"
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: isPrimActive ? "#1A1A1A" : "#A2A2A2",
                    lineHeight: 1,
                  }}
                >
                  {item.label}
                </span>
              </button>

              {/* Sub-items — shown only when parent is active */}
              {hasChildren && isPrimActive && (
                <div style={{ paddingLeft: 23, paddingBottom: 10 }}>
                  {item.subItems!.map((sub) => {
                    const isActiveSub = activeId === sub.id;
                    return (
                      <button
                        key={sub.id}
                        className="prorizon-toc-sub-btn"
                        onClick={() =>
                          document
                            .getElementById(sub.id)
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        style={{
                          background: "none",
                          border: "none",
                          padding: "0 0 10px",
                          display: "block",
                          cursor: "pointer",
                          textAlign: "left",
                          width: "100%",
                          fontFamily: font,
                          fontSize: 14,
                          lineHeight: 1.5,
                          color: isActiveSub ? "#1A1A1A" : "#A2A2A2",
                        }}
                      >
                        {sub.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
