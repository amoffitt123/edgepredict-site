"use client";

import { useEffect, useState } from "react";

const MODULES = [
  { id: "work-orders",     label: "Work Orders" },
  { id: "preventive-pm",   label: "Preventive Maintenance" },
  { id: "inspections",     label: "Inspections" },
  { id: "scheduling",      label: "Scheduling" },
  { id: "assets",          label: "Assets & Locations" },
  { id: "parts",           label: "Parts & Inventory" },
  { id: "team",            label: "Team & Roles" },
  { id: "automation",      label: "Automation & Notifications" },
  { id: "reporting",       label: "Reporting & Analytics" },
  { id: "ai",              label: "AI Features" },
  { id: "mobile",          label: "Mobile App" },
  { id: "integrations",    label: "Integrations" },
  { id: "motor-monitoring",label: "Motor Monitoring" },
];

export default function FeatureSidebar() {
  const [active, setActive] = useState("work-orders");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    MODULES.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  return (
    <nav className="hidden lg:block sticky top-24 self-start">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 px-3">
        Modules
      </p>
      <ul className="space-y-0.5">
        {MODULES.map(({ id, label }) => (
          <li key={id}>
            <button
              onClick={() => scrollTo(id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                active === id
                  ? "bg-[#7655d6]/10 text-[#7655d6]"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
