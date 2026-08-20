# TOC Construction — Marketing Page

A React implementation of the TOC Construction landing page, built section by section:
About/Our Story, Featured Projects, Careers, CTA banner, Client Testimonials, and Footer.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL. `npm run build` produces a production build in `dist/`.

## Project structure

```
src/
  components/
    ui/
      Button.jsx        shared button (primary / outline variants)
      Button.css
      icons.jsx          inline SVG icon set used by the footer
    AboutStory.jsx / .css
    FeaturedProjects.jsx / .css
    Careers.jsx / .css
    CTABanner.jsx / .css
    Testimonials.jsx / .css
    Footer.jsx / .css
  data/
    content.js           all copy, image URLs, and list data for every section
  styles/
    tokens.css            design tokens (colors, fonts) + shared layout/type primitives
  App.jsx                 composes the six sections in order
  index.js                React entry point
public/
  index.html               HTML shell, loads Inter + Manrope from Google Fonts
```

Each section is a self-contained component with its own colocated stylesheet, importing
only the copy/data it needs from `data/content.js`. To edit page copy, change
`src/data/content.js` — no JSX edits required. To reuse a section elsewhere, import it
directly, e.g. `import Testimonials from "./components/Testimonials"`.

## Responsive strategy: clamp(), not breakpoints

Per the project requirement, there are **no Tailwind breakpoint prefixes** (`sm:`, `md:`,
`lg:`) anywhere in this codebase. Instead:

- **Type, spacing, icon/avatar sizes** all use `clamp(min, preferred, max)` so they scale
  continuously with the viewport instead of jumping at fixed widths. These live in
  `styles/tokens.css` (shared primitives like `.h2-display`, `.body-text`, `.section-pad`)
  and in each component's own CSS file for local values.
- **Column/row reflow** (projects grid, testimonials grid, footer columns) uses
  `grid-template-columns: repeat(auto-fit, minmax(min(100%, Npx), 1fr))`, which is the
  CSS-native fluid equivalent of a breakpoint-driven column count — it adapts to any
  container width without media queries.
- **Two-column sections** (About, Careers, CTA) use `flex-wrap` with
  `flex: 1 1 clamp(min, preferred, max)` on each column, so they wrap to a single column
  once the flex-basis can no longer fit, again without a fixed breakpoint.

## Design tokens

Colors, fonts, and shared type/spacing scales are centralized in `src/styles/tokens.css`
as CSS custom properties (`--color-*`, `--font-*`) so the palette can be updated in one
place.

## Notes

- Images are placeholder stock photos from Unsplash/randomuser.me — swap the URLs in
  `src/data/content.js` with real project photos, team photos, and client headshots.
- `Button` in `components/ui/Button.jsx` is the single source of truth for button styling;
  both CTA styles (`primary`, `outline`) are variants of the same component.
