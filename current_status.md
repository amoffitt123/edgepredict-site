# EdgePredict Site — Current Status Audit
**Generated:** 2026-03-04
**Auditor:** Claude Code (source files read; no live browser test)
**Scope:** All files in `/src`, public assets, config files
**Status:** Reflects current codebase after all recent changes

---

## 1. Site Map

---

### `/` — Homepage

**Page H1:** "Stop Unplanned Motor Downtime."
**Page metadata title:** "EdgePredict — Stop Unplanned Motor Downtime"

#### Sections in order

| # | Section Name | Background | Est. Word Count |
|---|---|---|---|
| 1 | Hero | white (`bg-white`, `py-20 lg:py-28`) | ~90 |
| 2 | Platform Preview | light gray (`bg-gray-50`) | ~80 |
| 3 | The Problem | dark (`bg-gray-900 text-white`) | ~75 |
| 4 | How It Works | white | ~110 |
| 5 | What It Detects | light gray (`bg-gray-50`) | ~130 |
| 6 | Why EdgePredict | white | ~110 |
| 7 | Free 60-Day Pilot Callout | brand purple (`bg-[#7655d6]`) | ~75 |
| 8 | Dashboard Preview (mocked UI) | light gray (`bg-gray-50`) | ~30 |
| 9 | Final CTA | white | ~40 |

#### Hero section detail
- **Eyebrow:** "Electrical Signature Analysis · ESA / MCSA"
- **H1:** "Stop Unplanned Motor Downtime." (with "Motor Downtime." in `text-[#7655d6]`)
- **Subheadline:** "Free maintenance management platform with PM scheduling, work orders, and asset tracking. Add non-invasive motor monitoring when you're ready."
- **Trust bullets:** "Free PM planner — no credit card required" / "$200/mo per motor for live monitoring" / "~20-min sensor install by your electrician" / "Cellular — no plant network required"
- **Right column image:** Unsplash photo with overlaid stat chip: "$200 / per motor / month · no contracts"

#### Platform Preview section detail
- **Eyebrow:** "How It's Structured"
- **H2:** "One platform. Three tiers. Start free."
- **Card 1 — Planner:** green "Free" badge, "PM scheduling, work orders, asset management. Everything a small plant needs."
- **Card 2 — Pro $99/mo:** amber "Coming Soon" badge, "Multi-user, advanced reporting, parts inventory. For plants with teams."
- **Card 3 — Monitor $200/mo:** purple "Sensors" badge, purple border/glow, "Live sensor data, dynamic PM, automated alerts. Predictive maintenance."

#### Pilot Callout section detail
- **H2:** "Try it on your motors. Walk away if it doesn't prove value."
- **4 feature tiles:** Pre-configured kit / No plant network required / Weekly health summaries / 60-day walk-away
- **Fine print:** "$200/month per motor after pilot · No long-term contract"
- **Platform fallback line:** "Not ready for sensors yet? Start with our free maintenance platform →" (links to /platform)

#### Final CTA section detail
- **H2:** "Ready to take control of your maintenance?"
- **Subtext:** "Start with our free platform. Add sensors when you need them."
- **Inline contact:** anderson@edgepredict.io · (703) 401-6262

#### CTA buttons

| Button Text | Destination | Style |
|---|---|---|
| Start Free | https://tools.edgepredict.io/signup | Purple filled (`<a>` external) |
| See How Monitoring Works | /products | Outline |
| Start Free (Platform Preview, Planner card) | https://tools.edgepredict.io/signup | Text link / purple |
| See details (Platform Preview, Pro card) | /pricing | Text link / gray hover purple |
| Start Pilot (Platform Preview, Monitor card) | /pilot | Text link / purple |
| See the math (Why EdgePredict section) | /calculator | Text link / purple |
| Start Your Free Pilot (Pilot Callout) | /pilot | White filled on purple bg |
| Start with our free maintenance platform → | /platform | Text link / `text-purple-200 underline` |
| Start Free (Final CTA) | https://tools.edgepredict.io/signup | Purple filled (`<a>` external) |
| Start Your Free Pilot (Final CTA) | /pilot | Outline |
| Talk to an Engineer (Final CTA) | /contact | Text link / gray-500 hover purple |

#### External links

| URL | Context |
|---|---|
| https://tools.edgepredict.io/signup | Hero CTA, Platform Preview card 1, Final CTA |
| https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?... | Hero `<img>` src (not clickable) |
| mailto:anderson@edgepredict.io | Final CTA inline contact |
| tel:7034016262 | Final CTA inline contact |

---

### `/products` — Motor Monitoring

**Page H1:** "Motor Condition Monitoring"
**Page metadata title:** "Motor Monitoring — EdgePredict"

#### Sections in order

| # | Section Name | Background | Est. Word Count |
|---|---|---|---|
| 1 | Hero | near-black (`bg-gray-950 text-white`) | ~20 |
| 2 | Motor Monitoring Subscription | white | ~35 + 8-item list |
| 3 | Pilot Kit — What's Included | dark (`bg-gray-900 text-white`) | ~30 + 6-item list |
| 4 | Optional Voltage Reference | white | ~60 + 5 items |
| 5 | Connectivity | light gray (`bg-gray-50`) | ~50 + 4 items |
| 6 | What Gets Detected (table) | white | ~30 + 10-row table |
| 7 | Ready to Get Started? (CTA) | near-black (`bg-gray-950 text-white`) | ~30 |

#### CTA buttons

| Button Text | Destination | Style |
|---|---|---|
| Start Your Free Pilot | /pilot | Purple filled |
| See the Downtime Calculator | /calculator | Outline (dark bg) |

#### External links
None.

---

### `/pilot` — Pilot Program

**Page H1:** "Free 60-Day Pilot Program"
**Page metadata title:** "Free 60-Day Pilot — EdgePredict"

#### Sections in order

| # | Section Name | Background | Est. Word Count |
|---|---|---|---|
| 1 | Hero | near-black (`bg-gray-950 text-white`) | ~35 + 4 trust pills |
| 2 | How the Pilot Works | white | ~155 (5 numbered steps) |
| 3 | What We Need From You | light gray (`bg-gray-50`) | ~35 + 4 items |
| 4 | Success Criteria | white | ~25 + 4 items |
| 5 | Pricing After the Pilot | dark (`bg-gray-900 text-white`) | ~25 |
| 6 | Get Your Pilot Started (CTA) | white | ~30 + inline contact |

#### Trust pills (hero):
"No plant network required" / "$0 upfront for the pilot" / "Cellular option included" / "Walk away after 60 days"

#### CTA buttons

| Button Text | Destination | Style |
|---|---|---|
| Send a Message | /contact | Purple filled |

#### External links

| URL | Context |
|---|---|
| mailto:anderson@edgepredict.io | CTA section |
| tel:+17034016262 | CTA section |

---

### `/calculator` — Downtime Cost Estimator

**Page H1:** "What is reactive motor maintenance costing you?"
**Page metadata title:** "Downtime Cost Calculator — EdgePredict" *(from layout.tsx)*

#### Sections in order

