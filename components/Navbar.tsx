"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/#work", label: "Project", scrollTo: "work" },
  { href: "/#about", label: "About", scrollTo: "about" },
  { href: "https://drive.google.com/file/d/1eQo8PHiHhcs9STQnhwButIuo2aJ2b6W7/view?usp=drive_link", label: "Resume", external: true },
];

function scrollEaseOut(targetId: string) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const start = window.scrollY;
  const end = el.getBoundingClientRect().top + start;
  const duration = 950;
  const startTime = performance.now();

  function tick(now: number) {
    const elapsed = now - startTime;
    const t = Math.min(elapsed / duration, 1);
    const eased = t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;
    window.scrollTo(0, start + (end - start) * eased);
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const NAV_REST = "#7a7a7a";
const NAV_HOVER = "hsl(234, 30%, 48%)";

function setColor(el: HTMLElement, color: string) {
  el.style.color = color;
}

const glassStyle = {
  background: "rgba(255,255,255,0.28)",
  backdropFilter: "blur(40px) saturate(1.9) brightness(1.08)",
  WebkitBackdropFilter: "blur(40px) saturate(1.9) brightness(1.08)",
  border: "1px solid rgba(255,255,255,0.5)",
  boxShadow:
    "0 8px 32px rgba(0,0,0,0.07), 0 2px 8px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(255,255,255,0.15)",
};

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < lastScrollY.current || y < 50) {
        setVisible(true);
      } else if (y > lastScrollY.current) {
        setVisible(false);
        setMenuOpen(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const translateY = visible ? "translateY(0)" : "translateY(calc(-100% - 24px))";

  return (
    <>
      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile  { display: none; }
        .nav-menu-item:hover { color: hsl(234,30%,48%) !important; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile  { display: block !important; }
        }
      `}</style>

      {/* ── Desktop: original layout, rounded-rect corners ── */}
      <nav
        className="nav-desktop"
        style={{
          position: "fixed",
          top: 16,
          left: "50%",
          width: "calc(100% - 260px)",
          maxWidth: 1252,
          zIndex: 1000,
          padding: "14px 32px",
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "space-between",
          transform: `translateX(-50%) ${translateY}`,
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          ...glassStyle,
        }}
      >
        <Link
          href="/#hero"
          style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500, fontSize: 18, color: "#3445ff", textDecoration: "none", letterSpacing: "-0.01em", transition: "opacity 0.18s" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.7"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
          onClick={(e) => { if (document.getElementById("hero")) { e.preventDefault(); scrollEaseOut("hero"); } }}
        >
          Xintong Zou
        </Link>

        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {links.map(({ href, label, external, scrollTo }) => (
            <Link
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500, fontSize: 18, color: NAV_REST, textDecoration: "none", transition: "color 0.18s" }}
              onMouseEnter={(e) => setColor(e.currentTarget as HTMLElement, NAV_HOVER)}
              onMouseLeave={(e) => setColor(e.currentTarget as HTMLElement, NAV_REST)}
              onClick={scrollTo ? (e) => { if (document.getElementById(scrollTo)) { e.preventDefault(); scrollEaseOut(scrollTo); } } : undefined}
            >
              {label}
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          <a href="mailto:xintongzou.xz@gmail.com" style={{ color: NAV_REST, display: "flex", transition: "color 0.18s" }}
            onMouseEnter={(e) => setColor(e.currentTarget as HTMLElement, NAV_HOVER)}
            onMouseLeave={(e) => setColor(e.currentTarget as HTMLElement, NAV_REST)}
            aria-label="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" /><polyline points="3,7 12,13 21,7" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/xintongzou" target="_blank" rel="noopener noreferrer"
            style={{ color: NAV_REST, display: "flex", transition: "color 0.18s" }}
            onMouseEnter={(e) => setColor(e.currentTarget as HTMLElement, NAV_HOVER)}
            onMouseLeave={(e) => setColor(e.currentTarget as HTMLElement, NAV_REST)}
            aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </nav>

      {/* ── Mobile: hamburger menu, rounded-rect corners ── */}
      <nav
        className="nav-mobile"
        style={{
          position: "fixed",
          top: 16,
          left: "50%",
          width: "calc(100% - 48px)",
          zIndex: 1000,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: menuOpen ? 20 : 20,
          borderBottomRightRadius: menuOpen ? 20 : 20,
          overflow: "hidden",
          transform: `translateX(-50%) ${translateY}`,
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          ...glassStyle,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 24px" }}>
          <Link
            href="/#hero"
            style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500, fontSize: 18, color: "#3445ff", textDecoration: "none", letterSpacing: "-0.01em", transition: "opacity 0.18s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.7"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
            onClick={(e) => { if (document.getElementById("hero")) { e.preventDefault(); scrollEaseOut("hero"); } setMenuOpen(false); }}
          >
            Xintong Zou
          </Link>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{ background: "none", border: "none", padding: 4, cursor: "pointer", color: NAV_REST, display: "flex", alignItems: "center", justifyContent: "center", transition: "color 0.18s" }}
            onMouseEnter={(e) => setColor(e.currentTarget as HTMLElement, NAV_HOVER)}
            onMouseLeave={(e) => setColor(e.currentTarget as HTMLElement, NAV_REST)}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>

        <div style={{
          maxHeight: menuOpen ? "200px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          borderTop: menuOpen ? "1px solid rgba(26,26,26,0.06)" : "1px solid transparent",
        }}>
          {links.map(({ href, label, external, scrollTo }) => (
            <Link
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="nav-menu-item"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 48, fontFamily: "var(--font-dm-sans)", fontWeight: 500, fontSize: 16, color: NAV_REST, textDecoration: "none", transition: "color 0.18s" }}
              onClick={(e) => {
                setMenuOpen(false);
                if (scrollTo && document.getElementById(scrollTo)) { e.preventDefault(); scrollEaseOut(scrollTo); }
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
