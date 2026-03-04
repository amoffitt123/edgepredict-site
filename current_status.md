# EdgePredict Site — Current Status Audit
**Generated:** 2026-03-03
**Auditor:** Claude Code (codebase read, no live browser test)
**Scope:** All source files in `/src`, public assets, config files

---

## 1. Site Map

---

### `/` — Homepage

**Page H1:** "Stop Unplanned Motor Downtime."

#### Sections in order

| # | Section Name | Background | Est. Word Count |
|---|---|---|---|
| 1 | Hero | white (`bg-white`) | ~85 |
| 2 | Platform Preview | light gray (`bg-gray-50`) | ~75 |
| 3 | The Problem | dark (`bg-gray-900 text-white`) | ~75 |
| 4 | How It Works | white | ~110 |
| 5 | What It Detects | light gray (`bg-gray-50`) | ~130 |
| 6 | Why EdgePredict | white | ~110 |
| 7 | Free 60-Day Pilot Callout | brand purple (`bg-[#7655d6]`) | ~65 |
| 8 | Dashboard Preview (mock UI) | light gray (`bg-gray-50`) | ~30 |
| 9 | Final CTA | white | ~35 |

#### CTA buttons

| Button Text | Destination | Style |
|---|---|---|
| Start Free | https://tools.edgepredict.io/signup | Purple filled (`<a>` tag, external) |
| See How Monitoring Works | /products | Outline |
| Start Free (in Platform Preview card) | https://tools.edgepredict.io/signup | Text link / purple |
| See details (Pro card) | /pricing | Text link / gray→purple hover |
| Start Pilot (Monitor card) | /pilot | Text link / purple |
| See the math | /calculator | Text link / purple |
| Start Your Free Pilot | /pilot | White filled on purple background |
| Start Your Free Pilot | /pilot | Purple filled |
| Talk to an Engineer | /contact | Outline |

#### External links

| URL | Context |
|---|---|
| https://tools.edgepredict.io/signup | Hero CTA + Platform Preview card 1 |
| https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80 | Hero image `src` (not clickable, just `<img>`) |
| mailto:anderson@edgepredict.io | Final CTA inline contact |
| tel:7034016262 | Final CTA inline contact |

---

### `/products` — Monitoring (Product page)

**Page H1:** "Motor Condition Monitoring"

#### Sections in order

| # | Section Name | Background | Est. Word Count |
|---|---|---|---|
| 1 | Hero | near-black (`bg-gray-950 text-white`) | ~20 |
| 2 | Motor Monitoring Subscription | white | ~35 + 8-item list |
| 3 | Pilot Kit — What's Included | dark (`bg-gray-900 text-white`) | ~30 + 6-item list |
| 4 | Optional Voltage Reference | white | ~60 + 5-item list |
| 5 | Connectivity | light gray (`bg-gray-50`) | ~50 + 4-item list |
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

#### Sections in order

| # | Section Name | Background | Est. Word Count |
|---|---|---|---|
| 1 | Hero | near-black (`bg-gray-950 text-white`) | ~35 + 4 trust pill badges |
| 2 | How the Pilot Works | white | ~155 (5 steps) |
| 3 | What We Need From You | light gray (`bg-gray-50`) | ~35 + 4 requirements |
| 4 | Success Criteria | white | ~25 + 4 criteria |
| 5 | Pricing After the Pilot | dark (`bg-gray-900 text-white`) | ~25 |
| 6 | Get Your Pilot Started (CTA) | white | ~30 + contact |

#### CTA buttons

| Button Text | Destination | Style |
|---|---|---|
| Send a Message | /contact | Purple filled |

#### External links

| URL | Context |
|---|---|
| mailto:anderson@edgepredict.io | Inline contact in CTA section |
| tel:+17034016262 | Inline contact in CTA section |

---

### `/calculator` — Downtime Cost Estimator

**Page H1:** "What is reactive motor maintenance costing you?"

#### Sections in order

| # | Section Name | Background | Est. Word Count |
|---|---|---|---|
| 1 | Hero | dark (`bg-gray-900 text-white`) | ~35 |
| 2 | Calculator — Inputs (left column) | light gray (`bg-gray-50`) | labels only |
| 2 | Calculator — Results (right column) | light gray (`bg-gray-50`) | live-computed |
| 3 | Lead Capture form (inside results) | purple (`bg-[#7655d6]`) | ~40 |
| 4 | Pilot CTA (inside results) | white card | ~20 |
| 5 | Disclaimer | light gray | ~55 |

#### CTA buttons

| Button Text | Destination | Style |
|---|---|---|
| Email me the full report | POST /api/calculator-report | Purple filled (form submit) |
| Start Your Free Pilot | /pilot | Purple filled |

#### External links
None.

---

### `/contact` — Contact

**Page H1:** "Talk to an engineer."

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
| mailto:anderson@edgepredict.io | Direct contact card + form error fallback |
| tel:7034016262 | Direct contact card |
| mailto:contact@edgepredict.io | General inquiries box |

