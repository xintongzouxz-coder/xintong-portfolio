import Link from "next/link";

interface CaseCardProps {
  href: string;
  image?: string;
  tags: string[];
  title: string;
  year: string;
  description: string;
}

export default function CaseCard({ href, image, tags, title, year, description }: CaseCardProps) {
  const content = (
    <div>
      {/* Image — 600×425 aspect ratio, gray fill when no image */}
      <div
        style={{
          borderRadius: 20,
          overflow: "hidden",
          aspectRatio: "600 / 425",
          background: "#D9D9D9",
        }}
      >
        {image && (
          <img
            src={image}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
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

  if (!href || href === "#") return content;

  return (
    <Link href={href} style={{ textDecoration: "none", display: "block" }}>
      {content}
    </Link>
  );
}
