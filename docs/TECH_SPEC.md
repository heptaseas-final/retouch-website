# Retouch Website Technical Spec

Repository: `heptaseas-final/retouch-website`
Branch: `feat/website-v1` (local only, no commits made, nothing pushed)
Last updated: 30 October 2026

## 1. Stack

| Piece | Version | License |
|---|---|---|
| Node.js | 26.13.0 LTS | MIT |
| React | 19.3.1 | MIT |
| React DOM | 19.3.1 | MIT |
| react-router-dom | 7.18.5 | MIT |
| Vite | 8.3.5 | MIT |
| TypeScript | 7.0.2 | Apache-2.0 |
| @vitejs/plugin-react | 6.1.2 | MIT |
| oxlint | 1.90.0 | MIT |

Three runtime dependencies, all MIT. No copyleft, no non-commercial clause, no
webfont package. `npm audit` reports 0 vulnerabilities.

### Deviations from the brief

**React 19 instead of React 18.** `npm create vite` now scaffolds React 19.3.1,
and React 18 would mean deliberately installing an older major. Nothing here
uses an API that differs between the two. It is a one-line downgrade if wanted.

**A 12-line hook instead of react-helmet-async.** The brief allows either. The
deciding factor is that this is a client-rendered single page app: social
scrapers never run JavaScript, so Open Graph tags set at runtime are invisible
to them. The OG tags are therefore static in `index.html`, and
`src/useDocumentMeta.ts` handles only the per-route title, description and
canonical link, which search crawlers do execute. This also removes a runtime
dependency.

**No Inter.** See typography below.

### Node install note

This machine had no Node, no Homebrew, and no package manager. Node 26.13.0 was
installed from the official prebuilt darwin-arm64 tarball, SHA256 verified
against `SHASUMS256.txt` from nodejs.org, extracted to `~/.local/node`. It is
newer than 26.12.1, which carried the October 2026 security releases.

Adding it to the shell profile was blocked by this session's permission policy,
so **the PATH entry was not persisted.** Add this line to `~/.zshrc`:

```bash
export PATH="$HOME/.local/node/bin:$PATH"
```

## 2. Structure

```
retouch-website/
  index.html            static meta and OG tags
  vercel.json           SPA rewrite so deep links do not 404
  vite.config.ts
  public/
    favicon.svg         app icon, placeholder drawing
    apple-touch-icon.png 180x180
    og-image.jpg        1200x630
    robots.txt
  docs/
    PRD.md  TECH_SPEC.md  ASSETS.md
  src/
    main.tsx            router mount
    App.tsx             routes, skip link, scroll reset
    config.ts           every environment value, one file
    content.ts          every string and media reference, one file
    styles.css          tokens and all styling
    useDocumentMeta.ts  per-route title, description, canonical
    pages/              Home.tsx  Support.tsx  Privacy.tsx
    components/         Header  Footer  Faq  MediaSlot  CtaButton
    assets/             app-icon.svg and three generated mp4 loops
```

Two files hold everything that changes: `config.ts` for environment values and
`content.ts` for copy and media. A component never contains a literal string
that a non-developer might want to edit.

## 3. Routing

`BrowserRouter` with three root-level routes and a catch-all that renders the
landing page. No `basename`, no Vite `base`; this is a standalone site, not a
subpath of a portfolio. `ScrollToTop` in `App.tsx` resets scroll on every
pathname change.

Deep links work in production through `vercel.json`:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

## 4. Design tokens

### Color: the Swift app is authoritative

Not the written brief. These come straight from `Color+App.swift` in the
Heptaseas-C7 project, so the site and the app cannot drift apart.

| Token | Value | Swift name | Use | Contrast on `--bg` |
|---|---|---|---|---|
| `--plum-900` | `#5A0A28` | `appTitle` | headings, smooth-zoom band | 13.2:1 |
| `--brand` | `#963C60` | `appMagenta` | buttons, links, focus ring | 6.4:1 |
| `--ink-700` | `#454546` | `appInactive` | body text on article pages | 9.1:1 |
| `--rose-600` | `#8F5571` | derived | secondary text | 5.4:1 |
| `--rose-300` | `#B77A9A` | brief | decorative only | 3.2:1 |
| `--blush-100` | `#F3E4EB` | | cards, final CTA panel | |
| `--bg` | `#FBF8FA` | | page background | |

White on `--brand` measures 6.75:1, so the primary button passes AA comfortably.

The brief's `#8B3A62` was dropped in favour of the app's real `#963C60`. All
ratios above were re-measured in the live page after that swap, not carried over
from the earlier palette.

### One correction that still stands

The brief specifies `#B77A9A` as the secondary text color. On `#FBF8FA` that
measures **3.18:1**, which fails WCAG AA for body text, and the brief also
requires AA. Both cannot hold.

`--rose-600` `#8F5571` is that same hue darkened until it measures **5.37:1**,
and it carries all secondary text. `#B77A9A` survives as `--rose-300` for
hairline borders and the dashed placeholder outline, where contrast rules do not
apply.

### Typography: SF Pro through the system stack, never self-hosted

```css
--font-sans: -apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui,
  sans-serif;
```

This matters enough to record, so it does not get "fixed" back into a webfont
later. **Apple's SF Pro licence permits the download only for mock-ups of user
interfaces for Apple platforms and forbids embedding the font in other
products.** Self-hosting a SF Pro woff2 on a public marketing site is not a
permitted use. Apple's own developer guidance points to the `system-ui` family
as the compliant route.

So: Apple devices resolve this stack to real SF Pro, and other platforms fall
back to their system sans. For an iOS-only app that tradeoff was accepted
deliberately. It also removes a 48 kB font download and a dependency.

