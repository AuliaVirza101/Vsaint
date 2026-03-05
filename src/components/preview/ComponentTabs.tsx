"use client";

import type { ShowcaseTab } from "@/types/theme";
import { SHOWCASE_TABS } from "@/types/theme";

interface ComponentTabsProps {
    activeTab: ShowcaseTab;
    onTabChange: (tab: ShowcaseTab) => void;
}

export function ComponentTabs({ activeTab, onTabChange }: ComponentTabsProps) {
    return (
        <div className="flex gap-1 mb-4 bg-zinc-100 dark:bg-zinc-800 p-1 rounded-lg overflow-x-auto">
            {SHOWCASE_TABS.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`
            px-4 py-2 text-sm font-medium rounded-md transition-all duration-150 whitespace-nowrap
            ${activeTab === tab.id
                            ? "bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-sm"
                            : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
                        }
          `}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}
