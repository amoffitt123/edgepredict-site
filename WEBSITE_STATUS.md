# EdgePredict Website Status
Generated: 2026-03-10. Branch: website-redesign.

---

## 9. Build Result

```
npm run build
```

**Result: SUCCESS**

```
▲ Next.js 15.3.9
✓ Compiled successfully in 5.0s
✓ Linting and checking validity of types
✓ Generating static pages (25/25)
```

**Route manifest:**
```
○ /                     197 B   105 kB
○ /_not-found           150 B   101 kB
ƒ /api/calculator-report
ƒ /api/contact
○ /blog                 197 B   105 kB
● /blog/[slug]          197 B   105 kB  (10 static paths)
○ /calculator           4.81 kB 110 kB
○ /contact              3.21 kB 105 kB
○ /monitoring           197 B   105 kB
○ /pilot                197 B   105 kB
○ /platform             197 B   105 kB
○ /pricing              197 B   105 kB
○ /products             150 B   101 kB  (redirect to /monitoring)
○ /security             197 B   105 kB
```

**0 TypeScript errors. 0 build warnings. 0 failed pages.**

---

## 8. Files with Errors

None. All 12 created/modified files compiled and type-checked without errors.

---

## 1. Files Created or Modified

| File | Status | Description |
|------|--------|-------------|
| `src/app/layout.tsx` | Modified | Added Inter font from next/font/google; applied to body className; updated default title, description, keywords, OG title/description |
| `src/app/page.tsx` | Rewritten | Complete 9-section homepage replacing previous 5-section version |
| `src/app/platform/page.tsx` | Rewritten | 5-section platform page with 8-card feature grid (lg:grid-cols-4), sensor connection section |
| `src/app/pricing/page.tsx` | Updated | Updated tier cards (Pro badge to "Most Popular"), 6-question FAQ replacing 4, added competitor comparison table |
| `src/app/monitoring/page.tsx` | Created | New route at /monitoring; full motor monitoring product page (previously only existed at /products) |
| `src/app/products/page.tsx` | Replaced | Now a single-line redirect: `redirect('/monitoring')` |
| `src/app/blog/page.tsx` | Created | Blog index page with dark hero and 3-column post grid |
| `src/app/blog/[slug]/page.tsx` | Created | Dynamic blog post page with generateStaticParams, generateMetadata, category color banner |
| `src/app/not-found.tsx` | Created | Custom 404 page matching dark hero style |
| `src/lib/blog/posts.ts` | Created | 10 blog posts data array with getPostBySlug and getSortedPosts helpers |
| `src/components/Nav.tsx` | Updated | Removed "Home" from desktop links; added "Blog" to desktop and mobile; changed /products → /monitoring |
| `src/components/Footer.tsx` | Updated | Added "Blog" to Resources column; changed /products → /monitoring; updated brand description |

**Files not touched (as instructed):**
`src/app/pilot/page.tsx`, `src/app/calculator/page.tsx`, `src/app/calculator/layout.tsx`,
`src/app/contact/page.tsx`, `src/app/contact/layout.tsx`, `src/app/security/page.tsx`,
`src/app/api/calculator-report/route.ts`, `src/app/api/contact/route.ts`,
`src/app/globals.css`, `src/app/ClientBody.tsx`, `src/lib/utils.ts`,
`src/components/ui/badge.tsx`, `src/components/ui/button.tsx`, `src/components/ui/card.tsx`

---

## 2. Page Routes

### `/` — Homepage
**H1:** "Manage your maintenance. Monitor your motors."
**Sections:** 9

