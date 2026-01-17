import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import { translations } from "@/lib/translations";
import "../globals.css";

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
  title: "LU Teams - Boutique Technical Leadership Coaching | HEXACO Team Synergy",
  description:
    "Intensive coaching for 3-4 technical leaders at a time. Aerospace, IT, SaaS focus. Predict team friction with HEXACO-based Synergy Radar. 15+ years engineering background. Beta + 1-on-1 coaching available.",
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
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Paweł Rzepecki",
              "jobTitle": "Technical Leadership Coach & Founder",
              "description": "Boutique coaching for technical leaders. 15+ years engineering background, intensive work with 3-4 leaders at a time.",
              "url": "https://luteams.com",
              "worksFor": {
                "@type": "Organization",
                "name": "Leadership Unfiltered"
              },
              "sameAs": [
                "https://www.linkedin.com/in/pawel-rzepecki-tech-lead/",
                "https://linkedin.com/company/leadership-unfiltered"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Leadership Unfiltered",
              "alternateName": "LU Teams",
              "url": "https://luteams.com",
              "logo": "https://luteams.com/logo.png",
              "description": "Boutique technical leadership coaching with HEXACO-based team synergy prediction software",
              "foundingDate": "2021",
              "sameAs": [
                "https://linkedin.com/company/leadership-unfiltered"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "LU Teams",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "description": "HEXACO-based team synergy prediction for technical leaders in aerospace, IT, and SaaS. Predict friction before it happens.",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/LimitedAvailability",
                "description": "Beta access - limited to 50 founding users"
              }
            })
          }}
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T70GYCYX76"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T70GYCYX76');
          `}
        </Script>
        {/* LinkedIn Insight Tag */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PCHH9HH9');
          `}
        </Script>
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
      <body className="font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PCHH9HH9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header content={translations.en.nav} lang="en" />
        {children}
      </body>
    </html>
  );
}