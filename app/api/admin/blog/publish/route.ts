import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
    try {
        const authHeader = req.headers.get("x-api-key");
        const secret = process.env.BLOG_PUBLISH_SECRET;

        if (!secret) {
            console.error("BLOG_PUBLISH_SECRET is not set");
            return NextResponse.json(
                { error: "Server misconfiguration" },
                { status: 500 }
            );
        }

        if (authHeader !== secret) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();
        const {
            slug,
            lang = "en",
            title,
            content,
            excerpt,
            meta_title,
            meta_description,
            published_at,
        } = body;

        // Basic validation
        if (!slug || !title || !content) {
            return NextResponse.json(
                { error: "Missing required fields: slug, title, content" },
                { status: 400 }
            );
        }

        const supabase = getSupabaseAdmin();

        // Check if post exists
        const { data: existingPost } = await supabase
            .from("posts")
            .select("id")
            .eq("slug", slug)
            .eq("lang", lang)
            .single();

        let result;
        const postData = {
            slug,
            lang,
            title,
            content,
            excerpt,
            meta_title: meta_title || title,
            meta_description: meta_description || excerpt,
            published_at: published_at || new Date().toISOString(),
            updated_at: new Date().toISOString(),
        };

        if (existingPost) {
            // Update
            const { data, error } = await supabase
                .from("posts")
                .update(postData)
                .eq("id", existingPost.id)
                .select()
                .single();

            if (error) throw error;
            result = data;
        } else {
            // Insert
            const { data, error } = await supabase
                .from("posts")
                .insert(postData)
                .select()
                .single();

            if (error) throw error;
            result = data;
        }

        // Force revalidation of the blog pages
        // Note: In Next.js App Router, we usually use revalidatePath or revalidateTag
        // Since this is an API route, we can try revalidating the path.
        // However, for simplicity and ISR, just updating the DB is often enough if revalidate is set on the page.
        // If on-demand revalidation is needed:
        // import { revalidatePath } from 'next/cache';
        // revalidatePath(`/${lang}/blog`);
        // revalidatePath(`/${lang}/blog/${slug}`);

        return NextResponse.json({ success: true, post: result });

    } catch (error: any) {
        console.error("Error publishing post:", error);
        return NextResponse.json(
            { error: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}
