import Link from "next/link";
import { CheckCircle, Zap, ArrowRight, ClipboardList, Activity } from "lucide-react";
import HeroDashboard from "@/components/HeroDashboard";
import PlatformFlowCard from "@/components/PlatformFlowCard";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "EdgePredict — Motor Health Monitoring That Installs in 20 Minutes",
  description:
    "Clamp-on current monitoring for industrial motors. Health scores every 2 seconds, weekly reports, and alerts that create work orders automatically. $89/mo per motor, hardware included. Free pilot.",
  alternates: {
    canonical: "https://www.edgepredict.io",
  },
  openGraph: {
    title: "EdgePredict — Motor Health Monitoring That Installs in 20 Minutes",
    description:
      "Clamp-on current monitoring for industrial motors. Health scores every 2 seconds, weekly reports, alerts that create work orders. $89/mo per motor, hardware included.",
    url: "https://www.edgepredict.io",
    type: "website",
  },
};

/* ── Monitoring comparison table (what monitoring buyers actually cross-shop) ── */
type Cell = string;
const MON_TABLE_ROWS: { feature: string; ep: Cell; vib: Cell; nothing: Cell }[] = [
  { feature: "What it senses",           ep: "3-phase current at the starter",      vib: "Vibration at the motor housing",     nothing: "Operator ears and luck" },
  { feature: "Install location",         ep: "Inside the MCC / starter cabinet",    vib: "On the motor, often in the field",   nothing: "N/A" },
  { feature: "Install time",             ep: "~20 minutes, clamp-on",               vib: "Mounting, permits, sometimes downtime", nothing: "N/A" },
  { feature: "Touches the motor",        ep: "Never",                               vib: "Physical mounting required",          nothing: "Only when it breaks" },
  { feature: "Sampling",                 ep: "Continuous, health score every 2s",   vib: "Often periodic snapshots (battery)",  nothing: "None" },
  { feature: "Electrical faults & load", ep: "✓ Phase imbalance, overcurrent, load drift", vib: "✗ Not visible in vibration",   nothing: "✗" },
  { feature: "Early bearing signatures", ep: "Later, once they load the motor",     vib: "✓ Earlier for some mechanical faults", nothing: "✗" },
  { feature: "Weekly written report",    ep: "✓ Included",                          vib: "Usually an extra service tier",       nothing: "✗" },
  { feature: "Creates work orders",      ep: "✓ Automatically",                     vib: "Separate CMMS integration",           nothing: "✗" },
  { feature: "Cost per point",           ep: "$89/mo, hardware included",           vib: "$500+ per motor per year",            nothing: "$10K-$50K per downtime hour" },
];

