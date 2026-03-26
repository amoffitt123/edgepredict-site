# EdgePredict Website Audit
**Generated:** 2026-03-25
**Branch:** main
**Last commit:** 8562a2b — Fix SEO, metadata, mock data, blog dates, and remove unused scaffolds

---

## 1. FULL SITE MAP

| Route | Page Title | Meta Title |
|-------|-----------|------------|
| `/` | Home | EdgePredict — Maintenance Management & Motor Monitoring |
| `/platform` | Platform | Maintenance Platform — EdgePredict |
| `/monitoring` | Motor Monitoring | Motor Monitoring — EdgePredict |
| `/pricing` | Pricing | Pricing — EdgePredict |
| `/pilot` | Free 60-Day Pilot | Free 60-Day Pilot — EdgePredict |
| `/blog` | Blog | Blog — EdgePredict |
| `/blog/[slug]` | (dynamic) | {Post Title} — EdgePredict Blog |
| `/calculator` | Downtime Calculator | Downtime Cost Calculator — EdgePredict |
| `/contact` | Contact | Contact — EdgePredict |
| `/security` | Security & IT | Security & IT Overview — EdgePredict |
| `/products` | (redirect) | Redirects to `/monitoring` |
| `/404` | Not Found | Page not found. |

**Note:** `/products` is a silent redirect to `/monitoring`. `/pilot`, `/security` are not in the desktop nav. The blog has 10 individual post pages at `/blog/[slug]`.

---

## 2. COMPLETE PAGE TEXT CONTENT

---

### HOME (`/`)

**Meta title:** EdgePredict — Maintenance Management & Motor Monitoring
**Meta description:** The only platform where your CMMS and your sensors are one system. Free maintenance management with optional motor monitoring sensors.

---

#### SECTION 1 — HERO

**Eyebrow:** Maintenance Management + Motor Monitoring

**H1:**
> Manage your maintenance.
> Monitor your motors.

**Body:**
> Built by engineers who've been on the plant floor. We designed the sensors, wrote the firmware, and built the platform. We couldn't find a tool that worked the way maintenance actually works, so we built it ourselves.

**CTA buttons:**
- `Get Started` → https://tools.edgepredict.io/signup
- `See the Dashboard` → `#demo` (anchor link on same page)

**Trust pills (below CTAs):**
- ✓ Free plan available
- ✓ No credit card required
- ✓ Built by maintenance engineers

**Hero card — MANAGEMENT panel:**
- Label: MANAGEMENT
- PM-042: Pump bearing grease — `On Time`
- WO-108: Fan belt replacement — `Due Tomorrow`
- WO-091: Compressor inspection — `Overdue`
- Footer text: `3 items need attention today`

**Hero card — MONITORING panel:**
- Label: MONITORING
- Pump P-101 — 98% (green)
- Fan F-201 — 87% (green)
- Compressor AC-401 — 71% (amber)
- Footer text: `3 motors online · 0 alerts`

---

#### SECTION 2 — SOCIAL PROOF BAR

> Built by maintenance engineers and electrical engineers. Deployed at pharmaceutical, manufacturing, and industrial facilities.

---

#### SECTION 3 — THE TWO SIDES

**Eyebrow:** One Platform. Two Superpowers.

**H2:** Management and monitoring, built as one.

**Body:**
> Most plants use separate tools for maintenance management and equipment monitoring. Most use nothing at all. EdgePredict is the only platform where both sides share data, share context, and make each other smarter.

**Maintenance Management card — feature list:**
- Work orders with full lifecycle tracking
- PM scheduling with auto-generated templates
- Inspections with pass/fail checklists
- Asset management with risk scoring
- Parts inventory & purchase orders
- AI work order generator
- Drag-and-drop scheduling with AI suggestions
- Reporting: MTTR, PM compliance, downtime

**Link:** `Explore the Platform →` → `/platform`

**Motor Monitoring card — feature list:**
- Phase imbalance detection
- Phase loss, caught instantly
- Load instability monitoring
- Overload & near-stall conditions
- Mechanical fault indicators
- Baseline learning per motor
- Real-time health dashboard
- Cellular connectivity, no IT required

**Link:** `Learn About Monitoring →` → `/monitoring`

---

#### SECTION 4 — THE BRIDGE (purple band)

**H2:** When your sensors talk to your CMMS, everything changes.

**Body:**
> Other platforms manage maintenance OR monitor equipment. EdgePredict does both and connects them. When a sensor detects rising current imbalance, your PM schedule adjusts automatically. When a condition trigger fires, a work order creates itself. That's not integration. That's one system.

**Three stat cards:**
- **Condition → PM** — Sensor data updates your maintenance schedule in real time
- **Alert → Work Order** — Fault detected? Work order created automatically
- **Complete → Verified** — Maintenance completion confirms sensor baseline

---

#### SECTION 5 — DASHBOARD MOCK (id="demo")

**Eyebrow:** See It In Action

**H2:** Your daily view. Management and monitoring together.

**Browser address bar shows:** tools.edgepredict.io

**Left panel — Today's Maintenance (Live)**

KPI row:
- Open WOs: **7** (blue)
- Due Today: **3** (amber)
- Overdue: **1** (red)
- Completed: **24** (green)

Work order list:
- WO-112 — Pump P-101 bearing grease — `Due Today`
- WO-111 — Fan F-201 belt inspection — `In Progress`
- WO-110 — Compressor quarterly PM — `Overdue`
- WO-109 — Conveyor lubrication — `Open`

**Right panel — Motor Fleet Health (Live)**

KPI row:
- Fleet Score: **87/100** (green)
- Online: **8/8** (white)
- Alerts: **1** (amber)

Motor list:
- Pump P-101 — 98%
- Fan F-201 — 87%
- Compressor AC-301 — 91%
- Conveyor C-301 — 71% (amber)

Alert bar: `⚠ Conveyor C-301: current imbalance elevated. Review during next PM.`

**Below mock:** `This is sample data. Sign up to explore with your own equipment.`

**CTA:** `Get Started` → https://tools.edgepredict.io/signup

---

#### SECTION 6 — WHY EDGEPREDICT

**Eyebrow:** Why EdgePredict

**H2:** What makes this different.

**Cards (4):**

**vs. CMMS-Only Tools**
> MaintainX and UpKeep charge per user and don't have sensors. You get maintenance management, but your PM schedules are still time-based guesswork. No condition data. No integration. No sensor tier at any price.

**vs. Monitoring-Only Systems**
> Augury, Tractian, and enterprise systems start at $500-2,000/motor with $50-100K setup costs. They'll tell you a motor is degrading. They won't create the work order, schedule the repair, or track completion. That's a different system you have to buy separately.

**EdgePredict: Both, as One** (highlighted in purple)
> One platform. Sensors and CMMS built together. When a motor degrades, your PM schedule updates, a work order creates itself, and the repair gets tracked to completion. Nothing falls through the cracks because everything is the same system.

**Built by People Who've Done the Work**
> Our team designed the sensor PCB, wrote the ESP32 firmware, and deployed our first pilot by hand. We're electrical engineers and reliability professionals, not just developers. We built EdgePredict because we needed it on the plant floor and couldn't find it.

---

#### SECTION 7 — PRICING PREVIEW

**Eyebrow:** Pricing

**H2:** Start free. Add sensors when you're ready.

**Planner card:**
- Badge: `Free`
- Price: **$0** forever
- Description: Unlimited users. Unlimited assets and work orders. 3 attachments per WO. No trial period. Free forever.
- Features: Unlimited users / Unlimited assets & WOs / PM scheduling / Inspections / AI work order generation / 3 attachments per WO
- CTA: `Get Started` → https://tools.edgepredict.io/signup

