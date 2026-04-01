import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Pricing — EdgePredict CMMS & Motor Monitoring",
  description:
    "Free CMMS with unlimited users and work orders. $99/mo Pro. $200/mo per motor for condition monitoring with hardware included. Free 60-day pilot. No contracts.",
  alternates: {
    canonical: "https://www.edgepredict.io/pricing",
  },
  openGraph: {
    title: "Pricing — EdgePredict CMMS & Motor Monitoring",
    description:
      "Free CMMS with unlimited users. $99/mo Pro. $200/mo motor monitoring with hardware included. Free 60-day pilot.",
    url: "https://www.edgepredict.io/pricing",
    type: "website",
  },
};

const tiers = [
  {
    name: "Planner",
    badge: { label: "Free", classes: "bg-green-100 text-green-700" },
    price: "$0",
    priceSub: "Free forever",
    description:
      "Not a trial. Not limited. A real CMMS with unlimited users and unlimited work orders. Because 85% of plants have nothing.",
    cardClasses: "border-slate-200 bg-white",
    features: [
      "Unlimited users",
      "Unlimited assets & work orders",
      "Full work order lifecycle (10 statuses, audit trail)",
      "PM scheduling with auto-generated templates",
      "Parts inventory, purchase orders & receiving",
      "Drag-and-drop schedule board",
      "Requests & approval workflow",
      "Vendor portal",
      "Team chat — DMs + channels, real-time",
      "Mobile app — iOS & Android, offline mode",
    ],
    checkColor: "text-green-500",
    textColor: "text-slate-900",
    subtextColor: "text-slate-500",
    cta: {
      label: "Get Started Free",
      href: "https://tools.edgepredict.io/signup",
      external: true,
      classes:
        "bg-[#7655d6] hover:bg-[#5d3db8] text-white hover:shadow-lg hover:shadow-[#7655d6]/25 hover:scale-[1.02]",
    },
  },
  {
    name: "Pro",
    badge: { label: "Most Popular", classes: "bg-[#7655d6]/10 text-[#7655d6]" },
    price: "$99",
    priceSub: "/mo per site",
    description:
      "Everything unlocked. One price. No per-user fees. No surprises. Billed monthly, cancel anytime.",
    cardClasses:
      "border-[#7655d6]/40 bg-white shadow-[0_0_0_1px_rgba(118,85,214,0.15)]",
    featuresPrefix: "Everything in Planner, plus:",
    features: [
      "Inspections with auto-WO from failures",
      "AI work order generator + troubleshooter",
      "KPI dashboards, OEE & downtime tracking",
      "Automation rules & workflow triggers",
      "SOPs library & floor plans",
      "PDF & CSV exports + digital signatures",
      "Email notifications & schedule auto-post",
      "Custom fields & advanced attachments",
      "QuickBooks Online integration",
    ],
    checkColor: "text-green-500",
    textColor: "text-slate-900",
    subtextColor: "text-slate-500",
    cta: {
      label: "Get Started",
      href: "https://tools.edgepredict.io/signup",
      external: true,
      classes:
        "bg-[#7655d6] hover:bg-[#5d3db8] text-white hover:shadow-lg hover:shadow-[#7655d6]/25 hover:scale-[1.02]",
    },
  },
  {
    name: "Monitor",
    badge: { label: "Sensors", classes: "bg-[#7655d6] text-white" },
    price: "$200",
    priceSub: "/mo per motor",
    description:
      "Hardware ships pre-configured. 20-minute install. Cellular, no IT needed. If we don't surface useful data in 60 days, return the hardware. No obligation.",
    cardClasses:
      "border-[#7655d6]/30 bg-[#0a0a0f] shadow-[0_0_0_1px_rgba(118,85,214,0.2)]",
    featuresPrefix: "Everything in Pro, plus:",
    features: [
      "Sensor hardware kit included",
      "Real-time ESA monitoring",
      "Condition-based PM triggers",
      "Dynamic PM scheduling",
      "Cellular connectivity, no IT required",
      "20-minute non-invasive install",
      "60-day free pilot",
      "Return hardware if no value",
      "Engineer-level support",
    ],
    checkColor: "text-[#a78fe8]",
    textColor: "text-white",
    subtextColor: "text-slate-400",
    cta: {
      label: "Start Free Pilot",
      href: "/pilot",
      external: false,
      classes:
        "bg-[#7655d6] hover:bg-[#5d3db8] text-white hover:shadow-lg hover:shadow-[#7655d6]/25 hover:scale-[1.02]",
    },
  },
];

