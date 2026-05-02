"use client";

import Link from "next/link";
import { useRef } from "react";

interface CaseCardProps {
  href: string;
  image?: string;
  bg?: string;
  hoverVideo?: string;
  tags: string[];
  title: string;
  year: string;
  description: string;
}

export default function CaseCard({ href, image, bg, hoverVideo, tags, title, year, description }: CaseCardProps) {
  const fillStyle = { flex: "1 1 calc(50% - 30px)", minWidth: 0 } as const;
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.style.opacity = "1";
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.style.opacity = "0";
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const content = (
    <div
      onMouseEnter={hoverVideo ? handleMouseEnter : undefined}
      onMouseLeave={hoverVideo ? handleMouseLeave : undefined}
    >
      {/* Image — 600×425 aspect ratio */}
      <div
        style={{
          borderRadius: 20,
          overflow: "hidden",
          aspectRatio: "600 / 425",
          background: bg ?? "#D9D9D9",
          position: "relative",
        }}
      >
        {image && (
          <img
            src={image}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: bg ? "contain" : "cover", display: "block" }}
          />
        )}
        {hoverVideo && (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              height: "100%",
              width: "auto",
              opacity: 0,
              transition: "opacity 0.3s ease",
            }}
          >
            <source src={hoverVideo} type="video/mp4" />
          </video>
        )}
      </div>

      {/* Text */}
      <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        {/* Title + Year */}
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16 }}>
          <span
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: 20,
              fontWeight: 400,
              color: "#1a1a1a",
              lineHeight: 1.3,
            }}
          >
            {title}
          </span>
          <span
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: 16,
              fontWeight: 400,
              color: "#7A7A7A",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {year}
          </span>
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: 16,
            fontWeight: 400,
            color: "#1a1a1a",
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          {description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: 15,
                fontWeight: 400,
                color: "#7A7A7A",
                background: "rgba(231, 231, 231, 0.6)",
                padding: "4px 12px",
                borderRadius: 100,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (!href || href === "#") return <div style={fillStyle}>{content}</div>;

  return (
    <Link href={href} style={{ textDecoration: "none", display: "block", ...fillStyle }}>
      {content}
    </Link>
  );
}
