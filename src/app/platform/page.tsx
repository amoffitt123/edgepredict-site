import Link from "next/link";
import {
  Calendar,
  ClipboardList,
  Database,
  Sparkles,
  Users,
  BarChart,
  Settings,
  FileText,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Maintenance Platform — EdgePredict",
  description:
    "PM scheduling, work orders, asset management, inspections, parts inventory, reporting, and AI-generated work orders. Free for any plant size.",
};

const features = [
  {
    icon: ClipboardList,
    title: "Work Orders",
    body: "Full lifecycle tracking from open to completed. Checklists, labor hours, parts used, full audit trail. Every change recorded.",
  },
  {
    icon: Calendar,
    title: "PM Scheduling",
    body: "Add equipment once, get maintenance schedules generated automatically. Calendar color-coded by risk: red for overdue, amber for due soon.",
  },
  {
    icon: FileText,
    title: "Inspections",
    body: "Pass/fail checklists that auto-create corrective work orders when something fails. Auto-scheduled by frequency. Never miss one.",
  },
  {
    icon: Database,
    title: "Asset Management",
    body: "Register every motor, pump, compressor. Bulk import via CSV. Each asset gets a risk score from criticality, failure history, and spares.",
  },
  {
    icon: Settings,
    title: "Parts & Inventory",
    body: "Track stock levels, reorder points, and usage per work order. Purchase orders. Know what you have before you need it.",
  },
  {
    icon: BarChart,
    title: "Reporting",
    body: "MTTR, PM compliance, downtime by asset and cause. The numbers that tell you where your maintenance program actually stands.",
  },
  {
    icon: Users,
    title: "Team Management",
    body: "6 RBAC roles: admin, supervisor, planner, scheduler, technician, requestor. Every person sees exactly what they need.",
  },
  {
    icon: Sparkles,
    title: "AI + Automation",
    body: "AI work order generator turns field notes into structured work orders in 3 seconds. Drag-and-drop scheduling with AI suggestions. Automation rules. Custom fields.",
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
  { id: "WO-040", title: "Quarterly PM: Compressor-1", assignee: "J. Torres", status: "completed" },
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

      {/* ── SECTION 1: HERO ─────────────────────────────────────── */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-[#a78fe8] uppercase tracking-wider mb-4">
            Maintenance Management
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            A real CMMS.<br />
            <span className="text-[#a78fe8]">Not a compromise.</span>
          </h1>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl leading-relaxed">
            We&apos;ve seen the whiteboards, the sticky notes, the spreadsheets that nobody updates.
            This is the CMMS we wish existed when we were on the floor.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://tools.edgepredict.io/signup"
              className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started
            </a>
            <Link
              href="/pricing"
              className="px-6 py-3 border border-gray-600 text-gray-300 hover:border-white hover:text-white rounded-lg transition-colors font-semibold"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: FEATURE GRID ─────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#7655d6] uppercase tracking-wider mb-3">
              What&apos;s Inside
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Built for maintenance teams, not enterprise IT.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <card.icon className="w-6 h-6 text-[#7655d6] mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: DASHBOARD MOCK ───────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#7655d6] uppercase tracking-wider mb-3">
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
                    PM Schedule | March 2026
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

      {/* ── SECTION 4: SENSOR CONNECTION ────────────────────────── */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-[#a78fe8] uppercase tracking-wider mb-4">
            Better Together
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Add sensors. Watch your CMMS get smarter.
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed mb-8">
            When you connect EdgePredict motor monitoring sensors, your time-based PM schedules
            become condition-based. Your PM interval adjusts from real motor health data, not a
            fixed calendar. When a motor degrades, a work order creates itself.
          </p>
          <Link
            href="/monitoring"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 hover:border-[#a78fe8] hover:text-[#a78fe8] rounded-lg font-semibold transition-colors"
          >
            Learn About Monitoring <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── SECTION 5: CTA ──────────────────────────────────────── */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Start running your maintenance program.
          </h2>
          <p className="text-gray-500 mt-3 leading-relaxed">
            No credit card. No time limit. Built by engineers who&apos;ve been where you are.
          </p>
          <a
            href="https://tools.edgepredict.io/signup"
            className="mt-8 inline-block px-8 py-4 bg-[#7655d6] hover:bg-[#5d3db8] text-white font-semibold rounded-xl transition-colors"
          >
            Get Started Free
          </a>
          <div className="mt-4">
            <a
              href="https://tools.edgepredict.io/login"
              className="text-gray-400 text-sm hover:text-[#7655d6] transition-colors"
            >
              Already have an account? Log in →
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
