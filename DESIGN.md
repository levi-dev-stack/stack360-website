---
name: Stack360
description: Engineering-blueprint marketing site for a custom software architecture studio.
colors:
  primary: "#e77725"
  primary-light: "#ef9e60"
  primary-dark: "#c9651a"
  primary-tint: "#efc59c"
  secondary: "#1d3fab"
  secondary-light: "#508ff3"
  success: "#82cd25"
  danger: "#a22727"
  warning: "#ef9e60"
  neutral-50: "#ffffff"
  neutral-100: "#f6f0ed"
  neutral-200: "#ebebeb"
  neutral-300: "#d4d4d4"
  neutral-400: "#9f9f9f"
  neutral-500: "#737373"
  neutral-600: "#5d5d5d"
  neutral-700: "#4b5563"
  neutral-800: "#2c2c2e"
  neutral-900: "#1a1a1a"
  neutral-950: "#171717"
  neutral-black: "#111111"
  surface-dark: "#171717"
  surface-card-dark: "#2c2c2e"
typography:
  display:
    fontFamily: "Geist, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3rem)"
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.15em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  "2xl": "3rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-50}"
    rounded: "{rounded.sm}"
    padding: "1rem 2rem"
  button-primary-hover:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.neutral-50}"
    rounded: "{rounded.sm}"
    padding: "1rem 2rem"
  button-secondary:
    backgroundColor: "{colors.neutral-50}"
    textColor: "{colors.neutral-800}"
    rounded: "{rounded.sm}"
    padding: "1rem 2rem"
  button-accent:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.neutral-50}"
    rounded: "{rounded.xl}"
    padding: "1rem 1.5rem"
  nav-cta:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-50}"
    rounded: "{rounded.sm}"
    padding: "0.5rem 1rem"
  card:
    backgroundColor: "{colors.neutral-100}"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.lg}"
    padding: "1rem"
---

# Design System: Stack360

## 1. Overview

**Creative North Star: "The Engineering Blueprint"**

Stack360 is a custom software architecture studio, and the site should read like a spec sheet
drawn by someone who ships. The dominant surface is a clean, near-paper light field
(`#ffffff` / `#f6f0ed`) where structure, data, and typography carry the weight — punctuated by
one warm, load-bearing orange (`#e77725`) that behaves like a highlighter on a technical drawing.
Depth is engineered, not decorative: most surfaces sit flat, and elevation appears only where an
element is genuinely lifted (floating spec cards) or where the narrative drops into a dark
"instrumentation" section (`#171717`) for case-study telemetry.

The register is **brand** — this page IS the product's first proof of competence. Evidence beats
adjectives: real charts, real metrics, precise system copy. The system explicitly rejects the
generic digital-agency template (stock hero + identical icon-feature cards + logo soup), the
overhyped AI-startup landing look, and the 2026 AI-slop grammar (eyebrow kickers over every
section, `01/02/03` markers, decorative gradients and glass). It also rejects the cold, sterile
enterprise-vendor page: warmth here comes from the orange accent and confident typography, never
from a beige body wash.

**Key Characteristics:**
- Light, near-paper base with a single committed warm-orange accent.
- Dark instrumentation sections for data-heavy proof (case studies, telemetry).
- Geist Sans for voice, Geist Mono for data/labels — the sans/mono contrast is the type system.
- Flat by default; shadow only signals genuine lift.
- Tight radii (4–16px) and choreographed, intentional motion.

## 2. Colors

A restrained light neutral field carrying one committed warm accent, with a cool blue as the
data/second voice and a near-black used for dark "instrument" sections.

### Primary
- **Signal Orange** (`#e77725`): The single load-bearing accent. Primary CTAs, active nav state,
  hero highlight, chart lines, links on hover. This is the brand's voice color.
- **Ember** (`#c9651a`): The pressed/hover state for Signal Orange (primary button hover).
- **Amber Wash** (`#ef9e60`) / **Sand Tint** (`#efc59c`): Soft supporting tints for glows,
  icon chips, and low-emphasis stats. Never used for body text.

### Secondary
- **Blueprint Blue** (`#1d3fab`): The data/second voice — the "Explore more" CTA on dark, one of
  the two case-study chart accents, ambient glows. Signals engineering rather than marketing.