function monCellStyle(col: "ep" | "other", val: Cell) {
  if (col === "ep") return "text-[#5d3db8] font-semibold";
  if (val.startsWith("✓")) return "text-green-600";
  if (val.startsWith("✗")) return "text-slate-300";
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

/* ── Monitoring features (claims-safe) ──────────────────────────────── */
const MON_FEATURES = [
  "Non-invasive 3-phase current monitoring via split-core CTs",
  "Health score computed on the device every 2 seconds",
  "Baselines learned automatically for VFD-driven and across-the-line motors",
  "Phase imbalance, overcurrent, and load instability detection",
  "Transition lockout to prevent false alarms during start/stop",
  "20-minute clamp-on install, no rewiring, no downtime",
  "Cellular option available, no plant network access required",
  "Live dashboard with historical trending",
  "Weekly plain-English report, written for the maintenance meeting",
  "Alerts that automatically create work orders",
];

/* ── Platform-included features (curated, monitoring-first story) ──── */
const PLATFORM_FEATURES = [
  "Work orders with full lifecycle and audit trail",
  "PM scheduling with auto-generated templates",
  "Asset management: hierarchy, BOM, QR codes",
  "Inspections with corrective work orders",
  "KPI reports: MTBF, MTTR, PM compliance",
  "Mobile app, iOS and Android, offline mode",
];

/* ── Pricing tiers (monitoring first) ───────────────────────────────── */
const TIERS = [
  {
    name: "Monitor",
    badge: "Most Popular",
    badgeClass: "bg-[#7655d6] text-white",
    price: "$89",
    priceSub: "/mo per motor",
    desc: "Hardware included. 20-minute clamp-on install. Free pilot with zero risk: if we don't surface anything useful, return the hardware.",
    features: [
      "Sensor hardware included",
      "Health score every 2 seconds",
      "Weekly written report",
      "Alerts that create work orders",
      "Live dashboard and trending",
      "Cellular option available",
      "Free pilot",
    ],
    cta: { label: "Start Free Pilot", href: "/pilot", external: false },
    dark: true,
  },
  {
    name: "Planner",
    badge: "Free",
    badgeClass: "bg-green-100 text-green-700",
    price: "$0",
    priceSub: "free forever",
    desc: "Not a trial. A complete maintenance platform with unlimited users and unlimited work orders, because 85% of plants have nothing.",
    features: [
      "Unlimited users",
      "Unlimited assets & work orders",
      "PM scheduling",
      "Parts inventory",
      "Drag-and-drop schedule board",
      "Mobile app, iOS & Android, offline",
    ],
    cta: { label: "Get Started Free", href: "https://tools.edgepredict.io/signup", external: true },
    dark: false,
  },
  {
    name: "Pro",
    badge: "Platform",
    badgeClass: "bg-[#7655d6]/10 text-[#7655d6]",
    price: "$99",
    priceSub: "/mo per site",
    desc: "Everything in Planner unlocked further. Inspections, advanced reporting, automation. One price, no per-user fees.",
    features: [
      "Everything in Planner",
      "Inspections with auto-WO from failures",
      "KPI dashboards & OEE tracking",
      "Automation rules & SOPs library",
      "Exports & digital signatures",
      "QuickBooks integration",
    ],
    cta: { label: "Get Started", href: "https://tools.edgepredict.io/signup", external: true },
    dark: false,
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
              Motor health monitoring for plants that run lean
            </p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-6">
              Know your motors<br />
              are healthy.<br />
              <span className="text-[#7655d6]">Not hope they are.</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-lg mb-10">
              Clamp-on current sensors install at the starter in about 20 minutes.
              A health score that updates every two seconds, a weekly report your
              team actually reads, and alerts that create work orders automatically.
              $89/mo per motor, hardware included.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/pilot"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#7655d6] text-white font-semibold rounded-xl hover:bg-[#5d3db8] transition-all duration-200 hover:shadow-xl hover:shadow-[#7655d6]/30 hover:scale-[1.02]"
              >
                Start a Free Pilot
              </Link>
              <a
                href="https://tools.edgepredict.io/login"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-700 text-white font-semibold rounded-xl hover:border-[#a78fe8] hover:text-[#a78fe8] transition-all duration-200"
              >
                Explore the Live Demo
              </a>
            </div>

            {/* Trust bar */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-2">
              {[
                "Hardware included",
                "20-minute clamp-on install",
                "Free pilot, return the hardware if we find nothing",
                "Full maintenance platform included, free",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                  <CheckCircle className="w-4 h-4 text-[#7655d6] flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: animated dashboard + proof card */}
          <div className="w-full space-y-4">
            <HeroDashboard />
            <div className="bg-white/5 backdrop-blur rounded-xl border border-white/10 p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-1">
                    From the field
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    In continuous production use at a{" "}
                    <span className="font-semibold text-white">global medical device manufacturer</span>,
                    monitoring critical process equipment. Every detection confirmed by the
                    customer&apos;s own engineers, now expanding to a fleet evaluation
                    alongside their vibration program.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#7655d6]/15 border border-[#7655d6]/30 rounded-xl px-4 py-3 text-center">
              <p className="text-sm font-semibold text-[#a78fe8]">
                Deployed at manufacturing facilities in the US and Europe
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Real condition data from real motors on real production lines
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. HOW MONITORING WORKS ───────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest font-semibold text-[#7655d6] mb-3">
              How it works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Clamp on. Let it learn. Know first.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {[
              {
                n: "01",
                title: "Clamp on at the starter",
                body: "Split-core CTs clip around the motor leads inside the MCC. No rewiring, no production downtime, no contact with the motor itself. About 20 minutes per motor.",
              },
              {
                n: "02",
                title: "It learns your motor",
                body: "The system builds a baseline of your motor's normal operating behavior automatically, including multiple operating points for variable loads. Days, not months.",
              },
              {
                n: "03",
                title: "Health, alerts, reports",
                body: "A health score updates every 2 seconds. Anomalies get flagged, work orders get created, and every week a plain-English report lands in your inbox.",
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

      {/* ── 3. WHAT IT DOES (features) ────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <p className="text-sm uppercase tracking-widest font-semibold text-[#a78fe8] mb-3">
                Motor Monitoring
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                Built for the starter cabinet, not the lab.
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-6">
                EdgePredict surfaces electrical faults, load behavior, and abnormal
                operating conditions from the current signature alone. It works on
                across-the-line motors and VFD-driven equipment, and it knows the
                difference, so the scoring adapts to how each motor actually runs.
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                No motor access required. No production downtime to install.
                And when something drifts, you get a work order, not a raw waveform.
              </p>
            </FadeIn>
            <FadeIn delay={1}>
              <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10">
                <Activity className="w-8 h-8 text-cyan-400 mb-4" />
                <ul className="space-y-2.5">
                  {MON_FEATURES.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/monitoring"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-400 hover:underline mt-6"
                >
                  How the monitoring works <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 4. HONEST COMPARISON (monitoring buyer's view) ────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <p className="text-sm uppercase tracking-widest font-semibold text-[#7655d6] mb-3">
              The Honest Comparison
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Current monitoring vs. vibration vs. nothing.
            </h2>
            <p className="text-base md:text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
              Vibration systems are excellent at what they do, and they cost like it.
              Most plants have neither. Here is the honest picture.
            </p>
          </FadeIn>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm border-collapse min-w-[680px]">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="sticky left-0 bg-white text-left py-4 px-4 text-slate-500 font-medium w-48">
                    &nbsp;
                  </th>
                  <th className="py-4 px-4 text-center font-bold text-white bg-[#7655d6] min-w-[170px]">
                    EdgePredict<br />
                    <span className="font-normal text-purple-200 text-xs">$89/mo per motor</span>
                  </th>
                  <th className="py-4 px-4 text-center text-slate-600 font-medium min-w-[170px]">
                    Vibration systems<br />
                    <span className="text-slate-400 font-normal text-xs">$500+/motor/yr</span>
                  </th>
                  <th className="py-4 px-4 text-center text-slate-600 font-medium min-w-[150px]">
                    Run to failure<br />
                    <span className="text-slate-400 font-normal text-xs">85% of small plants</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {MON_TABLE_ROWS.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
                  >
                    <td className="sticky left-0 bg-inherit py-3 px-4 font-medium text-slate-700">
                      {row.feature}
                    </td>
                    <td className={`py-3 px-4 text-center bg-[#7655d6]/5 ${monCellStyle("ep", row.ep)}`}>
                      {row.ep}
                    </td>
                    <td className={`py-3 px-4 text-center ${monCellStyle("other", row.vib)}`}>
                      {row.vib}
                    </td>
                    <td className={`py-3 px-4 text-center ${monCellStyle("other", row.nothing)}`}>
                      {row.nothing}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <FadeIn className="mt-8 text-center">
            <p className="text-slate-500 text-sm max-w-2xl mx-auto mb-6">
              Already running vibration? The two see different things and work well
              together. We&apos;re running that exact side-by-side evaluation with a
              global manufacturer today.
            </p>
            <Link
              href="/compare/augury-alternative"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#7655d6] hover:underline"
            >
              Full comparison details <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── 5. THE BRIDGE (detection to done) ─────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#0a0a0f] relative overflow-hidden">
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
              Detection is half the job. EdgePredict finishes it.
            </h2>
            <p className="text-slate-400 text-base mt-4 max-w-2xl mx-auto">
              Most monitoring tools stop at an alert. EdgePredict turns the alert
              into scheduled, assigned, tracked work.
            </p>
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
              This is not an integration. This is one system. No middleware,
              no third-party connectors, no data silos.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── 6. PLATFORM FLOW MOCK ─────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-slate-950">
        <div className="max-w-[1320px] mx-auto px-6">
          <FadeIn className="text-center mb-10">
            <span className="inline-block text-xs tracking-widest uppercase text-violet-300 bg-violet-500/10 border border-violet-400/30 px-3 py-1.5 rounded-full mb-4">
              Included with every sensor
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              A full maintenance platform comes with it. Free.
            </h2>
            <p className="text-slate-400 text-base mt-3 max-w-2xl mx-auto">
              Work orders, PM scheduling, inspections, parts, reporting, and a mobile
              app. Free for unlimited users, whether you monitor one motor or none.
            </p>
          </FadeIn>
          <FadeIn delay={1}>
            <PlatformFlowCard />
          </FadeIn>
          <FadeIn className="mt-10 text-center">
            <div className="inline-flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
              {PLATFORM_FEATURES.map((f) => (
                <span key={f} className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle className="w-4 h-4 text-[#7655d6] flex-shrink-0" />
                  {f}
                </span>
              ))}
            </div>
            <p>
              <Link
                href="/features"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#a78fe8] hover:underline"
              >
                Everything in the platform <ArrowRight className="w-4 h-4" />
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── 7. THE COST OF NOT KNOWING ────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <p className="text-sm uppercase tracking-widest font-semibold text-[#a78fe8] mb-3">
              The Cost of Not Knowing
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              You&apos;re already paying for it. Just in downtime and overtime instead of software.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
            {/* Monitoring pain first */}
            <FadeIn delay={1} className="flex">
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 md:p-8 flex flex-col w-full">
                <div className="flex items-center gap-3 mb-6">
                  <Activity className="w-6 h-6 text-red-400" />
                  <h3 className="text-lg font-bold text-white">Without motor monitoring</h3>
                </div>
                <div className="space-y-5">
                  <div>
                    <div className="text-4xl font-bold font-mono text-red-400 mb-1">85%</div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      of small plants run motors with zero condition monitoring at all
                    </p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold font-mono text-amber-400 mb-1">3-5x</div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      higher repair cost for emergency failures vs. planned maintenance
                    </p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold font-mono text-green-400 mb-1">20 min</div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      to install a sensor. No rewiring. No production downtime. Most plants just never do.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Platform pain second */}
            <FadeIn delay={2} className="flex">
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 md:p-8 flex flex-col w-full">
                <div className="flex items-center gap-3 mb-6">
                  <ClipboardList className="w-6 h-6 text-red-400" />
                  <h3 className="text-lg font-bold text-white">Without a maintenance program</h3>
                </div>
                <div className="space-y-5">
                  <div>
                    <div className="text-4xl font-bold font-mono text-red-400 mb-1">40-60%</div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      of your maintenance budget goes to emergency repairs instead of planned work
                    </p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold font-mono text-amber-400 mb-1">35%</div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      actual wrench time. The rest is paperwork, hunting for parts, and tracking down tribal knowledge
                    </p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold font-mono text-amber-400 mb-1">$10K-$50K</div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      per hour, what unplanned downtime actually costs your plant
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 8. LIVE DEMOS ─────────────────────────────────────────────── */}
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

      {/* ── 9. WHY WE BUILT THIS ──────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-8">
              <p className="text-sm uppercase tracking-widest font-semibold text-[#7655d6] mb-3">
                Why we built this
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Condition monitoring shouldn&apos;t require a six-figure budget.
              </h2>
            </div>
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                We believe every manufacturer, whether you run 5 motors or 500, deserves
                access to the same reliability tools that large plants have. But most
                monitoring on the market is either priced for the Fortune 500 or so
                stripped-down it tells you nothing you didn&apos;t already know.
              </p>
              <p>
                We designed EdgePredict for the average plant. The teams that keep production
                running on tight budgets and tight margins. The maintenance managers who are
                the first ones called when something breaks and the last ones considered when
                budgets are set. The reliability engineers who know exactly which motor is
                going to fail next but can&apos;t get approval for a $50,000 monitoring system.
              </p>
              <p className="text-slate-900 font-medium">
                So we built monitoring that costs less per month than a single emergency
                callout, and gave the maintenance platform away free. Because the plants
                that everyone else ignores are the ones that need it most.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 10. PRICING ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <p className="text-sm uppercase tracking-widest font-semibold text-[#7655d6] mb-3">
              Pricing
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              $89/mo per motor. Hardware included. Platform free.
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

      {/* ── 11. FINAL CTA ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#0a0a0f]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your motors are telling you something. Start listening.
            </h2>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-10">
              Built by the engineers who designed the hardware. Deployed at
              manufacturing facilities in the US and Europe. Free pilot,
              return the hardware if we find nothing.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Link
                href="/pilot"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#7655d6] text-white font-semibold rounded-xl hover:bg-[#5d3db8] transition-all duration-200 hover:shadow-xl hover:shadow-[#7655d6]/30 hover:scale-[1.02]"
              >
                Start a Free Pilot
              </Link>
              <a
                href="https://tools.edgepredict.io/signup"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-700 text-white font-semibold rounded-xl hover:border-[#a78fe8] hover:text-[#a78fe8] transition-all duration-200"
              >
                Get the Free Platform
              </a>
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
