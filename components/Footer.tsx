export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-400/10">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-cyan font-bold text-xl">LU</span>
            <span className="text-slate-400 font-medium">Teams</span>
          </div>

          {/* Copyright */}
          <p className="text-slate-400 text-sm">
            © 2025 LU Teams by Leadership Unfiltered
          </p>

          {/* Optional: Social/Links */}
          <div className="flex items-center space-x-6">
            <a
              href="mailto:hello@luteams.com"
              className="text-slate-400 hover:text-cyan transition-colors duration-300 text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}