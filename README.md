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
