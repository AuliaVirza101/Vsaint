"use client";

import { useState } from "react";
import type { Theme, ShowcaseTab } from "@/types/theme";
import { SHOWCASE_TABS } from "@/types/theme";
import { ThemePreview } from "@/components/preview/ThemePreview";
import { ComponentTabs } from "@/components/preview/ComponentTabs";
import { ButtonShowcase } from "@/components/preview/showcase/ButtonShowcase";
import { CardShowcase } from "@/components/preview/showcase/CardShowcase";
import { FormShowcase } from "@/components/preview/showcase/FormShowcase";
import { NavigationShowcase } from "@/components/preview/showcase/NavigationShowcase";
import { FeedbackShowcase } from "@/components/preview/showcase/FeedbackShowcase";
import { TypographyShowcase } from "@/components/preview/showcase/TypographyShowcase";
import { CopyPanel } from "@/components/copy/CopyPanel";
import { Logo } from "@/components/ui/Logo";
import Link from "next/link";

interface ThemeDetailClientProps {
    theme: Theme;
}

export function ThemeDetailClient({ theme }: ThemeDetailClientProps) {
    const [activeTab, setActiveTab] = useState<ShowcaseTab>("buttons");
    const [mode, setMode] = useState<"light" | "dark">("light");

    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-zinc-400 dark:text-zinc-500 mb-4">
                        <Link href="/" className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors flex items-center" aria-label="Home">
                            <Logo size="sm" />
                        </Link>
                        <span>/</span>
                        <span className="capitalize">{theme.category.replace("-", " / ")}</span>
                        <span>/</span>
                        <span className="text-zinc-900 dark:text-zinc-100 font-medium">{theme.name}</span>
                    </nav>

                    {/* Theme Info */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                                {theme.name}
                            </h1>
                            <p className="text-zinc-500 dark:text-zinc-400 max-w-xl">
                                {theme.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="text-xs font-medium uppercase tracking-wider text-vsaint-600 dark:text-vsaint-400 bg-vsaint-50 dark:bg-vsaint-950 px-2.5 py-1 rounded-full">
                                    {theme.category}
                                </span>
                                {theme.mood.map((m) => (
                                    <span
                                        key={m}
                                        className="text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-full"
                                    >
                                        {m}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Color Palette + Dark Mode Toggle */}
                        <div className="flex items-center gap-4">
                            {theme.supportsDarkMode && (
                                <button
                                    onClick={() => setMode(mode === "light" ? "dark" : "light")}
                                    className="text-sm px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                                >
                                    {mode === "light" ? "☀️ Light" : "🌙 Dark"}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Preview Area */}
                    <div className="flex-1 min-w-0">
                        <ComponentTabs
                            activeTab={activeTab}
                            onTabChange={setActiveTab}
                        />
                        <ThemePreview theme={theme} mode={mode}>
                            {activeTab === "buttons" && <ButtonShowcase />}
                            {activeTab === "cards" && <CardShowcase />}
                            {activeTab === "forms" && <FormShowcase />}
                            {activeTab === "navigation" && <NavigationShowcase />}
                            {activeTab === "feedback" && <FeedbackShowcase />}
                            {activeTab === "typography" && <TypographyShowcase />}
                        </ThemePreview>
                    </div>

                    {/* Copy Panel Sidebar */}
                    <div className="lg:w-96 lg:flex-shrink-0">
                        <CopyPanel theme={theme} />
                    </div>
                </div>
            </div>
        </div>
    );
}
