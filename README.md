# Leo Vonaco — Vite + React scaffold

This repository is a minimal Vite + React scaffold that reuses the exported site assets in `Leo Vonaco_files/` and `Leo Vonaco.html` so you can progressively convert the design into React components.

Quick start:

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open http://localhost:5173 (Vite default) — the `index.html` embeds the exported `Leo Vonaco.html` for quick visual parity. Replace the iframe with React components when ready.

Notes:
- The CSS and image assets are left in `Leo Vonaco_files/` and referenced from `index.html`.
- For full PrestaShop features (cart/search/ajax) you will need a PHP + MySQL PrestaShop backend — this scaffold is for frontend reimplementation only.
