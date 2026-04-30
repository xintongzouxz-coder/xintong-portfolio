"use client";

import { useState, useEffect } from "react";

type SubItem = { id: string; label: string };
type NavItem = { id: string; label: string; subItems?: SubItem[] };

const NAV_ITEMS: NavItem[] = [
  { id: "overview", label: "OVERVIEW" },
  { id: "business-goal", label: "BUSINESS GOAL" },
  {
    id: "research",
    label: "RESEARCH",
    subItems: [
      { id: "research-interview", label: "Interview" },
      { id: "research-insights", label: "Insights" },
    ],
  },
  { id: "pivot-roadmap", label: "PIVOT & ROADMAP" },
  {
    id: "solutions",
    label: "SOLUTIONS",
    subItems: [
      { id: "solutions-integrate", label: "Integrate PBB into PBL" },
      { id: "solutions-deprioritise", label: "Deprioritise PBB" },
      { id: "solutions-highlight", label: "Highlight benefits" },
    ],
  },
  { id: "results", label: "RESULTS" },
];

// Sub-sections checked before their parent so the most specific match wins
const OBSERVE_IDS = [
  "overview",
  "business-goal",
  "research-interview",
  "research-insights",
  "research",
  "pivot-roadmap",
  "solutions-integrate",
  "solutions-deprioritise",
  "solutions-highlight",
  "solutions",
  "results",
];

export default function TableOfContents() {
  const [activeId, setActiveId] = useState<string>("overview");

  useEffect(() => {
    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        });
        for (const id of OBSERVE_IDS) {
          if (visible.has(id)) {
            setActiveId(id);
            return;
          }
        }
      },
      { rootMargin: "-10% 0px -60% 0px", threshold: 0 }
    );

    OBSERVE_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
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
        .toc-btn:hover .toc-label {
          transform: translateX(2px);
        }
        .toc-label {
          transition: transform 0.18s ease, color 0.25s;
        }
        .toc-sub-btn {
          transition: transform 0.18s ease, color 0.25s;
        }
        .toc-sub-btn:hover {
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
          Choosing the Right Channel to Grow Pay by Bank
        </p>
      </div>

      {/* Nav items */}
      <div style={{ position: "relative" }}>
        {/* Connecting vertical line — starts/ends at first/last dot center */}
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
                className="toc-btn"
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
                {/* Dot */}
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
                  className="toc-label"
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
                        className="toc-sub-btn"
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
