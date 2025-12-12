import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luteams.com"),
  title: "LU Teams - The Technical Leader's Sixth Sense for Team Chemistry",
  description:
    "Stop guessing who works well together. LU Teams analyzes personality dynamics to predict team synergy before you even start a project.",
  keywords: [
    "team chemistry",
    "personality analysis",
    "team building",
    "leadership tools",
    "team synergy",
    "conflict prediction",
    "team dynamics",
  ],
  authors: [{ name: "Leadership Unfiltered" }],
  creator: "Leadership Unfiltered",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luteams.com",
    siteName: "LU Teams",
    title: "LU Teams - Predict Team Synergy Before You Start",
    description:
      "Stop guessing who works well together. LU Teams analyzes personality dynamics to predict team synergy before you even start a project.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LU Teams - Team Chemistry Prediction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LU Teams - Predict Team Synergy",
    description:
      "Stop guessing who works well together. Analyze personality dynamics to predict team synergy.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}