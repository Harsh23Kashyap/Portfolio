## About stat blocks — 2026-05-30

**Decisions:**
- Place 5 metric cards on About tab only, under header
- Count experience since graduation (~3+ years from 2023)
- Metrics: Years, 3 Global MNCs, 3 Indian Startups, 2 Research, 9.71 CGPA
- Layout: 4-column grid; CGPA centered on second row

**Approach chosen:** Reuse existing `.hero-metrics` / `.metric-card` with sublabels
**Outcome:** Implemented
**Files affected:** index.html, assets/css/style.css

## GitHub README refresh — 2026-05-31

**Decisions:**
- Mirror portfolio stat blocks in a Highlights table (7 metrics)
- Replace outdated profilinator skills with badge chips by category
- Fix experience dates/titles; add research; table-based layout

**Approach chosen:** Shield badges + markdown tables for GitHub-native rendering
**Outcome:** Implemented
**Files affected:** ReadmeGithub/Harsh23Kashyap/README.md

## GitHub README visual polish — 2026-05-31

**Decisions:**
- Companies section → 2×3 bento HTML table with 56px logos
- Replace black-background startup PNGs with transparent SVGs (Tata 1mg, Licious, YASH)
- Shorten social badge labels (Visit, Connect, Profile, Contact)
- Fix blob GIF/image URLs to raw.githubusercontent.com
- Experience logos 40px; research logos 44px

**Approach chosen:** Bento grid + transparent SVG logos (no external deps)
**Outcome:** Implemented
**Files affected:** README.md, assets/logos/tata-1mg.svg, licious.svg, yash.svg

## Hero metric flip cards — 2026-05-31

**Decisions:**
- All 7 metric cards flip on hover (desktop) and tap (mobile)
- Back face: inline SVG icons or logo row + 1-line pointer text
- CSS 3D flip with reduced-motion cross-fade fallback

**Approach chosen:** Pure CSS 3D flip + minimal JS for mobile toggle
**Outcome:** Implemented
**Files affected:** index.html, assets/css/style.css, assets/js/script.js

## Targeted Portfolio Polish — 2026-06-20

**Decisions:**
- Keep current dark/gold identity; fix visible inconsistencies instead of redesigning
- Tighten project card rhythm, media treatment, and old hover overlay noise
- Refresh About hero SVG toward backend/platform visuals

**Approach chosen:** Targeted CSS polish + small inline SVG refresh
**Outcome:** Implemented
**Files affected:** index.html, assets/css/style.css

## Resume Editorial Timeline UI — 2026-06-20

**Decisions:**
- Avoid project-style cards in Resume; use an editorial timeline instead
- Improve visual hierarchy with section rules, timeline rail, metadata rows, and custom bullets
- Keep content intact while cleaning bullet presentation

**Approach chosen:** Scoped Resume CSS polish + Resume-only bullet cleanup
**Outcome:** Implemented
**Files affected:** index.html, assets/css/style.css
