# Retouch Website PRD

Owner: Heptaseas
Status: built, not deployed, one media gap remaining
Last updated: 30 October 2026

## 1. Why this site exists

App Store Connect requires three public URLs before Retouch can ship: a
marketing page, a support page, and a privacy policy. This site supplies all
three from one deployment, and doubles as the page someone lands on when they
hear about Retouch and want to know what it is.

It is not a growth channel. There is no signup, no analytics, no newsletter.
That matches the app itself, which collects nothing.

## 2. Audience

| Who | What they came for | What they should leave with |
|---|---|---|
| Someone who heard about the app | What does it actually do? | It is a mirror that zooms and lights itself |
| An existing user with a problem | An answer, fast | The FAQ answered it, or they have the email |
| App Review | Three working URLs and an honest privacy policy | Policy matches app behaviour |

## 3. What the app does

Retouch turns the phone into a real mirror for on-the-go makeup, using the
front camera with real-time face and hand detection.

- **Gesture zoom.** Hold a brush near an eye or the lips and the view zooms to
  that feature. Turning the head zooms to that side of the face. Zoom is
  smoothed to reduce motion.
- **Auto lighting.** In dim places the screen brightens and an edge light turns
  on, with an enhanced rendering mode.
- **True-to-eye color.** White balance is adapted so shades look as the eye sees
  them, so blush never goes invisible.
- Everything is processed on device. No account, no ads, no data collection.

Platform today is iPhone on iOS 26 or later, confirmed against
`IPHONEOS_DEPLOYMENT_TARGET = 26.6` in the Heptaseas-C7 Xcode project. iPad and
Mac are in progress, voice control is planned.

## 4. Scope

### In scope

Three routes at the domain root, standalone, not a subpath of any portfolio.
These are fixed forever because they go into App Store Connect:

| Path | App Store Connect field |
|---|---|
| `/` | Marketing URL |
| `/support` | Support URL |
| `/privacy` | Privacy Policy URL |

No router `basename` and no Vite `base` are set, by decision.

### Out of scope for v1

Dark mode, localisation, a blog, a press kit, analytics, a contact form, and
anything that collects a visitor's data. Deployment is also out of scope for
this deliverable.

## 5. Landing page

The guiding rule from the brief: **show the features, do not list them.** Every
feature block is a visual with a short caption, never a bullet list of
adjectives.

1. **Hero.** App icon, wordmark, the headline "Turn your phone into a real
   mirror with Retouch.", the one-line description, the call to action, and the
   media stage.
2. **Hook.** "What if you forgot your mirror?" answered by "Anywhere, anytime.
   Your phone is already your mirror."
3. **Feature showcase.** Zoom, Light, and Shade. One visual each, a one or two
   word label, one short line.
4. **Smooth zoom band.** "Zoom so smooth, you'll barely notice." on a full
   width plum band.
5. **Roadmap strip.** iPhone available, iPad and MacBook in progress, voice
   control planned.
6. **Final call to action.** "Try it on your own face."
7. **Footer.** Support, Privacy, contact email, copyright.

### Media state

Four of the five media slots show real clips. Only the Shade comparison is
still a labelled dashed placeholder, because no such material exists. The
placeholder carries the name of the shot it is waiting for, so the gap is
legible to anyone reviewing the page rather than silently absent.

### Call to action

The button reads "Try Retouch" and points at the live TestFlight build:
`https://testflight.apple.com/join/a6sEP244`.

The disabled "Coming soon" branch remains in `CtaButton.tsx` as a fallback for
whenever `APP_LINK` is emptied, but it is not the active state.

## 6. Support page

A short intro, the contact email as a `mailto:` link, and a six item accordion
covering camera permission, auto lighting, gesture zoom, whether photos are
saved, supported devices, and how to report a bug.

While no support address is set, the page shows a notice in place of the
`mailto:` link rather than a broken one.

## 7. Privacy page

The policy text from the brief, rendered as headings and paragraphs, with a
"Last updated" date from `config.ts`.

The policy claims the app does no recording, has no accounts, no analytics, no
advertising, and restores screen brightness on exit. Those claims are only as
good as the app. **Someone with the iOS source should confirm each one before
launch**, because App Review treats a wrong privacy policy as a rejection.

## 8. Pre-launch blockers

These are known, accepted, and deliberate. None is an oversight.

### 8.1 Support email not set

`SUPPORT_EMAIL` in `src/config.ts` holds `SUPPORT_EMAIL_NOT_SET`. No address
has been chosen yet.

**This means the brief's acceptance checklist item "No placeholder text like
`YOUR_EMAIL_HERE` remains in the production build" cannot pass today.** That
failure is accepted on purpose for this deliverable and must be cleared before
the site goes public. The token is greppable in `dist/`.

### 8.2 Likeness in demo footage: resolved, no longer a blocker

The three demo clips were briefly held out of the repository while it was
unclear whether they showed a real person. The owner has confirmed they are
code-generated artwork, drawn frame by frame from the `film.js` sources that
shipped alongside them. No real face appears in them and there is no likeness
to clear, so all three are now committed and in use.

This stands recorded because the question will come back the moment anyone
proposes replacing them with camera footage. **If real footage is ever used,
written permission from everyone appearing in it is required before it goes on
a public page.**

### 8.3 Shade visual does not exist

The third feature block demonstrates true-to-eye color: washed-out blush next to
true color. No such material exists. The block ships with a labelled placeholder
rather than being cut or filled with a fabricated comparison. See
`docs/ASSETS.md` for what to shoot.

### 8.4 No domain confirmed

`SITE_URL` holds `https://DOMAIN_NOT_SET`. Canonical links are suppressed
entirely until a real domain is set, and `public/sitemap.xml` was removed rather
than shipped pointing somewhere unregistered.

### 8.5 Privacy text unverified against the app

As in section 7.

## 9. Design direction

Taken from the Retouch keynote slides and, for color, from the app's own source.

- Soft, clean, premium beauty. Plenty of white space.
- Plum headings on a near-white blush-washed background.
- Large bold headlines, lighter body text, SF Pro through the system stack.
- Mobile first, correct from 375px up. Light mode only for v1.
- One decorative motif: the diagonal glass gloss from the app icon, reused on
  the phone frames and the primary button. Nothing else is decorated.

## 10. Success criteria

- [x] `/`, `/support`, `/privacy` all load directly without a 404 on refresh
- [x] Correct at 375px and 1440px with no horizontal overflow
- [x] Every text and background pair meets WCAG AA contrast
- [x] Visible keyboard focus on every interactive element
- [x] `prefers-reduced-motion` stops all autoplay
- [x] Call to action points at a live TestFlight build
- [ ] No placeholder text in the production build, blocked by 8.1
- [ ] Every feature block shows real media, blocked by 8.3 alone
- [ ] Lighthouse accessibility and SEO at 90 or higher, not yet measured
- [ ] Privacy text confirmed against real app behaviour, blocked by 8.5
