"use client";

import Link from "next/link";

const links = [
  { href: "/", label: "Project" },
  { href: "/about", label: "About" },
  { href: "/resume.pdf", label: "Resume", external: true },
];

const NAV_REST = "#7a7a7a";
// gray #7a7a7a (0% sat) → hover: brand hue 234° at 30% saturation = hsl(234, 30%, 48%)
const NAV_HOVER = "hsl(234, 30%, 48%)";

function setColor(el: HTMLElement, color: string) {
  el.style.color = color;
}

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 14,
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 260px)",
        maxWidth: 1252,
        zIndex: 1000,
        padding: "10px 20px",
        borderRadius: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(255,255,255,0.28)",
        backdropFilter: "blur(40px) saturate(1.9) brightness(1.08)",
        WebkitBackdropFilter: "blur(40px) saturate(1.9) brightness(1.08)",
        border: "1px solid rgba(255,255,255,0.5)",
        boxShadow:
          "0 8px 32px rgba(0,0,0,0.07), 0 2px 8px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(255,255,255,0.15)",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontWeight: 500,
          fontSize: 15,
          color: "#3445ff",
          textDecoration: "none",
          letterSpacing: "-0.01em",
          padding: "6px 10px",
          transition: "opacity 0.18s",
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.7"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
      >
        Xintong Zou
      </Link>

      {/* Nav links */}
      <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
        {links.map(({ href, label, external }) => (
          <Link
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 400,
              fontSize: 14,
              color: NAV_REST,
              textDecoration: "none",
              padding: "6px 14px",
              borderRadius: 100,
              transition: "color 0.18s",
            }}
            onMouseEnter={(e) => setColor(e.currentTarget as HTMLElement, NAV_HOVER)}
            onMouseLeave={(e) => setColor(e.currentTarget as HTMLElement, NAV_REST)}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Icons: email + LinkedIn */}
      <div style={{ display: "flex", gap: 16, alignItems: "center", padding: "0 6px" }}>
        <a
          href="mailto:xintongzou.xz@gmail.com"
          style={{ color: NAV_REST, display: "flex", transition: "color 0.18s" }}
          onMouseEnter={(e) => setColor(e.currentTarget as HTMLElement, NAV_HOVER)}
          onMouseLeave={(e) => setColor(e.currentTarget as HTMLElement, NAV_REST)}
          aria-label="Email"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3,7 12,13 21,7" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/xintongzou"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: NAV_REST, display: "flex", transition: "color 0.18s" }}
          onMouseEnter={(e) => setColor(e.currentTarget as HTMLElement, NAV_HOVER)}
          onMouseLeave={(e) => setColor(e.currentTarget as HTMLElement, NAV_REST)}
          aria-label="LinkedIn"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
