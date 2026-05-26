"use client";

import { useState, useCallback } from "react";

interface Props {
  href: string;
  label: string;
  previewSrc: string;
  previewAlt?: string;
}

export default function LinkWithImagePreview({ href, label, previewSrc, previewAlt = "" }: Props) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
  }, []);

  return (
    <>
      <a
        href={href}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onMouseMove={handleMouseMove}
        style={{
          color: "#3445ff",
          fontWeight: 500,
          textDecoration: "underline",
          textUnderlineOffset: 2,
          cursor: "pointer",
        }}
      >
        {label}
      </a>

      {visible && (
        <div
          style={{
            position: "fixed",
            top: pos.y + 16,
            left: pos.x + 16,
            zIndex: 9999,
            pointerEvents: "none",
            borderRadius: 10,
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(0,0,0,0.14)",
          }}
        >
          <img
            src={previewSrc}
            alt={previewAlt}
            style={{ width: 180, height: "auto", display: "block" }}
          />
        </div>
      )}
    </>
  );
}
