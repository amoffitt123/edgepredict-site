import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Pricing — EdgePredict",
  description:
    "Simple, transparent pricing. Free maintenance management platform with unlimited users and work orders. $99/mo for Pro. $200/mo per motor for sensor monitoring.",
};

const tiers = [
  {
    name: "Planner",
    badge: { label: "Free", classes: "bg-green-100 text-green-700" },
    price: "$0",
    priceSub: "Free forever",
    description: "Unlimited users. Unlimited assets and work orders. 3 attachments per WO. No trial period. Free forever.",
    cardClasses: "border-gray-200",
    features: [
      "Unlimited users",
      "Unlimited assets & work orders",
      "PM scheduling",
      "Inspections with auto-WO creation",
      "AI work order generator",
      "Parts inventory",
      "3 attachments per work order",
      "CSV import / export",
    ],
    checkColor: "text-green-500",
    cta: {
      label: "Get Started",
      href: "https://tools.edgepredict.io/signup",
      external: true,
      classes: "bg-[#7655d6] hover:bg-[#5d3db8] text-white",
    },
  },
  {
    name: "Pro",
    badge: { label: "Most Popular", classes: "bg-[#7655d6]/10 text-[#7655d6]" },
    price: "$99",
    priceSub: "/mo per site",
    description: "Unlimited attachments. All features unlocked. Billed monthly, cancel anytime.",
    cardClasses: "border-[#7655d6]/40 shadow-[0_0_0_1px_rgba(118,85,214,0.15)]",
    featuresPrefix: "Everything in Planner, plus:",
    features: [
      "Unlimited attachments",
      "Drag-and-drop scheduling",
      "AI scheduling suggestions",
      "Advanced reporting & analytics",
      "Purchase orders",
      "Workflow automation",
      "Custom fields",
      "Priority support",
    ],
    checkColor: "text-green-500",
    cta: {
      label: "Get Started",
      href: "https://tools.edgepredict.io/signup",
      external: true,
      classes: "bg-[#7655d6] hover:bg-[#5d3db8] text-white",
    },
  },
  {
    name: "Monitor",
    badge: { label: "Sensors", classes: "bg-[#7655d6]/10 text-[#7655d6]" },
    price: "$200",
    priceSub: "/mo per motor",
    description: "Includes all Pro features. Hardware ships pre-configured. 60-day pilot is truly free.",
    cardClasses: "border-[#7655d6]/40 bg-gray-950 text-white shadow-[0_0_0_1px_rgba(118,85,214,0.2)]",
    featuresPrefix: "Everything in Pro, plus:",
    features: [
      "Sensor hardware kit included",
      "Real-time ESA monitoring",
      "Condition-based PM triggers",
      "Dynamic PM scheduling",
      "Cellular connectivity, no IT required",
      "20-minute non-invasive install",
      "60-day free pilot",
      "Engineer-level support",
    ],
    checkColor: "text-[#a78fe8]",
    cta: {
      label: "Start Free Pilot",
      href: "/pilot",
      external: false,
      classes: "bg-[#7655d6] hover:bg-[#5d3db8] text-white",
    },
  },
];

const faqs = [
  {
    q: "Is the free plan really free?",
    a: "Yes. No credit card required, no time limit, no feature throttling. Unlimited users, unlimited work orders, unlimited assets. We built it because most small plants have nothing. Something genuinely free is infinitely better than a 30-day trial.",
  },
  {
    q: "What's the difference between free and Pro?",
    a: "Free includes unlimited users, work orders, PM scheduling, inspections, parts inventory, AI work order generation, and 3 attachments per work order. Pro adds unlimited attachments, drag-and-drop scheduling with AI suggestions, advanced reporting, purchase orders, workflow automation, and custom fields.",
  },
  {
    q: "Do I need sensors to use the platform?",
    a: "No. The management platform works completely standalone. Sensors are an optional upgrade that change time-based PM schedules to condition-based, driven by real electrical signature data from the motor itself. Start free, add sensors when you're ready.",
  },
  {
    q: "What happens after the 60-day pilot?",
    a: "If the sensors prove value, you continue at $200/mo per motor. If not, send the hardware back. No obligation, no contract, no pressure. The pilot is genuinely free.",
  },
  {
    q: "Can I start free and add sensors later?",
    a: "That's exactly how we designed it. Start with the free Planner tier, get your PM program organized, track your failures, see which motors are critical, then add monitoring on the ones that matter most.",
  },
  {
    q: "How does EdgePredict compare to MaintainX or UpKeep?",
    a: "MaintainX starts at $16/user/month and UpKeep at $20/user/month, and neither builds sensors. EdgePredict's free tier has unlimited users and more features than their paid tiers. And we're the only platform that also does motor monitoring as part of the same system. The CMMS + sensor integration doesn't exist anywhere else.",
  },
];

