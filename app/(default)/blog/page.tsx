import { getSupabase } from "@/lib/supabase";
import { PostPreview } from "@/components/blog/PostPreview";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Engineering Leadership Blog | LU Teams",
    description: "Insights on team dynamics, HEXACO personality traits, and engineering management from Leadership Unfiltered.",
    alternates: {
        languages: {
            "pl-PL": "/pl/blog",
            "en-US": "/blog",
        },
    },
};

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
    let posts: any[] = [];
    try {
        const supabase = getSupabase();
        const { data, error } = await supabase
            .from("posts")
            .select("title, excerpt, slug, published_at")
            .eq("lang", "en")
            .lte("published_at", new Date().toISOString())
            .order("published_at", { ascending: false });

        if (error) {
            console.error("Error fetching posts:", error);
        } else {
            posts = data || [];
        }
    } catch (e) {
        console.warn("Supabase not configured or error fetching posts:", e);
    }

    // Custom pattern posts (always shown first)
    const customPosts = [
        {
            title: "The Toxic Genius: When Brilliant Engineers Destroy Team Dynamics",
            excerpt: "A staff engineer with 10x output cost his company $2M in lost productivity. Nobody saw it coming—until it was too late.",
            slug: "toxic-genius-pattern",
            published_at: "2024-12-01T00:00:00Z"
        },
        {
            title: "The Silent Architect: Why Your Best Engineers Go Unheard",
            excerpt: "A principal architect designed the entire clearing system but stopped speaking in meetings. Critical flaws weren't caught until staging.",
            slug: "silent-architect-pattern",
            published_at: "2024-12-02T00:00:00Z"
        },
        {
            title: "The Echo Chamber Effect: When Everyone Agrees (And Everyone's Wrong)",
            excerpt: "A team hired exclusively from the same bootcamp. They shipped fast but couldn't solve a single complex memory leak for three months.",
            slug: "echo-chamber-effect",
            published_at: "2024-12-03T00:00:00Z"
        },
        {
            title: "The Gridlocked Squad: High Skill, Zero Velocity",
            excerpt: "Five senior developers, all perfectionists. They spent weeks debating edge cases instead of shipping the MVP.",
            slug: "gridlocked-squad-pattern",
            published_at: "2024-12-04T00:00:00Z"
        },
        {
            title: "The Overwhelmed Delegate: When Great ICs Become Micromanaging Leads",
            excerpt: "A high-velocity SaaS team built 12 features in 4 months. Only one was used by customers. Burnout followed.",
            slug: "overwhelmed-delegate-pattern",
            published_at: "2024-12-05T00:00:00Z"
        }
    ];

    // Combine custom posts with Supabase posts
    const allPosts = [...customPosts, ...(posts || [])];

    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Engineering Leadership Insights
                    </h1>
                    <p className="text-xl text-slate-200">
                        Deep dives into team psychology, data-driven management, and the science of high-performing engineering organizations.
                    </p>
                </div>

                {!allPosts || allPosts.length === 0 ? (
                    <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
                        <h3 className="text-2xl font-semibold mb-2">No posts yet</h3>
                        <p className="text-gray-400">
                            Check back soon for our latest articles on engineering leadership.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allPosts.map((post) => (
                            <PostPreview
                                key={post.slug}
                                title={post.title}
                                excerpt={post.excerpt}
                                slug={post.slug}
                                date={post.published_at}
                                lang="en"
                            />
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
