# EdgePredict Site — Complete Codebase Overview

## 1. Framework & Tech Stack

| Layer | Technology |
|---|---|
| Framework | **Next.js 15.3.9** (App Router) |
| Language | **TypeScript 5.8** |
| Styling | **Tailwind CSS 3.4** + `tailwindcss-animate` |
| UI primitives | **shadcn/ui** scaffold (Radix UI slot, CVA, clsx, tailwind-merge) |
| Icons | **lucide-react 0.475** |
| Email | **Resend 6.9** (transactional email via API routes) |
| Analytics | **@vercel/analytics** (Vercel Analytics, injected in root layout) |
| Package manager | **Bun** (also has `package-lock.json` from npm) |
| Linter/Formatter | ESLint (Next.js config) + Biome 1.9 |
| Runtime | Node-compatible — deployed serverless |

No external UI library beyond the shadcn scaffold. No database, no auth, no CMS.

---

## 2. Pages / Routes

### `/` — Homepage (`src/app/page.tsx`)
Full marketing page. Sections:
1. **Hero** — headline, trust bullets, two CTAs
2. **The Problem** — 3 stat cards (dark background)
3. **How It Works** — 3-step process (Install → Monitor → Prevent)
4. **What It Detects** — two-column card: Current Sensing (standard) vs. Enhanced (voltage reference add-on)
5. **Why EdgePredict** — 3 comparison cards (vs. Vibration Sensors, vs. Enterprise Systems, vs. Doing Nothing)
6. **Free 60-Day Pilot Callout** — purple background, 4 feature tiles, single CTA
7. **Dashboard Preview** — mocked browser window showing KPI row + motor table + alert
8. **Final CTA** — two buttons + contact email/phone inline

---

### `/products` — Product page (`src/app/products/page.tsx`)
Sections:
1. Hero (dark)
2. **Motor Monitoring Subscription** — $200/mo price + feature checklist
3. **Pilot Kit — What's Included** — dark section, 6-item checklist
4. **Optional Voltage Reference** — what it adds + how it works
5. **Connectivity** — cellular/no-IT details
6. **What Gets Detected** — 10-row comparison table (Current Only vs. With Voltage Reference)
7. CTA section (dark) — Pilot + Calculator buttons

---

### `/pilot` — Pilot Program (`src/app/pilot/page.tsx`)
Sections:
1. Hero (dark) with 4 trust pill badges
2. **How the Pilot Works** — 5 numbered steps (01–05)
3. **What We Need From You** — 4 site requirements
4. **Success Criteria** — 4 outcome items
5. **Pricing After the Pilot** — $200/mo/motor box, no contract
6. **Get Your Pilot Started** — direct contact (email + phone) + Contact CTA

---

### `/calculator` — Downtime Cost Estimator (`src/app/calculator/page.tsx`)
Interactive client-side calculator. Sections:
1. Hero (dark) — "What is reactive motor maintenance costing you?"
2. **Two-column layout:**
   - **Left (Inputs):** Facility Profile (industry dropdown, maintenance strategy dropdown), Motor Fleet, Failure History, Cost Per Failure Event
   - **Right (Results):** Live-updating metrics grid (Annual Risk, Avoidable Loss, EdgePredict/Year, Net Benefit), ROI + Payback, Annual Cost Breakdown bar chart, 5-Year Comparison chart, **Lead capture form** (name/company/email → email report via API), Pilot CTA
3. Disclaimer footer text

Default inputs pre-filled: 5 motors, 50 HP avg, 3 failures/year, $2,500/hr production loss, etc.

---

### `/contact` — Contact (`src/app/contact/page.tsx`)
Sections:
1. Hero (dark) — "Talk to an engineer."
2. **Two-column layout:**
   - **Left:** Contact form (name, company, email, phone optional, motors optional, message) → POSTs to `/api/contact`
   - **Right:** Anderson Moffitt card (Founder & CTO, email, phone), General inquiries email, "Good questions to ask us" list, Pilot program callout box

---

### `/security` — Security & IT Overview (`src/app/security/page.tsx`)
Sections:
1. Hero (dark) — targeted at IT/OT evaluators
2. **What It Does / Does Not Do** — two-column checklist
3. **Network and Connectivity** — 3 items (cellular, optional plant network, no bridging)
4. **Data** — 4 items (edge processing, HTTPS, no process data, RBAC)
5. **On-Premises Option** — brief paragraph
6. **Quick Reference table** — 6 rows (Control signals: No, etc.)
7. CTA section (dark) — email + phone + Send a Message button

