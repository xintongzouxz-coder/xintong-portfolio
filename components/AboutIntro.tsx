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

export default function AboutIntro() {
  return (
    <section
      id="about"
      style={{
        background: "var(--bg)",
        padding: "100px 130px",
        boxSizing: "border-box",
      }}
    >
      {/* Title */}
      <p
        style={{
          fontFamily: "var(--font-dm-mono)",
          fontSize: 20,
          fontWeight: 400,
          letterSpacing: "0.08em",
          textAlign: "center",
          color: "#4F4F4F",
          margin: 0,
          marginBottom: 60,
        }}
      >
        ABOUT ME
      </p>

      {/* Content row */}
      <div style={{ display: "flex", gap: 60, alignItems: "flex-start" }}>

        {/* Photo */}
        <div
          style={{
            width: 292,
            height: 378,
            borderRadius: 20,
            overflow: "hidden",
            flexShrink: 0,
            background: "#D9D9D9",
          }}
        >
          <img
            src="/images/about-photo.jpg"
            alt="Xintong Zou"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        {/* Bio text */}
        <div
          style={{
            flex: 1,
            height: 378,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
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

        {/* Education — bottom-aligned */}
        <div
          style={{
            height: 378,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            flexShrink: 0,
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
    </section>
  );
}
