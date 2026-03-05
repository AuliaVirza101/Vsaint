import type { Theme } from "@/types/theme";
import { ThemeCard } from "./ThemeCard";

interface ThemeGridProps {
    themes: Theme[];
}

export function ThemeGrid({ themes }: ThemeGridProps) {
    if (themes.length === 0) {
        return (
            <div className="text-center py-20">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                    No themes found
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Try adjusting your search or filters.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {themes.map((theme) => (
                <ThemeCard key={theme.slug} theme={theme} />
            ))}
        </div>
    );
}
