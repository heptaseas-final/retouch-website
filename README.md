# Retouch website

Marketing, support, and privacy pages for Retouch, the iOS beauty mirror app by
Heptaseas.

## Documentation

- [`docs/PRD.md`](docs/PRD.md) what the site is for and what is on it
- [`docs/TECH_SPEC.md`](docs/TECH_SPEC.md) stack, tokens, accessibility, CI
- [`docs/ASSETS.md`](docs/ASSETS.md) every media file, and what is still missing

## Running it

Node 26.13.0 lives in `~/.local/node` and is not on the default PATH:

```bash
export PATH="$HOME/.local/node/bin:$PATH"
```

Then:

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

## Before deploying

Two placeholder tokens must be replaced. Both are greppable:

```bash
grep -r "SUPPORT_EMAIL_NOT_SET\|DOMAIN_NOT_SET" dist/
```

`SUPPORT_EMAIL` and `SITE_URL` live in `src/config.ts`; `DOMAIN_NOT_SET` also
appears in `index.html`. The Shade comparison visual is still missing, see
`docs/ASSETS.md`.

## Editing content

`src/config.ts` holds environment values. `src/content.ts` holds every string
and every media reference. Components hold neither.
