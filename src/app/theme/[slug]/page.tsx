import { getAllThemes, getThemeBySlug, getGoogleFontsUrl } from "@/lib/themes";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ThemeDetailClient } from "./ThemeDetailClient";

// Generate static pages for all themes
export async function generateStaticParams() {
    const themes = getAllThemes();
    return themes.map((theme) => ({ slug: theme.slug }));
}

// Dynamic metadata per theme
export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const theme = getThemeBySlug(params.slug);
    if (!theme) return {};

    return {
        title: `${theme.name} — ${theme.category} theme`,
        description: theme.description,
        openGraph: {
            title: `${theme.name} | Vsaint`,
            description: theme.description,
        },
    };
}

export default function ThemeDetailPage({
    params,
}: {
    params: { slug: string };
}) {
    const theme = getThemeBySlug(params.slug);
    if (!theme) notFound();

    const fontsUrl = getGoogleFontsUrl(theme);

    return (
        <>
            {/* Load theme fonts */}
            {fontsUrl && (
                // eslint-disable-next-line @next/next/no-page-custom-font
                <link href={fontsUrl} rel="stylesheet" />
            )}
            <ThemeDetailClient theme={theme} />
        </>
    );
}
