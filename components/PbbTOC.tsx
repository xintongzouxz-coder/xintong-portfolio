"use client";

import { useState, useEffect } from "react";

type SubItem = { id: string; label: string };
type NavItem = { id: string; label: string; targetId?: string; subItems?: SubItem[] };

const NAV_ITEMS: NavItem[] = [
  { id: "overview", label: "OVERVIEW" },
  { id: "original-brief", label: "BACKGROUND" },
  {
    id: "product-strategy",
    label: "PRODUCT STRATEGY",
    targetId: "wrong-context",
    subItems: [
      { id: "wrong-context", label: "Wrong terminal context" },
      { id: "choosing-pbl", label: "Choosing PBL" },
    ],
  },
  { id: "design-challenge", label: "DESIGN CHALLENGE" },
  {
    id: "design-solutions",
    label: "DESIGN SOLUTIONS",
    targetId: "merchant-awareness",
    subItems: [
      { id: "merchant-awareness", label: "Design for merchants" },
      { id: "payer-choice", label: "Design for payers" },
    ],
  },
  { id: "prototype", label: "RAPID PROTOTYPE" },
  { id: "final-design", label: "FINAL DESIGN" },
  { id: "result", label: "RESULT" },
  { id: "reflection", label: "REFLECTION" },
];

const OBSERVE_IDS = [
  "overview",
  "original-brief",
  "wrong-context",
  "choosing-pbl",
  "design-challenge",
  "merchant-awareness",
  "payer-choice",
  "prototype",
  "final-design",
  "result",
  "reflection",
];

export default function PbbTOC() {
  const [activeId, setActiveId] = useState<string>("overview");

  useEffect(() => {
    let ticking = false;

    const updateActive = () => {
      const marker = window.innerHeight * 0.22;
      let current = OBSERVE_IDS[0];

      for (const id of OBSERVE_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= marker) {
          current = id;
        }
      }

      setActiveId(current);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
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
        .caseb-toc-btn:hover .caseb-toc-label { transform: translateX(2px); }
        .caseb-toc-label { transition: transform 0.18s ease, color 0.25s; }
        .caseb-toc-sub { transition: transform 0.18s ease, color 0.25s; }
        .caseb-toc-sub:hover { transform: translateX(2px); }
      `}</style>

      <div style={{ marginBottom: 40 }}>
        <span style={{
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#aaaaaa",
          display: "block",
          marginBottom: 10,
        }}>
          Case Study
        </span>
        <p style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.4, color: "#1a1a1a", margin: 0 }}>
          Growing Pay by Bank
        </p>
      </div>

      <div style={{ position: "relative" }}>
        <div style={{
          position: "absolute",
          left: 5,
          top: 8,
          bottom: 40,
          width: 1,
          background: "#E0E0E0",
          pointerEvents: "none",
        }} />

        {NAV_ITEMS.map((item) => {
          const isPrimActive = activePrimary === item.id;
          const hasChildren = !!item.subItems?.length;

          return (
            <div key={item.id}>
              <button
                className="caseb-toc-btn"
                onClick={() =>
                  document.getElementById(item.targetId ?? item.id)?.scrollIntoView({ behavior: "smooth" })
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
                <div style={{
                  width: 11,
                  height: 11,
                  borderRadius: "50%",
                  background: isPrimActive ? "#1A1A1A" : "#A2A2A2",
                  flexShrink: 0,
                  position: "relative",
                  zIndex: 1,
                  transition: "background 0.25s",
                }} />
                <span
                  className="caseb-toc-label"
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: isPrimActive ? "#1A1A1A" : "#A2A2A2",
                    lineHeight: 1.2,
                  }}
                >
                  {item.label}
                </span>
              </button>

              {hasChildren && isPrimActive && (
                <div style={{ paddingLeft: 23, paddingBottom: 10 }}>
                  {item.subItems!.map((sub) => {
                    const isActiveSub = activeId === sub.id;
                    return (
                      <button
                        key={sub.id}
                        className="caseb-toc-sub"
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
                          fontSize: 13,
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