---

### API Routes

| Route | Method | Purpose |
|---|---|---|
| `/api/contact` | POST | Sends contact form submission to `anderson@edgepredict.io` via Resend |
| `/api/calculator-report` | POST | Sends calculator report to both the user (their email) and Anderson via Resend |

Both use lazy `new Resend(process.env.RESEND_API_KEY)` initialization. Both send from `noreply@edgepredict.io`.

---

## 3. Navigation Structure

### Sticky top nav (`src/components/Nav.tsx`)
- **Logo:** `/og-image.jpg` image (h-14), links to `/`
- **Desktop links:**
  - Product → `/products`
  - Pilot Program → `/pilot`
  - Calculator → `/calculator`
  - Security → `/security`
  - Contact → `/contact`
- **CTA button:** "Start Your Free Pilot" → `/pilot` (purple, right side)
- **Mobile:** Hamburger toggle, same links in dropdown

### Footer (`src/components/Footer.tsx`)
4-column grid:
- **Col 1:** EdgePredict wordmark + tagline
- **Col 2 (Product):** Motor Monitoring, Pilot Program, Downtime Calculator, Security & IT
- **Col 3 (Resources):** Downtime Calculator, Security Overview, Contact Sales
- **Col 4 (Contact):** Anderson Moffitt / Founder & CTO / anderson@edgepredict.io / contact@edgepredict.io / (703) 401-6262

Bottom bar: copyright + Privacy Policy / Terms of Service links (both `href="#"` — not wired up)

---

## 4. Homepage Content Detail

### Hero
- **Eyebrow:** "Electrical Signature Analysis · ESA / MCSA"
- **H1:** "Stop Unplanned Motor Downtime."
- **Subheadline:** "Non-invasive motor health monitoring using Electrical Signature Analysis (ESA). Catch developing issues early — without rewiring, IT involvement, or vibration sensors."
- **Trust bullets:**
  - $200/mo per motor
  - ~20-min install by your electrician
  - Free 60-day pilot
  - Cellular option — no plant network required
- **CTAs:** "Start Your Free Pilot" → `/pilot` | "Try the Downtime Calculator" → `/calculator`
- **Image:** Unsplash photo of maintenance electrician (hardcoded URL)
- **Stat chip overlaid on image:** "$200 / per motor / month · no contracts"

### Problem Section
- "Most motor failures are detected too late — or not at all."
- 3 stat cards: "Tens of thousands" (cost per event), "Run-to-failure" (default strategy), "Hours to days" (downtime)

### How It Works
- Step 01: INSTALL — ~20 min, split-core CTs, no rewiring
- Step 02: MONITOR — ESA/MCSA locally, web dashboard, weekly email summaries
- Step 03: PREVENT — alerts via dashboard/email/text, schedule planned repair

### What It Detects
- Current Sensing (Standard): 6 items
- Enhanced w/ Voltage Reference (Add-on): 5 items

### Why EdgePredict
- vs. Vibration Sensors Only
- vs. Enterprise Systems — references "No 6-month deployment project, no IT integration, no $50K+ contract"
- vs. Doing Nothing — "One prevented motor failure typically pays for more than a year of monitoring"

### Pilot Callout (purple section)
- "Try it on your motors. Walk away if it doesn't prove value."
- 4 feature tiles: Pre-configured kit, No plant network required, Weekly health summaries, 60-day walk-away
- CTA: "Start Your Free Pilot"
- Fine print: "$200/month per motor after pilot · No long-term contract"

### Dashboard Preview
- Mocked browser UI with: Fleet Health 87/100, Motors Online 8/8, Max Unbalance 2.1%, Open Alerts 1
- Motor table: Pump-3 75HP (Normal 94%), Fan-1 40HP (Normal 91%), Conveyor-2 60HP (Watch 71%), Compressor-1 100HP (Normal 88%)
- Alert: "Conveyor-2 — Current unbalance elevated (2.1%)" — 2h ago

### Final CTA
- "Ready to catch issues before they become failures?"
- Buttons: "Start Your Free Pilot" | "Talk to an Engineer"
- Inline contact: `anderson@edgepredict.io` · `(703) 401-6262`