- **Sky** (`#508ff3`): Blueprint Blue's hover/soft line variant.

### Tertiary
- **Circuit Green** (`#82cd25`): Success and positive-delta only — traffic-up chips, `▲ 24.8%`
  telemetry. Reserved; never decorative.

### Neutral
- **Paper** (`#ffffff`) / **Warm Paper** (`#f6f0ed`): Body and section backgrounds; the light field.
- **Hairline** (`#ebebeb`) / **Rule** (`#d4d4d4`): Borders, dividers, gridlines.
- **Muted** (`#9f9f9f`) / **Quiet** (`#737373`): Secondary/label text — Quiet for body-adjacent copy,
  Muted for labels on light and any text on dark.
- **Ink** (`#1a1a1a`) / **Instrument Black** (`#171717`) / **True Black** (`#111111`): Headings,
  primary text, and the dark instrumentation section backgrounds.
- **Panel** (`#2c2c2e`): Raised card surface within dark sections.

### Named Rules
**The One Orange Rule.** Signal Orange is the only accent that carries brand voice, and it stays
under ~10% of any light screen. Its scarcity is what makes it read as "important," not "loud."
Blueprint Blue is the *data* voice, not a second brand color — use it for engineering/telemetry
context, not to double the accent budget.

**The Two-Field Rule.** The site lives in exactly two worlds: the light paper field (marketing
voice) and the dark instrument field (proof/telemetry). Don't invent a third mid-gray surface.

## 3. Typography

**Display/Body Font:** Geist (with system-ui, -apple-system, sans-serif)
**Label/Mono Font:** Geist Mono (with ui-monospace, monospace)

**Character:** One geometric sans in a wide weight range (400→900) does the talking; a monospace
handles anything that reads as *data* — labels, axis ticks, code, telemetry tooltips. The
sans/mono split is the system's core contrast; it's what makes the page feel engineered rather
than marketed.

### Hierarchy
- **Display** (700, `clamp(2.25rem, 5vw, 4rem)`, 1.25, `-0.02em`): Hero headline only.
- **Headline** (900, `clamp(2.25rem, 4vw, 3rem)`, 1.05): Section titles, especially on dark
  ("Real case studies with real results.").
- **Title** (700, 1.125rem, 1.375): Card titles, sub-heads.
- **Body** (400, 1rem, 1.625): Paragraph copy; cap measure at 65–75ch.
- **Label** (700, 0.75rem, `0.15em`, Geist Mono, often uppercase): Tags, axis ticks, eyebrow
  metadata, telemetry — the mono "data" voice.

### Named Rules
**The Mono-Means-Data Rule.** Geist Mono is reserved for things that are literally data or code
(labels, chart axes, tooltips, code snippets). It is never used as body copy or as generic
"techy" decoration — mono-as-costume is prohibited.

## 4. Elevation

Flat by default. The light field uses 1px borders (`#ebebeb`/`#d4d4d4`) and tonal steps for
separation, not shadows. Elevation is meaningful, not ambient: a shadow means an element is
genuinely lifted off the page (floating hero spec cards) or is a card inside the dark section.
The heaviest token, `shadow-card`, is a deep, wide diffusion used specifically for those
floating/dark contexts.

### Shadow Vocabulary
- **Hairline lift** (`box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)`): Rating pill, resting cards,
  nav CTA. Barely-there separation on the light field.
- **Standing** (`box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1)`): Primary/secondary buttons and
  active dark-section CTAs.
- **Floating** (`box-shadow: 0 4px 24px rgb(0 0 0 / 0.25)`): Reserved for genuinely floating
  elements (hero decor cards, dropdown panel, dark-section tooltips) and card hover.

### Named Rules
**The Earned-Shadow Rule.** A shadow must correspond to real lift. Surfaces are flat at rest;
`shadow-card` is not a decoration you sprinkle on every card — it's the signal that something is
floating above the plane.

## 5. Components

### Buttons
- **Shape:** Sharp, engineered corners — 4px radius (`rounded-sm`) is the default for rectangular
  buttons; the dark-section accent CTA uses a full pill for contrast.