**Pro card:**
- Badge: `Most Popular`
- Price: **$99** /mo per site
- Description: Unlimited attachments. All features unlocked. Billed monthly, cancel anytime.
- Features: Everything in Planner / Unlimited attachments / Drag-and-drop scheduling / AI scheduling suggestions / Advanced reporting / Workflow automation / Custom fields / Priority support
- CTA: `Get Started` → https://tools.edgepredict.io/signup

**Monitor card:**
- Badge: `Sensors`
- Price: **$200** /mo per motor
- Description: Includes all Pro features. Hardware ships pre-configured. 60-day pilot is truly free.
- Features: Sensor hardware included / ESA monitoring / Condition-based PM / Dynamic PM scheduling / Cellular connectivity / 60-day free pilot
- CTA: `Start Free Pilot` → `/pilot`

**Footer link:** `See full pricing details →` → `/pricing`

---

#### SECTION 8 — HOW IT WORKS

**Eyebrow:** Getting Started

**H2:** Three steps to a better maintenance program.

**Step 01 — Sign up and add equipment**
> Create your account, register your assets, and get PM schedules generated automatically. Takes about 10 minutes for a typical plant.

**Step 02 — Run your maintenance program**
> Work orders, PM scheduling, inspections: everything in one place. Your team stops running on whiteboards and starts running on data.

**Step 03 — Add sensors when ready**
> Connect our motor monitoring sensors to your most critical equipment. Time-based maintenance becomes condition-based, driven by real electrical signature data.

---

#### SECTION 9 — FINAL CTA

**H2:** Your plant deserves better than guesswork.

**Body:**
> Built by engineers. Used by maintenance teams. Designed for the plants that everyone else ignores.

**CTAs:**
- `Get Started` → https://tools.edgepredict.io/signup
- `Start Free Pilot` → `/pilot`

**Contact line:**
- anderson@edgepredict.io · (703) 401-6262

---

### PLATFORM (`/platform`)

**Meta title:** Maintenance Platform — EdgePredict
**Meta description:** PM scheduling, work orders, asset management, inspections, parts inventory, reporting, and AI-generated work orders. Free for any plant size.

---

#### SECTION 1 — HERO

**Eyebrow:** Maintenance Management

**H1:**
> A real CMMS.
> Not a compromise.

**Body:**
> We've seen the whiteboards, the sticky notes, the spreadsheets that nobody updates. This is the CMMS we wish existed when we were on the floor.

**CTAs:**
- `Get Started` → https://tools.edgepredict.io/signup
- `See Pricing` → `/pricing`

---

#### SECTION 2 — FEATURE GRID

**Eyebrow:** What's Inside

**H2:** Built for maintenance teams, not enterprise IT.

**Feature cards (8):**

**Work Orders**
> Full lifecycle tracking from open to completed. Checklists, labor hours, parts used, full audit trail. Every change recorded.

**PM Scheduling**
> Add equipment once, get maintenance schedules generated automatically. Calendar color-coded by risk: red for overdue, amber for due soon.

**Inspections**
> Pass/fail checklists that auto-create corrective work orders when something fails. Auto-scheduled by frequency. Never miss one.

**Asset Management**
> Register every motor, pump, compressor. Bulk import via CSV. Each asset gets a risk score from criticality, failure history, and spares.

**Parts & Inventory**
> Track stock levels, reorder points, and usage per work order. Purchase orders. Know what you have before you need it.

**Reporting**
> MTTR, PM compliance, downtime by asset and cause. The numbers that tell you where your maintenance program actually stands.

**Team Management**
> 6 RBAC roles: admin, supervisor, planner, scheduler, technician, requestor. Every person sees exactly what they need.

**AI + Automation**
> AI work order generator turns field notes into structured work orders in 3 seconds. Drag-and-drop scheduling with AI suggestions. Automation rules. Custom fields.

---

#### SECTION 3 — DASHBOARD MOCK

**Eyebrow:** Daily View

**H2:** Everything in one place.

Browser title bar: `EdgePredict · Maintenance Platform` (Live)

**Tabs:** PM Schedule (active) / Work Orders / Assets

**PM Schedule panel — PM Schedule | March 2026 (1 overdue)**

| Asset | Next Due | Status |
|-------|----------|--------|
| Pump-3 · 75 HP | Jun 15 | On Track |
| Fan-1 · 40 HP | Jun 1 | Overdue |
| Conveyor-2 · 60 HP | Jun 9 | Due Soon |
| Compressor-1 · 100 HP | Jun 20 | On Track |

**Work Orders panel (2 open)**

| ID | Title | Assignee | Status |
|----|-------|----------|--------|
| WO-042 | Inspect Fan-1 bearings | J. Torres | Open |
| WO-041 | Replace Conveyor-2 belt | M. Davis | In Progress |
| WO-040 | Quarterly PM: Compressor-1 | J. Torres | Completed |
| WO-039 | Lubricate Pump-3 bearings | R. Singh | Completed |

**Quick stats:** Open: 2 / In Progress: 1 / Done (30d): 8

---

#### SECTION 4 — SENSOR CONNECTION

**Eyebrow:** Better Together

**H2:** Add sensors. Watch your CMMS get smarter.

**Body:**
> When you connect EdgePredict motor monitoring sensors, your time-based PM schedules become condition-based. Your PM interval adjusts from real motor health data, not a fixed calendar. When a motor degrades, a work order creates itself.

**Link:** `Learn About Monitoring →` → `/monitoring`

---

#### SECTION 5 — CTA

**H2:** Start running your maintenance program.

**Body:** No credit card. No time limit. Built by engineers who've been where you are.

**CTA:** `Get Started Free` → https://tools.edgepredict.io/signup

**Secondary link:** `Already have an account? Log in →` → https://tools.edgepredict.io/login

---

### MONITORING (`/monitoring`)

**Meta title:** Motor Monitoring — EdgePredict
**Meta description:** Non-invasive motor monitoring using electrical signature analysis. $200/mo per motor. 20-minute install. Cellular connectivity. Free 60-day pilot.

---

#### SECTION 1 — HERO

**H1:** Motor Condition Monitoring

**Body:**
> Non-invasive health monitoring for industrial electric motors using Electrical Signature Analysis.

---

#### SECTION 2 — SUBSCRIPTION CARD

**H2:** Motor Monitoring Subscription

**Price:** $200/month per motor

**Body:** Everything you need to monitor motor health. No hidden fees.

**What's included:**
- 3-phase current monitoring via split-core CTs
- ESA/MCSA analysis, processed locally on the edge device
- Web-based monitoring dashboard access
- Real-time alerts (email, dashboard)
- Weekly motor health summaries
- Motor-specific adaptive baselines
- Cellular option, no plant network required
- Volume discounts for 5+ motors

---

#### SECTION 3 — PILOT KIT

**H2:** Pilot Kit: What's Included

**Body:** Everything ships pre-configured. Your maintenance electrician handles the clamp-on install in about 20 minutes.

**Kit items:**
- Pre-configured edge gateway (plug-in, no IT setup)
- Split-core CTs for motor feeder conductors
- Cellular connectivity option for pilots
- Dashboard access from day one
- Weekly health report emails
- Support from an engineer, not a ticketing system

---

#### SECTION 4 — OPTIONAL VOLTAGE REFERENCE

**H2:** Optional Voltage Reference

**Body:**
> Current-only monitoring catches the majority of motor fault indicators. Adding a voltage reference unlocks additional supply-side visibility.

**What It Adds:**
- Voltage unbalance detection
- Undervoltage monitoring
- Power factor / kVAR tracking
- Frequency drift alerts
- Supply quality anomaly identification

**How It Works:**
> A plug-in transformer tap connects to a 120V panel circuit near the monitoring point. It is an optional add-on. It does not replace current-only monitoring and is not required for the pilot.
>
> Most pilot customers start with current-only monitoring and evaluate whether voltage reference is warranted for their specific facility.

---

#### SECTION 5 — CONNECTIVITY

**H2:** Connectivity

