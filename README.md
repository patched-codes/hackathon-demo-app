# Live Dashboard Demo

Minimal Next.js template for showing live feature changes with a coding agent.

## What changed

- Reduced the app to a single dashboard route
- Removed auth flows, sidebars, theme presets, charts, tables, and other template-heavy features
- Replaced Tailwind and component-library usage with plain CSS
- Kept sample data inline so edits are fast and obvious during demos

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Files that matter

- `src/app/page.tsx`: dashboard content and demo data
- `src/app/globals.css`: all styling
- `src/app/layout.tsx`: root layout and metadata

## Why this version is better for live demos

- Tiny surface area
- Faster installs
- Fewer moving parts during edits
- Easy to explain on screen
