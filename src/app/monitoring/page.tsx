import Link from 'next/link'
import { CheckCircle, ArrowRight, Package, Wifi, Monitor, Wrench, BarChart, Shield, XCircle, Activity, Zap, X } from 'lucide-react'

export const metadata = {
  title: "Motor Monitoring — EdgePredict",
  description: "Non-invasive motor monitoring using electrical signature analysis. $200/mo per motor. 20-minute install. Cellular connectivity. Free 60-day pilot.",
}

const included = [
  "3-phase current monitoring via split-core CTs",
  "ESA/MCSA analysis, processed locally on the edge device",
  "Web-based monitoring dashboard access",
  "Real-time alerts (email, dashboard)",
  "Weekly motor health summaries",
  "Motor-specific adaptive baselines",
  "Cellular option, no plant network required",
  "Volume discounts for 5+ motors",
]

const pilotKit = [
  { icon: Package, text: "Pre-configured edge gateway (plug-in, no IT setup)" },
  { icon: Wrench, text: "Split-core CTs for motor feeder conductors" },
  { icon: Wifi, text: "Cellular connectivity option for pilots" },
  { icon: Monitor, text: "Dashboard access from day one" },
  { icon: BarChart, text: "Weekly health report emails" },
  { icon: Shield, text: "Support from an engineer, not a ticketing system" },
]

const voltageAdds = [
  "Voltage unbalance detection",
  "Undervoltage monitoring",
  "Power factor / kVAR tracking",
  "Frequency drift alerts",
  "Supply quality anomaly identification",
]

const detectionTable = [
  { label: "Phase imbalance", current: true, voltage: true },
  { label: "Phase loss", current: true, voltage: true },
  { label: "Load anomalies", current: true, voltage: true },
  { label: "Overload / near-stall", current: true, voltage: true },
  { label: "Mechanical fault indicators*", current: true, voltage: true },
  { label: "Electrical fault indicators*", current: true, voltage: true },
  { label: "Voltage unbalance", current: false, voltage: true },
  { label: "Undervoltage", current: false, voltage: true },
  { label: "Power factor / kVAR", current: false, voltage: true },
  { label: "Supply quality", current: false, voltage: true },
]

