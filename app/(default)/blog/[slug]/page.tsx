import { getSupabase } from "@/lib/supabase";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { JsonLd } from "@/components/blog/JsonLd";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export const revalidate = 3600; // Revalidate every hour

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const supabase = getSupabase();
    const { data: post } = await supabase
        .from("posts")
        .select("title, excerpt, meta_title, meta_description, published_at")
        .eq("slug", slug)
        .eq("lang", "en")
        .single();

    if (!post) {
        return {
            title: "Post Not Found",
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
                "pl-PL": `/pl/blog/${slug}`, // Assuming same slug for simplicity, or handle translation logic
                "en-US": `/blog/${slug}`,
            }
        }
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const supabase = getSupabase();
    const { data: post } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .eq("lang", "en")
        .single();

    if (!post) {
        notFound();
    }

    const formattedDate = new Date(post.published_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white pt-24 pb-20">
            <JsonLd
                url={`https://luteams.com/blog/${slug}`}
                post={{
                    title: post.title,
                    excerpt: post.excerpt,
                    date: post.published_at,
                    slug: post.slug,
                }}
            />

            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-sm text-gray-400 hover:text-blue-400 transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Blog
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
