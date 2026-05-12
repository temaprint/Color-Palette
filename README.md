# ColorPalette — [colorpalette.temaprint.com](https://colorpalette.temaprint.com)

A color palette explorer built with Astro and React. Browse 200+ colors, curated palettes, and articles about color theory, trends, and design.

![Color Palettes Preview](public/colorpalette.png)

## Features

- **200+ Colors** — handpicked with detailed info, hex/RGB values, and usage examples
- **60+ Palettes** — auto-generated tag-based collections
- **28 Articles** — color theory, trends (Pantone 2026), psychology, and design guides
- **Smart Filtering** — filter colors by tags and categories
- **Color Combinations** — suggested pairings and related colors for every shade
- **Dark Mode** — toggle with sun/moon animation, persists in localStorage
- **Glassmorphism UI** — backdrop-blur navbar and cards, extra-large border radius
- **Animations** — staggered fade-in, slide-up, scale effects
- **Responsive** — mobile-first, works on all screen sizes
- **344 Static Pages** — pre-rendered for instant loading

## Tech Stack

- **Framework**: [Astro 5](https://astro.build) + [React 18](https://reactjs.org)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com) with custom design tokens
- **Icons**: [Lucide React](https://lucide.dev)
- **Content**: Markdown-based with gray-matter frontmatter
- **Typography**: [Inter](https://rsms.me/inter/) + [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin)

## Project Structure

```
src/
├── components/       # React components (ColorFilters, ThemeToggle)
├── content/
│   ├── articles/     # 28 markdown articles
│   └── colors/       # 200+ color markdown files
├── layouts/          # Layout, ColorLayout, PaletteLayout
├── lib/              # Data loaders (colors, palettes, articles)
├── pages/
│   ├── index.astro          # Homepage
│   ├── colors/              # Color listing + detail pages
│   ├── palettes/            # Palette listing + detail pages
│   └── articles/            # Article listing + detail pages
└── index.css         # Global styles (glassmorphism, dark mode, animations)
```

## Design System

**2026 trends**: glassmorphism, bold typography, dark mode, calm UI, vibrant gradients.

| Token | Light | Dark |
|-------|-------|------|
| Background | `#fafafa` | `#0a0a0f` |
| Card | `#ffffff` (glass) | `#141420` (glass) |
| Primary | `#4f46e5` (indigo) | same |
| Border radius | `1.5rem` (3xl) | same |
| Shadows | `shadow-glass` | `shadow-glass-dark` |


## Getting Started

```bash
git clone https://github.com/temaprint/colorpalette
cd colorpalette
npm install
npm run dev        # dev server at localhost:4321
npm run build      # static build to dist/
```

## Adding New Colors

Create `src/content/colors/my-color.md`:

```markdown
---
name: "Color Name"
slug: "color-slug"
hexCode: "#HEXCODE"
tags: ["tag1", "tag2"]
---

# Color Name

Description...

## Psychology
What the color represents...

## Usage
Where to use this color...
```

## Adding New Articles

Create `src/content/articles/my-article.md`:

```markdown
---
title: "Article Title"
slug: "article-slug"
date: "YYYY-MM-DD"
hexCode: "#HEXCODE"
description: "Brief description"
featured: true
---

Article content in markdown...
```

## License

MIT

## Acknowledgments

- Font: [Inter](https://rsms.me/inter/) by Rasmus Andersson
- Icons: [Lucide](https://lucide.dev/)
- Pantone Color of the Year references for educational purposes
