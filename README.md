# India Cyber Regs

**Live site:** https://manaskhanger.github.io/india-cyber-regs/

> **Unofficial educational project, not affiliated with any regulator; always refer to the official text.**

A clean, unofficial reference hub of Indian cybersecurity regulatory directions for students, GRC and compliance analysts, and interview prep. It covers RBI, SEBI, CERT-In, IRDAI, the DPDP Act and Rules (MeitY), and PFRDA.

## What's in it (Phase 1)

- **Home**: what the site is, six regulator tiles, and the disclaimer.
- **Directions** (`/directions`): each direction as a card with its title, issuing body, date, reference number (when verified), who it applies to, one hand-written plain-language summary sentence, and a link to the official source. You can filter by regulator with chip buttons (for example `/directions?regulator=sebi`).
- **About**: purpose, disclaimer, and sources policy.

## International frameworks (Phase 2)

- **International** (`/international`): 20 international cyber and data-protection laws, regulations, supervisory frameworks and standards, with region filter buttons (All, EU, UK, US, Global; for example `/international?region=eu`) and an "At a glance" table.
- Each card shows the name and short name, issuer, jurisdiction, type (Law/Regulation, Directive, Supervisory framework, Voluntary framework or Standard), current version or adoption date, the date it applies from where relevant, who it applies to, a short plain-language summary, a status note where useful, and links to the issuer's own site.
- Covered: GDPR, DORA, NIS2, TIBER-EU, the Cyber Resilience Act and the EU AI Act (EU); CBEST (UK); NIST CSF 2.0, NIST SP 800-53 Rev. 5, the SEC cybersecurity disclosure rules and NYDFS 23 NYCRR Part 500 (US); ISO/IEC 27001:2022, PCI DSS, the Swift CSCF, the BCBS Principles for operational resilience, the CPMI-IOSCO cyber guidance for FMIs, the OWASP Top 10, OWASP ASVS, the OWASP Top 10 for LLM Applications and Open FAIR (Global).
- Where the overlap is obvious, a card has a "Related on this site" link to an Indian direction (for example GDPR to the DPDP Act and Rules, and DORA and TIBER-EU to the RBI 2026 Directions).
- Data lives in [`src/data/international.ts`](src/data/international.ts), with types in [`src/data/types.ts`](src/data/types.ts). Each entry keeps the official URLs it was verified against in its `sources` field. Links go to the issuing body's own website (EUR-Lex, central banks, regulators and standard-setters). Paid standards such as ISO/IEC 27001 link only to the publisher's page. Last verified: 26 September 2026.

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
- Hosted on GitHub Pages from the `gh-pages` branch, with base path `/india-cyber-regs/`. The build copies `index.html` to `404.html` so deep links like `/directions` and `/international` work.

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
