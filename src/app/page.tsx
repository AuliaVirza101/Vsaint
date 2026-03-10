import { getAllThemes } from "@/lib/themes";
import { GalleryClient } from "@/components/gallery/GalleryClient";
import { Logo } from "@/components/ui/Logo";

export default function Home() {
    const themes = getAllThemes();

    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-vsaint-50/50 to-transparent dark:from-vsaint-950/20 dark:to-transparent" />
                <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
                    <div className="flex justify-center mb-6">
                        <Logo size="xl" />
                    </div>
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

            {/* Gallery with Search & Filter */}
            <main className="max-w-7xl mx-auto px-6 pb-20">
                <GalleryClient themes={themes} />
            </main>
        </>
    );
}