**Body:**
> No plant network access required. The edge gateway operates on cellular during pilots. No IT ticket, no network diagram, no approval process.

**List:**
- Cellular option available, 4G LTE for pilot deployments
- Works on cellular, no plant Wi-Fi or OT network connection needed
- No inbound firewall rules required
- Optional plant network connection supported (outbound HTTPS only)

---

#### SECTION 6 — ESA COMPARISON

**Eyebrow:** How It Compares

**H2:** Current analysis vs. vibration vs. nothing.

**Body:**
> Most plants either use vibration sensors, run to failure, or have enterprise systems they can't afford. Here's how electrical signature analysis stacks up.

**Column 1 — Run to Failure**
- No warning before failure
- Emergency repairs at 3-5x cost
- Unplanned downtime kills production
- PM schedules based on guesswork
- No data on equipment health

*Footer note: This is where 85% of small plants are today.*

**Column 2 — Vibration Sensors**
- ✓ Detects bearing wear and misalignment
- ✓ Established technology
- ✗ Requires mounting on equipment
- ✗ Cannot detect electrical faults
- ✗ Cannot detect phase imbalance or loss
- ✗ Cannot detect supply quality issues
- ✗ Often requires plant network access
- ✗ Typical setup: $50K+ capital project

*Footer note: Good for mechanical faults. Blind to electrical ones.*

**Column 3 — Current Signature Analysis (EdgePredict)**
- ✓ Phase imbalance and phase loss detection
- ✓ Overload and load instability
- ✓ Mechanical fault indicators from current
- ✓ Supply quality and power factor monitoring
- ✓ Non-invasive clamp-on install in 20 minutes
- ✓ Cellular connectivity, no plant network
- ✓ No capital project, $200/mo per motor
- ✓ Adaptive baseline learning per motor

*Footer note: Sees electrical AND mechanical faults from the current alone.*

---

#### SECTION 7 — DETECTION TABLE

**H2:** What Gets Detected

**Body:**
> Electrical Signature Analysis (ESA) and MCSA methods applied locally on the edge device.

| Detection | Current Only | With Voltage Reference |
|-----------|:---:|:---:|
| Phase imbalance | ✓ | ✓ |
| Phase loss | ✓ | ✓ |
| Load anomalies | ✓ | ✓ |
| Overload / near-stall | ✓ | ✓ |
| Mechanical fault indicators* | ✓ | ✓ |
| Electrical fault indicators* | ✓ | ✓ |
| Voltage unbalance | ✗ | ✓ |
| Undervoltage | ✗ | ✓ |
| Power factor / kVAR | ✗ | ✓ |
| Supply quality | ✗ | ✓ |

*\* Indicators consistent with bearing or rotor faults require maintenance confirmation.*

---

#### SECTION 8 — CTA

**H2:** Ready to Get Started?

**Body:**
> Start with a free 60-day pilot or run the downtime calculator to estimate your exposure.

**CTAs:**
- `Start Your Free Pilot →` → `/pilot`
- `Try the Downtime Calculator →` → `/calculator`

---

### PRICING (`/pricing`)

**Meta title:** Pricing — EdgePredict
**Meta description:** Simple, transparent pricing. Free maintenance management platform with unlimited users and work orders. $99/mo for Pro. $200/mo per motor for sensor monitoring.

---

#### SECTION 1 — HERO

**H1:** Simple, transparent pricing.

**Body:** Start free. Add sensors when you're ready.

---

#### SECTION 2 — TIER CARDS

**Planner**
- Badge: `Free`
- Price: **$0**
- Sub: Free forever
- Description: Unlimited users. Unlimited assets and work orders. 3 attachments per WO. No trial period. Free forever.
- CTA: `Get Started →` → https://tools.edgepredict.io/signup
- Features: Unlimited users / Unlimited assets & work orders / PM scheduling / Inspections with auto-WO creation / AI work order generator / Parts inventory / 3 attachments per work order / CSV import / export

**Pro**
- Badge: `Most Popular`
- Price: **$99**
- Sub: /mo per site
- Description: Unlimited attachments. All features unlocked. Billed monthly, cancel anytime.
- CTA: `Get Started →` → https://tools.edgepredict.io/signup
- Features prefix: `Everything in Planner, plus:`
- Features: Unlimited attachments / Drag-and-drop scheduling / AI scheduling suggestions / Advanced reporting & analytics / Purchase orders / Workflow automation / Custom fields / Priority support

**Monitor**
- Badge: `Sensors`
- Price: **$200**
- Sub: /mo per motor
- Description: Includes all Pro features. Hardware ships pre-configured. 60-day pilot is truly free.
- CTA: `Start Free Pilot →` → `/pilot`
- Features prefix: `Everything in Pro, plus:`
- Features: Sensor hardware kit included / Real-time ESA monitoring / Condition-based PM triggers / Dynamic PM scheduling / Cellular connectivity, no IT required / 20-minute non-invasive install / 60-day free pilot / Engineer-level support

---

#### SECTION 3 — COMPARISON TABLE

**Eyebrow:** Comparison

**H2:** How we stack up

| Feature | EdgePredict Free | MaintainX Essential ($16/user/mo) | UpKeep Starter ($20/user/mo) |
|---------|:---:|:---:|:---:|
| Work Orders | Unlimited | Limited | Limited |
| PM Scheduling | ✓ | ✓ | ✓ |
| AI Work Orders | ✓ | ✗ | ✗ |
| Asset Management | Unlimited | Limited | ✓ |
| Inspections | ✓ | Add-on | Add-on |
| Parts Inventory | ✓ | Add-on | Add-on |
| Built-in Sensors | Monitor tier | 3rd party | 3rd party |
| Condition-Based PM | Monitor tier | ✗ | ✗ |
| Users | Unlimited | Per-user pricing | Per-user pricing |
| Attachments | 3 per WO (unlimited Pro) | Limited | Limited |

---

#### SECTION 4 — FAQ

**Eyebrow:** FAQ

**H2:** Common questions

**Q: Is the free plan really free?**
> Yes. No credit card required, no time limit, no feature throttling. Unlimited users, unlimited work orders, unlimited assets. We built it because most small plants have nothing. Something genuinely free is infinitely better than a 30-day trial.

**Q: What's the difference between free and Pro?**
> Free includes unlimited users, work orders, PM scheduling, inspections, parts inventory, AI work order generation, and 3 attachments per work order. Pro adds unlimited attachments, drag-and-drop scheduling with AI suggestions, advanced reporting, purchase orders, workflow automation, and custom fields.

**Q: Do I need sensors to use the platform?**
> No. The management platform works completely standalone. Sensors are an optional upgrade that change time-based PM schedules to condition-based, driven by real electrical signature data from the motor itself. Start free, add sensors when you're ready.

**Q: What happens after the 60-day pilot?**
> If the sensors prove value, you continue at $200/mo per motor. If not, send the hardware back. No obligation, no contract, no pressure. The pilot is genuinely free.

**Q: Can I start free and add sensors later?**
> That's exactly how we designed it. Start with the free Planner tier, get your PM program organized, track your failures, see which motors are critical, then add monitoring on the ones that matter most.

**Q: How does EdgePredict compare to MaintainX or UpKeep?**
> MaintainX starts at $16/user/month and UpKeep at $20/user/month, and neither builds sensors. EdgePredict's free tier has unlimited users and more features than their paid tiers. And we're the only platform that also does motor monitoring as part of the same system. The CMMS + sensor integration doesn't exist anywhere else.

**Footer link:** `Talk to an engineer →` → `/contact`

---

### PILOT (`/pilot`)

**Meta title:** Free 60-Day Pilot — EdgePredict
**Meta description:** Start a free 60-day motor condition monitoring pilot. No plant network required. Walk away if no value.

---

#### SECTION 1 — HERO

**H1:** Free 60-Day Pilot Program

