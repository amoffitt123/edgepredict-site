import Link from "next/link";
import { Calendar, ClipboardList, Database, Zap, Bell, Activity, CheckCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Free Maintenance Platform — EdgePredict",
  description:
    "PM scheduling, work orders, asset management, and AI-generated maintenance plans — free for small plants. Add sensors when you're ready.",
};

const features = [
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "PM Scheduling",
    body: "Add your equipment, get auto-generated preventive maintenance schedules based on asset type and criticality. Calendar view shows what's due, what's overdue, and what's coming.",
    badge: "free",
  },
  {
    icon: <ClipboardList className="h-6 w-6" />,
    title: "Work Orders",
    body: "Create, assign, and track maintenance work from request to completion. Full audit trail, checklists, labor and parts tracking.",
    badge: "free",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Asset Management",
    body: "Register every motor, pump, compressor, and conveyor. Bulk CSV import. Risk scoring on every asset.",
    badge: "free",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "AI Work Order Generator",
    body: "Type field notes in plain English. Get a structured work order with procedure steps, parts needed, and priority — generated in seconds.",
    badge: "free",
  },
  {
    icon: <Bell className="h-6 w-6" />,
    title: "Maintenance Requests",
    body: "Technicians submit requests. Supervisors approve. Requests convert to work orders automatically. Full approval workflow.",
    badge: "free",
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Sensor Integration",
    body: "Connect EdgePredict monitoring hardware to any asset. Live motor health data feeds directly into your maintenance plans. PM schedules adjust dynamically based on actual equipment condition.",
    badge: "monitor",
  },
];

const steps = [
  {
    number: "01",
    title: "Sign up free. Add your equipment.",
    body: "Create an account in seconds. Add assets manually or import your full equipment list via CSV. No credit card required.",
  },
  {
    number: "02",
    title: "Get PM schedules. Manage work orders daily.",
    body: "Auto-generated preventive maintenance schedules appear immediately. Create work orders, assign technicians, and track completion from a single dashboard.",
  },
  {
    number: "03",
    title: "Add sensors when you're ready.",
    body: "When you want live condition data, connect EdgePredict monitoring hardware. Motor health feeds directly into your maintenance plans and PM schedules adjust dynamically.",
  },
];

// ── Mocked dashboard data ─────────────────────────────────────────────────────

const pmItems = [
  { asset: "Pump-3 · 75 HP", interval: "Monthly", lastDone: "May 15", nextDue: "Jun 15", risk: "on-track" },
  { asset: "Fan-1 · 40 HP", interval: "Quarterly", lastDone: "Mar 1", nextDue: "Jun 1", risk: "overdue" },
  { asset: "Conveyor-2 · 60 HP", interval: "Weekly", lastDone: "Jun 2", nextDue: "Jun 9", risk: "due-soon" },
  { asset: "Compressor-1 · 100 HP", interval: "Monthly", lastDone: "May 20", nextDue: "Jun 20", risk: "on-track" },
];

const workOrders = [
  { id: "WO-042", title: "Inspect Fan-1 bearings", assignee: "J. Torres", status: "open" },
  { id: "WO-041", title: "Replace Conveyor-2 belt", assignee: "M. Davis", status: "in-progress" },
  { id: "WO-040", title: "Quarterly PM — Compressor-1", assignee: "J. Torres", status: "completed" },
  { id: "WO-039", title: "Lubricate Pump-3 bearings", assignee: "R. Singh", status: "completed" },
];

const riskConfig = {
  "on-track": { label: "On Track", classes: "text-green-400 bg-green-400/10" },
  "due-soon": { label: "Due Soon", classes: "text-yellow-400 bg-yellow-400/10" },
  overdue: { label: "Overdue", classes: "text-red-400 bg-red-400/10" },
};

const statusConfig = {
  open: { label: "Open", classes: "text-blue-400 bg-blue-400/10" },
  "in-progress": { label: "In Progress", classes: "text-yellow-400 bg-yellow-400/10" },
  completed: { label: "Completed", classes: "text-green-400 bg-green-400/10" },
};

