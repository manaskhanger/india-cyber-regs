# India Cyber Regs

**Live site:** https://manaskhanger.github.io/india-cyber-regs/

> **Unofficial educational project, not affiliated with any regulator; always refer to the official text.**

A clean, unofficial reference hub of Indian cybersecurity regulatory directions for students, GRC and compliance analysts, and interview prep. It covers RBI, SEBI, CERT-In, IRDAI, the DPDP Act and Rules (MeitY), and PFRDA.

## What's in it (Phase 1)

- **Home**: what the site is, six regulator tiles, and the disclaimer.
- **Directions** (`/directions`): each direction as a card with its title, issuing body, date, reference number (when verified), who it applies to, one hand-written plain-language summary sentence, and a link to the official source. You can filter by regulator with chip buttons (for example `/directions?regulator=sebi`).
- **About**: purpose, disclaimer, and sources policy.

## Sources policy

- Every title, issuer, date, reference number and applicability note was checked against an official source: rbi.org.in, sebi.gov.in, cert-in.org.in, irdai.gov.in, meity.gov.in, egazette.gov.in or pfrda.org.in. Fields that couldn't be verified are left out, not guessed.
- Links go to official websites only. The repo doesn't host or copy any regulator PDF. Where a PDF link was confirmed to resolve, the card links to the PDF; otherwise it links to the official HTML page or listing.
- There are no forms, text inputs, analytics or data collection, and no regulator logos or seals. The only thing stored in the browser is the light/dark theme preference, kept in `localStorage`.
- All data lives in [`src/data/directions.ts`](src/data/directions.ts). Each entry keeps the official URL(s) it was verified against in its `sources` field. Last verified: 26 September 2026.

## Disclaimer

This is a personal, non-commercial learning project. It isn't run by, endorsed by, or connected to RBI, SEBI, CERT-In, IRDAI, MeitY, PFRDA, NPCI or any other public body. The summaries are simplified paraphrases: they may leave out conditions, exceptions or later amendments, and they are not legal or compliance advice. Always read the official text.

## Stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4 (class-based dark mode)
- [React Router](https://reactrouter.com/) 7
- [lucide-react](https://lucide.dev/) icons
- [oxlint](https://oxc.rs/) for linting
- Hosted on GitHub Pages from the `gh-pages` branch, with base path `/india-cyber-regs/`. The build copies `index.html` to `404.html` so deep links like `/directions` work.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173/india-cyber-regs/
npm run lint       # oxlint
npm run typecheck  # tsc -b
npm run build      # tsc + vite build + 404.html SPA fallback -> dist/
npm run preview    # serve dist/ locally
```

## Deploy

`dist/` is published to the `gh-pages` branch, and GitHub Pages serves that branch from `/`:

```bash
npm run build
cd dist && git init -b gh-pages && git add -A && git commit -m "Deploy" \
  && git push -f https://github.com/manaskhanger/india-cyber-regs.git gh-pages
```

## Corrections

If you find an error or an outdated entry, please [open an issue](https://github.com/manaskhanger/india-cyber-regs/issues) with a link to the official source.
