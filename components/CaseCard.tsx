"use client";

import Link from "next/link";

interface CaseCardProps {
  href: string;
  image: string;
  tags: string[];
  title: string;
  year: string;
  description: string;
}

export default function CaseCard({
  href,
  image,
  tags,
  title,
  year,
  description,
}: CaseCardProps) {
  return (
    <Link
      href={href}
      style={{ textDecoration: "none", display: "block" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 20px 60px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 2px 16px rgba(0,0,0,0.05)";
      }}
    >
      <article
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
          borderRadius: 20,
          overflow: "hidden",
          background: "#fff",
          boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
          transition: "transform 1s cubic-bezier(0.16,1,0.3,1), box-shadow 1s cubic-bezier(0.16,1,0.3,1)",
          pointerEvents: "none",
        }}
      >
        {/* Left: Image */}
        <div
          style={{
            position: "relative",
            aspectRatio: "4/3",
            overflow: "hidden",
            background: "#f0ede8",
          }}
        >
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* Right: Info */}
        <div
          style={{
            padding: "40px 44px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 16,
          }}
        >
          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "rgba(26,26,26,0.5)",
                  background: "#f5f1eb",
                  padding: "4px 10px",
                  borderRadius: 100,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title + year */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-dm-serif)",
                fontSize: "clamp(22px, 2.2vw, 32px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#1a1a1a",
                margin: 0,
              }}
            >
              {title}
            </h3>
            <span
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: 13,
                color: "rgba(26,26,26,0.35)",
                marginTop: 6,
                display: "block",
              }}
            >
              {year}
            </span>
          </div>

          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: 15,
              lineHeight: 1.6,
              color: "rgba(26,26,26,0.6)",
              margin: 0,
              maxWidth: 340,
            }}
          >
            {description}
          </p>

          {/* CTA */}
          <div
            style={{
              marginTop: 8,
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--font-dm-sans)",
              fontSize: 13,
              fontWeight: 500,
              color: "#1a1a1a",
            }}
          >
            View case study
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2.5 7h9M7.5 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
