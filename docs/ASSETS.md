# Retouch Website Asset List

Last updated: 30 October 2026

All media is referenced through `src/content.ts`. To swap a clip, drop the new
file into `src/assets/` and change one import. No component needs editing.

## In place

| File | Origin | Size | Used for |
|---|---|---|---|
| `src/assets/zoom-eye-loop.mp4` | `~/Downloads/heptaseas-eye-zoom-loop.mp4` | 517 kB | Hero slot 1, Zoom feature |
| `src/assets/zoom-head-turn-loop.mp4` | `~/Downloads/heptaseas-head-turn-loop.mp4` | 462 kB | Hero slot 2 |
| `src/assets/auto-light-loop.mp4` | `~/Downloads/heptaseas-auto-light-loop.mp4` | 604 kB | Light feature, unframed card |
| `src/assets/app-icon.svg` | drawn to match the keynote slides | 1.8 kB | Header mark, hero wordmark |
| `public/favicon.svg` | copy of `app-icon.svg` | 1.8 kB | Browser tab |
| `public/apple-touch-icon.png` | rendered from `app-icon.svg` | 33 kB | iOS home screen |
| `public/og-image.jpg` | generated, 1200x630 | 64 kB | Link previews |

### These clips are artwork, not footage

The three loops are code-generated animations, drawn frame by frame from the
`film.js` sources that shipped alongside them in `~/Downloads`. The figure in
them is an illustration. No real person appears, so there is no likeness to
clear before publishing, and alt text describes them as illustrated.

This matters the moment anyone proposes replacing them with camera footage. If
real video of a person is ever used, written permission from everyone appearing
in it is required first. Recorded in `docs/PRD.md` section 8.2.

### Which auto-lighting clip, and why

There are three variants in `~/Downloads` and only one works. Two of them draw
their own phone, which puts a phone inside the site's phone frame. The chosen
one is a third-person scene of a figure holding a lit phone in a dark room, and
it is rendered unframed in a rounded card via `frame: "card"`.

| Variant | What it shows | Verdict |
|---|---|---|
| `heptaseas-auto-light-screen-loop.mp4` | A full phone mockup | Rejected, double frame |
| `heptaseas-auto-light-bare-loop.mp4` | Still draws a device | Rejected, double frame |
| `heptaseas-auto-light-loop.mp4` | Figure holding a lit phone | **In use**, as a card |

## Needed

### 1. Shade before and after, the one remaining gap

The third feature block demonstrates true-to-eye color, and it is the visual
proof of the claim "so your blush never goes invisible again." No material for
it exists in any form. The site draws a labelled dashed placeholder reading
"Shade comparison" so the gap is obvious rather than hidden.

What to supply: two stills, or one short clip, of the same face under the same
lighting with the same blush, once looking washed out through a normal camera
and once corrected by Retouch. Portrait orientation, at least 900px wide.

If this is produced as artwork in the same style as the other three loops, the
likeness question never arises.

### 2. The real app icon

The icon in the repo is an SVG drawn to match the one in the keynote slides.
The real icon exists only inside those slides. `AppIcon.appiconset` in the
Heptaseas-C7 project contains a `Contents.json` and no image, and
`~/Documents/logo.icon` belongs to a different app.

Supply the 1024x1024 PNG export. Then regenerate `favicon.svg`,
`apple-touch-icon.png` and `og-image.jpg` from it.

### 3. Poster frames, nice to have

Each `<video>` has no `poster`, so there is a blank frame before the clip
decodes. One still per clip would fix it. This machine has no ffmpeg, so they
could not be extracted automatically.

Supply one JPEG per clip matching the first frame, same aspect ratio, then set
`poster` on the matching entry in `content.ts`.

## Values in `src/config.ts`

| Constant | Current value | State |
|---|---|---|
| `APP_LINK` | `https://testflight.apple.com/join/a6sEP244` | Live, CTA renders as a real button |
| `OWNER_NAME` | `Heptaseas` | Confirmed |
| `SUPPORT_EMAIL` | `SUPPORT_EMAIL_NOT_SET` | **Launch blocker.** No address chosen yet |
| `SITE_URL` | `https://DOMAIN_NOT_SET` | **Launch blocker.** No domain confirmed |
| `PRIVACY_LAST_UPDATED` | `30 October 2026` | Update when the policy text changes |

Both blocker tokens are greppable. Before deploying:

```bash
grep -r "SUPPORT_EMAIL_NOT_SET\|DOMAIN_NOT_SET" dist/
```
