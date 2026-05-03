import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, DM_Mono } from "next/font/google";
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

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),
  title: "Xintong Zou — UX & Product Designer",
  description:
    "Product designer with experience in fintech, digital payments, healthcare and wellbeing — translating complex systems into clear, user-centred products.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "Xintong Zou — UX & Product Designer",
    description:
      "Product designer with experience in fintech, digital payments, healthcare and wellbeing.",
    siteName: "Xintong Zou",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xintong Zou — UX & Product Designer",
    description:
      "Product designer with experience in fintech, digital payments, healthcare and wellbeing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${dmSans.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <BirdCursor />
        {children}
      </body>
    </html>
  );
}
