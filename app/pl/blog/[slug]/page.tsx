import { getSupabase } from "@/lib/supabase";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { JsonLd } from "@/components/blog/JsonLd";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

// Map of custom blog posts (using same components as English version)
const customBlogs: Record<string, any> = {
    "toxic-genius-pattern": dynamic(() => import("@/blogs/blog-1-toxic-genius-pattern")),
    "silent-architect-pattern": dynamic(() => import("@/blogs/blog-2-silent-architect-pattern")),
    "echo-chamber-effect": dynamic(() => import("@/blogs/blog-3-echo-chamber-effect")),
    "gridlocked-squad-pattern": dynamic(() => import("@/blogs/blog-4-gridlocked-squad-pattern")),
    "overwhelmed-delegate-pattern": dynamic(() => import("@/blogs/blog-5-overwhelmed-delegate-pattern")),
};

export const revalidate = 3600;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    // Check if it's a custom blog first
    if (customBlogs[slug]) {
        const titles: Record<string, string> = {
            "toxic-genius-pattern": "Toksyczny Geniusz: Kiedy Wybitni Inżynierowie Niszczą Dynamikę Zespołu",
            "silent-architect-pattern": "Cichy Architekt: Dlaczego Twoi Najlepsi Inżynierowie Nie Są Słyszani",
            "echo-chamber-effect": "Efekt Komory Echa: Gdy Wszyscy Się Zgadzają (A Wszyscy Się Mylą)",
            "gridlocked-squad-pattern": "Zablokowany Oddział: Wysokie Umiejętności, Zerowa Prędkość",
            "overwhelmed-delegate-pattern": "Przytłoczony Delegat: Gdy Świetni IC Stają Się Mikromanagerami",
        };

        return {
            title: titles[slug] || "Blog o Przywództwie Technicznym | LU Teams",
            description: "Wiedza o dynamice zespołów, osobowości HEXACO i zarządzaniu w inżynierii od Leadership Unfiltered.",
            alternates: {
                languages: {
                    "pl-PL": `/pl/blog/${slug}`,
                    "en-US": `/blog/${slug}`,
                },
            }
        };
    }

    let post = null;
    try {
        const supabase = getSupabase();
        const { data } = await supabase
            .from("posts")
            .select("title, excerpt, meta_title, meta_description, published_at")
            .eq("slug", slug)
            .eq("lang", "pl")
            .single();
        post = data;
    } catch (e) {
        console.warn("Supabase not configured or error fetching post:", e);
    }

    if (!post) {
        return {
            title: "Nie znaleziono wpisu",
        };
    }

    return {
        title: post.meta_title || post.title,
        description: post.meta_description || post.excerpt,
        openGraph: {
            title: post.meta_title || post.title,
            description: post.meta_description || post.excerpt,
            type: "article",
            publishedTime: post.published_at,
            authors: ["Leadership Unfiltered"],
        },
        alternates: {
            languages: {
                "pl-PL": `/pl/blog/${slug}`,
                "en-US": `/blog/${slug}`,
            }
        }
    };
}

export default async function BlogPostPagePL({ params }: Props) {
    const { slug } = await params;

    // Check if it's a custom blog
    if (customBlogs[slug]) {
        const CustomBlogComponent = customBlogs[slug];
        // Note: The content of these components is currently in English.
        return <CustomBlogComponent />;
    }

    let post = null;
    try {
        const supabase = getSupabase();
        const { data } = await supabase
            .from("posts")
            .select("*")
            .eq("slug", slug)
            .eq("lang", "pl")
            .single();
        post = data;
    } catch (e) {
        console.warn("Supabase not configured or error fetching post:", e);
    }

    if (!post) {
        notFound();
    }

    const formattedDate = new Date(post.published_at).toLocaleDateString("pl-PL", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white pt-24 pb-20">
            <JsonLd
                url={`https://luteams.com/pl/blog/${slug}`}
                post={{
                    title: post.title,
                    excerpt: post.excerpt,
                    date: post.published_at,
                    slug: post.slug,
                }}
            />

            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    href="/pl/blog"
                    className="inline-flex items-center text-sm text-gray-400 hover:text-blue-400 transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Wróć do Bloga
                </Link>

                <header className="mb-12">
                    <div className="flex items-center gap-2 text-sm text-blue-400 mb-4">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={post.published_at}>{formattedDate}</time>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 leading-tight mb-6">
                        {post.title}
                    </h1>
                    {post.excerpt && (
                        <p className="text-xl text-gray-400 leading-relaxed border-l-4 border-blue-500/50 pl-6">
                            {post.excerpt}
                        </p>
                    )}
                </header>

                <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-code:bg-white/10 prose-code:rounded prose-code:px-1 prose-strong:text-white">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
            </article>
        </main>
    );
}