**Body:**
> Try motor condition monitoring on your critical assets. If we don't surface useful condition data in 60 days, return the hardware.

**Trust pills:**
- No plant network required
- $0 upfront for the pilot
- Cellular option included
- Walk away after 60 days

---

#### SECTION 2 — HOW THE PILOT WORKS

**H2:** How the Pilot Works

**Step 01 — Choose your motors**
> Pick 2–5 critical motors: pumps, fans, compressors, conveyors. Let us know horsepower, whether each is VFD-driven or line-fed, and their location in the facility.

**Step 02 — We ship your kit**
> Pre-configured edge gateway, split-core CTs, and connection instructions ship to you. Usually within 5 business days of confirming site details.

**Step 03 — Install in ~20 minutes**
> Your maintenance electrician clamps the CTs onto motor feeder conductors (VFD input side, or line-fed conductors). Plug in the gateway. Done. No IT involvement required.

**Step 04 — Baseline + monitoring**
> The first two weeks establishes motor-specific baselines under normal operating conditions. After that, alerting activates for anomalies and condition changes.

**Step 05 — Decision at 60 days**
> We review findings with you: what the data showed, any anomalies flagged, any maintenance recommendations. Continue at $200/month per motor, or return the hardware. No hard sell.

---

#### SECTION 3 — WHAT WE NEED FROM YOU

**H2:** What We Need From You

**Body:** Most facilities have everything in place already. Here is what makes a pilot site work:

**Requirements:**
- Access to motor feeder conductors (MCC or VFD input side)
- 120V outlet within reasonable distance of each monitoring point
- Cellular signal at the panel location (we verify with you before shipping)
- A maintenance electrician to complete the clamp-on install (~20 min)

---

#### SECTION 4 — SUCCESS CRITERIA

**H2:** Success Criteria

**Body:** Here is what a successful pilot looks like. We measure these together at 60 days.

**Criteria:**
- At least one actionable early warning during the pilot period
- Fewer surprises. Visibility into which motors are running abnormally.
- Prioritized maintenance work orders based on condition data, not guesswork
- Team comfortable reading and acting on the weekly health summaries

---

#### SECTION 5 — PRICING AFTER PILOT

**H2:** Pricing After the Pilot

**Price box:** Monthly subscription — **$200** — per motor / month

**Notes:**
- No minimum contract required
- Volume discounts available for 5+ motors

---

#### SECTION 6 — CONTACT CTA

**H2:** Get Your Pilot Started

**Body:** Reach out directly. You will speak with an engineer, not a sales queue.

**Contact:**
- anderson@edgepredict.io
- (703) 401-6262

**CTA:** `Send a Message →` → `/contact`

---

### BLOG (`/blog`)

**Meta title:** Blog — EdgePredict
**Meta description:** Maintenance engineering insights, product updates, and the thinking behind EdgePredict.

---

#### HERO

**H1:** From the Shop Floor

**Body:**
> Maintenance engineering insights, product updates, and the thinking behind EdgePredict.

---

#### POST GRID

Posts are listed newest-first. Each card shows: category badge, reading time, title, excerpt, date, `Read more →`.

---

### BLOG POSTS (10 total)

All posts show `EdgePredict Team` as author and display the date formatted as "Month Day, Year".

---

#### Post 1: `why-we-give-the-platform-away`
**Title:** Why Our CMMS Is Free (The Honest Answer)
**Category:** Company
**Date:** 2026-03-12
**Reading time:** 4 min
**Excerpt:** We make money on sensors. $200/month per motor for hardware that monitors equipment and feeds condition data into maintenance schedules. But nobody buys sensors for a problem they don't know they have.

**Full content:**
> We make money on sensors. $200/month per motor for hardware that monitors equipment and feeds condition data back into the maintenance schedule.
>
> But nobody buys sensors for a problem they don't know they have.
>
> If a plant has no maintenance system, they can't tell you which motors are critical. They don't track failures. They have no idea what their PM compliance rate is. Give them a real CMMS and suddenly they can see all of it. The data tells the story: "Pump P-101 failed 3 times this year, $45K total cost."
>
> At that point the question changes. It's not "should we monitor this pump?" It's "why aren't we monitoring it already?"
>
> The free platform isn't charity. It's the best sales tool we've ever built. Give people real data about their own equipment and they sell themselves.

---

#### Post 2: `the-monitoring-gap`
**Title:** 100,000 Plants in the Monitoring Gap
**Category:** Industry
**Date:** 2026-03-11
**Reading time:** 4 min
**Excerpt:** The motor monitoring market has three tiers: enterprise systems starting at $500-2,000/month per asset, nothing, and the gap. Plants that know they should be monitoring but can't justify enterprise prices.

**Full content:**
> The motor monitoring market has three tiers.
>
> Enterprise: Augury, Tractian, SKF, ABB. Starting at $500-2,000/month per asset with $50-100K setup. Works great if your maintenance budget has six figures to spare.
>
> Nothing: 85% of small plants. Whiteboards. No data. Run to failure and hope for the best.
>
> And then the gap: plants that know they should be monitoring equipment but can't justify the enterprise price tag. By our estimate, that's over 100,000 facilities.
>
> EdgePredict was built for the gap. $200/month per motor. 20-minute install. Cellular connection, no IT involvement. And the entire maintenance management platform is free.
>
> The gap isn't a market failure. It's a market that enterprise vendors are too expensive to serve and CMMS-only vendors don't have hardware to fill.

---

#### Post 3: `85-percent-have-nothing`
**Title:** 85% of Small Plants Have No Maintenance System
**Category:** Industry
**Date:** 2026-03-10
**Reading time:** 4 min
**Excerpt:** Less than 15% of small and mid-size manufacturing plants use any CMMS. The other 85% run on whiteboards, spreadsheets, and tribal knowledge.

**Full content:**
> Less than 15% of small and mid-size manufacturing plants use any CMMS. The other 85% run on whiteboards, spreadsheets, and tribal knowledge.
>
> It's not laziness. Enterprise CMMS costs $50-100K to implement. The affordable options run $16-49 per user per month. For a 5-person maintenance team, that's a real expense for software that's usually harder to use than a spreadsheet.
>
> Meanwhile: motors fail without warning, PM schedules live inside one person's head, new hires don't know what the last guy knew, and emergency repairs cost 3-5x what planned maintenance costs.
>
> EdgePredict was built for the 85%. Not the plants with enterprise budgets. The ones that actually have nothing. Free, unlimited, and genuinely useful from day one.

---

#### Post 4: `inspections-that-create-work-orders`
**Title:** When an Inspection Fails, What Happens Next?
**Category:** Product
**Date:** 2026-03-09
**Reading time:** 3 min
**Excerpt:** At most plants, inspections go like this: clipboard, check boxes, find a problem, tell someone, hope they create a work order, hope it gets assigned, hope it gets done.

**Full content:**
> Here's how inspections work at most plants. Clipboard. Check boxes. Find a problem. Tell someone. Hope they create a work order. Hope it gets assigned. Hope it gets done.
>
> Steps 4 through 7 are where maintenance programs fall apart.
>
> In EdgePredict, when a checklist item fails, the system asks "Create corrective work order?" One click. The work order gets created with the asset, the deficiency, the priority, and a link back to the inspection. No handoff. No hoping.
>
> Inspections also auto-schedule based on frequency. Set up "Monthly Safety Walkdown" once and it generates forever. Miss one and it shows as overdue. Your compliance rate is always visible.
>
> Inspections aren't a formality. They're the first line of your maintenance program.

---

#### Post 5: `electrical-signature-analysis-explained`
**Title:** What Electrical Signature Analysis Actually Detects
**Category:** Engineering
**Date:** 2026-03-08
**Reading time:** 5 min
**Excerpt:** ESA reads the current flowing through your motor leads. Three clamp-on CTs, no rewiring, no shaft access, no accelerometer mounting on hot rotating equipment.

