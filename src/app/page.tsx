import Link from "next/link";
import {
  CheckCircle,
  Zap,
  ClipboardList,
  Activity,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "EdgePredict — Maintenance Management & Motor Monitoring",
  description:
    "The only platform where your CMMS and your sensors are one system. Free maintenance management with optional motor monitoring sensors.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── SECTION 1: HERO ─────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          {/* Left column */}
          <div>
            <p className="text-[#a78fe8] text-sm font-semibold uppercase tracking-wider mb-4">
              Maintenance Management + Motor Monitoring
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-[1.1]">
              Manage your maintenance.<br />
              <span className="text-[#7655d6]">Monitor your motors.</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mt-6 max-w-lg leading-relaxed">
              Built by engineers who&apos;ve been on the plant floor. We designed the sensors, wrote
              the firmware, and built the platform. We couldn&apos;t find a tool that worked the way
              maintenance actually works, so we built it ourselves.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://tools.edgepredict.io/signup"
                className="bg-[#7655d6] text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-[#5d3db8] transition shadow-lg shadow-[#7655d6]/25"
              >
                Get Started
              </a>
              <a
                href="#demo"
                className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl text-base font-semibold hover:border-[#7655d6] hover:text-[#7655d6] transition"
              >
                See the Dashboard
              </a>
            </div>
            <div className="mt-8 flex flex-col md:flex-row flex-wrap gap-x-8 gap-y-2">
              {[
                "Free plan available",
                "No credit card required",
                "Built by maintenance engineers",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm text-gray-500 font-medium min-w-0">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right column — split-panel card */}
          <div className="hover:shadow-[0_25px_50px_-12px_rgba(118,85,214,0.1)] transition-all duration-300">
            <div className="rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
              {/* Management half */}
              <div className="bg-white p-6 flex-1">
                <p className="text-xs font-bold tracking-wider text-gray-400 mb-3">MANAGEMENT</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                      <span className="text-xs text-gray-700 truncate">PM-042: Pump bearing grease</span>
                    </div>
                    <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-0.5 rounded-full flex-shrink-0">On Time</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                      <span className="text-xs text-gray-700 truncate">WO-108: Fan belt replacement</span>
                    </div>
                    <span className="text-xs font-medium bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full flex-shrink-0">Due Tomorrow</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                      <span className="text-xs text-gray-700 truncate">WO-091: Compressor inspection</span>
                    </div>
                    <span className="text-xs font-medium bg-red-100 text-red-700 px-2 py-0.5 rounded-full flex-shrink-0">Overdue</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-4 pt-3 border-t border-gray-100">3 items need attention today</p>
              </div>

              {/* Divider — vertical on md+, horizontal on mobile */}
              <div className="relative flex items-center justify-center md:flex-col">
                <div className="hidden md:block w-0.5 bg-[#7655d6] h-full absolute" />
                <div className="block md:hidden h-0.5 bg-[#7655d6] w-full absolute" />
                <div className="relative z-10 w-8 h-8 rounded-full bg-[#7655d6] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Monitoring half */}
              <div className="bg-gray-900 p-6 flex-1">
                <p className="text-xs font-bold tracking-wider text-gray-500 mb-3">MONITORING</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs text-gray-300 truncate">Pump P-101</span>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className="w-16 bg-gray-700 rounded-full h-1.5">
                        <div className="h-1.5 rounded-full bg-green-500" style={{ width: '98%' }} />
                      </div>
                      <span className="text-xs text-green-400 font-mono w-8">98%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs text-gray-300 truncate">Fan F-201</span>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className="w-16 bg-gray-700 rounded-full h-1.5">
                        <div className="h-1.5 rounded-full bg-green-500" style={{ width: '87%' }} />
                      </div>
                      <span className="text-xs text-green-400 font-mono w-8">87%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs text-gray-300 truncate">Compressor AC-401</span>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className="w-16 bg-gray-700 rounded-full h-1.5">
                        <div className="h-1.5 rounded-full bg-amber-500" style={{ width: '71%' }} />
                      </div>
                      <span className="text-xs text-amber-400 font-mono w-8">71%</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4 pt-3 border-t border-gray-800">3 motors online · 0 alerts</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 2: SOCIAL PROOF BAR ─────────────────────────── */}
      <section className="bg-gray-50 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-400">
            Built by maintenance engineers and electrical engineers. Deployed at pharmaceutical, manufacturing, and industrial facilities.
          </p>
        </div>
      </section>

      {/* ── SECTION 3: THE TWO SIDES ────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6">
            <p className="text-[#a78fe8] text-sm font-semibold uppercase tracking-wider mb-3">
              One Platform. Two Superpowers.
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Management and monitoring, built as one.
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
              Most plants use separate tools for maintenance management and equipment monitoring. Most use nothing at all. EdgePredict is the only platform where both sides share data, share context, and make each other smarter.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-16">
            {/* Management card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <ClipboardList className="w-8 h-8 text-[#7655d6] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Maintenance Management</h3>
              <ul className="space-y-2 mt-4 mb-6">
                {[
                  "Work orders with full lifecycle tracking",
                  "PM scheduling with auto-generated templates",
                  "Inspections with pass/fail checklists",
                  "Asset management with risk scoring",
                  "Parts inventory & purchase orders",
                  "AI work order generator",
                  "Drag-and-drop scheduling with AI suggestions",
                  "Reporting: MTTR, PM compliance, downtime",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/platform"
                className="text-[#7655d6] text-sm font-semibold inline-flex items-center gap-1 hover:underline"
              >
                Explore the Platform <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Monitoring card */}
            <div className="bg-gray-900 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Activity className="w-8 h-8 text-[#a78fe8] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Motor Monitoring</h3>
              <ul className="space-y-2 mt-4 mb-6">
                {[
                  "Phase imbalance detection",
                  "Phase loss, caught instantly",
                  "Load instability monitoring",
                  "Overload & near-stall conditions",
                  "Mechanical fault indicators",
                  "Baseline learning per motor",
                  "Real-time health dashboard",
                  "Cellular connectivity, no IT required",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-[#a78fe8] flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/monitoring"
                className="text-[#a78fe8] text-sm font-semibold inline-flex items-center gap-1 hover:underline"
              >
                Learn About Monitoring <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: THE BRIDGE ───────────────────────────────── */}
      <section className="bg-[#7655d6] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <Zap className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 max-w-2xl mx-auto">
            When your sensors talk to your CMMS, everything changes.
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
            Other platforms manage maintenance OR monitor equipment. EdgePredict does both and
            connects them. When a sensor detects rising current imbalance, your PM schedule adjusts
            automatically. When a condition trigger fires, a work order creates itself. That&apos;s
            not integration. That&apos;s one system.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { label: "Condition → PM", desc: "Sensor data updates your maintenance schedule in real time" },
              { label: "Alert → Work Order", desc: "Fault detected? Work order created automatically" },
              { label: "Complete → Verified", desc: "Maintenance completion confirms sensor baseline" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-lg font-bold text-white mb-2">{stat.label}</div>
                <div className="text-sm text-white/70">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: DASHBOARD MOCK ───────────────────────────── */}
      <section className="bg-gray-50 py-20" id="demo">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#7655d6] text-sm font-semibold uppercase tracking-wider mb-3">
              See It In Action
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Your daily view. Management and monitoring together.
            </h2>
          </div>

          {/* Browser window mock */}
          <div className="max-w-5xl mx-auto rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Browser chrome */}
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-3 border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 font-mono max-w-sm mx-auto text-center">
                tools.edgepredict.io
              </div>
            </div>

            {/* Two panels */}
            <div className="grid lg:grid-cols-2">
              {/* Left — management */}
              <div className="bg-white p-5 border-r border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold text-gray-900">Today&apos;s Maintenance</h4>
                  <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full font-medium">Live</span>
                </div>
                {/* KPI row */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {[
                    { label: "Open WOs", value: "7", color: "text-blue-600" },
                    { label: "Due Today", value: "3", color: "text-amber-600" },
                    { label: "Overdue", value: "1", color: "text-red-600" },
                    { label: "Completed", value: "24", color: "text-green-600" },
                  ].map((kpi) => (
                    <div key={kpi.label} className="text-center bg-gray-50 rounded-lg p-2">
                      <div className={`text-lg font-bold ${kpi.color}`}>{kpi.value}</div>
                      <div className="text-xs text-gray-400 leading-tight mt-0.5">{kpi.label}</div>
                    </div>
                  ))}
                </div>
                {/* WO list */}
                <div className="space-y-2">
                  {[
                    { id: "WO-112", title: "Pump P-101 bearing grease", status: "Due Today", sc: "text-amber-600 bg-amber-50" },
                    { id: "WO-111", title: "Fan F-201 belt inspection", status: "In Progress", sc: "text-blue-600 bg-blue-50" },
                    { id: "WO-110", title: "Compressor quarterly PM", status: "Overdue", sc: "text-red-600 bg-red-50" },
                    { id: "WO-109", title: "Conveyor lubrication", status: "Open", sc: "text-gray-600 bg-gray-100" },
                  ].map((wo) => (
                    <div key={wo.id} className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
                      <div>
                        <span className="text-xs text-gray-400 font-mono mr-2">{wo.id}</span>
                        <span className="text-xs text-gray-700">{wo.title}</span>
                      </div>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0 ${wo.sc}`}>{wo.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — monitoring */}
              <div className="bg-gray-900 p-5">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold text-white">Motor Fleet Health</h4>
                  <div className="flex items-center gap-1 text-xs text-green-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Live
                  </div>
                </div>
                {/* KPI row */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { label: "Fleet Score", value: "87/100", color: "text-green-400" },
                    { label: "Online", value: "8/8", color: "text-white" },
                    { label: "Alerts", value: "1", color: "text-amber-400" },
                  ].map((kpi) => (
                    <div key={kpi.label} className="text-center bg-gray-800 rounded-lg p-2">
                      <div className={`text-sm font-bold font-mono ${kpi.color}`}>{kpi.value}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{kpi.label}</div>
                    </div>
                  ))}
                </div>
                {/* Motor list */}
                <div className="space-y-2">
                  {[
                    { name: "Pump P-101", health: 98, color: "bg-green-500", tc: "text-green-400" },
                    { name: "Fan F-201", health: 87, color: "bg-green-500", tc: "text-green-400" },
                    { name: "Compressor AC-301", health: 91, color: "bg-green-500", tc: "text-green-400" },
                    { name: "Conveyor C-301", health: 71, color: "bg-amber-500", tc: "text-amber-400" },
                  ].map((m) => (
                    <div key={m.name} className="flex items-center gap-3 bg-gray-800 rounded-lg px-3 py-2">
                      <div className={`w-2 h-2 rounded-full ${m.color} flex-shrink-0`} />
                      <span className="text-xs text-gray-300 flex-1 truncate">{m.name}</span>
                      <div className="w-20 bg-gray-700 rounded-full h-1.5 flex-shrink-0">
                        <div className={`h-1.5 rounded-full ${m.color}`} style={{ width: `${m.health}%` }} />
                      </div>
                      <span className={`text-xs font-mono ${m.tc} w-8 text-right flex-shrink-0`}>{m.health}%</span>
                    </div>
                  ))}
                </div>
                {/* Alert bar */}
                <div className="mt-3 flex items-start gap-2 text-xs text-amber-400 bg-amber-400/10 rounded-lg px-3 py-2 border border-amber-400/20">
                  <span>⚠</span>
                  <span><span className="font-semibold">Conveyor C-301:</span> current imbalance elevated. Review during next PM.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 mb-4">This is sample data. Sign up to explore with your own equipment.</p>
            <a
              href="https://tools.edgepredict.io/signup"
              className="inline-flex items-center px-6 py-3 bg-[#7655d6] hover:bg-[#5d3db8] text-white rounded-xl font-semibold text-sm transition-colors shadow-lg shadow-[#7655d6]/25"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: WHY EDGEPREDICT ──────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#7655d6] text-sm font-semibold uppercase tracking-wider mb-3">
              Why EdgePredict
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              What makes this different.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              {
                title: "vs. CMMS-Only Tools",
                body: "MaintainX and UpKeep charge per user and don't have sensors. You get maintenance management, but your PM schedules are still time-based guesswork. No condition data. No integration. No sensor tier at any price.",
                highlight: false,
              },
              {
                title: "vs. Monitoring-Only Systems",
                body: "Augury, Tractian, and enterprise systems start at $500-2,000/motor with $50-100K setup costs. They'll tell you a motor is degrading. They won't create the work order, schedule the repair, or track completion. That's a different system you have to buy separately.",
                highlight: false,
              },
              {
                title: "EdgePredict: Both, as One",
                body: "One platform. Sensors and CMMS built together. When a motor degrades, your PM schedule updates, a work order creates itself, and the repair gets tracked to completion. Nothing falls through the cracks because everything is the same system.",
                highlight: true,
              },
              {
                title: "Built by People Who've Done the Work",
                body: "Our team designed the sensor PCB, wrote the ESP32 firmware, and deployed our first pilot by hand. We're electrical engineers and reliability professionals, not just developers. We built EdgePredict because we needed it on the plant floor and couldn't find it.",
                highlight: false,
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                  card.highlight
                    ? "bg-[#7655d6] text-white"
                    : "bg-gray-50 border border-gray-200"
                }`}
              >
                <h3 className={`font-bold text-lg mb-4 ${card.highlight ? "text-white" : "text-gray-900"}`}>
                  {card.title}
                </h3>
                <p className={`text-sm leading-relaxed ${card.highlight ? "text-white/80" : "text-gray-600"}`}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: PRICING PREVIEW ──────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#7655d6] text-sm font-semibold uppercase tracking-wider mb-3">
              Pricing
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Start free. Add sensors when you&apos;re ready.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Planner */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative">
              <span className="absolute top-4 right-4 text-xs font-semibold bg-green-100 text-green-700 px-2.5 py-1 rounded-full">
                Free
              </span>
              <h3 className="text-xl font-bold text-gray-900">Planner</h3>
              <div className="mt-3 mb-2">
                <span className="text-4xl font-bold text-gray-900">$0</span>
                <span className="text-sm text-gray-500 ml-1">forever</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                Unlimited users. Unlimited assets and work orders. 3 attachments per WO. No trial period. Free forever.
              </p>
              <ul className="space-y-2 mb-6">
                {["Unlimited users", "Unlimited assets & WOs", "PM scheduling", "Inspections", "AI work order generation", "3 attachments per WO"].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://tools.edgepredict.io/signup"
                className="block w-full text-center px-4 py-3 bg-[#7655d6] hover:bg-[#5d3db8] text-white rounded-xl text-sm font-semibold transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Pro */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative">
              <span className="absolute top-4 right-4 text-xs font-semibold bg-[#7655d6]/10 text-[#7655d6] px-2.5 py-1 rounded-full">
                Most Popular
              </span>
              <h3 className="text-xl font-bold text-gray-900">Pro</h3>
              <div className="mt-3 mb-2">
                <span className="text-4xl font-bold text-gray-900">$99</span>
                <span className="text-sm text-gray-500 ml-1">/mo per site</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                Unlimited attachments. All features unlocked. Billed monthly, cancel anytime.
              </p>
              <ul className="space-y-2 mb-6">
                {["Everything in Planner", "Unlimited attachments", "Drag-and-drop scheduling", "AI scheduling suggestions", "Advanced reporting", "Workflow automation", "Custom fields", "Priority support"].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://tools.edgepredict.io/signup"
                className="block w-full text-center px-4 py-3 bg-[#7655d6] hover:bg-[#5d3db8] text-white rounded-xl text-sm font-semibold transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Monitor */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-[#7655d6] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative">
              <span className="absolute top-4 right-4 text-xs font-semibold bg-[#7655d6] text-white px-2.5 py-1 rounded-full">
                Sensors
              </span>
              <h3 className="text-xl font-bold text-white">Monitor</h3>
              <div className="mt-3 mb-2">
                <span className="text-4xl font-bold text-white">$200</span>
                <span className="text-sm text-gray-400 ml-1">/mo per motor</span>
              </div>
              <p className="text-sm text-gray-400 mb-6">
                Includes all Pro features. Hardware ships pre-configured. 60-day pilot is truly free.
              </p>
              <ul className="space-y-2 mb-6">
                {["Sensor hardware included", "ESA monitoring", "Condition-based PM", "Dynamic PM scheduling", "Cellular connectivity", "60-day free pilot"].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-[#a78fe8] flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/pilot"
                className="block w-full text-center px-4 py-3 bg-[#7655d6] hover:bg-[#5d3db8] text-white rounded-xl text-sm font-semibold transition-colors"
              >
                Start Free Pilot
              </Link>
            </div>
          </div>

          <p className="text-sm text-center mt-8">
            <Link href="/pricing" className="text-[#7655d6] hover:underline font-medium">
              See full pricing details →
            </Link>
          </p>
        </div>
      </section>

      {/* ── SECTION 8: HOW IT WORKS ─────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#7655d6] text-sm font-semibold uppercase tracking-wider mb-3">
              Getting Started
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Three steps to a better maintenance program.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                n: "01",
                title: "Sign up and add equipment",
                body: "Create your account, register your assets, and get PM schedules generated automatically. Takes about 10 minutes for a typical plant.",
              },
              {
                n: "02",
                title: "Run your maintenance program",
                body: "Work orders, PM scheduling, inspections: everything in one place. Your team stops running on whiteboards and starts running on data.",
              },
              {
                n: "03",
                title: "Add sensors when ready",
                body: "Connect our motor monitoring sensors to your most critical equipment. Time-based maintenance becomes condition-based, driven by real electrical signature data.",
              },
            ].map((s) => (
              <div key={s.n}>
                <span className="text-5xl font-bold text-[#7655d6]/20 leading-none block mb-4">
                  {s.n}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: FINAL CTA ─────────────────────────────────── */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Your plant deserves better than guesswork.
          </h2>
          <p className="text-lg text-gray-400 mt-4 leading-relaxed">
            Built by engineers. Used by maintenance teams. Designed for the plants that everyone else ignores.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="https://tools.edgepredict.io/signup"
              className="inline-flex items-center px-8 py-4 bg-[#7655d6] hover:bg-[#5d3db8] text-white rounded-xl font-semibold transition-colors"
            >
              Get Started
            </a>
            <Link
              href="/pilot"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-white hover:border-[#a78fe8] hover:text-[#a78fe8] rounded-xl font-semibold transition-colors"
            >
              Start Free Pilot
            </Link>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            <a href="mailto:anderson@edgepredict.io" className="hover:text-white transition-colors">
              anderson@edgepredict.io
            </a>
            {" · "}
            <a href="tel:7034016262" className="hover:text-white transition-colors">
              (703) 401-6262
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
