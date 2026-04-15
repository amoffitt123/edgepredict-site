"use client";

import { useEffect, useState } from "react";

const R = 240;
const CX = 440;
const CY = 380;

function polar(angleDeg: number, radius: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: CX + Math.cos(rad) * radius, y: CY + Math.sin(rad) * radius };
}

type SpokeId = "reports" | "wo" | "pm" | "insp" | "parts" | "sched";

type Spoke = {
  id: SpokeId;
  title: string;
  sub: string;
  icon: React.ReactNode;
  angle: number;
};

const SPOKES: Spoke[] = [
  { id: "reports", angle: 0,   title: "Reports & Dashboards", sub: "MTBF · PM compliance",
    icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M7 15l4-4 4 3 5-6"/></svg>) },
  { id: "wo",      angle: 60,  title: "Work Orders",          sub: "10-status lifecycle",
    icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></svg>) },
  { id: "pm",      angle: 120, title: "Preventative",         sub: "Auto-generates WOs",
    icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>) },
  { id: "insp",    angle: 180, title: "Inspections",          sub: "Checklists · findings",
    icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>) },
  { id: "parts",   angle: 240, title: "Parts & Inventory",    sub: "Stock · reserve · reorder",
    icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m7.5 4.27 9 5.15M21 8 12 13 3 8M12 22V13"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>) },
  { id: "sched",   angle: 300, title: "Scheduling",           sub: "Drag · assign · calendar",
    icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>) },
];

function Preview({ id }: { id: SpokeId }) {
  switch (id) {
    case "wo":
      return (
        <div className="prev prev-wo">
          <div className="prev-row"><span className="mono">WO-4821</span><span className="prev-arrow">→</span></div>
          <div className="prev-pills">
            <span className="pill-wo pill-wo-1">Open</span>
            <span className="pill-wo pill-wo-2">In Progress</span>
            <span className="pill-wo pill-wo-3">✓ Done</span>
          </div>
        </div>
      );
    case "pm":
      return (
        <div className="prev prev-pm">
          <div className="pm-row pm-row-0">
            <span className="pm-date">Today</span>
            <span className="pm-task">Pump-14 · Lube</span>
            <span className="pm-int">30d</span>
          </div>
          <div className="pm-row pm-row-1">
            <span className="pm-date">+3d</span>
            <span className="pm-task">Motor M-02 · Vibration</span>
            <span className="pm-int">90d</span>
          </div>
          <div className="pm-row pm-row-2">
            <span className="pm-date">+9d</span>
            <span className="pm-task">Conveyor · Belt</span>
            <span className="pm-int">180d</span>
          </div>
          <div className="pm-out">→ auto-creates <span className="mono">WO-4823</span></div>
        </div>
      );
    case "insp":
      return (
        <div className="prev prev-insp">
          {["Bearing visual", "Grease level", "Guard intact", "Leak check"].map((t, i) => (
            <div key={i} className="ins-row">
              <span className={`ins-box ins-box-${i}`} />
              <span>{t}</span>
            </div>
          ))}
        </div>
      );
    case "parts":
      return (
        <div className="prev prev-parts">
          <div className="parts-head">
            <span className="mono">SKF-6205</span>
            <span className="parts-count"><span className="parts-n">8</span> in stock</span>
          </div>
          <div className="parts-bar"><div className="parts-fill" /></div>
          <div className="parts-tag">◆ 2 reserved for WO-4821</div>
        </div>
      );
    case "sched":
      return (
        <div className="prev prev-sched">
          <div className="sch-tech">
            <div className="sch-row"><span className="sch-label">Mike R.</span><span className="sch-slot sch-slot-a" /></div>
            <div className="sch-row"><span className="sch-label">Ana L.</span><span className="sch-slot" /></div>
          </div>
          <div className="sch-card">WO-4821</div>
          <div className="sch-check">✓ Tue 9:30</div>
        </div>
      );
    case "reports":
      return (
        <div className="prev prev-reports">
          <div className="rep-kpi"><span className="rep-kpi-n">94.7%</span><span className="rep-kpi-l">PM compliance</span></div>
          <div className="rep-bars">
            {[55, 72, 48, 85, 66, 92].map((h, i) => (
              <div key={i} className={`rep-bar rep-bar-${i}`} style={{ ["--h" as never]: `${h}%` }} />
            ))}
          </div>
        </div>
      );
  }
}

