# Stack360 — Official Website

> Custom Software Architecture Studio — the "Engineering Blueprint" marketing site.

The official website for **Stack360**, a custom software architecture studio that designs and
builds complex software ecosystems (ERP, CRM, AI solutions, SaaS, bespoke software, mobile/web
apps, cloud, and DevOps). The site is built to communicate senior engineering credibility and
convert qualified visitors into consultation and project inquiries.

Built with **Next.js 16** (App Router, React 19, React Compiler), **Tailwind CSS v4**, **TypeScript**,
and **Motion** for choreographed animation.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Routing](#routing)
- [Design System](#design-system)
- [Code Quality](#code-quality)
- [Deployment](#deployment)

---

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| UI Library | [React 19](https://react.dev/) + [React Compiler](https://react.dev/learn/react-compiler) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) (PostCSS) |
| Animation | [Motion](https://motion.dev/) |
| Icons | [lucide-react](https://lucide.dev/) |
| Validation | [Zod](https://zod.dev/) (typed, validated env) |
| Auth (scaffolded) | [NextAuth](https://next-auth.js.org/) |
| HTTP client | [Axios](https://axios-http.com/) |
| Notifications | [react-toastify](https://fkhadra.github.io/react-toastify/) |
| Tooling | [Biome](https://biomejs.dev/) · [Husky](https://typicode.github.io/husky/) · [lint-staged](https://github.com/lint-staged/lint-staged) |

## Features

- **App Router architecture** with route groups, dynamic routes (blog & case-study slugs), and
  server components by default.
- **SEO-first**: centralized metadata, `sitemap.ts`, `robots.ts`, JSON-LD structured data, and
  dynamic Open Graph / Twitter images.
- **Type-safe environment variables** validated at boot with Zod (fails fast on misconfiguration).
- **Choreographed, accessible motion** — every animation respects `prefers-reduced-motion`, with
  SSR-safe reveals that never ship blank content.
- **Responsive by design** — device-aware layouts (e.g. the wedge section switches from a pinned
  horizontal scroll on desktop to a natural vertical grid on mobile/tablet).
- **A documented design system** — see [`DESIGN.md`](./DESIGN.md) and [`PRODUCT.md`](./PRODUCT.md).

## Getting Started

### Prerequisites

- **Node.js** `>= 20`
- **npm** (the repo ships a `package-lock.json`)

### Installation

```bash
# 1. Clone the repository
git clone <repository-url>
cd stack360-website

# 2. Install dependencies
npm install

# 3. Configure environment variables (see below)
cp .env.example .env.local   # then edit values

# 4. Start the dev server
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Environment Variables

Environment variables are validated at startup in [`src/schema/env.ts`](./src/schema/env.ts). The
build/run will **throw** if a required variable is missing or invalid.

Create a `.env.local` file in the project root:

```bash
# Client (exposed to the browser)
NEXT_PUBLIC_NODE_ENV=development   # one of: development | production | test
```

> Additional server/client variables (auth, backend API URLs, etc.) are scaffolded but commented
> out in `src/schema/env.ts`. Uncomment and populate them as those integrations come online.

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Check code with Biome (no writes) |
| `npm run format` | Format `src` with Biome |
| `npm run check` | Lint + format + auto-fix with Biome |

## Project Structure

```
stack360-website/
├── public/                     # Static assets (images, icons, svg)
├── content-documents/          # Long-form content sources
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (pages)/            # Public routes (route group)
│   │   ├── api/               # Route handlers (health, ip)
│   │   ├── layout.tsx         # Root layout
│   │   ├── sitemap.ts         # Generated sitemap
│   │   ├── robots.ts          # robots.txt
│   │   ├── opengraph-image.tsx / twitter-image.tsx
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── pages/             # Page-specific sections
│   │   ├── shared/            # Reusable cross-page components
│   │   ├── layout/            # Header, footer, nav
│   │   ├── ui/                # Primitive UI building blocks
│   │   ├── seo/               # JSON-LD & metadata helpers
│   │   └── hoc/, core/, element/
│   ├── config/                 # App config (validated env)
│   ├── constants/              # Static content & component data
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # axios, seo, toaster integrations
│   ├── providers/              # React context providers
│   ├── schema/                 # Zod schemas (env, etc.)
│   ├── styles/                 # Tailwind globals & utilities
│   ├── helpers/, utils/, validators/, types/
│   ├── instrumentation.ts      # Observability hook
│   └── proxy.ts
├── DESIGN.md                   # Design system reference
├── PRODUCT.md                  # Product / brand brief
├── biome.json                  # Biome config
├── next.config.ts              # Next.js config (React Compiler, image domains)
└── tsconfig.json
```

## Routing

The public site lives under the `(pages)` route group. Top-level sections:

| Section | Path | Notes |
| --- | --- | --- |
| Home | `/` | Landing page |
| What We Build | `/what-we-build` | + capability sub-pages (ai-solutions, saas, erp, crm, cloud, devops, mobile-apps, web-apps, custom-software, automation) |
| Who We Help | `/who-we-help` | startups, smes, enterprises, industries |
| Who We Are | `/who-we-are` | history, culture, how-we-work |
| Our Work | `/our-work` | case-studies, featured-projects, client-success-stories, blog, news, faqs, learning-sessions |
| Work With Us | `/work-with-us` | hire, careers, software-partner |
| Contact | `/contact` | |
| Legal | `/privacy`, `/terms` | |

Dynamic routes: `/our-work/blog/[slug]` and `/our-work/case-studies/[slug]`.

## Design System

The visual language is documented in [`DESIGN.md`](./DESIGN.md) — the **"Engineering Blueprint"**:
a clean near-paper light field carrying a single load-bearing **Signal Orange** (`#e77725`)
accent, dropping into dark **"instrumentation"** sections for data-heavy proof. Key rules:

- **The One Orange Rule** — Signal Orange is the only brand accent, kept under ~10% of any light screen.
- **The Two-Field Rule** — the site lives in exactly two worlds: light (marketing) and dark (proof/telemetry).
- **Geist Sans** for voice, **Geist Mono** strictly for data/labels/code.
- Flat by default; shadow only signals genuine elevation.

## Code Quality

- **Biome** handles linting and formatting (`biome.json`). Run `npm run check` before committing.
- **Husky** + **lint-staged** run Biome automatically on staged `*.{ts,tsx,json}` files via the
  pre-commit hook, keeping the tree consistently formatted.
- **TypeScript** strict typing throughout; environment access is fully typed and validated.

## Deployment

```bash
npm run build   # produce the production build
npm run start   # run it locally to verify
```

Ensure the required environment variables are configured in your hosting provider's dashboard.
Remote image domains are allow-listed in [`next.config.ts`](./next.config.ts).

---

<p align="center"><sub>© Stack360 — Custom Software Architecture Studio. All rights reserved.</sub></p>
