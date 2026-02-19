"use client";

import { useState } from "react";
import { ArrowRight, Mail, Phone, User } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", message: "", numMotors: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm font-semibold text-[#a78fe8] uppercase tracking-widest mb-3">Contact</p>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Talk to an engineer.</h1>
          <p className="text-gray-400 text-lg max-w-xl">
            No sales deck. Just a direct conversation about your motors, your facility, and whether
            EdgePredict is the right fit.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16">

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h2>

            {status === "sent" ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="text-green-600 text-4xl mb-3">✓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message received</h3>
                <p className="text-gray-600">
                  We&apos;ll be in touch within one business day. Or reach us directly at{" "}
                  <a href="mailto:anderson@edgepredict.io" className="text-[#7655d6] hover:underline">
                    anderson@edgepredict.io
                  </a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7655d6] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company *</label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Manufacturing"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7655d6] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Work Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@acme.com"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7655d6] focus:border-transparent"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7655d6] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Critical motors (optional)</label>
                    <input
                      type="number"
                      name="numMotors"
                      value={form.numMotors}
                      onChange={handleChange}
                      min="1"
                      placeholder="e.g. 8"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7655d6] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your facility, which motors are critical, and what's driving your interest in condition monitoring..."
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7655d6] focus:border-transparent resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-sm">Something went wrong. Please email us directly at anderson@edgepredict.io.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full px-6 py-3 bg-[#7655d6] hover:bg-[#5d3db8] disabled:opacity-60 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  {status === "sending" ? "Sending…" : <>Send Message <ArrowRight className="ml-2 h-4 w-4" /></>}
                </button>
              </form>
            )}
          </div>

          {/* Direct contact */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Direct contact</h2>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 mb-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#7655d6] flex items-center justify-center flex-shrink-0">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">Anderson Moffitt</div>
                  <div className="text-[#7655d6] text-sm font-medium mb-3">Founder &amp; CTO</div>
                  <div className="space-y-2">
                    <a
                      href="mailto:anderson@edgepredict.io"
                      className="flex items-center text-sm text-gray-700 hover:text-[#7655d6] transition-colors"
                    >
                      <Mail className="h-4 w-4 mr-2 text-gray-400" />
                      anderson@edgepredict.io
                    </a>
                    <a
                      href="tel:7034016262"
                      className="flex items-center text-sm text-gray-700 hover:text-[#7655d6] transition-colors"
                    >
                      <Phone className="h-4 w-4 mr-2 text-gray-400" />
                      (703) 401-6262
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-8">
              <div className="text-sm font-semibold text-gray-900 mb-2">General inquiries</div>
              <a href="mailto:contact@edgepredict.io" className="text-[#7655d6] hover:underline text-sm">
                contact@edgepredict.io
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-gray-900">Good questions to ask us:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Can my motors be monitored — VFD or line-fed?",
                  "Will this work without connecting to our plant network?",
                  "What does a typical pilot install look like?",
                  "How do we prioritize which motors to monitor first?",
                  "What does the weekly health report tell us?",
                ].map((q) => (
                  <li key={q} className="flex items-start">
                    <span className="text-[#7655d6] mr-2">›</span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 bg-[#7655d6]/5 border border-[#7655d6]/20 rounded-xl p-6">
              <div className="text-sm font-semibold text-gray-900 mb-1">Start with the free pilot</div>
              <p className="text-sm text-gray-600 mb-3">
                No long sales process. We can have a kit on its way to you within a week.
              </p>
              <a
                href="/pilot"
                className="text-[#7655d6] text-sm font-medium inline-flex items-center hover:underline"
              >
                Learn about the pilot program <ArrowRight className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