export default function PlatformFlowCard() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setActiveIdx((i) => (i + 1) % SPOKES.length), 3800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="pf-root">
      <style>{CSS}</style>

      <div className="pf-stage">
        <svg className="pf-svg" viewBox="0 0 1280 760" preserveAspectRatio="xMidYMid meet">
          <defs>
            <radialGradient id="pfHub" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#7655d6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#7655d6" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="pfCyanLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
              <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.7" />
            </linearGradient>
          </defs>

          <circle cx={CX} cy={CY} r="180" fill="url(#pfHub)" />

          {SPOKES.map((s, i) => {
            const end = polar(s.angle, R - 18);
            const active = mounted && i === activeIdx;
            return (
              <line
                key={s.id}
                x1={CX}
                y1={CY}
                x2={end.x}
                y2={end.y}
                stroke={active ? "#a78bfa" : "#3b3b55"}
                strokeWidth={active ? 2 : 1.5}
                strokeDasharray="5 7"
                strokeLinecap="round"
                style={{
                  filter: active ? "drop-shadow(0 0 6px rgba(167,139,250,0.7))" : "none",
                  transition: "stroke 0.3s ease, stroke-width 0.3s ease, filter 0.3s ease",
                }}
              />
            );
          })}

          <rect x="1000" y="200" width="240" height="360" rx="18"
            fill="rgba(8,47,73,0.35)" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.9" />

          <path
            d={`M 1000 280 C 850 240, 720 220, ${polar(60, R - 18).x} ${polar(60, R - 18).y}`}
            fill="none" stroke="url(#pfCyanLine)" strokeWidth="2" strokeDasharray="6 6"
            className="pf-cyan-path"
            style={{ filter: "drop-shadow(0 0 6px rgba(34,211,238,0.55))" }}
          />
          <path
            d={`M 1000 440 C 850 470, 720 500, ${polar(120, R - 18).x} ${polar(120, R - 18).y}`}
            fill="none" stroke="url(#pfCyanLine)" strokeWidth="2" strokeDasharray="6 6"
            className="pf-cyan-path pf-cyan-path-2"
            style={{ filter: "drop-shadow(0 0 6px rgba(34,211,238,0.55))" }}
          />
        </svg>

        <div className="pf-hub" style={{ left: `${(CX / 1280) * 100}%`, top: `${(CY / 760) * 100}%` }}>
          <div className="pf-hub-kicker">The Maintenance Platform</div>
          <div className="pf-hub-title">EdgePredict</div>
          <div className="pf-hub-pill">$0 · unlimited users</div>
        </div>

        {SPOKES.map((s, i) => {
          const p = polar(s.angle, R);
          const active = mounted && i === activeIdx;
          return (
            <div
              key={s.id}
              className={`pf-spoke ${active ? "pf-active" : ""}`}
              style={{ left: `${(p.x / 1280) * 100}%`, top: `${(p.y / 760) * 100}%` }}
            >
              <div className="pf-spoke-head">
                <div className="pf-spoke-ico">{s.icon}</div>
                <div>
                  <div className="pf-spoke-title">{s.title}</div>
                  <div className="pf-spoke-sub">{s.sub}</div>
                </div>
              </div>
              <Preview id={s.id} />
            </div>
          );
        })}

        <div className="pf-monitor" style={{ left: `${(1120 / 1280) * 100}%`, top: `${(380 / 760) * 100}%` }}>
          <div className="pf-monitor-badge">OPTIONAL · $200/MO</div>
          <div className="pf-monitor-title"><span className="pf-monitor-dot" />Motor Monitoring</div>
          <div className="pf-monitor-sub">Clamp-on sensors · ESA · 2-sec health score</div>
          <svg className="pf-spark" viewBox="0 0 200 36" preserveAspectRatio="none">
            <path d="M0 22 L20 20 L35 18 L50 22 L70 14 L85 16 L100 8 L120 24 L140 10 L160 6 L180 22 L200 12" />
          </svg>
          <div className="mon-metrics">
            <div><span className="mon-k">71.4</span><span className="mon-l">health</span></div>
            <div><span className="mon-k">+32%</span><span className="mon-l">vibration</span></div>
          </div>
          <div className="pf-monitor-flag">Anomaly → auto-creates <span className="pf-wo">WO</span></div>
        </div>
      </div>

      {/* Stacked fallback */}
      <div className="pf-stacked">
        <div className="pf-stacked-hub">
          <div className="pf-hub-kicker">The Maintenance Platform</div>
          <div className="pf-hub-title">EdgePredict</div>
          <div className="pf-hub-pill">$0 · unlimited users</div>
        </div>
        {SPOKES.map((s) => (
          <div key={s.id} className="pf-stacked-spoke">
            <div className="pf-spoke-head">
              <div className="pf-spoke-ico">{s.icon}</div>
              <div>
                <div className="pf-spoke-title">{s.title}</div>
                <div className="pf-spoke-sub">{s.sub}</div>
              </div>
            </div>
            <Preview id={s.id} />
          </div>
        ))}
        <div className="pf-stacked-monitor">
          <div className="pf-monitor-badge">OPTIONAL · $200/MO</div>
          <div className="pf-monitor-title"><span className="pf-monitor-dot" /> Motor Monitoring</div>
          <div className="pf-monitor-sub">When sensors detect drift, the platform creates the work automatically.</div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
  .pf-root {
    --pf-text: #e6e6f0;
    --pf-muted: #8a8aa3;
    --pf-stroke: #23243a;
    --pf-primary: #7655d6;
    --pf-primary-soft: #a78bfa;
    --pf-accent: #22d3ee;
    color: var(--pf-text);
    font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", sans-serif;
    position: relative;
  }

  .pf-stage {
    position: relative; width: 100%;
    aspect-ratio: 1280 / 760;
    max-width: 1280px; margin: 0 auto; display: block;
  }
  .pf-svg { position: absolute; inset: 0; width: 100%; height: 100%; }

  .pf-hub, .pf-spoke, .pf-monitor { position: absolute; transform: translate(-50%, -50%); }

  .pf-hub {
    z-index: 3;
    background: linear-gradient(180deg, rgba(118,85,214,0.28), rgba(15,23,42,0.95));
    border: 1px solid rgba(167,139,250,0.55);
    border-radius: 18px; padding: 18px 22px; min-width: 220px; text-align: center;
    box-shadow: 0 0 0 6px rgba(118,85,214,0.12), 0 30px 60px -20px rgba(118,85,214,0.5);
    backdrop-filter: blur(6px);
  }
  .pf-hub-kicker { font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--pf-primary-soft); }
  .pf-hub-title { font-size: 22px; font-weight: 700; letter-spacing: -0.01em; margin-top: 4px; color: #fff; }
  .pf-hub-pill {
    display: inline-block; margin-top: 8px;
    font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase;
    padding: 4px 10px; border-radius: 999px;
    background: rgba(118,85,214,0.22); color: var(--pf-primary-soft); border: 1px solid rgba(118,85,214,0.45);
  }

  .pf-spoke {
    z-index: 2;
    width: 230px;
    background: rgba(15,23,42,0.92);
    border: 1px solid var(--pf-stroke);
    border-radius: 14px; padding: 10px 12px;
    backdrop-filter: blur(6px);
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }
  .pf-spoke.pf-active {
    border-color: var(--pf-primary-soft);
    box-shadow: 0 0 0 4px rgba(167,139,250,0.16), 0 20px 40px -20px rgba(118,85,214,0.6);
    transform: translate(-50%, calc(-50% - 2px));
  }
  .pf-spoke-head { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
  .pf-spoke-ico {
    width: 30px; height: 30px; border-radius: 8px;
    display: grid; place-items: center;
    background: rgba(118,85,214,0.18); color: var(--pf-primary-soft); flex: 0 0 30px;
  }
  .pf-spoke-title { font-size: 13px; font-weight: 600; line-height: 1.2; color: var(--pf-text); }
  .pf-spoke-sub { font-size: 11px; color: var(--pf-muted); margin-top: 2px; }

  .mono { font-family: ui-monospace, SFMono-Regular, monospace; font-size: 11px; }

  /* ─ Preview common ────────────────────────────────────────── */
  .prev {
    background: rgba(2,6,23,0.6);
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 10px;
    padding: 8px 10px;
    min-height: 78px;
    position: relative;
    overflow: hidden;
  }

  /* ─ WO preview ────────────────────────────────────────────── */
  .prev-wo .prev-row {
    display: flex; justify-content: space-between; align-items: center;
    font-size: 11px; color: var(--pf-muted); margin-bottom: 8px;
  }
  .prev-wo .prev-arrow { color: var(--pf-primary-soft); }
  .prev-wo .prev-pills { position: relative; height: 24px; }
  .pill-wo {
    position: absolute; left: 0; top: 0;
    font-size: 11px; font-weight: 600;
    padding: 4px 10px; border-radius: 6px;
    opacity: 0;
  }
  .pill-wo-1 { background: rgba(251,191,36,0.18); color: #fbbf24; border: 1px solid rgba(251,191,36,0.35); }
  .pill-wo-2 { background: rgba(59,130,246,0.18); color: #60a5fa; border: 1px solid rgba(59,130,246,0.35); }
  .pill-wo-3 { background: rgba(52,211,153,0.18); color: #34d399; border: 1px solid rgba(52,211,153,0.35); opacity: 1; }
  .pf-spoke.pf-active .pill-wo { animation: pf-wo 3.4s ease-in-out forwards; }
  .pf-spoke.pf-active .pill-wo-1 { animation-delay: 0s; }
  .pf-spoke.pf-active .pill-wo-2 { animation-delay: 1.1s; }
  .pf-spoke.pf-active .pill-wo-3 { animation-delay: 2.2s; opacity: 0; }
  @keyframes pf-wo {
    0%      { opacity: 0; transform: translateY(4px); }
    8%,28%  { opacity: 1; transform: translateY(0); }
    33%,100%{ opacity: 0; transform: translateY(-4px); }
  }
  .pf-spoke.pf-active .pill-wo-3 { animation: pf-wo-final 3.4s ease-out forwards; animation-delay: 2.2s; }
  @keyframes pf-wo-final {
    0%     { opacity: 0; transform: translateY(4px); }
    20%    { opacity: 1; transform: translateY(0); }
    100%   { opacity: 1; transform: translateY(0); }
  }

  /* ─ PM preview (upcoming schedule) ───────────────────────── */
  .prev-pm { padding: 6px 8px; }
  .pm-row {
    display: grid;
    grid-template-columns: 38px 1fr auto;
    align-items: center; gap: 6px;
    padding: 3px 6px;
    border-radius: 5px;
    font-size: 10px;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.05);
    margin-bottom: 3px;
    transition: background 0.3s ease, border-color 0.3s ease;
  }
  .pm-date { color: var(--pf-muted); font-family: ui-monospace, monospace; font-weight: 600; }
  .pm-task { color: var(--pf-text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .pm-int {
    font-size: 9px; letter-spacing: 0.05em;
    color: var(--pf-primary-soft); font-family: ui-monospace, monospace;
    background: rgba(118,85,214,0.12); padding: 1px 5px; border-radius: 3px;
  }
  .pm-row-0 {
    background: rgba(167,139,250,0.12); border-color: rgba(167,139,250,0.35);
  }
  .pf-spoke.pf-active .pm-row-0 { animation: pf-pm-active 3.4s ease-in-out forwards; }
  @keyframes pf-pm-active {
    0%     { background: rgba(255,255,255,0.03); border-color: rgba(255,255,255,0.05); }
    30%    { background: rgba(167,139,250,0.22); border-color: rgba(167,139,250,0.6); }
    100%   { background: rgba(167,139,250,0.14); border-color: rgba(167,139,250,0.4); }
  }
  .prev-pm .pm-out {
    font-size: 10px; color: var(--pf-primary-soft);
    padding-left: 6px; padding-top: 2px;
    opacity: 1;
  }
  .pf-spoke.pf-active .pm-out { animation: pf-pm-out 3.4s ease-in-out forwards; }
  @keyframes pf-pm-out {
    0%,35% { opacity: 0; transform: translateY(3px); }
    55%,100%{ opacity: 1; transform: translateY(0); }
  }

  /* ─ Inspections preview ───────────────────────────────────── */
  .prev-insp { padding: 6px 10px; }
  .ins-row {
    display: flex; align-items: center; gap: 8px;
    font-size: 11px; color: var(--pf-muted);
    padding: 2px 0;
  }
  .ins-box {
    display: inline-block; width: 12px; height: 12px; border-radius: 3px;
    background: rgba(52,211,153,0.18); border: 1.5px solid rgba(52,211,153,0.6);
    position: relative;
  }
  .ins-box::after {
    content: "✓"; position: absolute; inset: 0;
    display: grid; place-items: center;
    font-size: 10px; font-weight: 700;
    color: #34d399; opacity: 1;
  }
  .pf-spoke.pf-active .ins-box { animation: pf-ins 3.4s ease-out forwards; }
  .pf-spoke.pf-active .ins-box::after { animation: pf-ins-check 3.4s ease-out forwards; }
  .pf-spoke.pf-active .ins-box-0, .pf-spoke.pf-active .ins-box-0::after { animation-delay: 0.2s; }
  .pf-spoke.pf-active .ins-box-1, .pf-spoke.pf-active .ins-box-1::after { animation-delay: 0.8s; }
  .pf-spoke.pf-active .ins-box-2, .pf-spoke.pf-active .ins-box-2::after { animation-delay: 1.4s; }
  .pf-spoke.pf-active .ins-box-3, .pf-spoke.pf-active .ins-box-3::after { animation-delay: 2.0s; }
  @keyframes pf-ins {
    0%    { background: transparent; border-color: rgba(255,255,255,0.2); }
    20%,100% { background: rgba(52,211,153,0.18); border-color: rgba(52,211,153,0.6); }
  }
  @keyframes pf-ins-check {
    0%    { opacity: 0; }
    25%,100%{ opacity: 1; }
  }

  /* ─ Parts preview ─────────────────────────────────────────── */
  .prev-parts .parts-head {
    display: flex; justify-content: space-between; align-items: baseline;
    font-size: 11px; color: var(--pf-muted); margin-bottom: 6px;
  }
  .parts-count .parts-n {
    color: #fff; font-weight: 700; font-family: ui-monospace, monospace;
  }
  .parts-bar {
    width: 100%; height: 8px; border-radius: 4px;
    background: rgba(255,255,255,0.06); overflow: hidden;
    margin-bottom: 6px;
  }
  .parts-fill {
    width: 60%; height: 100%;
    background: linear-gradient(90deg, #a78bfa, #7655d6);
  }
  .pf-spoke.pf-active .parts-fill { animation: pf-parts-fill 3.4s ease-out forwards; }
  @keyframes pf-parts-fill {
    0%    { width: 80%; }
    60%,100% { width: 60%; }
  }
  .parts-tag {
    font-size: 10px; color: var(--pf-primary-soft);
    opacity: 1;
  }
  .pf-spoke.pf-active .parts-tag { animation: pf-parts-tag 3.4s ease-out forwards; }
  @keyframes pf-parts-tag {
    0%,40%  { opacity: 0; transform: translateY(3px); }
    60%,100%{ opacity: 1; transform: translateY(0); }
  }

  /* ─ Scheduling preview ────────────────────────────────────── */
  .prev-sched { position: relative; padding: 8px 10px 10px; }
  .sch-tech { display: flex; flex-direction: column; gap: 4px; }
  .sch-row {
    display: flex; align-items: center; gap: 8px;
    background: rgba(255,255,255,0.03); border-radius: 5px; padding: 3px 6px;
    font-size: 10px; color: var(--pf-muted);
  }
  .sch-label { width: 46px; }
  .sch-slot {
    flex: 1; height: 14px; border-radius: 3px;
    background: rgba(255,255,255,0.04); border: 1px dashed rgba(255,255,255,0.08);
  }
  .sch-slot-a {
    background: rgba(167,139,250,0.22); border: 1px solid rgba(167,139,250,0.55);
  }
  .pf-spoke.pf-active .sch-slot-a { animation: pf-sch-slot 3.4s ease-out forwards; }
  @keyframes pf-sch-slot {
    0%,40% { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.08); }
    60%,100% { background: rgba(167,139,250,0.22); border: 1px solid rgba(167,139,250,0.55); }
  }
  .sch-card {
    position: absolute;
    left: 10px; top: 6px;
    font-size: 10px; font-family: ui-monospace, monospace;
    padding: 3px 8px; border-radius: 5px;
    background: rgba(118,85,214,0.35); color: #fff;
    border: 1px solid rgba(167,139,250,0.6);
    box-shadow: 0 4px 10px rgba(0,0,0,0.4);
    opacity: 0;
  }
  .pf-spoke.pf-active .sch-card { animation: pf-sch-card 3.4s ease-in-out forwards; }
  @keyframes pf-sch-card {
    0%    { left: 10px; top: 6px; opacity: 1; transform: rotate(-3deg); }
    50%   { left: 60px; top: 28px; opacity: 1; transform: rotate(0); }
    65%,100% { left: 60px; top: 28px; opacity: 0; }
  }
  .sch-check {
    position: absolute; right: 10px; bottom: 6px;
    font-size: 10px; color: #34d399; font-weight: 600;
    opacity: 1;
  }
  .pf-spoke.pf-active .sch-check { animation: pf-sch-check 3.4s ease-out forwards; }
  @keyframes pf-sch-check {
    0%,55%  { opacity: 0; }
    70%,100%{ opacity: 1; }
  }

  /* ─ Reports preview ───────────────────────────────────────── */
  .prev-reports { display: flex; align-items: stretch; gap: 10px; }
  .rep-kpi { display: flex; flex-direction: column; justify-content: center; min-width: 72px; }
  .rep-kpi-n {
    font-family: ui-monospace, monospace; font-size: 18px; font-weight: 700;
    color: #34d399; line-height: 1;
  }
  .rep-kpi-l { font-size: 10px; color: var(--pf-muted); margin-top: 4px; }
  .pf-spoke.pf-active .rep-kpi-n { animation: pf-rep-kpi 3.4s ease-out forwards; }
  @keyframes pf-rep-kpi {
    0%    { opacity: 0.2; }
    60%,100%{ opacity: 1; }
  }
  .rep-bars { flex: 1; display: flex; align-items: flex-end; gap: 4px; height: 56px; }
  .rep-bar {
    flex: 1;
    background: linear-gradient(180deg, #a78bfa, #7655d6);
    border-radius: 2px 2px 0 0;
    height: var(--h);
    transform-origin: bottom;
  }
  .pf-spoke.pf-active .rep-bar { animation: pf-rep-bar 3.4s ease-out forwards; }
  .pf-spoke.pf-active .rep-bar-0 { animation-delay: 0.1s; }
  .pf-spoke.pf-active .rep-bar-1 { animation-delay: 0.25s; }
  .pf-spoke.pf-active .rep-bar-2 { animation-delay: 0.4s; }
  .pf-spoke.pf-active .rep-bar-3 { animation-delay: 0.55s; }
  .pf-spoke.pf-active .rep-bar-4 { animation-delay: 0.7s; }
  .pf-spoke.pf-active .rep-bar-5 { animation-delay: 0.85s; }
  @keyframes pf-rep-bar {
    0%    { transform: scaleY(0); }
    50%,100% { transform: scaleY(1); }
  }

  /* ─ Monitor satellite ─────────────────────────────────────── */
  .pf-monitor {
    z-index: 3;
    width: 230px;
    background: linear-gradient(180deg, rgba(6,78,99,0.48), rgba(8,10,20,0.9));
    border: 1px dashed rgba(34,211,238,0.6);
    border-radius: 16px; padding: 14px;
    box-shadow: 0 30px 60px -25px rgba(34,211,238,0.5);
    backdrop-filter: blur(6px);
  }
  .pf-monitor-badge {
    display: inline-block;
    font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase;
    padding: 3px 8px; border-radius: 999px;
    background: rgba(34,211,238,0.18); color: var(--pf-accent);
    border: 1px solid rgba(34,211,238,0.45);
    margin-bottom: 8px;
  }
  .pf-monitor-title {
    display: flex; align-items: center; gap: 8px;
    font-size: 14px; font-weight: 700; color: #fff;
  }
  .pf-monitor-dot {
    width: 10px; height: 10px; border-radius: 50%;
    background: var(--pf-accent);
    box-shadow: 0 0 0 0 rgba(34,211,238,0.7);
    animation: pf-pulse 1.6s ease-out infinite;
  }
  .pf-monitor-sub { font-size: 11px; color: var(--pf-muted); margin-top: 4px; }
  .pf-spark { display: block; width: 100%; height: 30px; margin: 10px 0 6px; }
  .pf-spark path {
    stroke: var(--pf-accent); stroke-width: 1.5; fill: none;
    stroke-dasharray: 200;
    animation: pf-draw 4s linear infinite;
  }
  .mon-metrics {
    display: flex; gap: 12px; margin: 6px 0 10px;
  }
  .mon-metrics > div { display: flex; flex-direction: column; }
  .mon-k { font-family: ui-monospace, monospace; font-size: 15px; font-weight: 700; color: var(--pf-accent); }
  .mon-l { font-size: 9px; color: var(--pf-muted); letter-spacing: 0.1em; text-transform: uppercase; }
  .pf-monitor-flag {
    font-size: 11px; color: var(--pf-accent);
    padding-top: 6px; border-top: 1px dashed rgba(34,211,238,0.3);
  }
  .pf-monitor-flag .pf-wo {
    font-family: ui-monospace, monospace;
    background: rgba(34,211,238,0.14); padding: 1px 6px; border-radius: 4px;
  }

  .pf-cyan-path { stroke-dashoffset: 0; animation: pf-dash 2.2s linear infinite; }
  .pf-cyan-path-2 { animation-delay: 1.1s; }

  @keyframes pf-dash  { to { stroke-dashoffset: -24; } }
  @keyframes pf-draw  {
    0%   { stroke-dashoffset: 200; }
    50%  { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -200; }
  }
  @keyframes pf-pulse {
    0%   { box-shadow: 0 0 0 0 rgba(34,211,238,0.6); }
    70%  { box-shadow: 0 0 0 12px rgba(34,211,238,0); }
    100% { box-shadow: 0 0 0 0 rgba(34,211,238,0); }
  }

  /* ─ Stacked fallback ──────────────────────────────────────── */
  .pf-stacked { display: none; }
  .pf-stacked-hub, .pf-stacked-spoke, .pf-stacked-monitor {
    background: rgba(15,23,42,0.88);
    border: 1px solid var(--pf-stroke);
    border-radius: 14px; padding: 14px 16px; margin-bottom: 10px;
  }
  .pf-stacked-hub {
    border-color: rgba(167,139,250,0.5); text-align: center;
    background: linear-gradient(180deg, rgba(118,85,214,0.22), rgba(15,23,42,0.95));
  }
  .pf-stacked-monitor {
    border: 1px dashed rgba(34,211,238,0.55);
    background: linear-gradient(180deg, rgba(6,78,99,0.4), rgba(8,10,20,0.9));
  }

  @media (max-width: 1100px) {
    .pf-stage { display: none; }
    .pf-stacked { display: block; }
  }

  @media (prefers-reduced-motion: reduce) {
    .pf-cyan-path, .pf-spark path, .pf-monitor-dot,
    .pill-wo, .pm-marker, .prev-pm .pm-out,
    .ins-box, .ins-box::after,
    .parts-fill, .parts-tag,
    .sch-card, .sch-check, .sch-slot-a,
    .rep-bar, .rep-kpi-n { animation: none !important; }
    .pill-wo-3 { opacity: 1; } /* show final state */
    .ins-box-0, .ins-box-1, .ins-box-2, .ins-box-3 { background: rgba(52,211,153,0.18); border-color: rgba(52,211,153,0.6); }
    .ins-box::after { opacity: 1 !important; }
    .rep-bar { transform: scaleY(1) !important; }
    .sch-check { opacity: 1 !important; }
    .sch-card { opacity: 0 !important; }
    .pf-spoke { transition: none !important; }
    .pf-spoke.pf-active { transform: translate(-50%, -50%) !important; }
  }
`;
