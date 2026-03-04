import Link from "next/link";
import { Calendar, ClipboardList, Database, Sparkles, Send, Activity } from "lucide-react";

export const metadata = {
  title: "Maintenance Platform — EdgePredict",
  description:
    "PM scheduling, work orders, asset management, and AI-generated maintenance plans in one platform. Add sensors when you're ready for predictive maintenance.",
};

const features = [
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "PM Scheduling",
    body: "Add your equipment once. Get maintenance schedules generated automatically based on asset type, criticality, and industry standards. The calendar color-codes by risk — red for overdue, amber for due soon, green for on track.",
  },
  {
    icon: <ClipboardList className="h-6 w-6" />,
    title: "Work Orders",
    body: "Create work orders manually or from PM events. Track status from open to completed with full audit trail. Attach checklists, log labor hours and parts used. Every change is recorded.",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Asset Management",
    body: "Register motors, pumps, compressors, conveyors — anything with a nameplate. Bulk import via CSV. Every asset gets a risk score calculated from criticality, failure frequency, spare availability, and age.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "AI Work Order Generator",
    body: "Type maintenance notes in plain English — 'pump 3 making a grinding noise, bearings probably need replacement' — and get a structured work order with procedure steps, parts list, and priority.",
  },
  {
    icon: <Send className="h-6 w-6" />,
    title: "Maintenance Requests",
    body: "Operators submit requests. Supervisors review and approve. Approved requests convert to work orders with one click. Full history from submission to completion.",
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Sensor Integration",
    body: "Connect EdgePredict monitoring hardware to any asset. Live motor health data feeds into your asset records. PM schedules adjust automatically based on actual equipment condition.",
  },
];

const steps = [
  {
    number: "01",
    title: "Add your equipment",
    body: "Sign up, create your plant profile, and register your assets. Import from a CSV or add them one at a time. Takes about 10 minutes for a typical plant.",
  },
  {
    number: "02",
    title: "Follow your schedule",
    body: "PM schedules generate automatically. Open the calendar each morning, see what's due, create work orders, track completion. It becomes your daily routine.",
  },
  {
    number: "03",
    title: "Go predictive when ready",
    body: "Add monitoring sensors to your most critical motors. Time-based schedules become condition-based — driven by real electrical signature data from the motor itself.",
  },
];

const pmItems = [
  { asset: "Pump-3 · 75 HP", nextDue: "Jun 15", risk: "on-track" },
  { asset: "Fan-1 · 40 HP", nextDue: "Jun 1", risk: "overdue" },
  { asset: "Conveyor-2 · 60 HP", nextDue: "Jun 9", risk: "due-soon" },
  { asset: "Compressor-1 · 100 HP", nextDue: "Jun 20", risk: "on-track" },
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
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-medium text-[#a78fe8] uppercase tracking-wider mb-4">
            Maintenance Management
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            The system your plant has been missing.
          </h1>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl leading-relaxed">
            Most small plants manage maintenance with spreadsheets, whiteboards, or nothing at all.
            EdgePredict gives you PM scheduling, work orders, and asset tracking in one platform built
            for the way maintenance actually works.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://tools.edgepredict.io/signup"
              className="px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started
            </a>
            <Link
              href="/pricing"
              className="px-6 py-3 border border-gray-600 text-gray-300 hover:border-white hover:text-white rounded-lg transition-colors"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURE DEEP DIVE ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-[#7655d6] uppercase tracking-wider mb-3">
              What&apos;s Inside
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Built for maintenance teams, not enterprise IT departments.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((card) => (
              <div key={card.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-[#7655d6] mb-3">{card.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-[#7655d6] uppercase tracking-wider mb-3">
              Getting Started
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Up and running in minutes.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((s) => (
              <div key={s.number}>
                <span className="text-5xl font-bold text-[#7655d6]/25 leading-none block mb-5">
                  {s.number}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DASHBOARD MOCK ───────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-[#7655d6] uppercase tracking-wider mb-3">
              Daily View
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Everything in one place.
            </h2>
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
            <div className="flex border-b border-gray-800">
              <div className="px-5 py-2.5 text-xs font-mono text-[#a78fe8] border-b-2 border-[#7655d6] bg-gray-800">
                PM Schedule
              </div>
              <div className="px-5 py-2.5 text-xs font-mono text-gray-500">Work Orders</div>
              <div className="px-5 py-2.5 text-xs font-mono text-gray-500">Assets</div>
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
                        <span className={`text-xs font-mono px-2 py-0.5 rounded text-right ml-auto ${risk.classes}`}>
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
                          <div className="text-xs text-gray-600 font-mono">{wo.assignee}</div>
                        </div>
                        <span className={`text-xs font-mono px-2 py-0.5 rounded flex-shrink-0 ${st.classes}`}>
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

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Start managing your maintenance program.</h2>
          <p className="text-gray-400 mt-3">No credit card required. No time limit.</p>
          <a
            href="https://tools.edgepredict.io/signup"
            className="mt-8 inline-block px-8 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Create Your Account
          </a>
          <div className="mt-4">
            <a
              href="https://tools.edgepredict.io/login"
              className="text-gray-500 text-sm hover:text-white transition-colors"
            >
              Already have an account? Log in →
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