/* ── Full comparison table (matches homepage) ──────────────────────────── */
type Cell = string;
const TABLE_ROWS: {
  feature: string;
  ep0: Cell;
  ep99: Cell;
  mx: Cell;
  up: Cell;
  fiix: Cell;
  aug: Cell;
}[] = [
  {
    feature: "Users",
    ep0: "Unlimited",
    ep99: "Unlimited",
    mx: "Per-user",
    up: "Per-user",
    fiix: "Per-user",
    aug: "Per-user",
  },
  {
    feature: "Work Orders",
    ep0: "Unlimited",
    ep99: "Unlimited",
    mx: "Limited",
    up: "Limited",
    fiix: "✓",
    aug: "✗",
  },
  {
    feature: "PM Scheduling",
    ep0: "✓",
    ep99: "✓",
    mx: "✓",
    up: "✓",
    fiix: "✓",
    aug: "✗",
  },
  {
    feature: "Inspections",
    ep0: "✗",
    ep99: "✓",
    mx: "Add-on",
    up: "Add-on",
    fiix: "Add-on",
    aug: "✗",
  },
  {
    feature: "Parts Inventory",
    ep0: "✓",
    ep99: "✓",
    mx: "Add-on",
    up: "Add-on",
    fiix: "✓",
    aug: "✗",
  },
  {
    feature: "AI Work Orders & AI Tools",
    ep0: "✗",
    ep99: "✓",
    mx: "✗",
    up: "✗",
    fiix: "✗",
    aug: "✗",
  },
  {
    feature: "AI Scheduling",
    ep0: "✗",
    ep99: "✓",
    mx: "✗",
    up: "✗",
    fiix: "✗",
    aug: "✗",
  },
  {
    feature: "Drag-and-Drop Schedule",
    ep0: "✓",
    ep99: "✓",
    mx: "✗",
    up: "✓",
    fiix: "✗",
    aug: "✗",
  },
  {
    feature: "Team Chat (DMs + Channels)",
    ep0: "✓",
    ep99: "✓",
    mx: "✗",
    up: "✗",
    fiix: "✗",
    aug: "✗",
  },
  {
    feature: "SOPs Library",
    ep0: "✗",
    ep99: "✓",
    mx: "✗",
    up: "✗",
    fiix: "✗",
    aug: "✗",
  },
  {
    feature: "Vendor Portal",
    ep0: "✓",
    ep99: "✓",
    mx: "✗",
    up: "✗",
    fiix: "✗",
    aug: "✗",
  },
  {
    feature: "QR / NFC Scanning",
    ep0: "✓",
    ep99: "✓",
    mx: "Add-on",
    up: "✓",
    fiix: "✗",
    aug: "✗",
  },
  {
    feature: "Floor Plans",
    ep0: "✗",
    ep99: "✓",
    mx: "✗",
    up: "✗",
    fiix: "✗",
    aug: "✗",
  },
  {
    feature: "Custom Fields",
    ep0: "✗",
    ep99: "✓",
    mx: "✓",
    up: "✓",
    fiix: "✓",
    aug: "✗",
  },
  {
    feature: "Workflow Automation",
    ep0: "✗",
    ep99: "✓",
    mx: "Add-on",
    up: "Add-on",
    fiix: "✓",
    aug: "✗",
  },
  {
    feature: "Reporting / KPIs",
    ep0: "✗",
    ep99: "✓",
    mx: "Basic",
    up: "Basic",
    fiix: "✓",
    aug: "✗",
  },
  {
    feature: "QuickBooks Integration",
    ep0: "✗",
    ep99: "✓",
    mx: "✓",
    up: "✓",
    fiix: "✓",
    aug: "✗",
  },
  {
    feature: "Mobile App",
    ep0: "✓",
    ep99: "✓",
    mx: "✓",
    up: "✓",
    fiix: "✓",
    aug: "✗",
  },
  {
    feature: "Offline Mode",
    ep0: "✓",
    ep99: "✓",
    mx: "✓",
    up: "✓",
    fiix: "✗",
    aug: "✗",
  },
  {
    feature: "Motor Monitoring Sensors",
    ep0: "✓",
    ep99: "✓",
    mx: "✗",
    up: "✗",
    fiix: "✗",
    aug: "✓",
  },
  {
    feature: "Built-in Sensor Integration",
    ep0: "Monitor",
    ep99: "Monitor",
    mx: "✗",
    up: "✗",
    fiix: "✗",
    aug: "N/A",
  },
  {
    feature: "Condition-Based PM",
    ep0: "Monitor",
    ep99: "Monitor",
    mx: "✗",
    up: "✗",
    fiix: "✗",
    aug: "✗",
  },
  {
    feature: "Edge-Computed Health Score",
    ep0: "Monitor",
    ep99: "Monitor",
    mx: "✗",
    up: "✗",
    fiix: "✗",
    aug: "Cloud only",
  },
  {
    feature: "Price for 25 users",
    ep0: "$0",
    ep99: "$99/mo",
    mx: "$400/mo",
    up: "$500/mo",
    fiix: "Contact",
    aug: "N/A",
  },
];

