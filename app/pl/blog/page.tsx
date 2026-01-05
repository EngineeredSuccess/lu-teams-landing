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

    // Custom pattern posts (always shown first) - Polish versions
    const customPosts = [
        {
            title: "Toksyczny Geniusz: Kiedy Wybitni Inżynierowie Niszczą Dynamikę Zespołu",
            excerpt: "Główny inżynier z 10-krotnością wydajności kosztował firmę 2 mln USD w utraconej produktywności. Nikt nie przewidział tego do ostatniej chwili.",
            slug: "toxic-genius-pattern",
            published_at: "2024-12-01T00:00:00Z"
        },
        {
            title: "Cichy Architekt: Dlaczego Twoi Najlepsi Inżynierowie Nie Są Słyszani",
            excerpt: "Główny architekt zaprojektował cały system rozliczeniowy, ale przestał zabierać głos na spotkaniach. Krytyczne błędy wykryto dopiero na etapie stagingu.",
            slug: "silent-architect-pattern",
            published_at: "2024-12-02T00:00:00Z"
        },
        {
            title: "Efekt Komory Echa: Gdy Wszyscy Się Zgadzają (A Wszyscy Się Mylą)",
            excerpt: "Zespół zatrudniony wyłącznie z tego samego bootcampu. Szybko dostarczali, ale przez trzy miesiące nie mogli rozwiązać żadnego złożonego wycieku pamięci.",
            slug: "echo-chamber-effect",
            published_at: "2024-12-03T00:00:00Z"
        },
        {
            title: "Zablokowany Oddział: Wysokie Umiejętności, Zerowa Prędkość",
            excerpt: "Pięciu seniorów, wszyscy perfekcjoniści. Tygodniami debatowali nad skrajnymi przypadkami zamiast dostarczyć MVP.",
            slug: "gridlocked-squad-pattern",
            published_at: "2024-12-04T00:00:00Z"
        },
        {
            title: "Przytłoczony Delegat: Gdy Świetni IC Stają Się Mikromanagerami",
            excerpt: "Zespół SaaS o wysokiej prędkości zbudował 12 funkcji w 4 miesiące. Tylko jedna była używana przez klientów. Potem przyszło wypalenie.",
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
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
                        Inżynieria i Przywództwo
                    </h1>
                    <p className="text-xl text-gray-400">
                        Artykuły o psychologii zespołów, zarządzaniu opartym na danych i budowaniu wydajnych organizacji inżynierskich.
                    </p>
                </div>

                {!allPosts || allPosts.length === 0 ? (
                    <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
                        <h3 className="text-2xl font-semibold mb-2">Brak wpisów</h3>
                        <p className="text-gray-400">
                            Wkrótce pojawią się tu najnowsze artykuły.
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
                                lang="pl"
                            />
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
