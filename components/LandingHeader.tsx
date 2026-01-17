import Link from "next/link";

export default function LandingHeader() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4">
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/pl" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-600 to-sky-800 flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform shadow-lg shadow-sky-900/20">
                        LU
                    </div>
                    <span className="text-xl font-bold text-white hidden sm:block">
                        Teams
                    </span>
                </Link>

                {/* Simplified Actions */}
                <div className="flex items-center gap-4">
                    {/* No language switcher to keep focus on the ad language */}
                    <Link
                        href="#pricing"
                        className="btn-primary-large text-sm px-6 py-2 !shadow-none hover:bg-sky-500"
                    >
                        Zacznij Teraz
                    </Link>
                </div>
            </div>
        </header>
    );
}
