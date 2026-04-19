import Link from "next/link";
import { ArrowRight, Cpu, Database, Radio, Shield, Activity, Gauge } from "lucide-react";

export const metadata = {
  title: "How EdgePredict Monitoring Works — Engineering Details",
  description:
    "The engineering behind EdgePredict motor monitoring: ATM90E32 metering, ESP32 edge compute, EWMA baselines with state bucketing, z-score scoring, MQTT to InfluxDB pipeline, and Cloudflare Tunnel remote access.",
  alternates: {
    canonical: "https://www.edgepredict.io/monitoring/how-it-works",
  },
  openGraph: {
    title: "How EdgePredict Monitoring Works — Engineering Details",
    description:
      "The engineering behind EdgePredict motor monitoring. Written for reliability engineers who want to know what's under the hood.",
    url: "https://www.edgepredict.io/monitoring/how-it-works",
    type: "website",
  },
};

type Section = {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  lead: string;
  details: string[];
};

const SECTIONS: Section[] = [
  {
    Icon: Gauge,
    title: "ATM90E32 metering IC",
    lead: "Utility-grade current and power measurement. Catches the stuff cheap sensors miss — imbalance, harmonics, power factor drift.",
    details: [
      "Three-phase metering chip with per-phase RMS current, voltage, power factor, and harmonic content.",
      "Accurate to 0.1% for energy and sub-percent for current across the operating range.",
      "Runs on the EdgePredict gateway in parallel with the edge compute layer — no sampling compromises.",
    ],
  },
  {
    Icon: Cpu,
    title: "ESP32 edge processor",
    lead: "The gateway does the thinking on-site. You get a motor health score every 2 seconds — no cloud lag, no bandwidth bills.",
    details: [
      "Waveform data processed on the edge device. Health score computed locally.",
      "Only summary metrics transmitted, not raw waveforms.",
      "Works on intermittent connectivity — buffers locally if the network drops.",
    ],
  },
  {
    Icon: Activity,
    title: "EWMA baseline learning with state bucketing",
    lead: "Learns what normal looks like for each motor, including loaded vs unloaded and VFD speed ranges. Doesn't cry wolf when your press ramps up.",
    details: [
      "Exponentially weighted moving average baselines updated continuously.",
      "Separate baselines per motor operating state (loaded, unloaded, VFD speed bands).",
      "Prevents false alarms during normal load variation — the biggest cause of alert fatigue with threshold-based monitoring.",
    ],
  },
  {
    Icon: Shield,
    title: "Z-score deviation scoring",
    lead: "Health score derived from statistical deviation, not fixed thresholds. Abnormal current patterns produce statistically meaningful alerts.",
    details: [
      "Each sample's z-score is computed relative to the active baseline bucket.",
      "Persistent deviation across multiple samples triggers scoring changes — transient noise is filtered.",
      "Transition lockout prevents spurious scoring during motor start and stop transients. Alert window opens only after stable operating conditions are confirmed.",
    ],
  },
  {
    Icon: Database,
    title: "MQTT → Telegraf → InfluxDB pipeline",
    lead: "Data flows on open standards. Bring your own tooling if you want to — or use the EdgePredict dashboard out of the box.",
    details: [
      "Edge device publishes via MQTT to a Telegraf listener.",
      "Telegraf writes to InfluxDB time-series database on the EdgePredict cloud.",
      "Grafana dashboards optional for advanced users who want custom views or to integrate with existing observability stacks.",
    ],
  },
  {
    Icon: Radio,
    title: "Cloudflare Tunnel for remote access",
    lead: "Secure outbound-only tunnel for remote diagnostics. No inbound ports. No VPN required.",
    details: [
      "Tunnel initiated from the gateway — nothing inbound to your network.",
      "Used for remote diagnostics only, with per-pilot credentials.",
      "If your IT policy requires it, we can disable remote access entirely and run the gateway in isolated mode.",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0a0a0f] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest font-semibold text-[#a78fe8] mb-4">
            How It Works
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            The engineering behind EdgePredict monitoring.
          </h1>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
            This page is for reliability engineers and maintenance leaders who want to know
            what&apos;s under the hood before they pilot. If you just want the outcomes —{" "}
            <Link href="/features#motor-monitoring" className="text-[#a78fe8] hover:text-white underline">
              the features page has those
            </Link>.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/monitoring"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#7655d6] text-white font-semibold rounded-xl hover:bg-[#5d3db8] transition-all duration-200 hover:shadow-lg hover:shadow-[#7655d6]/30 hover:scale-[1.02]"
            >
              See Monitoring Overview <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://tools.edgepredict.io/signup"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-300 rounded-xl hover:border-slate-400 hover:text-white transition-all duration-200"
            >
              Start a Pilot
            </a>
          </div>
        </div>
      </section>

      {/* ── Sections ────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-14">
          {SECTIONS.map(({ Icon, title, lead, details }) => (
            <section key={title} className="border-b border-slate-200 pb-14 last:border-0 last:pb-0">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#7655d6]/10 text-[#7655d6] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
                    {title}
                  </h2>
                  <p className="text-base text-slate-700 leading-relaxed">
                    {lead}
                  </p>
                </div>
              </div>
              <ul className="pl-[60px] space-y-2">
                {details.map((d, i) => (
                  <li key={i} className="text-sm text-slate-500 leading-relaxed list-disc">
                    {d}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      {/* ── Bottom CTA ──────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0a0a0f] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pilot it on one motor first.
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mb-8">
            60 days. Hardware included. If it isn&apos;t catching things your current program misses,
            you send it back.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://tools.edgepredict.io/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#7655d6] text-white font-semibold rounded-xl hover:bg-[#5d3db8] transition-all duration-200 hover:shadow-xl hover:shadow-[#7655d6]/30 hover:scale-[1.02]"
            >
              Start a Pilot <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/features#motor-monitoring"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-700 text-white font-semibold rounded-xl hover:border-[#a78fe8] hover:text-[#a78fe8] transition-all duration-200"
            >
              Back to Features
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
