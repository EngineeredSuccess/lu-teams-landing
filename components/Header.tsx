"use client";

import { Translations, Language } from "@/lib/translations";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface HeaderProps {
    content: Translations["nav"];
    lang: Language;
}

export default function Header({ content, lang }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const switchLangPath = lang === "en" ? "/pl" : "/";

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link href={lang === "en" ? "/" : "/pl"} className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-background font-bold text-xl group-hover:scale-105 transition-transform">
                        LU
                    </div>
                    <span className="text-xl font-bold text-white hidden sm:block">
                        Teams
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#how-it-works" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">
                        {content.howItWorks}
                    </a>
                    <a href="#patterns" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">
                        {content.patterns}
                    </a>
                    <a href="#transformations" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">
                        {content.transformations}
                    </a>
                    <Link
                        href={lang === "en" ? "/blog" : "/pl/blog"}
                        className={`text-sm font-medium transition-colors ${pathname.includes("/blog") ? "text-primary border-b border-primary" : "text-slate-300 hover:text-primary"
                            }`}
                    >
                        {content.insights}
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    {/* Language Switcher */}
                    <Link
                        href={switchLangPath}
                        className="text-xs font-bold px-2 py-1 rounded border border-white/20 text-white hover:bg-white/10 transition-colors uppercase"
                    >
                        {lang === "en" ? "PL" : "EN"}
                    </Link>

                    <a
                        href="#application"
                        className="hidden sm:block btn-primary px-5 py-2 text-sm"
                    >
                        {content.apply}
                    </a>
                </div>
            </div>
        </header>
    );
}