export default function MonitoringPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* Hero */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Motor Condition Monitoring
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Non-invasive health monitoring for industrial electric motors using Electrical Signature Analysis.
          </p>
        </div>
      </section>

      {/* Section 1: Subscription */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 border border-gray-200 border-l-4 border-l-[#7655d6] shadow-sm hover:shadow-lg transition-all duration-300">
              <h2 className="text-3xl font-bold text-center mb-4">Motor Monitoring Subscription</h2>
              <p className="text-4xl font-bold mt-4 mb-2 text-[#7655d6]">
                $200<span className="text-lg font-normal text-gray-500">/month per motor</span>
              </p>
              <p className="text-gray-600 mb-10">
                Everything you need to monitor motor health. No hidden fees.
              </p>
              <ul className="space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#7655d6' }} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Pilot Kit */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-2 text-center">Pilot Kit: What&apos;s Included</h2>
            <p className="text-gray-400 mb-10 text-center">
              Everything ships pre-configured. Your maintenance electrician handles the clamp-on install in about 20 minutes.
            </p>
            <ul className="space-y-4 mb-10">
              {pilotKit.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon className="w-5 h-5 mt-0.5 shrink-0 text-[#a78fe8]" />
                  <span className="text-gray-200">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Optional Voltage Reference */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Optional Voltage Reference</h2>
            <p className="text-gray-600 mb-10 text-center">
              Current-only monitoring catches the majority of motor fault indicators. Adding a voltage reference unlocks additional supply-side visibility.
            </p>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-lg font-semibold mb-4" style={{ color: '#7655d6' }}>What It Adds</h3>
                <ul className="space-y-3">
                  {voltageAdds.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#7655d6' }} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4" style={{ color: '#7655d6' }}>How It Works</h3>
                <p className="text-gray-600 mb-4">
                  A plug-in transformer tap connects to a 120V panel circuit near the monitoring point. It is an optional add-on. It does not replace current-only monitoring and is not required for the pilot.
                </p>
                <p className="text-gray-600">
                  Most pilot customers start with current-only monitoring and evaluate whether voltage reference is warranted for their specific facility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Connectivity */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Connectivity</h2>
            <p className="text-gray-600 mb-8 text-center">
              No plant network access required. The edge gateway operates on cellular during pilots. No IT ticket, no network diagram, no approval process.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#7655d6' }} />
                <span className="text-gray-700">Cellular option available, 4G LTE for pilot deployments</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#7655d6' }} />
                <span className="text-gray-700">Works on cellular, no plant Wi-Fi or OT network connection needed</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#7655d6' }} />
                <span className="text-gray-700">No inbound firewall rules required</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#7655d6' }} />
                <span className="text-gray-700">Optional plant network connection supported (outbound HTTPS only)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5: Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-[#7655d6] uppercase tracking-widest mb-3">How It Compares</p>
          <h2 className="text-3xl font-bold text-gray-900">Current analysis vs. vibration vs. nothing.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Most plants either use vibration sensors, run to failure, or have enterprise systems they can&apos;t afford. Here&apos;s how electrical signature analysis stacks up.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">

            {/* Column 1: No Monitoring */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <XCircle className="text-red-400 w-8 h-8 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-4">Run to Failure</h3>
              <ul className="space-y-3">
                {[
                  "No warning before failure",
                  "Emergency repairs at 3-5x cost",
                  "Unplanned downtime kills production",
                  "PM schedules based on guesswork",
                  "No data on equipment health",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <X className="w-4 h-4 mt-0.5 shrink-0 text-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-400 mt-4">This is where 85% of small plants are today.</p>
            </div>

            {/* Column 2: Vibration */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <Activity className="text-amber-400 w-8 h-8 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-4">Vibration Sensors</h3>
              <ul className="space-y-3">
                {[
                  { text: "Detects bearing wear and misalignment", good: true },
                  { text: "Established technology", good: true },
                  { text: "Requires mounting on equipment", good: false },
                  { text: "Cannot detect electrical faults", good: false },
                  { text: "Cannot detect phase imbalance or loss", good: false },
                  { text: "Cannot detect supply quality issues", good: false },
                  { text: "Often requires plant network access", good: false },
                  { text: "Typical setup: $50K+ capital project", good: false },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3 text-sm text-gray-600">
                    {item.good
                      ? <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-green-500" />
                      : <X className="w-4 h-4 mt-0.5 shrink-0 text-red-400" />}
                    {item.text}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-400 mt-4">Good for mechanical faults. Blind to electrical ones.</p>
            </div>

            {/* Column 3: EdgePredict ESA */}
            <div className="bg-[#7655d6]/5 rounded-xl p-6 border border-[#7655d6]/30">
              <Zap className="text-[#7655d6] w-8 h-8 mb-3" />
              <h3 className="text-lg font-bold text-[#7655d6] mb-4">Current Signature Analysis</h3>
              <ul className="space-y-3">
                {[
                  "Phase imbalance and phase loss detection",
                  "Overload and load instability",
                  "Mechanical fault indicators from current",
                  "Supply quality and power factor monitoring",
                  "Non-invasive clamp-on install in 20 minutes",
                  "Cellular connectivity, no plant network",
                  "No capital project, $200/mo per motor",
                  "Adaptive baseline learning per motor",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#7655d6] font-medium mt-4">Sees electrical AND mechanical faults from the current alone.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Section 6: Detection Table */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">What Gets Detected</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Electrical Signature Analysis (ESA) and MCSA methods applied locally on the edge device.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full max-w-2xl mx-auto border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 pr-6 text-gray-900 font-semibold">Detection</th>
                  <th className="py-3 px-4 text-center font-semibold" style={{ color: '#7655d6' }}>
                    Current Only
                  </th>
                  <th className="py-3 px-4 text-center font-semibold" style={{ color: '#7655d6' }}>
                    With Voltage Reference
                  </th>
                </tr>
              </thead>
              <tbody>
                {detectionTable.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 pr-6 text-gray-700">{row.label}</td>
                    <td className="py-3 px-4 text-center text-lg">
                      {row.current
                        ? <span style={{ color: '#7655d6' }}>✓</span>
                        : <span className="text-gray-300">✗</span>}
                    </td>
                    <td className="py-3 px-4 text-center text-lg">
                      {row.voltage
                        ? <span style={{ color: '#7655d6' }}>✓</span>
                        : <span className="text-gray-300">✗</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center max-w-2xl mx-auto">
            * Indicators consistent with bearing or rotor faults require maintenance confirmation.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Start with a free 60-day pilot or run the downtime calculator to estimate your exposure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pilot"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-white font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#7655d6' }}
            >
              Start Your Free Pilot <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:border-gray-400 transition-colors"
            >
              Try the Downtime Calculator <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
