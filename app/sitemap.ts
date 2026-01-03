import { getSupabase } from "@/lib/supabase";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://luteams.com";
    const supabase = getSupabase();

    // Static routes
    const routes = [
        "",
        "/pl",
        "/blog",
        "/pl/blog",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" || route === "/pl" ? 1.0 : 0.8,
    }));

    // Dynamic blog posts
    const { data: posts } = await supabase
        .from("posts")
        .select("slug, lang, updated_at")
        .lte("published_at", new Date().toISOString());

    const blogRoutes = (posts || []).map((post) => ({
        url: `${baseUrl}${post.lang === "pl" ? "/pl/blog" : "/blog"}/${post.slug}`,
        lastModified: new Date(post.updated_at),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...routes, ...blogRoutes];
}
