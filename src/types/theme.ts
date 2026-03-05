// Theme type definitions for Vsaint
// These interfaces define the contract between theme data files and the application.

// ─── Categories ──────────────────────────────────────────────

export type ThemeCategory =
    | "minimal"
    | "bold"
    | "glassmorphism"
    | "neumorphism"
    | "brutalist"
    | "dark-cyberpunk"
    | "corporate"
    | "playful"
    | "retro-y2k"
    | "nature-organic"
    | "elegant"
    | "experimental";

export const THEME_CATEGORIES: { slug: ThemeCategory; label: string }[] = [
    { slug: "minimal", label: "Minimal" },
    { slug: "bold", label: "Bold" },
    { slug: "glassmorphism", label: "Glassmorphism" },
    { slug: "neumorphism", label: "Neumorphism" },
    { slug: "brutalist", label: "Brutalist" },
    { slug: "dark-cyberpunk", label: "Dark / Cyberpunk" },
    { slug: "corporate", label: "Corporate" },
    { slug: "playful", label: "Playful" },
    { slug: "retro-y2k", label: "Retro / Y2K" },
    { slug: "nature-organic", label: "Nature / Organic" },
    { slug: "elegant", label: "Elegant / Luxury" },
    { slug: "experimental", label: "Experimental" },
];

// ─── Moods ───────────────────────────────────────────────────

export type ThemeMood =
    | "professional"
    | "clean"
    | "bold"
    | "experimental"
    | "creative"
    | "fun"
    | "elegant"
    | "dark"
    | "warm"
    | "cool"
    | "playful"
    | "serious"
    | "luxurious"
    | "technical";

export const THEME_MOODS: { slug: ThemeMood; label: string }[] = [
    { slug: "professional", label: "Professional" },
    { slug: "clean", label: "Clean" },
    { slug: "bold", label: "Bold" },
    { slug: "experimental", label: "Experimental" },
    { slug: "creative", label: "Creative" },
    { slug: "fun", label: "Fun" },
    { slug: "elegant", label: "Elegant" },
    { slug: "dark", label: "Dark" },
    { slug: "warm", label: "Warm" },
    { slug: "cool", label: "Cool" },
    { slug: "playful", label: "Playful" },
    { slug: "serious", label: "Serious" },
    { slug: "luxurious", label: "Luxurious" },
    { slug: "technical", label: "Technical" },
];

// ─── Font ────────────────────────────────────────────────────

export interface ThemeFont {
    family: string;
    weights: number[];
    source: "google" | "local" | "system";
}

// ─── Theme Metadata (from meta.yaml) ─────────────────────────

export interface ThemeMeta {
    name: string;
    slug: string;
    category: ThemeCategory;
    description: string;
    tags: string[];
    mood: ThemeMood[];
    supportsDarkMode: boolean;
    fonts: ThemeFont[];
    author: string;
    version: string;
}

// ─── Full Theme (metadata + loaded CSS) ──────────────────────

export interface Theme extends ThemeMeta {
    /** Content of tokens.css — CSS custom properties */
    tokensCSS: string;
    /** Content of identity.css — component-specific styles */
    identityCSS: string;
    /** Combined tokens + identity CSS */
    fullCSS: string;
    /** Path to the theme folder (relative to content/themes/) */
    path: string;
}

// ─── Required CSS Variables ──────────────────────────────────
// Every theme's tokens.css MUST define these variables.

export const REQUIRED_CSS_VARIABLES = [
    "--vs-primary",
    "--vs-primary-fg",
    "--vs-secondary",
    "--vs-secondary-fg",
    "--vs-bg",
    "--vs-fg",
    "--vs-muted",
    "--vs-muted-fg",
    "--vs-border",
    "--vs-ring",
    "--vs-accent",
    "--vs-accent-fg",
    "--vs-destructive",
    "--vs-destructive-fg",
    "--vs-font-sans",
    "--vs-font-mono",
    "--vs-font-heading",
    "--vs-radius",
    "--vs-shadow-sm",
    "--vs-shadow-md",
    "--vs-shadow-lg",
] as const;

// ─── Showcase Component Types ────────────────────────────────

export type ShowcaseTab =
    | "buttons"
    | "cards"
    | "forms"
    | "navigation"
    | "feedback"
    | "typography";

export const SHOWCASE_TABS: { id: ShowcaseTab; label: string }[] = [
    { id: "buttons", label: "Buttons" },
    { id: "cards", label: "Cards" },
    { id: "forms", label: "Forms" },
    { id: "navigation", label: "Navigation" },
    { id: "feedback", label: "Feedback" },
    { id: "typography", label: "Typography" },
];
