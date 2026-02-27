import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'

export const metadata = {
  title: "Product — EdgePredict Motor Condition Monitoring",
  description: "Motor condition monitoring using ESA/MCSA. $200/month per motor. Split-core CT installation. Cellular option. Optional voltage reference.",
}

const included = [
  "3-phase current monitoring via split-core CTs",
  "ESA/MCSA analysis — local edge processing",
  "Web-based monitoring dashboard access",
  "Real-time alerts (email, dashboard)",
  "Weekly motor health summaries",
  "Motor-specific adaptive baselines",
  "Cellular option — no plant network required",
  "Volume discounts for 5+ motors",
]

const pilotKit = [
  "Pre-configured edge gateway (plug-in, no IT setup)",
  "Split-core CTs for motor feeder conductors",
  "Cellular connectivity option for pilots",
  "Dashboard access from day one",
  "Weekly health report emails",
  "Support from an engineer, not a ticketing system",
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

export default function ProductsPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* Hero */}
      <section className="py-20 text-white" style={{ background: 'linear-gradient(135deg, #1a0f2e 0%, #2d1b5e 50%, #1a0f2e 100%)' }}>
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
            <h2 className="text-3xl font-bold mb-2">Motor Monitoring Subscription</h2>
            <p className="text-3xl font-bold mt-4 mb-2" style={{ color: '#7655d6' }}>
              $200<span className="text-lg font-normal text-gray-500">/month per motor</span>
            </p>
            <p className="text-gray-600 mb-10">
              Everything you need to monitor motor health continuously — no hidden fees.
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
      </section>

      {/* Section 2: Pilot Kit */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-2">Pilot Kit — What&apos;s Included</h2>
            <p className="text-gray-400 mb-10">
              Everything ships pre-configured. Your maintenance electrician handles the clamp-on install in about 20 minutes.
            </p>
            <ul className="space-y-4 mb-10">
              {pilotKit.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#7655d6' }} />
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Optional Voltage Reference */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Optional Voltage Reference</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
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
                A plug-in transformer tap connects to a 120V panel circuit near the monitoring point. It is an optional add-on — it does not replace current-only monitoring and is not required for the pilot.
              </p>
              <p className="text-gray-600">
                Most pilot customers start with current-only monitoring and evaluate whether voltage reference is warranted for their specific facility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Connectivity */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Connectivity</h2>
            <p className="text-gray-600 mb-8">
              No plant network access required. The edge gateway operates on cellular during pilots — no IT ticket, no network diagram, no approval process.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#7655d6' }} />
                <span className="text-gray-700">Cellular option available — 4G LTE for pilot deployments</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#7655d6' }} />
                <span className="text-gray-700">Works on cellular — no plant Wi-Fi or OT network connection needed</span>
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

      {/* Section 5: Detection Table */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">What Gets Detected</h2>
            <p className="text-gray-600 mb-8 text-center">
              Electrical Signature Analysis (ESA) and MCSA methods applied locally on the edge device.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
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
                          : <span className="text-gray-300">—</span>}
                      </td>
                      <td className="py-3 px-4 text-center text-lg">
                        {row.voltage
                          ? <span style={{ color: '#7655d6' }}>✓</span>
                          : <span className="text-gray-300">—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              * Indicators consistent with bearing or rotor faults require maintenance confirmation.
            </p>
          </div>
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
              See the Downtime Calculator <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
