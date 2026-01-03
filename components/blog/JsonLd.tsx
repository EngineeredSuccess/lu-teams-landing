import { Article, WithContext } from "schema-dts";

interface JsonLdProps {
    post: {
        title: string;
        excerpt: string;
        date: string;
        slug: string;
        authorName?: string;
        image?: string;
    };
    url: string;
}

export function JsonLd({ post, url }: JsonLdProps) {
    const schema: WithContext<Article> = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.date, // Should ideally be updated_at
        author: {
            "@type": "Organization",
            name: post.authorName || "Leadership Unfiltered",
        },
        publisher: {
            "@type": "Organization",
            name: "Leadership Unfiltered",
            logo: {
                "@type": "ImageObject",
                url: "https://luteams.com/logo.png", // Replace with actual logo URL if available
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
        },
        image: post.image || "https://luteams.com/og-image.png",
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
