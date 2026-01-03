import { Translations } from "@/lib/translations";
import Link from "next/link";

interface FooterProps {
  content: Translations["footer"];
}

export default function Footer({ content }: FooterProps) {
  return (
    <footer className="py-12 border-t border-white/10 bg-background">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* <img src="/logo.svg" alt="LU Teams" className="w-8 h-8" /> */}
            <span className="text-text-primary font-bold text-lg">LU Teams</span>
          </div>

          {/* Copyright & Social */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
            <div className="flex gap-4">
              <a
                href={content.social?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors"
                aria-label="LinkedIn Company"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c-2.761 0-5 2.239-5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a
                href={content.social?.personal}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors"
                aria-label="LinkedIn Personal"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c-2.761 0-5 2.239-5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>

            <div className="flex gap-4 text-sm text-text-secondary order-first sm:order-none">
              <Link href="/" className="hover:text-primary transition-colors font-medium">EN</Link>
              <span className="text-white/20">|</span>
              <Link href="/pl" className="hover:text-primary transition-colors font-medium">PL</Link>
            </div>

            <p className="text-text-muted text-[10px] sm:text-xs max-w-sm text-center sm:text-right">
              {content.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