- **Primary:** Signal Orange (`#e77725`) fill, Paper text, `1rem 2rem` padding, `Standing` shadow.
- **Hover / Focus:** Fill deepens to Ember (`#c9651a`); a subtle `scale(1.03)` press-in on tap
  (`scale(0.97)`). Transitions are color + transform only.
- **Secondary:** Paper fill, `Rule` (`#d4d4d4`) 1px border, Ink-800 text; hover darkens border to
  `#9f9f9f` and text to Ink-900.
- **Accent (dark sections):** Blueprint Blue pill, Paper text, with an inset circular arrow chip
  that slides right on hover.

### Cards
- **Corner Style:** 12px (`rounded-lg`) for content cards; 8px (`rounded-md`) for inset plot areas.
- **Background:** Warm Paper (`#f6f0ed`) on the light field; Panel/near-black inside dark sections.
- **Shadow Strategy:** Flat at rest with a 1px Hairline border; lifts to `Floating` (`shadow-card`)
  on hover. See Elevation.
- **Internal Padding:** `md` (1rem), scaling up for feature blocks.

### Navigation
- **Style:** Full-width header, Paper background, 1px bottom border, `z-50`. Brand mark
  "Stack**360**" with the 360 in Signal Orange.
- **Type:** Geist Sans, 0.875rem, semibold, `neutral-700` at rest.
- **States:** Hover → Signal Orange text. Open dropdown → orange top-border tab indicator, orange
  bold label, rotated caret. Dropdown is a fixed, centered 70vw mega-panel with a 2-column link
  grid plus an image-preview pane.
- **CTA:** "Contact Us" — Signal Orange fill, `rounded-sm`, `0.5rem 1rem`, `active:scale(0.98)`.

### Signature: Telemetry Chart Card
The defining component. A bordered plot area (`aspect-16/10`) over Paper with dashed grid, an
animated area-fill gradient (accent → transparent), two `pathLength`-drawn lines (bold traffic,
soft domain-rating), a marker dot, and a mono tooltip on a near-black chip. Deterministic series
(no `Math.random`) so SSR and client render identically. This is how the site *shows* engineering
instead of claiming it.

### Signature: Floating Spec Cards
Hero decor — code snippet, phone mock, an "AI Performance" mini line-chart, an accuracy stat.
Each uses `shadow-card` + a slow infinite `y` float (5.5–7s). `pointer-events-none`, hidden below
`lg`. Pure atmosphere that reinforces the blueprint metaphor.

## 6. Do's and Don'ts

### Do:
- **Do** keep Signal Orange (`#e77725`) as the single brand accent, under ~10% of any light screen
  (The One Orange Rule).
- **Do** use Geist Mono strictly for data/labels/code, and Geist Sans for everything spoken.
- **Do** keep the light field flat with 1px borders; reserve `shadow-card` for genuinely floating
  or dark-section elements (The Earned-Shadow Rule).
- **Do** prove claims with real charts, metrics, and precise system copy — evidence over adjectives.
- **Do** drop into the dark instrument field (`#171717`) for data-heavy proof, and keep marketing
  voice on the light field (The Two-Field Rule).
- **Do** keep display headings ≤4rem, letter-spacing ≥ -0.04em, and body measure at 65–75ch.

### Don't:
- **Don't** ship the generic digital-agency template: stock hero + identical icon-feature card
  grids + logo soup. (PRODUCT.md anti-reference.)
- **Don't** lean on AI-slop grammar: tiny uppercase tracked eyebrows over every section,
  `01/02/03` numbered section markers, or the hero-metric template. (The homepage's single
  "Digital Excellence" eyebrow is the ceiling — don't repeat it section by section.)
- **Don't** use gradient `background-clip: text` for emphasis; emphasize with weight, size, or the
  solid Signal Orange instead. (The rotating hero highlight is a known exception to revisit.)
- **Don't** use glassmorphism decoratively — backdrop-blur is only for the one floating hero card.
- **Don't** set body text in Muted `#9f9f9f`; it fails contrast on the light field. Use Quiet
  `#737373` or darker for anything readable.
- **Don't** default the body background to beige/cream "warmth"; warmth comes from the orange
  accent and typography, not the surface. (Avoid the cold-sterile-enterprise look too.)
- **Don't** add a third mid-gray surface world or a second brand accent color.
