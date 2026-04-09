import Link from "next/link";
import { CheckCircle, Zap, ArrowRight, ClipboardList, Activity } from "lucide-react";
import HeroDashboard from "@/components/HeroDashboard";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "EdgePredict — The Maintenance Platform Your Plant Actually Needs",
  description:
    "Work orders, PMs, inspections, playbooks, reporting, and live motor monitoring — one platform, not five. Free to start. Built by the engineers who designed the hardware.",
  alternates: {
    canonical: "https://www.edgepredict.io",
  },
  openGraph: {
    title: "EdgePredict — The Maintenance Platform Your Plant Actually Needs",
    description:
      "Work orders, PMs, inspections, playbooks, reporting, and live motor monitoring — one platform, not five. Free to start.",
    url: "https://www.edgepredict.io",
    type: "website",
  },
};

/* ── Comparison table data ────────────────────────────────────────────── */
type Cell = string;
const TABLE_ROWS: { feature: string; ep0: Cell; ep99: Cell; mx: Cell; up: Cell; fiix: Cell; aug: Cell }[] = [
  { feature: "Users",                   ep0: "Unlimited", ep99: "Unlimited",    mx: "Per-user",    up: "Per-user",    fiix: "Per-user",    aug: "Per-user"    },
  { feature: "Work Orders",             ep0: "Unlimited", ep99: "Unlimited",    mx: "Limited",     up: "Limited",     fiix: "✓",           aug: "✗"           },
  { feature: "PM Scheduling",           ep0: "✓",         ep99: "✓",            mx: "✓",           up: "✓",           fiix: "✓",           aug: "✗"           },
  { feature: "Inspections",             ep0: "✗",         ep99: "✓",            mx: "Add-on",      up: "Add-on",      fiix: "Add-on",      aug: "✗"           },
  { feature: "Parts Inventory",         ep0: "✓",         ep99: "✓",            mx: "Add-on",      up: "Add-on",      fiix: "✓",           aug: "✗"           },
  { feature: "AI Work Orders & AI Tools",ep0: "✗",         ep99: "✓",            mx: "✗",           up: "✗",           fiix: "✗",           aug: "✗"           },
  { feature: "AI Scheduling",           ep0: "✗",         ep99: "✓",            mx: "✗",           up: "✗",           fiix: "✗",           aug: "✗"           },
  { feature: "Drag-and-Drop Schedule",  ep0: "✓",         ep99: "✓",            mx: "✗",           up: "✓",           fiix: "✗",           aug: "✗"           },
  { feature: "Team Chat (DMs + Channels)",ep0: "✓",       ep99: "✓",            mx: "✗",           up: "✗",           fiix: "✗",           aug: "✗"           },
  { feature: "SOPs Library",            ep0: "✗",         ep99: "✓",            mx: "✗",           up: "✗",           fiix: "✗",           aug: "✗"           },
  { feature: "Vendor Portal",           ep0: "✓",         ep99: "✓",            mx: "✗",           up: "✗",           fiix: "✗",           aug: "✗"           },
  { feature: "QR / NFC Scanning",       ep0: "✓",         ep99: "✓",            mx: "Add-on",      up: "✓",           fiix: "✗",           aug: "✗"           },
  { feature: "Floor Plans",             ep0: "✗",         ep99: "✓",            mx: "✗",           up: "✗",           fiix: "✗",           aug: "✗"           },
  { feature: "Custom Fields",           ep0: "✗",         ep99: "✓",            mx: "✓",           up: "✓",           fiix: "✓",           aug: "✗"           },
  { feature: "Workflow Automation",     ep0: "✗",         ep99: "✓",            mx: "Add-on",      up: "Add-on",      fiix: "✓",           aug: "✗"           },
  { feature: "Reporting / KPIs",        ep0: "✗",         ep99: "✓",            mx: "Basic",       up: "Basic",       fiix: "✓",           aug: "✗"           },
  { feature: "QuickBooks Integration",  ep0: "✗",         ep99: "✓",            mx: "✓",           up: "✓",           fiix: "✓",           aug: "✗"           },
  { feature: "Mobile App",              ep0: "✓",         ep99: "✓",            mx: "✓",           up: "✓",           fiix: "✓",           aug: "✗"           },
  { feature: "Offline Mode",            ep0: "✓",         ep99: "✓",            mx: "✓",           up: "✓",           fiix: "✗",           aug: "✗"           },
  { feature: "Motor Monitoring Sensors",ep0: "✓",         ep99: "✓",            mx: "✗",           up: "✗",           fiix: "✗",           aug: "✓"           },
  { feature: "Built-in Sensor Integration",ep0:"Monitor", ep99:"Monitor",       mx: "✗",           up: "✗",           fiix: "✗",           aug: "N/A"         },
  { feature: "Condition-Based PM",      ep0: "Monitor",   ep99: "Monitor",      mx: "✗",           up: "✗",           fiix: "✗",           aug: "✗"           },
  { feature: "Edge-Computed Health Score",ep0:"Monitor",  ep99:"Monitor",       mx: "✗",           up: "✗",           fiix: "✗",           aug: "Cloud only"  },
  { feature: "Price for 25 users",      ep0: "$0",        ep99: "$99/mo",       mx: "$400/mo",     up: "$500/mo",     fiix: "Contact",     aug: "N/A"         },
];

