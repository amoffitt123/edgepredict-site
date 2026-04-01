"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const DEMOS = [
  {
    id: "wo",
    label: "Create a Work Order",
    sublabel: "AI-powered, under 10 seconds",
    src: "https://demo.arcade.software/v2hUY27fDKM67Dzs6OwJ?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true",
    title: "Create and Assign a Maintenance Work Order Using AI",
  },
  {
    id: "schedule",
    label: "Schedule Your Week",
    sublabel: "Drag-and-drop + AI suggestions",
    src: "https://demo.arcade.software/eBFucsmGB2uJ1yRrqBp9?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true",
    title: "Schedule and Update Maintenance Work Orders",
  },
  {
    id: "reports",
    label: "Run a Report",
    sublabel: "KPIs, OEE & downtime in one view",
    src: "https://demo.arcade.software/mFrN2IbHottYYIEshVcS?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true",
    title: "Review Maintenance Analytics and Take Action from the Reports Dashboard",
  },
];

export default function ArcadeDemos() {
  const [active, setActive] = useState("wo");
  const demo = DEMOS.find((d) => d.id === active)!;

  return (
    <section className="py-20 bg-[#0a0a0f] text-white">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-[#a78fe8] uppercase tracking-widest mb-3">
            Live demo
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See it yourself
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Click through the real product. No sign-up required.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {DEMOS.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => setActive(d.id)}
              className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 text-left ${
                active === d.id
                  ? "bg-[#7655d6] text-white shadow-lg shadow-[#7655d6]/30 scale-[1.02]"
                  : "bg-slate-800/80 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700"
              }`}
            >
              <span className="block">{d.label}</span>
              <span className={`block text-xs font-normal mt-0.5 ${active === d.id ? "text-[#c4b0f0]" : "text-slate-500"}`}>
                {d.sublabel}
              </span>
            </button>
          ))}
        </div>

        {/* Embed */}
        <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl shadow-black/40">
          <div
            style={{
              position: "relative",
              paddingBottom: "calc(46.31578947368421% + 41px)",
              height: 0,
              width: "100%",
            }}
          >
            <iframe
              key={active}
              src={demo.src}
              title={demo.title}
              frameBorder="0"
              loading="lazy"
              allowFullScreen
              allow="clipboard-write"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                colorScheme: "light",
              }}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
          <p className="text-xs text-slate-500">
            Click through at your own pace — this is the real product, not a video.
          </p>
          <a
            href="https://tools.edgepredict.io/signup"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#a78fe8] hover:text-white transition-colors whitespace-nowrap"
          >
            Start free when you&apos;re ready <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