| # | Section | Background |
|---|---------|------------|
| 1 | Hero — split-panel card (MANAGEMENT left / MONITORING right) | bg-white |
| 2 | Social Proof Bar — tagline + 5 logo placeholders | bg-gray-50 |
| 3 | The Two Sides — Management card + Monitoring card | bg-white |
| 4 | The Bridge — purple full-bleed, 3 stat cards | bg-[#7655d6] |
| 5 | Dashboard Mock — browser window mock (id="demo") | bg-gray-50 |
| 6 | Why EdgePredict — 2×2 grid (one card highlighted purple) | bg-white |
| 7 | Pricing Preview — 3 tier cards | bg-gray-50 |
| 8 | How It Works — 3 numbered steps | bg-white |
| 9 | Final CTA — dark, contact info | bg-gray-900 |

**CTA Buttons:**

| Button Text | Destination |
|-------------|-------------|
| Get Started (hero) | https://tools.edgepredict.io/signup |
| Watch Demo (hero) | #demo (anchor, smooth scroll) |
| Explore the Platform → (Section 3 Management card) | /platform |
| Learn About Monitoring → (Section 3 Monitoring card) | /monitoring |
| Get Started (Section 7 Planner) | https://tools.edgepredict.io/signup |
| Get Started (Section 7 Pro) | https://tools.edgepredict.io/signup |
| Start Free Pilot (Section 7 Monitor) | /pilot |
| See full pricing details → (Section 7 bottom) | /pricing |
| Get Started (Section 9) | https://tools.edgepredict.io/signup |
| Start Free Pilot (Section 9) | /pilot |

---

### `/platform` — Maintenance Platform
**H1:** "A real CMMS. Not a compromise."
**Sections:** 5

| # | Section | Background |
|---|---------|------------|
| 1 | Hero — dark, eyebrow "Maintenance Management" | bg-gray-950 |
| 2 | Feature Grid — 8 cards in lg:grid-cols-4 | bg-white |
| 3 | Dashboard Mock — PM schedule + work orders panels | bg-gray-50 |
| 4 | Sensor Connection — "Better Together" | bg-gray-900 |
| 5 | CTA — "Start running your maintenance program." | bg-white |

**Feature cards (Section 2):** Work Orders, PM Scheduling, Inspections, Asset Management, Parts & Inventory, Reporting, Team Management, AI + Automation

**CTA Buttons:**

| Button Text | Destination |
|-------------|-------------|
| Get Started (hero) | https://tools.edgepredict.io/signup |
| See Pricing (hero) | /pricing |
| Learn About Monitoring → (Section 4) | /monitoring |
| Get Started Free (Section 5) | https://tools.edgepredict.io/signup |
| Already have an account? Log in → (Section 5) | https://tools.edgepredict.io/login |

---

### `/monitoring` — Motor Monitoring
**H1:** "Motor Condition Monitoring"
**Sections:** 7

| # | Section | Background |
|---|---------|------------|
| 1 | Hero | bg-gray-950 |
| 2 | Motor Monitoring Subscription — $200/mo card | bg-white |
| 3 | Pilot Kit — what's included | bg-gray-900 |
| 4 | Optional Voltage Reference | bg-white |
| 5 | Connectivity | bg-gray-50 |
| 6 | Detection Table — current vs. voltage reference | bg-white |
| 7 | CTA | bg-gray-950 |

**CTA Buttons:**

| Button Text | Destination |
|-------------|-------------|
| Start Your Free Pilot → (Section 7) | /pilot |
| Try the Downtime Calculator → (Section 7) | /calculator |

---

### `/products` — Legacy redirect
**H1:** None
**Sections:** 0
**Behavior:** Server-side redirect to `/monitoring` via Next.js `redirect()`. Renders as static 307/308. No visible content.

---

### `/pricing` — Pricing
**H1:** "Simple, transparent pricing."
**Sections:** 4

| # | Section | Background |
|---|---------|------------|
| 1 | Hero | bg-gray-950 |
| 2 | Tier Comparison — 3 cards (Planner, Pro, Monitor) | bg-gray-50 |
| 3 | Comparison Table — EdgePredict vs. MaintainX vs. UpKeep | bg-white |
| 4 | FAQ — 6 questions | bg-gray-50 |

**CTA Buttons:**

| Button Text | Destination |
|-------------|-------------|
| Get Started → (Planner tier) | https://tools.edgepredict.io/signup |
| Get Started → (Pro tier) | https://tools.edgepredict.io/signup |
| Start Free Pilot → (Monitor tier) | /pilot |
| Talk to an engineer → (FAQ footer) | /contact |

---

### `/blog` — Blog Index
**H1:** "From the Shop Floor"
**Sections:** 2

| # | Section | Background |
|---|---------|------------|
| 1 | Hero — subtitle "Maintenance engineering insights…" | bg-gray-950 |
| 2 | Post Grid — md:grid-cols-2 lg:grid-cols-3, sorted newest first | bg-white |

**CTA Buttons:** None (post cards link to `/blog/[slug]` via "Read more →" text links)

---

### `/blog/[slug]` — Individual Blog Post
**H1:** Dynamic — post title (e.g., "The $40,000 Motor Failure")
**Sections:** 3

| # | Section | Description |
|---|---------|-------------|
| 1 | Category color banner | h-2 full-width gradient at top of article |
| 2 | Article | Back link, category badge, title, author, date, reading time, paragraphs |
| 3 | Bottom CTA box | "Ready to try EdgePredict?" |

**Category banner gradients:**
- Product: `from-[#7655d6] to-[#5d3db8]`
- Engineering: `from-blue-600 to-blue-800`
- Industry: `from-emerald-600 to-emerald-800`
- Company: `from-gray-700 to-gray-900`

**CTA Buttons:**

| Button Text | Destination |
|-------------|-------------|
| ← All Posts (back link) | /blog |
| Get Started Free | https://tools.edgepredict.io/signup |
| Read More Posts | /blog |

---

### `/not-found` (404)
**H1:** "Page not found."
**Sections:** 1 (full-screen centered)

**CTA Buttons:**

| Button Text | Destination |
|-------------|-------------|
| Go Home | / |

---

## 3. Navigation Structure

### Desktop Nav (visible ≥ md breakpoint, left → right)
| Element | Label | Href | Type |
|---------|-------|------|------|
| Logo | (EdgePredict image) | / | Next/Link |
| Link | Platform | /platform | Next/Link |
| Link | Monitoring | /monitoring | Next/Link |
| Link | Pricing | /pricing | Next/Link |
| Link | Blog | /blog | Next/Link |
| Button | Log In | https://tools.edgepredict.io/login | `<a>` external |
| Button | Get Started | https://tools.edgepredict.io/signup | `<a>` external |

**Log In style:** white bg, border-gray-300, hover:border-[#7655d6] hover:text-[#7655d6]
**Get Started style:** bg-[#7655d6], text-white, hover:bg-[#5d3db8]

### Mobile Nav (hamburger menu, < md breakpoint)
| Element | Label | Href |
|---------|-------|------|
| Link | Platform | /platform |
| Link | Monitoring | /monitoring |
| Link | Pricing | /pricing |
| Link | Blog | /blog |
| Link | Calculator | /calculator |
| Link | Contact | /contact |
| [divider] | — | — |
| Button | Log In | https://tools.edgepredict.io/login |
| Button | Get Started | https://tools.edgepredict.io/signup |

---

## 4. Footer Structure

### Column 1 — Brand
- Wordmark: "EdgePredict" (purple "Edge", white "Predict")
- Description: "Maintenance management and motor monitoring — built as one platform by engineers who've been on the plant floor."

### Column 2 — Product
| Label | Href |
|-------|------|
| Platform | /platform |
| Motor Monitoring | /monitoring |
| Pricing | /pricing |
| Pilot Program | /pilot |
| Security & IT | /security |

### Column 3 — Resources
| Label | Href |
|-------|------|
| Blog | /blog |
| Downtime Calculator | /calculator |
| Contact | /contact |
| Log In | https://tools.edgepredict.io/login |
| Get Started | https://tools.edgepredict.io/signup |

### Column 4 — Contact
| Element | Value |
|---------|-------|
| Name | Anderson Moffitt (plain text) |
| Title | Founder & CTO (plain text) |
| Email | anderson@edgepredict.io → mailto:anderson@edgepredict.io |
| Email | contact@edgepredict.io → mailto:contact@edgepredict.io |
| Phone | (703) 401-6262 → tel:7034016262 |

### Footer Bottom Bar
| Element | Href |
|---------|------|
| © 2026 EdgePredict. All rights reserved. | (text) |
| Privacy Policy | /contact (TODO: no dedicated page yet) |
| Terms of Service | /contact (TODO: no dedicated page yet) |

---

## 5. Blog Posts

Sorted newest first (display order on /blog):

| # | Slug | Title | Category | Date | Est. Word Count |
|---|------|-------|----------|------|-----------------|
| 1 | `why-we-give-the-platform-away` | Why Our CMMS Is Free (The Honest Answer) | Company | 2026-03-21 | ~125 |
| 2 | `the-monitoring-gap` | 100,000 Plants in the Monitoring Gap | Industry | 2026-03-20 | ~100 |
| 3 | `85-percent-have-nothing` | 85% of Small Plants Have No Maintenance System | Industry | 2026-03-19 | ~95 |
| 4 | `inspections-that-create-work-orders` | When an Inspection Fails, What Happens Next? | Product | 2026-03-18 | ~105 |
| 5 | `electrical-signature-analysis-explained` | What Electrical Signature Analysis Actually Detects | Engineering | 2026-03-17 | ~120 |
| 6 | `drag-and-drop-maintenance-scheduling` | Your Monday Morning Scheduling Meeting Just Got Shorter | Product | 2026-03-14 | ~95 |
| 7 | `pm-scheduling-tribal-knowledge` | Tribal Knowledge Is Not a Maintenance Strategy | Product | 2026-03-13 | ~115 |
| 8 | `true-cost-of-motor-failure` | The $40,000 Motor Failure | Industry | 2026-03-12 | ~100 |
| 9 | `ai-work-order-generation` | Type Field Notes. Get a Work Order. | Product | 2026-03-11 | ~110 |
| 10 | `free-cmms-for-plants-that-need-it` | We Built a Free CMMS. Here's What's In It. | Company | 2026-03-10 | ~170 |

**Category breakdown:** Product: 4 posts · Industry: 3 posts · Company: 2 posts · Engineering: 1 post

**Reading times as declared in data:** 5 min (posts 1, 6), 4 min (posts 2, 3, 5, 7, 10), 3 min (posts 4, 8, 9)

**Static paths generated at build time:** All 10 via `generateStaticParams()` in `/blog/[slug]/page.tsx`

---

## 6. External Links

All external links across the entire site (verified in source):

### tools.edgepredict.io
| URL | Appears On | Context |
|-----|-----------|---------|
| https://tools.edgepredict.io/signup | Nav (desktop + mobile) | "Get Started" button |
| https://tools.edgepredict.io/signup | Footer (Resources column) | "Get Started" link |
| https://tools.edgepredict.io/signup | Homepage Section 1 | Hero "Get Started" CTA |
| https://tools.edgepredict.io/signup | Homepage Section 7 | Planner tier "Get Started" |
| https://tools.edgepredict.io/signup | Homepage Section 7 | Pro tier "Get Started" |
| https://tools.edgepredict.io/signup | Homepage Section 9 | Final CTA "Get Started" |
| https://tools.edgepredict.io/signup | /platform Section 1 | Hero "Get Started" |
| https://tools.edgepredict.io/signup | /platform Section 5 | "Get Started Free" |
| https://tools.edgepredict.io/signup | /pricing Section 2 | Planner tier "Get Started →" |
| https://tools.edgepredict.io/signup | /pricing Section 2 | Pro tier "Get Started →" |
| https://tools.edgepredict.io/signup | /blog/[slug] | Post CTA "Get Started Free" |
| https://tools.edgepredict.io/login | Nav (desktop + mobile) | "Log In" button |
| https://tools.edgepredict.io/login | Footer (Resources column) | "Log In" link |
| https://tools.edgepredict.io/login | /platform Section 5 | "Already have an account? Log in →" |

### mailto links
| URL | Appears On | Display Text |
|-----|-----------|--------------|
| mailto:anderson@edgepredict.io | Homepage Section 9 | anderson@edgepredict.io |
| mailto:anderson@edgepredict.io | Footer (Contact column) | anderson@edgepredict.io |
| mailto:contact@edgepredict.io | Footer (Contact column) | contact@edgepredict.io |

### tel links
| URL | Appears On | Display Text |
|-----|-----------|--------------|
| tel:7034016262 | Homepage Section 9 | (703) 401-6262 |
| tel:7034016262 | Footer (Contact column) | (703) 401-6262 |

**Note:** `tools.edgepredict.io` appears as plain text (non-linked) in the homepage dashboard mock's fake browser address bar — this is decorative UI, not a clickable link.

---

## 7. Pricing Mentions

### /pricing page

| Location | Amount | Context |
|----------|--------|---------|
| Tier card — Planner | $0 | "Free forever" — unlimited users, assets, WOs, 3 attachments/WO |
| Tier card — Pro | $99/mo per site | Unlimited attachments, scheduling, AI, reporting, automation |
| Tier card — Monitor | $200/mo per motor | Sensor hardware, ESA, condition PM, cellular, 60-day free pilot |
| FAQ body | $200/mo per motor | "continue at $200/mo per motor" after pilot |
| Comparison table header | $16/user/mo | MaintainX Essential reference price |
| Comparison table header | $20/user/mo | UpKeep Starter reference price |
| FAQ body | $16/user/month | MaintainX reference in FAQ #6 |
| FAQ body | $20/user/month | UpKeep reference in FAQ #6 |

### / (Homepage)

| Location | Amount | Context |
|----------|--------|---------|
| Section 7 — Planner | $0 | "forever" |
| Section 7 — Pro | $99 | "/mo per site" |
| Section 7 — Monitor | $200 | "/mo per motor" |
| Section 6 body text | $500–2,000/motor | Enterprise monitoring systems (Augury, Tractian) comparison |

### /monitoring page

| Location | Amount | Context |
|----------|--------|---------|
| Section 2 subscription card | $200/month per motor | Main pricing display |

### /blog posts (amounts mentioned in article body text)

| Post slug | Amount | Context |
|-----------|--------|---------|
| `true-cost-of-motor-failure` | $20,000 | 8 hours production downtime |
| `true-cost-of-motor-failure` | $6,200 | Expedited parts |
| `true-cost-of-motor-failure` | $4,500 | Emergency contractor labor |
| `true-cost-of-motor-failure` | $5,800 | Scrap and WIP loss |
| `true-cost-of-motor-failure` | $3,500 | Cascade delays |
| `true-cost-of-motor-failure` | $40,000 | Total unplanned failure cost |
| `true-cost-of-motor-failure` | $200/month | EdgePredict sensor monitoring |
| `free-cmms-for-plants-that-need-it` | $50–100K | Enterprise CMMS implementation cost |
| `85-percent-have-nothing` | $50–100K | Enterprise CMMS cost |
| `85-percent-have-nothing` | $16–49/user/mo | Affordable CMMS alternatives |
| `the-monitoring-gap` | $200/month per motor | EdgePredict Monitor tier |
| `the-monitoring-gap` | $500–2,000/month per asset | Enterprise monitoring (Augury, Tractian, SKF, ABB) |
| `the-monitoring-gap` | $50–100K | Enterprise setup cost |
| `why-we-give-the-platform-away` | $200/month per motor | EdgePredict sensor revenue |
| `why-we-give-the-platform-away` | $45K | Example total failure cost ("Pump P-101 failed 3 times") |

---

## Known TODOs in Code

The following are flagged with `// TODO` comments in source files and represent incomplete work:

| File | TODO | Description |
|------|------|-------------|
| `src/app/page.tsx` (Section 2) | Replace logo placeholders | 5 gray `w-24 h-8 bg-gray-200` rectangles; needs real customer logos |
| `src/components/Footer.tsx` | Privacy and Terms pages | "Privacy Policy" and "Terms of Service" both link to `/contact` — no dedicated pages exist |
