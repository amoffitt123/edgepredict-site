import Link from "next/link";
import { CheckCircle, ArrowRight, Calendar, ClipboardList, Database } from "lucide-react";

export const metadata = {
  title: "EdgePredict — Maintenance Management & Motor Monitoring",
  description:
    "Free maintenance platform with PM scheduling, work orders, and asset management. Add non-invasive motor monitoring for $200/mo. Free 60-day pilot.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium text-[#a78fe8] uppercase tracking-wider mb-4">
              Maintenance Management + Motor Monitoring
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Your maintenance shouldn&apos;t run on{" "}
              <span className="text-[#7655d6]">whiteboards.</span>
            </h1>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              EdgePredict gives small and mid-size plants a real maintenance system — PM scheduling,
              work orders, asset tracking — for free. When you&apos;re ready to go predictive, our
              sensors plug right in.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://tools.edgepredict.io/signup"
                className="inline-flex items-center px-6 py-3 bg-[#7655d6] hover:bg-[#5d3db8] text-white rounded-lg font-semibold text-base transition-colors"
              >
                Get Started
              </a>
              <Link
                href="/products"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 hover:border-[#7655d6] hover:text-[#7655d6] rounded-lg font-semibold text-base transition-colors"
              >
                See How Monitoring Works
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {["Free forever plan", "No credit card", "Set up in minutes"].map((item) => (
                <span key={item} className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1.5 flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Maintenance electrician working on motor panel"
              className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg">
              <div className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-wide">Pricing</div>
              <div className="text-sm font-semibold text-[#7655d6]">Free platform · $200/mo monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLATFORM FEATURES ────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-[#7655d6] uppercase tracking-wider mb-3">The Platform</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Everything you need to run a maintenance program.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <Calendar className="h-6 w-6 text-[#7655d6] mb-3" />
              <h3 className="font-semibold text-gray-900">PM Scheduling</h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                Add your equipment and get maintenance schedules generated automatically. The calendar
                shows what&apos;s due, what&apos;s overdue, and what&apos;s coming — so nothing gets missed.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <ClipboardList className="h-6 w-6 text-[#7655d6] mb-3" />
              <h3 className="font-semibold text-gray-900">Work Orders</h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                Create, assign, and track work from request to completion. Checklists, labor tracking,
                parts used, full audit trail. Your maintenance history in one place.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <Database className="h-6 w-6 text-[#7655d6] mb-3" />
              <h3 className="font-semibold text-gray-900">Asset Management</h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                Register every motor, pump, and compressor. Import via CSV. Every asset gets a risk
                score based on criticality, failure history, and spares availability.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-6 text-center">
            Plus AI-generated work orders, maintenance requests, and team management.{" "}
            <Link href="/platform" className="text-[#7655d6] hover:underline">
              →
            </Link>
          </p>
        </div>
      </section>

      {/* ── DASHBOARD MOCK ───────────────────────────────────── */}
      <section className="bg-white py-20" id="dashboard">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-[#7655d6] uppercase tracking-wider mb-3">Your Daily View</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              One dashboard. Everything that matters.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
            {/* Titlebar */}
            <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-3 text-xs text-gray-400 font-mono">EdgePredict · Monitoring Dashboard</span>
              </div>
              <div className="flex items-center text-xs text-green-400">
                <div className="w-2 h-2 rounded-full bg-green-400 mr-1 animate-pulse" />
                Live
              </div>
            </div>

            {/* KPI row */}
            <div className="grid grid-cols-4 border-b border-gray-800">
              {[
                { label: "Fleet Health", value: "87", unit: "/100", color: "text-green-400" },
                { label: "Motors Online", value: "8", unit: "/8", color: "text-white" },
                { label: "Max Unbalance", value: "2.1", unit: "%", color: "text-yellow-400" },
                { label: "Open Alerts", value: "1", unit: "", color: "text-yellow-400" },
              ].map((kpi) => (
                <div key={kpi.label} className="p-4 border-r border-gray-800 last:border-r-0">
                  <div className="text-xs text-gray-500 mb-1 font-mono uppercase tracking-wide">{kpi.label}</div>
                  <div className={`text-2xl font-bold ${kpi.color} font-mono`}>
                    {kpi.value}<span className="text-sm text-gray-500">{kpi.unit}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Motor table */}
            <div className="p-4">
              <div className="text-xs text-gray-500 font-mono uppercase tracking-wide mb-3">Motor Status</div>
              <div className="space-y-2">
                {[
                  { name: "Pump-3 · 75 HP", status: "Normal", health: 94, color: "bg-green-500" },
                  { name: "Fan-1 · 40 HP", status: "Normal", health: 91, color: "bg-green-500" },
                  { name: "Conveyor-2 · 60 HP", status: "Watch", health: 71, color: "bg-yellow-500" },
                  { name: "Compressor-1 · 100 HP", status: "Normal", health: 88, color: "bg-green-500" },
                ].map((motor) => (
                  <div key={motor.name} className="flex items-center space-x-3 bg-gray-800 rounded px-3 py-2">
                    <div className={`w-2 h-2 rounded-full ${motor.color} flex-shrink-0`} />
                    <span className="text-xs text-gray-300 font-mono w-44 flex-shrink-0">{motor.name}</span>
                    <div className="flex-1 bg-gray-700 rounded-full h-1.5">
                      <div
                        className={`h-1.5 rounded-full ${motor.color}`}
                        style={{ width: `${motor.health}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-400 font-mono w-8 text-right">{motor.health}%</span>
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded flex-shrink-0 ${
                        motor.status === "Normal"
                          ? "text-green-400 bg-green-400/10"
                          : "text-yellow-400 bg-yellow-400/10"
                      }`}
                    >
                      {motor.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Alert */}
              <div className="mt-4 border-t border-gray-800 pt-3">
                <div className="text-xs text-gray-500 font-mono uppercase tracking-wide mb-2">Recent Alerts</div>
                <div className="flex items-start space-x-2 text-xs text-yellow-400 bg-yellow-400/5 rounded px-3 py-2 border border-yellow-400/20">
                  <span className="mt-0.5 flex-shrink-0">⚠</span>
                  <span>
                    <span className="font-semibold">Conveyor-2</span> — Current unbalance elevated (2.1%). Recommend inspection during next planned maintenance window.
                  </span>
                  <span className="text-gray-500 ml-auto flex-shrink-0">2h ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/platform"
              className="inline-flex items-center px-6 py-3 bg-[#7655d6] hover:bg-[#5d3db8] text-white rounded-lg font-semibold transition-colors"
            >
              Explore the Platform
            </Link>
          </div>
        </div>
      </section>

      {/* ── THE MONITORING UPGRADE ────────────────────────────── */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-medium text-[#a78fe8] uppercase tracking-wider mb-3">When You&apos;re Ready</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Add sensors. Go predictive.
          </h2>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            Non-invasive current sensors clamp onto your motor leads in about 20 minutes. No rewiring,
            no IT involvement, no plant network. Your maintenance schedules become condition-based —
            driven by real equipment data.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">$200/mo</div>
              <div className="text-sm text-gray-400 mt-1">per motor</div>
              <div className="text-xs text-gray-500 mt-0.5">after free pilot</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">~20 min</div>
              <div className="text-sm text-gray-400 mt-1">install time</div>
              <div className="text-xs text-gray-500 mt-0.5">by your electrician</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">60 days</div>
              <div className="text-sm text-gray-400 mt-1">free pilot</div>
              <div className="text-xs text-gray-500 mt-0.5">walk away anytime</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 border border-gray-500 text-white hover:border-[#a78fe8] hover:text-[#a78fe8] rounded-lg text-sm font-medium transition-colors"
            >
              Learn About Monitoring
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHAT IT DETECTS ──────────────────────────────────── */}
      <section className="py-20 bg-gray-50" id="detection">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#7655d6] uppercase tracking-widest mb-3">Detection Capabilities</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What EdgePredict monitors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Core capabilities work with current sensing alone. Optional voltage reference input
              unlocks enhanced power-quality and supply analytics.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Current-only */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-2 h-2 rounded-full bg-[#7655d6] mr-3" />
                <h3 className="font-bold text-gray-900">Current Sensing — Standard</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Phase imbalance / current unbalance",
                  "Phase loss and single-phasing indicators",
                  "Load instability — binding, belt slip, cavitation-like anomalies",
                  "Overload and near-stall conditions",
                  "Indicators consistent with developing mechanical issues (bearing, coupling)",
                  "Indicators consistent with developing electrical faults (rotor/stator)*",
                ].map((item) => (
                  <li key={item} className="flex items-start text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-400 mt-5 leading-relaxed">
                * Indicators require maintenance confirmation. Harmonic and sideband features are used
                as indicators; resolution depends on installation and operating conditions.
              </p>
            </div>

            {/* Voltage reference enhanced */}
            <div className="bg-white rounded-xl p-8 border border-[#7655d6]/30">
              <div className="flex items-center mb-6">
                <div className="w-2 h-2 rounded-full bg-[#7655d6] mr-3" />
                <h3 className="font-bold text-gray-900">Enhanced — Optional Voltage Reference</h3>
                <span className="ml-auto text-xs bg-[#7655d6]/10 text-[#7655d6] px-2 py-1 rounded font-medium">
                  Add-on
                </span>
              </div>
              <ul className="space-y-3">
                {[
                  "Voltage unbalance and undervoltage detection",
                  "Frequency drift monitoring",
                  "Power factor (PF) and kVAR anomalies",
                  "Real power (kW) trending and load factor",
                  "Supply quality anomalies",
                ].map((item) => (
                  <li key={item} className="flex items-start text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-[#7655d6] mr-2 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-400 mt-5 leading-relaxed">
                Voltage reference: plug-in transformer tap. Improves power/PF analytics and supply-quality
                anomaly detection. Not required for core motor health monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY EDGEPREDICT ──────────────────────────────────── */}
      <section className="bg-white py-20" id="why">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#7655d6] uppercase tracking-widest mb-3">Why EdgePredict</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Why not just vibration sensors? Or enterprise systems?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "vs. Vibration Sensors Only",
                body: "No sensor mounting, no technician routes, no quarterly site visits. ESA reads fault indicators through existing motor wiring — non-invasive and sensitive to electrical faults that vibration can't see.",
                cta: null,
              },
              {
                title: "vs. Enterprise Systems",
                body: "No 6-month deployment project, no IT integration, no $50K+ contract. Install in ~20 minutes, data flowing the same day. Built for plants with 2–50 critical motors, not enterprise-scale complexity.",
                cta: null,
              },
              {
                title: "vs. Doing Nothing",
                body: "One prevented motor failure typically pays for more than a year of monitoring. Early warning lets you schedule repairs during planned maintenance — not at 2 AM on a Sunday.",
                cta: { label: "See the math", href: "/calculator" },
              },
            ].map((card) => (
              <div key={card.title} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{card.body}</p>
                {card.cta && (
                  <Link
                    href={card.cta.href}
                    className="text-[#7655d6] text-sm font-medium inline-flex items-center hover:underline"
                  >
                    {card.cta.label} <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING PREVIEW ──────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-[#7655d6] uppercase tracking-wider mb-3">Pricing</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Start free. Scale when you need to.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Planner */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 relative">
              <span className="absolute top-4 right-4 text-xs font-medium bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                Free
              </span>
              <h3 className="text-xl font-bold text-gray-900">Planner</h3>
              <div className="mt-3">
                <span className="text-3xl font-bold text-gray-900">$0</span>
                <span className="text-sm text-gray-500 ml-1">forever</span>
              </div>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                PM scheduling, work orders, asset management, AI work order generation. Everything a
                small plant needs.
              </p>
              <a
                href="https://tools.edgepredict.io/signup"
                className="mt-6 block w-full text-center px-4 py-2.5 bg-[#7655d6] hover:bg-[#5d3db8] text-white rounded-lg text-sm font-medium transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Pro */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 relative">
              <span className="absolute top-4 right-4 text-xs font-medium bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                Coming Soon
              </span>
              <h3 className="text-xl font-bold text-gray-900">Pro</h3>
              <div className="mt-3">
                <span className="text-3xl font-bold text-gray-900">$99</span>
                <span className="text-sm text-gray-500 ml-1">/mo per site</span>
              </div>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Multi-user access with roles, advanced reporting, parts inventory. For plants with
                maintenance teams.
              </p>
              <Link
                href="/contact"
                className="mt-6 block w-full text-center px-4 py-2.5 border border-gray-300 text-gray-700 hover:border-[#7655d6] hover:text-[#7655d6] rounded-lg text-sm font-medium transition-colors"
              >
                Join Waitlist
              </Link>
            </div>

            {/* Monitor */}
            <div className="bg-white rounded-xl p-8 border border-[#7655d6]/30 shadow-[0_0_0_1px_rgba(118,85,214,0.05)] relative">
              <span className="absolute top-4 right-4 text-xs font-medium bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                Sensors
              </span>
              <h3 className="text-xl font-bold text-gray-900">Monitor</h3>
              <div className="mt-3">
                <span className="text-3xl font-bold text-gray-900">$200</span>
                <span className="text-sm text-gray-500 ml-1">/mo per motor</span>
              </div>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Live motor health data from non-invasive sensors. PM schedules adjust automatically
                based on real equipment condition.
              </p>
              <Link
                href="/pilot"
                className="mt-6 block w-full text-center px-4 py-2.5 bg-[#7655d6] hover:bg-[#5d3db8] text-white rounded-lg text-sm font-medium transition-colors"
              >
                Start Free Pilot
              </Link>
            </div>
          </div>

          <p className="text-sm text-center mt-6">
            <Link href="/pricing" className="text-[#7655d6] hover:underline">
              See full pricing details →
            </Link>
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Ready to take control of your maintenance?
          </h2>
          <p className="text-lg text-gray-600 mt-3">
            Join the plants that stopped running to failure.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="https://tools.edgepredict.io/signup"
              className="inline-flex items-center px-8 py-3 bg-[#7655d6] hover:bg-[#5d3db8] text-white rounded-lg font-semibold transition-colors"
            >
              Get Started
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 hover:border-[#7655d6] hover:text-[#7655d6] rounded-lg font-semibold transition-colors"
            >
              Talk to an Engineer
            </Link>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            <a href="mailto:anderson@edgepredict.io" className="hover:text-[#7655d6]">
              anderson@edgepredict.io
            </a>
            {" · "}
            <a href="tel:7034016262" className="hover:text-[#7655d6]">
              (703) 401-6262
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