---

### `/security` — Security & IT Overview

**Page H1:** "Security & IT Overview"

#### Sections in order

| # | Section Name | Background | Est. Word Count |
|---|---|---|---|
| 1 | Hero | near-black (`bg-gray-950 text-white`) | ~25 |
| 2 | What It Does / Does Not Do | white | ~80 (2 columns, 4 + 5 items) |
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
| mailto:anderson@edgepredict.io | CTA section inline |
| tel:+17034016262 | CTA section inline |

---

### `/platform` — Free Maintenance Platform

**Page H1:** "Your entire maintenance program. One platform."

#### Sections in order

| # | Section Name | Background | Est. Word Count |
|---|---|---|---|
| 1 | Hero | near-black (`bg-gray-950 text-white`) | ~45 |
| 2 | Feature Grid (6 cards) | light gray (`bg-gray-50`) | ~175 |
| 3 | How It Works (3 steps) | white | ~95 |
| 4 | Dashboard Mock (PM + Work Orders) | light gray (`bg-gray-50`) | ~25 |
| 5 | Free Tier callout (9-item grid) | white | ~40 |
| 6 | CTA | brand purple (`bg-[#7655d6]`) | ~30 |

#### CTA buttons

| Button Text | Destination | Style |
|---|---|---|
| Start Free | https://tools.edgepredict.io/signup | Purple filled |
| See Pricing | /pricing | Outline (dark bg) |
| Create Free Account | https://tools.edgepredict.io/signup | White filled on purple bg |
| Sign in → | https://tools.edgepredict.io/login | Text link / purple-300 |

#### External links

| URL | Context |
|---|---|
| https://tools.edgepredict.io/signup | Hero CTA + CTA section |
| https://tools.edgepredict.io/login | "Already have an account?" line in CTA section |

---

### `/pricing` — Pricing

**Page H1:** "Simple, transparent pricing."

#### Sections in order

| # | Section Name | Background | Est. Word Count |
|---|---|---|---|
| 1 | Hero | near-black (`bg-gray-950 text-white`) | ~10 |
| 2 | Tier Comparison (3 cards) | light gray (`bg-gray-50`) | ~175 |
| 3 | FAQ (4 questions) | white | ~130 |

#### CTA buttons

| Button Text | Destination | Style |
|---|---|---|
| Start Free (Planner tier) | https://tools.edgepredict.io/signup | Purple filled |
| Join Waitlist (Pro tier) | /contact | Outline |
| Start Your Free Pilot (Monitor tier) | /pilot | Purple filled |
| Talk to an engineer → | /contact | Text link / purple |

#### External links

| URL | Context |
|---|---|
| https://tools.edgepredict.io/signup | Planner tier CTA |

---

## 2. Navigation

### Desktop nav — items in order (left to right)

| Position | Label | Href | Type |
|---|---|---|---|
| Logo | (EdgePredict logo image) | / | Internal |
| 1 | Platform | /platform | Internal |
| 2 | Pricing | /pricing | Internal |
| 3 | Monitoring | /products | Internal |
| 4 | Pilot Program | /pilot | Internal |
| 5 | Calculator | /calculator | Internal |
| 6 | Security | /security | Internal |
| 7 | Contact | /contact | Internal |
| CTA button | Start Free | https://tools.edgepredict.io/signup | **External** (`<a>` tag) |

**Mobile behavior:** At `md` breakpoint and below, all nav links hide and a hamburger button appears. Tapping it reveals a vertical dropdown with all links plus the CTA.

### Footer links by column

**Column 1: EdgePredict (brand/description only, no links)**

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

| Label | Href |
|---|---|
| Anderson Moffitt | (not a link — plain text) |
| Founder & CTO | (not a link — plain text) |
| anderson@edgepredict.io | mailto:anderson@edgepredict.io |
| contact@edgepredict.io | mailto:contact@edgepredict.io |
| (703) 401-6262 | tel:7034016262 |

**Footer bottom row:**

| Label | Href | Status |
|---|---|---|
| Privacy Policy | # | ⚠ PLACEHOLDER — no actual page |
| Terms of Service | # | ⚠ PLACEHOLDER — no actual page |

---

## 3. All Copy Audit

### `/` — Homepage

**Headlines (in order):**
- Eyebrow (styled `<p>`): "Electrical Signature Analysis · ESA / MCSA"
- H1: "Stop Unplanned Motor Downtime."
- Section eyebrow: "How It's Structured"
- H2: "One platform. Three tiers. Start free."
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
- H2: "Ready to catch issues before they become failures?"

