import { Translations } from "@/lib/translations";
import Link from "next/link";

interface FooterProps {
  content: Translations["footer"];
}

export default function Footer({ content }: FooterProps) {
  return (
    <footer className="py-12 border-t border-slate-400/10">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="LU Teams" className="w-8 h-8" />
            <span className="text-white font-bold text-lg">LU Teams</span>
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div className="flex gap-4 text-sm text-slate-400">
              <Link href="/" className="hover:text-cyan transition-colors">English</Link>
              <span className="text-slate-600">|</span>
              <Link href="/pl" className="hover:text-cyan transition-colors">Polski</Link>
            </div>
            <p className="text-slate-400 text-sm">
              {content.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
