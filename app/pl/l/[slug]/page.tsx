import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const SLUG_MAP: Record<string, string> = {
    "toxic-genius": "landing_1.md",
    "retencja": "landing_2.md",
    "zespol-zdalny": "landing_3.md",
    "tech-lead": "landing_4.md"
};

async function getLandingContent(slug: string) {
    const filename = SLUG_MAP[slug];
    if (!filename) return null;

    const filePath = path.join(process.cwd(), "landingi", filename);
    try {
        const fileContent = await fs.readFile(filePath, "utf-8");

        // Split content and metadata
        // Metadata starts with <title> or <meta
        const metadataStartIndex = fileContent.search(/<(title|meta)/);

        let htmlContent = fileContent;
        let metadataBlock = "";

        if (metadataStartIndex !== -1) {
            htmlContent = fileContent.substring(0, metadataStartIndex);
            metadataBlock = fileContent.substring(metadataStartIndex);
        }

        return { htmlContent, metadataBlock };
    } catch (e) {
        console.error(`Error reading landing file: ${filename}`, e);
        return null;
    }
}

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const content = await getLandingContent(slug);
    if (!content) return {};

    const { metadataBlock } = content;

    // Extract title
    const titleMatch = metadataBlock.match(/<title>(.*?)<\/title>/);
    const title = titleMatch ? titleMatch[1] : "LU Teams";

    // Extract description
    const descMatch = metadataBlock.match(/<meta name="description" content="(.*?)"/);
    const description = descMatch ? descMatch[1] : "";

    // Extract keywords
    const keywordsMatch = metadataBlock.match(/<meta name="keywords" content="(.*?)"/);
    const keywords = keywordsMatch ? keywordsMatch[1].split(", ") : [];

    return {
        title,
        description,
        keywords,
        robots: {
            index: false,
            follow: true
        }
    };
}


export default async function LandingPage({ params }: Props) {
    const { slug } = await params;
    const content = await getLandingContent(slug);

    if (!content) {
        return notFound();
    }

    return (
        <div dangerouslySetInnerHTML={{ __html: content.htmlContent }} />
    );
}

export function generateStaticParams() {
    return Object.keys(SLUG_MAP).map((slug) => ({ slug }));
}
