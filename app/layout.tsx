import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import BirdCursor from "@/components/BirdCursor";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Xintong Zou — UX & Product Designer",
  description:
    "Xintong Zou is a digital product designer with experience in B2B fintech, healthcare and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <BirdCursor />
        {children}
      </body>
    </html>
  );
}