---

## 5. Hardcoded Text Search Results

| Search Term | Found? | Location & Context |
|---|---|---|
| `$149` | **No** | Not present anywhere |
| `$199` | **No** | Not present anywhere |
| `AI-powered` | **No** | Not present anywhere |
| `90%` | **No** | Not present anywhere |
| `2-hour` | **No** | Not present anywhere |
| `90-minute` | **No** | Not present anywhere |
| `mid-market` | **No** | Not present anywhere |
| `302-276-3164` | **No** | Not present anywhere |

> **Note:** The phone number used throughout the site is **(703) 401-6262** (encoded as `7034016262` in `tel:` href attributes). The number `302-276-3164` does not appear anywhere in this codebase.

---

## 6. Components & File Organization

```
src/
├── app/
│   ├── layout.tsx            — Root layout: Nav + Footer + Analytics wrapper
│   ├── ClientBody.tsx        — Client wrapper (strips browser-extension classes on hydration)
│   ├── globals.css           — Tailwind directives + CSS custom properties (shadcn vars)
│   ├── page.tsx              — Homepage
│   ├── products/page.tsx     — Product page
│   ├── pilot/page.tsx        — Pilot program page
│   ├── calculator/page.tsx   — Downtime calculator (client component)
│   ├── contact/page.tsx      — Contact page (client component)
│   ├── security/page.tsx     — Security & IT page
│   └── api/
│       ├── contact/route.ts          — Contact form email handler
│       └── calculator-report/route.ts — Calculator report email handler
├── components/
│   ├── Nav.tsx               — Sticky header with desktop + mobile nav
│   ├── Footer.tsx            — 4-column footer
│   └── ui/
│       ├── badge.tsx         — shadcn Badge component
│       ├── button.tsx        — shadcn Button component (CVA variants)
│       └── card.tsx          — shadcn Card component
└── lib/
    └── utils.ts              — cn() helper (clsx + tailwind-merge)
```

**Key pattern:** All pages are self-contained — no shared section components, no data files. Content is inlined directly as arrays/objects at the top of each page file. The shadcn `ui/` components exist but are **not actually used** by any current page; all buttons/cards are built with inline Tailwind classes.

---

## 7. Deployment

### Primary platform: **Vercel**
- `@vercel/analytics` package is installed and used in the root layout
- No `vercel.json` config file exists — uses Vercel's Next.js auto-detection defaults
- Build command: `next build` (from `package.json` scripts)
- Dev command: `next dev -H 0.0.0.0 --turbopack`

### Also configured for Netlify (legacy or alternative)
`netlify.toml` is present:
```toml
[build]
  command = "bun run build"
  publish = ".next"
[build.environment]
  NETLIFY_NEXT_PLUGIN_SKIP = "true"
[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Environment variables required
- `RESEND_API_KEY` — needed at runtime for both API routes; app builds without it but email calls will fail

---

## 8. Color Theme & Fonts

### Brand Color
- **Primary purple:** `#7655d6` (used for all CTAs, icons, accents, borders)
- **Hover purple:** `#5d3db8`
- **Light purple (text on dark):** `#a78fe8`
- **Purple tint backgrounds:** `#7655d6/5`, `#7655d6/10` (Tailwind opacity modifiers)

### Neutral Palette (all Tailwind defaults)
| Use | Value |
|---|---|
| Page background | `white` / `bg-gray-50` |
| Dark sections | `bg-gray-900` / `bg-gray-950` |
| Body text | `text-gray-900`, `text-gray-700`, `text-gray-600` |
| Muted text | `text-gray-400`, `text-gray-500` |
| Borders | `border-gray-200`, `border-gray-700` |

### Status Colors (in dashboard mock & calculator)
- Green: `text-green-400` / `bg-green-500`
- Yellow: `text-yellow-400` / `bg-yellow-500`
- Red: `bg-red-400`, `text-red-400`

### Fonts
- **No custom font is loaded.** There are no Google Fonts imports, no `next/font` usage, and no `font-family` declarations in `globals.css`.
- The site renders in the browser's **system sans-serif stack** (Tailwind's default: `ui-sans-serif, system-ui, -apple-system, ...`).
- Monospace is used in the dashboard mock via Tailwind's `font-mono` class.
