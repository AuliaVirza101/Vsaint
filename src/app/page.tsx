import { getAllThemes } from "@/lib/themes";
import { ThemeGrid } from "@/components/gallery/ThemeGrid";

export default function Home() {
    const themes = getAllThemes();

    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-vsaint-50/50 to-transparent dark:from-vsaint-950/20 dark:to-transparent" />
                <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
                        <span className="text-vsaint-500">V</span>
                        <span className="text-zinc-900 dark:text-zinc-100">saint</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 mb-3 font-light">
                        Find a design system you love. Ship it today.
                    </p>
                    <p className="text-sm text-zinc-400 dark:text-zinc-500 max-w-lg mx-auto">
                        Interactive visual reference with CSS design systems that have real identity —
                        not just color swaps. Browse, preview, and copy in one click.
                    </p>
                    <div className="flex justify-center gap-6 mt-8 text-sm text-zinc-500 dark:text-zinc-400">
                        <span><strong className="text-zinc-900 dark:text-zinc-100">{themes.length}</strong> themes</span>
                        <span>·</span>
                        <span><strong className="text-zinc-900 dark:text-zinc-100">6</strong> component types</span>
                        <span>·</span>
                        <span><strong className="text-zinc-900 dark:text-zinc-100">1-click</strong> copy</span>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <main className="max-w-7xl mx-auto px-6 pb-20">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                        All Themes
                    </h2>
                    <span className="text-sm text-zinc-400 dark:text-zinc-500">
                        {themes.length} {themes.length === 1 ? "theme" : "themes"}
                    </span>
                </div>
                <ThemeGrid themes={themes} />
            </main>
        </>
    );
}
