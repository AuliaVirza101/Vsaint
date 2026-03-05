"use client";

import { useState, useMemo } from "react";
import type { Theme, ThemeCategory } from "@/types/theme";
import { THEME_CATEGORIES } from "@/types/theme";
import { ThemeGrid } from "./ThemeGrid";

interface GalleryClientProps {
    themes: Theme[];
}

export function GalleryClient({ themes }: GalleryClientProps) {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState<ThemeCategory | "all">("all");

    // Get categories that actually have themes
    const availableCategories = useMemo(() => {
        const cats = new Set(themes.map((t) => t.category));
        return THEME_CATEGORIES.filter((c) => cats.has(c.slug));
    }, [themes]);

    // Filter themes
    const filtered = useMemo(() => {
        let result = themes;

        // Category filter
        if (activeCategory !== "all") {
            result = result.filter((t) => t.category === activeCategory);
        }

        // Search filter
        if (search.trim()) {
            const q = search.toLowerCase();
            result = result.filter(
                (t) =>
                    t.name.toLowerCase().includes(q) ||
                    t.description.toLowerCase().includes(q) ||
                    t.category.toLowerCase().includes(q) ||
                    t.tags.some((tag) => tag.toLowerCase().includes(q)) ||
                    t.mood.some((m) => m.toLowerCase().includes(q))
            );
        }

        return result;
    }, [themes, search, activeCategory]);

    // Count per category
    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = { all: themes.length };
        themes.forEach((t) => {
            counts[t.category] = (counts[t.category] || 0) + 1;
        });
        return counts;
    }, [themes]);

    return (
        <div>
            {/* Search + Filter Bar */}
            <div className="mb-8 space-y-4">
                {/* Search Input */}
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg
                            className="w-4 h-4 text-zinc-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <input
                        id="theme-search"
                        type="text"
                        placeholder="Search themes by name, category, tag, or mood..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100 text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-vsaint-500/30 focus:border-vsaint-500 transition-all duration-200"
                    />
                    {search && (
                        <button
                            onClick={() => setSearch("")}
                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>

                {/* Category Filter Pills */}
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => setActiveCategory("all")}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${activeCategory === "all"
                                ? "bg-vsaint-500 text-white shadow-sm shadow-vsaint-500/25"
                                : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                            }`}
                    >
                        All
                        <span className="ml-1.5 opacity-70">{categoryCounts.all}</span>
                    </button>
                    {availableCategories.map((cat) => (
                        <button
                            key={cat.slug}
                            onClick={() => setActiveCategory(cat.slug)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${activeCategory === cat.slug
                                    ? "bg-vsaint-500 text-white shadow-sm shadow-vsaint-500/25"
                                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                                }`}
                        >
                            {cat.label}
                            <span className="ml-1.5 opacity-70">{categoryCounts[cat.slug] || 0}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {activeCategory === "all"
                        ? "All Themes"
                        : availableCategories.find((c) => c.slug === activeCategory)?.label || "Themes"}
                </h2>
                <span className="text-sm text-zinc-400 dark:text-zinc-500">
                    {filtered.length} {filtered.length === 1 ? "theme" : "themes"}
                    {search && ` matching "${search}"`}
                </span>
            </div>

            {/* Grid */}
            <ThemeGrid themes={filtered} />
        </div>
    );
}
