import Navbar from "@/components/Navbar";

const contentWidth: React.CSSProperties = {
  maxWidth: 960,
  margin: "0 auto",
  padding: "0 60px",
  boxSizing: "border-box",
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

function StepBadge({ n }: { n: string }) {
  return (
    <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 500, color: "#3445ff", background: "rgba(52,69,255,0.1)", borderRadius: 100, padding: "4px 14px", flexShrink: 0 }}>
      {n}
    </span>
  );
}

function SubLabel({ text }: { text: string }) {
  return (
    <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "rgba(26,26,26,0.4)", display: "block", marginBottom: 12 }}>
      {text}
    </span>
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

export default function PitchME() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{ background: "#fafafa", paddingTop: 120 }}>
        <div style={contentWidth}>
          <span style={labelStyle}>PitchME · 2024 · AI-agent · Workflow Optimisation</span>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", marginBottom: 80 }}>
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
                PitchME — Judgement analysis support platform
              </h1>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(15px, 1.5vw, 18px)", lineHeight: 1.55, color: "rgba(26,26,26,0.55)", margin: "0 0 16px" }}>
                A tool to help secondary school startup mentors give young entrepreneurs detailed and actionable feedback during live pitch events.
              </p>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(15px, 1.5vw, 18px)", lineHeight: 1.55, color: "rgba(26,26,26,0.55)", margin: 0 }}>
                An AI embedded tool to help program leaders improve the efficiency and quality of the judging process.
              </p>
            </div>
            <div>
              <ImgPlaceholder label="Hero image" aspect="4/3" />
            </div>
          </div>
        </div>

        {/* Full-width image */}
        <div style={{ width: "100%" }}>
          <ImgPlaceholder label="Full-width product overview" aspect="21/6" />
        </div>

        {/* Overview */}
        <div style={contentWidth}>
          <div style={{ paddingTop: 80, paddingBottom: sectionGap }}>
            <p style={{ ...bodyStyle, marginBottom: 16 }}>
              Facing frequent challenges at LSE's high school startup events, judges found it hard to listen, take notes, and score multiple pitches effectively all at once. It is a B2C solution with applying AI technology aims to refine this multitasking dilemma by streamlining the evaluation workflow, enhancing feedback accuracy and pitch assessment efficiency.
            </p>
            <p style={{ ...bodyStyle, marginBottom: 16 }}>
              I'm the lead UX designer for this project from 0 to 1, delivering the defined user flows, hi-fi prototypes for vision and MVP design through working closely with a cross-functional team.
            </p>
            <p style={bodyStyle}>
              The MVP design was shipped in March 2024, and the vision design was presented to the LSE judging panel for evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* ── Meta ── */}
      <section style={{ background: "#fafafa", paddingBottom: sectionGap }}>
        <div style={contentWidth}>
          {divider}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 16 }}>
            <div style={glassCard}>
              <SubLabel text="Deliverables" />
              {["Refined product concept", "Wireframes", "Hi-fi UI"].map((d) => (
                <p key={d} style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "#1a1a1a", margin: "0 0 4px", lineHeight: 1.5 }}>{d}</p>
              ))}
            </div>
            <div style={glassCard}>
              <SubLabel text="Scope" />
              {["UX Design", "IA", "Prototyping", "Interface Design"].map((s) => (
                <p key={s} style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "#1a1a1a", margin: "0 0 4px", lineHeight: 1.5 }}>{s}</p>
              ))}
            </div>
            <div style={glassCard}>
              <SubLabel text="My Role" />
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "#1a1a1a", margin: 0, lineHeight: 1.5 }}>UX Designer</p>
            </div>
            <div style={glassCard}>
              <SubLabel text="Timeline" />
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "#1a1a1a", margin: 0, lineHeight: 1.5 }}>Feb 2024 (1 week)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Background ── */}
      <section style={{ background: "#fafafa", paddingBottom: sectionGap }}>
        <div style={contentWidth}>
          {divider}
          <span style={labelStyle}>Background</span>
          <h2 style={h2Style}>Judgement analysis support platform</h2>
          <p style={{ ...bodyStyle, marginBottom: 16, maxWidth: 680 }}>
            Throughout the year, LSE hosts numerous pitch events to evaluate and support the Accelerator programme for academics, students, and alumni. These events typically involve 3-5 judges who rapidly assess over 10-20 teams and immediately select the winners.
          </p>
          <p style={{ ...bodyStyle, maxWidth: 680 }}>
            Our partner is interested in leveraging AI technology and can provide technical support for ChatGPT engine prompts.
          </p>
        </div>
      </section>

      {/* ── Goals ── */}
      <section style={{ background: "#fafafa", paddingBottom: sectionGap }}>
        <div style={contentWidth}>
          {divider}
          <h2 style={h2Style}>Goals</h2>
          <div style={{ borderLeft: "3px solid #3445ff", paddingLeft: 24 }}>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 500, lineHeight: 1.4, letterSpacing: "-0.01em", color: "#1a1a1a", margin: 0 }}>
              How might we create an efficient, streamlined assessment experience for LSE judges at large school pitch events with the support of AI technology?
            </p>
          </div>
        </div>
      </section>

      {/* ── Current Scoring Methods ── */}
      <section style={{ background: "#fafafa", paddingBottom: sectionGap }}>
        <div style={contentWidth}>
          {divider}
          <h2 style={h2Style}>Current Scoring Methods</h2>
          <p style={{ ...bodyStyle, marginBottom: 40, maxWidth: 680 }}>
            Most products designed to assist judges in scoring are add-on features for B2B platforms aimed at competition organisers. These solutions cater to longer, more extended judging processes, typically without AI support. I have selected three direct competitors to study the current market landscape.
          </p>
          <ImgPlaceholder label="Competitor analysis" aspect="16/7" />
        </div>
      </section>

      {/* ── Persona ── */}
      <section style={{ background: "#fafafa", paddingBottom: sectionGap }}>
        <div style={contentWidth}>
          {divider}
          <h2 style={h2Style}>Persona</h2>
          <p style={{ ...bodyStyle, marginBottom: 40, maxWidth: 680 }}>
            Understand user's frustration and goals
          </p>
          <ImgPlaceholder label="Persona" aspect="16/7" />
        </div>
      </section>

      {/* ── User Journey ── */}
      <section style={{ background: "#fafafa", paddingBottom: sectionGap }}>
        <div style={contentWidth}>
          {divider}
          <h2 style={h2Style}>User Journey</h2>
          <p style={{ ...bodyStyle, marginBottom: 40, maxWidth: 680 }}>
            The pain points judges experience during a pitch event primarily arise in three stages: during the presentation, the evaluation process, and the final announcement. These challenges stem from the high-pressure environment, where judges must handle multiple tasks simultaneously, leading to difficulties in managing multitasking efficiently.
          </p>
          <ImgPlaceholder label="User journey map" aspect="16/7" />
        </div>
      </section>

      {/* ── Solution ── */}
      <section style={{ background: "#fafafa", paddingBottom: sectionGap }}>
        <div style={contentWidth}>
          {divider}
          <h2 style={h2Style}>Solution</h2>

          {/* 1. Layout */}
          <div style={{ marginBottom: 80 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <StepBadge n="1" />
              <h3 style={{ ...h3Style, margin: 0 }}>Layout</h3>
            </div>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "rgba(26,26,26,0.5)", margin: "0 0 32px", letterSpacing: "0.01em" }}>
              Minimising interactions to boost efficiency
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, fontWeight: 700, color: "#3445ff", flexShrink: 0, marginTop: 2 }}>A</span>
                <div style={{ flex: 1 }}>
                  <p style={{ ...bodyStyle, marginBottom: 16, maxWidth: 680 }}>
                    To enhance workflow efficiency in a fast-paced, multi-tasking environment, I designed a single interface that consolidates presentation listening and evaluation tasks.
                  </p>
                  <p style={{ ...bodyStyle, marginBottom: 24, maxWidth: 680 }}>
                    By applying the common region and proximity principles, the features are organised into two flexible panes that follow the logical sequential flow of the judging process. This ensures that tasks are grouped based on their temporal relationship, reducing the need for frequent screen switching and maintaining focus throughout the evaluation.
                  </p>
                  <ImgPlaceholder label="Layout A — dual pane during presentation" aspect="16/9" />
                </div>
              </div>

              <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, fontWeight: 700, color: "#3445ff", flexShrink: 0, marginTop: 2 }}>B</span>
                <div style={{ flex: 1 }}>
                  <p style={{ ...bodyStyle, marginBottom: 24, maxWidth: 680 }}>
                    During the post-pitch evaluation phase, I applied the same two-pane layout in the pitch list. The second pane displays a quick preview of the report, allowing for fast browsing and editing of individual reports with a single click on the pitch list. This saves judges time by avoiding the need to open each report individually.
                  </p>
                  <ImgPlaceholder label="Layout B — post-pitch evaluation" aspect="16/9" />
                </div>
              </div>
            </div>
          </div>

          {/* 2. Module */}
          <div style={{ marginBottom: 80 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <StepBadge n="2" />
              <h3 style={{ ...h3Style, margin: 0 }}>Module</h3>
            </div>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "rgba(26,26,26,0.5)", margin: "0 0 24px", letterSpacing: "0.01em" }}>
              Redesigning traditional judging methods to simplify decision-making and improve the feedback process
            </p>
            <p style={{ ...bodyStyle, marginBottom: 40, maxWidth: 680 }}>
              Considering the high volume of applicants, the system provides a way to rank and sort candidates efficiently. Following Jakob's Law, I maintained a familiar judging structure of numeric scoring and free-text comments, with an added tiered ranking system.
            </p>

            <ImgPlaceholder label="Traditional judging — before" aspect="16/7" />

            <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 32 }}>
              {/* A. Scoring */}
              <div style={glassCard}>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 16, fontWeight: 600, color: "#1a1a1a", margin: "0 0 24px" }}>A. Scoring</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 500, color: "#3445ff", background: "rgba(52,69,255,0.1)", borderRadius: 100, padding: "3px 12px", flexShrink: 0 }}>1</span>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, fontWeight: 600, color: "#1a1a1a", margin: "0 0 6px" }}>Quick scoring</p>
                      <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, lineHeight: 1.65, color: "rgba(26,26,26,0.72)", margin: 0 }}>
                        Scores for individual criteria are linked to a numeric scale, allowing judges to quickly score each criterion, forming the foundation for ranking.
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, fontWeight: 500, color: "#3445ff", background: "rgba(52,69,255,0.1)", borderRadius: 100, padding: "3px 12px", flexShrink: 0 }}>2</span>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, fontWeight: 600, color: "#1a1a1a", margin: "0 0 6px" }}>AI-generated report drafts</p>
                      <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, lineHeight: 1.65, color: "rgba(26,26,26,0.72)", margin: 0 }}>
                        Automatically generates a draft report based on judge inputs, with options to select different tones for the report's narrative.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* B. Ranking */}
              <div style={glassCard}>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 16, fontWeight: 600, color: "#1a1a1a", margin: "0 0 12px" }}>B. Ranking system</p>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, lineHeight: 1.65, color: "rgba(26,26,26,0.72)", margin: 0 }}>
                  A 'Top Pick' button allows judges to quickly categorise the top performers, speeding up the decision-making process by creating a clear ranking structure.
                </p>
              </div>
            </div>

            <div style={{ marginTop: 32 }}>
              <ImgPlaceholder label="Module — scoring & ranking" aspect="16/8" />
            </div>
          </div>

          {/* 3. Feedback */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <StepBadge n="3" />
              <h3 style={{ ...h3Style, margin: 0 }}>Feedback</h3>
            </div>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "rgba(26,26,26,0.5)", margin: "0 0 24px", letterSpacing: "0.01em" }}>
              Enhancing student feedback and institutional data collection
            </p>
            <p style={{ ...bodyStyle, marginBottom: 32, maxWidth: 680 }}>
              After the event, judges can send structured feedback reports to students, replacing the previous system of only verbal feedback. This feature also provides the university with valuable data for analysis, supporting future events and participant improvement.
            </p>
            <ImgPlaceholder label="Feedback — report delivery" aspect="16/8" />
          </div>
        </div>
      </section>

      {/* ── Visualization ── */}
      <section style={{ background: "#fafafa", paddingBottom: sectionGap }}>
        <div style={contentWidth}>
          {divider}
          <h2 style={h2Style}>Visualization</h2>
          <p style={{ ...bodyStyle, marginBottom: 40, maxWidth: 680 }}>
            I referenced LSE's colour philosophy, continuing with the red from LSE's logo as the primary colour and grey as the secondary colour. A minimal use of gradient was applied to achieve a lighter, more relaxed visual effect.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 32 }}>
            <div style={glassCard}>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, fontWeight: 600, color: "#1a1a1a", margin: "0 0 16px" }}>A — Component design</p>
              <ImgPlaceholder label="Component design" aspect="4/3" />
            </div>
            <div style={glassCard}>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 15, fontWeight: 600, color: "#1a1a1a", margin: "0 0 16px" }}>B — Accessibility</p>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, lineHeight: 1.65, color: "rgba(26,26,26,0.72)", margin: "0 0 16px" }}>
                I adhered to the WCAG, ensuring native fonts, appropriate colour contrast, and target space.
              </p>
              <ImgPlaceholder label="Accessibility checks" aspect="4/3" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Features / Workflow ── */}
      <section style={{ background: "#fafafa", paddingBottom: sectionGap }}>
        <div style={contentWidth}>
          {divider}
          <h2 style={h2Style}>Features</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {[
              {
                title: "Pre-set pitch themes and analytical focus",
                body: "Establish settings before the pitch event starts, to serve as input prompts.",
              },
              {
                title: "Record",
                body: "Record and store the content of each presentation, converting it into text to serve as the input model's context.",
              },
              {
                title: "Scoring",
                body: "Quick scoring based on criteria, can also be tagged using top picks",
              },
              {
                title: "Analysis",
                body: "Generate individual report drafts with different tones, modifying the draft in an editable area.",
              },
              {
                title: "Library",
                body: "Store the completed reports and provide a channel to deliver the report records to the contestants.",
              },
            ].map(({ title, body }, i) => (
              <div key={title}>
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                  <StepBadge n={String(i + 1).padStart(2, "0")} />
                  <h3 style={{ ...h3Style, margin: 0 }}>{title}</h3>
                </div>
                <p style={{ ...bodyStyle, marginBottom: 24, maxWidth: 680 }}>{body}</p>
                <ImgPlaceholder label={title} aspect="16/8" />
              </div>
            ))}
          </div>
        </div>
      </section>

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
