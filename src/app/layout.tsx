import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "Vsaint — Find a design system you love. Ship it today.",
        template: "%s | Vsaint",
    },
    description:
        "Interactive visual reference with hundreds of CSS design systems. Browse live previews, compare themes, and copy CSS in one click.",
    keywords: [
        "CSS design system",
        "theme gallery",
        "UI themes",
        "design reference",
        "CSS variables",
        "web design",
        "frontend",
        "open source",
    ],
    authors: [{ name: "Vsaint" }],
    openGraph: {
        title: "Vsaint — Find a design system you love. Ship it today.",
        description:
            "Interactive visual reference with hundreds of CSS design systems. Browse, preview, and copy.",
        type: "website",
        locale: "en_US",
        siteName: "Vsaint",
    },
    twitter: {
        card: "summary_large_image",
        title: "Vsaint — CSS Design Systems Gallery",
        description:
            "Find a design system you love. Ship it today.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 antialiased selection:bg-vsaint-500/30 selection:text-vsaint-900 dark:selection:bg-vsaint-500/40 dark:selection:text-vsaint-100">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
