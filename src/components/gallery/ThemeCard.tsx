"use client";

import type { Theme } from "@/types/theme";
import Link from "next/link";

interface ThemeCardProps {
    theme: Theme;
}

export function ThemeCard({ theme }: ThemeCardProps) {
    return (
        <Link
            href={`/theme/${theme.slug}`}
            className="group block"
        >
            <div className="relative overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all duration-200 hover:shadow-lg hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1">
                {/* Live Mini Preview */}
                <div
                    className="relative h-48 overflow-hidden"
                    data-theme={theme.slug}
                >
                    <style dangerouslySetInnerHTML={{ __html: theme.fullCSS }} />
                    <div className="vs-showcase p-5 h-full flex flex-col justify-between">
                        {/* Mini heading */}
                        <div>
                            <div className="vs-heading vs-h4 mb-1" style={{ fontSize: "16px" }}>
                                Preview
                            </div>
                            <div className="vs-body" style={{ fontSize: "12px", opacity: 0.6 }}>
                                Live theme preview
                            </div>
                        </div>
                        {/* Mini buttons */}
                        <div className="flex gap-2 mt-3">
                            <button className="vs-btn vs-btn-primary" style={{ fontSize: "11px", padding: "5px 12px" }}>
                                Primary
                            </button>
                            <button className="vs-btn vs-btn-outline" style={{ fontSize: "11px", padding: "5px 12px" }}>
                                Outline
                            </button>
                            <button className="vs-btn vs-btn-ghost" style={{ fontSize: "11px", padding: "5px 12px" }}>
                                Ghost
                            </button>
                        </div>
                        {/* Mini card snippet */}
                        <div className="vs-card mt-3" style={{ padding: "8px 12px" }}>
                            <div className="vs-body" style={{ fontSize: "11px", fontWeight: 500 }}>
                                Card Component
                            </div>
                            <div className="vs-body" style={{ fontSize: "10px", opacity: 0.5 }}>
                                Sample card preview
                            </div>
                        </div>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-200 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm font-medium bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 px-4 py-2 rounded-lg shadow-lg">
                            View Theme →
                        </span>
                    </div>
                </div>

                {/* Card Info */}
                <div className="p-4 border-t border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                            {theme.name}
                        </h3>
                        {theme.supportsDarkMode && (
                            <span className="text-xs text-zinc-400 dark:text-zinc-500" title="Supports dark mode">
                                🌙
                            </span>
                        )}
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 mb-3">
                        {theme.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                        <span className="text-[10px] font-medium uppercase tracking-wider text-vsaint-600 dark:text-vsaint-400 bg-vsaint-50 dark:bg-vsaint-950 px-2 py-0.5 rounded-full">
                            {theme.category}
                        </span>
                        {theme.mood.slice(0, 2).map((m) => (
                            <span
                                key={m}
                                className="text-[10px] text-zinc-400 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full"
                            >
                                {m}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}
