import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import type { Theme, ThemeMeta } from "@/types/theme";

// ─── Constants ───────────────────────────────────────────────

const THEMES_DIR = path.join(process.cwd(), "content", "themes");

// ─── Load a single theme from its directory ──────────────────

function loadThemeFromDir(
    categoryDir: string,
    themeDir: string
): Theme | null {
    const themePath = path.join(THEMES_DIR, categoryDir, themeDir);

    // Check required files exist
    const metaPath = path.join(themePath, "meta.yaml");
    const tokensPath = path.join(themePath, "tokens.css");
    const identityPath = path.join(themePath, "identity.css");

    if (!fs.existsSync(metaPath)) {
        console.warn(`[Vsaint] Missing meta.yaml in ${themePath}`);
        return null;
    }
    if (!fs.existsSync(tokensPath)) {
        console.warn(`[Vsaint] Missing tokens.css in ${themePath}`);
        return null;
    }
    if (!fs.existsSync(identityPath)) {
        console.warn(`[Vsaint] Missing identity.css in ${themePath}`);
        return null;
    }

    // Parse meta.yaml
    const metaRaw = fs.readFileSync(metaPath, "utf-8");
    const meta = yaml.load(metaRaw) as ThemeMeta;

    // Load CSS files
    const tokensCSS = fs.readFileSync(tokensPath, "utf-8");
    const identityCSS = fs.readFileSync(identityPath, "utf-8");

    return {
        ...meta,
        tokensCSS,
        identityCSS,
        fullCSS: `${tokensCSS}\n\n${identityCSS}`,
        path: `${categoryDir}/${themeDir}`,
    };
}

// ─── Load all themes ─────────────────────────────────────────

let cachedThemes: Theme[] | null = null;

export function getAllThemes(): Theme[] {
    if (cachedThemes) return cachedThemes;

    const themes: Theme[] = [];

    if (!fs.existsSync(THEMES_DIR)) {
        console.warn(`[Vsaint] Themes directory not found: ${THEMES_DIR}`);
        return themes;
    }

    // Read category directories
    const categoryDirs = fs
        .readdirSync(THEMES_DIR, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name);

    for (const categoryDir of categoryDirs) {
        const categoryPath = path.join(THEMES_DIR, categoryDir);
        const themeDirs = fs
            .readdirSync(categoryPath, { withFileTypes: true })
            .filter((d) => d.isDirectory())
            .map((d) => d.name);

        for (const themeDir of themeDirs) {
            const theme = loadThemeFromDir(categoryDir, themeDir);
            if (theme) {
                themes.push(theme);
            }
        }
    }

    cachedThemes = themes;
    return themes;
}

// ─── Get a single theme by slug ──────────────────────────────

export function getThemeBySlug(slug: string): Theme | undefined {
    return getAllThemes().find((t) => t.slug === slug);
}

// ─── Get themes by category ──────────────────────────────────

export function getThemesByCategory(category: string): Theme[] {
    return getAllThemes().filter((t) => t.category === category);
}

// ─── Get all unique categories (that have themes) ────────────

export function getActiveCategories(): string[] {
    const themes = getAllThemes();
    return [...new Set(themes.map((t) => t.category))];
}

// ─── Get Google Fonts URL for a theme ────────────────────────

export function getGoogleFontsUrl(theme: Theme): string | null {
    const googleFonts = theme.fonts.filter((f) => f.source === "google");
    if (googleFonts.length === 0) return null;

    const families = googleFonts.map((f) => {
        const weights = f.weights.join(";");
        return `family=${f.family.replace(/\s+/g, "+")}:wght@${weights}`;
    });

    return `https://fonts.googleapis.com/css2?${families.join("&")}&display=swap`;
}
