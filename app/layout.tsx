import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Introducing GPT-5.5 | Real-world AI for Work",
    template: "%s | GPT-5.5"
  },
  description:
    "GPT-5.5 is a new class of intelligence for coding, research, automation, and productivity across real-world work.",
  keywords: [
    "GPT-5.5",
    "AI coding",
    "AI research",
    "workflow automation",
    "SaaS AI"
  ],
  openGraph: {
    title: "Introducing GPT-5.5",
    description:
      "A modern AI system built for reasoning, planning, coding, research, and real-world productivity.",
    url: "https://example.com",
    siteName: "GPT-5.5",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "GPT-5.5 product announcement"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Introducing GPT-5.5",
    description:
      "A new class of intelligence for coding, research, automation, and real-world work.",
    images: ["/og.svg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f6f2"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