**Statistics and numbers:**
- "$200/mo per motor for live monitoring" (trust bullet)
- "~20-min sensor install by your electrician" (trust bullet)
- "$200" (stat chip overlay on hero image)
- "per motor / month · no contracts" (stat chip)
- "$99/mo" (Platform Preview, Pro card)
- "$200/mo" (Platform Preview, Monitor card)
- "Tens of thousands" (Problem section stat card — cost per failure event)
- "Hours to days" (Problem section stat card — downtime duration)
- "~20 minutes" (How It Works, Install step)
- "no $50K+ contract" (Why EdgePredict, vs. Enterprise Systems)
- "2–50 critical motors" (Why EdgePredict, vs. Enterprise Systems)
- "$200/month per motor after pilot" (Pilot Callout fine print)
- "Fleet Health: 87/100" (dashboard mock)
- "Motors Online: 8/8" (dashboard mock)
- "Max Unbalance: 2.1%" (dashboard mock)
- "Open Alerts: 1" (dashboard mock)
- Motor health scores: 94%, 91%, 71%, 88% (dashboard mock)
- "2h ago" (dashboard mock alert timestamp)

**Product claims:**
- Free PM planner with no credit card required
- Motor monitoring at $200/mo per motor
- ~20-minute sensor install
- Cellular connectivity — no plant network required
- Non-invasive (split-core CT, no rewiring)
- ESA/MCSA analysis runs locally on the edge gateway
- Detects: phase imbalance, phase loss, load instability, overload, mechanical fault indicators, electrical fault indicators (current-only)
- Detects additionally with voltage reference: voltage unbalance, frequency drift, power factor / kVAR, real power trending, supply quality
- Web-based dashboard with real-time status, trend charts, alert history
- Weekly health summary emails
- Alerts via dashboard, email, or text
- One prevented failure typically pays for more than a year of monitoring
- No enterprise IT integration required
- No 6-month deployment project

**People, company, contact:**
- Company: EdgePredict
- Email: anderson@edgepredict.io
- Phone: (703) 401-6262

---

### `/products` — Monitoring

**Headlines:**
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
- $200/month per motor, no hidden fees
- Includes: 3-phase current monitoring via split-core CTs, ESA/MCSA analysis local on edge, web dashboard, real-time alerts (email, dashboard), weekly health summaries, motor-specific adaptive baselines, cellular option, volume discounts for 5+
- Pilot kit ships pre-configured; maintenance electrician handles install in ~20 min
- No IT setup required
- Current-only catches majority of fault indicators
- Voltage reference is a plug-in transformer tap (optional add-on)
- Cellular: 4G LTE, no plant Wi-Fi or OT network needed, no inbound firewall rules
- Detection table: 6 current-only detections, 4 voltage-only (10 total rows)
- Footnote: "Indicators consistent with bearing or rotor faults require maintenance confirmation."

**People, company, contact:** None on this page directly.

---

### `/pilot` — Pilot Program

**Headlines:**
- H1: "Free 60-Day Pilot Program"
- H2: "How the Pilot Works"
- H3: "Choose your motors" (step 01)
- H3: "We ship your kit" (step 02)
- H3: "Install in ~20 minutes" (step 03)
- H3: "Baseline + monitoring" (step 04)
- H3: "Decision at 60 days" (step 05)
- H2: "What We Need From You"
- H2: "Success Criteria"
- H2: "Pricing After the Pilot"
- H2: "Get Your Pilot Started"

**Statistics and numbers:**
- "$0 upfront for the pilot" (trust pill)
- "~20 minutes" (step 03)
- "5 business days" (kit shipping time estimate)
- "two weeks" (baseline period)
- "$200/month per motor" (post-pilot pricing)

**Product claims:**
- Free 60-day pilot
- Walk away if no value — return hardware, no questions
- Pre-configured kit ships within ~5 business days of confirming site details
- First two weeks establishes motor-specific baselines; alerting activates after that
- At 60-day review: continue at $200/mo or return hardware, no hard sell
- No minimum contract required
- Volume discounts for 5+ motors

**People, company, contact:**
- anderson@edgepredict.io
- (703) 401-6262

---

### `/calculator` — Downtime Cost Estimator

**Headlines:**
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

**Statistics and numbers (default values pre-filled in form):**
- 5 motors (default)
- 50 HP average (default)
- 3 failures per year (default)
- 8 hours downtime per failure (default)
- $2,500/hr production loss (default)
- $5,000 scrap per event (default)
- $3,000 labor per event (default)
- $4,000 parts per event (default)
- Preventable percentages: Reactive = 75%, Preventive = 50%, Some Predictive = 30%
- EdgePredict cost in formula: "$200/mo" × 12 × motors = annual cost
- "5 motors × $200/mo" (results label)

**Product claims:**
- All figures update in real time
- Calculator computes: annual risk exposure, avoidable loss, EdgePredict annual cost, net annual benefit, ROI, payback period (months), 5-year comparison
- Email report includes "formatted PDF summary" (claim in form header — note: actual implementation sends plain-text email via Resend, not a PDF)
- "We'll follow up to answer any questions" (confirmation message)

**Disclaimer text:**
> "All figures are estimates based on your inputs and generalized industry assumptions. Actual costs and savings will vary by facility, industry, and motor criticality. EdgePredict does not guarantee specific ROI outcomes."

