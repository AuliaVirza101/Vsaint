# Vsaint

<div align="center">
  <h3>Find a design system you love. Ship it today.</h3>
  <p>Interactive visual reference with hundreds of CSS design systems featuring real identity — not just color swaps.</p>
</div>

---

## 🎨 The Vault: 100 Themes

Vsaint is a massive open-source library of highly opinionated, production-ready design systems. We've categorized them to help you find the exact mood you need:

- **Minimal & Clean** (10 themes)
- **Brutalist & Neo-Brutal** (10 themes)
- **Glassmorphism & Fluent** (10 themes)
- **Dark & Cyberpunk** (10 themes)
- **Retro & Y2K** (10 themes)
- **Neumorphism & Soft UI** (10 themes)
- **Elegant & Luxury** (10 themes)
- **Playful & Fun** (10 themes)
- **Corporate & Enterprise** (10 themes)
- **Experimental & Conceptual** (10 themes)

## ✨ Features

- **Live Previews**: See every theme applied to real UI components (Buttons, Cards, Forms, Navbars, etc.)
- **One-Click Copy**: Instantly copy the exact CSS Variables and Component CSS.
- **Tailwind Integration**: Automatically copy the extended `tailwind.config.ts` mapping for seamless implementation.
- **Search & Filter**: Find themes instantly by category, metadata, mood, or tags.
- **Dark Mode Native**: Every theme ships with beautiful, carefully considered dark mode inversions.

## 🛠 Tech Stack

Vsaint's application layer is built for incredible speed and developer experience:

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (for the site shell only) 
- **Themes**: Pure vanilla CSS (CSS Variables)
- **Code Highlighting**: Shiki

*Note: The actual themes themselves are pure CSS, making them framework-agnostic. You can drop them directly into React, Vue, Svelte, or vanilla HTML.*

## 🚀 Getting Started Locally

Clone the repository and run the development server:

```bash
git clone https://github.com/AuliaVirza101/Vsaint.git
cd Vsaint

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure 

\`\`\`
├── content/
│   └── themes/              # All 100 themes (meta.yaml, tokens.css, identity.css)
├── src/
│   ├── app/                 # Next.js App Router root
│   ├── components/          # React components (Gallery, Preview, Copy panels)
│   ├── lib/                 # Core utilities (Theme loaders, CSS/Tailwind generators)
│   └── types/               # TypeScript definitions
\`\`\`

---
*Built with passion by vsaint.*
