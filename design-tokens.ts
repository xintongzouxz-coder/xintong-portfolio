/**
 * Design tokens extracted from xintongzou.framer.website/kody-pbb-2
 * Source: Framer published page HTML/CSS (April 2026)
 */

// ─── Typography ───────────────────────────────────────────────────────────────

export const FONT_FAMILY = {
  /** Primary UI font — headings, labels, nav, captions */
  sans: '"DM Sans", "DM Sans Placeholder", sans-serif',
  /** Editorial serif — long-form body paragraphs, pull quotes */
  serif: '"DM Serif Text", "DM Serif Text Placeholder", serif',
  /** Italic serif accent — quotes, callouts */
  serifItalic: '"Inria Serif", serif',
} as const;

export const FONT_SIZE = {
  /** Case study / page title */
  h1: "32px",
  /** Section subtitle */
  h2: "24px",
  /** Sub-section label */
  h3: "20px",
  /** Body text */
  body: "16px",
  /** Small / captions / tags / metadata */
  small: "14px",
  /** Extra small / legal */
  xs: "12px",
} as const;

export const FONT_WEIGHT = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export const LINE_HEIGHT = {
  /** Tight — headings */
  tight: "1.2em",
  /** Medium — sub-headings */
  snug: "1.5em",
  /** Relaxed — body text, nav */
  relaxed: "1.6em",
} as const;

export const LETTER_SPACING = {
  normal: "0",
  wide: "1px",
} as const;

// ─── Colours ──────────────────────────────────────────────────────────────────

export const COLOR = {
  // Backgrounds
  /** Page / canvas background */
  bgPage: "#f2f3f4",
  /** Card / panel surface */
  bgCard: "#ffffff",
  /** Subtle off-white surface */
  bgSubtle: "#f7f6f5",

  // Text
  /** Primary text — navbar logo */
  textPrimary: "#111111",
  /** Heading text — case title, section headings */
  textHeading: "#454545",
  /** Secondary text — subtitles */
  textSecondary: "#747474",
  /** Muted text — body copy, nav links */
  textMuted: "#666666",
  /** Light / disabled text */
  textLight: "#a8a8a8",

  // Accents
  /** Indigo — design token accent (tags, highlights) */
  accentIndigo: "#4058d0",
  /** Blue — link / interactive */
  accentBlue: "#1466d1",
  /** Red — error / warning accent */
  accentRed: "#e0112b",
  /** Warm brown — secondary accent */
  accentWarm: "#7c6f5f",

  // Borders / Dividers
  /** Subtle border */
  border: "rgba(0, 0, 0, 0.08)",
  /** Medium border */
  borderMedium: "rgba(0, 0, 0, 0.12)",
} as const;

// ─── Spacing ──────────────────────────────────────────────────────────────────

export const SPACING = {
  /** Content max-width */
  maxWidth: "1200px",
  /** Horizontal page padding */
  pagePaddingX: "113px",
  /** Horizontal cover/hero section padding */
  heroPaddingX: "80px",
  /** Section top/bottom padding */
  sectionPaddingY: "100px",
  /** Sub-section padding top */
  sectionPaddingTop: "60px",
  /** Sub-section padding bottom */
  sectionPaddingBottom: "40px",
  /** Gap between major sections */
  sectionGap: "59px",
  /** Gap between content blocks */
  blockGap: "60px",
  /** Gap between components */
  componentGap: "44px",
  /** Gap between elements */
  elementGap: "20px",
  /** Gap between small items */
  itemGap: "10px",
} as const;

// ─── Border Radius ────────────────────────────────────────────────────────────

export const RADIUS = {
  /** Tags, badges, pills */
  sm: "4px",
  /** Buttons, inputs */
  md: "8px",
  /** Chips, small cards */
  lg: "10px",
  /** Medium cards */
  xl: "12px",
  /** Large cards, containers */
  "2xl": "20px",
} as const;

// ─── Shadows ──────────────────────────────────────────────────────────────────

export const SHADOW = {
  /** Subtle card elevation */
  card: "0 2px 16px rgba(0, 0, 0, 0.05)",
  /** Raised card on hover */
  cardHover: "0 20px 60px rgba(0, 0, 0, 0.10), 0 4px 16px rgba(0, 0, 0, 0.06)",
  /** Navbar floating panel */
  nav: "0 8px 32px rgba(0, 0, 0, 0.07), 0 2px 8px rgba(0, 0, 0, 0.03)",
} as const;