**People, company, contact:**
- anderson@edgepredict.io (referenced in error fallback text)

---

### `/contact` — Contact

**Headlines:**
- H1: "Talk to an engineer."
- H2: "Send us a message"
- H2: "Direct contact"
- H3: "Good questions to ask us:"

**Statistics and numbers:**
- "one business day" (response time commitment in success message)

**Product claims:**
- "No sales deck. Just a direct conversation about your motors, your facility, and whether EdgePredict is the right fit."
- "We'll be in touch within one business day."
- "No long sales process. We can have a kit on its way to you within a week."
- Form asks for: optional phone, optional "number of critical motors"

**People, company, contact:**
- Anderson Moffitt, Founder & CTO
- anderson@edgepredict.io
- (703) 401-6262
- contact@edgepredict.io

---

### `/security` — Security & IT Overview

**Headlines:**
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
- Does: reads current data from CTs, sends trend data over encrypted HTTPS, generates weekly health summaries by email, processes waveform data locally before transmitting summary metrics
- Does NOT: send control signals, require control network access (PLC/SCADA/DCS), connect to process systems, bridge OT and IT segments, require inbound firewall rules
- Quick Reference: Control signals = No; Control network access = No; Plant Wi-Fi = No (cellular option); Inbound firewall rules = Not required; Data encryption = HTTPS / TLS; On-prem option = Available
- Raw waveforms are not continuously transmitted
- No PLC tags, SCADA values, or production records are captured
- Dashboard access is role-controlled
- On-prem dashboard deployment available for strict data residency requirements

**People, company, contact:**
- anderson@edgepredict.io
- (703) 401-6262

---

### `/platform` — Free Maintenance Platform

**Headlines:**
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
- "$200/mo" (Monitor tier badge on Sensor Integration card)
- Mock dashboard data: 1 overdue item, 2 open work orders, 1 in progress, 8 completed (30d)
- PM items in mock: Pump-3 75HP, Fan-1 40HP (overdue), Conveyor-2 60HP, Compressor-1 100HP

**Product claims:**
- Free for small plants — no credit card, no time limit
- PM schedules auto-generated based on asset type and criticality
- Calendar view shows due/overdue/upcoming
- Work orders: create, assign, track, full audit trail, checklists, labor + parts tracking
- Asset management: unlimited assets, bulk CSV import, risk scoring
- AI Work Order Generator: plain English field notes → structured work order with steps, parts, priority
- Maintenance request workflow with supervisor approval; auto-converts to work orders
- Sensor integration feeds live data into maintenance plans; PM schedules adjust dynamically
- Free tier includes: unlimited assets, unlimited work orders, PM scheduling & calendar, AI work order generation, maintenance request workflow, CSV import, email notifications, multi-user access, full audit trail

**People, company, contact:** None on this page.

---

### `/pricing` — Pricing

**Headlines:**
- H1: "Simple, transparent pricing."
- H2: "Planner" (tier card)
- H2: "Pro" (tier card)
- H2: "Monitor" (tier card)
- Section eyebrow: "FAQ"
- H2: "Common questions"
- H3: "Is the free tier really free?"
- H3: "What happens after the 60-day pilot?"
- H3: "Can I start free and add sensors later?"
- H3: "Do I need IT involvement?"

**Statistics and numbers:**
- "$0 / Free forever" (Planner tier)
- "$99 / /mo per site" (Pro tier)
- "$200 / /mo per motor" (Monitor tier)
- "6 roles" (Pro feature: admin, supervisor, planner, scheduler, technician, requestor)
- "$200/mo per motor" (FAQ answer)
- "60-day free pilot" (Monitor feature + FAQ)

**Product claims:**
- Planner: free forever, no time limit, no feature throttling, no credit card
- Pro: multi-user, 6 roles, reporting, parts inventory, mobile view
- Monitor: sensor hardware included, real-time current signature analysis, live phase currents and health scores, dynamic PM scheduling, automated alerts, cellular (no IT), 20-min install, 60-day pilot
- All three tiers on one platform; start free, add sensors when ready
- FAQ: "most small plants have nothing — and something free is infinitely better than nothing"

**People, company, contact:** None directly; "Talk to an engineer" links to /contact.

---

## 4. Pricing Mentions