function cellStyle(val: Cell, col: "ep" | "other") {
  if (col === "ep") return "text-[#5d3db8] font-semibold";
  if (val === "✓") return "text-green-600 font-semibold";
  if (val === "✗") return "text-slate-300";
  if (val === "Add-on" || val === "Contact" || val === "N/A") return "text-slate-400 text-xs";
  return "text-slate-600";
}

/* ── Bridge flow items ──────────────────────────────────────────────── */
const FLOWS = [
  {
    steps: ["Sensor detects load anomaly", "Work order creates itself", "Technician gets notified"],
  },
  {
    steps: ["Health score drops below 75", "PM schedule adjusts frequency", "Parts pre-ordered"],
  },
  {
    steps: ["Repair completed", "Sensor verifies baseline restored", "Event logged with timestamp"],
  },
];

/* ── Management features ────────────────────────────────────────────── */
const MGMT_FEATURES_FREE = [
  "Work orders with 10-status lifecycle + full audit trail",
  "PM scheduling with auto-generated templates and risk scoring",
  "Asset management: hierarchy, BOM, QR codes",
  "Parts inventory with purchase orders, receiving & stock tracking",
  "Drag-and-drop schedule board with crew management",
  "Team chat — real-time DMs + dedicated channels, web & mobile",
  "Vendor portal & external maintenance request portal",
  "6 roles, 46 permissions, multi-tenant orgs",
  "Mobile app — iOS & Android, offline mode, QR/NFC scan",
];
const MGMT_FEATURES_PRO = [
  "Inspections with auto-corrective work orders on failure",
  "AI work order generator + troubleshooter (Gemini)",
  "KPI dashboards, OEE, MTBF/MTTR, Pulse reports & playbooks",
  "Automation rules, SOPs library & floor plans",
  "PDF & CSV exports, digital signatures, email notifications",
  "QuickBooks Online integration",
];

/* ── Monitoring features ────────────────────────────────────────────── */
const MON_FEATURES = [
  "Non-invasive 3-phase current monitoring via split-core CTs",
  "Electrical Signature Analysis (ESA) at the edge",
  "Health score computed locally every 2 seconds",
  "Bucketed baselines for VFD-driven and line-fed motors",
  "Phase loss, overcurrent, and load instability detection",
  "Transition lockout to prevent false alarms during start/stop",
  "20-minute clamp-on install, no rewiring",
  "Cellular connectivity, no IT involvement",
  "Live web dashboard with historical trending",
  "Alerts that automatically create work orders",
];

