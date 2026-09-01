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

## Placeholder images

No real project photos were available yet, so `images/` currently contains
generated SVG placeholders instead of photos:

- `images/hero-bg.svg` — hero section background
- `images/about.svg` — About section photo
- `images/gallery-1.svg` … `images/gallery-6.svg` — project gallery tiles

To swap in real photos later, replace these files (keeping the same
filenames referenced in `index.html`, or update the `src`/`style`
references if you rename them, e.g. to `.jpg`).

## Contact form

The contact form in the Contact section is **UI-only** right now — it does
not send an email or hit a server. On submit it just shows a confirmation
message client-side (see `js/main.js`). To make it actually deliver
messages, connect a free form backend such as [Formspree](https://formspree.io):
add your form's endpoint as the `<form action="...">` in `index.html` and
remove the `preventDefault()` handling in `js/main.js` (marked with a
`TODO` comment at both spots).

## Deployment (GitHub Pages, free)

This repo is set up to be served directly from the `tirthankar_v1` branch
(a `.nojekyll` file at the root disables Jekyll processing so the static
files are served as-is). One-time manual step for the repo owner:

1. Go to **Settings → Pages** in the GitHub repo.
2. Under **Source**, choose **Deploy from a branch**.
3. Branch: `tirthankar_v1`, folder: `/ (root)` → **Save**.

The site will then be live at:

```
https://adityaahale.github.io/TirthankarConstructions/
```

A custom domain can be added later for free via the same Pages settings
page if one is purchased.
