"use client";

import { useEffect, useState } from "react";

const WOS = [
  { id: "WO-112", title: "Pump P-101 bearing grease",   status: "Due Today",   c: "text-amber-400 bg-amber-400/10 border border-amber-400/20" },
  { id: "WO-111", title: "Fan F-201 belt inspection",    status: "In Progress", c: "text-blue-400  bg-blue-400/10  border border-blue-400/20"  },
  { id: "WO-110", title: "Compressor quarterly PM",      status: "Overdue",     c: "text-red-400   bg-red-400/10   border border-red-400/20"   },
  { id: "WO-109", title: "Conveyor lubrication",         status: "Complete",    c: "text-green-400 bg-green-400/10 border border-green-400/20" },
];

const MOTORS = [
  { name: "Pump P-101",       base: 98.4, bar: "bg-green-500" },
  { name: "Fan F-201",        base: 87.2, bar: "bg-green-500" },
  { name: "Compressor AC-301",base: 91.7, bar: "bg-green-500" },
  { name: "Conveyor C-301",   base: 71.4, bar: "bg-amber-500" },
];

/* Pre-computed sine wave SVG paths (3 phases, 300-unit-wide viewBox, 6 cycles) */
function buildSine(amp: number, phDeg: number): string {
  const ph = (phDeg * Math.PI) / 180;
  const pts: string[] = [];
  for (let x = 0; x <= 300; x += 2) {
    const y = 24 + amp * Math.sin((x / 300) * 12 * Math.PI + ph);
    pts.push(x === 0 ? `M${x},${y.toFixed(1)}` : `L${x},${y.toFixed(1)}`);
  }
  return pts.join(" ");
}

const IA = buildSine(13, 0);
const IB = buildSine(12, 120);
const IC = buildSine(11, 240);

export default function HeroDashboard() {
  const [scores, setScores]   = useState(MOTORS.map((m) => m.base));
  const [activeWO, setActiveWO] = useState(0);
  const [mounted, setMounted]  = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => {
      setScores((prev) =>
        prev.map((s, i) => {
          const delta = (Math.random() - 0.5) * 0.4;
          return parseFloat(
            Math.min(100, Math.max(MOTORS[i].base - 3, s + delta)).toFixed(1)
          );
        })
      );
      setActiveWO((a) => (a + 1) % WOS.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  const fleet = mounted
    ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1)
    : "94.7";

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
      {/* Browser chrome */}
      <div className="bg-slate-800 px-4 py-2.5 flex items-center gap-3 border-b border-white/10">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 bg-slate-700/60 rounded px-3 py-0.5 text-xs text-slate-400 font-mono text-center max-w-[220px] mx-auto">
          tools.edgepredict.io
        </div>
        <div className="flex items-center gap-1.5 text-xs text-green-400">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-live-dot" />
          Live
        </div>
      </div>

      <div className="grid md:grid-cols-2">
        {/* ── Left: Maintenance ───────────────────── */}
        <div className="bg-slate-900 p-5 border-r border-white/10">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                Maintenance
              </p>
              <div className="flex gap-1">
                <span className="text-[10px] bg-amber-400/10 text-amber-400 px-1.5 py-0.5 rounded-full font-mono border border-amber-400/20 leading-none">
                  3 due
                </span>
                <span className="text-[10px] bg-red-400/10 text-red-400 px-1.5 py-0.5 rounded-full font-mono border border-red-400/20 leading-none">
                  1 overdue
                </span>
              </div>
            </div>
            <p className="text-sm font-semibold text-white">Today&apos;s Work Orders</p>
          </div>

          <div className="space-y-2">
            {WOS.map((wo, i) => (
              <div
                key={wo.id}
                className={`flex items-center justify-between rounded-xl px-3 py-2.5 transition-all duration-700 ${
                  i === activeWO
                    ? "bg-[#7655d6]/10 ring-1 ring-[#7655d6]/40"
                    : "bg-slate-800"
                }`}
              >
                <div className="min-w-0 flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 flex-shrink-0">{wo.id}</span>
                  <span className="text-xs text-slate-300 truncate">{wo.title}</span>
                </div>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0 ml-2 ${wo.c}`}
                >
                  {wo.status}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800">
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-slate-500">PM Compliance (30d)</span>
              <span className="text-green-400 font-mono font-semibold">94.2%</span>
            </div>
            <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: "94.2%" }} />
            </div>
          </div>
        </div>

        {/* ── Right: Monitoring ───────────────────── */}
        <div className="bg-[#0a0a0f] p-5">
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs font-bold tracking-widest text-slate-600 uppercase">Monitoring</p>
            <span className="text-xs text-slate-600 font-mono">8/8 online</span>
          </div>

          <div className="mb-4">
            <div className="text-3xl font-bold font-mono text-green-400 tabular-nums">
              {fleet}
            </div>
            <div className="text-xs text-slate-500">Fleet health score / 100</div>
          </div>

          {/* Phase current waveform (scrolling SVG) */}
          <div className="bg-slate-900/60 rounded-xl p-3 mb-3 border border-slate-800 overflow-hidden">
            <div className="flex justify-between text-xs mb-2">
              <span className="text-slate-500 font-mono">Pump P-101 · Phase Currents</span>
              <span className="text-green-400 font-mono">NORMAL</span>
            </div>
            <div className="overflow-hidden h-12 rounded relative">
              {/* 3x-wide SVG scrolls left at wave-scroll rate */}
              <svg
                viewBox="0 0 900 48"
                className="h-12 absolute top-0 left-0"
                style={{
                  width: "300%",
                  animation: "wave-scroll 4s linear infinite",
                }}
                preserveAspectRatio="none"
              >
                {/* Repeat the 300-unit pattern three times to fill 900 */}
                {[0, 300, 600].map((dx) => (
                  <g key={dx} transform={`translate(${dx},0)`}>
                    <path d={IA} stroke="#7655d6" strokeWidth="1.5" fill="none" opacity="0.85" />
                    <path d={IB} stroke="#06b6d4" strokeWidth="1.5" fill="none" opacity="0.70" />
                    <path d={IC} stroke="#a78fe8" strokeWidth="1.5" fill="none" opacity="0.60" />
                  </g>
                ))}
              </svg>
            </div>
            <div className="flex gap-4 mt-2">
              {(
                [
                  ["IA", "#7655d6", "12.4 A"],
                  ["IB", "#06b6d4", "12.1 A"],
                  ["IC", "#a78fe8", "11.8 A"],
                ] as const
              ).map(([ph, color, val]) => (
                <div key={ph} className="flex items-center gap-1">
                  <div className="w-3 h-0.5 rounded" style={{ backgroundColor: color }} />
                  <span className="text-xs font-mono text-slate-500">
                    {ph}: {val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Per-motor health bars */}
          <div className="space-y-2">
            {MOTORS.map((m, i) => (
              <div key={m.name} className="flex items-center gap-2">
                <div
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${m.bar}`}
                />
                <span className="text-xs text-slate-400 truncate w-28">{m.name}</span>
                <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${m.bar} rounded-full transition-all duration-1000`}
                    style={{ width: `${scores[i]}%` }}
                  />
                </div>
                <span className="text-xs font-mono text-slate-400 w-10 text-right tabular-nums">
                  {scores[i]}%
                </span>
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-start gap-2 text-xs text-amber-400 bg-amber-400/8 rounded-lg px-2.5 py-2 border border-amber-400/20">
            <span className="flex-shrink-0 mt-px">&#9888;</span>
            <span>
              <span className="font-semibold">Conveyor C-301:</span> load deviation elevated.
              Review during next PM.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
