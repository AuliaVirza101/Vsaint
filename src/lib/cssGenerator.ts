import type { Theme } from "@/types/theme";

// ─── Generate CSS Variables snippet ──────────────────────────
// This is what users copy when they want "quick" token-level theming.

export function generateCSSVariablesSnippet(theme: Theme): string {
    return `:root {\n${extractVariablesFromTokens(theme.tokensCSS)}\n}`;
}

// ─── Generate full theme CSS ─────────────────────────────────
// This is what users copy when they want the complete design identity.

export function generateFullThemeCSS(theme: Theme): string {
    const header = `/* ═══════════════════════════════════════════
 * Vsaint Theme: ${theme.name}
 * Category: ${theme.category}
 * Description: ${theme.description}
 * 
 * Copy this CSS into your project to use
 * the full ${theme.name} design identity.
 * ═══════════════════════════════════════════ */\n\n`;

    return header + theme.fullCSS;
}

// ─── Generate standalone component CSS ───────────────────────
// Extracts only the CSS relevant to a specific component type.

export function generateComponentCSS(
    theme: Theme,
    componentPrefix: string
): string {
    const lines = theme.fullCSS.split("\n");
    const result: string[] = [];
    let braceDepth = 0;
    let capturing = false;
    let currentBlock: string[] = [];

    for (const line of lines) {
        if (
            !capturing &&
            line.includes(`.vs-${componentPrefix}`) &&
            braceDepth === 0
        ) {
            capturing = true;
            currentBlock = [line];
            braceDepth += (line.match(/{/g) || []).length;
            braceDepth -= (line.match(/}/g) || []).length;
            continue;
        }

        if (capturing) {
            currentBlock.push(line);
            braceDepth += (line.match(/{/g) || []).length;
            braceDepth -= (line.match(/}/g) || []).length;

            if (braceDepth <= 0) {
                result.push(currentBlock.join("\n"));
                currentBlock = [];
                capturing = false;
                braceDepth = 0;
            }
        }
    }

    if (result.length === 0) {
        return `/* No component-specific styles found for .vs-${componentPrefix} */`;
    }

    return result.join("\n\n");
}

// ─── Helper: extract CSS variables from tokens.css content ───

function extractVariablesFromTokens(tokensCSS: string): string {
    const varRegex = /(--vs-[\w-]+)\s*:\s*([^;]+);/g;
    const variables: string[] = [];
    let match;

    while ((match = varRegex.exec(tokensCSS)) !== null) {
        variables.push(`  ${match[1]}: ${match[2].trim()};`);
    }

    return variables.join("\n");
}
