import Link from "next/link";
import {
  CheckCircle, ArrowRight, XCircle, Activity, Zap, X,
  Package, Wrench, Wifi, Monitor, BarChart, Shield,
  Cpu, Database,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Motor Condition Monitoring — EdgePredict",
  description:
    "Non-invasive motor condition monitoring using Electrical Signature Analysis. Edge-computed health scores every 2 seconds. $200/mo per motor. Free 60-day pilot with hardware included.",
  alternates: {
    canonical: "https://www.edgepredict.io/monitoring",
  },
  openGraph: {
    title: "Motor Condition Monitoring — EdgePredict",
    description:
      "Non-invasive ESA monitoring. Edge-computed health scores every 2 seconds. $200/mo per motor. Free 60-day pilot.",
    url: "https://www.edgepredict.io/monitoring",
    type: "website",
  },
};

/* ── Included list ─────────────────────────────────────────────────── */
const INCLUDED = [
  "3-phase current monitoring via split-core CTs",
  "ESA / MCSA analysis, processed locally on the edge device",
  "Health score computed at the edge every 2 seconds",
  "Web-based monitoring dashboard with historical trending",
  "Real-time alerts (email, dashboard)",
  "Weekly motor health summary emails",
  "Motor-specific adaptive baselines with state bucketing",
  "Cellular connectivity option, no plant network required",
  "Volume discounts for 5+ motors",
];

/* ── Pilot kit ─────────────────────────────────────────────────────── */
const PILOT_KIT = [
  { Icon: Package, text: "Pre-configured EdgePredict Gateway (plug-in, no IT setup)" },
  { Icon: Wrench,  text: "EdgePredict Meter board with split-core CTs for motor feeder conductors" },
  { Icon: Wifi,    text: "Cellular connectivity for pilots, no plant network required" },
  { Icon: Monitor, text: "Dashboard access from day one" },
  { Icon: BarChart,text: "Weekly health report emails" },
  { Icon: Shield,  text: "Support from an engineer, not a ticketing system" },
];

/* ── Voltage adds ──────────────────────────────────────────────────── */
const VOLTAGE_ADDS = [
  "Voltage unbalance detection",
  "Undervoltage monitoring",
  "Power factor / kVAR tracking",
  "Frequency drift alerts",
  "Supply quality anomaly identification",
];

/* ── Detection table ───────────────────────────────────────────────── */
const DETECTION = [
  { label: "Phase imbalance",             current: true,  voltage: true  },
  { label: "Phase loss",                  current: true,  voltage: true  },
  { label: "Load anomalies",              current: true,  voltage: true  },
  { label: "Overload / near-stall",       current: true,  voltage: true  },
  { label: "Mechanical fault indicators*",current: true,  voltage: true  },
  { label: "Electrical fault indicators*",current: true,  voltage: true  },
  { label: "Voltage unbalance",           current: false, voltage: true  },
  { label: "Undervoltage",                current: false, voltage: true  },
  { label: "Power factor / kVAR",         current: false, voltage: true  },
  { label: "Supply quality",              current: false, voltage: true  },
];

/* ── Technical stack ───────────────────────────────────────────────── */
const TECH_STACK = [
  {
    Icon: Cpu,
    name: "EdgePredict Meter board",
    desc: "Custom metering board measuring per-phase RMS current, voltage, power factor, and harmonic content. Accurate and purpose-built for continuous motor health monitoring.",
  },
  {
    Icon: Database,
    name: "EdgePredict Gateway",
    desc: "Edge compute unit running ESA algorithms locally. Health score computed every 2 seconds without cloud round-trips. Waveform data stays on-device until meaningful events are detected.",
  },
  {
    Icon: Activity,
    name: "EWMA baseline with state bucketing",
    desc: "Exponentially weighted moving average baselines updated continuously. Separate baselines per motor operating state: loaded, unloaded, and VFD speed bands. Prevents false alarms during normal load variation.",
  },
  {
    Icon: BarChart,
    name: "Z-score deviation scoring",
    desc: "Health score derived from z-score deviation from learned baseline. Statistically meaningful alerts instead of threshold crossings. Adapts as the motor's load profile changes.",
  },
  {
    Icon: Zap,
    name: "Transition lockout",
    desc: "Alert window suppressed during motor start and stop transients. Activates only after stable operating conditions are confirmed. Eliminates nuisance alarms that make operators ignore monitoring systems.",
  },
  {
    Icon: Shield,
    name: "Secure outbound tunnel",
    desc: "Outbound-only secure tunnel for remote diagnostics and firmware updates. No inbound ports. No VPN. No changes to plant firewall.",
  },
  {
    Icon: Wifi,
    name: "Cellular 4G LTE",
    desc: "Default connectivity for all pilot deployments. No plant network required. No IT ticket, no network diagram, no waiting weeks for firewall approval.",
  },
];

/* ═══════════════════════════════════════════════════════════════════ */

