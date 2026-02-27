"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Product", href: "/products" },
  { label: "Pilot Program", href: "/pilot" },
  { label: "Calculator", href: "/calculator" },
  { label: "Security", href: "/security" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="/og-image.jpg"
            alt="EdgePredict"
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/pilot"
            className="px-4 py-2 bg-[#7655d6] hover:bg-[#5d3db8] text-white rounded text-sm font-medium transition-colors"
          >
            Start Your Free Pilot
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block text-gray-600 hover:text-gray-900 py-2 text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/pilot"
              className="block mt-3 px-4 py-2 bg-[#7655d6] hover:bg-[#5d3db8] text-white rounded text-sm font-medium transition-colors text-center"
              onClick={() => setMobileOpen(false)}
            >
              Start Your Free Pilot
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
