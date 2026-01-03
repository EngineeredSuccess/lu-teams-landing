import { getSupabase } from "@/lib/supabase";
import { PostPreview } from "@/components/blog/PostPreview";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog o Przywództwie Technicznym | LU Teams",
    description: "Wiedza o dynamice zespołów, osobowości HEXACO i zarządzaniu w inżynierii od Leadership Unfiltered.",
    alternates: {
        languages: {
            "pl-PL": "/pl/blog",
            "en-US": "/blog",
        },
    },
};

export const revalidate = 3600;

export default async function BlogPagePL() {
    const supabase = getSupabase();
    const { data: posts, error } = await supabase
        .from("posts")
        .select("title, excerpt, slug, published_at")
        .eq("lang", "pl")
        .lte("published_at", new Date().toISOString())
        .order("published_at", { ascending: false });

    if (error) {
        console.error("Error fetching posts:", error);
    }

    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
                        Inżynieria i Przywództwo
                    </h1>
                    <p className="text-xl text-gray-400">
                        Artykuły o psychologii zespołów, zarządzaniu opartym na danych i budowaniu wydajnych organizacji inżynierskich.
                    </p>
                </div>

                {!posts || posts.length === 0 ? (
                    <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
                        <h3 className="text-2xl font-semibold mb-2">Brak wpisów</h3>
                        <p className="text-gray-400">
                            Wkrótce pojawią się tu najnowsze artykuły.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <PostPreview
                                key={post.slug}
                                title={post.title}
                                excerpt={post.excerpt}
                                slug={post.slug}
                                date={post.published_at}
                                lang="pl"
                            />
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
