"use client";

import { useState } from "react";
import type { Theme } from "@/types/theme";
import { generateCSSVariablesSnippet, generateFullThemeCSS } from "@/lib/cssGenerator";
import { generateTailwindConfig } from "@/lib/tailwindConfigGenerator";
import { CopyButton } from "./CopyButton";

interface CopyPanelProps {
    theme: Theme;
}

type CopyTab = "tokens" | "full" | "tailwind";

export function CopyPanel({ theme }: CopyPanelProps) {
    const [activeTab, setActiveTab] = useState<CopyTab>("tokens");

    const snippets: Record<CopyTab, { label: string; code: string; language: string }> = {
        tokens: {
            label: "CSS Tokens",
            code: generateCSSVariablesSnippet(theme),
            language: "css",
        },
        full: {
            label: "Full Theme",
            code: generateFullThemeCSS(theme),
            language: "css",
        },
        tailwind: {
            label: "Tailwind Config",
            code: generateTailwindConfig(theme),
            language: "javascript",
        },
    };

    const current = snippets[activeTab];

    return (
        <div className="sticky top-8">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Copy Theme
            </h3>

            {/* Tabs */}
            <div className="flex gap-1 mb-3 bg-zinc-100 dark:bg-zinc-800 p-1 rounded-lg">
                {(Object.keys(snippets) as CopyTab[]).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`
              flex-1 px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-150
              ${activeTab === tab
                                ? "bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-sm"
                                : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
                            }
            `}
                    >
                        {snippets[tab].label}
                    </button>
                ))}
            </div>

            {/* Code Block */}
            <div className="relative rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-950 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800">
                    <span className="text-xs text-zinc-500">{current.language}</span>
                    <CopyButton text={current.code} />
                </div>
                <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                    <code className="text-zinc-300 font-mono text-xs">
                        {current.code}
                    </code>
                </pre>
            </div>

            {/* Quick Info */}
            <div className="mt-4 p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800">
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {activeTab === "tokens" && "Paste these CSS variables into your :root {} block for quick color/font changes."}
                    {activeTab === "full" && "Complete theme CSS including design identity styles. Paste into your stylesheet."}
                    {activeTab === "tailwind" && "Paste this into your tailwind.config.js → theme.extend to use these tokens with Tailwind."}
                </p>
            </div>
        </div>
    );
}
