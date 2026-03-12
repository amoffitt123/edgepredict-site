# EdgePredict Website Status
Generated: 2026-03-12. Branch: main.

---

## 1. FILE INVENTORY

| File Path | Description |
|-----------|-------------|
| `src/app/layout.tsx` | Root layout — Inter font, global metadata, Nav + Footer wrappers, Vercel Analytics |
| `src/app/globals.css` | Tailwind directives, CSS variables, smooth scroll, chart color tokens |
| `src/app/ClientBody.tsx` | Client component — strips browser-extension class noise on hydration |
| `src/app/page.tsx` | Homepage — 9-section marketing page, split-panel hero, pricing preview |
| `src/app/not-found.tsx` | Custom 404 — dark hero, "Page not found.", Go Home link |
| `src/app/platform/page.tsx` | Platform feature page — 5 sections, 8-card feature grid, dashboard mock |
| `src/app/monitoring/page.tsx` | Motor monitoring product page — 7 sections including ESA comparison table |
| `src/app/products/page.tsx` | Redirect: `/products` → `/monitoring` |
| `src/app/pricing/page.tsx` | Pricing page — 3-tier cards, comparison table vs MaintainX/UpKeep, 6-question FAQ |
| `src/app/pilot/page.tsx` | 60-day free pilot page — 5-step process, requirements, success criteria |
| `src/app/security/page.tsx` | Security & IT overview — what the system does/doesn't do, connectivity, data handling |
| `src/app/calculator/page.tsx` | Interactive ROI/downtime calculator — client component, email lead capture |
| `src/app/calculator/layout.tsx` | Layout wrapper with metadata for /calculator |
| `src/app/contact/page.tsx` | Contact form — client component, success state, direct contact card |
| `src/app/contact/layout.tsx` | Layout wrapper with metadata for /contact |
| `src/app/blog/page.tsx` | Blog index — dark hero, 3-col grid sorted newest first, category badges |
| `src/app/blog/[slug]/page.tsx` | Dynamic blog post pages — generateStaticParams, per-post OG metadata, category banners |
| `src/app/api/calculator-report/route.ts` | POST — receives calculator results, sends report email to user + notification to Anderson via Resend |
| `src/app/api/contact/route.ts` | POST — receives contact form, sends email to anderson@edgepredict.io via Resend |
| `src/components/Nav.tsx` | Sticky nav — desktop (Home/Platform/Monitoring/Pricing/Blog + Log In/Get Started), mobile hamburger |
| `src/components/Footer.tsx` | Dark footer — 4 columns: brand, Product links, Resources links, Contact info |
| `src/components/ui/button.tsx` | Unused shadcn/ui Button scaffold (CVA variants) |
| `src/components/ui/card.tsx` | Unused shadcn/ui Card scaffold |
| `src/components/ui/badge.tsx` | Unused shadcn/ui Badge scaffold |
| `src/lib/utils.ts` | `cn()` helper — clsx + tailwind-merge for dynamic class composition |
| `src/lib/blog/posts.ts` | Blog post data array (10 posts) + `getPostBySlug` / `getSortedPosts` helpers |

---

## 2. PAGE ROUTES — FULL DETAIL

