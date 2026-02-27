import Link from "next/link";
import { CheckCircle, ArrowRight, Zap, Activity, Bell, Shield, Clock, TrendingUp } from "lucide-react";

export const metadata = {
  title: "EdgePredict — Stop Unplanned Motor Downtime",
  description:
    "Non-invasive motor condition monitoring using Electrical Signature Analysis (ESA). Catch developing issues early. $200/month per motor. Free 60-day pilot.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-[#7655d6] uppercase tracking-widest mb-4">
              Electrical Signature Analysis · ESA / MCSA
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Stop Unplanned
              <br />
              <span className="text-[#7655d6]">Motor Downtime.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Non-invasive motor health monitoring using Electrical Signature Analysis (ESA).
              Catch developing issues early — without rewiring, IT involvement, or vibration sensors.
            </p>

            {/* Trust bullets */}
            <ul className="space-y-2 mb-8">
              {[
                "$200/mo per motor",
                "~20-min install by your electrician",
                "Free 60-day pilot",
                "Cellular option — no plant network required",
              ].map((item) => (
                <li key={item} className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-[#7655d6] mr-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/pilot"
                className="inline-flex items-center px-6 py-3 bg-[#7655d6] hover:bg-[#5d3db8] text-white rounded-lg font-semibold transition-colors"
              >
                Start Your Free Pilot <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 hover:border-[#7655d6] hover:text-[#7655d6] rounded-lg font-semibold transition-colors"
              >
                Try the Downtime Calculator
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Maintenance electrician working on motor panel"
              className="w-full h-[420px] object-cover rounded-xl"
            />
            {/* Stat chip */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg">
              <div className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-wide">Monitoring cost</div>
              <div className="text-2xl font-bold text-[#7655d6]">$200</div>
              <div className="text-xs text-gray-600">per motor / month · no contracts</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ──────────────────────────────────────────── */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-semibold text-[#a78fe8] uppercase tracking-widest mb-3">The Problem</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Most motor failures are detected too late — or not at all.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Motors fail without warning. Emergency shutdowns, expedited parts, overtime labor, and lost
              production add up to tens of thousands of dollars per event. Reactive maintenance keeps your
              team in crisis mode.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <TrendingUp className="h-6 w-6" />,
                stat: "Tens of thousands",
                label: "Typical cost per unplanned motor failure event",
              },
              {
                icon: <Activity className="h-6 w-6" />,
                stat: "Run-to-failure",
                label: "The default strategy at most plants — reactive and expensive",
              },
              {
                icon: <Clock className="h-6 w-6" />,
                stat: "Hours to days",
                label: "Downtime waiting for parts and emergency repair crew",
              },
            ].map((item) => (
              <div key={item.label} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="text-[#7655d6] mb-3">{item.icon}</div>
                <div className="text-2xl font-bold text-white mb-2">{item.stat}</div>
                <div className="text-gray-400 text-sm leading-relaxed">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="py-20" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#7655d6] uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Three steps. No plant disruption.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "INSTALL",
                icon: <Zap className="h-7 w-7" />,
                body: "Split-core CTs clamp onto motor supply conductors — at the input side of a VFD or directly on line-fed motors. No rewiring, no production downtime. A maintenance electrician completes the install in ~20 minutes.",
              },
              {
                step: "02",
                title: "MONITOR",
                icon: <Activity className="h-7 w-7" />,
                body: "The edge gateway captures 3-phase current data and runs Electrical Signature Analysis (ESA/MCSA) locally. Trends, health scores, and anomaly alerts are displayed on a web-based monitoring dashboard. Weekly summaries land in your inbox.",
              },
              {
                step: "03",
                title: "PREVENT",
                icon: <Bell className="h-7 w-7" />,
                body: "When developing issues are detected, alerts are sent via dashboard, email, or text. Your maintenance team investigates and schedules a planned repair — before an unplanned shutdown forces your hand.",
              },
            ].map((s) => (
              <div key={s.step} className="relative">
                <div className="flex items-center mb-5">
                  <span className="text-5xl font-bold text-[#7655d6]/25 mr-4 leading-none">{s.step}</span>
                  <div className="text-[#7655d6]">{s.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-wide">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IT DETECTS ──────────────────────────────────── */}
      <section className="py-20 bg-gray-50" id="detection">
        <div className="max-w-7xl mx-auto px-4">
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
      <section className="py-20" id="why">
        <div className="max-w-7xl mx-auto px-4">
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

      {/* ── PILOT CALLOUT ────────────────────────────────────── */}
      <section className="py-20 bg-[#7655d6]" id="pilot">
        <div className="max-w-5xl mx-auto px-4 text-center text-white">
          <p className="text-sm font-semibold text-purple-200 uppercase tracking-widest mb-3">Free 60-Day Pilot</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Try it on your motors. Walk away if it doesn&apos;t prove value.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 text-left">
            {[
              { label: "Pre-configured kit", body: "We ship everything you need. No sourcing hardware separately." },
              { label: "No plant network required", body: "Cellular option available for pilots — keeps IT out of the loop." },
              { label: "Weekly health summaries", body: "Plus real-time alerts when developing issues are detected." },
              { label: "60-day walk-away", body: "If no value in 60 days, return the hardware. No questions." },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 rounded-lg p-4">
                <div className="text-sm font-semibold text-white mb-1">{item.label}</div>
                <div className="text-purple-200 text-xs leading-relaxed">{item.body}</div>
              </div>
            ))}
          </div>
          <Link
            href="/pilot"
            className="inline-flex items-center px-8 py-4 bg-white text-[#7655d6] hover:bg-gray-100 rounded-lg text-lg font-bold transition-colors"
          >
            Start Your Free Pilot <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <p className="text-purple-200 text-sm mt-4">$200/month per motor after pilot · No long-term contract</p>
        </div>
      </section>

      {/* ── DASHBOARD PREVIEW ────────────────────────────────── */}
      <section className="py-20 bg-gray-50" id="dashboard">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#7655d6] uppercase tracking-widest mb-3">Monitoring Dashboard</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Clear visibility into every motor
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              Web-based dashboard with real-time status, trend charts, and alert history. No specialized software to install.
            </p>
          </div>

          {/* Mock dashboard */}
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
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to catch issues before they become failures?
          </h2>
          <p className="text-gray-600 mb-8">
            Start a free 60-day pilot on your critical motors. No plant network required.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/pilot"
              className="inline-flex items-center px-8 py-4 bg-[#7655d6] hover:bg-[#5d3db8] text-white rounded-lg text-lg font-bold transition-colors"
            >
              Start Your Free Pilot <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 hover:border-[#7655d6] hover:text-[#7655d6] rounded-lg text-lg font-semibold transition-colors"
            >
              Talk to an Engineer
            </Link>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            <a href="mailto:anderson@edgepredict.io" className="hover:text-[#7655d6]">anderson@edgepredict.io</a>
            {" · "}
            <a href="tel:7034016262" className="hover:text-[#7655d6]">(703) 401-6262</a>
          </div>
        </div>
      </section>
    </main>
  );
}
