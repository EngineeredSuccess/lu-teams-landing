export default function Footer() {
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
          <p className="text-slate-400 text-sm">
            © 2025 LU Teams by Leadership Unfiltered. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
