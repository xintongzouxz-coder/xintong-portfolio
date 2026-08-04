import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, DM_Mono, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import BirdCursor from "@/components/BirdCursor";
import { Analytics } from "@vercel/analytics/next";

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

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xintongzou.com"),
  title: "Xintong Zou — UX & Product Designer | Fintech & AI",
  description:
    "Product designer with experience in B2B fintech, digital payments, healthcare and wellbeing — translating complex systems into clear, user-centred products.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "Xintong Zou — UX & Product Designer | Fintech & AI",
    description:
      "Product designer with experience in B2B fintech, digital payments, healthcare and wellbeing — translating complex systems into clear, user-centred products.",
    siteName: "Xintong Zou",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/opengraph.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph.png"],
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
      className={`${dmSerifDisplay.variable} ${dmSans.variable} ${dmMono.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <BirdCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
