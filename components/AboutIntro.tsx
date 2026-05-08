"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

const BIO = [
  "My journey began in industrial design. Though I loved the freedom of academic practice, yet as a student, the limitations of resources and the nature of the industry often made it difficult to see my designs come to fruition.",
  "I wanted to push my design craft at a faster pace and have a positive impact on vastly more people. This ambition opened the doors to experience design, where I could leverage the skills and design principles learned from industrial design.",
  "I enjoy the detective-like exploration involved in user research and the thrill of seeing users' surprised reactions to my design solutions—although it can sometimes be nerve-wracking.",
  "Today, I work as a Product Designer at different London startups, focused on Fintech and Wellbeing. Most of my work is about helping powerful products feel easier to understand, easier to adopt, and more meaningful in people's daily workflows.",
];

const EDUCATION = [
  { school: "Loughborough University London", degree: "MSc Design Innovation" },
  { school: "Shenzhen University China", degree: "BA Product Design" },
];

const JOURNEY = [
  {
    years: "22-23",
    company: "The Tavistock and Portman\nNHS Foundation Trust",
    role: "Informal Associate Researcher",
    fish: "/images/ui/fish-1.png",
    hoverFish: "/images/ui/fish-1-hover.png",
    paddingTop: 0,
    tooltip: {
      timeline: "",
      summary: "Delivered research reports to board members as a student researcher",
      points: [
        "Integrated role-playing theory into workshops with 20+ participants",
        "Visualised research outcomes to improve stakeholder communication and presentation clarity",
      ],
    },
  },
  {
    years: "23-24",
    company: "Prorizon",
    role: "UX Researcher / UI Designer",
    fish: "/images/ui/fish-2.png",
    hoverFish: "/images/ui/fish-2-hover.png",
    paddingTop: 62,
    tooltip: {
      timeline: "CONTRACT · NOV 2023 – APR 2024",
      summary: "Grew from design intern into hybrid product designer and researcher",
      points: [
        "Conducted co-creative workshops and A/B testing with 20+ participants, generating actionable insights",
        "Designed improvements that increased usage efficiency by 40%",
      ],
    },
  },
  {
    years: "23-24",
    company: "Defence Community Capital",
    role: "Founding Product Designer",
    fish: "/images/ui/fish-3.png",
    hoverFish: "/images/ui/fish-3-hover.png",
    paddingTop: 102,
    tooltip: {
      timeline: "Full-Time · APR 2024 – DEC 2024",
      summary: "First designer in the team, establishing product and marketing design foundations",
      points: [
        "Designed a landing page and two marketing campaigns, increasing user engagement by 13% and driving a 700+ increase in monthly website visitors",
        "Delivered over 6 interactive prototypes to improve stakeholder approval ratings during project reviews",
      ],
    },
  },
  {
    years: "24-25",
    company: "Kody",
    role: "Product Designer",
    fish: "/images/ui/fish-4.png",
    hoverFish: "/images/ui/fish-4-hover.png",
    paddingTop: 166,
    tooltipSide: "left" as const,
    tooltip: {
      timeline: "Full-Time · JAN 2025 – DEC 2025",
      summary: "Led end-to-end product delivery in a B2B fintech environment",
      points: [
        "Owned the redesign of Open Banking user flows, resulting in a 120% increase in adoption",
        "Led design system consolidation across four platforms",
        "Led the multi-currency conversion project on the Android terminal app, contributing to an estimated $1M+ in annualised revenue impact",
      ],
    },
  },
];

const TESTIMONIALS = [
  {
    quote: "Not the lesser of Xintong's achievements was her progression and emergence as a more self-determining and confident practitioner.\n\nXintong is a gifted, star researcher-analyst and much else.",
    name: "Professor Eenasul Fateh",
  },
  {
    quote: "Xintong stands out as the most exceptional Product and UX Designer I've worked with during my 3.5 years as a technology entrepreneur.\n\nShe seamlessly blends her advanced academic background with hands-on project experience to create impactful application prototypes, multi-channel marketing assets, and presentation decks.",
    name: "Victor R. Morris",
  },
  {
    quote: "What I value most is her way of collaborating. Xintong communicates with clarity, approaches feedback with the right level of openness, and consistently brings organisation to projects that begin with a lot of ambiguity.\n\nShe moves discussions forward, provides reasoning behind her decisions, and always keeps the end-user at the centre of the process.",
    name: "Manuel Ng",
  },
  {
    quote: "She has a strong ability to take feedback from different stakeholders, especially from the operational side, and translate it into clear, thoughtful design decisions.\n\nXintong listens carefully, asks the right questions and reflects feedback in a way that meaningfully improves the product.",
    name: "Yu-Lin Huang",
  },
];

