export type FeatureRow = {
  feature: string;
  ep: string;
  them: string;
};

export type PricingScaleRow = {
  size: string;
  them: string;
  ep: string;
  savings: string;
  epWins: boolean;
};

export type TcoRow = {
  label: string;
  them: string;
  ep: string;
};

export type Competitor = {
  slug: string;
  name: string;
  category: "cmms" | "monitoring";
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubhead: string;
  pricingLabel: string;
  pricingContext: string;
  whatTheyDoWell: string;
  hasPricingScale: boolean;
  pricingScaleLabel: string;
  pricingScale: PricingScaleRow[];
  tco: {
    context: string;
    rows: TcoRow[];
    totalThem: string;
    totalEp: string;
    totalSavings: string;
    disclaimer: string;
  } | null;
  featureRows: FeatureRow[];
  switchReasons: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const COMPETITORS: Competitor[] = [
  {
    slug: "maintainx-alternative",
    name: "MaintainX",
    category: "cmms",
    metaTitle: "MaintainX Alternative | EdgePredict — $99 Flat vs $16/User/Mo",
    metaDescription:
      "MaintainX charges per user. EdgePredict Pro is $99/mo flat for your whole team — unlimited users, unlimited work orders, plus motor monitoring. See the full comparison.",
    heroHeadline: "MaintainX charges per user. We don't.",
    heroSubhead:
      "MaintainX starts at $16/user/mo. A 25-person team pays $400/mo — more than 4x EdgePredict Pro. Over 3 years, that's $10,800 you could have kept. No per-user math, no surprise renewals.",
    pricingLabel: "$16/user/mo",
    pricingContext:
      "MaintainX's Essential plan starts at $16/user/month. Their Advanced and Enterprise tiers are significantly higher. Work order limits apply on lower plans.",
    whatTheyDoWell:
      "MaintainX has a genuinely good mobile app and has invested heavily in UX. Their onboarding is smooth and their interface is polished. If your primary concern is design and you have a small team that won't scale, they're a reasonable option.",
    hasPricingScale: true,
    pricingScaleLabel: "users",
    pricingScale: [
      { size: "5 users",   them: "$80/mo",     ep: "$0/mo (Free)",  savings: "$80/mo",    epWins: true },
      { size: "25 users",  them: "$400/mo",    ep: "$99/mo (Pro)",  savings: "$301/mo",   epWins: true },
      { size: "50 users",  them: "$800/mo",    ep: "$99/mo (Pro)",  savings: "$701/mo",   epWins: true },
      { size: "100 users", them: "$1,600/mo",  ep: "$99/mo (Pro)",  savings: "$1,501/mo", epWins: true },
    ],
    tco: {
      context: "25 users, 3-year subscription cost",
      rows: [
        { label: "Year 1", them: "$4,800",  ep: "$1,188" },
        { label: "Year 2", them: "$4,800",  ep: "$1,188" },
        { label: "Year 3", them: "$4,800",  ep: "$1,188" },
      ],
      totalThem: "$14,400",
      totalEp: "$3,564",
      totalSavings: "$10,836",
      disclaimer: "Based on MaintainX Essential at $16/user/mo and EdgePredict Pro at $99/mo. Excludes implementation, onboarding, and add-on costs — which would further widen the gap.",
    },
    featureRows: [
      { feature: "Pricing model",              ep: "$99/mo flat per site",     them: "$16/user/mo (Essential)" },
      { feature: "Free tier",                  ep: "Yes — unlimited users",    them: "No" },
      { feature: "Unlimited users",            ep: "✓ (all tiers)",            them: "✗ (per-user billing)" },
      { feature: "Unlimited work orders",      ep: "✓",                        them: "Limited on lower plans" },
      { feature: "PM scheduling",              ep: "✓ (free)",                 them: "✓" },
      { feature: "Drag-and-drop scheduling",   ep: "✓ (free)",                 them: "✗" },
      { feature: "Parts inventory & POs",      ep: "✓ (free)",                 them: "Add-on" },
      { feature: "Team chat (DMs + channels)", ep: "✓ (free)",                 them: "✗" },
      { feature: "Mobile app (iOS & Android)", ep: "✓ (free, offline)",        them: "✓" },
      { feature: "Inspections",                ep: "✓ (Pro)",                  them: "Add-on" },
      { feature: "AI work order generator",    ep: "✓ (Pro)",                  them: "✗" },
      { feature: "AI scheduling suggestions",  ep: "✓ (Pro)",                  them: "✗" },
      { feature: "Workflow automation",        ep: "✓ (Pro)",                  them: "Add-on" },
      { feature: "Motor monitoring sensors",   ep: "✓ (Monitor tier)",         them: "✗" },
      { feature: "Condition-based PM",         ep: "✓ (Monitor tier)",         them: "✗" },
    ],
    switchReasons: [
      {
        title: "Per-user pricing punishes growth",
        body: "Every time you add a technician, a contractor, or a supervisor to MaintainX, your bill goes up. EdgePredict Pro is $99/mo for your entire site — 5 users or 500.",
      },
      {
        title: "We include what they charge extra for",
        body: "Inspections, parts inventory, and workflow automation are add-ons in MaintainX. They're included in EdgePredict's free tier or Pro at no extra charge.",
      },
      {
        title: "We're the only platform with CMMS + sensors",
        body: "MaintainX has no sensor integration. EdgePredict Monitor connects real-time ESA motor data directly to your PM schedule. No third-party integrations, no manual data entry.",
      },
    ],
    faqs: [
      {
        q: "Is EdgePredict's free tier actually comparable to MaintainX Essential?",
        a: "EdgePredict Free includes unlimited users, unlimited work orders, PM scheduling, inspections, parts inventory, and AI work order generation. MaintainX Essential has per-user billing, work order limits, and charges extra for inspections and inventory. EdgePredict Free has more features than MaintainX's paid tier.",
      },
      {
        q: "Does EdgePredict have a mobile app?",
        a: "Yes. EdgePredict has a full mobile app for iOS and Android with offline mode. Work orders, inspections, and asset data are all available without a network connection.",
      },
      {
        q: "Can I migrate my data from MaintainX?",
        a: "Yes. EdgePredict supports CSV import for assets, work orders, and parts. If you need help migrating, talk to us — we've done it before and can walk you through it.",
      },
      {
        q: "What if I have a small team where MaintainX is cheaper?",
        a: "EdgePredict is free for any team size. The free tier has no user limits, no work order limits, and no expiration. You only pay $99/mo for Pro features like advanced reporting, drag-and-drop scheduling, and workflow automation.",
      },
    ],
  },

  {
    slug: "limble-cmms-alternative",
    name: "Limble CMMS",
    category: "cmms",
    metaTitle: "Limble CMMS Alternative | EdgePredict — No Per-User Fees",
    metaDescription:
      "Limble CMMS charges per user and scales into the hundreds per month. EdgePredict Pro is $99 flat — unlimited users, more features, and motor monitoring built in.",
    heroHeadline: "Limble CMMS scales up fast. Our price doesn't.",
    heroSubhead:
      "Limble's Standard plan starts around $28/user/mo. A 25-person team runs $700/mo — 7x EdgePredict Pro. Over 3 years that's $21,600 in pure subscription costs before you've added a single sensor.",
    pricingLabel: "~$28/user/mo",
    pricingContext:
      "Limble CMMS Standard is approximately $28/user/month. Their Premium tier runs ~$69/user/mo. Enterprise pricing requires a sales call. All tiers are per-user.",
    whatTheyDoWell:
      "Limble has strong reporting and a clean UI that mid-market teams appreciate. Their customer support reputation is good and they've built a solid knowledge base. For a pure CMMS with no interest in sensor integration, they're a polished option.",
    hasPricingScale: true,
    pricingScaleLabel: "users",
    pricingScale: [
      { size: "5 users",   them: "$140/mo",   ep: "$0/mo (Free)",  savings: "$140/mo",   epWins: true },
      { size: "25 users",  them: "$700/mo",   ep: "$99/mo (Pro)",  savings: "$601/mo",   epWins: true },
      { size: "50 users",  them: "$1,400/mo", ep: "$99/mo (Pro)",  savings: "$1,301/mo", epWins: true },
      { size: "100 users", them: "$2,800/mo", ep: "$99/mo (Pro)",  savings: "$2,701/mo", epWins: true },
    ],
    tco: {
      context: "25 users, 3-year subscription cost",
      rows: [
        { label: "Year 1", them: "$8,400",  ep: "$1,188" },
        { label: "Year 2", them: "$8,400",  ep: "$1,188" },
        { label: "Year 3", them: "$8,400",  ep: "$1,188" },
      ],
      totalThem: "$25,200",
      totalEp: "$3,564",
      totalSavings: "$21,636",
      disclaimer: "Based on Limble Standard at ~$28/user/mo and EdgePredict Pro at $99/mo. Limble Premium (~$69/user/mo) would widen this gap significantly further.",
    },
    featureRows: [
      { feature: "Pricing model",              ep: "$99/mo flat per site",     them: "~$28/user/mo (Standard)" },
      { feature: "Free tier",                  ep: "Yes — unlimited users",    them: "No" },
      { feature: "Unlimited users",            ep: "✓ (all tiers)",            them: "✗ (per-user billing)" },
      { feature: "PM scheduling",              ep: "✓ (free)",                 them: "✓" },
      { feature: "Drag-and-drop scheduling",   ep: "✓ (free)",                 them: "✓" },
      { feature: "Parts inventory & POs",      ep: "✓ (free)",                 them: "✓" },
      { feature: "Team chat (DMs + channels)", ep: "✓ (free)",                 them: "✗" },
      { feature: "Mobile app (iOS & Android)", ep: "✓ (free, offline)",        them: "✓" },
      { feature: "Inspections",                ep: "✓ (Pro)",                  them: "✓" },
      { feature: "AI work order generator",    ep: "✓ (Pro)",                  them: "✗" },
      { feature: "AI scheduling suggestions",  ep: "✓ (Pro)",                  them: "✗" },
      { feature: "Custom fields",              ep: "✓ (Pro)",                  them: "✓ (paid)" },
      { feature: "Workflow automation",        ep: "✓ (Pro)",                  them: "Higher tiers only" },
      { feature: "Motor monitoring sensors",   ep: "✓ (Monitor tier)",         them: "✗" },
      { feature: "Condition-based PM",         ep: "✓ (Monitor tier)",         them: "✗" },
    ],
    switchReasons: [
      {
        title: "The per-user math compounds quickly",
        body: "At Limble's Standard rate, a 20-person team runs $560/mo. EdgePredict Pro covers your entire site for $99/mo. That's $5,532 back in your budget annually — before you've bought a single sensor.",
      },
      {
        title: "Start free, upgrade when ready",
        body: "Limble has no meaningful free tier. EdgePredict's free plan is unlimited — unlimited users, unlimited work orders, unlimited assets. You can run your full operation on it before spending a dollar.",
      },
      {
        title: "CMMS and sensors in one system",
        body: "Limble is CMMS-only. When you want condition monitoring, you're stitching together a third-party sensor platform and hoping the data flows correctly. EdgePredict Monitor is the same platform — sensor data triggers PM automatically.",
      },
    ],
    faqs: [
      {
        q: "How does EdgePredict compare to Limble on reporting?",
        a: "Limble has strong reporting, and we won't pretend otherwise. EdgePredict Pro includes advanced reporting and KPI dashboards. If you're running the Monitor tier, you also get motor health trending and condition-based analytics that Limble simply can't provide.",
      },
      {
        q: "Does EdgePredict support multiple sites?",
        a: "Yes. Pro is priced per site at $99/mo. Each site gets its own asset list, PM schedules, and work order queue. Multi-site organizations can manage each location independently under one account.",
      },
      {
        q: "Is the Limble pricing estimate accurate?",
        a: "Limble's pricing has changed over time and varies by tier. Our estimate is based on publicly available information. We recommend checking Limble's current pricing directly before making a decision — the per-user model is what matters most, regardless of the exact number.",
      },
    ],
  },

  {
    slug: "upkeep-alternative",
    name: "UpKeep",
    category: "cmms",
    metaTitle: "UpKeep Alternative | EdgePredict — No Per-User Fees",
    metaDescription:
      "UpKeep charges $20/user/mo. EdgePredict Pro is $99 flat for your whole team — with more features, a genuinely free tier, and motor monitoring built in. Full comparison inside.",
    heroHeadline: "UpKeep charges per user. You shouldn't have to count seats.",
    heroSubhead:
      "UpKeep Starter is $20/user/mo. A 25-person team costs $500/mo — 5x EdgePredict Pro. Over 3 years, that's $14,400 in subscription costs for the same basic CMMS functions, with no sensor integration at any price.",
    pricingLabel: "$20/user/mo",
    pricingContext:
      "UpKeep's Starter plan is $20/user/month. Professional and Business Plus tiers run higher. No meaningful free tier — the free plan has significant feature restrictions.",
    whatTheyDoWell:
      "UpKeep built a genuinely good mobile experience and was one of the first CMMS platforms to go mobile-first. Their requester portal (allowing non-licensed users to submit work requests) is a useful feature. For facilities management — as opposed to industrial maintenance — they've built a solid product.",
    hasPricingScale: true,
    pricingScaleLabel: "users",
    pricingScale: [
      { size: "5 users",   them: "$100/mo",   ep: "$0/mo (Free)",  savings: "$100/mo",   epWins: true },
      { size: "25 users",  them: "$500/mo",   ep: "$99/mo (Pro)",  savings: "$401/mo",   epWins: true },
      { size: "50 users",  them: "$1,000/mo", ep: "$99/mo (Pro)",  savings: "$901/mo",   epWins: true },
      { size: "100 users", them: "$2,000/mo", ep: "$99/mo (Pro)",  savings: "$1,901/mo", epWins: true },
    ],
    tco: {
      context: "25 users, 3-year subscription cost",
      rows: [
        { label: "Year 1", them: "$6,000",  ep: "$1,188" },
        { label: "Year 2", them: "$6,000",  ep: "$1,188" },
        { label: "Year 3", them: "$6,000",  ep: "$1,188" },
      ],
      totalThem: "$18,000",
      totalEp: "$3,564",
      totalSavings: "$14,436",
      disclaimer: "Based on UpKeep Starter at $20/user/mo and EdgePredict Pro at $99/mo. UpKeep Professional and Business Plus tiers are higher and would widen the gap further.",
    },
    featureRows: [
      { feature: "Pricing model",              ep: "$99/mo flat per site",     them: "$20/user/mo (Starter)" },
      { feature: "Free tier",                  ep: "Yes — unlimited users",    them: "Very limited" },
      { feature: "Unlimited users",            ep: "✓ (all tiers)",            them: "✗ (per-user billing)" },
      { feature: "PM scheduling",              ep: "✓ (free)",                 them: "✓" },
      { feature: "Drag-and-drop scheduling",   ep: "✓ (free)",                 them: "✓" },
      { feature: "Parts inventory & POs",      ep: "✓ (free)",                 them: "Add-on" },
      { feature: "Team chat (DMs + channels)", ep: "✓ (free)",                 them: "✗" },
      { feature: "Mobile app (iOS & Android)", ep: "✓ (free, offline)",        them: "✓" },
      { feature: "Inspections",                ep: "✓ (Pro)",                  them: "Add-on" },
      { feature: "AI work order generator",    ep: "✓ (Pro)",                  them: "✗" },
      { feature: "AI scheduling suggestions",  ep: "✓ (Pro)",                  them: "✗" },
      { feature: "Workflow automation",        ep: "✓ (Pro)",                  them: "Add-on" },
      { feature: "Motor monitoring sensors",   ep: "✓ (Monitor tier)",         them: "✗" },
      { feature: "Condition-based PM",         ep: "✓ (Monitor tier)",         them: "✗" },
    ],
    switchReasons: [
      {
        title: "Every user you add costs money",
        body: "With UpKeep, adding a new technician, contractor, or manager to the system triggers another $20/mo. EdgePredict's per-site pricing means your whole team is covered — 3 people or 30.",
      },
      {
        title: "Our free tier beats their paid tier",
        body: "EdgePredict Free includes unlimited users, PM scheduling, parts inventory, inspections, and AI work order generation. UpKeep's free tier restricts most of these. You'd need to pay UpKeep for features you get from us at no cost.",
      },
      {
        title: "UpKeep is built for facilities. We're built for plants.",
        body: "UpKeep focuses on facilities management — commercial buildings, office campuses. EdgePredict is built for industrial maintenance: motors, conveyors, pumps, production equipment. Our sensor tier does ESA motor monitoring that UpKeep has no equivalent for.",
      },
    ],
    faqs: [
      {
        q: "Does EdgePredict have a requester portal like UpKeep?",
        a: "Yes. Anyone can submit a work request through EdgePredict without a licensed account. Requesters can describe the issue, attach photos, and track status — without being counted as a user or affecting your billing.",
      },
      {
        q: "How is EdgePredict's mobile app?",
        a: "Full mobile app for iOS and Android with offline mode. Work orders, PM schedules, asset lookups, and QR code scanning all work without a connection — important in plants where WiFi coverage is patchy.",
      },
      {
        q: "Is EdgePredict built for industrial facilities specifically?",
        a: "Yes. We built this because we spent time on plant floors and saw that 85% of small and mid-sized industrial plants had no system at all. UpKeep is built for facilities management broadly. We're built for industrial maintenance specifically — the features, the sensor integration, and the pricing model reflect that.",
      },
    ],
  },

  {
    slug: "fiix-alternative",
    name: "Fiix",
    category: "cmms",
    metaTitle: "Fiix CMMS Alternative | EdgePredict — Start Free, No Enterprise Contract",
    metaDescription:
      "Fiix requires enterprise contracts and per-user pricing. EdgePredict is free to start, $99/mo Pro, with motor monitoring built in. No sales call required.",
    heroHeadline: "Fiix wants a contract. We want 90 seconds of your time.",
    heroSubhead:
      "Fiix is an enterprise CMMS that requires a sales engagement, per-user pricing, and implementation consulting. EdgePredict is free to start with no credit card. Pro is $99/mo. You can be running in under two hours.",
    pricingLabel: "Enterprise (contact sales)",
    pricingContext:
      "Fiix does not publish pricing publicly. Expect per-user billing, annual contracts, and implementation fees. Pricing typically requires a sales call and a scoping process.",
    whatTheyDoWell:
      "Fiix has deep integration capabilities and robust analytics that large enterprise teams rely on. Their maintenance KPI library and reliability-centered maintenance (RCM) features are genuinely strong. For a 500-person maintenance organization with a dedicated IT team, Fiix's depth makes sense.",
    hasPricingScale: false,
    pricingScaleLabel: "users",
    pricingScale: [],
    tco: {
      context: "25 users, 3-year estimated total cost of ownership",
      rows: [
        { label: "Year 1 (subscription + implementation)", them: "$20,000–$30,000", ep: "$1,188" },
        { label: "Year 2", them: "$15,000–$20,000", ep: "$1,188" },
        { label: "Year 3", them: "$15,000–$20,000", ep: "$1,188" },
      ],
      totalThem: "$50,000–$70,000",
      totalEp: "$3,564",
      totalSavings: "$46,000–$66,000",
      disclaimer: "Fiix does not publish pricing. Estimates based on industry-reported per-user rates (~$45–$60/user/mo) plus typical implementation and onboarding fees. Contact Fiix for actual pricing.",
    },
    featureRows: [
      { feature: "Pricing model",              ep: "$99/mo flat per site",     them: "Enterprise, per-user, contact sales" },
      { feature: "Free tier",                  ep: "Yes — unlimited users",    them: "No" },
      { feature: "Setup time",                 ep: "Under 2 hours",            them: "Weeks to months" },
      { feature: "Contract required",          ep: "No — month-to-month",      them: "Yes — annual contracts" },
      { feature: "PM scheduling",              ep: "✓ (free)",                 them: "✓" },
      { feature: "Drag-and-drop scheduling",   ep: "✓ (free)",                 them: "✓" },
      { feature: "Parts inventory & POs",      ep: "✓ (free)",                 them: "✓" },
      { feature: "Team chat (DMs + channels)", ep: "✓ (free)",                 them: "✗" },
      { feature: "Mobile app (iOS & Android)", ep: "✓ (free, offline)",        them: "✓" },
      { feature: "Inspections",                ep: "✓ (Pro)",                  them: "Add-on" },
      { feature: "AI work order generator",    ep: "✓ (Pro)",                  them: "✗" },
      { feature: "AI scheduling suggestions",  ep: "✓ (Pro)",                  them: "✗" },
      { feature: "Workflow automation",        ep: "✓ (Pro)",                  them: "✓" },
      { feature: "Custom fields",              ep: "✓ (Pro)",                  them: "✓" },
      { feature: "Motor monitoring sensors",   ep: "✓ (Monitor tier)",         them: "✗" },
      { feature: "Condition-based PM",         ep: "✓ (Monitor tier)",         them: "✗" },
    ],
    switchReasons: [
      {
        title: "You shouldn't need a 3-month sales process for a CMMS",
        body: "Fiix requires discovery calls, scoping sessions, demos, and contracting before you can log in. EdgePredict takes 90 seconds. Start free, no credit card, and be running real work orders before lunch.",
      },
      {
        title: "Annual contracts lock you in before you know if it works",
        body: "Fiix sells annual agreements, which means you're committed before you've seen the system handle real volume. EdgePredict is month-to-month. Cancel anytime. The Monitor tier pilot is 60 days free — if it doesn't prove value, send the hardware back.",
      },
      {
        title: "Fiix has no path to sensor integration",
        body: "For a team that wants to add motor monitoring, Fiix offers no native path. You're looking at a separate sensor platform, a separate contract, and manual data bridging. EdgePredict handles both in one system.",
      },
    ],
    faqs: [
      {
        q: "Is EdgePredict missing features that Fiix has for large enterprises?",
        a: "For large enterprise operations with 50+ technicians, dedicated reliability engineers, and complex multi-plant hierarchies, Fiix has depth EdgePredict doesn't fully match yet. EdgePredict is built for the 85% of plants that have nothing — small and mid-sized operations where Fiix is overkill and overpriced.",
      },
      {
        q: "Can EdgePredict integrate with ERP systems like SAP or Oracle?",
        a: "EdgePredict has 158 API endpoints and supports CSV import/export. Direct ERP integrations are on the roadmap. If you have a specific integration need, talk to us — we're transparent about what's available today and what's coming.",
      },
      {
        q: "What if we outgrow EdgePredict?",
        a: "That's a good problem to have. We're actively building. If you reach the scale where you genuinely need enterprise CMMS complexity, you'll know — and by then you'll have years of clean maintenance data, established PM programs, and a team that knows how to use a CMMS. That makes any migration easier.",
      },
    ],
  },

  {
    slug: "hippo-cmms-alternative",
    name: "Hippo CMMS",
    category: "cmms",
    metaTitle: "Hippo CMMS Alternative | EdgePredict — Modern CMMS, No Per-User Fees",
    metaDescription:
      "Hippo CMMS charges per user with outdated UX and no sensor integration. EdgePredict Pro is $99 flat — modern interface, AI-powered, with motor monitoring built in.",
    heroHeadline: "Hippo CMMS is per-user and getting older. We built something new.",
    heroSubhead:
      "Hippo charges roughly $40/user/mo. A 25-person team runs $1,000/mo — 10x EdgePredict Pro. Over 3 years that's $32,400 in subscription costs for a platform that hasn't shipped a fundamentally new capability in years.",
    pricingLabel: "~$40/user/mo",
    pricingContext:
      "Hippo CMMS pricing varies by plan and is approximately $35–$45/user/month depending on tier. All plans are per-user with annual billing options.",
    whatTheyDoWell:
      "Hippo has been reliable for many operations teams over the years, and their floor plan mapping feature is genuinely useful. Their customer support team is responsive and their onboarding documentation is thorough. For an operation that's been on Hippo for years and has no desire to change, the familiarity has value.",
    hasPricingScale: true,
    pricingScaleLabel: "users",
    pricingScale: [
      { size: "5 users",   them: "$200/mo",   ep: "$0/mo (Free)",  savings: "$200/mo",   epWins: true },
      { size: "25 users",  them: "$1,000/mo", ep: "$99/mo (Pro)",  savings: "$901/mo",   epWins: true },
      { size: "50 users",  them: "$2,000/mo", ep: "$99/mo (Pro)",  savings: "$1,901/mo", epWins: true },
      { size: "100 users", them: "$4,000/mo", ep: "$99/mo (Pro)",  savings: "$3,901/mo", epWins: true },
    ],
    tco: {
      context: "25 users, 3-year subscription cost",
      rows: [
        { label: "Year 1", them: "$12,000", ep: "$1,188" },
        { label: "Year 2", them: "$12,000", ep: "$1,188" },
        { label: "Year 3", them: "$12,000", ep: "$1,188" },
      ],
      totalThem: "$36,000",
      totalEp: "$3,564",
      totalSavings: "$32,436",
      disclaimer: "Based on Hippo CMMS at ~$40/user/mo and EdgePredict Pro at $99/mo. Hippo pricing varies by tier and contract — actual costs may differ.",
    },
    featureRows: [
      { feature: "Pricing model",              ep: "$99/mo flat per site",     them: "~$40/user/mo" },
      { feature: "Free tier",                  ep: "Yes — unlimited users",    them: "No" },
      { feature: "Unlimited users",            ep: "✓ (all tiers)",            them: "✗ (per-user billing)" },
      { feature: "PM scheduling",              ep: "✓ (free)",                 them: "✓" },
      { feature: "Drag-and-drop scheduling",   ep: "✓ (free)",                 them: "✓" },
      { feature: "Parts inventory & POs",      ep: "✓ (free)",                 them: "✓" },
      { feature: "Team chat (DMs + channels)", ep: "✓ (free)",                 them: "✗" },
      { feature: "Mobile app (iOS & Android)", ep: "✓ (free, offline)",        them: "✓" },
      { feature: "Inspections",                ep: "✓ (Pro)",                  them: "✓" },
      { feature: "AI work order generator",    ep: "✓ (Pro)",                  them: "✗" },
      { feature: "AI scheduling suggestions",  ep: "✓ (Pro)",                  them: "✗" },
      { feature: "Floor plan mapping",         ep: "✓ (Pro)",                  them: "✓" },
      { feature: "Motor monitoring sensors",   ep: "✓ (Monitor tier)",         them: "✗" },
      { feature: "Condition-based PM",         ep: "✓ (Monitor tier)",         them: "✗" },
    ],
    switchReasons: [
      {
        title: "The price gap is significant",
        body: "At $40/user/mo, a 10-person team is paying $400/mo. EdgePredict Pro is $99/mo for the same team — and includes AI features that Hippo doesn't offer at any price.",
      },
      {
        title: "AI is native, not bolted on",
        body: "EdgePredict was built with AI work order generation and AI scheduling suggestions from the ground up. Hippo's core architecture predates modern AI — there's no equivalent capability in their platform.",
      },
      {
        title: "A path to predictive maintenance",
        body: "Hippo has no sensor roadmap. EdgePredict Monitor connects ESA-based motor health data directly to your PM schedule — condition-based triggers, real-time health scores every 2 seconds, and 20-minute non-invasive installation.",
      },
    ],
    faqs: [
      {
        q: "Is migrating from Hippo difficult?",
        a: "No. EdgePredict supports CSV import for assets, work order history, and parts inventory. Most teams can import their data in under an hour. If you need help, talk to us — migration assistance is something we're happy to provide.",
      },
      {
        q: "Does EdgePredict have floor plan mapping like Hippo?",
        a: "Yes. Floor plan mapping is included in EdgePredict's free tier. You can upload site maps and pin assets directly to them, making it easy for technicians to locate equipment without knowing the asset ID.",
      },
      {
        q: "How long has EdgePredict been around?",
        a: "EdgePredict is newer than Hippo, and we won't pretend otherwise. We're built by engineers with years of plant floor experience, and we've shipped quickly because we built on a modern stack without legacy constraints. If you want references or a demo before committing, we'll set that up.",
      },
    ],
  },

  {
    slug: "augury-alternative",
    name: "Augury",
    category: "monitoring",
    metaTitle: "Augury Alternative | EdgePredict — $200/Motor vs $500+/Motor, With CMMS Included",
    metaDescription:
      "Augury charges $500+/motor/mo for monitoring only. EdgePredict Monitor is $200/mo per motor with hardware, cellular connectivity, and a full CMMS included in the same platform.",
    heroHeadline: "Augury is $500+/motor and doesn't include a CMMS. We're $200 and do both.",
    heroSubhead:
      "Augury is an enterprise AI monitoring platform designed for Fortune 500 facilities teams. EdgePredict Monitor is built for the plant that wants real motor health data without a six-figure contract — and gets a full maintenance management system alongside it.",
    pricingLabel: "$500+/motor/mo",
    pricingContext:
      "Augury's pricing is not public, but is widely reported to start at $500+/motor/month for their AI-powered machine health platform. Implementation, onboarding, and hardware are typically separate line items.",
    whatTheyDoWell:
      "Augury has invested heavily in AI-powered vibration and ultrasound analysis and has real case studies from large manufacturing facilities. Their cloud analytics platform and predictive models are enterprise-grade. If you're running a Fortune 500 facility with a dedicated reliability engineering team and a six-figure monitoring budget, their depth is real.",
    hasPricingScale: true,
    pricingScaleLabel: "motors",
    pricingScale: [
      { size: "3 motors",  them: "$1,500+/mo",  ep: "$600/mo",   savings: "$900+/mo",    epWins: true },
      { size: "10 motors", them: "$5,000+/mo",  ep: "$2,000/mo", savings: "$3,000+/mo",  epWins: true },
      { size: "25 motors", them: "$12,500+/mo", ep: "$5,000/mo", savings: "$7,500+/mo",  epWins: true },
      { size: "50 motors", them: "$25,000+/mo", ep: "$10,000/mo",savings: "$15,000+/mo", epWins: true },
    ],
    tco: {
      context: "10 motors monitored, 3-year total cost",
      rows: [
        { label: "Year 1", them: "$60,000+", ep: "$24,000" },
        { label: "Year 2", them: "$60,000+", ep: "$24,000" },
        { label: "Year 3", them: "$60,000+", ep: "$24,000" },
      ],
      totalThem: "$180,000+",
      totalEp: "$72,000",
      totalSavings: "$108,000+",
      disclaimer: "Augury pricing based on industry estimates of $500+/motor/mo. EdgePredict Monitor at $200/mo per motor includes hardware and a full CMMS platform. Augury pricing requires a sales engagement — contact them for actual figures.",
    },
    featureRows: [
      { feature: "Price per motor",            ep: "$200/mo (hardware included)", them: "$500+/mo (est.)" },
      { feature: "Hardware included",          ep: "✓",                           them: "Varies" },
      { feature: "Installation",               ep: "20 min, non-invasive",        them: "Professional install required" },
      { feature: "Connectivity",               ep: "Cellular, no IT required",    them: "Requires network integration" },
      { feature: "Health score refresh rate",  ep: "Every 2 seconds (edge)",      them: "Cloud-processed (delayed)" },
      { feature: "Free pilot",                 ep: "60 days, hardware included",  them: "No" },
      { feature: "CMMS included",              ep: "✓ (full platform, free)",     them: "✗ (monitoring only)" },
      { feature: "Work orders",                ep: "✓ (free tier)",               them: "✗" },
      { feature: "PM scheduling",              ep: "✓ (free tier)",               them: "✗" },
      { feature: "Team chat",                  ep: "✓ (free tier)",               them: "✗" },
      { feature: "Mobile app (iOS & Android)", ep: "✓ (free tier, offline)",      them: "✗" },
      { feature: "Condition-based PM triggers",ep: "✓ (automatic)",               them: "Manual alert response only" },
      { feature: "Contract required",          ep: "No — month-to-month",         them: "Yes — multi-year typical" },
      { feature: "Target customer",            ep: "Small/mid industrial plants",  them: "Fortune 500 facilities" },
    ],
    switchReasons: [
      {
        title: "Edge processing means faster fault detection",
        body: "EdgePredict computes motor health scores every 2 seconds at the edge — on the sensor itself. Augury processes data in the cloud, which introduces latency. When a motor is degrading, two seconds matters more than two minutes.",
      },
      {
        title: "Your CMMS and sensors are the same system",
        body: "Augury gives you monitoring data. Then what? You still need a CMMS to create the work order, assign the technician, track the repair, and close the loop. EdgePredict does all of it — sensor data triggers PM automatically, inside the same platform.",
      },
      {
        title: "Try it before you commit — for free",
        body: "Augury requires a contract before you see value. EdgePredict's 60-day pilot ships hardware, you install it in 20 minutes, and if we don't surface useful data, you return the hardware. No contract, no obligation.",
      },
    ],
    faqs: [
      {
        q: "Does EdgePredict use vibration sensors like Augury?",
        a: "No. EdgePredict uses Electrical Signature Analysis (ESA) — 3-phase current monitoring via split-core CTs that clamp around the motor leads. No vibration sensors, no accelerometers, no physical contact with the motor. 20-minute installation, no rewiring, no downtime. ESA detects phase imbalance, electrical faults, bearing degradation (via current harmonics), and load instability.",
      },
      {
        q: "Is ESA as accurate as vibration analysis?",
        a: "For electrical faults, load anomalies, and phase conditions — yes, often more sensitive than vibration. For pure mechanical faults like early-stage bearing damage, vibration has an edge in specific scenarios. The practical difference: ESA installs in 20 minutes without touching the motor. Vibration sensors require physical mounting on the motor housing, which can require permits, downtime, and access that isn't always available.",
      },
      {
        q: "What does EdgePredict's motor health score actually measure?",
        a: "The health score is computed from 3-phase current signatures, updated every 2 seconds at the edge. It tracks phase imbalance, overcurrent, load instability, harmonic distortion patterns, and electrical anomalies. Baselines are motor-specific and adapt over time, with separate buckets for VFD-driven and line-fed states.",
      },
      {
        q: "Is EdgePredict right for large enterprise facilities?",
        a: "EdgePredict is built for plants that have between 5 and 200 critical motors and currently have no monitoring. If you're running a large facility with a full reliability engineering team and enterprise CMMS already in place, Augury's depth may be a better fit for pure monitoring. If you need both monitoring and maintenance management without a six-figure commitment, we're the right call.",
      },
    ],
  },
];

export function getCompetitor(slug: string): Competitor | undefined {
  return COMPETITORS.find((c) => c.slug === slug);
}