| # | Section Name | Background | Est. Word Count |
|---|---|---|---|
| 1 | Hero | dark (`bg-gray-900 text-white`) | ~35 |
| 2 | Inputs — Facility Profile | white card in gray-50 | dropdowns |
| 2 | Inputs — Motor Fleet | white card | 2 fields |
| 2 | Inputs — Failure History | white card | 2 fields |
| 2 | Inputs — Cost Per Failure Event | white card | 4 fields |
| 3 | Results — Summary metrics | dark card | live-computed |
| 3 | Results — Annual Cost Breakdown | white card | bar chart |
| 3 | Results — 5-Year Comparison | white card | bar chart |
| 3 | Results — Lead Capture form | purple card | ~30 |
| 3 | Results — Pilot CTA | gray-50 card | ~20 |
| 4 | Disclaimer | gray-50 | ~55 |

#### Default input values pre-filled
5 motors · 50 HP avg · 3 failures/yr · 8 hrs downtime/failure · $2,500/hr production loss · $5,000 scrap/event · $3,000 labor/event · $4,000 parts/event

#### CTA buttons

| Button Text | Destination | Style |
|---|---|---|
| Email me the full report | POST /api/calculator-report | Purple filled (form submit) |
| Start Your Free Pilot | /pilot | Purple filled |

#### External links
None. (mailto to anderson@edgepredict.io appears only in error fallback text, not a visible link)

---

### `/contact` — Contact

**Page H1:** "Talk to an engineer."
**Page metadata title:** "Contact — EdgePredict" *(from layout.tsx)*

#### Sections in order

| # | Section Name | Background | Est. Word Count |
|---|---|---|---|
| 1 | Hero | dark (`bg-gray-900 text-white`) | ~30 |
| 2 | Contact form (left column) | white | form fields |
| 2 | Direct contact (right column) | white | ~60 |

#### CTA buttons

| Button Text | Destination | Style |
|---|---|---|
| Send Message | POST /api/contact | Purple filled (form submit) |

#### External links

| URL | Context |
|---|---|
| mailto:anderson@edgepredict.io | Direct contact card + form error text |
| tel:7034016262 | Direct contact card |
| mailto:contact@edgepredict.io | General inquiries box |

---

### `/security` — Security & IT Overview

**Page H1:** "Security & IT Overview"
**Page metadata title:** "Security & IT Overview — EdgePredict"

#### Sections in order

| # | Section Name | Background | Est. Word Count |
|---|---|---|---|
| 1 | Hero | near-black (`bg-gray-950 text-white`) | ~25 |
| 2 | What It Does / Does Not Do | white | ~80 (4 + 5 items) |
| 3 | Network and Connectivity | light gray (`bg-gray-50`) | ~80 (3 items) |
| 4 | Data | white | ~100 (4 items) |
| 5 | On-Premises Option | light gray (`bg-gray-50`) | ~60 |
| 6 | Quick Reference Table | white | 6-row table |
| 7 | Questions for IT/OT Team (CTA) | near-black (`bg-gray-950 text-white`) | ~40 |

#### CTA buttons

| Button Text | Destination | Style |
|---|---|---|
| Send a Message | /contact | Purple filled |

#### External links

| URL | Context |
|---|---|
| mailto:anderson@edgepredict.io | CTA section |
| tel:+17034016262 | CTA section |

---

### `/platform` — Free Maintenance Platform

**Page H1:** "Your entire maintenance program. One platform."
**Page metadata title:** "Free Maintenance Platform — EdgePredict"

#### Sections in order

| # | Section Name | Background | Est. Word Count |
|---|---|---|---|
| 1 | Hero | near-black (`bg-gray-950 text-white`) | ~45 |
| 2 | Feature Grid (6 cards) | light gray (`bg-gray-50`) | ~175 |
| 3 | How It Works (3 steps) | white | ~95 |
| 4 | Dashboard Mock (PM + Work Orders) | light gray (`bg-gray-50`) | ~25 |
| 5 | Free Tier callout (9-item grid) | white | ~40 |
| 6 | CTA | brand purple (`bg-[#7655d6]`) | ~30 |

#### Feature cards
- **PM Scheduling** — green "Free" badge
- **Work Orders** — green "Free" badge
- **Asset Management** — green "Free" badge
- **AI Work Order Generator** — green "Free" badge
- **Maintenance Requests** — green "Free" badge
- **Sensor Integration** — purple "Monitor Tier" badge

#### How It Works steps
- 01: "Sign up free. Add your equipment." — create account, add assets manually or CSV
- 02: "Get PM schedules. Manage work orders daily." — auto PM schedules, assign work orders
- 03: "Add sensors when you're ready." — EdgePredict hardware, live condition data

#### Free tier includes (9 items)
Unlimited assets / Unlimited work orders / PM scheduling & calendar / AI work order generation / Maintenance request workflow / CSV asset import / Email notifications / Multi-user access / Full audit trail

#### CTA buttons

| Button Text | Destination | Style |
|---|---|---|
| Start Free (hero) | https://tools.edgepredict.io/signup | Purple filled |
| See Pricing (hero) | /pricing | Outline (dark bg) |
| Create Free Account (CTA section) | https://tools.edgepredict.io/signup | White filled on purple bg |
| Sign in → (CTA section) | https://tools.edgepredict.io/login | Text link / `text-purple-300` |

#### External links

| URL | Context |
|---|---|
| https://tools.edgepredict.io/signup | Hero CTA + CTA section |
| https://tools.edgepredict.io/login | "Already have an account?" in CTA section |

---

### `/pricing` — Pricing

**Page H1:** "Simple, transparent pricing."
**Page metadata title:** "Pricing — EdgePredict"

#### Sections in order

| # | Section Name | Background | Est. Word Count |
|---|---|---|---|
| 1 | Hero | near-black (`bg-gray-950 text-white`) | ~10 |
| 2 | Tier Comparison (3 cards) | light gray (`bg-gray-50`) | ~175 |
| 3 | FAQ (4 questions) | white | ~130 |

#### Tier cards

**Planner** — green "Free" badge
- Price: $0 / "Free forever"
- Description: "Everything a small plant needs to run a real maintenance program."
- Features (8): Asset management (unlimited), Auto-generated PM schedules, PM calendar with risk scoring, Work order management, Maintenance request workflow, AI work order generator, CSV import / export, Single user
- CTA: "Start Free" → https://tools.edgepredict.io/signup (purple filled)

**Pro** — amber "Coming Soon" badge
- Price: $99 / "/mo per site"
- Description: "For plants with maintenance teams that need collaboration."
- Features prefix: "Everything in Planner, plus:"
- Features (6): Multi-user with role-based access, 6 roles (admin/supervisor/planner/scheduler/technician/requestor), Advanced reporting and analytics, Parts inventory management, Technician mobile view, Priority support
- CTA: "Join Waitlist" → /contact (outline)

**Monitor** — purple "Sensor Tier" badge, purple border + glow
- Price: $200 / "/mo per motor"
- Description: "Live motor health monitoring that makes your PM program predictive."
- Features prefix: "Everything in Pro, plus:"
- Features (8): Sensor hardware kit included, Real-time current signature analysis, Live dashboard with phase currents and health scores, Dynamic PM scheduling (sensor-driven), Automated alerts and work order generation, Cellular connectivity — no IT required, 20-minute non-invasive install, 60-day free pilot
- CTA: "Start Your Free Pilot" → /pilot (purple filled)

#### FAQ questions
1. "Is the free tier really free?" — Yes, no credit card, no time limit, no feature throttling.
2. "What happens after the 60-day pilot?" — Continue at $200/mo per motor or return hardware.
3. "Can I start free and add sensors later?" — Yes, that's exactly how it's designed.
4. "Do I need IT involvement?" — No, cellular connectivity, no plant network.

#### CTA buttons

