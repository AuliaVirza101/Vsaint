"use client";

import type { Theme } from "@/types/theme";

interface ThemePreviewProps {
    theme: Theme;
    mode: "light" | "dark";
    children: React.ReactNode;
}

export function ThemePreview({ theme, mode, children }: ThemePreviewProps) {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: theme.fullCSS }} />
            <div
                data-theme={theme.slug}
                data-mode={mode}
                className="vs-showcase rounded-lg border border-zinc-200 dark:border-zinc-800 min-h-[400px]"
            >
                {children}
            </div>
        </>
    );
}
