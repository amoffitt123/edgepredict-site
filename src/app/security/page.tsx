import Link from 'next/link'
import { CheckCircle, ArrowRight, XCircle } from 'lucide-react'

export const metadata = {
  title: "Security & IT Overview — EdgePredict",
  description: "Plain-English security overview for plant IT and OT teams. Read-only monitoring. No control signals. Cellular option requires no plant network access.",
}

const doesDo = [
  "Reads current data from split-core CT sensors clamped on motor feeder conductors",
  "Sends trend data and alert notifications to the monitoring dashboard over encrypted HTTPS",
  "Generates weekly motor health summaries delivered by email",
  "Processes waveform data locally on the edge device before transmitting summary metrics",
]

const doesNotDo = [
  "Send any control signals to motors, drives, or other equipment",
  "Require access to control networks (PLC, SCADA, DCS, or similar)",
  "Connect to process systems or read process variables",
  "Bridge OT and IT network segments",
  "Require inbound firewall rules or open ports",
]

const quickRef = [
  { label: "Control signals sent", value: "No" },
  { label: "Control network access required", value: "No" },
  { label: "Plant Wi-Fi required", value: "No (cellular option)" },
  { label: "Inbound firewall rules", value: "Not required" },
  { label: "Data encryption", value: "HTTPS / TLS" },
  { label: "On-prem option", value: "Available" },
]

export default function SecurityPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* Hero */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Security &amp; IT Overview
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            For IT managers and OT engineers evaluating EdgePredict for your facility. Plain language — no marketing.
          </p>
        </div>
      </section>

      {/* What the system does and doesn't do */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">What the System Does and Does Not Do</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2" style={{ color: '#7655d6' }}>
                <CheckCircle className="w-5 h-5" />
                What It Does
              </h3>
              <ul className="space-y-4">
                {doesDo.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 shrink-0 text-green-600" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-red-600">
                <XCircle className="w-5 h-5" />
                What It Does Not Do
              </h3>
              <ul className="space-y-4">
                {doesNotDo.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 mt-0.5 shrink-0 text-red-500" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Network and Connectivity */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Network and Connectivity</h2>
            <p className="text-gray-600 mb-8">
              The system is designed to require minimal network access from the facility. Cellular is the default for pilots and common in production deployments.
            </p>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#7655d6' }} />
                <div>
                  <span className="font-medium text-gray-900">Cellular option (4G LTE) available</span>
                  <p className="text-gray-600 mt-1 text-sm">
                    The system can operate entirely on cellular — no plant Wi-Fi or OT network connection required. This is the default configuration for pilot deployments.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#7655d6' }} />
                <div>
                  <span className="font-medium text-gray-900">Plant network use is optional</span>
                  <p className="text-gray-600 mt-1 text-sm">
                    If a plant network connection is preferred: outbound HTTPS only. No inbound ports required. No firewall rule changes needed.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#7655d6' }} />
                <div>
                  <span className="font-medium text-gray-900">No network bridging</span>
                  <p className="text-gray-600 mt-1 text-sm">
                    The edge device does not bridge OT and IT network segments. It is an isolated monitoring endpoint.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Data */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Data</h2>
            <p className="text-gray-600 mb-8">
              What is captured, where it goes, and who can see it.
            </p>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#7655d6' }} />
                <div>
                  <span className="font-medium text-gray-900">Processed locally on the edge device</span>
                  <p className="text-gray-600 mt-1 text-sm">
                    Motor current waveforms and derived metrics are analyzed on the edge device. Raw waveforms are not continuously transmitted.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#7655d6' }} />
                <div>
                  <span className="font-medium text-gray-900">Summary data transmitted over encrypted HTTPS</span>
                  <p className="text-gray-600 mt-1 text-sm">
                    Derived metrics, alert states, and health summaries are transmitted to the monitoring dashboard. All transmission uses HTTPS / TLS encryption.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#7655d6' }} />
                <div>
                  <span className="font-medium text-gray-900">No process data captured</span>
                  <p className="text-gray-600 mt-1 text-sm">
                    No PLC tags, SCADA values, proprietary process data, or production records are captured or transmitted.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#7655d6' }} />
                <div>
                  <span className="font-medium text-gray-900">Role-based access control</span>
                  <p className="text-gray-600 mt-1 text-sm">
                    Dashboard access is role-controlled. Your team determines who can view monitoring data and alert history.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* On-Prem Option */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">On-Premises Option</h2>
            <p className="text-gray-600 mb-4">
              For facilities with strict data residency or network segmentation policies, an on-premises dashboard deployment is available. Contact us to discuss your requirements.
            </p>
            <p className="text-gray-600">
              In the standard configuration, monitoring data flows to EdgePredict-hosted infrastructure over HTTPS. Most facilities are comfortable with this after reviewing the connectivity details above.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Reference Table */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Quick Reference</h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-xl border-collapse text-left text-sm">
              <tbody>
                {quickRef.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4 text-gray-700 font-medium border-b border-gray-100">
                      {row.label}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-100">
                      <span
                        className="font-semibold"
                        style={{ color: row.value.startsWith('No') ? '#16a34a' : '#7655d6' }}
                      >
                        {row.value}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions for Your IT or OT Team?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            We are happy to get on a call with your IT or OT security team — provide a one-pager, answer questions, whatever is useful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="mailto:anderson@edgepredict.io"
              className="text-lg font-medium hover:underline text-purple-400"
            >
              anderson@edgepredict.io
            </a>
            <span className="hidden sm:block text-gray-600">|</span>
            <a
              href="tel:+17034016262"
              className="text-lg font-medium hover:underline text-purple-400"
            >
              (703) 401-6262
            </a>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#7655d6' }}
          >
            Send a Message <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </main>
  )
}