| Button Text | Destination | Style |
|---|---|---|
| Start Free (Planner) | https://tools.edgepredict.io/signup | Purple filled |
| Join Waitlist (Pro) | /contact | Outline |
| Start Your Free Pilot (Monitor) | /pilot | Purple filled |
| Talk to an engineer → | /contact | Text link / purple |

#### External links

| URL | Context |
|---|---|
| https://tools.edgepredict.io/signup | Planner tier CTA |

---

## 2. Navigation

### Desktop nav — items in exact rendered order (left to right)

| Position | Element | Label | Href | Type |
|---|---|---|---|---|
| Left | Logo image | (EdgePredict logo `/og-image.jpg`) | / | Internal |
| 1 | Link | Platform | /platform | Internal |
| 2 | Link | Monitoring | /products | Internal |
| 3 | Link | Pricing | /pricing | Internal |
| 4 | Link | Calculator | /calculator | Internal |
| 5 | Link | Contact | /contact | Internal |
| 6 | Text link | Log In | https://tools.edgepredict.io/login | **External** `<a>` |
| 7 | Button | Start Free | https://tools.edgepredict.io/signup | **External** `<a>`, purple filled |

**Log In style:** `text-sm text-gray-600 hover:text-[#7655d6]` — plain text, no button chrome
**Start Free style:** `px-4 py-2 bg-[#7655d6] text-white rounded` — purple button

### Mobile nav (hamburger dropdown)

Same 5 nav links stacked vertically, then a `<hr>` divider, then:
- **Log In** — text link → https://tools.edgepredict.io/login
- **Start Free** — purple button → https://tools.edgepredict.io/signup

### Footer links by column

**Column 1: EdgePredict (no links — brand name + description only)**

**Column 2: Product**

| Label | Href |
|---|---|
| Platform | /platform |
| Pricing | /pricing |
| Motor Monitoring | /products |
| Pilot Program | /pilot |
| Downtime Calculator | /calculator |
| Security & IT | /security |

**Column 3: Resources**

| Label | Href |
|---|---|
| Downtime Calculator | /calculator |
| Security Overview | /security |
| Contact Sales | /contact |

**Column 4: Contact**

| Label | Href | Note |
|---|---|---|
| Anderson Moffitt | — | Plain text, not a link |
| Founder & CTO | — | Plain text, not a link |
| anderson@edgepredict.io | mailto:anderson@edgepredict.io | |
| contact@edgepredict.io | mailto:contact@edgepredict.io | |
| (703) 401-6262 | tel:7034016262 | |

**Footer bottom row:**

| Label | Href | Status |
|---|---|---|
| Privacy Policy | /contact | ⚠ Routes to Contact page — no dedicated page exists (TODO comment in code) |
| Terms of Service | /contact | ⚠ Routes to Contact page — no dedicated page exists (TODO comment in code) |

---

## 3. All Copy Audit

### `/` — Homepage

**Headlines in order:**
- Eyebrow `<p>`: "Electrical Signature Analysis · ESA / MCSA"
- H1: "Stop Unplanned Motor Downtime."
- Section eyebrow: "How It's Structured"
- H2: "One platform. Three tiers. Start free."
- H3: "Planner" (card)
- H3: "Pro" (card, with "$99/mo" inline)
- H3: "Monitor" (card, with "$200/mo" inline)
- Section eyebrow: "The Problem"
- H2: "Most motor failures are detected too late — or not at all."
- Section eyebrow: "How It Works"
- H2: "Three steps. No plant disruption."
- H3: "INSTALL"
- H3: "MONITOR"
- H3: "PREVENT"
- Section eyebrow: "Detection Capabilities"
- H2: "What EdgePredict monitors"
- H3: "Current Sensing — Standard"
- H3: "Enhanced — Optional Voltage Reference"
- Section eyebrow: "Why EdgePredict"
- H2: "Why not just vibration sensors? Or enterprise systems?"
- H3: "vs. Vibration Sensors Only"
- H3: "vs. Enterprise Systems"
- H3: "vs. Doing Nothing"
- Section eyebrow: "Free 60-Day Pilot"
- H2: "Try it on your motors. Walk away if it doesn't prove value."
- Section eyebrow: "Monitoring Dashboard"
- H2: "Clear visibility into every motor"
- H2: "Ready to take control of your maintenance?"

**Statistics and numbers:**
- "$200/mo per motor for live monitoring" (trust bullet)
- "~20-min sensor install" (trust bullet)
- "$200" (stat chip on hero image)
- "per motor / month · no contracts" (stat chip)
- "$99/mo" (Platform Preview, Pro card)
- "$200/mo" (Platform Preview, Monitor card)
- "Tens of thousands" (Problem section — cost per failure)
- "Hours to days" (Problem section — downtime duration)
- "~20 minutes" (How It Works, Install step)
- "no $50K+ contract" (Why EdgePredict)
- "2–50 critical motors" (Why EdgePredict)
- "$200/month per motor after pilot" (Pilot Callout fine print)
- "Fleet Health 87/100" (dashboard mock)
- "Motors Online 8/8" (dashboard mock)
- "Max Unbalance 2.1%" (dashboard mock)
- "Open Alerts 1" (dashboard mock)
- Motor health scores: 94%, 91%, 71%, 88% (dashboard mock)
- "2h ago" (dashboard mock alert)

**Product claims:**
- Free PM planner, no credit card required
- $200/mo per motor for sensor monitoring
- ~20-min non-invasive sensor install
- Cellular connectivity — no plant network
- ESA/MCSA runs locally on edge gateway
- Detects: phase imbalance, phase loss, load instability, overload, mechanical/electrical fault indicators (current-only)
- Optional voltage reference adds: voltage unbalance, frequency drift, PF/kVAR, real power, supply quality
- One prevented failure typically pays for more than a year of monitoring
- Web-based dashboard, real-time status, weekly email summaries
- Alerts via dashboard, email, or text

**People, company, contact:**
- Company: EdgePredict
- Email: anderson@edgepredict.io
- Phone: (703) 401-6262

---

### `/products` — Motor Monitoring

**Headlines in order:**
- H1: "Motor Condition Monitoring"
- H2: "Motor Monitoring Subscription"
- H2: "Pilot Kit — What's Included"
- H2: "Optional Voltage Reference"
- H3: "What It Adds"
- H3: "How It Works"
- H2: "Connectivity"
- H2: "What Gets Detected"
- H2: "Ready to Get Started?"

**Statistics and numbers:**
- "$200/month per motor" (subscription price)
- "~20 minutes" (install time, mentioned twice)
- "5+ motors" (volume discount threshold)
- "4G LTE" (cellular spec)

**Product claims:**
- $200/month/motor, no hidden fees
- Includes: 3-phase current monitoring via split-core CTs, ESA/MCSA local on edge, web dashboard, real-time alerts, weekly health summaries, adaptive baselines, cellular option, volume discounts 5+
- Pilot kit ships pre-configured, ~20-min clamp-on install
- No IT setup required
- Cellular: 4G LTE, no OT network, no inbound firewall rules
- Detection table: 6 current-only, 4 voltage-only additions
- Footnote: "Indicators consistent with bearing or rotor faults require maintenance confirmation."

---

### `/pilot` — Pilot Program

**Headlines in order:**
- H1: "Free 60-Day Pilot Program"
- H2: "How the Pilot Works"
- H3: "Choose your motors" (01)
- H3: "We ship your kit" (02)
- H3: "Install in ~20 minutes" (03)
- H3: "Baseline + monitoring" (04)
- H3: "Decision at 60 days" (05)
- H2: "What We Need From You"
- H2: "Success Criteria"
- H2: "Pricing After the Pilot"
- H2: "Get Your Pilot Started"