### `/` — Homepage
**H1:** "Manage your maintenance. Monitor your motors."
**Sections (9):**
1. **Hero** — bg-white — CTAs: "Get Started" → `https://tools.edgepredict.io/signup`, "See the Dashboard" → `#demo` (in-page scroll); trust pills: "Free plan available", "No credit card required", "Built by maintenance engineers"
2. **Social Proof Bar** — bg-gray-50 — Text: "Built by maintenance engineers and electrical engineers. Deployed at pharmaceutical, manufacturing, and industrial facilities."
3. **The Two Sides** — bg-white — eyebrow: "One Platform. Two Superpowers." H2: "Management and monitoring, built as one." Two cards; CTAs: "Explore the Platform" → `/platform`, "Learn About Monitoring" → `/monitoring`
4. **The Bridge** — bg-[#7655d6] — H2: "When your sensors talk to your CMMS, everything changes." Three stat cards: "Condition → PM", "Alert → Work Order", "Complete → Verified"
5. **Dashboard Mock** — bg-gray-50 (id="demo") — H2: "Your daily view. Management and monitoring together." Split browser chrome mock showing management + monitoring panels; CTA: "Get Started" → `https://tools.edgepredict.io/signup`; subtext: "This is sample data. Sign up to explore with your own equipment."
6. **Why EdgePredict** — bg-white — H2: "What makes this different." Four cards: "vs. CMMS-Only Tools", "vs. Monitoring-Only Systems", "EdgePredict: Both, as One" (highlighted purple), "Built by People Who've Done the Work"
7. **Pricing Preview** — bg-gray-50 — H2: "Start free. Add sensors when you're ready." Three tier cards (Planner $0, Pro $99/mo, Monitor $200/mo); CTAs: "Get Started" → `https://tools.edgepredict.io/signup` (×2), "Start Free Pilot" → `/pilot`; link: "See full pricing details →" → `/pricing`
8. **How It Works** — bg-white — H2: "Three steps to a better maintenance program." Steps: "Sign up and add equipment", "Run your maintenance program", "Add sensors when ready"
9. **Final CTA** — bg-gray-900 — H2: "Your plant deserves better than guesswork." CTAs: "Get Started" → `https://tools.edgepredict.io/signup`, "Start Free Pilot" → `/pilot`; inline links: `anderson@edgepredict.io`, `(703) 401-6262`

---

### `/platform` — Maintenance Platform
**H1:** "A real CMMS. Not a compromise."
**Sections (5):**
1. **Hero** — bg-gray-950 text-white — CTAs: "Get Started" → `https://tools.edgepredict.io/signup`, "See Pricing" → `/pricing`
2. **Feature Grid** — bg-white — H2: "Built for maintenance teams, not enterprise IT." 8 cards: Work Orders, PM Scheduling, Inspections, Asset Management, Parts & Inventory, Reporting, Team Management, AI + Automation
3. **Dashboard Mock** — bg-gray-50 — H2: "Everything in one place." Dark terminal-style UI mock with PM Schedule + Work Orders panels (mock data)
4. **Sensor Connection** — bg-gray-900 text-white — H2: "Add sensors. Watch your CMMS get smarter." CTA: "Learn About Monitoring" → `/monitoring`
5. **CTA** — bg-white — H2: "Start running your maintenance program." CTAs: "Get Started Free" → `https://tools.edgepredict.io/signup`, "Already have an account? Log in →" → `https://tools.edgepredict.io/login`

---

### `/monitoring` — Motor Monitoring
**H1:** "Motor Condition Monitoring"
**Sections (7):**
1. **Hero** — bg-gray-950 text-white — H1 as above; subtext: "Non-invasive health monitoring for industrial electric motors using Electrical Signature Analysis."
2. **Subscription** — bg-white — H2: "Motor Monitoring Subscription" — $200/month per motor; 8 included items
3. **Pilot Kit** — bg-gray-900 text-white — H2: "Pilot Kit: What's Included" — 6 items with icons
4. **Optional Voltage Reference** — bg-white — H2: "Optional Voltage Reference" — two-column layout: "What It Adds" (5 items) / "How It Works"
5. **Connectivity** — bg-gray-50 — H2: "Connectivity" — 4 bullet points on cellular/network options
6. **ESA Comparison** — bg-white — eyebrow: "How It Compares"; H2: "Current analysis vs. vibration vs. nothing." Three columns: "Run to Failure", "Vibration Sensors", "Current Signature Analysis"
7. **Detection Table** — bg-white — H2: "What Gets Detected" — 10-row table: Current Only vs. With Voltage Reference; footnote: "* Indicators consistent with bearing or rotor faults require maintenance confirmation."
8. **CTA** — bg-gray-950 text-white — H2: "Ready to Get Started?" CTAs: "Start Your Free Pilot" → `/pilot`, "Try the Downtime Calculator" → `/calculator`

---

### `/pricing` — Pricing
**H1:** "Simple, transparent pricing."
**Sections (4):**
1. **Hero** — bg-gray-950 text-white — subtext: "Start free. Add sensors when you're ready."
2. **Tier Cards** — bg-gray-50 — Three cards: Planner (Free, $0), Pro ($99/mo per site), Monitor ($200/mo per motor); CTAs: "Get Started" → `https://tools.edgepredict.io/signup` (×2), "Start Free Pilot" → `/pilot`
3. **Comparison Table** — bg-white — H2: "How we stack up" — 10-row table vs MaintainX Essential ($16/user/mo) and UpKeep Starter ($20/user/mo)
4. **FAQ** — bg-gray-50 — H2: "Common questions" — 6 Q&As; bottom link: "Talk to an engineer →" → `/contact`

---

### `/pilot` — Free 60-Day Pilot
**H1:** "Free 60-Day Pilot Program"
**Sections (5):**
1. **Hero** — bg-gray-950 text-white — 4 trust pills: "No plant network required", "$0 upfront for the pilot", "Cellular option included", "Walk away after 60 days"
2. **How the Pilot Works** — bg-white — H2: "How the Pilot Works" — 5 numbered steps: Choose motors → Ship kit → Install in ~20 minutes → Baseline + monitoring → Decision at 60 days
3. **Requirements** — bg-gray-50 — H2: "What We Need From You" — 4 checklist items
4. **Success Criteria** — bg-white — H2: "Success Criteria" — 4 checklist items
5. **Pricing After Pilot** — bg-gray-900 text-white — H2: "Pricing After the Pilot" — $200/mo per motor, no minimum contract, volume discounts for 5+ motors
6. **Contact CTA** — bg-white — H2: "Get Your Pilot Started" — email `anderson@edgepredict.io`, phone `(703) 401-6262`, CTA: "Send a Message" → `/contact`

---

### `/security` — Security & IT Overview
**H1:** "Security & IT Overview"
**Sections (5):**
1. **Hero** — bg-gray-950 text-white — subtext: "For IT managers and OT engineers evaluating EdgePredict for your facility. Plain language. No marketing."
2. **Does/Doesn't Do** — bg-white — H2: "What the System Does and Does Not Do" — two-column list
3. **Connectivity** — bg-white — H2: "Connectivity Options" — cellular and optional plant network details
4. **Data** — bg-gray-50 — H2: "Data Handling" — local processing, encrypted transmission, RBAC, no process data
5. **CTA** — bg-gray-950 text-white — H2: "Questions for Your IT or OT Team?" — email `anderson@edgepredict.io`, phone `(703) 401-6262`, CTA: "Send a Message" → `/contact`

---

### `/calculator` — Downtime Cost Calculator
**H1:** (No explicit H1 — page uses a card-based layout with section title "Downtime Cost Calculator")
**Sections (4, all within a single-page React component):**
1. **Facility Profile** — Industry dropdown, maintenance strategy dropdown (Reactive: run to failure / Preventive: time-based PM / Some Predictive monitoring), motor count, avg HP
2. **Failure History** — failures/year, avg downtime hours, production value/hr, labor cost/hr, parts/repair cost
3. **Results** — Annual risk, avoidable loss, net benefit, ROI, payback months; 5-year comparison; cost breakdown bars
4. **Lead Capture** — Name, company, email → POST `/api/calculator-report` → Resend email to user + Anderson

---

### `/contact` — Contact
**H1:** (No explicit H1 — uses "Talk to an engineer" as the main heading)
**Sections (2):**
1. **Contact Form** — bg-white — Fields: name, company, email, phone, critical motors count, message; success confirmation state
2. **Direct Contact / Q&A** — bg-gray-50 — Anderson Moffitt card with email/phone; "Good questions to ask us" list (5 items)

---

### `/blog` — Blog Index
**H1:** "From the Shop Floor"
**Sections (2):**
1. **Hero** — bg-gray-950 text-white — subtext: "Engineering notes, product updates, and honest takes on industrial maintenance."
2. **Post Grid** — bg-white — 3-col grid (lg), cards with category badge, reading time, title, excerpt, date, "Read more →" link

---

### `/blog/[slug]` — Blog Post
**H1:** Dynamic — post title
**Sections (3):**
1. **Category Banner** — gradient based on category: Product (purple `from-[#7655d6] to-[#5d3db8]`), Engineering (blue `from-blue-600 to-blue-800`), Industry (emerald `from-emerald-600 to-emerald-800`), Company (gray `from-gray-700 to-gray-900`) — contains back link, category badge, reading time, post title, author + date
2. **Article Body** — bg-white — content split on `\n\n` rendered as `<p>` tags
3. **Bottom CTA** — bg-gray-50 — "Ready to try EdgePredict?" box with "Get Started Free" → `https://tools.edgepredict.io/signup`, "Read more posts →" → `/blog`

---

### `/products` — Redirect
Immediately redirects to `/monitoring` via Next.js `redirect()`.

---

### `/_not-found` — Custom 404
**H1:** "Page not found."
Sections: dark hero with subtext "The page you're looking for doesn't exist."; CTA: "Go Home" → `/`

---

## 3. NAVIGATION

### Desktop Nav (hidden below md breakpoint)
Sticky header, bg-white, shadow-sm, z-50.

| Element | Label | Href | Style |
|---------|-------|------|-------|
| Logo | EdgePredict wordmark (og-image.jpg) | `/` | `h-14 w-auto` |
| Link | Home | `/` | `text-sm text-gray-600 hover:text-gray-900` |
| Link | Platform | `/platform` | same |
| Link | Monitoring | `/monitoring` | same |
| Link | Pricing | `/pricing` | same |
| Link | Blog | `/blog` | same |
| Button | Log In | `https://tools.edgepredict.io/login` | `bg-white border border-gray-300 text-gray-700 hover:border-[#7655d6] hover:text-[#7655d6] rounded-lg px-4 py-2 text-sm` |
| Button | Get Started | `https://tools.edgepredict.io/signup` | `bg-[#7655d6] hover:bg-[#5d3db8] text-white rounded-lg px-4 py-2 text-sm` |

### Mobile Nav (hamburger, md:hidden)
Menu/X toggle. Expanded links:

| Label | Href |
|-------|------|
| Home | `/` |
| Platform | `/platform` |
| Monitoring | `/monitoring` |
| Pricing | `/pricing` |
| Blog | `/blog` |
| Calculator | `/calculator` |
| Contact | `/contact` |
| Log In | `https://tools.edgepredict.io/login` |
| Get Started | `https://tools.edgepredict.io/signup` |

---

## 4. FOOTER

Dark theme (bg-gray-900, text-white), 4-column grid (md:grid-cols-4).

**Column 1 — Brand**
"Maintenance management and motor monitoring, built as one platform by engineers who've been on the plant floor."

**Column 2 — Product**
| Label | Href |
|-------|------|
| Platform | `/platform` |
| Motor Monitoring | `/monitoring` |
| Pricing | `/pricing` |
| Pilot Program | `/pilot` |
| Security & IT | `/security` |

**Column 3 — Resources**
| Label | Href |
|-------|------|
| Blog | `/blog` |
| Downtime Calculator | `/calculator` |
| Contact | `/contact` |
| Log In | `https://tools.edgepredict.io/login` |
| Get Started | `https://tools.edgepredict.io/signup` |

**Column 4 — Contact**
- Anderson Moffitt, Founder & CTO
- `anderson@edgepredict.io`
- `contact@edgepredict.io`
- `(703) 401-6262`

**Footer Bottom**
- © [year] EdgePredict. All rights reserved. | edgepredict.io
- Privacy Policy → `/contact` ⚠ placeholder
- Terms of Service → `/contact` ⚠ placeholder

---

## 5. BLOG POSTS

All posts are in `src/lib/blog/posts.ts`. Sorted newest-first on the blog index.

| # | Slug | Title | Category | Date | Reading Time |
|---|------|-------|----------|------|-------------|
| 1 | `why-we-give-the-platform-away` | Why Our CMMS Is Free (The Honest Answer) | Company | 2026-03-21 | 4 min |
| 2 | `the-monitoring-gap` | 100,000 Plants in the Monitoring Gap | Industry | 2026-03-20 | 4 min |
| 3 | `85-percent-have-nothing` | 85% of Small Plants Have No Maintenance System | Industry | 2026-03-19 | 4 min |
| 4 | `inspections-that-create-work-orders` | When an Inspection Fails, What Happens Next? | Product | 2026-03-18 | 3 min |
| 5 | `electrical-signature-analysis-explained` | What Electrical Signature Analysis Actually Detects | Engineering | 2026-03-17 | 5 min |
| 6 | `drag-and-drop-maintenance-scheduling` | Your Monday Morning Scheduling Meeting Just Got Shorter | Product | 2026-03-14 | 3 min |
| 7 | `pm-scheduling-tribal-knowledge` | Tribal Knowledge Is Not a Maintenance Strategy | Product | 2026-03-13 | 4 min |
| 8 | `true-cost-of-motor-failure` | The $40,000 Motor Failure | Industry | 2026-03-12 | 3 min |
| 9 | `ai-work-order-generation` | Type Field Notes. Get a Work Order. | Product | 2026-03-11 | 4 min |
| 10 | `free-cmms-for-plants-that-need-it` | We Built a Free CMMS. Here's What's In It. | Company | 2026-03-10 | 5 min |

**Excerpts (first ~50 words):**

1. **why-we-give-the-platform-away:** "We make money on sensors. $200/month per motor for hardware that monitors equipment and feeds condition data back into the maintenance schedule. But nobody buys sensors for a problem they don't know they have."
2. **the-monitoring-gap:** "The motor monitoring market has three tiers. Enterprise: Augury, Tractian, SKF, ABB. Starting at $500-2,000/month per asset with $50-100K setup. Works great if your maintenance budget has six figures to spare."
3. **85-percent-have-nothing:** "Less than 15% of small and mid-size manufacturing plants use any CMMS. The other 85% run on whiteboards, spreadsheets, and tribal knowledge. It's not laziness."
4. **inspections-that-create-work-orders:** "Here's how inspections work at most plants. Clipboard. Check boxes. Find a problem. Tell someone. Hope they create a work order. Hope it gets assigned. Hope it gets done. Steps 4 through 7 are where maintenance programs fall apart."
5. **electrical-signature-analysis-explained:** "ESA reads the current flowing through your motor leads. Three clamp-on CTs. No rewiring. No shaft access. No accelerometer mounting on hot rotating equipment."
6. **drag-and-drop-maintenance-scheduling:** "A maintenance supervisor spends about 2 hours every Monday morning figuring out who does what. This is not a great use of anyone's time."
7. **pm-scheduling-tribal-knowledge:** "How does preventive maintenance actually work at most small plants? Someone remembers. Or they don't. 'We grease the bearings every... I think Jim does that quarterly. Jim retired last year.'"
8. **true-cost-of-motor-failure:** "Let's do the math on one unplanned motor failure. A 75 HP pump, bearing seizure. 8 hours of production downtime: $20,000. Expedited parts: $6,200. Emergency contractor labor: $4,500."
9. **ai-work-order-generation:** "Every maintenance manager we've talked to says the same thing: technicians don't fill out work orders because it takes too long. So we built something."
10. **free-cmms-for-plants-that-need-it:** "EdgePredict is a full maintenance management platform. Work orders, PM scheduling, inspections, asset management, parts inventory, reporting, AI-generated work orders. The base plan is free. Not a trial."

---

## 6. EXTERNAL LINKS

| URL / Contact | Pages Appearing On |
|---------------|-------------------|
| `https://tools.edgepredict.io/signup` | `/` (×3), `/platform` (×2), `/pricing` (×2), `/blog/[slug]` (×1) |
| `https://tools.edgepredict.io/login` | `/platform` (×1), Footer |
| `mailto:anderson@edgepredict.io` | `/` (footer CTA), `/pilot`, `/security`, `/contact`, Footer, API email content |
| `mailto:contact@edgepredict.io` | Footer |
| `tel:7034016262` | `/` (footer CTA), `/pilot`, `/security`, `/contact`, Footer |

---

## 7. PRICING MENTIONS

| Page | Section | Amount | What It Refers To |
|------|---------|--------|-------------------|
| `/` | Section 7 Pricing Preview | $0 | Planner tier — free forever |
| `/` | Section 7 Pricing Preview | $99/mo per site | Pro tier |
| `/` | Section 7 Pricing Preview | $200/mo per motor | Monitor tier with sensors |
| `/pricing` | Tier Cards | $0 | Planner tier |
| `/pricing` | Tier Cards | $99/mo per site | Pro tier |
| `/pricing` | Tier Cards | $200/mo per motor | Monitor tier |
| `/pricing` | Comparison Table | $16/user/mo | MaintainX Essential competitor |
| `/pricing` | Comparison Table | $20/user/mo | UpKeep Starter competitor |
| `/pricing` | FAQ | $16/user/month | MaintainX in FAQ answer |
| `/pricing` | FAQ | $20/user/month | UpKeep in FAQ answer |
| `/monitoring` | Section 2 Subscription | $200/month per motor | Motor monitoring subscription |
| `/monitoring` | ESA Comparison | $200/mo per motor | EdgePredict ESA column advantage |
| `/pilot` | Section 5 After Pilot | $200/mo per motor | Post-pilot subscription |
| `/blog/true-cost-of-motor-failure` | Article body | $200/month | Sensor monitoring cost justification |
| `/blog/why-we-give-the-platform-away` | Article body | $200/month per motor | Sensor revenue model explanation |
| `/blog/the-monitoring-gap` | Article body | $200/month per motor | EdgePredict vs enterprise pricing |
| `/blog/the-monitoring-gap` | Article body | $500-2,000/month per asset | Enterprise competitors (Augury, Tractian, SKF, ABB) |

---

## 8. IMAGES AND VISUAL ASSETS

| Asset | Location | What It Shows | Pages Used |
|-------|----------|---------------|------------|
| `/og-image.jpg` | `public/og-image.jpg` | EdgePredict logo — used as nav logo image | Nav (every page), OG image tag in root layout |
| `/favicon.ico` | `public/favicon.ico` | Site favicon | All pages via layout.tsx |
| `/favicon-16x16.png` | `public/favicon-16x16.png` | Favicon 16px | All pages via layout.tsx |
| `/favicon-32x32.png` | `public/favicon-32x32.png` | Favicon 32px | All pages via layout.tsx |
| `/apple-touch-icon.png` | `public/apple-touch-icon.png` | Apple touch icon 180px | All pages via layout.tsx |
| `/android-chrome-192x192.png` | `public/` | Android PWA icon 192px | site.webmanifest |
| `/android-chrome-512x512.png` | `public/` | Android PWA icon 512px | site.webmanifest |
| `https://www.edgepredict.io/og-image.jpg` | External URL (same file) | OG/Twitter card image | root layout metadata, blog post generateMetadata |

**Note:** All "dashboard" visuals are HTML/CSS mocks — there are no screenshot images on any page.

---

## 9. META TAGS BY PAGE

### Root Layout (`src/app/layout.tsx`) — applies to all pages unless overridden
- **title:** `EdgePredict — Maintenance Management & Motor Monitoring`
- **description:** `The only platform where your CMMS and your sensors are one system. Free maintenance management with optional motor monitoring sensors. PM scheduling, work orders, asset tracking, ESA monitoring.`
- **keywords:** `CMMS, maintenance management, motor monitoring, predictive maintenance, preventive maintenance software, work order management, PM scheduling, electrical signature analysis, free CMMS, MaintainX alternative`
- **metadataBase:** `https://www.edgepredict.io`
- **OG title:** same as title
- **OG description:** same as description
- **OG url:** `https://www.edgepredict.io`
- **OG image:** `https://www.edgepredict.io/og-image.jpg` (1200×630)
- **Twitter card:** `summary_large_image`
- **robots:** index: true, follow: true

### `/` — Homepage (overrides root with same values — no separate metadata export in page.tsx)
- **title:** `EdgePredict — Maintenance Management & Motor Monitoring`
- **description:** `The only platform where your CMMS and your sensors are one system. Free maintenance management with optional motor monitoring sensors.`

### `/platform`
- **title:** `Maintenance Platform — EdgePredict`
- **description:** `PM scheduling, work orders, asset management, inspections, parts inventory, reporting, and AI-generated work orders. Free for any plant size.`

### `/monitoring`
- **title:** `Motor Monitoring — EdgePredict`
- **description:** `Non-invasive motor monitoring using electrical signature analysis. $200/mo per motor. 20-minute install. Cellular connectivity. Free 60-day pilot.`

### `/pricing`
- **title:** `Pricing — EdgePredict`
- **description:** `Simple, transparent pricing. Free maintenance management platform with unlimited users and work orders. $99/mo for Pro. $200/mo per motor for sensor monitoring.`

### `/pilot`
- **title:** `Free 60-Day Pilot — EdgePredict`
- **description:** `Start a free 60-day motor condition monitoring pilot. No plant network required. Walk away if no value.`

### `/security`
- **title:** `Security & IT Overview — EdgePredict`
- **description:** `Plain-English security overview for plant IT and OT teams. Read-only monitoring. No control signals. Cellular option requires no plant network access.`

### `/calculator` (via `calculator/layout.tsx`)
- **title:** `Downtime Cost Calculator — EdgePredict`
- **description:** (not set in layout — inherits root description)

### `/contact` (via `contact/layout.tsx`)
- **title:** `Contact — EdgePredict`
- **description:** `Talk to an engineer about motor monitoring and maintenance management. No sales deck. Just a direct conversation about your facility.`

### `/blog`
- **title:** `Blog — EdgePredict`
- **description:** (inherits root)

### `/blog/[slug]` — Dynamic per post
- **title:** `[Post Title] — EdgePredict Blog`
- **description:** post excerpt
- **OG title:** `[Post Title] — EdgePredict Blog`
- **OG description:** post excerpt
- **OG type:** `article`
- **Twitter card:** `summary_large_image`
- **Twitter title/description:** same as OG

---

## 10. PRODUCT CLAIMS

### Detection / Monitoring Capabilities
- Phase imbalance detection (current-only)
- Phase loss detection — described as "caught instantly" (current-only)
- Load anomalies / instability (current-only)
- Overload / near-stall conditions (current-only)
- Mechanical fault indicators from current signature* (current-only, *requires maintenance confirmation)
- Electrical fault indicators* (current-only, *requires maintenance confirmation)
- Voltage unbalance (requires voltage reference add-on)
- Undervoltage monitoring (requires voltage reference add-on)
- Power factor / kVAR tracking (requires voltage reference add-on)
- Frequency drift alerts (requires voltage reference add-on)
- Supply quality anomaly identification (requires voltage reference add-on)

### Install / Hardware Claims
- "20-minute non-invasive install" — split-core CTs, clamp-on motor feeder conductors
- "No rewiring. No shaft access. No accelerometer mounting on hot rotating equipment."
- Cellular option: 4G LTE, "no plant Wi-Fi or OT network connection required"
- Pre-configured edge gateway ("plug in, no IT setup")
- "No inbound firewall rules required"
- Optional plant network: outbound HTTPS only

### Pricing Claims
- Free plan: "Not a trial. Not 'free for 30 days.' Free."
- Unlimited users, unlimited assets, unlimited work orders on free plan
- 3 attachments per work order on free plan
- Pro: $99/month per site
- Monitor: $200/month per motor — "includes all Pro features"
- 60-day free pilot: "If we don't surface useful condition data in 60 days, return the hardware."
- Volume discounts for 5+ motors
- No minimum contract after pilot

### Market / Competitive Claims
- "85% of small plants have no maintenance system" (run on whiteboards/spreadsheets)
- "Less than 15% of small and mid-size manufacturing plants use any CMMS"
- Enterprise competitors start at $500-2,000/month per asset with $50-100K setup: Augury, Tractian, SKF, ABB
- MaintainX starts at $16/user/month
- UpKeep starts at $20/user/month
- "Over 100,000 facilities" estimated in the monitoring gap
- "Emergency repairs cost 3-5x what planned maintenance costs"
- $40,000 total cost example for a single 75 HP pump bearing seizure failure (8 hrs downtime)
- "$200/month divided by $40,000 = 200 months — over 16 years of monitoring paid for by one prevented failure"
- AI work order generator: "turns a paragraph of field notes into a structured work order in about 3 seconds"
- Monday morning scheduling: "about 100 hours a year...replaced by a 10-second button click"
- Typical CMMS implementation: $50-100K enterprise

### Team / Company Claims
- "Our team designed the sensor PCB, wrote the ESP32 firmware, and deployed our first pilot by hand."
- "We're electrical engineers and reliability professionals, not just developers."
- "Deployed at pharmaceutical, manufacturing, and industrial facilities."
- Founder: Anderson Moffitt (Founder & CTO), contact info public

---

## 11. ISSUES, PLACEHOLDERS, AND TODOs

| Severity | File | Issue |
|----------|------|-------|
| ⚠ Low | `src/components/Footer.tsx:67` | `{/* TODO: Create dedicated privacy and terms pages */}` — both "Privacy Policy" and "Terms of Service" links route to `/contact` |
| ⚠ Low | `src/components/ui/button.tsx` | Unused shadcn/ui scaffold — not imported or rendered anywhere |
| ⚠ Low | `src/components/ui/card.tsx` | Unused shadcn/ui scaffold — not imported or rendered anywhere |
| ⚠ Low | `src/components/ui/badge.tsx` | Unused shadcn/ui scaffold — not imported or rendered anywhere |
| ℹ Info | `src/app/platform/page.tsx:73` | Mock data uses em dash in WO title ("Quarterly PM — Compressor-1") — intentional UI mock data |
| ℹ Info | `src/app/platform/page.tsx:194` | Mock data uses em dash in panel header ("PM Schedule — June 2025") — intentional UI mock data |
| ℹ Info | `src/app/calculator/layout.tsx` | No custom description meta — inherits root layout description, not calculator-specific |
| ℹ Info | `src/app/blog/page.tsx` | No per-page OG metadata — inherits root |
| ℹ Info | Blog posts | All dates are in 2026 (future-dated) — intentional or needs review? |
| ℹ Info | `/contact` page | No explicit H1 tag — uses a visually large heading but not marked as `<h1>` |
| ℹ Info | `/calculator` page | No explicit H1 tag — uses card-based layout without semantic H1 |

---

## 12. MOBILE RESPONSIVENESS

| Page | Breakpoints Used | Notes |
|------|-----------------|-------|
| `/` (homepage) | `md:`, `lg:` | Hero: `lg:grid-cols-2`; split panel card: `md:flex-row`; trust pills: `md:flex-row`; pricing: `lg:grid-cols-3`; how-it-works: `md:grid-cols-3`; bridge stats: `md:grid-cols-3` |
| `/platform` | `md:`, `lg:` | Feature grid: `md:grid-cols-2 lg:grid-cols-4`; dashboard mock: `lg:grid-cols-2`; hero CTAs: `flex-wrap` |
| `/monitoring` | `md:` | Voltage reference: `md:grid-cols-2`; ESA comparison: `md:grid-cols-3`; detection table: `overflow-x-auto` |
| `/pricing` | `lg:` | Tier cards: `lg:grid-cols-3`; comparison table: `overflow-x-auto` |
| `/pilot` | none significant | Single-column layout throughout; CTAs use `sm:flex-row` |
| `/security` | `md:` | Does/Doesn't: `md:grid-cols-2`; quick reference table: `overflow-x-auto` |
| `/calculator` | `md:`, `lg:` | Inputs/results split: `lg:grid-cols-2`; charts stacked on mobile |
| `/contact` | `md:` | Form + contact card: `md:grid-cols-2` |
| `/blog` | `md:`, `lg:` | Post grid: `md:grid-cols-2 lg:grid-cols-3` |
| `/blog/[slug]` | `md:` | Article is single-column, max-width constrained |
| Nav | `md:` | Desktop nav hidden below md; hamburger shown below md |
| Footer | `md:` | 4-col grid collapses to single column below md |

**Potential overflow flags:**
- `/pricing` comparison table — uses `overflow-x-auto` ✓ handled
- `/monitoring` detection table — uses `overflow-x-auto` ✓ handled
- `/security` quick reference table — uses `overflow-x-auto` ✓ handled
- `/` hero split-panel card — `md:flex-row` means it stacks on mobile ✓ handled
- Calculator 5-year comparison bar chart — no `overflow-x-auto` wrapper; bars use percentage widths so should scale, but worth verifying on narrow viewports

---

## 13. FULL FILE TREE — `src/`

```
src/
├── app/
│   ├── layout.tsx                    Root layout: font, metadata, Nav+Footer, Analytics
│   ├── globals.css                   Tailwind base, CSS vars, smooth scroll
│   ├── ClientBody.tsx                Hydration class-cleanup client component
│   ├── page.tsx                      Homepage (9 sections)
│   ├── not-found.tsx                 Custom 404 page
│   ├── platform/
│   │   └── page.tsx                  Platform feature page (5 sections)
│   ├── monitoring/
│   │   └── page.tsx                  Motor monitoring product page (7 sections + CTA)
│   ├── products/
│   │   └── page.tsx                  Redirect: /products → /monitoring
│   ├── pricing/
│   │   └── page.tsx                  Pricing page (3 tiers, comparison table, FAQ)
│   ├── pilot/
│   │   └── page.tsx                  60-day pilot program page (5 sections)
│   ├── security/
│   │   └── page.tsx                  Security & IT overview (5 sections)
│   ├── calculator/
│   │   ├── layout.tsx                Metadata wrapper for /calculator
│   │   └── page.tsx                  Interactive ROI calculator (client component)
│   ├── contact/
│   │   ├── layout.tsx                Metadata wrapper for /contact
│   │   └── page.tsx                  Contact form + direct contact card (client component)
│   ├── blog/
│   │   ├── page.tsx                  Blog index (dark hero + 3-col post grid)
│   │   └── [slug]/
│   │       └── page.tsx              Dynamic blog post (generateStaticParams + generateMetadata)
│   └── api/
│       ├── calculator-report/
│       │   └── route.ts              POST: send calculator report emails via Resend
│       └── contact/
│           └── route.ts              POST: forward contact form submission via Resend
├── components/
│   ├── Nav.tsx                       Sticky nav (desktop + mobile hamburger) — client component
│   ├── Footer.tsx                    Dark 4-column footer
│   └── ui/
│       ├── badge.tsx                 Unused shadcn/ui Badge scaffold
│       ├── button.tsx                Unused shadcn/ui Button scaffold
│       └── card.tsx                  Unused shadcn/ui Card scaffold
└── lib/
    ├── utils.ts                      cn() helper: clsx + tailwind-merge
    └── blog/
        └── posts.ts                  BlogPost interface, 10-post array, getPostBySlug, getSortedPosts
```

---

## 14. BUILD RESULT

```
> next build

▲ Next.js 15.3.9

✓ Compiled successfully in 2000ms
✓ Linting and checking validity of types
✓ Generating static pages (25/25)
✓ Finalizing page optimization

Route (app)                                   Size  First Load JS
┌ ○ /                                        197 B         105 kB
├ ○ /_not-found                              150 B         101 kB
├ ƒ /api/calculator-report                   150 B         101 kB
├ ƒ /api/contact                             150 B         101 kB
├ ○ /blog                                    197 B         105 kB
├ ● /blog/[slug]                             197 B         105 kB
│   ├ /blog/why-we-give-the-platform-away
│   ├ /blog/the-monitoring-gap
│   ├ /blog/85-percent-have-nothing
│   └ [+7 more paths]
├ ○ /calculator                             4.8 kB         110 kB
├ ○ /contact                                3.2 kB         105 kB
├ ○ /monitoring                              197 B         105 kB
├ ○ /pilot                                   197 B         105 kB
├ ○ /platform                                197 B         105 kB
├ ○ /pricing                                 197 B         105 kB
├ ○ /products                                150 B         101 kB
└ ○ /security                                197 B         105 kB

First Load JS shared by all: 101 kB
  ├ chunks/4bd1b696-3dbde35d4f172e4c.js    53.2 kB
  ├ chunks/684-36e9ce07296f368e.js         46.1 kB
  └ other shared chunks (total)            1.99 kB

○  Static    — 17 pages prerendered as static HTML
●  SSG       — /blog/[slug]: 10 paths prerendered via generateStaticParams
ƒ  Dynamic   — 2 API routes server-rendered on demand

Result: PASS — 0 errors, 0 warnings.
Total pages: 25 (17 static + 10 blog SSG + 2 API routes = 29 routes total)
```

---

*Last updated: 2026-03-12. Generated by reading full source tree against live build output.*
