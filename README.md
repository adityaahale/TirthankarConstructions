# Tirthankars Contractor

Static website for **Tirthankars Contractor** (तीर्थंकर्स कॉन्ट्रैक्टर), a general
contracting business based in Warje, Pune — general construction, home
renovation, flooring/tile work, plumbing fixtures, painting and structural
repairs.

## Tech

Plain HTML/CSS/JS, no build step or dependencies:

```
index.html      Single-page site: hero, services, gallery, about, contact
css/styles.css  All styling
js/main.js      Mobile nav toggle + contact form UI handling
images/         Site graphics (see "Placeholder images" below)
```

## Run locally

Just open `index.html` in a browser, or serve the folder so relative paths
and the mobile viewport behave exactly like production:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Palette

A light, airy scheme: dusty **blueprint blue** for the hero and contact
sections, warm **sand** for the gallery and footer, a **cream** page
ground, and a muted **terracotta** accent for calls to action. Tokens live
at the top of `css/styles.css`.

Nothing on the page is dark. Sections are separated by small tonal steps
plus hairline borders (`--sand-200`, `--blue-200`) and soft shadows,
rather than by flipping to a dark background — that's why cards, the map
and the form all carry a 1px border. Remove those borders and the
sections blur into each other.

Terracotta is used as a solid fill for the primary buttons rather than a
pale tint, because in an all-light layout the CTA needs something to
anchor it.

Every text/background pair meets WCAG AA (4.5:1) — 25 pairs checked. Worth
re-verifying if you retune anything, since light palettes drift below AA
much more easily than dark ones, and "calm" and "too faint to read" sit
close together.

## Logo

The logo is an original SVG mark — a hexagonal badge (bolt head) holding a
stack of three elements, which read as both Jain symbolism and building
structure:

- **Dot above a shallow crescent** — Siddhashila, the abode of liberated
  souls, at the top of the composition as it sits at the top of the loka.
- **The bold "T"** — Tirthankars; the crossbar reads as a lintel beam, the
  stem as a column.
- **Three dots along the base** — the Ratnatraya (right faith, right
  knowledge, right conduct), doubling as foundation footings.

It ships in two files:

- `images/logo-mark.svg` — the badge on its own. Used as the browser tab
  favicon, and available if the header ever wants a mark next to the text.
- `images/about.svg` — the full brand card (badge + wordmark + Devanagari
  name + tagline) shown in the About section.

The mark's geometry is duplicated inside `about.svg` because an SVG loaded
through an `<img>` tag can't reference an external file — if you edit the
mark, update both files.

## Placeholder images

No real project photos were available yet, so these are generated SVG
placeholders rather than photos:

- `images/hero-bg.svg` — hero section background
- `images/gallery-1.svg` … `images/gallery-6.svg` — project gallery tiles

To swap in real photos later, replace these files (keeping the same
filenames referenced in `index.html`, or update the `src`/`style`
references if you rename them, e.g. to `.jpg`).

## Contact

There is deliberately **no contact form**. Visitors get in touch by phone
or WhatsApp — both are click-to-action links, so they work on mobile with
one tap.

An earlier version had a form, but it was never wired to a backend: it
showed a "thanks" message and then discarded the submission. A form that
silently drops enquiries is worse than no form, because people believe
they've made contact and then wait for a reply that isn't coming. It was
removed rather than left in place looking functional.

To add a real one later, the site is static so it needs a third-party form
backend — [Formspree](https://formspree.io) has a free tier. Add a `<form
action="https://formspree.io/f/YOUR_ID" method="POST">` inside the
`.contact-grid` in `index.html`; no JavaScript is needed, since the form
posts directly. Note that `.contact-grid` is currently a two-column grid
holding the contact details and the map, so adding a third child means
rethinking that layout.

## Deployment (Vercel, free)

The site is plain static files, so Vercel serves it directly with no build
step. One-time manual step for the repo owner (this needs your own Vercel
login, so it can't be done from a session):

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub (free tier).
2. Click **Add New → Project**, then import `adityaahale/TirthankarConstructions`.
3. Set the **Project Name** to whatever you want as the subdomain, e.g.
   `tirthankars-contractor` → the site becomes
   `https://tirthankars-contractor.vercel.app` (no personal username in
   the URL).
4. Framework Preset: **Other**. Leave the Build Command empty and Output
   Directory as the repo root — there's nothing to build.
5. Deploy. Every future push to `tirthankar_v1` (or whichever branch is
   set as the Production Branch in the Vercel project settings) will
   auto-deploy.

A custom domain can be added later for free in the same Vercel project's
**Settings → Domains** if one is purchased.

### Alternative: GitHub Pages

The repo also includes a `.nojekyll` file, so it can alternatively be
served straight from GitHub Pages (**Settings → Pages → Deploy from a
branch → `tirthankar_v1` / `/(root)`**), which publishes at
`https://adityaahale.github.io/TirthankarConstructions/` — note this URL
does include the GitHub username, which is why Vercel is the primary
recommendation above.
