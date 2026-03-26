import Link from "next/link";
import { CheckCircle, ArrowRight, AlertTriangle, Package, Zap } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Free 60-Day Motor Monitoring Pilot — EdgePredict",
  description:
    "Start a free 60-day motor condition monitoring pilot. Hardware included, $0 upfront. If we don't surface useful condition data, ship it back. No contract, no sales pressure.",
  alternates: {
    canonical: "https://www.edgepredict.io/pilot",
  },
  openGraph: {
    title: "Free 60-Day Motor Monitoring Pilot — EdgePredict",
    description:
      "Hardware included. $0 upfront. 60 days of motor condition monitoring on your critical assets. Return it if we don't prove value.",
    url: "https://www.edgepredict.io/pilot",
    type: "website",
  },
};

export default function PilotPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#0a0a0f] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest font-semibold text-[#a78fe8] mb-5">
            Free Pilot Program
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
            60 days. Your motors.<br />
            <span className="text-[#7655d6]">Our hardware. Zero risk.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            We ship pre-configured hardware to your facility. Your electrician clamps it on in 20 minutes.
            We monitor for 60 days. If we don&apos;t surface anything useful, you ship it back.
            That&apos;s the whole deal.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:anderson@edgepredict.io"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#7655d6] text-white font-semibold rounded-xl hover:bg-[#5d3db8] transition-all duration-200 hover:shadow-xl hover:shadow-[#7655d6]/30 hover:scale-[1.02]"
            >
              Start Your Pilot <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 text-slate-300 font-semibold rounded-xl hover:border-slate-400 hover:text-white transition-all duration-200"
            >
              Ask a Question First
            </Link>
          </div>

          {/* Risk contrast */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                What you risk
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Your maintenance electrician&apos;s time for a 20-minute clamp-on install.
                That is it.
              </p>
            </div>
            <div className="bg-[#7655d6]/10 border border-[#7655d6]/25 rounded-2xl p-5">
              <p className="text-xs font-semibold text-[#a78fe8] uppercase tracking-widest mb-3">
                What we risk
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Hardware. Shipping. Engineering time. 60 days of monitoring infrastructure.
                All on us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <p className="text-sm uppercase tracking-widest font-semibold text-[#7655d6] mb-3">
              What Happens
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Day by day, start to decision.
            </h2>
          </FadeIn>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-px hidden sm:block" />

            <div className="space-y-10">
              {[
                {
                  day: "Day 1",
                  side: "left",
                  title: "You tell us your motors",
                  body: "Share motor specs: HP rating, VFD-driven or line-fed, location in the facility. We confirm cellular signal is available at the panel. Takes about 20 minutes over email or a call.",
                  color: "bg-[#7655d6]",
                },
                {
                  day: "Day 3-5",
                  side: "right",
                  title: "Hardware arrives, pre-configured",
                  body: "EdgePredict Meter boards and Gateway ship configured for your specific motors. No IT involvement. No network diagram. The box contains everything including the CTs.",
                  color: "bg-[#7655d6]",
                },
                {
                  day: "~20 min",
                  side: "left",
                  title: "Your electrician installs it",
                  body: "Split-core CTs clamp onto motor feeder conductors at the MCC or VFD input. Plug in the Gateway. Done. No rewiring. No panel modifications. No downtime.",
                  color: "bg-[#7655d6]",
                },
                {
                  day: "Weeks 1-2",
                  side: "right",
                  title: "Baseline learning",
                  body: "The system watches each motor under normal operating conditions. It learns load patterns, VFD speed bands, startup transients. Separate baselines per operating state so normal variation doesn't trigger alerts.",
                  color: "bg-slate-400",
                },
                {
                  day: "Week 3+",
                  side: "left",
                  title: "Active monitoring begins",
                  body: "Alerting activates. Health scores update every 2 seconds. You get a dashboard, weekly health summary emails, and real-time alerts if something deviates from baseline.",
                  color: "bg-green-500",
                },
                {
                  day: "Day 60",
                  side: "right",
                  title: "We review the findings together",
                  body: "We walk through what the data showed: any anomalies flagged, which motors are healthy, which ones showed early warning signs. Then you decide. Continue at $200/mo per motor, or ship the hardware back. No hard sell.",
                  color: "bg-[#7655d6]",
                },
              ].map((item, i) => (
                <FadeIn key={item.day} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                  <div className={`relative flex items-start gap-6 sm:gap-0 ${item.side === "right" ? "sm:flex-row-reverse" : ""}`}>
                    {/* Day badge */}
                    <div className="flex-shrink-0 sm:w-1/2 flex sm:justify-center z-10">
                      <div className={`${item.color} text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap`}>
                        {item.day}
                      </div>
                    </div>
                    {/* Content */}
                    <div className={`flex-1 sm:w-1/2 pb-2 ${item.side === "right" ? "sm:pr-10 sm:text-right" : "sm:pl-10"}`}>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MOCK ALERT CARD ──────────────────────────────────────────── */}
      <section className="py-20 bg-[#0a0a0f] text-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest font-semibold text-[#a78fe8] mb-3">
              What Finding Something Looks Like
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              You get an alert before you get a failure.
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto leading-relaxed">
              This is what shows up in your dashboard when the system catches something developing.
              You see it days or weeks before the motor trips.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="max-w-2xl mx-auto bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
              {/* Mock title bar */}
              <div className="bg-slate-800 px-4 py-3 flex items-center justify-between border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="ml-2 text-xs text-slate-500 font-mono">
                    EdgePredict Dashboard
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-amber-400 font-mono">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  1 Active Alert
                </div>
              </div>

              {/* Alert card */}
              <div className="p-5">
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-4">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="text-xs font-mono text-slate-500 uppercase tracking-wide mb-1">
                        Motor Alert
                      </p>
                      <p className="text-white font-semibold">Conveyor Drive C-04</p>
                    </div>
                    <span className="text-xs font-bold px-2 py-1 rounded-full bg-amber-500/20 text-amber-400 flex-shrink-0">
                      WARNING
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-3">
                    Load deviation increasing over past 48 hours. Currently{" "}
                    <span className="text-amber-400 font-semibold">3.1 sigma</span> from learned
                    baseline. Phase A current trending 4.2% above normal operating range.
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "Health Score", value: "71.8", color: "text-amber-400", prev: "was 94.2" },
                      { label: "Load Dev", value: "3.1 sigma", color: "text-amber-400", prev: "" },
                      { label: "Duration", value: "48 hrs", color: "text-slate-300", prev: "trending" },
                    ].map((s) => (
                      <div key={s.label} className="bg-slate-800 rounded-lg p-2.5">
                        <div className={`text-sm font-bold font-mono ${s.color}`}>{s.value}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                        {s.prev && <div className="text-xs text-slate-600 mt-0.5">{s.prev}</div>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendation */}
                <div className="bg-slate-800 rounded-xl p-4">
                  <p className="text-xs font-mono text-[#a78fe8] uppercase tracking-wide mb-2">
                    Recommended Action
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Inspect motor and feeder connections. Pattern is consistent with developing
                    rotor or bearing fault, or loose connection at the MCC. Schedule inspection
                    before next planned production stop.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                    <Zap className="w-3.5 h-3.5 text-[#7655d6]" />
                    Auto-generated work order created in your CMMS
                  </div>
                </div>
              </div>

              <div className="px-5 pb-4">
                <p className="text-xs text-slate-600 font-mono text-center">
                  Example alert. Your motors. Your data. Your dashboard.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── WHAT YOU'LL KNOW ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest font-semibold text-[#7655d6] mb-3">
              The Outcome
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              What you know at day 60.
            </h2>
            <p className="text-slate-600 mt-4 max-w-xl mx-auto leading-relaxed">
              Regardless of whether you continue, the 60 days leaves you with real information
              about your equipment.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Which motors are healthy",
                body: "Baseline load patterns established for every monitored motor. You know what normal looks like, which is worth something on its own.",
              },
              {
                title: "Which motors showed warning signs",
                body: "Any anomalies flagged during the 60 days come with timestamps, deviation metrics, and recommended actions. Not just \"something happened\" but what, when, and how serious.",
              },
              {
                title: "How your PM schedule compares to actual condition",
                body: "If a motor that's due for scheduled maintenance looks fine, you see that. If a motor that isn't due yet is showing early wear indicators, you see that too.",
              },
              {
                title: "Whether condition-based PM is worth it for your facility",
                body: "You have real data now. If the 60 days showed clean motors and no anomalies, that's useful. If it caught something developing, that's the ROI case made for you.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <div className="w-8 h-1 rounded-full bg-[#7655d6] mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── IS THIS A FIT? ───────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-2 text-slate-900">Is this a fit?</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We are selective about pilot sites. Not every facility is the right fit right now,
                and we would rather tell you that upfront.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Good fit
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "2-20 critical 3-phase AC motors (pumps, fans, conveyors, compressors)",
                      "Motor failures cause unplanned downtime or production impact",
                      "Motors are 5 HP or larger",
                      "Access to motor feeder conductors at MCC or VFD input side",
                      "A maintenance electrician on staff or on contract",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center text-slate-400 text-xs font-bold flex-shrink-0">
                      ?
                    </span>
                    Harder to fit (talk to us first)
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Single-phase motors or DC drive systems",
                      "No cellular signal at panel locations (we can check before shipping)",
                      "Facility requires extensive IT security review for any connected device",
                      "Motors run less than 4 hours/day (limits baseline quality)",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-4 h-4 mt-0.5 flex-shrink-0 rounded-full border border-slate-300 text-slate-400 text-xs flex items-center justify-center font-bold">
                          ?
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── WHAT YOU NEED ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-2 text-slate-900">
              What we need from you to ship
            </h2>
            <p className="text-slate-600 mb-8">
              Most facilities have everything already. Here is the checklist:
            </p>
            <div className="space-y-3">
              {[
                { item: "Motor specs", detail: "HP, line-fed or VFD-driven, rough location in facility" },
                { item: "Panel access", detail: "MCC bucket or VFD input side where CTs will clamp" },
                { item: "120V nearby", detail: "An outlet within reasonable distance of the monitoring point for the gateway" },
                { item: "Cellular signal", detail: "We verify this with you before we ship, not after" },
                { item: "20 minutes of electrician time", detail: "For the clamp-on install. No rewiring, no panel modifications" },
              ].map(({ item, detail }) => (
                <div key={item} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <Package className="w-5 h-5 text-[#7655d6] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{item}</p>
                    <p className="text-slate-500 text-sm">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── AFTER THE PILOT ──────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">After the pilot</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                If you see value, continue at $200/mo per motor. No minimum contract.
                Volume discounts for 5+ motors. If you don&apos;t, a prepaid return label
                handles the hardware. No invoice, no awkward call, no pressure.
              </p>
            </div>
            <div className="flex-shrink-0 text-center bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">After pilot</p>
              <p className="text-4xl font-bold text-[#7655d6]">$200</p>
              <p className="text-slate-500 text-sm mt-1">per motor / month</p>
              <p className="text-xs text-slate-400 mt-2">No contract required</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CONTACT CTA ──────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0a0a0f] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-4">
              Ready to find out what your motors are doing?
            </h2>
            <p className="text-slate-400 mb-3 leading-relaxed text-lg">
              Email or call directly. You will talk to an engineer.
              We will ask about your motors, confirm the site is a fit, and get hardware shipped.
            </p>
            <p className="text-slate-500 text-sm mb-10">
              Average time from first email to hardware shipped: under a week.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="mailto:anderson@edgepredict.io"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#7655d6] text-white font-semibold rounded-xl hover:bg-[#5d3db8] transition-all duration-200 hover:shadow-xl hover:shadow-[#7655d6]/30 hover:scale-[1.02]"
              >
                <ArrowRight className="w-4 h-4" />
                anderson@edgepredict.io
              </a>
              <a
                href="tel:+17034016262"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-700 text-slate-300 font-semibold rounded-xl hover:border-slate-400 hover:text-white transition-all duration-200"
              >
                (703) 401-6262
              </a>
            </div>

            <p className="text-slate-600 text-sm">
              Prefer a form?{" "}
              <Link href="/contact" className="text-[#a78fe8] hover:underline">
                Use the contact page
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}
