import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/admin/*"], // Protect admin API routes from crawling
        },
        sitemap: "https://luteams.com/sitemap.xml",
    };
}
