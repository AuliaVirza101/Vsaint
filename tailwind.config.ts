import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            colors: {
                // Vsaint site UI colors (NOT theme colors)
                vsaint: {
                    50: "#f0f1fe",
                    100: "#dde0fc",
                    200: "#c2c6fa",
                    300: "#9a9ef5",
                    400: "#7471ee",
                    500: "#5b4fe5",
                    600: "#4d38d7",
                    700: "#412dbe",
                    800: "#36279a",
                    900: "#2f257a",
                    950: "#1c1649",
                },
            },
        },
    },
    plugins: [],
};

export default config;