**Full content:**
> ESA reads the current flowing through your motor leads. Three clamp-on CTs. No rewiring. No shaft access. No accelerometer mounting on hot rotating equipment.
>
> Here's what current can tell you. Phase imbalance is an early indicator of winding degradation or supply issues. Phase loss happens when single-phasing destroys motors in minutes. ESA catches it instantly. Overload means current above baseline, which could indicate a seized bearing or blocked impeller. Load instability shows up as current fluctuations from intermittent mechanical problems. Certain current patterns also correlate with bearing wear, rotor bar cracks, and eccentricity.
>
> All of this from a non-invasive clamp installed in about 20 minutes.
>
> Cellular connectivity means no plant network involved. No IT ticket, no approval process, no waiting 6 weeks for someone to open a firewall port.
>
> The motor's current is already carrying information about its health. We built hardware and software to listen to it.

---

#### Post 6: `drag-and-drop-maintenance-scheduling`
**Title:** Your Monday Morning Scheduling Meeting Just Got Shorter
**Category:** Product
**Date:** 2026-03-07
**Reading time:** 3 min
**Excerpt:** A maintenance supervisor spends about 2 hours every Monday morning figuring out who does what. EdgePredict's schedule board replaces most of that with a 10-second button click.

**Full content:**
> A maintenance supervisor spends about 2 hours every Monday morning figuring out who does what. This is not a great use of anyone's time.
>
> EdgePredict's schedule board shows your week with each technician in a lane. Unscheduled work orders sit in a pool on the side. Drag a work order onto a day and a tech. Done.
>
> There's also an AI suggestion button. It looks at work order priority, due dates, technician workload, and availability, then suggests an optimized schedule for the week. Click it, review it, confirm it.
>
> That's about 100 hours a year of Monday morning scheduling replaced by a 10-second button click.
>
> The scheduler also tracks break-in work. Over time you can see exactly how much reactive maintenance is eating your planned maintenance capacity. Most supervisors are surprised by that number.

---

#### Post 7: `pm-scheduling-tribal-knowledge`
**Title:** Tribal Knowledge Is Not a Maintenance Strategy
**Category:** Product
**Date:** 2026-03-06
**Reading time:** 4 min
**Excerpt:** How does preventive maintenance work at most small plants? Someone remembers. Or they don't. "We grease the bearings every... I think Jim does that quarterly. Jim retired last year."

**Full content:**
> How does preventive maintenance actually work at most small plants?
>
> Someone remembers. Or they don't. "We grease the bearings every... I think Jim does that quarterly. Jim retired last year."
>
> Tribal knowledge is a single point of failure with a retirement date.
>
> EdgePredict generates PM schedules automatically when you add equipment. Tell it you have a 75HP centrifugal pump and it creates monthly, quarterly, and annual tasks. Every event shows up on a calendar, color-coded by risk. Complete a PM and it logs to work order history. Skip one and the risk score goes up and it shows as overdue.
>
> Connect a sensor and your time-based schedules become condition-based. Grease when the current signature shows degradation or at 90 days, whichever comes first. No more guessing.

---

#### Post 8: `true-cost-of-motor-failure`
**Title:** The $40,000 Motor Failure
**Category:** Industry
**Date:** 2026-03-05
**Reading time:** 3 min
**Excerpt:** The math on one unplanned motor failure. 75 HP pump, bearing seizure. 8 hours of production downtime. One failure, one motor, one bad day.

**Full content:**
> Let's do the math on one unplanned motor failure. A 75 HP pump, bearing seizure.
>
> 8 hours of production downtime: $20,000. Expedited parts: $6,200. Emergency contractor labor: $4,500. Scrap and WIP loss: $5,800. Cascade delays to downstream processes: $3,500. Total: $40,000.
>
> One motor. One failure. One bad day.
>
> EdgePredict sensor monitoring runs $200/month per motor. $40,000 divided by $200 equals 200 months. That's over 16 years of monitoring paid for by one prevented failure. And the management platform is free.
>
> Most plants don't think they have a $40,000 problem. They do. They just haven't seen it yet.

---

#### Post 9: `ai-work-order-generation`
**Title:** Type Field Notes. Get a Work Order.
**Category:** Product
**Date:** 2026-03-04
**Reading time:** 4 min
**Excerpt:** Every maintenance manager we've talked to says the same thing: technicians don't fill out work orders because it takes too long. EdgePredict's AI work order generator fixes this.

**Full content:**
> Every maintenance manager we've talked to says the same thing: technicians don't fill out work orders because it takes too long.
>
> So we built something. You type: "pump 3 making grinding noise, bearings probably shot, needs seal kit, do it before Friday." You get back a structured work order with a title, priority level, 8-step procedure, parts list, estimated hours, and a due date.
>
> One paragraph. About 3 seconds.
>
> The AI also learns from corrections. Change the estimated hours for a specific pump type and it remembers next time. Your technicians already know what's wrong with the equipment. They just hate paperwork. This removes the paperwork.

---

#### Post 10: `free-cmms-for-plants-that-need-it`
**Title:** We Built a Free CMMS. Here's What's In It.
**Category:** Company
**Date:** 2026-03-03
**Reading time:** 5 min
**Excerpt:** EdgePredict is a full maintenance management platform: work orders, PM scheduling, inspections, asset management, parts inventory, reporting, and AI-generated work orders. The base plan is free. Not a trial. Free.

**Full content:**
> EdgePredict is a full maintenance management platform. Work orders, PM scheduling, inspections, asset management, parts inventory, reporting, AI-generated work orders. The base plan is free. Not a trial. Not "free for 30 days." Free.
>
> Why? Because 85% of small plants run maintenance on whiteboards. Not because they don't care about their equipment. Because enterprise CMMS software costs $50-100K to implement, and the cheap stuff is still $16-49 per user per month. That math doesn't work for a plant with a 3-person maintenance team.
>
> We're electrical engineers and reliability professionals who've been on plant floors. Our founder designed the sensor PCB, wrote the ESP32 firmware, and deployed the first pilot at a pharmaceutical plant by hand. We built this because we needed it and couldn't find it.
>
> Here's what's actually in the free plan: work orders with full lifecycle tracking, PM scheduling with auto-generated templates, inspections with pass/fail checklists that auto-create corrective work orders, asset management with risk scoring, parts inventory with purchase orders, a reporting dashboard showing MTTR and PM compliance, and an AI work order generator that turns a paragraph of field notes into a structured work order in about 3 seconds.
>
> When you're ready to go further, connect our motor monitoring sensors. Your PM schedules update based on real equipment data instead of a calendar.

**All blog post pages share this bottom CTA:**

**H2:** Ready to try EdgePredict?

**Body:** Free maintenance management platform. No credit card. No time limit.

**CTAs:**
- `Get Started Free` → https://tools.edgepredict.io/signup
- `Read More Posts` → `/blog`

---

### CALCULATOR (`/calculator`)

**Meta title:** Downtime Cost Calculator — EdgePredict
**Meta description:** Calculate the true cost of unplanned motor failures and see how monitoring pays for itself. Free interactive tool.

---

#### HERO

**Eyebrow:** Downtime Cost Estimator

**H1:** What is reactive motor maintenance costing you?

**Body:**
> Estimate your annual risk exposure and see whether condition monitoring pays off for your facility. All numbers update in real time.

---

#### INPUT PANEL — Facility Profile

**H2:** Facility Profile

**Industry dropdown options:**
- General Manufacturing
- Food & Beverage
- Pharmaceutical
- Plastics & Rubber
- Metals & Fabrication
- Chemical Processing
- Automotive
- Textiles

**Maintenance Strategy dropdown options:**
- Reactive: run to failure
- Preventive: time-based PM
- Some Predictive monitoring

