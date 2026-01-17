import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface PostPreviewProps {
    title: string;
    excerpt: string;
    slug: string;
    date: string;
    lang: "en" | "pl";
}

export function PostPreview({ title, excerpt, slug, date, lang }: PostPreviewProps) {
    const formattedDate = new Date(date).toLocaleDateString(
        lang === "pl" ? "pl-PL" : "en-US",
        {
            year: "numeric",
            month: "long",
            day: "numeric",
        }
    );

    const href = lang === "pl" ? `/pl/blog/${slug}` : `/blog/${slug}`;

    return (
        <div className="relative group flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                <Calendar className="w-4 h-4" />
                <time dateTime={date}>{formattedDate}</time>
            </div>

            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-3 group-hover:from-blue-400 group-hover:to-blue-200 transition-all">
                <Link href={href} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {title}
                </Link>
            </h3>

            <p className="text-gray-400 flex-grow mb-6 line-clamp-3">
                {excerpt}
            </p>

            <div className="flex items-center text-blue-400 font-medium group-hover:translate-x-1 transition-transform">
                {lang === "pl" ? "Czytaj więcej" : "Read Article"}
                <ArrowRight className="w-4 h-4 ml-2" />
            </div>
        </div>
    );
}