export default function PricingPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, transparent pricing.
          </h1>
          <p className="text-xl text-gray-300 max-w-xl mx-auto">
            Start free. Add sensors when you&apos;re ready.
          </p>
        </div>
      </section>

      {/* ── TIER COMPARISON ──────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-xl border p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${tier.cardClasses} ${tier.name === 'Monitor' ? '' : 'bg-white'}`}
              >
                {/* Badge */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className={`text-xl font-bold ${tier.name === 'Monitor' ? 'text-white' : 'text-gray-900'}`}>{tier.name}</h2>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tier.badge.classes}`}>
                    {tier.badge.label}
                  </span>
                </div>

                {/* Price */}
                <div className="mb-2">
                  <span className={`text-5xl font-bold ${tier.name === 'Monitor' ? 'text-white' : 'text-gray-900'}`}>{tier.price}</span>
                </div>
                <p className={`text-sm mb-4 ${tier.name === 'Monitor' ? 'text-gray-400' : 'text-gray-500'}`}>{tier.priceSub}</p>

                {/* Description */}
                <p className={`text-sm mb-8 leading-relaxed ${tier.name === 'Monitor' ? 'text-gray-400' : 'text-gray-600'}`}>{tier.description}</p>

                {/* CTA */}
                {tier.cta.external ? (
                  <a
                    href={tier.cta.href}
                    className={`w-full inline-flex items-center justify-center px-5 py-3 rounded-lg font-semibold text-sm transition-colors mb-8 ${tier.cta.classes}`}
                  >
                    {tier.cta.label} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                ) : (
                  <Link
                    href={tier.cta.href}
                    className={`w-full inline-flex items-center justify-center px-5 py-3 rounded-lg font-semibold text-sm transition-colors mb-8 ${tier.cta.classes}`}
                  >
                    {tier.cta.label} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                )}

                {/* Features */}
                <div>
                  {tier.featuresPrefix && (
                    <p className={`text-xs font-semibold uppercase tracking-wide mb-4 ${tier.name === 'Monitor' ? 'text-gray-500' : 'text-gray-500'}`}>
                      {tier.featuresPrefix}
                    </p>
                  )}
                  <ul className="space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle className={`h-4 w-4 mt-0.5 flex-shrink-0 ${tier.checkColor}`} />
                        <span className={`text-sm ${tier.name === 'Monitor' ? 'text-gray-300' : 'text-gray-700'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#7655d6] uppercase tracking-widest mb-3">Comparison</p>
            <h2 className="text-3xl font-bold text-gray-900">How we stack up</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 text-gray-500 font-medium w-40">Feature</th>
                  <th className="text-center py-3 px-4 font-bold text-white bg-[#7655d6] rounded-t-lg">EdgePredict Free</th>
                  <th className="text-center py-3 px-4 text-gray-600 font-medium">MaintainX Essential<br /><span className="text-xs font-normal text-gray-400">($16/user/mo)</span></th>
                  <th className="text-center py-3 px-4 text-gray-600 font-medium">UpKeep Starter<br /><span className="text-xs font-normal text-gray-400">($20/user/mo)</span></th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Work Orders", ep: "Unlimited", mx: "Limited", up: "Limited" },
                  { feature: "PM Scheduling", ep: "✓", mx: "✓", up: "✓" },
                  { feature: "AI Work Orders", ep: "✓", mx: "✗", up: "✗" },
                  { feature: "Asset Management", ep: "Unlimited", mx: "Limited", up: "✓" },
                  { feature: "Inspections", ep: "✓", mx: "Add-on", up: "Add-on" },
                  { feature: "Parts Inventory", ep: "✓", mx: "Add-on", up: "Add-on" },
                  { feature: "Built-in Sensors", ep: "Monitor tier", mx: "3rd party", up: "3rd party" },
                  { feature: "Condition-Based PM", ep: "Monitor tier", mx: "✗", up: "✗" },
                  { feature: "Users", ep: "Unlimited", mx: "Per-user pricing", up: "Per-user pricing" },
                  { feature: "Attachments", ep: "3 per WO (unlimited Pro)", mx: "Limited", up: "Limited" },
                ].map((row, i) => (
                  <tr key={row.feature} className={`border-b border-gray-100 ${i % 2 === 0 ? '' : 'bg-gray-50/50'}`}>
                    <td className="py-3 pr-4 text-gray-700 font-medium">{row.feature}</td>
                    <td className="py-3 px-4 text-center font-medium bg-[#7655d6]/5 text-[#5d3db8]">{row.ep}</td>
                    <td className={`py-3 px-4 text-center ${row.mx === '✗' ? 'text-gray-300' : 'text-gray-600'}`}>{row.mx}</td>
                    <td className={`py-3 px-4 text-center ${row.up === '✗' ? 'text-gray-300' : 'text-gray-600'}`}>{row.up}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#7655d6] uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl font-bold text-gray-900">Common questions</h2>
          </div>

          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-gray-200 pb-8 last:border-0 last:pb-0">
                <h3 className="font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-sm text-gray-500">
            More questions?{" "}
            <Link href="/contact" className="text-[#7655d6] hover:underline font-medium">
              Talk to an engineer →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
