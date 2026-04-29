"use client";

import Link from "next/link";

const links = [
  { href: "/", label: "Project" },
  { href: "/about", label: "About" },
  { href: "/resume.pdf", label: "Resume", external: true },
];

const NAV_REST = "#7a7a7a";
// gray #7a7a7a (0% saturation) → hover with brand hue at +30% saturation: hsl(234, 30%, 48%)
const NAV_HOVER = "hsl(234, 30%, 48%)";

function setColor(el: HTMLElement, color: string) {
  el.style.color = color;
}

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 130px",
        background: "rgba(250,250,250,0.92)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontWeight: 500,
          fontSize: 20,
          color: "#3445ff",
          textDecoration: "none",
          letterSpacing: "-0.01em",
          transition: "opacity 0.18s",
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.75"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
      >
        Xintong Zou
      </Link>

      {/* Nav links */}
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {links.map(({ href, label, external }) => (
          <Link
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 400,
              fontSize: 17,
              color: NAV_REST,
              textDecoration: "none",
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
      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        <a
          href="mailto:your@email.com"
          style={{ color: NAV_REST, display: "flex", transition: "color 0.18s" }}
          onMouseEnter={(e) => setColor(e.currentTarget as HTMLElement, NAV_HOVER)}
          onMouseLeave={(e) => setColor(e.currentTarget as HTMLElement, NAV_REST)}
          aria-label="Email"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3,7 12,13 21,7" />
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: NAV_REST, display: "flex", transition: "color 0.18s" }}
          onMouseEnter={(e) => setColor(e.currentTarget as HTMLElement, NAV_HOVER)}
          onMouseLeave={(e) => setColor(e.currentTarget as HTMLElement, NAV_REST)}
          aria-label="LinkedIn"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
