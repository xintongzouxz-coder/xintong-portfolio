import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProrizonTOC from "@/components/ProrizonTOC";

// ── Shared styles ─────────────────────────────────────────────────────────────
const overviewWidth: React.CSSProperties = {
  padding: "0 124px",
  boxSizing: "border-box",
  width: "100%",
};

const contentWidth: React.CSSProperties = {
  width: "100%",
};

const sectionGap = 120;

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans)",
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: "#3445ff",
  marginBottom: 14,
  display: "block",
};

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans)",
  fontSize: 20,
  fontWeight: 600,
  lineHeight: 1.3,
  letterSpacing: "-0.01em",
  color: "#1a1a1a",
  margin: "0 0 28px",
};

const h3Style: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans)",
  fontSize: 18,
  fontWeight: 600,
  lineHeight: 1.3,
  letterSpacing: "-0.01em",
  color: "#1a1a1a",
  margin: "0 0 16px",
};

const bodyStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans)",
  fontSize: 16,
  lineHeight: 1.75,
  color: "rgba(26,26,26,0.72)",
  margin: 0,
};

const glassCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.55)",
  backdropFilter: "blur(20px)",
  borderRadius: 16,
  border: "1px solid rgba(255,255,255,0.7)",
  padding: "32px 36px",
};

const divider = (
  <div style={{ borderTop: "1px solid rgba(26,26,26,0.1)", marginBottom: 64 }} />
);

function Bullet({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 10 }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#3445ff", marginTop: 10, flexShrink: 0 }} />
      <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.6, color: "#1a1a1a", margin: 0 }}>{text}</p>
    </div>
  );
}

function NDANote() {
  return (
    <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, lineHeight: 1.6, color: "rgba(26,26,26,0.4)", fontStyle: "italic", margin: "24px 0 0" }}>
      These contents are protected by NDA. If you are interested, please contact me for more information.
    </p>
  );
}

function ImgPlaceholder({ label, aspect = "16/9" }: { label: string; aspect?: string }) {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: aspect,
        borderRadius: 14,
        background: "rgba(26,26,26,0.05)",
        border: "1px dashed rgba(26,26,26,0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, color: "rgba(26,26,26,0.35)" }}>{label}</span>
    </div>
  );
}