| Page | Section | Exact Text String | Refers To |
|---|---|---|---|
| / | Hero trust bullets | "$200/mo per motor for live monitoring" | Monitor tier monthly subscription |
| / | Hero image stat chip | "$200" + "per motor / month · no contracts" | Monitor tier monthly subscription |
| / | Platform Preview — Pro card | "$99/mo" (inline in H3) | Pro tier monthly subscription |
| / | Platform Preview — Monitor card | "$200/mo" (inline in H3) | Monitor tier monthly subscription |
| / | Pilot Callout fine print | "$200/month per motor after pilot · No long-term contract" | Post-pilot subscription price |
| / | Calculator results label | "5 motors × $200/mo" | EdgePredict annual cost calculation |
| /products | Subscription section | "$200/month per motor" (large purple text) | Monitor subscription |
| /pilot | Pricing After the Pilot section | "$200" (large, in bordered box) + "per motor / month" | Post-pilot subscription |
| /pilot | Step 05 body text | "Continue at $200/month per motor" | Post-pilot subscription |
| /calculator | Results panel | "5 motors × $200/mo" (metric sub-label) | EdgePredict annual cost |
| /calculator | Pilot CTA fine print | "$200/month per motor · Free 60-day pilot" | Post-pilot subscription |
| /calculator | Disclaimer note (computed) | Not a static string — dynamically computed from 200×12×motors | — |
| /security | (none) | — | — |
| /platform | Sensor Integration card badge | "$200/mo" (via Monitor Tier badge) | Implied Monitor tier pricing |
| /platform | Free tier note | "Sensor integration requires the Monitor Tier." | Implies pricing at /pricing |
| /pricing | Planner tier | "$0" + "Free forever" | Planner tier |
| /pricing | Pro tier | "$99" + "/mo per site" | Pro tier |
| /pricing | Monitor tier | "$200" + "/mo per motor" | Monitor tier |
| /pricing | FAQ answer | "you continue at $200/mo per motor" | Post-pilot Monitor subscription |
| /contact | (none) | — | — |

---

## 5. CTAs and Conversion Points

### Form 1: Contact Form (`/contact`)

| Attribute | Value |
|---|---|
| Page | /contact |
| Fields collected | name (required), company (required), email (required), phone (optional), numMotors (optional), message (required) |
| Submit target | POST /api/contact |
| Button text | "Send Message" |
| On success | Shows green "Message received" confirmation div in place of form |
| On error | Shows inline red error text: "Something went wrong. Please email us directly at anderson@edgepredict.io." |
| What happens server-side | Sends one email to anderson@edgepredict.io via Resend; reply-to set to submitter's email |
| Env var required | RESEND_API_KEY |

---

### Form 2: Calculator Report (`/calculator`)

| Attribute | Value |
|---|---|
| Page | /calculator |
| Fields collected | name (required), company (required), email (required) |
| Additional data sent | All calculator inputs + all calculated results (sent as JSON) |
| Submit target | POST /api/calculator-report |
| Button text | "Email me the full report" (changes to "Sending…" while in flight) |
| On success | Shows "✓ Report on its way!" confirmation block |
| On error | Shows "Something went wrong. Email us directly: anderson@edgepredict.io" |
| What happens server-side | Sends two emails simultaneously via Resend: (1) notification to anderson@edgepredict.io with full report data; (2) formatted plain-text report to the submitter's email |
| Note | Form copy says "formatted PDF summary" but actual implementation sends plain-text email — no PDF is generated |
| Env var required | RESEND_API_KEY |

---

### Non-form CTAs and conversion points

| Page | Text | Destination | Type |
|---|---|---|---|
| / (hero) | "Start Free" | https://tools.edgepredict.io/signup | External link |
| / (final CTA) | "Start Your Free Pilot" | /pilot | Internal |
| / (final CTA) | "Talk to an Engineer" | /contact | Internal |
| /platform (hero) | "Start Free" | https://tools.edgepredict.io/signup | External link |
| /platform (CTA section) | "Create Free Account" | https://tools.edgepredict.io/signup | External link |
| /platform (CTA section) | "Sign in →" | https://tools.edgepredict.io/login | External link |
| /pricing (Planner) | "Start Free" | https://tools.edgepredict.io/signup | External link |
| /pricing (Pro) | "Join Waitlist" | /contact | Internal (routes to contact form) |
| /pricing (Monitor) | "Start Your Free Pilot" | /pilot | Internal |
| Nav (all pages) | "Start Free" | https://tools.edgepredict.io/signup | External link |

---

## 6. Images and Visual Assets

| Asset | Source | Description | Page / Section |
|---|---|---|---|
| `/og-image.jpg` | Local `/public/og-image.jpg` | Used as the **navigation logo** (h-14 height). Also declared as the Open Graph image in root layout metadata. | Every page — Nav |
| `/og-image.jpg` | Local `/public/og-image.jpg` | Open Graph social share image (1200×630) | Metadata only, all pages |
| `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80` | External — Unsplash CDN | Maintenance electrician working on motor panel | Homepage — Hero section (right column, h-420px) |
| `/favicon.ico` | Local `/public/favicon.ico` | Favicon (any size) | Browser tab |
| `/favicon-16x16.png` | Local `/public/favicon-16x16.png` | Favicon 16×16 | Browser tab |
| `/favicon-32x32.png` | Local `/public/favicon-32x32.png` | Favicon 32×32 | Browser tab |
| `/apple-touch-icon.png` | Local `/public/apple-touch-icon.png` | Apple touch icon (180×180) | iOS home screen |
| `/android-chrome-192x192.png` | Local `/public/android-chrome-192x192.png` | Android PWA icon | site.webmanifest |
| `/android-chrome-512x512.png` | Local `/public/android-chrome-512x512.png` | Android PWA icon (large) | site.webmanifest |

