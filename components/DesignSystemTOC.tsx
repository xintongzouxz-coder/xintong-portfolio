"use client";

import { useState, useEffect } from "react";

type SubItem = { id: string; label: string };
type NavItem = { id: string; label: string; subItems?: SubItem[] };

const NAV_ITEMS: NavItem[] = [
  { id: "overview", label: "OVERVIEW" },
  { id: "multiplatform", label: "MULTIPLATFORM" },
  { id: "problem", label: "PROBLEM" },
  { id: "key-issues", label: "KEY ISSUES" },
  { id: "north-star", label: "NORTH STAR" },
  {
    id: "solutions",
    label: "SOLUTIONS",
    subItems: [
      { id: "solutions-source-of-truth", label: "Source of truth" },
      { id: "solutions-token-system", label: "Define a token system" },
      { id: "solutions-component-specs", label: "Component specs" },
      { id: "solutions-implementation", label: "Implementation" },
      { id: "solutions-ai", label: "AI Assisted" },
    ],
  },
  { id: "outcome", label: "OUTCOME" },
];

// Sub-sections checked before their parent so the most specific match wins
const OBSERVE_IDS = [
  "overview",
  "multiplatform",
  "problem",
  "key-issues",
  "north-star",
  "solutions-source-of-truth",
  "solutions-token-system",
  "solutions-component-specs",
  "solutions-implementation",
  "solutions-ai",
  "solutions",
  "outcome",
];

export default function DesignSystemTOC() {
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
        .ds-toc-btn:hover .ds-toc-label { transform: translateX(2px); }
        .ds-toc-label { transition: transform 0.18s ease, color 0.25s; }
        .ds-toc-sub-btn { transition: transform 0.18s ease, color 0.25s; }
        .ds-toc-sub-btn:hover { transform: translateX(2px); }
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
        <p style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.4, color: "#1a1a1a", margin: 0 }}>
          Rebuilding the Kody Design System
        </p>
      </div>

      {/* Nav items */}
      <div style={{ position: "relative" }}>
        {/* Connecting vertical line */}
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
                className="ds-toc-btn"
                onClick={() =>
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
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
                  className="ds-toc-label"
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
                        className="ds-toc-sub-btn"
                        onClick={() =>
                          document.getElementById(sub.id)?.scrollIntoView({ behavior: "smooth" })
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
                          transition: "color 0.25s",
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
