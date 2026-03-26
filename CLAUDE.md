# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from the `client/` directory:

```bash
cd client
npm start        # Dev server at localhost:3000
npm run build    # Production build
npm test         # Run tests (interactive watch mode)
npm test -- --watchAll=false  # Run tests once (CI mode)
```

## Architecture

This is a **frontend-only** React SPA (Create React App). There is no server — the `server/` directory does not exist. The app is deployed as a static site to AWS CloudFront.

**Routing** (`App.js`):
- `/` → `Landing` — animated intro screen that auto-navigates to `/portfolio` after the typing animation completes
- `/portfolio` → `Portfolio` layout (NavBar + Home + About + Projects + Footer)
- `*` → redirects to `/`

**Key data files** (edit these to update content):
- `client/src/constants/projects.js` — project cards with title, description, techStack, detail, images, role, status, year, and optional link
- `client/src/constants/languages.js` — tech skill icons shown in the About section (uses devicons CDN)

**Component patterns**:
- Animations use CSS class toggling with `setTimeout` for phase-based transitions (e.g., "closed" → "expanding" → "open" → "collapsing"). Don't replace these with CSS-only transitions.
- The `Projects` component swaps between a card grid and an expanded detail panel in-place (no routing). Phase states: "idle" | "fading-out" | "expanded" | "fading-in".
- The `Home` resume button animates its width via inline styles measuring the button's natural `offsetWidth` via a ref.
- Static assets (photos, resume PDF, screenshots) live in `client/public/` and are referenced with root-relative paths (e.g., `/resume.pdf`, `/images/StatusPage.png`).

## Code Style

Prettier is configured at the root (`.prettierrc`): single quotes, semicolons, trailing commas (ES5). Components use `.jsx` extension, utilities use `.js`.
