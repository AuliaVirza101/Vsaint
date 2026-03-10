<div align="center">
  <img src="https://raw.githubusercontent.com/AuliaVirza101/Vsaint/main/public/favicon.ico" width="80" height="80" alt="Vsaint Logo" />
  <br/>
  
  <h1>Vsaint ⚡️</h1>
  
  <p>
    <strong>Find a design system you love. Ship it today.</strong><br/>
    Interactive visual reference with hundreds of CSS design systems featuring real identity.
  </p>

  <p>
    <a href="https://github.com/AuliaVirza101/Vsaint"><img src="https://img.shields.io/badge/Themes-100-8B5CF6?style=for-the-badge&logo=css3&logoColor=white" alt="100 Themes"/></a>
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 14"/></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind-UI_Shell-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/></a>
    <a href="https://github.com/AuliaVirza101/Vsaint/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License"/></a>
  </p>
</div>

---

## 🎨 The Vault: 100 Production-Ready Themes

Vsaint isn't just a color palette generator. It focuses on **real design identities** — border radius, shadows, typography hierarchies, layout density, and interactive states. 

Filter through exactly what you need:

| Category | Description | Count | 
| :--- | :--- | :---: |
| 🔲 **Minimal & Clean** | High contrast, Swiss typography, white space | \`10\` |
| 🏗️ **Brutalist** | Hard shadows, zero border-radius, pop colors | \`10\` |
| 🧊 **Glassmorphism** | Blur effects, translucent backgrounds, ambient | \`10\` |
| 🌃 **Dark & Cyberpunk** | Neons, pure blacks, sci-fi inspiration | \`10\` |
| 📼 **Retro & Y2K** | Vaporwave, 90s web, pixel art, nostalgia | \`10\` |
| ☁️ **Neumorphism** | Soft UI, extruded light/shadow styling | \`10\` |
| 🍷 **Elegant & Luxury** | Minimal serifs, gold/silver accents, high-end | \`10\` |
| 🎈 **Playful & Fun** | Bouncy shapes, primary colors, comic styles | \`10\` |
| 🏢 **Corporate** | Professional, high-trust, data-dense | \`10\` |
| 🧪 **Experimental** | Terminal UI, blueprints, ASCII art | \`10\` |

---

## ✨ Why Vsaint?

<details open>
<summary><b>1. Interactive Live Previews</b></summary>
See every theme applied to real UI components (Buttons, Cards, Forms, Navbars, etc.) immediately. No guesswork.
</details>

<details open>
<summary><b>2. 1-Click Copy & Paste</b></summary>
Instantly copy the exact CSS Variables (\`tokens.css\`) and Component CSS (\`identity.css\`). Drop them directly into your app.
</details>

<details open>
<summary><b>3. Tailwind CSS Integration</b></summary>
Out of the box, Vsaint generates the \`tailwind.config.ts\` extensions so you can use the themes harmoniously with Tailwind utility classes.
</details>

<details open>
<summary><b>4. Native Dark Mode</b></summary>
Every theme ships with beautiful, carefully considered dark mode inversions — automatically handled by standard \`data-theme\` and \`prefers-color-scheme\`.
</details>

<br/>

## 🚀 Getting Started Locally

Getting the gallery running on your local machine is extremely simple:

\`\`\`bash
# 1. Clone the repository
git clone https://github.com/AuliaVirza101/Vsaint.git

# 2. Enter the directory
cd Vsaint

# 3. Install dependencies
pnpm install

# 4. Start development server
pnpm dev
\`\`\`

🎯 Open [http://localhost:3000](http://localhost:3000) and start exploring.

---

## 📁 Project Architecture

The architecture is built for speed, allowing 100+ themes to be hot-loaded at build time into statically generated pages.

\`\`\`text
Vsaint/
├── content/
│   └── themes/              👈 All 100 themes live here (meta.yaml, tokens.css, identity.css)
├── src/
│   ├── app/                 👈 Next.js App Router root (Pages, Layouts)
│   ├── components/          👈 React components (Gallery grid, Live Previews, Copiers)
│   ├── lib/                 👈 Core utilities (Theme parsers, CSS/Tailwind generators)
│   └── types/               👈 Exact TypeScript definitions
\`\`\`

---

<div align="center">
  <p>Built with 💜 by <b>vsaint</b></p>
</div>
