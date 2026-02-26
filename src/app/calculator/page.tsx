"use client";

import { useState } from "react";
import { ArrowRight, Calculator } from "lucide-react";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Inputs {
  industry: string;
  strategy: string;
  numMotors: number;
  avgHp: number;
  failuresPerYear: number;
  downtimeHours: number;
  productionLossPerHour: number;
  scrapPerEvent: number;
  laborPerEvent: number;
  partsPerEvent: number;
}

interface LeadForm {
  name: string;
  company: string;
  email: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const fmt = (n: number) =>
  n >= 1_000_000
    ? `$${(n / 1_000_000).toFixed(2)}M`
    : `$${Math.round(n).toLocaleString()}`;

const fmtPct = (n: number) => `${Math.round(n)}%`;

function calcResults(i: Inputs) {
  const costPerEvent =
    i.downtimeHours * i.productionLossPerHour +
    i.scrapPerEvent +
    i.laborPerEvent +
    i.partsPerEvent;
  const annualRisk = i.failuresPerYear * costPerEvent;

  const preventablePct =
    i.strategy === "reactive" ? 0.75 : i.strategy === "preventive" ? 0.5 : 0.3;
  const avoidableLoss = annualRisk * preventablePct;

  const epAnnualCost = i.numMotors * 200 * 12;
  const installFee = 1000;
  const epFirstYearCost = epAnnualCost + installFee;

  const netBenefit = avoidableLoss - epAnnualCost;
  const roi = epAnnualCost > 0 ? (avoidableLoss / epAnnualCost) * 100 : 0;
  const paybackMonths =
    avoidableLoss > 0 ? Math.ceil((epFirstYearCost / avoidableLoss) * 12) : 999;

  // 5-year
  const fiveYrNoAction = annualRisk * 5;
  const fiveYrWithEP =
    annualRisk * (1 - preventablePct) * 5 + epAnnualCost * 5 + installFee;
  const fiveYrSavings = fiveYrNoAction - fiveYrWithEP;

  // Cost breakdown (annual)
  const downtimeLoss = i.failuresPerYear * i.downtimeHours * i.productionLossPerHour;
  const scrapLoss = i.failuresPerYear * i.scrapPerEvent;
  const laborLoss = i.failuresPerYear * i.laborPerEvent;
  const partsLoss = i.failuresPerYear * i.partsPerEvent;

  return {
    annualRisk,
    avoidableLoss,
    preventablePct,
    epAnnualCost,
    epFirstYearCost,
    netBenefit,
    roi,
    paybackMonths,
    fiveYrNoAction,
    fiveYrWithEP,
    fiveYrSavings,
    downtimeLoss,
    scrapLoss,
    laborLoss,
    partsLoss,
  };
}

// ─── Bar Chart (CSS) ─────────────────────────────────────────────────────────

function BarChart({ bars }: { bars: { label: string; value: number; color: string }[] }) {
  const max = Math.max(...bars.map((b) => b.value), 1);
  return (
    <div className="space-y-3">
      {bars.map((bar) => (
        <div key={bar.label}>
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>{bar.label}</span>
            <span className="font-mono font-semibold">{fmt(bar.value)}</span>
          </div>
          <div className="h-5 bg-gray-100 rounded overflow-hidden">
            <div
              className={`h-full rounded transition-all duration-500 ${bar.color}`}
              style={{ width: `${(bar.value / max) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Five-Year Comparison ────────────────────────────────────────────────────

function FiveYearChart({
  noAction,
  withEP,
}: {
  noAction: number;
  withEP: number;
}) {
  const max = Math.max(noAction, withEP, 1);
  const bars = [
    { label: "No action (5 yr)", value: noAction, color: "bg-red-400" },
    { label: "With EdgePredict (5 yr)", value: withEP, color: "bg-[#7655d6]" },
  ];
  return (
    <div className="space-y-4">
      {bars.map((bar) => (
        <div key={bar.label}>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-700 font-medium">{bar.label}</span>
            <span className="font-mono font-bold text-gray-900">{fmt(bar.value)}</span>
          </div>
          <div className="h-7 bg-gray-100 rounded overflow-hidden">
            <div
              className={`h-full rounded transition-all duration-500 ${bar.color}`}
              style={{ width: `${(bar.value / max) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Input row ───────────────────────────────────────────────────────────────

function InputRow({
  label,
  name,
  type = "number",
  value,
  onChange,
  prefix,
  suffix,
  min = "0",
}: {
  label: string;
  name: string;
  type?: string;
  value: string | number;
  onChange: (name: string, value: number | string) => void;
  prefix?: string;
  suffix?: string;
  min?: string;
}) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
      <label className="text-sm text-gray-700 flex-1 pr-4">{label}</label>
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-36 flex-shrink-0">
        {prefix && (
          <span className="px-2 text-gray-500 text-sm bg-gray-50 border-r border-gray-300 h-full flex items-center py-2">
            {prefix}
          </span>
        )}
        <input
          type={type}
          name={name}
          value={value}
          min={min}
          onChange={(e) =>
            onChange(name, type === "number" ? parseFloat(e.target.value) || 0 : e.target.value)
          }
          className="w-full px-2 py-2 text-sm text-right focus:outline-none focus:ring-1 focus:ring-[#7655d6] bg-white"
        />
        {suffix && (
          <span className="px-2 text-gray-500 text-sm bg-gray-50 border-l border-gray-300 h-full flex items-center py-2">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

const DEFAULT_INPUTS: Inputs = {
  industry: "general",
  strategy: "reactive",
  numMotors: 5,
  avgHp: 50,
  failuresPerYear: 3,
  downtimeHours: 8,
  productionLossPerHour: 2500,
  scrapPerEvent: 5000,
  laborPerEvent: 3000,
  partsPerEvent: 4000,
};

export default function CalculatorPage() {
  const [inputs, setInputs] = useState<Inputs>(DEFAULT_INPUTS);
  const [lead, setLead] = useState<LeadForm>({ name: "", company: "", email: "" });
  const [reportStatus, setReportStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const r = calcResults(inputs);

  function setInput(name: string, value: number | string) {
    setInputs((prev) => ({ ...prev, [name]: value }));
  }

  async function handleReportSubmit(e: React.FormEvent) {
    e.preventDefault();
    setReportStatus("sending");
    try {
      const res = await fetch("/api/calculator-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lead, inputs, results: r }),
      });
      setReportStatus(res.ok ? "sent" : "error");
    } catch {
      setReportStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-[#a78fe8] uppercase tracking-widest mb-3">
            Downtime Cost Estimator
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            What is reactive motor maintenance costing you?
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estimate your annual risk exposure and see whether condition monitoring pays off
            for your facility. All numbers update in real time.
          </p>
        </div>
      </section>

      {/* Calculator body */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8">

          {/* ── INPUTS ── */}
          <div className="space-y-6">

            {/* Facility profile */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="font-bold text-gray-900 mb-4 flex items-center">
                <Calculator className="h-5 w-5 text-[#7655d6] mr-2" />
                Facility Profile
              </h2>

              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-1">Industry</label>
                <select
                  value={inputs.industry}
                  onChange={(e) => setInput("industry", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7655d6]"
                >
                  <option value="general">General Manufacturing</option>
                  <option value="food">Food &amp; Beverage</option>
                  <option value="pharma">Pharmaceutical</option>
                  <option value="plastics">Plastics &amp; Rubber</option>
                  <option value="metals">Metals &amp; Fabrication</option>
                  <option value="chemical">Chemical Processing</option>
                  <option value="auto">Automotive</option>
                  <option value="textiles">Textiles</option>
                </select>
              </div>

              <div className="mb-2">
                <label className="block text-sm text-gray-700 mb-1">Current Maintenance Strategy</label>
                <select
                  value={inputs.strategy}
                  onChange={(e) => setInput("strategy", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7655d6]"
                >
                  <option value="reactive">Reactive — run to failure</option>
                  <option value="preventive">Preventive — time-based PM</option>
                  <option value="predictive">Some Predictive monitoring</option>
                </select>
              </div>

              <div className="mt-4 text-xs text-gray-500 bg-gray-50 rounded px-3 py-2">
                Strategy determines estimated avoidable loss: Reactive = 75% preventable,
                Preventive = 50%, Some Predictive = 30%.
              </div>
            </div>

            {/* Motor fleet */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="font-bold text-gray-900 mb-2">Motor Fleet</h2>
              <InputRow label="Number of critical motors" name="numMotors" value={inputs.numMotors} onChange={setInput} min="1" />
              <InputRow label="Average motor size (HP)" name="avgHp" value={inputs.avgHp} onChange={setInput} suffix="HP" />
            </div>

            {/* Failure history */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="font-bold text-gray-900 mb-2">Failure History</h2>
              <InputRow label="Motor failures per year" name="failuresPerYear" value={inputs.failuresPerYear} onChange={setInput} />
              <InputRow label="Avg downtime hours per failure" name="downtimeHours" value={inputs.downtimeHours} onChange={setInput} suffix="hrs" />
            </div>

            {/* Cost per event */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="font-bold text-gray-900 mb-2">Cost Per Failure Event</h2>
              <InputRow label="Production loss per hour" name="productionLossPerHour" value={inputs.productionLossPerHour} onChange={setInput} prefix="$" />
              <InputRow label="Scrap / WIP loss" name="scrapPerEvent" value={inputs.scrapPerEvent} onChange={setInput} prefix="$" />
              <InputRow label="Emergency labor cost" name="laborPerEvent" value={inputs.laborPerEvent} onChange={setInput} prefix="$" />
              <InputRow label="Expedited parts cost" name="partsPerEvent" value={inputs.partsPerEvent} onChange={setInput} prefix="$" />
            </div>
          </div>

          {/* ── RESULTS ── */}
          <div className="space-y-6">

            {/* Summary metrics */}
            <div className="bg-gray-900 text-white rounded-xl border border-gray-800 p-6">
              <h2 className="font-bold text-white mb-5 text-lg">Your Estimated Numbers</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Annual Risk Exposure", value: fmt(r.annualRisk), sub: "total failure costs/year", color: "text-red-400" },
                  { label: "Avoidable Loss", value: fmt(r.avoidableLoss), sub: `${fmtPct(r.preventablePct * 100)} preventable`, color: "text-yellow-400" },
                  { label: "EdgePredict / Year", value: fmt(r.epAnnualCost), sub: `${inputs.numMotors} motors × $200/mo`, color: "text-[#a78fe8]" },
                  { label: "Net Annual Benefit", value: fmt(r.netBenefit), sub: "avoidable − EP cost", color: r.netBenefit >= 0 ? "text-green-400" : "text-red-400" },
                ].map((m) => (
                  <div key={m.label} className="bg-gray-800 rounded-lg p-4">
                    <div className="text-xs text-gray-400 mb-1 uppercase tracking-wide">{m.label}</div>
                    <div className={`text-2xl font-bold font-mono ${m.color}`}>{m.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{m.sub}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-gray-700 pt-4">
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">ROI</div>
                  <div className="text-3xl font-bold text-green-400 font-mono">{fmtPct(r.roi)}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Payback (mo)</div>
                  <div className="text-3xl font-bold text-green-400 font-mono">
                    {r.paybackMonths >= 99 ? "N/A" : r.paybackMonths}
                  </div>
                </div>
              </div>
            </div>

            {/* Cost breakdown */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="font-bold text-gray-900 mb-4">Annual Cost Breakdown</h2>
              <BarChart
                bars={[
                  { label: "Production downtime loss", value: r.downtimeLoss, color: "bg-red-400" },
                  { label: "Scrap / WIP loss", value: r.scrapLoss, color: "bg-orange-400" },
                  { label: "Emergency labor", value: r.laborLoss, color: "bg-yellow-400" },
                  { label: "Expedited parts", value: r.partsLoss, color: "bg-amber-300" },
                ]}
              />
              <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between text-sm font-semibold">
                <span className="text-gray-700">Total annual risk</span>
                <span className="font-mono text-gray-900">{fmt(r.annualRisk)}</span>
              </div>
            </div>

            {/* 5-year comparison */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="font-bold text-gray-900 mb-4">5-Year Cost Comparison</h2>
              <FiveYearChart noAction={r.fiveYrNoAction} withEP={r.fiveYrWithEP} />
              <div className="mt-4 pt-3 border-t border-gray-100">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700 font-medium">5-year estimated savings</span>
                  <span className={`font-mono font-bold ${r.fiveYrSavings >= 0 ? "text-green-600" : "text-red-600"}`}>
                    {fmt(r.fiveYrSavings)}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Includes 5 years of EdgePredict monitoring.
                  Based on {fmtPct(r.preventablePct * 100)} avoidable loss reduction.
                </p>
              </div>
            </div>

            {/* Lead capture */}
            <div className="bg-[#7655d6] rounded-xl p-6 text-white">
              <h2 className="font-bold text-lg mb-2">Get this report by email</h2>
              <p className="text-purple-200 text-sm mb-5">
                We&apos;ll send a formatted PDF summary of your numbers — including a one-page
                overview you can share with your team.
              </p>

              {reportStatus === "sent" ? (
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">✓</div>
                  <p className="text-white font-semibold">Report on its way!</p>
                  <p className="text-purple-200 text-sm mt-1">Check your inbox. We&apos;ll follow up to answer any questions.</p>
                </div>
              ) : (
                <form onSubmit={handleReportSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    value={lead.name}
                    onChange={(e) => setLead((p) => ({ ...p, name: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    required
                    value={lead.company}
                    onChange={(e) => setLead((p) => ({ ...p, company: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <input
                    type="email"
                    placeholder="Work email"
                    required
                    value={lead.email}
                    onChange={(e) => setLead((p) => ({ ...p, email: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  {reportStatus === "error" && (
                    <p className="text-red-200 text-xs">
                      Something went wrong. Email us directly: anderson@edgepredict.io
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={reportStatus === "sending"}
                    className="w-full px-4 py-3 bg-white text-[#7655d6] hover:bg-gray-100 disabled:opacity-60 rounded-lg font-bold transition-colors inline-flex items-center justify-center text-sm"
                  >
                    {reportStatus === "sending" ? "Sending…" : <>Email me the full report <ArrowRight className="ml-2 h-4 w-4" /></>}
                  </button>
                </form>
              )}
            </div>

            {/* Pilot CTA */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 text-center">
              <p className="text-sm text-gray-600 mb-3">
                Ready to start capturing the savings?
              </p>
              <Link
                href="/pilot"
                className="inline-flex items-center px-6 py-3 bg-[#7655d6] hover:bg-[#5d3db8] text-white rounded-lg font-semibold transition-colors text-sm"
              >
                Start Your Free Pilot <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <p className="text-xs text-gray-400 mt-2">$200/month per motor · Free 60-day pilot</p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <p className="text-xs text-gray-400 text-center max-w-3xl mx-auto">
          All figures are estimates based on your inputs and generalized industry assumptions. Actual costs and
          savings will vary by facility, industry, and motor criticality. EdgePredict does not guarantee specific
          ROI outcomes. Consult your own maintenance and financial data for business decisions.
        </p>
      </div>
    </main>
  );
}
