import Link from "next/link";

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

const PRODUCT_LINKS = [
  { label: "Features",       href: "/features" },
  { label: "Motor Monitoring",href: "/monitoring" },
  { label: "Pricing",        href: "/pricing" },
  { label: "Pilot Program",  href: "/pilot" },
  { label: "Security & IT",  href: "/security" },
];

const RESOURCE_LINKS = [
  { label: "Blog",                href: "/blog",                       external: false },
  { label: "Downtime Calculator", href: "/calculator",                  external: false },
  { label: "Contact",             href: "/contact",                     external: false },
  { label: "Log In",              href: "https://tools.edgepredict.io/login",   external: true },
  { label: "Get Started",         href: "https://tools.edgepredict.io/signup",  external: true },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Main columns ───────────────────────────── */}
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-10 mb-14">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5 group w-fit">
              <div className="w-7 h-7 rounded-lg bg-[#7655d6] flex items-center justify-center group-hover:bg-[#5d3db8] transition-colors">
                <LogoMark className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">
                Edge<span className="text-purple-400">Predict</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              Maintenance management and motor monitoring, built as one platform
              by engineers who have been on the plant floor.
            </p>

            {/* Social */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/edgepredict"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EdgePredict on LinkedIn"
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#7655d6] hover:text-white transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">
              Product
            </h4>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">
              Resources
            </h4>
            <ul className="space-y-3">
              {RESOURCE_LINKS.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a
                      href={l.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      href={l.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="text-sm text-slate-300 font-semibold">Anderson Moffitt</li>
              <li className="text-xs text-slate-500 -mt-1">Founder &amp; CTO</li>
              <li>
                <a
                  href="mailto:anderson@edgepredict.io"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  anderson@edgepredict.io
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@edgepredict.io"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  contact@edgepredict.io
                </a>
              </li>
              <li>
                <a
                  href="tel:+17034016262"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  (703) 401-6262
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ─────────────────────────────── */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} EdgePredict. All rights reserved. | edgepredict.io
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
