import LandingHeader from "@/components/LandingHeader";
import Script from "next/script";
import "./landing.css";
import React from "react";

export const metadata = {
    robots: {
        index: false, // Don't index these specific ad landing pages to avoid duplicate content punishment
        follow: true,
    },
};

export default function AdsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="landing-page bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-sky-500/30">
            <LandingHeader />
            <main>{children}</main>
            <footer className="py-12 text-center text-slate-600 text-sm border-t border-slate-900/50 mt-20 bg-slate-950">
                <div className="container mx-auto px-6">
                    <p className="mb-4">&copy; {new Date().getFullYear()} LU Teams. Wszelkie prawa zastrzeżone.</p>
                    <div className="flex justify-center gap-6 text-xs text-slate-700">
                        <span>Polityka Prywatności</span>
                        <span>Regulamin</span>
                        <span>Kontakt</span>
                    </div>
                </div>
            </footer>
            {/* Google Ads Tag */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=AW-17884010556"
                strategy="afterInteractive"
            />
            <Script id="google-ads-tag" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'AW-17884010556');
                `}
            </Script>
        </div >
    );
}