function cellStyle(val: Cell, col: "ep" | "other"): string {
  if (col === "ep") return "text-[#5d3db8] font-semibold";
  if (val === "✓") return "text-green-600 font-semibold";
  if (val === "✗") return "text-slate-300";
  if (val === "Add-on" || val === "Contact" || val === "N/A")
    return "text-slate-400 text-xs";
  return "text-slate-600";
}

const faqs = [
  {
    q: "Is the free plan really free?",
    a: "Yes. No credit card required, no time limit, no feature throttling. Unlimited users, unlimited work orders, unlimited assets. We built it because most small plants have nothing. Something genuinely free is infinitely better than a 30-day trial.",
  },
  {
    q: "What's the difference between free and Pro?",
    a: "Free includes unlimited users, work orders, PM scheduling, parts inventory with purchase orders, drag-and-drop scheduling, requests & approval workflow, vendor portal, team chat, and the full mobile app (iOS & Android with offline mode). Pro adds inspections, AI work order generator & troubleshooter, KPI dashboards, OEE & downtime tracking, automation rules, SOPs library, floor plans, PDF/CSV exports, digital signatures, email notifications, and QuickBooks integration.",
  },
  {
    q: "Do I need sensors to use the platform?",
    a: "No. The management platform works completely standalone. Sensors are an optional upgrade that change time-based PM schedules to condition-based, driven by real electrical signature data from the motor itself. Start free, add sensors when you're ready.",
  },
  {
    q: "What happens after the 60-day pilot?",
    a: "If the sensors prove value, you continue at $200/mo per motor. If not, send the hardware back. No obligation, no contract, no pressure. The pilot is genuinely free.",
  },
  {
    q: "Can I start free and add sensors later?",
    a: "That's exactly how we designed it. Start with the free Planner tier, get your PM program organized, track your failures, see which motors are critical, then add monitoring on the ones that matter most.",
  },
  {
    q: "How does EdgePredict compare to MaintainX or UpKeep?",
    a: "MaintainX starts at $16/user/month and UpKeep at $20/user/month — a 25-person team pays $400–$500/mo. EdgePredict Pro is $99/mo flat for your entire site. Our free tier covers the full core CMMS workflow. And we're the only platform that also does motor monitoring as part of the same system — the CMMS + sensor integration doesn't exist anywhere else.",
  },
];