export default function PlatformPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-[#a78fe8] uppercase tracking-widest mb-4">
            Free Maintenance Platform
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your entire maintenance program.
            <br />
            <span className="text-[#a78fe8]">One platform.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            PM scheduling, work orders, asset management, and AI-generated maintenance plans —
            free for small plants. Add sensors when you&apos;re ready.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://tools.edgepredict.io/signup"
              className="inline-flex items-center px-8 py-4 bg-[#7655d6] hover:bg-[#5d3db8] text-white rounded-lg text-lg font-bold transition-colors"
            >
              Start Free <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-200 hover:border-gray-400 hover:text-white rounded-lg text-lg font-semibold transition-colors"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURE GRID ─────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#7655d6] uppercase tracking-widest mb-3">
              Everything Included
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Built for maintenance teams, not enterprise IT.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((card) => (
              <div
                key={card.title}
                className="relative bg-white rounded-xl p-8 border border-gray-200"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  {card.badge === "free" ? (
                    <span className="text-xs font-semibold bg-green-100 text-green-700 px-2.5 py-1 rounded-full">
                      Free
                    </span>
                  ) : (
                    <span className="text-xs font-semibold bg-[#7655d6]/10 text-[#7655d6] px-2.5 py-1 rounded-full">
                      Monitor Tier
                    </span>
                  )}
                </div>

                <div className="text-[#7655d6] mb-4">{card.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#7655d6] uppercase tracking-widest mb-3">
              How It Works
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Up and running in minutes.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((s) => (
              <div key={s.number} className="relative">
                <div className="flex items-center mb-5">
                  <span className="text-5xl font-bold text-[#7655d6]/25 mr-4 leading-none">
                    {s.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DASHBOARD MOCK ───────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#7655d6] uppercase tracking-widest mb-3">
              Maintenance Dashboard
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Everything in one view
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              PM schedule, open work orders, and asset health — visible at a glance. No specialized software to install.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
            {/* Title bar */}
            <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-3 text-xs text-gray-400 font-mono">
                  EdgePredict · Maintenance Platform
                </span>
              </div>
              <div className="flex items-center text-xs text-green-400">
                <div className="w-2 h-2 rounded-full bg-green-400 mr-1 animate-pulse" />
                Live
              </div>
            </div>

            {/* Tab row */}
            <div className="flex border-b border-gray-800 bg-gray-850">
              <div className="px-5 py-2.5 text-xs font-mono text-[#a78fe8] border-b-2 border-[#7655d6] bg-gray-800">
                PM Schedule
              </div>
              <div className="px-5 py-2.5 text-xs font-mono text-gray-500">
                Work Orders
              </div>
              <div className="px-5 py-2.5 text-xs font-mono text-gray-500">
                Assets
              </div>
            </div>

            <div className="p-5 grid lg:grid-cols-2 gap-5">

              {/* PM Schedule panel */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs text-gray-500 font-mono uppercase tracking-wide">
                    PM Schedule — June 2025
                  </div>
                  <span className="text-xs text-yellow-400 font-mono bg-yellow-400/10 px-2 py-0.5 rounded">
                    1 overdue
                  </span>
                </div>

                {/* Column headers */}
                <div className="grid grid-cols-4 text-xs text-gray-600 font-mono uppercase tracking-wide mb-2 px-2">
                  <span className="col-span-2">Asset</span>
                  <span className="text-center">Next Due</span>
                  <span className="text-right">Status</span>
                </div>

                <div className="space-y-1.5">
                  {pmItems.map((item) => {
                    const risk = riskConfig[item.risk as keyof typeof riskConfig];
                    return (
                      <div
                        key={item.asset}
                        className="grid grid-cols-4 items-center bg-gray-800 rounded px-3 py-2 gap-1"
                      >
                        <span className="col-span-2 text-xs text-gray-300 font-mono truncate">
                          {item.asset}
                        </span>
                        <span className="text-xs text-gray-500 font-mono text-center">
                          {item.nextDue}
                        </span>
                        <span
                          className={`text-xs font-mono px-2 py-0.5 rounded text-right ml-auto ${risk.classes}`}
                        >
                          {risk.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Mini calendar strip */}
                <div className="mt-4 border-t border-gray-800 pt-3">
                  <div className="text-xs text-gray-500 font-mono uppercase tracking-wide mb-2">
                    This Week
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
                      <div key={d} className="text-center text-xs text-gray-600 font-mono mb-1">
                        {d}
                      </div>
                    ))}
                    {[
                      { day: "3", dot: null },
                      { day: "4", dot: null },
                      { day: "5", dot: "amber" },
                      { day: "6", dot: null },
                      { day: "7", dot: "green" },
                      { day: "8", dot: null },
                      { day: "9", dot: "red" },
                    ].map(({ day, dot }) => (
                      <div key={day} className="flex flex-col items-center">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono ${
                            dot === "red"
                              ? "bg-red-500/20 text-red-400"
                              : dot === "amber"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : dot === "green"
                              ? "bg-green-500/20 text-green-400"
                              : "text-gray-500"
                          }`}
                        >
                          {day}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Work Orders panel */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs text-gray-500 font-mono uppercase tracking-wide">
                    Work Orders
                  </div>
                  <span className="text-xs text-blue-400 font-mono bg-blue-400/10 px-2 py-0.5 rounded">
                    2 open
                  </span>
                </div>

                <div className="space-y-1.5">
                  {workOrders.map((wo) => {
                    const st = statusConfig[wo.status as keyof typeof statusConfig];
                    return (
                      <div
                        key={wo.id}
                        className="bg-gray-800 rounded px-3 py-2.5 flex items-start justify-between gap-2"
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-xs font-mono text-gray-500 flex-shrink-0">
                              {wo.id}
                            </span>
                            <span className="text-xs text-gray-300 font-mono truncate">
                              {wo.title}
                            </span>
                          </div>
                          <div className="text-xs text-gray-600 font-mono">
                            {wo.assignee}
                          </div>
                        </div>
                        <span
                          className={`text-xs font-mono px-2 py-0.5 rounded flex-shrink-0 ${st.classes}`}
                        >
                          {st.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Quick stats */}
                <div className="mt-4 border-t border-gray-800 pt-3 grid grid-cols-3 gap-2">
                  {[
                    { label: "Open", value: "2", color: "text-blue-400" },
                    { label: "In Progress", value: "1", color: "text-yellow-400" },
                    { label: "Done (30d)", value: "8", color: "text-green-400" },
                  ].map((s) => (
                    <div key={s.label} className="bg-gray-800 rounded px-2 py-2 text-center">
                      <div className={`text-xl font-bold font-mono ${s.color}`}>{s.value}</div>
                      <div className="text-xs text-gray-600 font-mono mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FREE TIER CALLOUTS ────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#7655d6] uppercase tracking-widest mb-3">
              Free Tier
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              What&apos;s included for free — no limits on time.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Unlimited assets",
              "Unlimited work orders",
              "PM scheduling & calendar",
              "AI work order generation",
              "Maintenance request workflow",
              "CSV asset import",
              "Email notifications",
              "Multi-user access",
              "Full audit trail",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            Sensor integration requires the Monitor Tier.{" "}
            <Link href="/pricing" className="text-[#7655d6] hover:underline">
              See pricing →
            </Link>
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#7655d6]">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Start managing your maintenance program today.
          </h2>
          <p className="text-purple-200 text-lg mb-10">
            No credit card. No setup fee. No time limit on the free tier.
          </p>
          <a
            href="https://tools.edgepredict.io/signup"
            className="inline-flex items-center px-10 py-4 bg-white text-[#7655d6] hover:bg-gray-100 rounded-lg text-lg font-bold transition-colors"
          >
            Create Free Account <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <p className="text-purple-300 text-sm mt-6">
            Already have an account?{" "}
            <a
              href="https://tools.edgepredict.io/login"
              className="text-white hover:underline font-medium"
            >
              Sign in →
            </a>
          </p>
        </div>
      </section>

    </main>
  );
}