export default function MonitoringPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#0a0a0f] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest font-semibold text-[#a78fe8] mb-4">
            Motor Condition Monitoring
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]">
            Your motors are already talking.<br />
            <span className="text-[#7655d6]">We just listen.</span>
          </h1>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed mb-10">
            Non-invasive current monitoring. Edge-computed health scores updated every 2 seconds.
            20-minute clamp-on install. No plant network required.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/pilot"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#7655d6] text-white font-semibold rounded-xl hover:bg-[#5d3db8] transition-all duration-200 hover:shadow-lg hover:shadow-[#7655d6]/25 hover:scale-[1.02]"
            >
              Start Free Pilot <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/calculator"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-300 rounded-xl hover:border-slate-400 hover:text-white transition-all duration-200"
            >
              Estimate Your Downtime Cost
            </Link>
          </div>
        </div>
      </section>

      {/* ── ESA Comparison ──────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest font-semibold text-[#7655d6] mb-3">
              Why Current Signature Analysis
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Current analysis vs. vibration vs. nothing.
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
              Most plants either run to failure, use vibration sensors they cannot afford,
              or have enterprise systems that cost $50K to deploy. Here is how electrical
              signature analysis stacks up.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Col 1 */}
            <FadeIn delay={1} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <XCircle className="text-red-400 w-8 h-8 mb-3" />
              <h3 className="text-lg font-bold text-slate-900 mb-4">Run to Failure</h3>
              <ul className="space-y-3">
                {[
                  "No warning before failure",
                  "Emergency repairs at 3-5x cost",
                  "Unplanned downtime kills production",
                  "PM schedules based on guesswork",
                  "No data on equipment health",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <X className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-400 mt-4 italic">
                Where 85% of small plants are today.
              </p>
            </FadeIn>

            {/* Col 2 */}
            <FadeIn delay={2} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <Activity className="text-amber-400 w-8 h-8 mb-3" />
              <h3 className="text-lg font-bold text-slate-900 mb-4">Vibration Sensors</h3>
              <ul className="space-y-3">
                {[
                  { text: "Detects bearing wear and misalignment", good: true },
                  { text: "Established, proven technology", good: true },
                  { text: "Requires mounting on equipment", good: false },
                  { text: "Cannot detect electrical faults", good: false },
                  { text: "Cannot detect phase imbalance or loss", good: false },
                  { text: "Cannot detect supply quality issues", good: false },
                  { text: "Often requires plant network access", good: false },
                  { text: "Typical setup: $50K+ capital project", good: false },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-2 text-sm text-slate-600">
                    {item.good
                      ? <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                      : <X className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-400" />}
                    {item.text}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-400 mt-4 italic">
                Good for mechanical faults. Blind to electrical ones.
              </p>
            </FadeIn>

            {/* Col 3 */}
            <FadeIn delay={3} className="bg-[#7655d6]/5 rounded-2xl p-6 border border-[#7655d6]/25">
              <Zap className="text-[#7655d6] w-8 h-8 mb-3" />
              <h3 className="text-lg font-bold text-[#7655d6] mb-4">
                Current Signature Analysis
              </h3>
              <ul className="space-y-3">
                {[
                  "Phase imbalance and phase loss detection",
                  "Overload and load instability",
                  "Mechanical fault indicators from current",
                  "Supply quality and power factor monitoring",
                  "Non-invasive clamp-on install in 20 minutes",
                  "Cellular connectivity, no plant network",
                  "No capital project. $200/mo per motor.",
                  "Adaptive baseline learning per motor",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#7655d6] font-semibold mt-4">
                Sees electrical AND mechanical fault indicators from the current alone.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── What Gets Detected ───────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4 text-center">What Gets Detected</h2>
            <p className="text-slate-600 mb-8 text-center max-w-2xl mx-auto leading-relaxed">
              Electrical Signature Analysis (ESA) and MCSA methods applied locally on the edge
              device. No cloud processing required for detection.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="overflow-x-auto max-w-2xl mx-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="py-3 pr-6 text-slate-900 font-semibold">Detection</th>
                    <th className="py-3 px-4 text-center font-semibold text-[#7655d6]">
                      Current Only
                    </th>
                    <th className="py-3 px-4 text-center font-semibold text-[#7655d6]">
                      With Voltage Reference
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {DETECTION.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="py-3 pr-6 text-slate-700">{row.label}</td>
                      <td className="py-3 px-4 text-center text-lg">
                        {row.current
                          ? <span className="text-[#7655d6] font-bold">&#10003;</span>
                          : <span className="text-slate-300">&#10007;</span>}
                      </td>
                      <td className="py-3 px-4 text-center text-lg">
                        {row.voltage
                          ? <span className="text-[#7655d6] font-bold">&#10003;</span>
                          : <span className="text-slate-300">&#10007;</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center max-w-2xl mx-auto">
              * Indicators consistent with bearing or rotor faults require maintenance confirmation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Optional Voltage ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Optional Voltage Reference
            </h2>
            <p className="text-slate-600 mb-10 text-center leading-relaxed">
              Current-only monitoring catches the majority of motor fault indicators.
              Adding a voltage reference unlocks additional supply-side visibility.
            </p>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#7655d6]">What It Adds</h3>
                <ul className="space-y-3">
                  {VOLTAGE_ADDS.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#7655d6]" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#7655d6]">How It Works</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  A plug-in transformer tap connects to a 120V panel circuit near the monitoring
                  point. Optional add-on. Does not replace current-only monitoring. Not required
                  for the pilot.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Most pilot customers start with current-only monitoring and evaluate whether
                  voltage reference is warranted for their specific facility.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Connectivity ─────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Connectivity</h2>
            <p className="text-slate-600 mb-8 text-center leading-relaxed">
              No plant network access required. The EdgePredict Gateway operates on cellular during
              pilots. No IT ticket, no network diagram, no approval process.
            </p>
            <ul className="space-y-4">
              {[
                "Cellular 4G LTE for all pilot deployments",
                "No plant Wi-Fi or OT network connection needed",
                "No inbound firewall rules required",
                "Optional plant network connection supported (outbound HTTPS only)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#7655d6]" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* ── Technical Details ────────────────────────────────────────── */}
      <section className="py-20 bg-[#0a0a0f] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest font-semibold text-[#a78fe8] mb-3">
              For Engineers
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              How it works under the hood.
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto leading-relaxed">
              We designed the hardware, wrote the firmware, and built the data pipeline.
              Here is the full stack.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {TECH_STACK.slice(0, 4).map(({ Icon, name, desc }, i) => (
              <FadeIn key={name} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:bg-white/8 hover:-translate-y-1 transition-all duration-200 h-full">
                  <Icon className="w-6 h-6 text-[#a78fe8] mb-3" />
                  <h3 className="text-sm font-semibold text-white mb-2">{name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-5 mt-5">
            {TECH_STACK.slice(4).map(({ Icon, name, desc }, i) => (
              <FadeIn key={name} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:bg-white/8 hover:-translate-y-1 transition-all duration-200 h-full">
                  <Icon className="w-6 h-6 text-[#a78fe8] mb-3" />
                  <h3 className="text-sm font-semibold text-white mb-2">{name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-10 bg-slate-900 rounded-2xl p-6 border border-slate-800 max-w-2xl mx-auto font-mono text-xs text-slate-400">
            <p className="text-slate-500 mb-2"># Data pipeline</p>
            <p><span className="text-[#a78fe8]">EdgePredict Meter</span> &rarr; <span className="text-[#a78fe8]">EdgePredict Gateway</span> &rarr; <span className="text-green-400">Cloud</span> &rarr; Dashboard</p>
            <p className="mt-1"><span className="text-[#a78fe8]">EdgePredict Gateway</span> &rarr; Secure tunnel &rarr; Remote diagnostics</p>
            <p className="mt-2 text-slate-500"># Health score loop (2s interval)</p>
            <p>sample &rarr; compute z-score &rarr; update EWMA baseline &rarr; emit health event</p>
          </FadeIn>
        </div>
      </section>

      {/* ── Pilot Kit ───────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-2 text-center">
              Pilot Kit: What&apos;s Included
            </h2>
            <p className="text-slate-600 mb-10 text-center">
              Everything ships pre-configured. Your maintenance electrician handles
              the clamp-on install in about 20 minutes.
            </p>
            <ul className="space-y-4">
              {PILOT_KIT.map(({ Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#7655d6]" />
                  <span className="text-slate-700">{text}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* ── Subscription ────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border-l-4 border-l-[#7655d6] border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-200">
              <h2 className="text-3xl font-bold text-center mb-2">
                Motor Monitoring Subscription
              </h2>
              <p className="text-4xl font-bold text-[#7655d6] mt-4 mb-1">
                $200
                <span className="text-lg font-normal text-slate-500 ml-1">/ month per motor</span>
              </p>
              <p className="text-slate-600 mb-8">
                Everything you need to monitor motor health. Hardware included. No hidden fees.
              </p>
              <ul className="space-y-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#7655d6]" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/pilot"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#7655d6] text-white font-semibold rounded-xl hover:bg-[#5d3db8] transition-all duration-200 hover:shadow-lg hover:shadow-[#7655d6]/25 hover:scale-[1.02]"
                >
                  Start Free Pilot <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-700 rounded-xl hover:border-[#7655d6] hover:text-[#7655d6] transition-all duration-200"
                >
                  Talk to an Engineer
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0a0a0f] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to get started?
            </h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
              60 days free. Return the hardware if we don&apos;t surface useful condition data.
              No hard sell. No minimum contract.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pilot"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#7655d6] text-white font-semibold rounded-xl hover:bg-[#5d3db8] transition-all duration-200 hover:shadow-xl hover:shadow-[#7655d6]/30 hover:scale-[1.02]"
              >
                Start Your Free Pilot <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-700 text-white font-semibold rounded-xl hover:border-slate-500 hover:text-white transition-all duration-200"
              >
                Try the Downtime Calculator
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}
