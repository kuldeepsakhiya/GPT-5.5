import type { Metadata, Viewport } from "next";
import "./globals.css";

import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"), // TODO: replace with real domain

  applicationName: "Your Product Name",

  title: {
    default: "Your Product | Real-world AI for Work",
    template: "%s | Your Product"
  },

  description:
    "A modern AI system built for coding, research, automation, and real-world productivity.",

  keywords: [
    "AI",
    "automation",
    "productivity",
    "developer tools"
  ],

  authors: [{ name: "Your Company" }],
  creator: "Your Company",
  publisher: "Your Company",
  category: "technology",

  alternates: {
    canonical: "/"
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png"
  },

  openGraph: {
    title: "Your Product",
    description:
      "AI system for reasoning, coding, and real-world productivity.",
    url: "/",
    siteName: "Your Product",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Product preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Your Product",
    description:
      "AI for coding, research, and automation.",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-paper text-ink">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}