**Statistics and numbers:**
- "$0 upfront for the pilot" (trust pill)
- "~20 minutes" (step 03)
- "~5 business days" (kit shipping estimate)
- "two weeks" (baseline period)
- "$200/month per motor" (post-pilot pricing)
- "5+ motors" (volume discount)

**Product claims:**
- Free 60-day pilot, walk away if no value
- Kit ships pre-configured within ~5 business days
- First two weeks: baseline; alerting activates after
- No minimum contract post-pilot; volume discounts 5+

**People, company, contact:**
- anderson@edgepredict.io
- (703) 401-6262

---

### `/calculator` — Downtime Cost Estimator

**Headlines in order:**
- Eyebrow: "Downtime Cost Estimator"
- H1: "What is reactive motor maintenance costing you?"
- H2: "Facility Profile"
- H2: "Motor Fleet"
- H2: "Failure History"
- H2: "Cost Per Failure Event"
- H2: "Your Estimated Numbers"
- H2: "Annual Cost Breakdown"
- H2: "5-Year Cost Comparison"
- H2: "Get this report by email"

**Statistics and numbers (defaults):**
- 5 motors, 50 HP avg, 3 failures/yr, 8 hrs downtime
- $2,500/hr production loss, $5,000 scrap, $3,000 labor, $4,000 parts
- Preventable %: Reactive = 75%, Preventive = 50%, Some Predictive = 30%
- EdgePredict cost formula: motors × $200 × 12

**Product claims:**
- All figures update in real time
- Computes: annual risk, avoidable loss, EP annual cost, net benefit, ROI, payback months, 5-year comparison
- Email report sent to submitter + notification to Anderson

**Disclaimer:** "All figures are estimates based on your inputs and generalized industry assumptions. Actual costs and savings will vary. EdgePredict does not guarantee specific ROI outcomes."

**People, company, contact:**
- anderson@edgepredict.io (in error fallback text)

---

### `/contact` — Contact

**Headlines in order:**
- H1: "Talk to an engineer."
- H2: "Send us a message"
- H2: "Direct contact"
- H3: "Good questions to ask us:"

**Statistics and numbers:**
- "one business day" (response time in success message)

**Product claims:**
- "No sales deck. Just a direct conversation about your motors, your facility, and whether EdgePredict is the right fit."
- "We'll be in touch within one business day."
- "No long sales process. We can have a kit on its way to you within a week."

**People, company, contact:**
- Anderson Moffitt, Founder & CTO
- anderson@edgepredict.io
- (703) 401-6262
- contact@edgepredict.io

---

### `/security` — Security & IT Overview

**Headlines in order:**
- H1: "Security & IT Overview"
- H2: "What the System Does and Does Not Do"
- H3: "What It Does"
- H3: "What It Does Not Do"
- H2: "Network and Connectivity"
- H2: "Data"
- H2: "On-Premises Option"
- H2: "Quick Reference"
- H2: "Questions for Your IT or OT Team?"

**Statistics and numbers:** None.

**Product claims:**
- Does: reads current from CTs, sends trend data over HTTPS, local waveform processing before transmitting summaries, weekly email reports
- Does NOT: send control signals, require PLC/SCADA/DCS access, bridge OT/IT networks, require inbound firewall rules
- Quick Reference: Control signals = No; Control network access = No; Plant Wi-Fi = No (cellular); Inbound firewall rules = Not required; Encryption = HTTPS/TLS; On-prem = Available
- No PLC tags, SCADA values, or production records captured
- Dashboard is role-controlled
- On-prem deployment available for strict data residency needs

**People, company, contact:**
- anderson@edgepredict.io
- (703) 401-6262

---

### `/platform` — Free Maintenance Platform

**Headlines in order:**
- Eyebrow: "Free Maintenance Platform"
- H1: "Your entire maintenance program. One platform."
- Section eyebrow: "Everything Included"
- H2: "Built for maintenance teams, not enterprise IT."
- H3: "PM Scheduling"
- H3: "Work Orders"
- H3: "Asset Management"
- H3: "AI Work Order Generator"
- H3: "Maintenance Requests"
- H3: "Sensor Integration"
- Section eyebrow: "How It Works"
- H2: "Up and running in minutes."
- H3: "Sign up free. Add your equipment." (step 01)
- H3: "Get PM schedules. Manage work orders daily." (step 02)
- H3: "Add sensors when you're ready." (step 03)
- Section eyebrow: "Maintenance Dashboard"
- H2: "Everything in one view"
- Section eyebrow: "Free Tier"
- H2: "What's included for free — no limits on time."
- H2: "Start managing your maintenance program today."

**Statistics and numbers:**
- "$200/mo" (implied in Monitor Tier badge on Sensor Integration card)
- Dashboard mock: 1 overdue, 2 open WOs, 1 in progress, 8 completed (30d)

**Product claims:**
- Free with no credit card, no time limit
- PM schedules auto-generated based on asset type and criticality
- AI Work Order Generator: plain English → structured work order with steps, parts, priority
- Maintenance requests auto-convert to work orders with supervisor approval
- Sensor integration feeds live data into PM schedules dynamically
- Free tier: unlimited assets, unlimited work orders, PM scheduling, AI WO generator, request workflow, CSV import, email notifications, multi-user access, full audit trail
- Sensor integration requires Monitor Tier

---

### `/pricing` — Pricing

**Headlines in order:**
- H1: "Simple, transparent pricing."
- H2: "Planner" / "Pro" / "Monitor" (tier cards)
- Section eyebrow: "FAQ"
- H2: "Common questions"
- H3: "Is the free tier really free?"
- H3: "What happens after the 60-day pilot?"
- H3: "Can I start free and add sensors later?"
- H3: "Do I need IT involvement?"

**Statistics and numbers:**
- "$0 / Free forever" (Planner)
- "$99 / /mo per site" (Pro)
- "$200 / /mo per motor" (Monitor)
- "6 roles" (Pro feature detail)
- "60-day free pilot" (Monitor feature + FAQ)
- "$200/mo per motor" (FAQ answer)

**Product claims:**
- Planner free forever, no credit card, no time limit, no throttling
- Pro: multi-user, 6 named roles, reporting, parts, mobile view
- Monitor: sensor hardware included, real-time current analysis, live health scores, dynamic PM, automated alerts, cellular (no IT), 20-min install
- "Most small plants have nothing — something free is infinitely better than nothing"

---

## 4. Pricing Mentions

