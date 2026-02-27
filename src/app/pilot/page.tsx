import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'

export const metadata = {
  title: "Free 60-Day Pilot — EdgePredict",
  description: "Start a free 60-day motor condition monitoring pilot. No plant network required. Walk away if no value.",
}

const trustPills = [
  "No plant network required",
  "$0 upfront for the pilot",
  "Cellular option included",
  "Walk away after 60 days",
]

const steps = [
  {
    number: "01",
    title: "Choose your motors",
    body: "Pick 2–5 critical motors — pumps, fans, compressors, conveyors. Let us know horsepower, whether each is VFD-driven or line-fed, and their location in the facility.",
  },
  {
    number: "02",
    title: "We ship your kit",
    body: "Pre-configured edge gateway, split-core CTs, and connection instructions ship to you. Usually within 5 business days of confirming site details.",
  },
  {
    number: "03",
    title: "Install in ~20 minutes",
    body: "Your maintenance electrician clamps the CTs onto motor feeder conductors — VFD input side, or line-fed conductors. Plug in the gateway. Done. No IT involvement required.",
  },
  {
    number: "04",
    title: "Baseline + monitoring",
    body: "The first two weeks establishes motor-specific baselines under normal operating conditions. After that, alerting activates for anomalies and condition changes.",
  },
  {
    number: "05",
    title: "Decision at 60 days",
    body: "We review findings with you — what the data showed, any anomalies flagged, any maintenance recommendations. Continue at $200/month per motor, or return the hardware. No hard sell.",
  },
]

const requirements = [
  "Access to motor feeder conductors (MCC or VFD input side)",
  "120V outlet within reasonable distance of each monitoring point",
  "Cellular signal at the panel location (we verify with you before shipping)",
  "A maintenance electrician to complete the clamp-on install (~20 min)",
]

const successCriteria = [
  "At least one actionable early warning during the pilot period",
  "Fewer surprises — visibility into which motors are running abnormally",
  "Prioritized maintenance work orders based on condition data, not guesswork",
  "Team comfortable reading and acting on the weekly health summaries",
]

export default function PilotPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* Hero */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Free 60-Day Pilot Program
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Try motor condition monitoring on your critical assets. If we don&apos;t surface useful condition data in 60 days, return the hardware.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {trustPills.map((pill) => (
              <span
                key={pill}
                className="px-4 py-2 rounded-full text-sm font-medium border border-gray-600 text-gray-300"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How the Pilot Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">How the Pilot Works</h2>
          <div className="max-w-3xl mx-auto space-y-10">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                <div
                  className="text-3xl font-bold shrink-0 w-12 leading-none mt-1"
                  style={{ color: '#7655d6' }}
                >
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Need From You */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">What We Need From You</h2>
            <p className="text-gray-600 mb-8">
              Most facilities have everything in place already. Here is what makes a pilot site work:
            </p>
            <ul className="space-y-4">
              {requirements.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#7655d6' }} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Success Criteria */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Success Criteria</h2>
            <p className="text-gray-600 mb-8">
              Here is what a successful pilot looks like — we measure these together at 60 days.
            </p>
            <ul className="space-y-4">
              {successCriteria.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#7655d6' }} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing After the Pilot */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Pricing After the Pilot</h2>
            <div className="mb-8">
              <div className="border border-gray-700 rounded-lg p-6 inline-block">
                <p className="text-gray-400 text-sm mb-2">Monthly subscription</p>
                <p className="text-3xl font-bold text-white">$200</p>
                <p className="text-gray-400 text-sm mt-1">per motor / month</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>No minimum contract required</li>
              <li>Volume discounts available for 5+ motors</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Pilot Started</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Reach out directly — you will speak with an engineer, not a sales queue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="mailto:anderson@edgepredict.io"
              className="text-lg font-medium hover:underline"
              style={{ color: '#7655d6' }}
            >
              anderson@edgepredict.io
            </a>
            <span className="hidden sm:block text-gray-300">|</span>
            <a
              href="tel:+17034016262"
              className="text-lg font-medium hover:underline"
              style={{ color: '#7655d6' }}
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
