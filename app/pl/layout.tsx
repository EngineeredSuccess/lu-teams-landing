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
    title: "LU Teams - Szósty zmysł lidera technicznego",
    description:
        "Intensywny coaching i narzędzia oparte na HEXACO dla liderów technicznych w lotnictwie, obronności i SaaS. Przewiduj synergię zespołu.",
    keywords: [
        "chemia zespołu",
        "analiza osobowości",
        "budowanie zespołu",
        "narzędzia liderskie",
        "synergia zespołu",
        "przewidywanie konfliktów",
        "dynamika zespołu",
    ],
    authors: [{ name: "Leadership Unfiltered" }],
    creator: "Leadership Unfiltered",
    openGraph: {
        type: "website",
        locale: "pl_PL",
        url: "https://luteams.com/pl",
        siteName: "LU Teams",
        title: "LU Teams - Przewiduj synergię zespołu zanim zaczniesz",
        description:
            "Przestań zgadywać, kto dobrze ze sobą współpracuje. LU Teams analizuje dynamikę osobowości, aby przewidzieć synergię zespołu, zanim w ogóle rozpoczniesz projekt.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "LU Teams - Przewidywanie chemii zespołu",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "LU Teams - Przewiduj synergię zespołu",
        description:
            "Przestań zgadywać, kto dobrze ze sobą współpracuje. Analizuj dynamikę osobowości, aby przewidzieć synergię.",
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
        <html lang="pl" className={`${inter.variable} ${jetbrainsMono.variable}`}>
            <head>
                {/* Schema Markup */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Paweł Rzepecki",
                            "jobTitle": "Technical Leadership Coach",
                            "description": "Boutique'owy coaching dla liderów technicznych w lotnictwie i IT",
                            "url": "https://luteams.com/pl",
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
                            "@type": "SoftwareApplication",
                            "name": "LU Teams",
                            "applicationCategory": "BusinessApplication",
                            "description": "Przewidywanie synergii zespołu oparte na HEXACO",
                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "USD"
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
                <Header content={translations.pl.nav} lang="pl" />
                {children}
            </body>
        </html>
    );
}