| Page | Section | Exact Text | Refers To |
|---|---|---|---|
| / | Hero trust bullet | "$200/mo per motor for live monitoring" | Monitor tier |
| / | Hero stat chip | "$200" + "per motor / month · no contracts" | Monitor tier |
| / | Platform Preview — Pro card H3 | "$99/mo" (inline in heading) | Pro tier |
| / | Platform Preview — Monitor card H3 | "$200/mo" (inline in heading) | Monitor tier |
| / | Pilot Callout fine print | "$200/month per motor after pilot · No long-term contract" | Post-pilot subscription |
| / | Calculator results label | "5 motors × $200/mo" (metric sub-label in results) | EP annual cost |
| / | Calculator Pilot CTA fine print | "$200/month per motor · Free 60-day pilot" | Post-pilot subscription |
| /products | Subscription section | "$200" (large purple text) + "/month per motor" | Monitor subscription |
| /pilot | Pricing After the Pilot section | "$200" (large in bordered box) + "per motor / month" | Post-pilot subscription |
| /pilot | Step 05 body text | "Continue at $200/month per motor" | Post-pilot subscription |
| /calculator | Results panel — EP/Year metric | "5 motors × $200/mo" (metric sub-label) | EP annual cost |
| /calculator | Pilot CTA fine print | "$200/month per motor · Free 60-day pilot" | Post-pilot subscription |
| /platform | Sensor Integration card badge | "Monitor Tier" badge (implies pricing at /pricing) | — |
| /platform | Free tier note | "Sensor integration requires the Monitor Tier." | Refers to /pricing |
| /pricing | Planner tier | "$0" + "Free forever" | Planner |
| /pricing | Pro tier | "$99" + "/mo per site" | Pro |
| /pricing | Monitor tier | "$200" + "/mo per motor" | Monitor |
| /pricing | FAQ answer | "you continue at $200/mo per motor" | Post-pilot Monitor |

---

## 5. CTAs and Conversion Points

### Form 1: Contact Form (`/contact`)

| Field | Detail |
|---|---|
| Page | /contact |
| Collects | name (required), company (required), email (required), phone (optional), numMotors (optional), message (required) |
| Submit target | POST /api/contact |
| Button text | "Send Message" (shows "Sending…" while in flight) |
| On success | Green "Message received" div replaces form |
| On error | Red inline text: "Something went wrong. Please email us directly at anderson@edgepredict.io." |
| Server action | One email to anderson@edgepredict.io via Resend; reply-to = submitter email |
| Env required | RESEND_API_KEY |

---

### Form 2: Calculator Report (`/calculator`)

| Field | Detail |
|---|---|
| Page | /calculator |
| Collects | name (required), company (required), email (required) |
| Also sends | All current calculator inputs + all computed results as JSON |
| Submit target | POST /api/calculator-report |
| Button text | "Email me the full report" (shows "Sending…" while in flight) |
| On success | "✓ Report on its way!" confirmation block |
| On error | "Something went wrong. Email us directly: anderson@edgepredict.io" |
| Server action | Two simultaneous emails via Resend: (1) notification to anderson@edgepredict.io; (2) plain-text report to submitter |
| Env required | RESEND_API_KEY |
| Note | Form header says "We'll send a summary of your numbers by email." (previously said "PDF summary" — now corrected) |

---

### Non-form CTAs (all pages, site-wide)

| Page | Text | Destination | Type |
|---|---|---|---|
| Nav (all pages) | Log In | https://tools.edgepredict.io/login | External text link |
| Nav (all pages) | Start Free | https://tools.edgepredict.io/signup | External purple button |
| / | Start Free (hero) | https://tools.edgepredict.io/signup | External purple button |
| / | Start Free (final CTA) | https://tools.edgepredict.io/signup | External purple button |
| / | Start Your Free Pilot (final CTA) | /pilot | Outline button |
| / | Talk to an Engineer (final CTA) | /contact | Text link |
| /platform | Start Free (hero) | https://tools.edgepredict.io/signup | Purple button |
| /platform | Create Free Account | https://tools.edgepredict.io/signup | White button on purple bg |
| /platform | Sign in → | https://tools.edgepredict.io/login | Text link |
| /pricing | Start Free (Planner) | https://tools.edgepredict.io/signup | Purple button |
| /pricing | Join Waitlist (Pro) | /contact | Outline button |
| /pricing | Start Your Free Pilot (Monitor) | /pilot | Purple button |

---

## 6. Images and Visual Assets

| Asset | Source | Description | Page / Section | Type |
|---|---|---|---|---|
| `/og-image.jpg` | Local `/public/` | Used as **nav logo** (h-14). Also declared as OG share image (1200×630). | Every page — Nav header | Local |
| `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80` | External — Unsplash CDN | Maintenance electrician at motor panel | Homepage — Hero (right column, 420px tall) | External |
| `/favicon.ico` | Local `/public/` | Browser favicon | All pages | Local |
| `/favicon-16x16.png` | Local `/public/` | 16×16 favicon | All pages | Local |
| `/favicon-32x32.png` | Local `/public/` | 32×32 favicon | All pages | Local |
| `/apple-touch-icon.png` | Local `/public/` | 180×180 Apple touch icon | iOS home screen | Local |
| `/android-chrome-192x192.png` | Local `/public/` | 192×192 PWA icon | site.webmanifest | Local |
| `/android-chrome-512x512.png` | Local `/public/` | 512×512 PWA icon | site.webmanifest | Local |

**Notes:**
- The logo in Nav is `/og-image.jpg` repurposed. No separate SVG logomark exists.
- All dashboard UI on `/` and `/platform` is inline JSX — no image files.
- No product screenshots, team photos, or illustrations beyond the one Unsplash image.

---

## 7. API Routes

### `POST /api/contact`
**File:** `src/app/api/contact/route.ts`

| Attribute | Detail |
|---|---|
| Method | POST |
| Request body | `{ name, company, email, phone?, message, numMotors? }` |
| Validation | 400 if name, company, email, or message missing |
| Action | Sends 1 email to anderson@edgepredict.io via Resend |
| From | `EdgePredict <noreply@edgepredict.io>` |
| Reply-To | Submitter's email |
| Format | Plain text |
| Success | `{ success: true }` HTTP 200 |
| Errors | `{ error: "Missing required fields" }` 400 / `{ error: "Internal server error" }` 500 |
| Env vars | `RESEND_API_KEY` |
| Note | Resend client lazily instantiated inside handler on each request |

---

### `POST /api/calculator-report`
**File:** `src/app/api/calculator-report/route.ts`

| Attribute | Detail |
|---|---|
| Method | POST |
| Request body | `{ name, company, email, inputs: Inputs, results: Results }` |
| Validation | 400 if name, company, or email missing |
| Action | Sends 2 emails simultaneously via `Promise.all` |
| Email 1 | To anderson@edgepredict.io — "Calculator report request" notification with full data |
| Email 2 | To submitter's email — formatted plain-text report |
| Email 1 From | `EdgePredict <noreply@edgepredict.io>` |
| Email 1 Reply-To | Submitter's email |
| Email 2 From | `EdgePredict <noreply@edgepredict.io>` |
| Email 2 Reply-To | anderson@edgepredict.io |
| Format | Plain text (not HTML, not PDF) |
| Success | `{ success: true }` HTTP 200 |
| Errors | `{ error: "Missing required fields" }` 400 / `{ error: "Internal server error" }` 500 |
| Env vars | `RESEND_API_KEY` |
| Signed by | "Anderson Moffitt, Founder & CTO, EdgePredict" (in email body) |

---

## 8. Meta Tags and SEO

### Root Layout (`src/app/layout.tsx`) — defaults for all pages

