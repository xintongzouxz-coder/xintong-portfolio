"use client";

import Link from "next/link";
import { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface CaseCardProps {
  href: string;
  image?: string;
  bg?: string;
  hoverVideo?: string;
  hoverLottie?: object;
  tags: string[];
  title: string;
  year: string;
  description: string;
}

export default function CaseCard({ href, image, bg, hoverVideo, hoverLottie, tags, title, year, description }: CaseCardProps) {
  const fillStyle = { flex: "1 1 calc(50% - 30px)", minWidth: 0 } as const;
  const videoRef = useRef<HTMLVideoElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const lottieWrapRef = useRef<HTMLDivElement>(null);
  const lottiePlayerRef = useRef<LottieRefCurrentProps>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.style.opacity = "1";
      videoRef.current.play();
    }
    if (lottieWrapRef.current) lottieWrapRef.current.style.opacity = "1";
    if (lottiePlayerRef.current) { lottiePlayerRef.current.goToAndPlay(0, true); }
    if (imageRef.current) imageRef.current.style.opacity = "0";
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.style.opacity = "0";
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    if (lottieWrapRef.current) lottieWrapRef.current.style.opacity = "0";
    if (lottiePlayerRef.current) lottiePlayerRef.current.stop();
    if (imageRef.current) imageRef.current.style.opacity = "1";
  };

  const hasHover = !!(hoverVideo || hoverLottie);

  const content = (
    <div
      onMouseEnter={hasHover ? handleMouseEnter : undefined}
      onMouseLeave={hasHover ? handleMouseLeave : undefined}
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
            ref={hasHover ? imageRef : undefined}
            src={image}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: bg ? "contain" : "cover", display: "block", transition: "opacity 0.21s ease" }}
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
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
              width: "100%",
              height: "auto",
              opacity: 0,
              transition: "opacity 0.21s ease",
            }}
          >
            <source src={hoverVideo} type="video/mp4" />
          </video>
        )}
        {hoverLottie && (
          <div
            ref={lottieWrapRef}
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0,
              transition: "opacity 0.21s ease",
            }}
          >
            <Lottie
              lottieRef={lottiePlayerRef}
              animationData={hoverLottie}
              loop
              autoplay={false}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )}
      </div>

      {/* Text */}
      <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        {/* Title + Year */}
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16 }}>
          <span
            className="case-card-title"
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
              className="case-tag"
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

  if (!href || href === "#") return <div className="case-card" style={fillStyle}>{content}</div>;

  return (
    <Link href={href} className="case-card" style={{ textDecoration: "none", display: "block", ...fillStyle }}>
      {content}
    </Link>
  );
}
