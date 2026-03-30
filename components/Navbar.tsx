"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Portfolio" },
  { href: "/about", label: "About" },
  {
    href: "/resume.pdf",
    label: "Resume",
    external: true,
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        position: "fixed",
        top: 14,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        minWidth: 520,
        padding: "10px 14px",
        borderRadius: 100,
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
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontWeight: 500,
          fontSize: 15,
          color: "var(--text-dark)",
          textDecoration: "none",
          letterSpacing: "-0.01em",
          padding: "6px 10px",
        }}
      >
        Xintong Zou
      </Link>

      <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
        {links.map(({ href, label, external }) => {
          const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

          if (isActive) {
            return (
              <Link
                key={label}
                href={href}
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "var(--text-dark)",
                  textDecoration: "none",
                  padding: "6px 14px",
                  borderRadius: 100,
                  background: "rgba(255,255,255,0.52)",
                  backdropFilter: "blur(20px) saturate(1.5)",
                  WebkitBackdropFilter: "blur(20px) saturate(1.5)",
                  border: "1px solid rgba(255,255,255,0.65)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.9), 0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                {label}
              </Link>
            );
          }

          return (
            <Link
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 400,
                fontSize: 14,
                color: "rgba(26,26,26,0.45)",
                textDecoration: "none",
                padding: "6px 14px",
                borderRadius: 100,
                transition: "background 0.15s, color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.4)";
                (e.currentTarget as HTMLElement).style.color = "#1a1a1a";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "rgba(26,26,26,0.45)";
              }}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