**Note:** Strategy determines estimated avoidable loss: Reactive = 75% preventable, Preventive = 50%, Some Predictive = 30%.

---

#### INPUT PANEL — Motor Fleet

**H2:** Motor Fleet

- Number of critical motors (default: 5)
- Average motor size (HP) (default: 50 HP)

---

#### INPUT PANEL — Failure History

**H2:** Failure History

- Motor failures per year (default: 3)
- Avg downtime hours per failure (default: 8 hrs)

---

#### INPUT PANEL — Cost Per Failure Event

**H2:** Cost Per Failure Event

- Production loss per hour (default: $2,500)
- Scrap / WIP loss (default: $5,000)
- Emergency labor cost (default: $3,000)
- Expedited parts cost (default: $4,000)

---

#### RESULTS PANEL — Summary Metrics

**H2:** Your Estimated Numbers (dark panel)

Grid of 4 metrics (computed live):
- Annual Risk Exposure (red)
- Avoidable Loss (yellow)
- EdgePredict / Year: {N} motors × $200/mo (purple)
- Net Annual Benefit (green or red)

Plus:
- ROI (%)
- Payback (months)

---

#### RESULTS PANEL — Annual Cost Breakdown

**H2:** Annual Cost Breakdown

Bar chart showing:
- Production downtime loss (red)
- Scrap / WIP loss (orange)
- Emergency labor (yellow)
- Expedited parts (amber)

Footer: `Total annual risk`

---

#### RESULTS PANEL — 5-Year Cost Comparison

**H2:** 5-Year Cost Comparison

Bar chart:
- No action (5 yr) (red)
- With EdgePredict (5 yr) (purple)

Footer: `5-year estimated savings` + `Includes 5 years of EdgePredict monitoring. Based on {X}% avoidable loss reduction.`

---

#### RESULTS PANEL — Lead Capture (Email Report)

**H2:** Get this report by email

**Body:** We'll send a summary of your numbers by email.

**Form fields:** Your name / Company / Work email

**CTA:** `Email me the full report →`

**Success message:** `Report on its way! Check your inbox. We'll follow up to answer any questions.`

**Error message:** `Something went wrong. Email us directly: anderson@edgepredict.io`

---

#### RESULTS PANEL — Pilot CTA

**Body:** Ready to start capturing the savings?

**CTA:** `Start Your Free Pilot →` → `/pilot`

**Sub:** $200/month per motor · Free 60-day pilot

---

#### DISCLAIMER (page footer)

> All figures are estimates based on your inputs and generalized industry assumptions. Actual costs and savings will vary by facility, industry, and motor criticality. EdgePredict does not guarantee specific ROI outcomes. Consult your own maintenance and financial data for business decisions.

---

### CONTACT (`/contact`)

**Meta title:** Contact — EdgePredict
**Meta description:** Talk to an engineer about motor monitoring and maintenance management. No sales deck. Just a direct conversation about your facility.

---

#### HERO

**Eyebrow:** Contact

**H1:** Talk to an engineer.

**Body:**
> No sales deck. Just a direct conversation about your motors, your facility, and whether EdgePredict is the right fit.

---

#### FORM SECTION

**H2:** Send us a message

