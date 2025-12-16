import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
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
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon-256x256.png", sizes: "256x256", type: "image/png" },
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
      <head>
        {/* LinkedIn Insight Tag */}
        <Script id="linkedin-partner" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "8386138";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </Script>
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=8386138&fmt=gif"
          />
        </noscript>
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}