**Notes:**
- The navigation logo (`/og-image.jpg`) is the OG social share image repurposed as a logo — this is unusual. There is no separate logo file (no SVG, no logomark).
- All dashboard UI on `/` and `/platform` is **inline JSX** (no images).
- No product screenshots, no team photos, no illustrations beyond the one Unsplash hero image.

---

## 7. API Routes

### `POST /api/contact`

| Attribute | Detail |
|---|---|
| File | `src/app/api/contact/route.ts` |
| Method | POST |
| Request body | `{ name: string, company: string, email: string, phone?: string, message: string, numMotors?: string }` |
| Validation | Returns 400 if name, company, email, or message is missing |
| Action | Sends one email to `anderson@edgepredict.io` via Resend SDK |
| From address | `EdgePredict <noreply@edgepredict.io>` |
| Reply-To | Set to submitter's email address |
| Email format | Plain text |
| Success response | `{ success: true }` HTTP 200 |
| Error response | `{ error: "Missing required fields" }` HTTP 400, or `{ error: "Internal server error" }` HTTP 500 |
| Env vars required | `RESEND_API_KEY` |
| Client-side behavior on error | Resend client is lazily initialized inside the handler on each request |

---

### `POST /api/calculator-report`

| Attribute | Detail |
|---|---|
| File | `src/app/api/calculator-report/route.ts` |
| Method | POST |
| Request body | `{ name: string, company: string, email: string, inputs: Inputs, results: Results }` |
| Validation | Returns 400 if name, company, or email is missing |
| Action | Sends **two emails simultaneously** via `Promise.all` |
| Email 1 | To anderson@edgepredict.io — notification with full report text |
| Email 2 | To submitter's email — formatted plain-text report |
| From address | `EdgePredict <noreply@edgepredict.io>` |
| Email 1 reply-to | Submitter's email |
| Email 2 reply-to | anderson@edgepredict.io |
| Email format | Plain text (not HTML, not PDF — despite "PDF summary" claim in UI) |
| Success response | `{ success: true }` HTTP 200 |
| Error response | `{ error: "Missing required fields" }` HTTP 400, or `{ error: "Internal server error" }` HTTP 500 |
| Env vars required | `RESEND_API_KEY` |

---

## 8. Meta Tags and SEO

### Root Layout (`src/app/layout.tsx`)

| Tag | Value |
|---|---|
| Default title | "EdgePredict — Motor Condition Monitoring for Industrial Facilities" |
| Default description | "Non-invasive motor health monitoring using Electrical Signature Analysis (ESA). $200/month per motor. ~20-minute install. Free 60-day pilot. No plant network required." |
| Keywords | "motor condition monitoring, electrical signature analysis, MCSA, ESA, predictive maintenance, motor health, phase imbalance, current unbalance, industrial motors" |
| Author / Creator / Publisher | EdgePredict |
| metadataBase | https://www.edgepredict.io |
| Canonical | / (root only) |
| OG title | "EdgePredict — Motor Condition Monitoring" |
| OG description | "Non-invasive motor health monitoring using ESA. $200/month per motor. Free 60-day pilot. No plant network required." |
| OG url | https://www.edgepredict.io |
| OG siteName | EdgePredict |
| OG image | https://www.edgepredict.io/og-image.jpg (1200×630) |
| OG locale | en_US |
| OG type | website |
| Twitter card | summary_large_image |
| Twitter image | https://www.edgepredict.io/og-image.jpg |
| robots | index: true, follow: true |
| Fonts loaded | **None.** No Google Fonts, no next/font, no @font-face. System sans-serif stack. |
| Analytics | `@vercel/analytics` — `<Analytics />` component from `@vercel/analytics/next` injected in root layout |

---

### Per-page metadata overrides

| Page | Title | Meta Description |
|---|---|---|
| / | "EdgePredict — Stop Unplanned Motor Downtime" | "Non-invasive motor condition monitoring using Electrical Signature Analysis (ESA). Catch developing issues early. $200/month per motor. Free 60-day pilot." |
| /products | "Product — EdgePredict Motor Condition Monitoring" | "Motor condition monitoring using ESA/MCSA. $200/month per motor. Split-core CT installation. Cellular option. Optional voltage reference." |
| /pilot | "Free 60-Day Pilot — EdgePredict" | "Start a free 60-day motor condition monitoring pilot. No plant network required. Walk away if no value." |
| /calculator | (none set — inherits root) | (inherits root) |
| /contact | (none set — inherits root) | (inherits root) |
| /security | "Security & IT Overview — EdgePredict" | "Plain-English security overview for plant IT and OT teams. Read-only monitoring. No control signals. Cellular option requires no plant network access." |
| /platform | "Free Maintenance Platform — EdgePredict" | "PM scheduling, work orders, asset management, and AI-generated maintenance plans — free for small plants. Add sensors when you're ready." |
| /pricing | "Pricing — EdgePredict" | "Simple, transparent pricing. Free maintenance planning platform. $200/mo per motor for live sensor monitoring. Start free, upgrade when you're ready." |

