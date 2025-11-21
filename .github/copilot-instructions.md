<!--
Project: AgroConecta (static marketing / landing site)
This file gives concise, actionable guidance for AI coding agents (Copilot-style)
so they can be productive without human hand-holding.
-->

# Copilot instructions — AgroConecta

Short purpose: this is a small static landing site (HTML/CSS/JS) that uses Bootstrap via CDN.
Agents should treat it as DOM-first, asset-driven, and Spanish-language-first.

Key files to inspect or edit
- `index.html` — single-page layout, sections: hero carousel, services, about, contact, location, footer. Contains the contact form (`#contact-form`, `#name`, `#form-wrapper`) and carousel images under `Assets/img/*`.
- `script.js` — DOMContentLoaded entry; two explicit features:
  - navbar scroll handling (class `navbar-scrolled` applied after 50px)
  - contact form submit handler that prevents default and injects a localized success message into `#form-wrapper`
- `style.css` — color variables in `:root`, naming convention uses `-custom` suffix (e.g., `.btn-primary-custom`, `.bg-light-custom`). Logo scaling is implemented in `.logo-container`.

Project architecture / why
- Static, client-side site with no detected build system or package manifest. No bundler required; pages loaded directly from filesystem or a static server. External UI dependency is Bootstrap (CDN) and Bootstrap Icons.
- Images and static assets are stored under `Assets/` (example: `Assets/img/farmers/Farmer1.png`, `Assets/img/finances/Finance1.jpg`). Keep image paths relative to `index.html`.

Developer workflows (discoverable)
- Preview locally by opening `index.html` in a browser or run a simple static server from project root (recommended for testing iframe and fetch behavior):

```bash
# from project root (zsh)
python3 -m http.server 8000
# then open http://localhost:8000
```

- There is no test harness or build step in the repo. Do not add a bundler unless requested.

Conventions & patterns agents should follow
- Preserve Spanish copy: UI strings in `index.html` are Spanish; keep translations consistent when modifying text.
- Styling: use existing CSS variables in `:root` when updating colors. Prefer `-custom` utility classes rather than adding new global styles.
- JS: follow the DOMContentLoaded pattern (see `script.js`) and avoid inline script tags that execute before DOM ready. Use explicit element IDs used by the app (`#contact-form`, `#form-wrapper`, `#name`).
- Images: carousel images rely on `object-fit: cover` and a forced height (600px desktop / 400px mobile). Supply images that work with that cropping behavior; place them under the appropriate `Assets/img` subfolder.

Integration points & external dependencies
- CDN: Bootstrap CSS/JS and Bootstrap Icons are loaded from jsDelivr in `index.html` — changes to components should account for Bootstrap classes and markup.
- Google Maps is embedded via iframe in the `#location` section — treat it as a static embed; no API key handling in this repo.
- Social links and contact email are placeholders in footer — verify before changing in production.

What to do when adding features
- For small interactive features: add handlers inside `script.js` following the existing pattern (guard for element existence, attach listeners after DOMContentLoaded).
- For style tweaks: modify `style.css` variables or add `-custom` classes; prefer reusing utilities already present.
- For images/assets: add files to `Assets/img/<category>/` and reference them with relative paths in `index.html`.

Examples (copy-paste friendly)
- To show a success flow on form submit, `script.js` currently replaces `#form-wrapper` innerHTML — if you need to keep the form, instead toggle a `.hidden` class and render a sibling success node.
- To change primary color, edit `--primary-color` in `style.css :root` and test across buttons (`.btn-primary-custom`) and text utilities (`.text-primary-custom`).

Notes / pitfalls discovered
- No linting or tests present. Keep changes small and validate by loading `index.html` in a browser.
- Carousel images use large fixed heights — replacing with smaller images can cause layout issues.
- The logo uses a `transform: scale(1.4)` inside `.logo-container`; altering the frame size affects visual balance on mobile.

If anything in these instructions looks incomplete or you'd like a different level of detail (example PR template, tests, or CI), tell me which parts to expand.