**Form fields:**
- Name * (placeholder: Jane Smith)
- Company * (placeholder: Acme Manufacturing)
- Work Email * (placeholder: jane@acme.com)
- Phone (optional) (placeholder: (555) 000-0000)
- Critical motors (optional) (placeholder: e.g. 8)
- Message * (placeholder: Tell us about your facility, which motors are critical, and what's driving your interest in condition monitoring...)

**Submit button:** `Send Message →` / `Sending…`

**Success state:** `Message received — We'll be in touch within one business day. Or reach us directly at anderson@edgepredict.io.`

**Error state:** `Something went wrong. Please email us directly at anderson@edgepredict.io.`

---

#### DIRECT CONTACT SECTION

**H2:** Direct contact

**Contact card:**
- Anderson Moffitt
- Founder & CTO
- anderson@edgepredict.io
- (703) 401-6262

**General inquiries card:**
- contact@edgepredict.io

**Good questions to ask us:**
- Can my motors be monitored, VFD or line-fed?
- Will this work without connecting to our plant network?
- What does a typical pilot install look like?
- How do we prioritize which motors to monitor first?
- What does the weekly health report tell us?

**Pilot prompt:**
- `Start with the free pilot`
- No long sales process. We can have a kit on its way to you within a week.
- `Learn about the pilot program →` → `/pilot`

---

### SECURITY (`/security`)

**Meta title:** Security & IT Overview — EdgePredict
**Meta description:** Plain-English security overview for plant IT and OT teams. Read-only monitoring. No control signals. Cellular option requires no plant network access.

---

#### HERO

**H1:** Security & IT Overview

**Body:**
> For IT managers and OT engineers evaluating EdgePredict for your facility. Plain language. No marketing.

---

#### SECTION — WHAT THE SYSTEM DOES AND DOES NOT DO

**H2:** What the System Does and Does Not Do

**What It Does:**
- Reads current data from split-core CT sensors clamped on motor feeder conductors
- Sends trend data and alert notifications to the monitoring dashboard over encrypted HTTPS
- Generates weekly motor health summaries delivered by email
- Processes waveform data locally on the edge device before transmitting summary metrics

**What It Does Not Do:**
- Send any control signals to motors, drives, or other equipment
- Require access to control networks (PLC, SCADA, DCS, or similar)
- Connect to process systems or read process variables
- Bridge OT and IT network segments
- Require inbound firewall rules or open ports

---

#### SECTION — NETWORK AND CONNECTIVITY

**H2:** Network and Connectivity

**Body:**
> The system is designed to require minimal network access from the facility. Cellular is the default for pilots and common in production deployments.

**Points:**

**Cellular option (4G LTE) available**
> The system can operate entirely on cellular. No plant Wi-Fi or OT network connection required. This is the default configuration for pilot deployments.

**Plant network use is optional**
> If a plant network connection is preferred: outbound HTTPS only. No inbound ports required. No firewall rule changes needed.

**No network bridging**
> The edge device does not bridge OT and IT network segments. It is an isolated monitoring endpoint.

---

#### SECTION — DATA

**H2:** Data

**Body:** What is captured, where it goes, and who can see it.

**Processed locally on the edge device**
> Motor current waveforms and derived metrics are analyzed on the edge device. Raw waveforms are not continuously transmitted.

**Summary data transmitted over encrypted HTTPS**
> Derived metrics, alert states, and health summaries are transmitted to the monitoring dashboard. All transmission uses HTTPS / TLS encryption.

**No process data captured**
> No PLC tags, SCADA values, proprietary process data, or production records are captured or transmitted.

**Role-based access control**
> Dashboard access is role-controlled. Your team determines who can view monitoring data and alert history.

---

#### SECTION — ON-PREMISES OPTION

**H2:** On-Premises Option

**Body:**
> For facilities with strict data residency or network segmentation policies, an on-premises dashboard deployment is available. Contact us to discuss your requirements.
>
> In the standard configuration, monitoring data flows to EdgePredict-hosted infrastructure over HTTPS. Most facilities are comfortable with this after reviewing the connectivity details above.

---

#### SECTION — QUICK REFERENCE TABLE

**H2:** Quick Reference

| | |
|-|-|
| Control signals sent | No |
| Control network access required | No |
| Plant Wi-Fi required | No (cellular option) |
| Inbound firewall rules | Not required |
| Data encryption | HTTPS / TLS |
| On-prem option | Available |

---

#### SECTION — CTA

**H2:** Questions for Your IT or OT Team?

**Body:**
> We are happy to get on a call with your IT or OT security team. One-pager available, questions answered, whatever is useful.

**Contact:**
- anderson@edgepredict.io
- (703) 401-6262

**CTA:** `Send a Message →` → `/contact`

---

### 404 NOT FOUND

**Eyebrow:** 404

**H1:** Page not found.

**Body:** The page you're looking for doesn't exist or has been moved.

**CTA:** `Go Home` → `/`

---

## 3. NAVIGATION STRUCTURE

### Desktop Nav (md+ breakpoint)

Logo: `/og-image.jpg` (links to `/`)

Links (left to right):
1. Home → `/`
2. Platform → `/platform`
3. Monitoring → `/monitoring`
4. Pricing → `/pricing`
5. Blog → `/blog`

Buttons (right side):
- `Log In` (outlined) → https://tools.edgepredict.io/login
- `Get Started` (filled purple) → https://tools.edgepredict.io/signup

**Missing from desktop nav:** Calculator, Contact, Pilot, Security

### Mobile Nav (below md breakpoint)

Hamburger/X toggle. Links:
1. Home → `/`
2. Platform → `/platform`
3. Monitoring → `/monitoring`
4. Pricing → `/pricing`
5. Blog → `/blog`
6. Calculator → `/calculator`
7. Contact → `/contact`

Then a divider line, then:
- `Log In` (outlined) → https://tools.edgepredict.io/login
- `Get Started` (filled purple) → https://tools.edgepredict.io/signup

**Missing from mobile nav:** Pilot, Security

---

## 4. FOOTER CONTENT

### Column 1 — Brand

**Wordmark:** EdgePredict (purple/white styled)

**Tagline:**
> Maintenance management and motor monitoring, built as one platform by engineers who've been on the plant floor.

### Column 2 — Product

- Platform → `/platform`
- Motor Monitoring → `/monitoring`
- Pricing → `/pricing`
- Pilot Program → `/pilot`
- Security & IT → `/security`

### Column 3 — Resources

- Blog → `/blog`
- Downtime Calculator → `/calculator`
- Contact → `/contact`
- Log In → https://tools.edgepredict.io/login
- Get Started → https://tools.edgepredict.io/signup

### Column 4 — Contact

- Anderson Moffitt
- Founder & CTO
- anderson@edgepredict.io
- contact@edgepredict.io
- (703) 401-6262

### Bottom bar

- © {year} EdgePredict. All rights reserved. | edgepredict.io
- Privacy Policy → `/contact` **(bug: points to /contact, not a real policy page)**
- Terms of Service → `/contact` **(bug: points to /contact, not a real policy page)**

**Code comment in footer:** `{/* TODO: Create dedicated privacy and terms pages */}`

---

## 5. META TAGS — ALL PAGES

### Root layout (default — applies to all pages unless overridden)

```
title: "EdgePredict — Maintenance Management & Motor Monitoring"
description: "The only platform where your CMMS and your sensors are one system. Free maintenance management with optional motor monitoring sensors. PM scheduling, work orders, asset tracking, ESA monitoring."
keywords: "CMMS, maintenance management, motor monitoring, predictive maintenance, preventive maintenance software, work order management, PM scheduling, electrical signature analysis, free CMMS, MaintainX alternative"
authors: EdgePredict
creator: EdgePredict
publisher: EdgePredict
metadataBase: https://www.edgepredict.io
canonical: /
OG title: "EdgePredict — Maintenance Management & Motor Monitoring"
OG description: (same as description)
OG url: https://www.edgepredict.io
OG siteName: EdgePredict
OG image: https://www.edgepredict.io/og-image.jpg (1200×630)
OG image alt: "EdgePredict Motor Condition Monitoring"
OG locale: en_US
OG type: website
Twitter card: summary_large_image
Twitter image: https://www.edgepredict.io/og-image.jpg
robots: index, follow; googleBot: index, follow, max-image-preview:large, max-snippet:-1
```

### Page-level overrides

| Page | Title | Description |
|------|-------|-------------|
| `/` | EdgePredict — Maintenance Management & Motor Monitoring | The only platform where your CMMS and your sensors are one system. Free maintenance management with optional motor monitoring sensors. |
| `/platform` | Maintenance Platform — EdgePredict | PM scheduling, work orders, asset management, inspections, parts inventory, reporting, and AI-generated work orders. Free for any plant size. |
| `/monitoring` | Motor Monitoring — EdgePredict | Non-invasive motor monitoring using electrical signature analysis. $200/mo per motor. 20-minute install. Cellular connectivity. Free 60-day pilot. |
| `/pricing` | Pricing — EdgePredict | Simple, transparent pricing. Free maintenance management platform with unlimited users and work orders. $99/mo for Pro. $200/mo per motor for sensor monitoring. |
| `/pilot` | Free 60-Day Pilot — EdgePredict | Start a free 60-day motor condition monitoring pilot. No plant network required. Walk away if no value. |
| `/blog` | Blog — EdgePredict | Maintenance engineering insights, product updates, and the thinking behind EdgePredict. |
| `/blog/[slug]` | {post.title} — EdgePredict Blog | {post.excerpt} — OG type: article, publishedTime: {post.date}, authors: EdgePredict Team |
| `/calculator` | Downtime Cost Calculator — EdgePredict | Calculate the true cost of unplanned motor failures and see how monitoring pays for itself. Free interactive tool. |
| `/contact` | Contact — EdgePredict | Talk to an engineer about motor monitoring and maintenance management. No sales deck. Just a direct conversation about your facility. |
| `/security` | Security & IT Overview — EdgePredict | Plain-English security overview for plant IT and OT teams. Read-only monitoring. No control signals. Cellular option requires no plant network access. |

---

## 6. HARDCODED DATA

### Pricing Numbers

| Tier | Price | Unit |
|------|-------|------|
| Planner | $0 | forever |
| Pro | $99 | /mo per site |
| Monitor | $200 | /mo per motor |
| Pilot | $0 | 60-day free pilot |
| Post-pilot subscription | $200 | /mo per motor |

### Competitor Pricing (hardcoded comparisons)

- MaintainX Essential: $16/user/month
- UpKeep Starter: $20/user/month
- Augury/Tractian/enterprise systems: $500–2,000/month per asset
- Enterprise CMMS implementation: $50–100K
- Vibration sensor setup: $50K+ capital project

### Calculator Defaults

| Field | Default |
|-------|---------|
| Industry | General Manufacturing |
| Strategy | Reactive: run to failure |
| Critical motors | 5 |
| Average motor HP | 50 |
| Failures per year | 3 |
| Downtime hours per failure | 8 |
| Production loss per hour | $2,500 |
| Scrap/WIP per event | $5,000 |
| Emergency labor per event | $3,000 |
| Expedited parts per event | $4,000 |

### Calculator Strategy Assumptions (hardcoded)

- Reactive → 75% preventable
- Preventive → 50% preventable
- Some Predictive → 30% preventable

### Blog Post The $40,000 Motor Failure — Cost Breakdown

| Item | Amount |
|------|--------|
| 8 hours production downtime | $20,000 |
| Expedited parts | $6,200 |
| Emergency contractor labor | $4,500 |
| Scrap and WIP loss | $5,800 |
| Cascade delays | $3,500 |
| **Total** | **$40,000** |

### Industry Statistics (claimed/cited without source)

- "85% of small plants run maintenance on whiteboards" (used on multiple pages and blog posts)
- "Less than 15% of small and mid-size manufacturing plants use any CMMS"
- "Emergency repairs cost 3-5x what planned maintenance costs"
- "Over 100,000 facilities" in the monitoring gap
- "About 2 hours every Monday morning" for scheduling

### Mock Dashboard Data (not real)

Home hero card: PM-042, WO-108, WO-091; Pump P-101 (98%), Fan F-201 (87%), Compressor AC-401 (71%)
Home dashboard: WO-112, WO-111, WO-110, WO-109; Pump P-101 (98%), Fan F-201 (87%), Compressor AC-301 (91%), Conveyor C-301 (71%)
Platform dashboard: Pump-3 75HP, Fan-1 40HP, Conveyor-2 60HP, Compressor-1 100HP; WO-042, WO-041, WO-040, WO-039 (J. Torres, M. Davis, R. Singh)

### Team / Contact Info

- **Name:** Anderson Moffitt
- **Title:** Founder & CTO
- **Email:** anderson@edgepredict.io
- **Email (general):** contact@edgepredict.io
- **Phone:** (703) 401-6262

---

## 7. COLOR PALETTE & FONTS

### Brand Colors (hardcoded in Tailwind classes, not in config)

| Usage | Hex |
|-------|-----|
| Primary purple (CTA, accents) | `#7655d6` |
| Primary purple hover | `#5d3db8` |
| Light purple (eyebrows, secondary accents) | `#a78fe8` |

### Tailwind Background Colors Used

| Color | Usage |
|-------|-------|
| `bg-white` | Main sections, cards |
| `bg-gray-50` | Alternate sections |
| `bg-gray-900` / `bg-gray-950` | Hero sections, dark panels |
| `bg-gray-800` | Dark card elements |
| `bg-[#7655d6]` | CTAs, accents, featured cards |
| `bg-green-50/100/500` | Status indicators |
| `bg-amber-50/100/400/500` | Warning indicators |
| `bg-red-50/100/400/500` | Error/overdue indicators |
| `bg-blue-50/400` | Open/in-progress status |

### Typography

**Font:** `Inter` (Google Fonts, loaded via `next/font/google`, `subsets: ["latin"]`)

**Classes used:**
- `font-bold` — headings
- `font-semibold` — subheadings, CTAs
- `font-medium` — labels, nav
- `font-mono` — dashboard data, stats, IDs
- `text-4xl` / `text-5xl` — H1 headings
- `text-3xl` / `text-4xl` — H2 headings
- `text-xl` / `text-2xl` — H3
- `text-sm` / `text-xs` — body/labels
- `uppercase tracking-wider` — eyebrow labels

### Tailwind Config

The `tailwind.config.ts` uses CSS variable-based theming (`hsl(var(--...))`) for the shadcn/ui design system, but the site itself does NOT use these tokens — it uses Tailwind base colors and direct hex values. The CSS variables define light/dark mode tokens but dark mode is not implemented on any page.

---

## 8. ALL IMAGES REFERENCED

| File | Location Used | Alt Text | Notes |
|------|--------------|----------|-------|
| `/og-image.jpg` | Nav logo (`Nav.tsx`) | "EdgePredict" | **Bug: This is the social share image being used as the site logo** |
| `/og-image.jpg` | Root layout OG tag | "EdgePredict Motor Condition Monitoring" | Correct usage for social sharing |
| `/android-chrome-192x192.png` | `site.webmanifest` | — | PWA icon |
| `/android-chrome-512x512.png` | `site.webmanifest` | — | PWA icon |
| `/apple-touch-icon.png` | Root layout | — | 180×180 |
| `/favicon-16x16.png` | Root layout | — | |
| `/favicon-32x32.png` | Root layout | — | |
| `/favicon.ico` | Root layout | — | |

**No other images are used anywhere in the site.** All visuals are CSS-based (gradient bars, dot indicators, progress bars).

---

## 9. EXTERNAL LINKS

| URL | Label | Where |
|-----|-------|--------|
| https://tools.edgepredict.io/signup | Get Started | Nav, Home (×4), Platform (×2), Pricing (×2), Blog post CTA, Calculator |
| https://tools.edgepredict.io/login | Log In | Nav, Footer, Platform |
| mailto:anderson@edgepredict.io | anderson@edgepredict.io | Home footer, Pilot, Contact, Calculator error, Security |
| mailto:contact@edgepredict.io | contact@edgepredict.io | Footer, Contact |
| tel:7034016262 or tel:+17034016262 | (703) 401-6262 | Home footer, Pilot, Contact, Security |
| https://www.edgepredict.io | canonical / metadataBase | Root layout only |
| https://www.edgepredict.io/og-image.jpg | OG/Twitter image | Root layout only |

**No social media links anywhere on the site.** No LinkedIn, Twitter/X, GitHub, or YouTube links.

---

## 10. KNOWN ISSUES

### Active Bugs

1. **Nav logo uses og-image.jpg** — `Nav.tsx:33` loads `/og-image.jpg` as the logo image. This is the social share card (1200×630 landscape image) being displayed at `h-14` height as a navigation logo. Should be replaced with a proper SVG/PNG logo.

2. **Privacy Policy and Terms of Service link to /contact** — `Footer.tsx:69,70`. Both legal links redirect to the contact page. A TODO comment exists in the code: `{/* TODO: Create dedicated privacy and terms pages */}`.

3. **Blog post dates are in the future** — All 10 blog posts have dates in March 2026 (2026-03-03 through 2026-03-12). As of today's date (2026-03-25), these are recent/current. Previously flagged as future-dated; most are now in the past, but all were originally written with future dates.

4. **Calculator and Contact are missing from desktop nav** — Desktop nav only has: Home, Platform, Monitoring, Pricing, Blog. Calculator and Contact are in the mobile nav but not desktop.

5. **Pilot and Security pages are not in either nav** — They are only discoverable via footer links (Pilot Program, Security & IT), CTA buttons on other pages, and internal links. Not in desktop or mobile nav menus.

6. **Privacy Policy and Terms have no dedicated pages** — Footer links for "Privacy Policy" and "Terms of Service" both go to `/contact`.

7. **Contact page missing `export const metadata`** — The metadata is exported from `contact/layout.tsx` rather than `contact/page.tsx`. This works but is inconsistent with all other pages.

### Previously Flagged Issues (from git history)

- **Em dashes in mock data** — Commit `0d392b2` removed em dashes from visible body text. The blog post data in `posts.ts` and mock work order names should be checked for any remaining em dashes. A quick scan shows none remaining in the current code.

- **Missing H1 tags** — Earlier versions may have lacked proper H1s. Currently every page has exactly one H1 in its hero section, except the Contact page which has `<h1>Talk to an engineer.</h1>` — all appear correct.

- **Future-dated blog posts** — See item 3 above.

---

## APPENDIX: FILE STRUCTURE

```
edgepredict-site/
├── public/
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── og-image.jpg                  ← Used as nav logo (bug)
│   └── site.webmanifest
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/route.ts      ← Contact form handler
│   │   │   └── calculator-report/route.ts  ← Calculator email report handler
│   │   ├── blog/
│   │   │   ├── page.tsx              ← Blog index
│   │   │   └── [slug]/page.tsx       ← Individual blog post
│   │   ├── calculator/
│   │   │   ├── layout.tsx            ← Metadata only
│   │   │   └── page.tsx              ← Interactive calculator
│   │   ├── contact/
│   │   │   ├── layout.tsx            ← Metadata only
│   │   │   └── page.tsx              ← Contact form (client component)
│   │   ├── monitoring/page.tsx       ← Motor monitoring page
│   │   ├── pilot/page.tsx            ← Pilot program page
│   │   ├── platform/page.tsx         ← CMMS platform page
│   │   ├── pricing/page.tsx          ← Pricing + FAQ
│   │   ├── products/page.tsx         ← Redirect to /monitoring
│   │   ├── security/page.tsx         ← Security & IT overview
│   │   ├── ClientBody.tsx            ← Client wrapper
│   │   ├── globals.css               ← Tailwind + CSS variables
│   │   ├── layout.tsx                ← Root layout, global metadata
│   │   ├── not-found.tsx             ← 404 page
│   │   └── page.tsx                  ← Homepage
│   ├── components/
│   │   ├── Nav.tsx                   ← Sticky nav header
│   │   └── Footer.tsx                ← Site footer
│   └── lib/
│       ├── blog/posts.ts             ← All blog post data (hardcoded)
│       └── utils.ts                  ← Utility functions
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

*End of audit. No changes were made to any files.*
