# Sagar Gupta — Portfolio

Personal portfolio website showcasing my work as a Senior Frontend Engineer. Built with React, TypeScript, and Tailwind CSS.

🔗 **Live site:** ([https://sg2705.github.io](https://sg2705.github.io/portfolio/))

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS 4
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React
- **Linting:** ESLint 9 (Airbnb + TypeScript strict) + Prettier

## Getting Started

### Prerequisites

- Node.js 20+ (recommend using [nvm](https://github.com/nvm-sh/nvm))
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/SG2705/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`.

## Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start development server            |
| `npm run build`   | Type-check and build for production |
| `npm run preview` | Preview production build locally    |
| `npm run lint`    | Run ESLint                          |
| `npm run format`  | Format code with Prettier           |

## GitHub Pages deployment

This repository is configured for branch-based GitHub Pages deployment. The
production build is generated in `docs/`, which GitHub Pages can publish from
the `master` branch.

After making site changes, run and commit the generated output:

```bash
npm run build
git add docs
git commit -m "Deploy site"
git push
```

On GitHub, open **Settings → Pages** and set **Build and deployment** to
**Deploy from a branch**, with branch **`master`** and folder **`/docs`**.

To serve the site at `https://sg2705.github.io/portfolio/`, the repository must be named exactly `SG2705.github.io/portfolio`.

## Project Structure

```
src/
├── assets/           # Images and static assets
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Page sections (Hero, About, Experience, etc.)
│   └── ui/           # Reusable UI components (50+ components)
├── data/
│   └── portfolio.ts  # All portfolio content and data
├── hooks/            # Custom React hooks
│   ├── useActiveSection.ts
│   ├── useMobile.tsx
│   ├── useScrolled.ts
│   └── useTheme.ts
├── lib/              # Utility functions
├── App.tsx           # Main app component
├── main.tsx          # Entry point
└── styles.css        # Global styles
```

## Sections

- **Hero** — Introduction and quick links
- **About** — Background, journey timeline, and values
- **Experience** — Work history with responsibilities and achievements
- **Projects** — Featured projects with technical deep-dives
- **Skills** — Technical and soft skills
- **Open Source** — GitHub repositories and contribution stats
- **Blog** — Planned and upcoming articles
- **Contact** — Get in touch

## ESLint Configuration

This project uses a comprehensive ESLint flat config with:

- **TypeScript:** recommended + type-checked + strict rules
- **Airbnb:** Style guide via FlatCompat bridge
- **React:** JSX rules, hooks, accessibility (jsx-a11y)
- **Import Management:** simple-import-sort with custom groupings
- **JSDoc:** Documentation requirements
- **FormatJS:** i18n rules for internationalization
- **Jest/Testing Library:** Test file configurations
- **Prettier:** Formatting (runs last to avoid conflicts)

### Key Plugins

- `eslint-config-airbnb` + `eslint-config-airbnb-typescript`
- `eslint-plugin-simple-import-sort`
- `eslint-plugin-import`
- `eslint-plugin-jsdoc`
- `eslint-plugin-formatjs`
- `eslint-plugin-jest` + `eslint-plugin-jest-dom` + `eslint-plugin-testing-library`

## Customization

All portfolio content lives in `src/data/portfolio.ts`. Update this file to change:

- Personal info and social links
- Work experience
- Projects and highlights
- Skills
- Open source repositories
- Blog posts

## Featured Projects

### BitLab - Digital Logic Simulator

Event-driven circuit simulation in the browser. Place gates, wire them together, and watch signals propagate in real time.

- **Tech:** TypeScript, React, Canvas, Web Workers
- **Demo:** [sg2705.github.io/BitLab](https://sg2705.github.io/BitLab)
- **GitHub:** [github.com/SG2705/BitLab](https://github.com/SG2705/BitLab)

### Atlas Design System

Accessible component library with a documented token pipeline, automated accessibility checks, and visual regression coverage.

- **Tech:** React, TypeScript, Tailwind, Radix, Storybook

## Author

**Sagar Gupta** — Senior Frontend Engineer

- 📍 Bengaluru, India
- 📧 [gupta.sagar27051997@gmail.com](mailto:gupta.sagar27051997@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/sagar-gupta27/)
- 🐙 [GitHub](https://github.com/SG2705)

## License

MIT