export default function PricingPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0a0a0f] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest font-semibold text-[#a78fe8] mb-4">
            Pricing
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Simple, transparent pricing.
          </h1>
          <p className="text-xl text-slate-400 max-w-xl mx-auto mb-10">
            Start free. Add sensors when you&apos;re ready. No per-user fees. No contracts.
          </p>

          {/* Pilot callout */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#7655d6]/10 border border-[#7655d6]/20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-live-dot flex-shrink-0" />
            <span className="text-sm text-slate-300">
              Monitor tier: <span className="text-white font-semibold">60-day free pilot</span> with hardware included
            </span>
          </div>
        </div>
      </section>

      {/* ── TIER CARDS ───────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${tier.cardClasses}`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className={`text-xl font-bold ${tier.textColor}`}>
                    {tier.name}
                  </h2>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tier.badge.classes}`}>
                    {tier.badge.label}
                  </span>
                </div>

                {/* Price */}
                <div className="mb-1">
                  <span className={`text-5xl font-bold ${tier.textColor}`}>
                    {tier.price}
                  </span>
                </div>
                <p className={`text-sm mb-5 ${tier.subtextColor}`}>{tier.priceSub}</p>

                {/* Monitor pilot highlight */}
                {tier.name === "Monitor" && (
                  <div className="mb-5 p-3 rounded-lg bg-[#7655d6]/10 border border-[#7655d6]/20">
                    <p className="text-xs font-semibold text-[#a78fe8] uppercase tracking-wider mb-1">
                      Free Pilot
                    </p>
                    <p className="text-sm text-slate-300">
                      Hardware included. 60 days free. Return it if we don&apos;t prove value.
                    </p>
                  </div>
                )}

                <p className={`text-sm mb-8 leading-relaxed ${tier.subtextColor}`}>
                  {tier.description}
                </p>

                {/* CTA */}
                {tier.cta.external ? (
                  <a
                    href={tier.cta.href}
                    className={`w-full inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 mb-8 ${tier.cta.classes}`}
                  >
                    {tier.cta.label} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                ) : (
                  <Link
                    href={tier.cta.href}
                    className={`w-full inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 mb-8 ${tier.cta.classes}`}
                  >
                    {tier.cta.label} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                )}

                {/* Features */}
                <div>
                  {tier.featuresPrefix && (
                    <p className={`text-xs font-semibold uppercase tracking-wide mb-4 ${tier.subtextColor}`}>
                      {tier.featuresPrefix}
                    </p>
                  )}
                  <ul className="space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle className={`h-4 w-4 mt-0.5 flex-shrink-0 ${tier.checkColor}`} />
                        <span className={`text-sm ${tier.name === "Monitor" ? "text-slate-300" : "text-slate-700"}`}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL COMPARISON TABLE ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#7655d6] uppercase tracking-widest mb-3">
              Comparison
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              See everything side by side
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">
              Every feature. Every platform. No footnotes.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-sm border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="sticky left-0 bg-white text-left py-4 px-5 text-slate-500 font-medium w-44 z-10">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 font-bold text-white bg-[#7655d6]">
                    EdgePredict Free
                  </th>
                  <th className="text-center py-4 px-4 font-bold text-white bg-[#5d3db8]">
                    EdgePredict Pro
                    <br />
                    <span className="text-xs font-normal text-slate-300">($99/mo)</span>
                  </th>
                  <th className="text-center py-4 px-4 text-slate-600 font-medium">
                    MaintainX
                    <br />
                    <span className="text-xs font-normal text-slate-400">($16/user/mo)</span>
                    <br />
                    <Link href="/compare/maintainx-alternative" className="text-xs text-[#7655d6] hover:underline font-normal">
                      Full comparison →
                    </Link>
                  </th>
                  <th className="text-center py-4 px-4 text-slate-600 font-medium">
                    UpKeep
                    <br />
                    <span className="text-xs font-normal text-slate-400">($20/user/mo)</span>
                    <br />
                    <Link href="/compare/upkeep-alternative" className="text-xs text-[#7655d6] hover:underline font-normal">
                      Full comparison →
                    </Link>
                  </th>
                  <th className="text-center py-4 px-4 text-slate-600 font-medium">
                    Fiix
                    <br />
                    <span className="text-xs font-normal text-slate-400">(Enterprise)</span>
                    <br />
                    <Link href="/compare/fiix-alternative" className="text-xs text-[#7655d6] hover:underline font-normal">
                      Full comparison →
                    </Link>
                  </th>
                  <th className="text-center py-4 px-4 text-slate-600 font-medium">
                    Augury
                    <br />
                    <span className="text-xs font-normal text-slate-400">($500+/motor)</span>
                    <br />
                    <Link href="/compare/augury-alternative" className="text-xs text-[#7655d6] hover:underline font-normal">
                      Full comparison →
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}
                  >
                    <td className={`sticky left-0 bg-inherit py-3 px-5 text-slate-700 font-medium z-10 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}>
                      {row.feature}
                    </td>
                    <td className={`py-3 px-4 text-center bg-[#7655d6]/5 ${cellStyle(row.ep0, "ep")}`}>
                      {row.ep0}
                    </td>
                    <td className={`py-3 px-4 text-center bg-[#5d3db8]/5 ${cellStyle(row.ep99, "ep")}`}>
                      {row.ep99}
                    </td>
                    <td className={`py-3 px-4 text-center ${cellStyle(row.mx, "other")}`}>
                      {row.mx}
                    </td>
                    <td className={`py-3 px-4 text-center ${cellStyle(row.up, "other")}`}>
                      {row.up}
                    </td>
                    <td className={`py-3 px-4 text-center ${cellStyle(row.fiix, "other")}`}>
                      {row.fiix}
                    </td>
                    <td className={`py-3 px-4 text-center ${cellStyle(row.aug, "other")}`}>
                      {row.aug}
                    </td>
                  </tr>
                ))}
              </tbody>
              {/* Feature count footer row */}
              <tfoot>
                <tr className="border-t-2 border-slate-300 bg-slate-100">
                  <td className="sticky left-0 bg-slate-100 py-4 px-5 text-xs font-bold text-slate-500 uppercase tracking-wider z-10">
                    Features included
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-sm font-bold text-[#7655d6]">Core platform</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-sm font-bold text-[#5d3db8]">All features</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-sm font-semibold text-slate-500">12 features</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-sm font-semibold text-slate-500">14 features</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-sm font-semibold text-slate-500">16 features</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-sm font-semibold text-slate-500">3 features</span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <p className="mt-4 text-xs text-slate-400 text-center">
            Feature counts reflect publicly available information. Competitor data accurate as of Q1 2025.
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#7655d6] uppercase tracking-widest mb-3">
              FAQ
            </p>
            <h2 className="text-3xl font-bold text-slate-900">Common questions</h2>
          </div>

          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-slate-200 pb-8 last:border-0 last:pb-0">
                <h3 className="font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-sm text-slate-500">
            More questions?{" "}
            <Link href="/contact" className="text-[#7655d6] hover:underline font-medium">
              Talk to an engineer
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0a0a0f] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to start?</h2>
          <p className="text-slate-400 mb-10 text-lg">
            Free takes 90 seconds to set up. Pilot takes a phone call.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://tools.edgepredict.io/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#7655d6] text-white font-semibold rounded-xl hover:bg-[#5d3db8] transition-all duration-200 hover:shadow-xl hover:shadow-[#7655d6]/30 hover:scale-[1.02]"
            >
              Get Started Free <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/pilot"
              className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 text-slate-300 font-semibold rounded-xl hover:border-[#7655d6] hover:text-white transition-all duration-200"
            >
              Start Free Pilot <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