| Tag | Value |
|---|---|
| Default title | "EdgePredict — Maintenance Management & Motor Monitoring" |
| Default description | "Free maintenance platform with PM scheduling, work orders, and asset management. Add non-invasive motor monitoring with ESA for $200/mo per motor. Free 60-day pilot." |
| Keywords | "motor condition monitoring, electrical signature analysis, MCSA, ESA, predictive maintenance, motor health, phase imbalance, current unbalance, industrial motors, CMMS, maintenance management, preventive maintenance software, work order management, PM scheduling" |
| Author / Creator / Publisher | EdgePredict |
| metadataBase | https://www.edgepredict.io |
| Canonical | / (root only — **no per-page canonicals set**) |
| OG title | "EdgePredict — Maintenance Management & Motor Monitoring" |
| OG description | "Free maintenance platform with PM scheduling, work orders, and asset management. Add non-invasive motor monitoring with ESA for $200/mo per motor. Free 60-day pilot." |
| OG url | https://www.edgepredict.io |
| OG siteName | EdgePredict |
| OG image | https://www.edgepredict.io/og-image.jpg (1200×630) |
| OG image alt | "EdgePredict Motor Condition Monitoring" *(still sensor-focused — not updated)* |
| OG locale | en_US |
| OG type | website |
| Twitter card | summary_large_image |
| Twitter title | "EdgePredict — Motor Condition Monitoring" *(not updated — still sensor-only)* |
| Twitter description | "Non-invasive motor health monitoring using ESA. $200/month per motor. Free 60-day pilot. No plant network required." *(not updated — still sensor-only)* |
| Twitter image | https://www.edgepredict.io/og-image.jpg |
| robots | index: true, follow: true, full googleBot config |
| Fonts loaded | **None** — no Google Fonts, no next/font, no @font-face. System sans-serif. |
| Analytics | `@vercel/analytics` — `<Analytics />` in root layout |

### Per-page metadata

| Page | Title | Meta Description | Source |
|---|---|---|---|
| / | "EdgePredict — Stop Unplanned Motor Downtime" | "Non-invasive motor condition monitoring using ESA. Catch developing issues early. $200/month per motor. Free 60-day pilot." | `export const metadata` in page.tsx |
| /products | "Motor Monitoring — EdgePredict" | "Motor condition monitoring using ESA/MCSA. $200/month per motor. Split-core CT installation. Cellular option. Optional voltage reference." | `export const metadata` in page.tsx |
| /pilot | "Free 60-Day Pilot — EdgePredict" | "Start a free 60-day motor condition monitoring pilot. No plant network required. Walk away if no value." | `export const metadata` in page.tsx |
| /calculator | "Downtime Cost Calculator — EdgePredict" | "Calculate what reactive motor maintenance is costing your facility. Free interactive tool with instant results." | `export const metadata` in **layout.tsx** (page is client component) |
| /contact | "Contact — EdgePredict" | "Talk to an engineer about motor monitoring and maintenance management. No sales deck — just a direct conversation about your facility." | `export const metadata` in **layout.tsx** (page is client component) |
| /security | "Security & IT Overview — EdgePredict" | "Plain-English security overview for plant IT and OT teams. Read-only monitoring. No control signals. Cellular option requires no plant network access." | `export const metadata` in page.tsx |
| /platform | "Free Maintenance Platform — EdgePredict" | "PM scheduling, work orders, asset management, and AI-generated maintenance plans — free for small plants. Add sensors when you're ready." | `export const metadata` in page.tsx |
| /pricing | "Pricing — EdgePredict" | "Simple, transparent pricing. Free maintenance planning platform. $200/mo per motor for live sensor monitoring. Start free, upgrade when you're ready." | `export const metadata` in page.tsx |

---

## 9. Color and Style Inventory

### Brand colors

| Color | Value | Usage |
|---|---|---|
| Brand Purple | `#7655d6` | Primary CTAs, icons, accents, active borders, section backgrounds (Pilot Callout, Platform CTA) |
| Brand Purple (hover) | `#5d3db8` | CTA hover states |
| Light Purple (on dark) | `#a78fe8` | Eyebrow text on dark sections (`text-[#a78fe8]`) |
| Purple 400 (Tailwind) | `text-purple-400` | Footer wordmark "Edge" prefix |
| Purple 200 (Tailwind) | `text-purple-200` | Fine print on purple background, platform page fallback line |
| Purple 300 (Tailwind) | `text-purple-300` | "Sign in" link on /platform CTA section |
| Purple tints | `bg-[#7655d6]/5`, `/10`, `/40` | Card backgrounds, border opacity |
| Green 500 | `text-green-500` / `bg-green-500` | Checkmarks, motor status bars |
| Green 400 | `text-green-400` / `bg-green-400` | Dashboard "Live" indicator, fleet health metric, completed WO status |
| Green 600 | `text-green-600` | Positive ROI/savings in calculator, contact form success icon |
| Green badge | `bg-green-100 text-green-700` | "Free" badges on platform and pricing pages |
| Amber/Yellow 400 | `text-yellow-400` / `bg-yellow-400` | Watch status, dashboard warnings |
| Amber badge | `bg-amber-100 text-amber-700` | "Coming Soon" badge on Pro tier |
| Red 400/500 | `text-red-400` / `bg-red-400` | Overdue status, negative calc figures |
| Blue 400 | `text-blue-400` / `bg-blue-400/10` | "Open" WO status badge in /platform mock |
| Orange 400 | `bg-orange-400` | Calculator bar chart (scrap/WIP) |

### Font families
No explicit `font-family` declarations in any source file. The site uses the **browser default system sans-serif stack** (Tailwind base reset). `font-mono` used in dashboard mocks and calculator results for UI chrome.

### Dark mode
CSS variables for `.dark` are defined in `globals.css` but **never activated** — no dark mode toggle, no `prefers-color-scheme`, and `tailwind.config.ts` uses `darkMode: ["class"]` (requires explicit class). Dark-looking sections use hardcoded `bg-gray-900` / `bg-gray-950` classes, not the CSS variable system.

### CSS custom properties (`globals.css` `:root`)
```
--background: 0 0% 100%          (white)
--foreground: 240 10% 3.9%       (near-black)
--card / --card-foreground
--popover / --popover-foreground
--primary: 240 5.9% 10%
--primary-foreground: 0 0% 98%
--secondary: 240 4.8% 95.9%
--secondary-foreground: 240 5.9% 10%
--muted / --muted-foreground
--accent / --accent-foreground
--destructive: 0 84.2% 60.2%
--border: 240 5.9% 90%
--input: 240 5.9% 90%
--ring: 240 5.9% 10%
--radius: 0.5rem
--chart-1 through --chart-5
```
**Note:** These variables are defined for shadcn/ui components but **not used by any page** — all page styling uses hardcoded hex or standard Tailwind classes.

---

## 10. Broken or Placeholder Content

