import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, XCircle, MinusCircle } from "lucide-react";
import { COMPETITORS, getCompetitor } from "@/lib/compare/competitors";
import ArcadeDemos from "@/components/ArcadeDemos";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return COMPETITORS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const competitor = getCompetitor(slug);
  if (!competitor) return {};
  return {
    title: competitor.metaTitle,
    description: competitor.metaDescription,
    alternates: {
      canonical: `https://www.edgepredict.io/compare/${competitor.slug}`,
    },
    openGraph: {
      title: competitor.metaTitle,
      description: competitor.metaDescription,
      url: `https://www.edgepredict.io/compare/${competitor.slug}`,
      type: "website",
    },
  };
}

function cellStyle(val: string): string {
  if (val === "✓") return "text-green-600 font-semibold";
  if (val === "✗") return "text-slate-300";
  if (val.startsWith("✓")) return "text-[#5d3db8] font-semibold";
  if (val.includes("No") || val.includes("✗")) return "text-slate-400";
  return "text-slate-600 text-sm";
}

function CellIcon({ val }: { val: string }) {
  if (val === "✓") return <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />;
  if (val === "✗") return <XCircle className="h-4 w-4 text-slate-300 mx-auto" />;
  return null;
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const competitor = getCompetitor(slug);
  if (!competitor) notFound();

  const isMonitoring = competitor.category === "monitoring";

  return (
    <main className="bg-white text-slate-900">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0a0a0f] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest font-semibold text-[#a78fe8] mb-4">
            EdgePredict vs {competitor.name}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            {competitor.heroHeadline}
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            {competitor.heroSubhead}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://tools.edgepredict.io/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#7655d6] text-white font-semibold rounded-xl hover:bg-[#5d3db8] transition-all duration-200 hover:shadow-xl hover:shadow-[#7655d6]/30 hover:scale-[1.02]"
            >
              Get Started Free <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/pilot"
              className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 text-slate-300 font-semibold rounded-xl hover:border-[#7655d6] hover:text-white transition-all duration-200"
            >
              Start Free Pilot <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRICING CONTEXT ──────────────────────────────────────── */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Competitor pricing */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
                {competitor.name} pricing
              </p>
              <p className="text-4xl font-bold text-slate-900 mb-3">{competitor.pricingLabel}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{competitor.pricingContext}</p>
            </div>
            {/* EdgePredict pricing */}
            <div className="bg-[#0a0a0f] rounded-2xl border border-[#7655d6]/30 p-8">
              <p className="text-xs font-semibold text-[#a78fe8] uppercase tracking-widest mb-3">
                EdgePredict pricing
              </p>
              <p className="text-4xl font-bold text-white mb-3">
                {isMonitoring ? "$200/mo per motor" : "$99/mo per site"}
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                {isMonitoring
                  ? "Hardware included. 60-day free pilot. Cellular connectivity, no IT required. Full maintenance platform also included — unlimited users and work orders."
                  : "Flat rate for your entire site. Unlimited users. Unlimited work orders. No per-user math, no surprise renewals. Free tier also available with no credit card required."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING MATH (per-user competitors) ─────────────────── */}
      {competitor.hasPricingScale && competitor.pricingScale.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-[#7655d6] uppercase tracking-widest mb-3">
                Pricing at scale
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                The math that changes everything
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto text-sm">
                {isMonitoring
                  ? "See how monitoring costs compare as you add more motors."
                  : "Per-user pricing seems reasonable at first. Watch what happens as your team grows."}
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-sm border-collapse min-w-[480px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="text-left py-4 px-6 text-slate-500 font-medium">
                      {isMonitoring ? "Motors monitored" : "Team size"}
                    </th>
                    <th className="text-center py-4 px-6 text-slate-600 font-medium">
                      {competitor.name}
                    </th>
                    <th className="text-center py-4 px-6 font-bold text-white bg-[#7655d6]">
                      EdgePredict
                    </th>
                    <th className="text-center py-4 px-6 text-slate-600 font-medium">
                      You save
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {competitor.pricingScale.map((row, i) => (
                    <tr
                      key={row.size}
                      className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}
                    >
                      <td className="py-4 px-6 font-medium text-slate-700">{row.size}</td>
                      <td className="py-4 px-6 text-center text-slate-500">{row.them}</td>
                      <td className="py-4 px-6 text-center bg-[#7655d6]/5 text-[#5d3db8] font-semibold">
                        {row.ep}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {row.epWins ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-full font-semibold text-xs">
                            {row.savings}
                          </span>
                        ) : (
                          <span className="text-slate-400 text-xs">{row.savings}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-slate-400 text-center">
              {competitor.name} pricing estimated from publicly available information. Prices may vary by tier or contract.
            </p>
          </div>
        </section>
      )}

      {/* ── 3-YEAR TCO ───────────────────────────────────────────── */}
      {competitor.tco && (
        <section className="py-20 bg-[#0a0a0f] text-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-[#a78fe8] uppercase tracking-widest mb-3">
                3-Year cost of ownership
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The number nobody puts in the demo
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto text-sm">
                {competitor.tco.context}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* TCO table */}
              <div className="overflow-hidden rounded-2xl border border-slate-700">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-4 px-5 text-slate-400 font-medium"></th>
                      <th className="text-center py-4 px-5 text-slate-400 font-medium">{competitor.name}</th>
                      <th className="text-center py-4 px-5 font-bold text-white bg-[#7655d6]/30">EdgePredict</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitor.tco.rows.map((row, i) => (
                      <tr key={row.label} className={`border-b border-slate-800 ${i % 2 === 0 ? "bg-slate-900/50" : "bg-slate-800/30"}`}>
                        <td className="py-3 px-5 text-slate-300 font-medium text-xs">{row.label}</td>
                        <td className="py-3 px-5 text-center text-slate-400">{row.them}</td>
                        <td className="py-3 px-5 text-center text-[#a78fe8] font-semibold bg-[#7655d6]/10">{row.ep}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t border-slate-600 bg-slate-800/60">
                      <td className="py-4 px-5 text-xs font-bold text-slate-400 uppercase tracking-wider">3-Year Total</td>
                      <td className="py-4 px-5 text-center font-bold text-slate-300">{competitor.tco.totalThem}</td>
                      <td className="py-4 px-5 text-center font-bold text-[#a78fe8] bg-[#7655d6]/10">{competitor.tco.totalEp}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Savings callout */}
              <div className="flex flex-col justify-center">
                <div className="rounded-2xl border border-[#7655d6]/40 bg-[#7655d6]/10 p-8">
                  <p className="text-xs font-semibold text-[#a78fe8] uppercase tracking-widest mb-3">
                    You keep
                  </p>
                  <p className="text-5xl md:text-6xl font-bold text-white mb-4">
                    {competitor.tco.totalSavings}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Over 3 years, switching to EdgePredict Pro puts {competitor.tco.totalSavings} back into your maintenance budget — money that could go toward parts, sensors, or headcount.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 text-center max-w-2xl mx-auto">
              {competitor.tco.disclaimer}
            </p>
          </div>
        </section>
      )}

      {/* ── FEATURE COMPARISON TABLE ────────────────────────────── */}
      <section className={`py-20 ${competitor.hasPricingScale || competitor.tco ? "bg-slate-50" : "bg-white"}`}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#7655d6] uppercase tracking-widest mb-3">
              Feature comparison
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Side by side
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">
              No footnotes. No asterisks.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-sm border-collapse min-w-[480px]">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-6 text-slate-500 font-medium bg-white">Feature</th>
                  <th className="text-center py-4 px-6 font-bold text-white bg-[#7655d6]">EdgePredict</th>
                  <th className="text-center py-4 px-6 text-slate-600 font-medium bg-slate-50">{competitor.name}</th>
                </tr>
              </thead>
              <tbody>
                {competitor.featureRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}
                  >
                    <td className="py-3 px-6 text-slate-700 font-medium">{row.feature}</td>
                    <td className={`py-3 px-6 text-center bg-[#7655d6]/5 ${cellStyle(row.ep)}`}>
                      {row.ep === "✓" || row.ep === "✗" ? (
                        <CellIcon val={row.ep} />
                      ) : (
                        <span>{row.ep}</span>
                      )}
                    </td>
                    <td className={`py-3 px-6 text-center ${cellStyle(row.them)}`}>
                      {row.them === "✓" || row.them === "✗" ? (
                        <CellIcon val={row.them} />
                      ) : (
                        <span>{row.them}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── WHAT THEY DO WELL ───────────────────────────────────── */}
      <section className={`py-16 ${competitor.hasPricingScale ? "bg-white" : "bg-slate-50"}`}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
              Honest take
            </p>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              What {competitor.name} does well
            </h2>
            <p className="text-slate-600 leading-relaxed">{competitor.whatTheyDoWell}</p>
          </div>
        </div>
      </section>

      {/* ── WHY TEAMS SWITCH ────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#7655d6] uppercase tracking-widest mb-3">
              Why teams switch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              What changes when you move to EdgePredict
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {competitor.switchReasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-white rounded-2xl border border-slate-200 p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-[#7655d6]/10 flex items-center justify-center mb-5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#7655d6]" />
                </div>
                <h3 className="font-bold text-slate-900 mb-3">{reason.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{reason.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARCADE DEMOS ─────────────────────────────────────────── */}
      <ArcadeDemos />

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#7655d6] uppercase tracking-widest mb-3">
              FAQ
            </p>
            <h2 className="text-3xl font-bold text-slate-900">Common questions</h2>
          </div>

          <div className="space-y-8">
            {competitor.faqs.map((faq) => (
              <div key={faq.q} className="border-b border-slate-200 pb-8 last:border-0 last:pb-0">
                <h3 className="font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-sm text-slate-500">
            More questions?{" "}
            <Link href="/contact" className="text-[#7655d6] hover:underline font-medium">
              Talk to an engineer
            </Link>
          </div>
        </div>
      </section>

      {/* ── COMPARE LINKS ────────────────────────────────────────── */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6 text-center">
            More comparisons
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {COMPETITORS.filter((c) => c.slug !== competitor.slug).map((c) => (
              <Link
                key={c.slug}
                href={`/compare/${c.slug}`}
                className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-sm text-slate-600 hover:border-[#7655d6] hover:text-[#7655d6] transition-colors"
              >
                vs {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0a0a0f] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">See it yourself. Free.</h2>
          <p className="text-slate-400 mb-10 text-lg">
            No credit card. No sales call. Be running real work orders in under two hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://tools.edgepredict.io/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#7655d6] text-white font-semibold rounded-xl hover:bg-[#5d3db8] transition-all duration-200 hover:shadow-xl hover:shadow-[#7655d6]/30 hover:scale-[1.02]"
            >
              Get Started Free <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 text-slate-300 font-semibold rounded-xl hover:border-[#7655d6] hover:text-white transition-all duration-200"
            >
              See Full Pricing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
