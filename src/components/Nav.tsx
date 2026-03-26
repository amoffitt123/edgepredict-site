"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const desktopLinks = [
  { label: "Home",       href: "/" },
  { label: "Features",   href: "/features" },
  { label: "Monitoring", href: "/monitoring" },
  { label: "Pricing",    href: "/pricing" },
  { label: "Blog",       href: "/blog" },
];

const mobileLinks = [
  { label: "Home",         href: "/" },
  { label: "Features",     href: "/features" },
  { label: "Monitoring",   href: "/monitoring" },
  { label: "Pricing",      href: "/pricing" },
  { label: "Blog",         href: "/blog" },
  { label: "Calculator",   href: "/calculator" },
  { label: "Contact",      href: "/contact" },
  { label: "Pilot Program",href: "/pilot" },
  { label: "Security & IT",href: "/security" },
];

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" aria-hidden="true">
      <rect x="2"  y="2"  width="7" height="7" rx="1.5" fill="currentColor" />
      <rect x="11" y="2"  width="7" height="7" rx="1.5" fill="currentColor" opacity="0.6" />
      <rect x="2"  y="11" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.6" />
      <rect x="11" y="11" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.35" />
    </svg>
  );
}

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">

        {/* ── Wordmark ───────────────────────────── */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <div className="w-7 h-7 rounded-lg bg-[#7655d6] flex items-center justify-center group-hover:bg-[#5d3db8] transition-colors duration-200">
            <LogoMark className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900 leading-none">
            Edge<span className="text-[#7655d6]">Predict</span>
          </span>
        </Link>

        {/* ── Desktop nav ────────────────────────── */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {desktopLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                pathname === l.href
                  ? "text-[#7655d6] bg-[#7655d6]/8"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* ── Desktop CTA buttons ─────────────────── */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          <a
            href="https://tools.edgepredict.io/login"
            className="px-4 py-2 text-sm font-medium text-slate-700 border border-slate-200 rounded-lg hover:border-[#7655d6] hover:text-[#7655d6] transition-all duration-200"
          >
            Log In
          </a>
          <a
            href="https://tools.edgepredict.io/signup"
            className="px-4 py-2 text-sm font-semibold bg-[#7655d6] text-white rounded-lg hover:bg-[#5d3db8] transition-all duration-200 hover:shadow-lg hover:shadow-[#7655d6]/25 hover:scale-[1.02]"
          >
            Get Started
          </a>
        </div>

        {/* ── Mobile toggle ──────────────────────── */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* ── Mobile nav ─────────────────────────────── */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <nav className="px-6 py-4 space-y-0.5">
            {mobileLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname === l.href
                    ? "text-[#7655d6] bg-[#7655d6]/8"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100 space-y-2">
              <a
                href="https://tools.edgepredict.io/login"
                className="block w-full text-center px-4 py-2.5 text-sm font-medium border border-slate-200 text-slate-700 rounded-lg hover:border-[#7655d6] hover:text-[#7655d6] transition-all duration-200"
                onClick={() => setMobileOpen(false)}
              >
                Log In
              </a>
              <a
                href="https://tools.edgepredict.io/signup"
                className="block w-full text-center px-4 py-2.5 text-sm font-semibold bg-[#7655d6] text-white rounded-lg hover:bg-[#5d3db8] transition-all duration-200"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