**Notes:**
- `/calculator` and `/contact` have no `export const metadata` — they use `"use client"` and inherit the root layout defaults.
- No page sets a per-page canonical URL (other than the root `/` canonical in the root layout).
- No structured data (JSON-LD, Schema.org) is implemented on any page.

---

## 9. Color and Style Inventory

### Brand colors (non-gray, non-white, non-black)

| Color | Hex / Class | Usage |
|---|---|---|
| Brand Purple | `#7655d6` | Primary CTAs, icons, accents, borders, section backgrounds (Pilot Callout, Platform CTA) |
| Brand Purple (hover) | `#5d3db8` | CTA hover states |
| Light Purple (on dark) | `#a78fe8` | Eyebrow text on dark sections, light accent |
| Purple 400 (Tailwind) | `text-purple-400` | Footer wordmark "Edge" prefix, footer link text |
| Purple 200 (Tailwind) | `text-purple-200` | Fine print text on purple background sections |
| Purple 300 (Tailwind) | `text-purple-300` | "Sign in" link on platform CTA |
| Purple tints | `bg-[#7655d6]/5`, `bg-[#7655d6]/10`, `bg-[#7655d6]/40` | Card backgrounds, border opacity modifiers |
| Green 500 | `text-green-500` / `bg-green-500` | Checkmarks, motor status bars |
| Green 400 | `text-green-400` / `bg-green-400` | Dashboard Live indicator, fleet health text, completed status |
| Green 600 | `text-green-600` | Positive ROI/savings text in calculator, form success icon |
| Green (badge) | `bg-green-100 text-green-700` | "Free" badges throughout |
| Amber/Yellow 400 | `text-yellow-400` / `bg-yellow-400` | Watch/warning status, dashboard alerts |
| Amber (badge) | `bg-amber-100 text-amber-700` | "Coming Soon" badge on Pro tier |
| Red 400/500 | `text-red-400` / `bg-red-400` | Overdue status, negative numbers in calculator |
| Blue 400 | `text-blue-400` / `bg-blue-400/10` | "Open" status badge in platform dashboard mock |
| Orange 400 | `bg-orange-400` | Calculator bar chart (scrap/WIP loss) |

### Font families

No explicit `font-family` declarations exist in `globals.css` or any component. The site renders in the **browser's default system sans-serif stack** as set by Tailwind's base reset:
```
ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, ...
```
**Monospace** (`font-mono`) is used in dashboard mocks and the calculator results panel for the UI chrome aesthetic.

### Dark mode

Dark mode CSS variables are defined in `globals.css` (`.dark` class), but **dark mode is not actually enabled** — the site has no dark mode toggle, no `prefers-color-scheme` media query usage, and the `tailwind.config.ts` sets `darkMode: ["class"]` (requires an explicit class to activate). No page or component applies the `dark` class. The dark-themed sections use hardcoded Tailwind classes (`bg-gray-900`, `bg-gray-950`) rather than the CSS variable system.

### CSS Custom Properties (defined in `globals.css` `:root`)

```
--background: 0 0% 100%
--foreground: 240 10% 3.9%
--card: 0 0% 100%
--card-foreground: 240 10% 3.9%
--popover: 0 0% 100%
--popover-foreground: 240 10% 3.9%
--primary: 240 5.9% 10%
--primary-foreground: 0 0% 98%
--secondary: 240 4.8% 95.9%
--secondary-foreground: 240 5.9% 10%
--muted: 240 4.8% 95.9%
--muted-foreground: 240 3.8% 46.1%
--accent: 240 4.8% 95.9%
--accent-foreground: 240 5.9% 10%
--destructive: 0 84.2% 60.2%
--destructive-foreground: 0 0% 98%
--border: 240 5.9% 90%
--input: 240 5.9% 90%
--ring: 240 5.9% 10%
--radius: 0.5rem
--chart-1 through --chart-5: (various)
```

**Note:** These CSS variables are consumed by the shadcn/ui component files (`button.tsx`, `card.tsx`, `badge.tsx`) but the actual page content does **not** use these variables — all page styling uses hardcoded hex colors (`#7655d6`) or standard Tailwind gray classes directly.

---

## 10. Broken or Placeholder Content

