import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Pricing — EdgePredict",
  description:
    "Simple, transparent pricing. Free maintenance planning platform. $200/mo per motor for live sensor monitoring. Start free, upgrade when you're ready.",
};

// ── Tier data ─────────────────────────────────────────────────────────────────

const tiers = [
  {
    name: "Planner",
    badge: { label: "Free", classes: "bg-green-100 text-green-700" },
    price: "$0",
    priceSub: "Free forever",
    description: "Everything a small plant needs to run a real maintenance program.",
    cardClasses: "border-gray-200",
    features: [
      "Asset management (unlimited)",
      "Auto-generated PM schedules",
      "PM calendar with risk scoring",
      "Work order management",
      "Maintenance request workflow",
      "AI work order generator",
      "CSV import / export",
      "Single user",
    ],
    checkColor: "text-green-500",
    cta: {
      label: "Start Free",
      href: "https://tools.edgepredict.io/signup",
      external: true,
      classes: "bg-[#7655d6] hover:bg-[#5d3db8] text-white",
    },
  },
  {
    name: "Pro",
    badge: { label: "Coming Soon", classes: "bg-amber-100 text-amber-700" },
    price: "$99",
    priceSub: "/mo per site",
    description: "For plants with maintenance teams that need collaboration.",
    cardClasses: "border-gray-200",
    featuresPrefix: "Everything in Planner, plus:",
    features: [
      "Multi-user with role-based access",
      "6 roles (admin, supervisor, planner, scheduler, technician, requestor)",
      "Advanced reporting and analytics",
      "Parts inventory management",
      "Technician mobile view",
      "Priority support",
    ],
    checkColor: "text-green-500",
    cta: {
      label: "Join Waitlist",
      href: "/contact",
      external: false,
      classes: "border border-gray-300 text-gray-700 hover:border-[#7655d6] hover:text-[#7655d6]",
    },
  },
  {
    name: "Monitor",
    badge: { label: "Sensor Tier", classes: "bg-[#7655d6]/10 text-[#7655d6]" },
    price: "$200",
    priceSub: "/mo per motor",
    description: "Live motor health monitoring that makes your PM program predictive.",
    cardClasses: "border-[#7655d6]/40 shadow-[0_0_0_1px_rgba(118,85,214,0.2)]",
    featuresPrefix: "Everything in Pro, plus:",
    features: [
      "Sensor hardware kit included",
      "Real-time current signature analysis",
      "Live dashboard with phase currents and health scores",
      "Dynamic PM scheduling (sensor-driven)",
      "Automated alerts and work order generation",
      "Cellular connectivity — no IT required",
      "20-minute non-invasive install",
      "60-day free pilot",
    ],
    checkColor: "text-[#7655d6]",
    cta: {
      label: "Start Your Free Pilot",
      href: "/pilot",
      external: false,
      classes: "bg-[#7655d6] hover:bg-[#5d3db8] text-white",
    },
  },
];

const faqs = [
  {
    q: "Is the free tier really free?",
    a: "Yes. No credit card required, no time limit, no feature throttling. We built it because most small plants have nothing — and something free is infinitely better than nothing.",
  },
  {
    q: "What happens after the 60-day pilot?",
    a: "If the sensors prove value, you continue at $200/mo per motor. If not, send the hardware back. No obligation.",
  },
  {
    q: "Can I start free and add sensors later?",
    a: "That's exactly how we designed it. Start with the planner, get your PM program organized, then add monitoring on your most critical motors when you're ready.",
  },
  {
    q: "Do I need IT involvement?",
    a: "No. The sensor kit uses cellular connectivity. No plant network access, no firewall rules, no IT tickets.",
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
            Start free. Upgrade when you need more.
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
                className={`relative bg-white rounded-xl border p-8 ${tier.cardClasses}`}
              >
                {/* Badge */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">{tier.name}</h2>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tier.badge.classes}`}>
                    {tier.badge.label}
                  </span>
                </div>

                {/* Price */}
                <div className="mb-2">
                  <span className="text-5xl font-bold text-gray-900">{tier.price}</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">{tier.priceSub}</p>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-8 leading-relaxed">{tier.description}</p>

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
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
                      {tier.featuresPrefix}
                    </p>
                  )}
                  <ul className="space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle className={`h-4 w-4 mt-0.5 flex-shrink-0 ${tier.checkColor}`} />
                        <span className="text-sm text-gray-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#7655d6] uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl font-bold text-gray-900">Common questions</h2>
          </div>

          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-gray-100 pb-8 last:border-0 last:pb-0">
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