| Issue | Severity | Location | Detail |
|---|---|---|---|
| Privacy Policy → /contact | Medium | Footer (all pages) | No dedicated Privacy Policy page. Links to /contact with TODO comment in code. |
| Terms of Service → /contact | Medium | Footer (all pages) | No dedicated Terms of Service page. Links to /contact with TODO comment in code. |
| Twitter title & description not updated | Low | Root layout.tsx | Twitter card still says "Motor Condition Monitoring" and sensor-only description. OG title/description were updated but Twitter was not. |
| OG image alt not updated | Low | Root layout.tsx | `alt: "EdgePredict Motor Condition Monitoring"` — still sensor-focused after platform pivot. |
| Homepage metadata not updated | Low | src/app/page.tsx | Page `metadata.title` = "EdgePredict — Stop Unplanned Motor Downtime" and description is sensor-only. Root layout title was updated but this per-page override was not. |
| Nav logo is the OG image | Low | Nav (all pages) | `/og-image.jpg` (1200×630 social share image) used as nav logo at `h-14`. No dedicated SVG/PNG logo file exists. |
| Unsplash stock photo hardcoded | Low | Homepage — Hero | External URL hardcoded in JSX. Should be replaced with an owned asset or moved to `/public`. |
| tools.edgepredict.io subdomain | Unknown | Nav, /, /platform, /pricing | Every primary CTA points to `https://tools.edgepredict.io/signup` and `/login`. If this subdomain is not live, all conversion CTAs fail silently. |
| shadcn ui/ components unused | Low | `src/components/ui/` | `badge.tsx`, `button.tsx`, `card.tsx` are not imported by any page. Comments added noting this. Kept intentionally. |
| /pricing Pro tier is "Coming Soon" | Informational | /pricing | Pro tier CTA says "Join Waitlist" → /contact. No dedicated waitlist form. |
| No structured data / JSON-LD | Low | All pages | No Schema.org markup on any page. |
| No per-page canonical URLs | Low | All pages except / | Only root `/` canonical is set. All other pages inherit it, which is technically incorrect for SEO. |
| Calculator results metric label | Low | /calculator | Results panel shows "5 motors × $200/mo" which is hardcoded from default inputs. Actually dynamic — but the label text isn't — it reads "5 motors × $200/mo" regardless of actual motor count input. (The calculation itself is correct; only the label text is static.) |
| **Planner "Single user" vs Free Tier "Multi-user access"** | **High** | /pricing vs /platform | /pricing Planner lists "Single user" as a feature; /platform free tier callout lists "Multi-user access" as included for free. These directly contradict each other. |
| Footer tagline not updated | Low | Footer (all pages) | Footer column 1 still says "Non-invasive motor condition monitoring using Electrical Signature Analysis. Built for reliability engineers and maintenance managers." — sensor-only copy, does not reflect platform-first positioning. |
| Dashboard mocks have hardcoded date | Cosmetic | /, /platform | Homepage dashboard mock and /platform dashboard mock both show static hardcoded data (e.g., "PM Schedule — June 2025", motor names, specific health scores). Clearly fictional — fine for demos, but not dynamically generated. |
| `<img>` used instead of Next.js `<Image>` | Low | Nav (all pages), Homepage hero | Nav logo (`/og-image.jpg`) and hero photo (Unsplash URL) use bare `<img>` tags. Next.js `<Image>` would provide lazy loading, automatic WebP conversion, and size optimization. Not a functional bug but a missed optimization. |

---

## 11. Mobile Responsiveness

**Testing method:** Static code analysis of Tailwind breakpoint classes. No live browser test performed.
**Breakpoints used:** `sm` = 640px, `md` = 768px, `lg` = 1024px, `xl` = 1280px

---

### Nav (`src/components/Nav.tsx`)

| Element | Behavior |
|---|---|
| Desktop nav links | `hidden md:flex` — hidden below 768px |
| Mobile toggle (hamburger) | `md:hidden` — shown below 768px |
| Mobile dropdown | Full-width, stacked links, closes on click |
| Logo | `h-14 w-auto` — fixed height 56px, rendered on all breakpoints |

**Notes:**
- Mobile nav closes on link click (`onClick={() => setMobileOpen(false)}`) ✓
- No `aria-expanded` or focus-trap on mobile menu (accessibility gap, not a layout issue)
- Logo `h-14` is 56px tall — nav total height ~72px on mobile (header `py-3`). Reasonable.

---

### `/` — Homepage

| Section | Breakpoints | Notes |
|---|---|---|
| Hero | `grid lg:grid-cols-2` | Single column on mobile/tablet. Text above, image below. H1 scales `text-4xl lg:text-6xl`. |
| Hero buttons | `flex flex-wrap gap-3` | Wraps cleanly on mobile ✓ |
| Hero image | `h-[420px] object-cover` | Full-width image at fixed 420px height on mobile — fine visually |
| Platform Preview | `grid md:grid-cols-3` | Single column on mobile, 3-col at md+ ✓ |
| Problem | `grid md:grid-cols-3` | Single column on mobile ✓ |
| How It Works | `grid md:grid-cols-3` | Single column on mobile ✓ |
| Detection | `grid lg:grid-cols-2` | Single column on mobile/tablet ✓ |
| Why EdgePredict | `grid md:grid-cols-3` | Single column on mobile ✓ |
| Pilot Callout tiles | `grid sm:grid-cols-2 lg:grid-cols-4` | 1-col xs, 2-col sm, 4-col lg ✓ |
| **Dashboard KPI row** | **`grid grid-cols-4` — no breakpoint** | **⚠ Four fixed columns on all screen sizes. At 320px–375px, each cell gets ~75px. `p-4` padding + `text-2xl font-bold` values may clip.** |
| Dashboard motor table | `w-44 flex-shrink-0` name column | Fixed 176px name column plus health bar, percentage, status. Tight below 480px. No `overflow-x-auto` wrapper. |
| Final CTA buttons | `flex flex-wrap justify-center gap-3` | Wraps ✓ |

**⚠ Overflow risk:** Dashboard mock KPI row (`grid grid-cols-4`) has no mobile breakpoint. Rendered within `max-w-4xl` container but on sub-400px screens the 4 cells may overflow or text may truncate. Motor table also lacks an `overflow-x-auto` wrapper.

---

### `/platform` — Free Maintenance Platform

| Section | Breakpoints | Notes |
|---|---|---|
| Hero | `text-4xl md:text-6xl` | Scales ✓. Buttons `flex flex-wrap justify-center gap-4` ✓ |
| Feature Grid | `grid md:grid-cols-2 lg:grid-cols-3` | 1-col mobile, 2-col md, 3-col lg ✓ |
| How It Works | `grid md:grid-cols-3` | 1-col mobile ✓ |
| Dashboard mock | `grid lg:grid-cols-2` — PM + WO side by side | Stacks on mobile/tablet ✓ |
| **Dashboard PM header** | **`grid grid-cols-4` — no breakpoint** | **⚠ Same issue as homepage dashboard: 4 fixed columns inside a dark panel. Column headers "Asset / Asset / Next Due / Status" may overflow on narrow screens.** |
| **Dashboard calendar** | **`grid grid-cols-7`** | Seven equal columns with `w-7 h-7` circles. At 320px, available width per cell is ~26px (tight, but circles are only 28px). Marginal on very narrow screens. |
| Dashboard WO stat row | `grid grid-cols-3` | Reasonable at 3 cols ✓ |
| Free Tier checklist | `grid sm:grid-cols-2 lg:grid-cols-3` | Stacks on mobile ✓ |
| CTA | Full-width, centered ✓ | |

---

### `/pricing` — Pricing

| Section | Breakpoints | Notes |
|---|---|---|
| Hero | `text-4xl md:text-5xl` | Scales ✓ |
| Tier cards | `grid lg:grid-cols-3 items-start` | Single column on mobile/tablet, 3-col on lg+. Cards are `items-start` so they don't stretch. Each card is `p-8` — comfortable on mobile. ✓ |
| FAQ | `max-w-3xl mx-auto` single column | ✓ |

**Notes:** Clean at all sizes. No overflow risks identified.

---

### `/calculator` — Downtime Cost Estimator

| Section | Breakpoints | Notes |
|---|---|---|
| Hero | `text-4xl lg:text-5xl` | Scales ✓ |
| Main layout | `grid lg:grid-cols-2` | Stacked on mobile (inputs above, results below) ✓ |
| InputRow | `flex` with `flex-1 pr-4` label + `w-36 flex-shrink-0` input | 144px fixed input. At 320px container with `px-4` (48px padding), label gets ~128px. Long labels like "Production loss per hour" may wrap — acceptable but can look tight. |
| Dropdowns | `w-full` | Full-width ✓ |
| Bar charts | CSS width-based percentage bars | `overflow-hidden` on container ✓ |
| Lead capture form | `w-full` inputs | ✓ |