| Issue | Severity | Location | Detail |
|---|---|---|---|
| Privacy Policy links to `#` | Medium | Footer (all pages) | `<a href="#">Privacy Policy</a>` — no actual page exists |
| Terms of Service links to `#` | Medium | Footer (all pages) | `<a href="#">Terms of Service</a>` — no actual page exists |
| Nav logo is the OG image | Low | Nav (all pages) | `/og-image.jpg` is used as both the logo (`h-14`) and the 1200×630 OG social share image. Likely placeholder; no dedicated SVG logo file exists. |
| Unsplash stock photo in hero | Low | Homepage — Hero | `https://images.unsplash.com/photo-1581091226825-...` — external URL hardcoded in JSX. Should be replaced with owned/licensed asset or moved to `/public`. |
| Calculator claims "PDF summary" | Medium | /calculator — lead capture form | Form header says "We'll send a formatted PDF summary of your numbers." The API route sends a plain-text email — no PDF is generated or attached. The claim is inaccurate. |
| `https://tools.edgepredict.io/signup` | Unknown | Nav, /, /platform, /pricing | External URL pointed to by the primary CTA. The subdomain `tools.edgepredict.io` may not yet be live. If it returns 404 or doesn't exist, all primary CTAs fail. |
| `https://tools.edgepredict.io/login` | Unknown | /platform — CTA section | "Already have an account? Sign in →" link. Same subdomain risk as above. |
| `/pricing` not linked from metadata | Low | Root layout | The root layout metadata canonical is set to `/` only. New pages `/platform` and `/pricing` have no individual canonical set (they inherit root which points to `/`). |
| Calculator and Contact pages: no metadata | Low | /calculator, /contact | These pages use `"use client"` at the top level and have no `export const metadata`. They inherit the root layout title/description which references sensor monitoring, not the CMMS platform. |
| shadcn `ui/` components unused | Low | `src/components/ui/` | `badge.tsx`, `button.tsx`, `card.tsx` exist from the shadcn scaffold but are not imported by any page. Dead code. |
| `same-runtime` dependency | Low | `package.json` | `"same-runtime": "^0.0.1"` is listed as a dependency. This is a SameNew/Bolt.new scaffold artifact with no documented public purpose. Likely safe to remove. |
| `netlify.toml` present but deploying to Vercel | Low | `netlify.toml` | The site uses Vercel Analytics and appears deployed on Vercel (no `vercel.json`). The `netlify.toml` may be a leftover from initial scaffolding. |
| `Shield` icon imported but unused | Low | `src/app/page.tsx` | `import { ..., Shield, ... }` — `Shield` is imported but never used in the JSX. |

---

## 11. Mobile Responsiveness

All pages use Tailwind CSS responsive breakpoints. No separate mobile stylesheets exist.

### Breakpoint reference
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Per-page breakdown

| Page | Key responsive behaviors |
|---|---|
| `/` | Hero: `lg:grid-cols-2` (2-col at lg, stacked below). Platform Preview: `md:grid-cols-3`. Problem: `md:grid-cols-3`. How It Works: `md:grid-cols-3`. What It Detects: `lg:grid-cols-2`. Why EdgePredict: `md:grid-cols-3`. Pilot Callout: `sm:grid-cols-2 lg:grid-cols-4`. Final CTA: `flex-wrap` (stacks naturally). |
| `/products` | Optional Voltage Reference: `md:grid-cols-2`. Detection table: `overflow-x-auto` (scrolls horizontally on small screens). CTA: `flex-col sm:flex-row`. |
| `/pilot` | Steps: single column, max-w-3xl. Requirements/Success Criteria: single column. CTA contact: `flex-col sm:flex-row`. |
| `/calculator` | Main layout: `lg:grid-cols-2` (stacks on mobile). Input cards and result cards each stack vertically. Result KPI grid: `grid-cols-2` (stays 2-col even on mobile). |
| `/contact` | Main layout: `lg:grid-cols-2` (stacks on mobile). Form fields row: `sm:grid-cols-2` for name/company and phone/motors pairs. |
| `/security` | Does/Does Not: `md:grid-cols-2`. Detection table: `overflow-x-auto`. CTA: `flex-col sm:flex-row`. |
| `/platform` | Feature grid: `md:grid-cols-2 lg:grid-cols-3`. How It Works: `md:grid-cols-3`. Dashboard: `lg:grid-cols-2` inside mock. Free tier grid: `sm:grid-cols-2 lg:grid-cols-3`. |
| `/pricing` | Tier cards: `lg:grid-cols-3` (stacks to 1-col below lg). FAQ: single column, max-w-3xl. |
| Nav | Desktop links visible at `md:flex`; hamburger + mobile dropdown visible below `md`. |
| Footer | 4-column grid at `md:grid-cols-4`; stacks to single column on mobile. |

### Known mobile considerations
- The Nav on mobile shows all 7 links + the CTA in a dropdown, which is a long list; no grouping or secondary nav on mobile.
- The calculator's two-column layout (inputs + results) stacks on mobile, requiring the user to scroll down past all inputs to see their results update — no sticky results panel on mobile.
- The dashboard mock on `/` and `/platform` is fixed-width in places (`w-44` on motor names, `grid-cols-4` KPI row) and may overflow on very small screens, though both mocks are wrapped in `overflow-hidden` containers.
- The `/platform` dashboard mock uses `lg:grid-cols-2` for the two panels — on mobile they stack, which is fine.
- No `viewport` meta tag is explicitly set in the code — Next.js App Router injects a default viewport meta tag automatically.
