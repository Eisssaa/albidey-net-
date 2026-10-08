# AlbideyNet

Animated dark-theme landing page for **AlbideyNet**, a high-speed internet provider based in N'Djamena, Chad.

Built with React, TypeScript, Tailwind CSS, and Framer Motion. Features glowing fiber-optic cable visuals with detailed RJ45 connectors, an animated Earth globe centered on Africa, and staggered scroll/entrance animations.

## Tech stack

- **React 18** + **TypeScript**
- **Vite** (build tooling / dev server)
- **Tailwind CSS** (styling)
- **Framer Motion** (animations)
- **lucide-react** (icons)

## Getting started

Requires [Node.js](https://nodejs.org/) (v18 or newer).

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev

# Build for production (output in dist/)
npm run build

# Preview the production build locally
npm run preview
```

## Project structure

```
albidey-net/
├── index.html              # HTML entry point
├── src/
│   ├── index.tsx           # App entry / React root
│   ├── App.tsx             # Root layout
│   ├── index.css           # Global styles + Tailwind + font imports
│   └── components/
│       ├── Navbar.tsx       # Top navigation with animated atom logo
│       ├── Hero.tsx         # Hero section (left copy + right visuals)
│       ├── FiberCables.tsx  # Animated SVG fiber cables + RJ45 connectors
│       ├── EarthGlobe.tsx   # Floating Earth globe centered on Africa
│       └── FeatureCards.tsx # Connectivity / Support / Enterprise cards
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## Notes

This site originated as a Magic Patterns design and was packaged into a standard
Vite project. The components are a starting point — adapt copy, links, and brand
assets as the project evolves.
