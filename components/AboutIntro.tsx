"use client";

import { useEffect, useRef } from "react";
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
    fish: "/images/fish-1.png",
    paddingTop: 0,
  },
  {
    years: "23-24",
    company: "Prorizon",
    role: "UX Researcher / UI Designer",
    fish: "/images/fish-2.png",
    paddingTop: 62,
  },
  {
    years: "23-24",
    company: "Defence Community Capital",
    role: "Founding Product Designer",
    fish: "/images/fish-3.png",
    paddingTop: 102,
  },
  {
    years: "24-25",
    company: "Kody",
    role: "Product Designer",
    fish: "/images/fish-4.png",
    paddingTop: 166,
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const dirRef = useRef(-1); // 1 = scroll right (content moves left), -1 = scroll left (content moves right)
  const lastTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number>();

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

  return (
    <section
      id="about"
      style={{
        background: "var(--bg)",
        padding: "100px 124px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── ABOUT ME title ── */}
      <p style={{ ...mono, textAlign: "center", marginBottom: 60 }}>ABOUT ME</p>

      {/* ── Intro row: photo + bio + education ── */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 60, alignItems: "flex-end", justifyContent: "center" }}>

        {/* Photo — fill width, hug height */}
        <div
          style={{
            flex: 1,
            borderRadius: 20,
            overflow: "hidden",
            background: "#D9D9D9",
          }}
        >
          <img
            src="/images/about-photo.jpg"
            alt="Xintong Zou"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>

        {/* Bio text — fixed 500px width, hug height */}
        <div
          style={{
            width: 500,
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

        {/* Education — hug width and height */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
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
      <div style={{ marginTop: 80 }}>

        {/* Title — left-aligned */}
        <p style={{ ...mono, marginBottom: 32 }}>MY JOURNEY</p>

        {/* Fish row */}
        <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
          {JOURNEY.map(({ years, company, role, fish, paddingTop }) => (
            <div key={years + company} style={{ width: 303, paddingTop, flexShrink: 0 }}>

              {/* Fish image */}
              <img
                src={fish}
                alt={company}
                style={{ width: "100%", height: "auto", display: "block" }}
              />

              {/* Text row */}
              <div style={{ marginTop: 4, display: "flex", gap: 16, alignItems: "flex-start" }}>
                {/* Year */}
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

                {/* Company + role */}
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
          ))}
        </div>

      </div>

      {/* ── WHAT I CAN HELP WITH ── */}
      <div style={{ marginTop: 80 }}>

        {/* Title — left-aligned, same font as MY JOURNEY */}
        <p style={{ ...mono, marginBottom: 32 }}>What I Can Help With</p>

        {/* Two columns */}
        <div style={{ display: "flex", gap: 60 }}>

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
      {/* Negative margin to break out of section's 130px side padding for scroll */}
      <div style={{ marginTop: 80, marginLeft: -124, marginRight: -124 }}>
        {/* paddingTop/Bottom give room for shadow (Y=20, blur=40 → needs 60px below, 20px above) */}
        <div
          ref={scrollRef}
          className="testimonials-scroll"
          style={{ overflowX: "auto", paddingLeft: 124, paddingRight: 124, paddingTop: 20, paddingBottom: 60, scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; lastTimeRef.current = null; }}
        >
          <div style={{ display: "flex", gap: 40, width: "max-content" }}>
            {TESTIMONIALS.map(({ quote, name }) => (
              <div
                key={name}
                style={{
                  width: 448,
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