**Notes:** No hard overflow risks. InputRow label wrapping is expected behavior, not a bug.

---

### `/contact` — Contact

| Section | Breakpoints | Notes |
|---|---|---|
| Hero | `text-4xl lg:text-5xl` | Scales ✓ |
| Main layout | `grid lg:grid-cols-2 gap-16` | Stacked on mobile (form above, direct contact below) ✓ |
| Form first row | `grid sm:grid-cols-2 gap-5` | Stacks on xs, 2-col on sm+ ✓ |
| Form second row | `grid sm:grid-cols-2 gap-5` | Same ✓ |

**Notes:** Clean at all sizes. No overflow risks identified.

---

### `/products` — Motor Monitoring

| Section | Breakpoints | Notes |
|---|---|---|
| Hero | `text-4xl md:text-5xl` | Scales ✓ |
| Subscription | `max-w-3xl mx-auto` single column | ✓ |
| Pilot Kit | `max-w-3xl mx-auto` single column | ✓ |
| Voltage Reference | `grid md:grid-cols-2 gap-12` | Stacks on mobile ✓ |
| Connectivity | `max-w-3xl mx-auto` single column | ✓ |
| Detection table | `overflow-x-auto` | ✓ explicitly handled |
| CTA buttons | `flex flex-col sm:flex-row gap-4` | Stacks on xs, row on sm+ ✓ |

**Notes:** Clean at all sizes. Detection table correctly uses `overflow-x-auto`.

---

### `/pilot` — Pilot Program

| Section | Breakpoints | Notes |
|---|---|---|
| Hero | `text-4xl md:text-5xl` | Scales ✓ |
| Trust pills | `flex flex-wrap justify-center gap-3` | Wraps ✓ |
| Steps | `max-w-3xl mx-auto`, each step `flex gap-6` | Number div is `w-12 shrink-0`. Text flows alongside. Comfortable on mobile. ✓ |
| Requirements | `max-w-3xl mx-auto` single column | ✓ |
| Success Criteria | `max-w-3xl mx-auto` single column | ✓ |
| Pricing box | `inline-block` bordered box with `$200` | Renders fine ✓ |
| CTA contact row | `flex flex-col sm:flex-row gap-4` | Stacks on xs ✓ |

**Notes:** Clean at all sizes. No overflow risks identified.

---

### `/security` — Security & IT Overview

| Section | Breakpoints | Notes |
|---|---|---|
| Hero | `text-4xl md:text-5xl` | Scales ✓ |
| Does/Does Not | `grid md:grid-cols-2 gap-12` | Stacks on mobile ✓ |
| Network | `max-w-3xl mx-auto` single column | ✓ |
| Data | `max-w-3xl mx-auto` single column | ✓ |
| Quick Reference table | `overflow-x-auto`, `max-w-xl` | ✓ |
| CTA | `flex flex-col sm:flex-row gap-4` | Stacks on xs ✓ |

**Notes:** Clean at all sizes. No overflow risks identified.

---

### Footer (`src/components/Footer.tsx`)

| Element | Breakpoints | Notes |
|---|---|---|
| 4-column grid | `grid md:grid-cols-4 gap-8` | Stacks to 1 column on mobile ✓ |
| Bottom row | `flex flex-col md:flex-row justify-between` | Stacks on mobile ✓ |

**Notes:** Clean. Privacy/Terms links stack below copyright on mobile.

---

### Summary of Mobile Issues

| Issue | Severity | Location |
|---|---|---|
| Dashboard KPI: `grid grid-cols-4` with no breakpoint | Medium | /, /platform |
| Dashboard motor table: no `overflow-x-auto` wrapper | Low | / |
| Dashboard PM calendar: `grid grid-cols-7` may be tight at 320px | Low | /platform |
| Calculator InputRow: long labels wrap in 128px space | Cosmetic | /calculator |
| No `aria-expanded` on mobile hamburger | Accessibility | Nav |

---

## 12. Full File Tree

All files in `src/` — 21 total.

```
src/
├── app/
│   ├── layout.tsx                       Root Next.js layout: global metadata (title, OG, Twitter, robots), renders Nav + ClientBody + Footer + Vercel Analytics
│   ├── page.tsx                         Homepage (/): Hero, Platform Preview, Problem, How It Works, Detection, Why EdgePredict, Pilot Callout, Dashboard mock, Final CTA
│   ├── ClientBody.tsx                   Client wrapper: suppresses browser-extension hydration class mismatches by resetting body className on mount
│   ├── globals.css                      Global styles: Tailwind base/components/utilities directives; CSS custom properties for shadcn/ui and dark mode (defined but not activated)
│   ├── platform/
│   │   └── page.tsx                     /platform page: Hero, Feature Grid (6 cards with Free/Monitor badges), How It Works, Dashboard mock (PM calendar + Work Orders), Free Tier callout, purple CTA
│   ├── pricing/
│   │   └── page.tsx                     /pricing page: Hero, 3-tier comparison cards (Planner/$0, Pro/$99, Monitor/$200), FAQ (4 questions)
│   ├── products/
│   │   └── page.tsx                     /products page: Motor Monitoring subscription, Pilot Kit contents, Optional Voltage Reference, Connectivity, Detection table, CTA
│   ├── pilot/
│   │   └── page.tsx                     /pilot page: 5-step pilot process, What We Need, Success Criteria, Post-pilot pricing, Contact CTA
│   ├── security/
│   │   └── page.tsx                     /security page: Does/Does Not table, Network & Connectivity, Data handling, On-Prem Option, Quick Reference table, CTA
│   ├── calculator/
│   │   ├── layout.tsx                   Metadata wrapper for /calculator (client component cannot export metadata; layout.tsx exports it instead)
│   │   └── page.tsx                     /calculator page (client component): 4 input sections, live-computed results, bar charts, lead capture form, pilot CTA, disclaimer
│   ├── contact/
│   │   ├── layout.tsx                   Metadata wrapper for /contact (same pattern as calculator/layout.tsx)
│   │   └── page.tsx                     /contact page (client component): contact form (6 fields), direct contact column (Anderson Moffitt card, general inbox, good questions list)
│   └── api/
│       ├── contact/
│       │   └── route.ts                 POST /api/contact: validates name/company/email/message; sends 1 email to anderson@edgepredict.io via Resend; reply-to = submitter
│       └── calculator-report/
│           └── route.ts                 POST /api/calculator-report: validates name/company/email; sends 2 emails via Resend (notification to Anderson + plain-text report to submitter)
├── components/
│   ├── Nav.tsx                          Sticky top navigation (client component): logo, 5 desktop links, Log In text link, Start Free button; hamburger mobile menu with same links + divider + Log In + Start Free
│   ├── Footer.tsx                       Site footer: 4-column grid (brand tagline, Product links, Resources links, Contact info); Privacy/Terms links (currently route to /contact)
│   └── ui/
│       ├── badge.tsx                    shadcn/ui Badge component — not imported by any page; kept as scaffold
│       ├── button.tsx                   shadcn/ui Button component — not imported by any page; kept as scaffold
│       └── card.tsx                     shadcn/ui Card component — not imported by any page; kept as scaffold
└── lib/
    └── utils.ts                         cn() utility function: wraps clsx + tailwind-merge; used by shadcn/ui components only
```
