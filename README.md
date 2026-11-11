# Alex Tang — Personal Portfolio

My personal website. I'm a Computational Mathematics student at UCLA (B.S., expected 2029) working on optimization, mathematical modeling, embedded ML, and competitive programming.

**What's on the site**

- **Experience & Leadership** — education, research (UCSB SRA, UC Davis COSMOS), tutoring, and leadership (Funding Lead at Bruin Software Engineers, Co-President of Music4America, Codeforces Expert / USACO Gold)
- **Projects** — BLE wearable step counter with on-device TinyML, e-sports predictive analytics (DataRes), a local RAG system, an integer-programming model for anti-poaching ranger routes, and NeuroPass (Toshiba ExploraVision Honorable Mention)
- **Skills & Highlights** — Codeforces / USACO, valedictorian, Music4America fundraising, plus the languages and tools I use
- **Contact** — email, GitHub, LinkedIn, and a downloadable resume

## Built with

- [Next.js 16](https://nextjs.org/) (App Router) + React 19
- TypeScript
- Tailwind CSS 4 with a hand-written stylesheet (`app/globals.css`)
- pnpm

The design is a dark, geometric "honeycomb" theme: hex-clipped portrait, a faint hex-grid backdrop, floating hex particles, and a light/dark toggle.

## Running locally

Requires Node.js 20.9+ and pnpm.

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

```bash
pnpm build      # production build
pnpm start      # serve the production build
pnpm lint
```

## Updating content

Almost everything lives in two config files, so I rarely need to touch components:

| File | What it controls |
|---|---|
| `config/portfolio.ts` | Name, links, hero text, highlights, education, experience, projects, skills, contact, footer |
| `config/design.ts` | Colors (light + dark), hero animations, which sections are shown, section headings |
| `public/resume.pdf` | The resume linked from the hero, contact section, and footer |
| `public/portrait.png` | Hero photo |

A few notes:

- **Experience** entries have a `group` of `'work'` or `'leadership'`, which decides which timeline they appear in.
- **Projects** marked `featured: true` get a wider card; `inProgress: true` shows an "In progress" badge. Add `github` or `live` URLs to show links.
- **Colors**: only `bg`, `primary`, and `accent` are set per mode — the rest of the palette is derived in `lib/theme.ts`, which also warns at build time about low-contrast combinations.
- **Fonts** are set in `app/layout.tsx` (DM Sans + JetBrains Mono).

## Project structure

```
app/
  components/      Header, Hero, Experience, Projects, Skills, Contact, Footer, …
  providers/       Theme context
  globals.css      All styles (colors come from CSS variables only)
  layout.tsx       Fonts, metadata, theme tokens
  page.tsx         Page composition and section numbering
  opengraph-image.tsx
config/
  portfolio.ts     Content
  design.ts        Visual settings
lib/
  theme.ts         Palette derivation
public/
  resume.pdf
  portrait.png
```

## Deployment

Vercel works out of the box: import the repo and keep the default Next.js settings. On other hosts, set `NEXT_PUBLIC_SITE_URL` so Open Graph URLs resolve correctly.

## Contact

[yalext08@ucla.edu](mailto:yalext08@ucla.edu) · [github.com/aelext](https://github.com/aelext) · [linkedin.com/in/yalext](https://www.linkedin.com/in/yalext/)