const mono: CSSProperties = {
  fontFamily: "var(--font-dm-mono)",
  fontSize: 20,
  fontWeight: 400,
  letterSpacing: "0.08em",
  color: "#4F4F4F",
  margin: 0,
};

export default function AboutIntro() {
  const [hoveredJourney, setHoveredJourney] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const dirRef = useRef(-1); // 1 = scroll right (content moves left), -1 = scroll left (content moves right)
  const lastTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Start at rightmost position so first movement is left-to-right (content moves right)
    el.scrollLeft = el.scrollWidth - el.clientWidth;

    const step = (now: number) => {
      const dt = lastTimeRef.current != null ? now - lastTimeRef.current : 0;
      lastTimeRef.current = now;

      if (!pausedRef.current && dt > 0) {
        const maxScroll = el.scrollWidth - el.clientWidth;
        const speed = maxScroll / 14000; // full traverse in 14000ms
        el.scrollLeft += dirRef.current * speed * dt;
        if (dirRef.current === 1 && el.scrollLeft >= maxScroll - 1) {
          el.scrollLeft = maxScroll;
          dirRef.current = -1;
        } else if (dirRef.current === -1 && el.scrollLeft <= 1) {
          el.scrollLeft = 0;
          dirRef.current = 1;
        }
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  const sidePad = isMobile ? 32 : 124;
  const vertPad = isMobile ? 40 : 100;

  return (
    <section
      id="about"
      style={{
        background: "var(--bg)",
        padding: `${vertPad}px ${sidePad}px`,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── ABOUT ME title ── */}
      <p style={{ ...mono, textAlign: "center", marginBottom: isMobile ? 40 : 60 }}>ABOUT ME</p>

      {/* ── Intro row: photo + bio + education ── */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          flexWrap: isMobile ? undefined : "wrap",
          gap: isMobile ? 32 : 60,
          alignItems: isMobile ? "center" : "flex-end",
          justifyContent: "center",
        }}
      >

        {/* Photo */}
        <div
          style={{
            ...(isMobile
              ? { width: 202, height: 230, flexShrink: 0 }
              : { flex: 1, alignSelf: "stretch" }),
            borderRadius: 20,
            overflow: "hidden",
            background: "#D9D9D9",
          }}
        >
          <img
            src="/images/home/about-photo.jpg"
            alt="Xintong Zou"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        {/* Bio text */}
        <div
          style={{
            width: isMobile ? "100%" : 500,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {BIO.map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: 16,
                fontWeight: 400,
                color: "#4F4F4F",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Education */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            ...(isMobile ? { width: "100%" } : {}),
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: 24,
              fontWeight: 400,
              color: "#3445FF",
              margin: 0,
              marginBottom: 20,
            }}
          >
            Education
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {EDUCATION.map(({ school, degree }) => (
              <div key={school} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: 20,
                    fontWeight: 400,
                    color: "#4F4F4F",
                    lineHeight: 1.3,
                  }}
                >
                  {school}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#4F4F4F",
                  }}
                >
                  {degree}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── MY JOURNEY ── */}
      <div style={{ marginTop: isMobile ? 60 : 80 }}>

        {/* Title — left-aligned */}
        <p style={{ ...mono, marginBottom: 32 }}>MY JOURNEY</p>

        {/* Fish row / column */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 32 : 8,
            alignItems: isMobile ? "center" : "flex-start",
          }}
        >
          {JOURNEY.map(({ years, company, role, fish, hoverFish, paddingTop, tooltip, tooltipSide }) => {
            const isHovered = hoveredJourney === company;
            return (
              <div
                key={years + company}
                style={{
                  width: 303,
                  paddingTop: isMobile ? 0 : paddingTop,
                  flexShrink: 0,
                }}
              >

                {/* Fish image + tooltip wrapper */}
                <div
                  style={{ position: "relative" }}
                  onMouseEnter={!isMobile ? () => setHoveredJourney(company) : undefined}
                  onMouseLeave={!isMobile ? () => setHoveredJourney(null) : undefined}
                  onClick={isMobile ? () => setHoveredJourney(prev => prev === company ? null : company) : undefined}
                >
                  {/* Both images always in DOM so hoverFish is preloaded; swap via opacity */}
                  <img
                    src={fish}
                    alt={company}
                    style={{ width: "100%", height: "auto", display: "block", opacity: isHovered ? 0 : 1, transition: "opacity 0.1s ease" }}
                  />
                  <img
                    src={hoverFish}
                    alt=""
                    aria-hidden="true"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", display: "block", opacity: isHovered ? 1 : 0, transition: "opacity 0.1s ease" }}
                  />

                  {/* Tooltip */}
                  {isHovered && (
                    <div
                      style={{
                        position: "absolute",
                        ...(isMobile
                          ? { top: "calc(100% + 12px)", left: 0, width: "100%" }
                          : tooltipSide === "left"
                            ? { right: "calc(100% + 12px)", top: "50%", transform: "translateY(-50%)", width: 330 }
                            : { left: "calc(100% + 12px)", top: "50%", transform: "translateY(-50%)", width: 330 }),
                        padding: 16,
                        borderRadius: 16,
                        background: "rgba(255,255,255,0.95)",
                        boxShadow: "20px 20px 40px 0px rgba(212,212,212,0.25)",
                        border: "1px solid rgba(224,224,224,0.70)",
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                        zIndex: 10,
                      }}
                    >
                      {tooltip.timeline && (
                        <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, fontWeight: 400, color: "#4F4F4F" }}>
                          {tooltip.timeline}
                        </span>
                      )}
                      <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 18, fontWeight: 400, color: "#4F4F4F", lineHeight: 1.4 }}>
                        {tooltip.summary}
                      </span>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        {tooltip.points.map((point, i) => (
                          <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                            <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, color: "#7A7A7A", flexShrink: 0, lineHeight: 1.5 }}>·</span>
                            <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, fontWeight: 400, color: "#7A7A7A", lineHeight: 1.5 }}>
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Text row */}
                <div style={{ marginTop: 4, display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#7A7A7A",
                      flexShrink: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {years}
                  </span>

                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <span
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: 18,
                        fontWeight: 400,
                        color: "#4F4F4F",
                        lineHeight: 1.3,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {company}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: 15,
                        fontWeight: 400,
                        color: "#4F4F4F",
                      }}
                    >
                      {role}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* ── WHAT I CAN HELP WITH ── */}
      <div style={{ marginTop: isMobile ? 60 : 80 }}>

        {/* Title — left-aligned, same font as MY JOURNEY */}
        <p style={{ ...mono, marginBottom: 32 }}>What I Can Help With</p>

        {/* Two columns / one column on mobile */}
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 40 : 60 }}>

          {/* Product Design */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 24, fontWeight: 400, color: "#4F4F4F" }}>
              Product Design
            </span>
            <hr style={{ border: "none", borderTop: "1.5px solid rgba(175,175,175,0.57)", margin: 0 }} />
            {["UX/UI Design", "User Research", "Website Design", "Product Design"].map((item) => (
              <div key={item} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 16, fontWeight: 400, color: "#4F4F4F" }}>
                  {item}
                </span>
                <hr style={{ border: "none", borderTop: "1px solid rgba(207,207,207,0.49)", margin: 0 }} />
              </div>
            ))}
          </div>

          {/* Other */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 24, fontWeight: 400, color: "#4F4F4F" }}>
              Other
            </span>
            <hr style={{ border: "none", borderTop: "1.5px solid rgba(175,175,175,0.57)", margin: 0 }} />
            {["Graphic Design", "Photography", "Brand identity", "3D Modelling"].map((item) => (
              <div key={item} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 16, fontWeight: 400, color: "#4F4F4F" }}>
                  {item}
                </span>
                <hr style={{ border: "none", borderTop: "1px solid rgba(207,207,207,0.49)", margin: 0 }} />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── TESTIMONIALS ── */}
      {/* Negative margin to break out of section's side padding for scroll */}
      <div style={{ marginTop: isMobile ? 60 : 80, marginLeft: -sidePad, marginRight: -sidePad }}>
        {/* paddingTop/Bottom give room for shadow (Y=20, blur=40 → needs 60px below, 20px above) */}
        <div
          ref={scrollRef}
          className="testimonials-scroll"
          style={{ overflowX: "auto", paddingLeft: sidePad, paddingRight: sidePad, paddingTop: 20, paddingBottom: 60, scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; lastTimeRef.current = null; }}
        >
          <div style={{ display: "flex", gap: 40, width: "max-content" }}>
            {TESTIMONIALS.map(({ quote, name }) => (
              <div
                key={name}
                style={{
                  width: isMobile ? 300 : 448,
                  flexShrink: 0,
                  padding: 32,
                  borderRadius: 16,
                  border: "1px solid rgba(224,224,224,0.70)",
                  boxShadow: "20px 20px 40px 0px rgba(212,212,212,0.25)",
                  background: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                {/* Quote paragraphs */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
                  {quote.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: 16,
                        fontWeight: 400,
                        color: "#4F4F4F",
                        margin: 0,
                        lineHeight: 1.6,
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
                {/* Name */}
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#7A7A7A",
                    margin: 0,
                    textAlign: "right",
                  }}
                >
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