/* ── Pricing tiers ──────────────────────────────────────────────────── */
const TIERS = [
  {
    name: "Planner",
    badge: "Free",
    badgeClass: "bg-green-100 text-green-700",
    price: "$0",
    priceSub: "free forever",
    desc: "Not a trial. Not limited. A complete maintenance platform with unlimited users and unlimited work orders. Work orders, PMs, inspections, parts, reports — all included. Because 85% of plants have nothing.",
    features: ["Unlimited users", "Unlimited assets & work orders", "PM scheduling", "Parts inventory & purchase orders", "Drag-and-drop schedule board", "Team chat — DMs + channels", "Mobile app — iOS & Android, offline"],
    cta: { label: "Get Started Free", href: "https://tools.edgepredict.io/signup", external: true },
    dark: false,
  },
  {
    name: "Pro",
    badge: "Most Popular",
    badgeClass: "bg-[#7655d6]/10 text-[#7655d6]",
    price: "$99",
    priceSub: "/mo per site",
    desc: "Everything unlocked. Scheduling, automation, advanced reporting, QuickBooks. One price. No per-user fees. No surprises.",
    features: ["Everything in Planner", "Inspections with auto-WO from failures", "AI work order generator + troubleshooter", "KPI dashboards & OEE tracking", "Automation rules & SOPs library", "Floor plans, exports & digital signatures", "Email notifications & QuickBooks"],
    cta: { label: "Get Started", href: "https://tools.edgepredict.io/signup", external: true },
    dark: false,
  },
  {
    name: "Monitor",
    badge: "Sensors",
    badgeClass: "bg-[#7655d6] text-white",
    price: "$200",
    priceSub: "/mo per motor",
    desc: "Hardware included. 20-minute install. Cellular. 60-day pilot is truly free. If we don't find anything useful, return the hardware.",
    features: ["Sensor hardware included", "Real-time ESA monitoring", "Condition-based PM triggers", "Dynamic PM scheduling", "Cellular connectivity", "60-day free pilot"],
    cta: { label: "Start Free Pilot", href: "/pilot", external: false },
    dark: true,
  },
];

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">

      {/* ── 1. HERO ───────────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0f] py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <p className="text-sm uppercase tracking-widest font-semibold text-[#a78fe8] mb-5">
              Maintenance Management + Motor Monitoring
            </p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-6">
              Stop guessing.<br />
              <span className="text-[#7655d6]">Start knowing.</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-lg mb-10">
              The maintenance platform your plant actually needs. Stop duct-taping
              spreadsheets, clipboards, and disconnected tools together. Work orders,
              PMs, inspections, playbooks, reporting, and live motor monitoring in one
              platform. Most of it free. Built by engineers.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="https://tools.edgepredict.io/signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#7655d6] text-white font-semibold rounded-xl hover:bg-[#5d3db8] transition-all duration-200 hover:shadow-xl hover:shadow-[#7655d6]/30 hover:scale-[1.02]"
              >
                Get Started Free
              </a>
              <a
                href="https://tools.edgepredict.io/login"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-700 text-white font-semibold rounded-xl hover:border-[#a78fe8] hover:text-[#a78fe8] transition-all duration-200"
              >
                Explore Demo
              </a>
            </div>

            {/* Trust bar */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-2">
              {[
                "Free forever, no credit card",
                "158+ API endpoints",
                "Live pilots at manufacturers",
                "Built by Engineers, not MBAs",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                  <CheckCircle className="w-4 h-4 text-[#7655d6] flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: animated dashboard */}
          <div className="w-full">
            <HeroDashboard />
          </div>
        </div>
      </section>

      {/* ── 2. SOCIAL PROOF BAR ───────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-100 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-slate-500">
          {[
            "Free forever, no credit card",
            "Live pilots at manufacturers",
            "Built by engineers, not MBAs",
            "158+ API endpoints",
          ].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#7655d6] flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ── 3. THE TWO SIDES ──────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest font-semibold text-[#7655d6] mb-3">
              One Platform. Two Superpowers.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Management and monitoring. Built as one system.
            </h2>
            <p className="text-base md:text-lg text-slate-600 mt-4 max-w-2xl mx-auto leading-relaxed">
              Most plants use separate tools. Many use nothing at all. EdgePredict is the only
              platform where both sides share data, share context, and make each other smarter.
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Management card */}
            <FadeIn delay={1} className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className="w-10 h-1 rounded-full bg-[#7655d6] mb-6" />
              <ClipboardList className="w-8 h-8 text-[#7655d6] mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
                Maintenance Management
              </h3>
              <p className="text-xs font-semibold text-green-600 uppercase tracking-widest mt-4 mb-1">Free</p>
              <p className="text-xs text-slate-500 mb-2">More free features than any other platform on the market.</p>
              <ul className="space-y-2 mb-4">
                {MGMT_FEATURES_FREE.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-xs font-semibold text-[#7655d6] uppercase tracking-widest mb-2">Pro ($99/mo)</p>
              <ul className="space-y-2 mb-6">
                {MGMT_FEATURES_PRO.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-[#7655d6] flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/features"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#7655d6] hover:underline"
              >
                Explore Features <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>

            {/* Monitoring card */}
            <FadeIn delay={2} className="bg-[#0a0a0f] rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 border border-slate-800">
              <div className="w-10 h-1 rounded-full bg-cyan-500 mb-6" />
              <Activity className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                Motor Monitoring
              </h3>
              <ul className="space-y-2 mt-4 mb-6">
                {MON_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                    <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/monitoring"
                className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-400 hover:underline"
              >
                Learn About Monitoring <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 3b. SIDE-BY-SIDE DEMOS ────────────────────────────────────── */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-[#7655d6] uppercase tracking-widest mb-3">
              Live demo
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              See it in action — web &amp; mobile
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">
              Click through the real product. No sign-up required.
            </p>
          </div>

          <div className="space-y-10">
            {/* Web demo */}
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7655d6] inline-block" />
                Web — Create a Work Order
              </p>
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                <div style={{ position: "relative", paddingBottom: "calc(46.31578947368421% + 41px)", height: 0, width: "100%" }}>
                  <iframe
                    src="https://demo.arcade.software/v2hUY27fDKM67Dzs6OwJ?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
                    title="Create and Assign a Maintenance Work Order Using AI"
                    frameBorder="0"
                    loading="lazy"
                    allowFullScreen
                    allow="clipboard-write"
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", colorScheme: "light" }}
                  />
                </div>
              </div>
            </div>

            {/* Mobile demo */}
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                Mobile — Track Labor Hours
              </p>
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                <div style={{ position: "relative", paddingBottom: "calc(46.31578947368421% + 41px)", height: 0, width: "100%" }}>
                  <iframe
                    src="https://demo.arcade.software/2s0R9OZES9M7D5pce3Wp?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
                    title="Track Maintenance Labor Hours in a Mobile Work Order"
                    frameBorder="0"
                    loading="lazy"
                    allowFullScreen
                    allow="clipboard-write"
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", colorScheme: "light" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. THE BRIDGE ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#0a0a0f] relative overflow-hidden">
        {/* Subtle gradient accent */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(118,85,214,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative">
          <FadeIn className="text-center mb-14">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#7655d6]/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#a78fe8]" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto">
              When your sensors and your maintenance platform are one system, everything changes.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {FLOWS.map((flow, fi) => (
              <FadeIn key={fi} delay={(fi + 1) as 1 | 2 | 3}>
                <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/8 hover:-translate-y-1 transition-all duration-200">
                  {flow.steps.map((step, si) => (
                    <div key={si}>
                      <p className={`text-sm font-medium ${si === 0 ? "text-slate-300" : si === 1 ? "text-[#a78fe8]" : "text-green-400"}`}>
                        {step}
                      </p>
                      {si < flow.steps.length - 1 && (
                        <div className="flex items-center gap-1 my-2 pl-1">
                          <div className="w-3 h-px bg-slate-700" />
                          <ArrowRight className="w-3 h-3 text-slate-600" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-12 text-center">
            <p className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed">
              This is not integration. This is one system. No middleware. No third-party
              connectors. No data silos.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── 5. COMPETITOR COMPARISON ──────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <p className="text-sm uppercase tracking-widest font-semibold text-[#7655d6] mb-3">
              The Honest Comparison
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              We checked. Nobody else does this.
            </h2>
            <p className="text-base md:text-lg text-slate-600 mt-4 max-w-xl mx-auto">
              Named competitors because buyers are already comparing. We have nothing to hide.
            </p>
          </FadeIn>

          {/* Scroll wrapper for mobile sticky column */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm border-collapse min-w-[780px]">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="sticky left-0 bg-white text-left py-4 px-4 text-slate-500 font-medium w-44">
                    Feature
                  </th>
                  <th className="py-4 px-4 text-center font-bold text-white bg-[#7655d6] min-w-[120px]">
                    EdgePredict<br />
                    <span className="font-normal text-purple-200 text-xs">Free</span>
                  </th>
                  <th className="py-4 px-4 text-center font-bold text-white bg-[#5d3db8] min-w-[120px]">
                    EdgePredict<br />
                    <span className="font-normal text-purple-200 text-xs">Pro $99/mo</span>
                  </th>
                  <th className="py-4 px-4 text-center text-slate-600 font-medium min-w-[110px]">
                    MaintainX<br />
                    <span className="text-slate-400 font-normal text-xs">$16/user/mo</span>
                  </th>
                  <th className="py-4 px-4 text-center text-slate-600 font-medium min-w-[110px]">
                    UpKeep<br />
                    <span className="text-slate-400 font-normal text-xs">$20/user/mo</span>
                  </th>
                  <th className="py-4 px-4 text-center text-slate-600 font-medium min-w-[90px]">
                    Fiix<br />
                    <span className="text-slate-400 font-normal text-xs">Enterprise</span>
                  </th>
                  <th className="py-4 px-4 text-center text-slate-600 font-medium min-w-[100px]">
                    Augury<br />
                    <span className="text-slate-400 font-normal text-xs">$500+/motor</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
                  >
                    <td className="sticky left-0 bg-inherit py-3 px-4 font-medium text-slate-700">
                      {row.feature}
                    </td>
                    <td className={`py-3 px-4 text-center bg-[#7655d6]/5 ${cellStyle(row.ep0, "ep")}`}>
                      {row.ep0}
                    </td>
                    <td className={`py-3 px-4 text-center bg-[#7655d6]/8 ${cellStyle(row.ep99, "ep")}`}>
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
            </table>
          </div>

          <FadeIn className="mt-8 text-center">
            <p className="text-slate-500 text-sm mb-4">
              Still comparing? Try the live demo. No signup required.
            </p>
            <a
              href="https://tools.edgepredict.io/login"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#7655d6] text-white font-semibold rounded-xl hover:bg-[#5d3db8] transition-all duration-200 hover:shadow-lg hover:shadow-[#7655d6]/25 hover:scale-[1.02]"
            >
              Explore Demo <ArrowRight className="w-4 h-4" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ── 6. WHY IT MATTERS ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <p className="text-sm uppercase tracking-widest font-semibold text-[#a78fe8] mb-3">
              The Cost of Not Knowing
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Unplanned downtime is 3 to 5 times more expensive than planned maintenance.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                stat: "85%",
                label: "of small plants run motors with no condition monitoring at all",
                color: "text-red-400",
              },
              {
                stat: "3-5x",
                label: "higher repair cost for emergency failures vs. planned maintenance",
                color: "text-amber-400",
              },
              {
                stat: "20 min",
                label: "to install a sensor. No rewiring. No IT ticket. No downtime.",
                color: "text-green-400",
              },
            ].map((item) => (
              <FadeIn key={item.stat}>
                <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 text-center">
                  <div className={`text-5xl font-bold font-mono mb-3 ${item.color}`}>
                    {item.stat}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-10 text-center">
            <Link
              href="/pilot"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#7655d6] text-white font-semibold rounded-xl hover:bg-[#5d3db8] transition-all duration-200 hover:shadow-xl hover:shadow-[#7655d6]/30 hover:scale-[1.02]"
            >
              Start Your Free Pilot <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── 7. PRICING PREVIEW ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <p className="text-sm uppercase tracking-widest font-semibold text-[#7655d6] mb-3">
              Pricing
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Start free. Add sensors when you&apos;re ready.
            </h2>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            {TIERS.map((tier, ti) => (
              <FadeIn key={tier.name} delay={(ti + 1) as 1 | 2 | 3}>
                <div
                  className={`rounded-2xl border p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 h-full flex flex-col ${
                    tier.dark
                      ? "bg-[#0a0a0f] border-[#7655d6]/40"
                      : "bg-white border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-xl font-bold ${tier.dark ? "text-white" : "text-slate-900"}`}>
                      {tier.name}
                    </h3>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tier.badgeClass}`}>
                      {tier.badge}
                    </span>
                  </div>
                  <div className="mb-2">
                    <span className={`text-4xl font-bold ${tier.dark ? "text-white" : "text-slate-900"}`}>
                      {tier.price}
                    </span>
                    <span className={`text-sm ml-1 ${tier.dark ? "text-slate-400" : "text-slate-500"}`}>
                      {tier.priceSub}
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed mb-6 ${tier.dark ? "text-slate-400" : "text-slate-600"}`}>
                    {tier.desc}
                  </p>
                  <ul className="space-y-2 mb-8 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.dark ? "text-[#a78fe8]" : "text-green-500"}`} />
                        <span className={tier.dark ? "text-slate-300" : "text-slate-700"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  {tier.cta.external ? (
                    <a
                      href={tier.cta.href}
                      className="block w-full text-center px-4 py-3 bg-[#7655d6] hover:bg-[#5d3db8] text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#7655d6]/25 hover:scale-[1.01]"
                    >
                      {tier.cta.label}
                    </a>
                  ) : (
                    <Link
                      href={tier.cta.href}
                      className="block w-full text-center px-4 py-3 bg-[#7655d6] hover:bg-[#5d3db8] text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#7655d6]/25 hover:scale-[1.01]"
                    >
                      {tier.cta.label}
                    </Link>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

          <p className="text-sm text-center mt-8">
            <Link href="/pricing" className="text-[#7655d6] hover:underline font-medium">
              See full pricing details and comparison table
            </Link>
          </p>
        </div>
      </section>

      {/* ── 8. HOW IT WORKS ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest font-semibold text-[#7655d6] mb-3">
              Getting Started
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Three steps to a better maintenance program.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {[
              {
                n: "01",
                title: "Sign up and add your equipment",
                body: "Create your account, register assets, and get PM schedules generated automatically. About 10 minutes to a fully running maintenance platform.",
              },
              {
                n: "02",
                title: "Run your maintenance program",
                body: "Work orders, PM scheduling, inspections, scheduling. Your team stops running on whiteboards and starts running on data.",
              },
              {
                n: "03",
                title: "Add sensors when the data tells you where",
                body: "Your data shows you which assets fail most. Add monitoring to those first. Time-based maintenance becomes condition-based.",
              },
            ].map((s, si) => (
              <FadeIn key={s.n} delay={(si + 1) as 1 | 2 | 3}>
                <div>
                  <span className="text-6xl font-bold text-[#7655d6]/15 leading-none block mb-4 font-mono">
                    {s.n}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FINAL CTA ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#0a0a0f]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your plant deserves better than guesswork.
            </h2>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-10">
              Built by engineers. Deployed at manufacturing facilities.
              Designed for the plants that everyone else ignores.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a
                href="https://tools.edgepredict.io/signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#7655d6] text-white font-semibold rounded-xl hover:bg-[#5d3db8] transition-all duration-200 hover:shadow-xl hover:shadow-[#7655d6]/30 hover:scale-[1.02]"
              >
                Get Started Free
              </a>
              <Link
                href="/pilot"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-700 text-white font-semibold rounded-xl hover:border-[#a78fe8] hover:text-[#a78fe8] transition-all duration-200"
              >
                Start Free Pilot
              </Link>
            </div>
            <p className="text-sm text-slate-600">
              <a href="mailto:anderson@edgepredict.io" className="hover:text-white transition-colors">
                anderson@edgepredict.io
              </a>
              {" · "}
              <a href="tel:+17034016262" className="hover:text-white transition-colors">
                (703) 401-6262
              </a>
            </p>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}
