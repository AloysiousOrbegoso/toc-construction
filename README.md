# TOC Construction

This repo has two parts: `frontend/` (React + Vite) and `backend/` (Laravel API).

## Backend setup

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
# Create the database named in .env (DB_DATABASE, defaults to toc_construction), then:
php artisan migrate --seed
php artisan storage:link
php artisan serve
```

This serves the API at `http://localhost:8000`. It provides:

- `GET /api/projects` (optional `?category=` filter), `GET /api/projects/{slug}` — project portfolio, seeded from `database/seeders/ProjectSeeder.php`
- `GET /api/jobs` — open job listings, seeded from `database/seeders/JobListingSeeder.php`
- `POST /api/quote-requests` — the "Get a Quote" form (multipart, supports file attachments)
- `POST /api/job-applications` — the Careers application form (multipart, requires a resume file)

Submissions are stored in the database only (no email yet); a future admin UI is expected to read them directly. Uploaded files are served from `/storage/...` via the `public` disk.

## Frontend setup

```bash
cd frontend
npm install
cp .env.example .env   # points VITE_API_URL at the backend above
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

## Responsive strategy: fluid type scale + clamp()

Text sizing is centralised in a fluid type scale declared in `frontend/src/index.css`
(the `@theme` block). Every text element uses one of these Tailwind utilities instead of
an arbitrary `text-[..px]` / `text-[clamp(..)]` value or a `sm:text-* lg:text-*` pair:

| Utility        | Phone -> Desktop | Role                                          |
| -------------- | ---------------- | --------------------------------------------- |
| `text-display` | ~30 -> 60px      | hero titles (capped at 8vw on phones)         |
| `text-h1`      | 28 -> 40px       | section titles                                |
| `text-h2`      | 22 -> 28px       | sub-section titles, hero subtitles            |
| `text-h3`      | 18 -> 21px       | card / item titles                            |
| `text-lead`    | 16 -> 18px       | intro paragraphs, eyebrows, prominent UI text |
| `text-body`    | 16px             | paragraphs, inputs, buttons                   |
| `text-small`   | 14px             | meta, nav links, footer links                 |
| `text-caption` | 12px             | labels, small eyebrows, legal (minimum size)  |

Each utility also sets a paired line-height; a `leading-*` utility still overrides it.
Sizes scale continuously with the viewport via `clamp()`, so no breakpoint prefixes are
needed for text. To retune the whole site, change the token values in `index.css`.

Layout follows the same idea where it can:

- **Side padding** on every section is `px-6 md:px-12 lg:px-22`, matching the Navbar.
- **Column reflow** (About story / values / leadership, footer columns) uses
  `grid-template-columns: repeat(auto-fit, minmax(min(100%, Npx), 1fr))` so it adapts to
  any container width without media queries. Form grids use `grid-cols-1 sm:grid-cols-2`.
- **Card padding and gaps** use `clamp()` where a fixed value would not fit a phone.

## Design tokens

Colors, fonts, and the type scale are centralized in `frontend/src/index.css` as Tailwind
theme variables (`--color-*`, `--font-*`, `--text-*`). The body font is Inter
(`--font-body`); `font-sans` is aliased to it so nothing falls back to a system face.

## Notes

- Images are placeholder stock photos from Unsplash/randomuser.me — swap the URLs in
  `src/data/content.js` with real project photos, team photos, and client headshots.
- `Button` in `components/ui/Button.jsx` is the single source of truth for button styling;
  both CTA styles (`primary`, `outline`) are variants of the same component.