Sizes are a `clamp()` scale from `--step--1` to `--step-4`, so type grows with
the viewport without breakpoint jumps.

### The one decorative motif

The app icon is a glass mirror with a single diagonal gloss. That gloss is the
`.sheen` class, used on the phone frames and swept across the primary button on
hover. Nothing else on the site is decorated.

## 5. Components

**MediaSlot** renders one media slot and takes a `variant`:

- `phone` wraps it in a CSS device frame, for screen recordings.
- `card` leaves it unframed, for clips that already show a phone in a scene.
  Framing one of those gives you a phone inside a phone.

It also handles `kind: "missing"`, which draws a labelled dashed placeholder
carrying the name of the shot it is waiting for. Only the Shade slot uses this
today, so that one gap is visible rather than silently absent.

**CtaButton** reads `APP_LINK` and renders a disabled "Coming soon" button when
it is empty. `APP_LINK` is currently the live TestFlight URL, so the real button
is what renders.

**Faq** is an accordion of buttons rather than `<details>`, so state is
announced through `aria-expanded` and the marker rotation stays consistent.
Panels are `role="region"` labelled by their button. Several can be open at once.

## 6. Accessibility

Verified in the browser, not merely intended:

- Contrast: every visible text and background pair on all three pages measured
  against WCAG AA, after the color promotion. **Zero failures.**
- Target size: nav and footer links were 21px tall, below the WCAG 2.2 minimum
  of 24px. Fixed to a 44px hit area.
- Keyboard: tabbing shows a 3px `--brand` focus ring on every interactive
  element, confirmed by screenshot. The skip link appears on first Tab.
- Structure: one `h1` per page, correct heading order, `header`/`main`/`footer`
  landmarks, `lang="en"`, no image without `alt`.
- Overflow: no horizontal scroll at 375px.
- Motion: `prefers-reduced-motion` pauses every clip and gives it controls, via
  `usePrefersReducedMotion` in `MediaSlot`, and the global media query kills
  transitions. **Implemented and code-reviewed, but not verified by emulating
  the OS setting**, which this browser cannot toggle.

Lighthouse has **not** been run. It needs a Chrome binary this machine does not
have. The brief's 90+ target is unmeasured.

## 7. Build output

```
dist/index.html                      2.05 kB   gzip  0.89 kB
dist/assets/index-*.css             10.07 kB   gzip  2.87 kB
dist/assets/index-*.js             271.66 kB   gzip 86.34 kB
dist/assets/zoom-head-turn-loop.mp4 462.41 kB
dist/assets/zoom-eye-loop.mp4       516.63 kB
dist/assets/auto-light-loop.mp4     603.50 kB
dist/og-image.jpg                    64 kB
dist/apple-touch-icon.png            33 kB
```

Total **1.9 MB**, of which 1.58 MB is video. The clips are not on the critical
path: every `<video>` uses `preload="metadata"`, so a first paint costs roughly
90 kB gzipped and no webfont, since SF Pro comes from the system.

## 8. Known gaps

1. **`SUPPORT_EMAIL` is `SUPPORT_EMAIL_NOT_SET`.** It appears in the bundle, so
   the acceptance checklist item on placeholders fails by accepted decision.
2. **`SITE_URL` is `https://DOMAIN_NOT_SET`.** Canonical links are suppressed
   entirely until it is real, and `sitemap.xml` was deleted rather than shipped
   pointing at an unregistered domain. The same token is in `index.html`.
   Grep for `DOMAIN_NOT_SET` before deploying.
3. **No Shade visual.** Four of five media slots are filled; the true-to-eye
   color comparison does not exist in any form. See `docs/ASSETS.md`.
4. **The app icon is a placeholder** drawn to match the keynote slides. The real
   export has not been supplied.
5. **Lighthouse unmeasured**, as above.
6. **No automated tests and no CI.** See below.
7. **Open Graph is one image for all routes**, inherent to a client-rendered SPA.

## 9. Recommended CI before this goes live

There is no pipeline yet. A minimal GitHub Actions workflow should run on every
pull request:

- `npm ci` then `npm run build`, so a broken build never merges
- `npm run lint` (oxlint is already installed and configured)
- `npm audit --audit-level=moderate`
- A secret scan, such as gitleaks, on the diff
- A grep gate failing the build on `SUPPORT_EMAIL_NOT_SET` or `DOMAIN_NOT_SET`
  reaching `dist/`, which turns both blockers above into enforced gates
- Lighthouse CI against the built `dist`, asserting accessibility and SEO at 90

Dependabot or Renovate should watch the dependency set, since this site will sit
untouched for months between releases and Node and Vite both ship security
patches on a schedule.

### Secrets

This project has no API keys, no tokens, and no backend, so there is nothing to
rotate. `SUPPORT_EMAIL` is a public address by design, not a secret. If a key is
ever added, it must not go in `config.ts`, which is bundled into client
JavaScript and readable by anyone who opens the page.

## 10. Deploy, when you are ready

Deployment was explicitly out of scope and nothing was pushed or committed.
When the time comes:

1. Set `SUPPORT_EMAIL` and `SITE_URL` in `src/config.ts`, and replace
   `DOMAIN_NOT_SET` in `index.html`.
2. Regenerate `public/sitemap.xml` and add the `Sitemap:` line to `robots.txt`.
3. Add the Shade comparison listed in `docs/ASSETS.md`.
4. Commit the `feat/website-v1` branch and push it.
5. Import the repo in Vercel. Framework preset Vite, build `npm run build`,
   output `dist`. `vercel.json` is already in place.
6. Point the domain, then re-check that `SITE_URL` matches it.
7. Put the three URLs into App Store Connect.
