Mindspring 30 — Frontend Structure Summary
=================================================

Stack
- Vite + React + TypeScript
- TailwindCSS + shadcn/ui (Radix primitives)
- React Router + TanStack Query

How to Run
- Install deps: `npm install`
- Start dev server: `npm run dev`
- Open the URL printed in the terminal (e.g. `http://localhost:8082/`).

Top-Level Routing (`src/App.tsx`)
- `/` → `src/pages/Index.tsx` — Landing page with feature cards
- `/products` → `src/pages/Products.tsx` — Public product listing with Pic/3D/AR/VR per card
- `/entrepreneurs` → `src/pages/Entrepreneurs.tsx` — Marketing pitch page for entrepreneurs
- `/about` → `src/pages/About.tsx` — Platform overview
- `/advisor` → `src/pages/Advisor.tsx` — Advisor center (wellness + marketing guidance)
- `/login` → `src/pages/Login.tsx` — Role selection & login UI
- `/features` → `src/pages/features/FeaturesHub.tsx` — Features landing
- `/features/:feature/:subpage` → `src/pages/features/FeaturePage.tsx` — Dynamic feature subpages

Admin Layout (`/admin/*`) — `src/layouts/AdminLayout.tsx`
- `/admin/overview` → `src/pages/admin/Overview.tsx`
- `/admin/users` → `src/pages/admin/UserManagement.tsx`
- `/admin/analytics` → `src/pages/admin/EntrepreneurAnalytics.tsx`
- `/admin/orders` → `src/pages/admin/OrderManagement.tsx`
- `/admin/settings` → `src/pages/admin/PlatformSettings.tsx`
- `/admin/sales-marketing` → `src/pages/admin/SalesMarketing.tsx`
- `/admin/financial` → `src/pages/admin/FinancialManagement.tsx`
- `/admin/notifications` → `src/pages/admin/NotificationsData.tsx`
- `/admin/features/:feature/:subpage` → `src/pages/features/FeaturePage.tsx` (reused)

Entrepreneur Layout (`/entrepreneur/*`) — `src/layouts/EntrepreneurLayout.tsx`
- `/entrepreneur/overview` → `src/pages/entrepreneur/Overview.tsx`
- `/entrepreneur/products` → `src/pages/entrepreneur/ProductManagement.tsx`
- `/entrepreneur/orders` → `src/pages/entrepreneur/OrderManagement.tsx`
- `/entrepreneur/analytics` → `src/pages/entrepreneur/SalesAnalytics.tsx`
- `/entrepreneur/customers` → `src/pages/entrepreneur/CustomerManagement.tsx`
- `/entrepreneur/marketing` → `src/pages/entrepreneur/MarketingSocial.tsx`
- `/entrepreneur/payments` → `src/pages/entrepreneur/Payments.tsx`
- `/entrepreneur/profile` → `src/pages/entrepreneur/Profile.tsx`
- `/entrepreneur/features/:feature/:subpage` → `src/pages/features/FeaturePage.tsx` (reused)

Features System — `src/pages/features/FeaturePage.tsx`
- Handles dynamic feature sections via `feature` and `subpage` slugs.
- Social subpages implemented with mock content:
  - `video-ideas` — grid of idea cards with images
  - `thumbnail-generator` — sample thumbnail gallery
  - `reel-maker` — vertical reel previews
  - `ctr-predictor` — CTR metrics with `Progress` visualization
  - `similar-channels` — channel cards with images and stats
  - `audio-generator` — audio items with sample playback and status

Key Components — `src/components`
- `ProductMediaInline.tsx` — Compact media viewer for product cards
  - Tabs: Pic / 3D / AR / VR
  - Props: `imageSrc`, `modelSrc`
- `ProductMediaFooter.tsx` — Full-width media viewer used in featured sections
  - Tabs: Pic / 3D / AR / VR with fallback messaging
- `AdminSidebar.tsx` / `EntrepreneurSidebar.tsx` — Sidebar navigation
- `Footer.tsx` — Site footer
- `components/ui/*` — shadcn/ui wrappers (e.g., `card.tsx`, `button.tsx`, `progress.tsx`)

Layouts — `src/layouts`
- `AdminLayout.tsx` — Wraps admin routes with sidebar and chrome
- `EntrepreneurLayout.tsx` — Wraps entrepreneur routes with sidebar and chrome
- `FeatureLayout.tsx` — Wraps feature pages with sidebar navigation based on slugs

Context — `src/context`
- `UIContext.tsx` — Strings, language (EN/BN), and UI helpers used by sidebars and pages

Data & Assets
- Mock images use `picsum.photos` seeds for consistent visuals.
- 3D viewer uses `<model-viewer>` web component (GLB/Gltf models).
- VR/AR buttons gracefully fall back to the 3D viewer if the device/browser lacks support.

Extending the Project
- Add a new top-level page: create a file in `src/pages` and map it in `src/App.tsx`.
- Add an admin/entrepreneur page: create under the respective subfolder and add a nested route in `src/App.tsx`.
- Add a feature subpage: update the `SUB_PAGES` config and render logic in `src/pages/features/FeaturePage.tsx`.
- Use `ProductMediaInline` in product grids to provide Pic/3D/AR/VR per item, or `ProductMediaFooter` for featured sections.

Notes
- Code style: TypeScript + functional React components.
- Tailwind utility classes are used throughout; shadcn/ui components wrap Radix primitives.
- Keep changes minimal and targeted when updating shared components and layouts.