function StepBadge({ n }: { n: string }) {
  return (
    <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 500, color: "#3445ff", background: "rgba(52,69,255,0.1)", borderRadius: 100, padding: "4px 14px", flexShrink: 0 }}>
      {n}
    </span>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function Prorizon() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section id="overview" style={{ background: "#fafafa", paddingTop: 120 }}>
        <div style={overviewWidth}>
          <span style={labelStyle}>Prorizon · 2024 · B2C · Mobile App</span>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <h1
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(36px, 5vw, 66px)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: "#1a1a1a",
                  margin: "0 0 24px",
                }}
              >
                Wellness Optimisation App
              </h1>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(15px, 1.5vw, 18px)", lineHeight: 1.55, color: "rgba(26,26,26,0.55)", margin: 0 }}>
                An app designed to boost performance and wellness for young athletes.
              </p>
            </div>
            <div>
              <ImgPlaceholder label="Hero image" aspect="4/3" />
            </div>
          </div>

          {/* Intro paragraphs — before full-width image */}
          <div style={{ paddingTop: 80, paddingBottom: 64 }}>
            <p style={{ ...bodyStyle, marginBottom: 16 }}>
              Prorizon is designed to provide personalised insights to enhance the performance and well-being of young athletes, based on biopsychosocial data analytics. This project focuses on improving user engagement for manual input data.
            </p>
            <p style={bodyStyle}>
              As the project's sole UX designer, I tackled the challenge of improving user stickiness and product engagement. My role involved conducting research to identify engagement pain points and prototyping the app's core functionalities while considering the budget constraint.
            </p>
          </div>
        </div>

        {/* Full-width image — after intro text */}
        <div style={{ width: "100%" }}>
          <ImgPlaceholder label="Full-width product overview" aspect="21/6" />
        </div>
      </section>

      <style>{`
        .prorizon-with-sidebar {
          display: flex;
          align-items: flex-start;
          gap: 40px;
          padding: 0 124px 0 100px;
          box-sizing: border-box;
          width: 100%;
        }
        .prorizon-sidebar-col {
          width: 274px;
          flex-shrink: 0;
          position: sticky;
          top: 100px;
          padding: 32px;
          box-sizing: border-box;
        }
        .prorizon-content-col {
          flex: 1;
          min-width: 0;
        }
        @media (max-width: 900px) {
          .prorizon-with-sidebar { flex-direction: column; padding: 0 24px; }
          .prorizon-sidebar-col { display: none; }
          .prorizon-content-col { width: 100%; max-width: none; }
        }
      `}</style>

      {/* ── SIDEBAR + CONTENT LAYOUT ── */}
      <div className="prorizon-with-sidebar">
        <div className="prorizon-sidebar-col">
          <ProrizonTOC />
        </div>
        <div className="prorizon-content-col">

      {/* ── Background ── */}
      <section id="background" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
        <div style={contentWidth}>
          {divider}
          <h2 style={h2Style}>Background</h2>
          <p style={{ ...bodyStyle, maxWidth: 680, marginBottom: 32 }}>
            As a startup, Prorizon's mobile app collects biopsychosocial data and delivers personalised insights, recommendations and programmes based on advanced analytics. Part of the data collection requires user manual input three times on a daily basis.
          </p>
          <ImgPlaceholder label="Background" aspect="16/9" />
        </div>
      </section>

      {/* ── Problem Space ── */}
      <section id="problem" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
        <div style={contentWidth}>
          {divider}
          <h2 style={h2Style}>Problem Space</h2>
          <ImgPlaceholder label="Problem overview" aspect="16/9" />
          <div style={{ borderLeft: "3px solid #3445ff", paddingLeft: 24, marginTop: 40 }}>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 500, lineHeight: 1.4, letterSpacing: "-0.01em", color: "#1a1a1a", margin: 0 }}>
              How can we optimise the data input process of the "daily log" function to enhance user engagement, increase user satisfaction, and sustain long-term usage while ensuring implementation feasibility at this stage?
            </p>
          </div>
        </div>
      </section>

      {/* ── Research Process ── */}
      <section id="research" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
        <div id="research-focus-group" />
        <div style={contentWidth}>
          {divider}
          <h2 style={h2Style}>Research Process — Focus Group</h2>

          <p style={{ ...bodyStyle, marginBottom: 32, maxWidth: 680 }}>
            After reviewing the current product's user feedback, I engaged in 3 focus groups, including card sorting, interviews, and brainstorming sessions with 10 participants total to discuss:
          </p>

          {/* Goal tiles */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}>
            <div style={{ background: "rgba(26,26,26,0.04)", borderRadius: 16, padding: "24px 28px" }}>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 16, lineHeight: 1.6, color: "#1a1a1a", margin: 0 }}>
                Determine <span style={{ color: "#3445ff" }}>the type and order of information to be collected</span> in the mood recording section, understand How long and informative is feasible for a single log
              </p>
            </div>
            <div style={{ background: "rgba(26,26,26,0.04)", borderRadius: 16, padding: "24px 28px" }}>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 16, lineHeight: 1.6, color: "#1a1a1a", margin: 0 }}>
                <span style={{ color: "#3445ff" }}>Discuss and identify effective stimuli and methods</span> to improve number of times a user self-records per day and number of days to maintain streak
              </p>
            </div>
          </div>

          {/* Part tiles — image left, text right */}
          <div style={{ display: "flex", flexDirection: "column", gap: 40, marginBottom: 48 }}>
            {[
              {
                label: "Part 1 — Card Sorting",
                part: "Part 1",
                name: "Card Sorting",
                duration: "10 mins",
                body: "Participants will choose and rank cards representing different \"log-in\" elements to improve the recording process and enhance performance analysis accuracy.",
              },
              {
                label: "Part 2 — Scenario Interview",
                part: "Part 2",
                name: "Scenario Interview",
                duration: "10 mins",
                body: "Participants will consider when and in what situations they would prefer receiving mood-tracking notifications throughout the day to help improve the timing and relevance of self-documentation prompts.",
              },
              {
                label: "Part 3 — Brainstorming",
                part: "Part 3",
                name: "Brainstorming",
                duration: "10–20 mins",
                body: "Participants will brainstorm creative ways to motivate athletes to log their moods daily, focusing on potential app features and incentives.",
              },
            ].map(({ label, part, name, duration, body }) => (
              <div key={part} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "flex-start" }}>
                <ImgPlaceholder label={label} aspect="4/3" />
                <div>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 16, fontWeight: 600, color: "#1a1a1a", margin: "0 0 4px" }}>
                    {part}: <span style={{ color: "#3445ff" }}>[{name}]</span>
                  </p>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, color: "rgba(26,26,26,0.45)", margin: "0 0 12px" }}>{duration}</p>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.6, color: "rgba(26,26,26,0.72)", margin: 0 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Empathy Map ── */}
      <section id="research-empathy-map" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
        <div style={contentWidth}>
          {divider}
          <h2 style={h2Style}>Empathy Map</h2>
          <p style={{ ...bodyStyle, marginBottom: 32, maxWidth: 680 }}>
            The target users are young athletes, primarily college students, who are balancing their academic commitments with the demands of athletic performance and development. To better understand their needs and challenges, the following empathy map highlights key insights from their experiences.
          </p>
          <ImgPlaceholder label="Empathy map" aspect="16/8" />
          <NDANote />
        </div>
      </section>

      {/* ── Findings ── */}
      <section id="research-findings" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
        <div style={contentWidth}>
          {divider}
          <h2 style={h2Style}>Findings</h2>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              {
                icon: "/images/prorizon/icon-low-value.svg",
                label: "Low perceived\nvalue",
                body: (
                  <>The complexity and unclear insights make it <span style={{ color: "#3445ff" }}>hard for users to understand the data</span>, leading them to question the app&apos;s value.</>
                ),
              },
              {
                icon: "/images/prorizon/icon-notifications.svg",
                label: "Intrusive\nnotifications",
                body: (
                  <>Frequent notifications for the three daily logs <span style={{ color: "#3445ff" }}>disrupted users&apos; routines</span>, leaving them feeling rushed and disengaged, leading to skipped or hastily completed logs and reducing the accuracy.</>
                ),
              },
              {
                icon: "/images/prorizon/icon-time-consuming.svg",
                label: "Time-consuming\nlogging process",
                body: (
                  <>Users feel overwhelmed by the <span style={{ color: "#3445ff" }}>long log questions</span> and 3-times completion requirements, leading to fatigue and reduced engagement.</>
                ),
              },
            ].map(({ icon, label, body }, i, arr) => (
              <div
                key={label}
                style={{
                  display: "grid",
                  gridTemplateColumns: "160px 1fr",
                  alignItems: "center",
                  gap: 40,
                  padding: "40px 0",
                  borderBottom: i < arr.length - 1 ? "1px solid rgba(26,26,26,0.08)" : "none",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                  <Image src={icon} alt={label} width={40} height={40} />
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, fontWeight: 500, color: "#1a1a1a", margin: 0, textAlign: "center", lineHeight: 1.5, whiteSpace: "pre-line" }}>{label}</p>
                </div>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.7, color: "rgba(26,26,26,0.72)", margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Opportunities ── */}
      <section id="opportunities" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
        <div style={contentWidth}>
          {divider}
          <h2 style={h2Style}>Opportunities</h2>

          {/* Opportunity 1 */}
          <div style={{ marginBottom: 64 }}>
            <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: 40, alignItems: "flex-start" }}>
              <div style={{ background: "rgba(26,26,26,0.03)", border: "1px solid rgba(26,26,26,0.1)", borderRadius: 16, padding: "24px 16px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, width: "100%", aspectRatio: "1" }}>
                <Image src="/images/prorizon/icon-low-value.svg" alt="Low perceived value" width={40} height={40} />
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, fontWeight: 500, color: "#1a1a1a", margin: 0, textAlign: "center", lineHeight: 1.5 }}>Low perceived{"\n"}value</p>
              </div>
              <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <StepBadge n="01" />
              <h3 style={{ ...h3Style, margin: 0 }}>Data-driven personalisation</h3>
            </div>
            <p style={{ ...bodyStyle, marginBottom: 32, maxWidth: 680 }}>
              After analysing focus group feedback, I identified three key design opportunities: physical rewards, community building, and data-driven personalisation. Following team discussions, <span style={{ color: "#3445ff" }}>we focused on personalisation as it provides athletes with immediate value through tailored insights and comparisons.</span> This approach enhances user engagement and maximises effectiveness with minimal additional resources.
            </p>
            </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
              {[
                {
                  title: "Community building",
                  desc: "Encouraging engagement through stack competitions and online communities.",
                  items: ["Stack competition", "Online Community", "Cost of partner relationship building", "Appeals to general users"],
                  muted: true,
                },
                {
                  title: "Physical Rewards",
                  desc: "Offering tangible incentives like subscriptions, brand gifts, discounts, and family rewards.",
                  items: ["Subscription Offers", "Brand gift", "Discount", "Rewards for family", "Cost of partner relationship building", "Appeals to general users"],
                  muted: true,
                },
                {
                  title: "Data-driven personalisation",
                  desc: "Providing personalized, actionable feedback based on user data for immediate results.",
                  items: ["Quick and immediate feedback", "Interpret data", "Actionable suggestions", "Aligns with habits of comparing training results through data."],
                  muted: false,
                },
              ].map(({ title, desc, items, muted }) => (
                <div
                  key={title}
                  style={{
                    ...glassCard,
                    opacity: muted ? 0.55 : 1,
                    outline: muted ? "none" : "2px solid rgba(52,69,255,0.3)",
                  }}
                >
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, fontWeight: 600, color: "#1a1a1a", margin: "0 0 8px" }}>{title}</p>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, lineHeight: 1.55, color: "rgba(26,26,26,0.6)", margin: "0 0 16px" }}>{desc}</p>
                  {items.map((item) => (
                    <Bullet key={item} text={item} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Opportunity 2 */}
          <div style={{ marginBottom: 64 }}>
            <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: 40, alignItems: "flex-start" }}>
              <div style={{ background: "rgba(26,26,26,0.03)", border: "1px solid rgba(26,26,26,0.1)", borderRadius: 16, padding: "24px 16px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, width: "100%", aspectRatio: "1" }}>
                <Image src="/images/prorizon/icon-notifications.svg" alt="Intrusive notifications" width={40} height={40} />
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, fontWeight: 500, color: "#1a1a1a", margin: 0, textAlign: "center", lineHeight: 1.5 }}>Intrusive{"\n"}notifications</p>
              </div>
              <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <StepBadge n="02" />
              <h3 style={{ ...h3Style, margin: 0 }}>Integrating Log-in into Daily Life Naturally</h3>
            </div>
            <p style={{ ...bodyStyle, marginBottom: 16, maxWidth: 680 }}>
              Align check-in times with users' typical daily events. This approach avoids setting rigid reminders, making the process of logging activities feel more intuitive and less disruptive.
            </p>
            <p style={{ ...bodyStyle, maxWidth: 680 }}>
              Research was conducted to identify the events when users are most likely to create a "log".
            </p>
              </div>
            </div>
          </div>

          {/* Opportunity 3 */}
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: 40, alignItems: "flex-start" }}>
              <div style={{ background: "rgba(26,26,26,0.03)", border: "1px solid rgba(26,26,26,0.1)", borderRadius: 16, padding: "24px 16px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, width: "100%", aspectRatio: "1" }}>
                <Image src="/images/prorizon/icon-time-consuming.svg" alt="Time-consuming logging process" width={40} height={40} />
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, fontWeight: 500, color: "#1a1a1a", margin: 0, textAlign: "center", lineHeight: 1.5 }}>Time-consuming{"\n"}logging process</p>
              </div>
              <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <StepBadge n="03" />
              <h3 style={{ ...h3Style, margin: 0 }}>Smarter Data Collection and Sequence Tweaks</h3>
            </div>
            <p style={{ ...bodyStyle, maxWidth: 680 }}>
              After meeting with Data Scientist, we decided to streamline the data collection process. Some features were removed and the whole process was re-ordered based on the importance and frequency of information rated by users.
            </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ideation & Validation ── */}
      <section id="ideation-validation" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
        <div style={contentWidth}>
          {divider}
          <h2 style={h2Style}>Ideation & Validation</h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 48 }}>
            <div style={glassCard}>
              <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "rgba(26,26,26,0.4)", display: "block", marginBottom: 12 }}>Online 1-1 Interviews with Athletes</span>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 12, color: "rgba(26,26,26,0.45)", margin: "0 0 12px" }}>30 minutes</p>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.6, color: "#1a1a1a", margin: "0 0 20px" }}>
                Access the smoothness and engagement of the new daily log-in process based on user interaction (observation & feedback), and efficiency (success rate & time taken to complete the process).
              </p>
              <ImgPlaceholder label="Interview" aspect="16/9" />
            </div>
            <div style={glassCard}>
              <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "rgba(26,26,26,0.4)", display: "block", marginBottom: 12 }}>A/B Testing</span>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 12, color: "rgba(26,26,26,0.45)", margin: "0 0 12px" }}>Guerrilla interviews</p>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.6, color: "#1a1a1a", margin: "0 0 20px" }}>
                I conducted an A/B test comparing the existing design of the log-in process with a new design I created, focusing on the general questions and emotion log sections. The goal was to assess which version improves user engagement and satisfaction.
              </p>
              <ImgPlaceholder label="A/B Testing" aspect="16/9" />
            </div>
          </div>

          <ImgPlaceholder label="Low-Fi Prototype" aspect="16/7" />
        </div>
      </section>

      {/* ── Solution Details ── */}
      <section id="solutions" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
        <div style={contentWidth}>
          {divider}
          <h2 style={h2Style}>Solution Details</h2>

          {/* Solution 1 */}
          <div id="solutions-personalisation" style={{ marginBottom: 80 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <StepBadge n="1" />
              <h3 style={{ ...h3Style, margin: 0 }}>Data-Driven Personalisation</h3>
            </div>

            <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 12 }}>Perceptual Reference Point</h3>
            <p style={{ ...bodyStyle, marginBottom: 16, maxWidth: 680 }}>
              During the manual check-in process, added a feature that compares previous data, offering references and insights that enhance user engagement.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <ImgPlaceholder label="Perceptual Reference Point — A" aspect="4/3" />
              <ImgPlaceholder label="Perceptual Reference Point — B" aspect="4/3" />
            </div>
            <NDANote />

            <div style={{ marginTop: 48 }}>
              <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 12 }}>Quick Insight</h3>
              <p style={{ ...bodyStyle, marginBottom: 16, maxWidth: 680 }}>
                Collaborating with the data scientist, I designed a new "Insights" feature that displays data and provides relevant insights.
              </p>
              <p style={{ ...bodyStyle, marginBottom: 16, maxWidth: 680 }}>
                The original design, which visualises data, was found complicated and hard to interpret during user research.
              </p>
              <p style={{ ...bodyStyle, marginBottom: 0, maxWidth: 680 }}>
                This new feature is, therefore, designed to link associated data points and provide insights and guidance for improving health and performance based on the data.
              </p>
            </div>

            <div style={{ marginTop: 48 }}>
              <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 12 }}>A Design System Enhancement for Insights Feature — Quick Insight</h3>
              <p style={{ ...bodyStyle, marginBottom: 16, maxWidth: 680 }}>
                As part of the new 'Insights' feature, I extended the existing design system while maintaining consistency with the brand's original guidelines. Starting with the updated brand colours, I established a new colour foundation, using a combination of red and the brand's blue to create clear visual contrast for data comparison components. Plus, with the help of the developer, I also conduct design for edge cases such as low data, no data, and data limitations.
              </p>
              <p style={{ ...bodyStyle, marginBottom: 32, maxWidth: 680 }}>
                This ensured that the new design elements seamlessly integrated with the overall system, providing a cohesive user experience while allowing for more dynamic data visualisation colour.
              </p>
              <ImgPlaceholder label="Design system enhancement" aspect="16/8" />
              <NDANote />
            </div>
          </div>

          {/* Solution 2 */}
          <div id="solutions-daily-login" style={{ marginBottom: 80 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <StepBadge n="2" />
              <h3 style={{ ...h3Style, margin: 0 }}>Integrating Log-in into Daily Life Naturally</h3>
            </div>

            <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 12 }}>Perceptual Reference Point — Home page</h3>
            <p style={{ ...bodyStyle, marginBottom: 32, maxWidth: 680 }}>
              Identify different potential log times in daily routines, embedding logs into habits to clarify users' 'paths'.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <ImgPlaceholder label="Daily Log — A" aspect="4/3" />
              <ImgPlaceholder label="Daily Log — B" aspect="4/3" />
            </div>
            <div style={{ marginTop: 16 }}>
              <ImgPlaceholder label="Daily Log — Full" aspect="16/6" />
            </div>
            <div style={{ marginTop: 16 }}>
              <ImgPlaceholder label="Home page — daily log integration" aspect="16/8" />
            </div>
          </div>

          {/* Solution 3 */}
          <div id="solutions-data-collection">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <StepBadge n="3" />
              <h3 style={{ ...h3Style, margin: 0 }}>Smarter Data Collection</h3>
            </div>

            <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 12 }}>What is the best method for emotional data collection?</h3>
            <p style={{ ...bodyStyle, marginBottom: 16, maxWidth: 680 }}>
              To address the aforementioned issue, I began by analysing and studying five highly-rated emotional tracking products available on the market. I first discovered that the interaction methods across these competitors were similar, primarily relying on simply clicking on chips to record emotions. However, this approach presents a challenge in balancing information overload with the accuracy of emotional data recording.
            </p>

            <div style={{ background: "rgba(52,69,255,0.06)", border: "1px solid rgba(52,69,255,0.15)", borderRadius: 14, padding: "20px 28px", marginBottom: 32, maxWidth: 680 }}>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, lineHeight: 1.6, color: "#1a1a1a", margin: 0, fontStyle: "italic" }}>
                Too few choices affect the accuracy of the data, and too many choices result in a cognitive load
              </p>
            </div>

            <p style={{ ...bodyStyle, marginBottom: 32, maxWidth: 680 }}>
              I try to experiment with new interaction methods.
            </p>

            <ImgPlaceholder label="Competitor analysis — emotion tracking" aspect="16/7" />

            <div style={{ marginTop: 48 }}>
              <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 12 }}>Original Design</h3>
              <p style={{ ...bodyStyle, marginBottom: 32, maxWidth: 680 }}>
                The original design of Prorizon was visually similar to competing products, but based on user feedback, it also suffered from the drawback of information overload.
              </p>
              <ImgPlaceholder label="Original design" aspect="16/8" />
            </div>

            <div style={{ marginTop: 48 }}>
              <h3 style={{ ...h3Style, fontSize: 16, marginBottom: 12 }}>Experiment about New Interaction Methods</h3>
              <p style={{ ...bodyStyle, marginBottom: 16, maxWidth: 680 }}>
                I applied <strong>Hick's Law</strong> by introducing <strong>progressive disclosure</strong> to present the different emotion options in phases, reducing the number of chips and complexity to alleviate cognitive load.
              </p>
              <p style={{ ...bodyStyle, marginBottom: 32, maxWidth: 680 }}>
                However, the project faced technical limitations, and only 53% of users responded positively to the new design, indicating some potential. Moreover, the new approach risked reducing the accuracy of data collection. This led me to reconsider my design, acknowledging that some complexity is unavoidable in mood data collection. Ultimately, I decided to retain the original design.
              </p>
              <ImgPlaceholder label="New interaction experiment" aspect="16/8" />
              <p style={{ ...bodyStyle, margin: "32px 0 24px", maxWidth: 680 }}>
                While retaining the original design, I optimised the information layout to improve readability and user experience.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <ImgPlaceholder label="Before" aspect="9/16" />
                <ImgPlaceholder label="After" aspect="9/16" />
              </div>
            </div>

            <div id="final-design" style={{ marginTop: 48 }}>
              <h3 style={{ ...h3Style, marginBottom: 24 }}>Final Direction</h3>

              {[
                {
                  step: "Step 1",
                  title: "Anchoring and Categorizing the New Log",
                  body: "Four categories of the log portal—Training, Recovery, Food, and Other Activities—are designed to align with users' availability and the specific needs of data analysis.\n\nThe next step involves detailing the background of each log entry based on the selected category to ensure comprehensive and accurate data collection for mandatory analysis. This will help refine insights and improve the relevance of feedback for users, based on their activity patterns and preferences.",
                },
                {
                  step: "Step 2",
                  title: "Physical General Questions",
                  body: "Using today's history data allows users to position their perceptual records more quickly and accurately by providing context based on recent trends.\n\nWith this immediate feedback, users can log their moods or activities more intuitively, streamlining the overall process while boosting user engagement and data quality.",
                },
                {
                  step: "Step 3",
                  title: "Activities and Influencers",
                  body: "Choose the relevant activities and relevant person for this log",
                },
                {
                  step: "Step 4",
                  title: "Mood",
                  body: "Multiple-choice emotion descriptions can be provided to align with the specific log categories.",
                },
                {
                  step: "Step 5",
                  title: "Insights",
                  body: "Combining objective physical data from wearable devices with subjective physical and emotional data from daily log-ins provides users with valuable data insights.",
                },
              ].map(({ step, title, body }) => (
                <div key={step} style={{ marginBottom: 48 }}>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 500, color: "rgba(26,26,26,0.45)", margin: "0 0 8px", letterSpacing: "0.04em" }}>
                    {step} — {title}
                  </p>
                  {body.split("\n\n").map((para, i) => (
                    <p key={i} style={{ ...bodyStyle, marginBottom: 16, maxWidth: 680 }}>{para}</p>
                  ))}
                  <ImgPlaceholder label={`${step} — ${title}`} aspect="16/8" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Learning ── */}
      <section id="learning" style={{ background: "#fafafa", paddingBottom: sectionGap }}>
        <div style={contentWidth}>
          {divider}
          <h2 style={h2Style}>Learning</h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              {
                title: "Exploring Multiple Research Methods",
                body: "In this internship project, I was able to expand my research skills by applying multiple methods during the research phase. I experimented with conducting studies in different environments and forums, something I had rarely done in previous projects. This taught me how to adapt research strategies based on the context, improving my ability to gather insights from diverse user groups and situations.",
              },
              {
                title: "Collaborating with a Cross-Functional Team",
                body: "In this project, I had the opportunity to collaborate closely with scientists, developers, and the product owner. This experience was invaluable because it allowed me to gain insights into how each role contributes to the product's success and helped me better understand the importance of cross-functional communication. It was a new and rewarding experience that broadened my perspective on how design fits into a larger team dynamic.",
              },
            ].map(({ title, body }) => (
              <div key={title} style={glassCard}>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, fontWeight: 600, color: "#1a1a1a", margin: "0 0 12px" }}>{title}</p>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, lineHeight: 1.7, color: "rgba(26,26,26,0.72)", margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

        </div>{/* end prorizon-content-col */}
      </div>{/* end prorizon-with-sidebar */}

      {/* ── Footer ── */}
      <footer
        style={{
          background: "#fafafa",
          borderTop: "1px solid rgba(26,26,26,0.08)",
          padding: "32px 60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, color: "rgba(26,26,26,0.4)" }}>© 2026 Xintong Zou</span>
        <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, color: "rgba(26,26,26,0.25)" }}>London, UK</span>
      </footer>
    </>
  );
}
