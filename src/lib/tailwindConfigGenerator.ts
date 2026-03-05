import type { Theme } from "@/types/theme";

// ─── Generate Tailwind Config Extension ──────────────────────
// Produces a `theme.extend` object users can paste into tailwind.config.js

export function generateTailwindConfig(theme: Theme): string {
    const vars = extractVariables(theme.tokensCSS);

    const config: Record<string, Record<string, string>> = {
        colors: {},
        fontFamily: {},
        borderRadius: {},
        boxShadow: {},
    };

    // Map CSS variables to Tailwind config
    for (const [name, value] of Object.entries(vars)) {
        if (name === "--vs-font-sans") {
            config.fontFamily.sans = value;
        } else if (name === "--vs-font-mono") {
            config.fontFamily.mono = value;
        } else if (name === "--vs-font-heading") {
            config.fontFamily.heading = value;
        } else if (name === "--vs-radius") {
            config.borderRadius.DEFAULT = value;
        } else if (name === "--vs-shadow-sm") {
            config.boxShadow.sm = value;
        } else if (name === "--vs-shadow-md") {
            config.boxShadow.md = value;
        } else if (name === "--vs-shadow-lg") {
            config.boxShadow.lg = value;
        } else if (name.startsWith("--vs-")) {
            // Color variables
            const colorName = name
                .replace("--vs-", "")
                .replace(/-fg$/, "-foreground");
            config.colors[colorName] = value;
        }
    }

    // Clean up empty sections
    for (const key of Object.keys(config)) {
        if (Object.keys(config[key]).length === 0) {
            delete config[key];
        }
    }

    const header = `// Vsaint Theme: ${theme.name}
// Paste this into your tailwind.config.js → theme.extend\n`;

    const configStr = JSON.stringify(config, null, 2)
        // Remove quotes around simple values (but keep around values with spaces/commas)
        .replace(/"([^"]+)":/g, "$1:")
        .replace(/: "([^"]*[,\s][^"]*)"/g, ': "$1"')
        .replace(/: "([^"]+)"/g, ": '$1'");

    return `${header}\nmodule.exports = {\n  theme: {\n    extend: ${indentBlock(configStr, 6)}\n  }\n}`;
}

// ─── Helper: extract CSS variables from tokens.css ───────────

function extractVariables(css: string): Record<string, string> {
    const vars: Record<string, string> = {};
    const regex = /(--vs-[\w-]+)\s*:\s*([^;]+);/g;
    let match;

    while ((match = regex.exec(css)) !== null) {
        vars[match[1]] = match[2].trim();
    }

    return vars;
}

// ─── Helper: indent a block of text ──────────────────────────

function indentBlock(text: string, spaces: number): string {
    const indent = " ".repeat(spaces);
    return text
        .split("\n")
        .map((line, i) => (i === 0 ? line : indent + line))
        .join("\n");
}
