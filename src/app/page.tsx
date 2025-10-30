"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, X, Menu, Cog, Shield, Zap, Users, Clock, TrendingUp } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [topBarVisible, setTopBarVisible] = useState(true)

  return (
    <div className="min-h-screen bg-white">
      {/* Top Notification Bar */}
      {topBarVisible && (
        <div className="bg-[#7655d6] text-white px-4 py-3 text-sm relative">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex-1 text-center">
              Transparent pricing: $199/month per equipment. No hidden fees, no long-term contracts.
            </div>
            <a
              href="#contact"
              className="text-white hover:text-gray-300 ml-4 px-4 py-2 flex items-center text-sm font-medium transition-colors"
            >
              Start Your Pilot <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <button onClick={() => setTopBarVisible(false)} className="ml-4 hover:opacity-70">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://ext.same-assets.com/4220051708/2409708753.png"
              alt="EdgePredict"
              className="h-16"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#platform" className="text-gray-600 hover:text-gray-900">
              Platform
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900">
              Resources
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
            <a
              href="#contact"
              className="px-4 py-2 bg-[#7655d6] hover:bg-[#5d3db8] text-white rounded text-sm font-medium transition-colors"
            >
              Start Your Pilot
            </a>
          </nav>

          {/* Mobile Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="px-4 py-4 space-y-4">
              <a
                href="#platform"
                className="block text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Platform
              </a>
              <a
                href="#pricing"
                className="block text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="block text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </a>
              <a
                href="#contact"
                className="block text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="#contact"
                className="block px-4 py-2 bg-[#7655d6] hover:bg-[#5d3db8] text-white rounded text-sm font-medium transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Your Pilot
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Eliminate unexpected
              <br />
              equipment failures.
              <br />
              <span className="text-[#7655d6]">In every facility.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Prevent six-figure downtime events with edge analytics that learn your assets and flag electrical and
              mechanical faults before they stop production.
            </p>
            <a
              href="#contact"
              className="px-4 py-2 bg-[#7655d6] hover:bg-[#5d3db8] text-white rounded text-sm font-medium transition-colors"
            >
              Start Your Pilot
            </a>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Industrial maintenance engineer"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 max-w-xs">
                <div className="text-sm font-semibold text-gray-900 mb-1">ROI in 30 days</div>
                <div className="text-xs text-gray-600">
                  Typical payback period with $199/month transparent pricing.
                </div>
                <a href="#pricing" className="text-[#7655d6] font-medium mt-2 flex items-center hover:underline">
                  See Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#7655d6] mb-2">$50K</div>
              <div className="text-sm text-gray-600">Typical unplanned downtime cost</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#7655d6] mb-2">&lt; 1 hr</div>
              <div className="text-sm text-gray-600">Install time per equipment, no rewiring</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#7655d6] mb-2">Retrofit</div>
              <div className="text-sm text-gray-600">Clamps onto existing motors &amp; panels</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#7655d6] mb-2">Transparent</div>
              <div className="text-sm text-gray-600">$199 / equipment / month</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Trusted by manufacturers across industries</h3>
          </div>
          <div className="flex items-center justify-center space-x-8 lg:space-x-16 opacity-60">
            <div className="flex flex-col items-center">
              <Cog className="h-8 w-8 mb-2" />
              <span className="text-sm">Food &amp; Beverage</span>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 mb-2" />
              <span className="text-sm">Chemical</span>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="h-8 w-8 mb-2" />
              <span className="text-sm">Panel Distributors</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 mb-2" />
              <span className="text-sm">Paper Mills</span>
            </div>
          </div>
        </div>
      </section>

      {/* Platform / hero 2 */}
      <section className="py-16 lg:py-24 bg-gray-50" id="platform">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1652211955967-99c892925469?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Manufacturing team collaboration"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              A Better Way to Prevent Downtime Starts Here
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We build intelligent monitoring solutions that learn your equipment&apos;s unique patterns, providing
              insights that transform reactive maintenance into predictive optimization – without the complexity and
              cost barriers of enterprise solutions.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-[#7655d6] text-[#7655d6] hover:bg-[#7655d6] hover:text-white"
            >
              Explore our platform <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Two feature blocks */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          <div>
            <div className="mb-6">
              <TrendingUp className="h-12 w-12 text-[#7655d6] mb-4" />
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Equipment Health Intelligence</h3>
              <p className="text-gray-600 mb-6">
                Predict and prevent equipment failures with edge-based electrical signature analysis that adapts to your
                facility&apos;s unique operating conditions and provides actionable insights.
              </p>
              <Button variant="link" className="text-[#7655d6] p-0 h-auto font-medium">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <Clock className="h-12 w-12 text-[#7655d6] mb-4" />
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Predictive Optimization</h3>
              <p className="text-gray-600 mb-6">
                Transform time-based schedules and reactive maintenance into data-driven decisions with transparent
                per-equipment pricing and rapid deployment that fits mid-market budgets.
              </p>
              <a
                href="#pricing"
                className="text-[#7655d6] p-0 h-auto font-medium text-sm underline-offset-4 hover:underline inline-flex items-center"
              >
                See pricing <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success / challenges */}
      <section className="py-16 lg:py-24 bg-gray-50" id="testimonials">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Manufacturing Challenges We Solve</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Real problems from mid-market manufacturers, solved with EdgePredict&apos;s current signature analysis
              technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Unexpected Equipment Breakdowns</h3>
                  <div className="border-l-4 border-gray-300 pl-4 mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-1">The Challenge</p>
                    <p className="text-sm text-gray-600">
                      Your packaging line motor fails during peak production. 8-hour emergency shutdown costs $47K in
                      lost revenue.
                    </p>
                  </div>
                  <div className="border-l-4 border-[#7655d6] pl-4">
                    <p className="text-sm font-medium text-[#7655d6] mb-1">How EdgePredict Helps</p>
                    <p className="text-sm text-gray-600">
                      We detect equipment problems weeks before failure, so you can fix them during planned downtime
                      instead of emergency shutdowns.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-600">Food &amp; Beverage Manufacturing</span>
                  <span className="text-lg font-semibold text-[#7655d6]">$47K Saved</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Solutions Too Expensive</h3>
                  <div className="border-l-4 border-gray-300 pl-4 mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-1">The Challenge</p>
                    <p className="text-sm text-gray-600">
                      Competitors quote $180K setup plus $2K/month per machine. Your board rejects the proposal
                      immediately.
                    </p>
                  </div>
                  <div className="border-l-4 border-[#7655d6] pl-4">
                    <p className="text-sm font-medium text-[#7655d6] mb-1">How EdgePredict Helps</p>
                    <p className="text-sm text-gray-600">
                      Same equipment monitoring capability for $1K setup plus $199/month per machine. Board approval in
                      one meeting.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-600">Automotive Parts Manufacturing</span>
                  <span className="text-lg font-semibold text-[#7655d6]">94% Cost Reduction</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Installation Disrupts Production</h3>
                  <div className="border-l-4 border-gray-300 pl-4 mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-1">The Challenge</p>
                    <p className="text-sm text-gray-600">
                      Your last monitoring system took 6 months to install, required facility rewiring, and caused 2 days
                      of lost production.
                    </p>
                  </div>
                  <div className="border-l-4 border-[#7655d6] pl-4">
                    <p className="text-sm font-medium text-[#7655d6] mb-1">How EdgePredict Helps</p>
                    <p className="text-sm text-gray-600">
                      Our sensors clamp directly onto equipment with no rewiring needed. 90-minute installation with
                      zero production downtime.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-600">Chemical Processing Facility</span>
                  <span className="text-lg font-semibold text-[#7655d6]">90 Min Install</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Vibration Monitoring Misses Problems</h3>
                  <div className="border-l-4 border-gray-300 pl-4 mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-1">The Challenge</p>
                    <p className="text-sm text-gray-600">
                      Your vibration sensors missed three pump motor failures this year. Emergency repairs and production
                      delays cost you $150K.
                    </p>
                  </div>
                  <div className="border-l-4 border-[#7655d6] pl-4">
                    <p className="text-sm font-medium text-[#7655d6] mb-1">How EdgePredict Helps</p>
                    <p className="text-sm text-gray-600">
                      We catch electrical faults, bearing issues, and motor problems that basic monitoring can&apos;t
                      detect.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-600">Paper Manufacturing</span>
                  <span className="text-lg font-semibold text-[#7655d6]">Early Detection</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What EdgePredict Detects */}
      <section className="py-16 lg:py-24 bg-white" id="faults">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What EdgePredict Detects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our edge node analyzes current and voltage signatures to reveal early electrical and mechanical faults
              before they cause unplanned downtime. ESA identifies problems traditional vibration or thermal monitoring
              often miss.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Bearing wear &amp; misalignment</h3>
              <p className="text-gray-600 text-sm mb-4">
                Detect subtle torque and load imbalances that indicate early bearing wear or shaft misalignment.
              </p>
              <p className="text-xs text-gray-400">Lead time: days to weeks before vibration rises</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Current imbalance &amp; phase loss</h3>
              <p className="text-gray-600 text-sm mb-4">
                Identify unbalanced loads, single phasing, or uneven current draw that shorten motor life.
              </p>
              <p className="text-xs text-gray-400">Flagged instantly by edge processing</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Rotor bar &amp; stator faults</h3>
              <p className="text-gray-600 text-sm mb-4">
                Detect broken rotor bars or shorted stator windings through harmonic distortion and current signature
                analysis.
              </p>
              <p className="text-xs text-gray-400">No disassembly required</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Mechanical load issues</h3>
              <p className="text-gray-600 text-sm mb-4">
                Spot coupling wear, belt slippage, or jammed equipment by tracking torque and slip variations over time.
              </p>
              <p className="text-xs text-gray-400">Correlates mechanical drag with electrical behavior</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Insulation degradation</h3>
              <p className="text-gray-600 text-sm mb-4">
                Track rising current leakage and unbalanced phase impedance to catch failing insulation early.
              </p>
              <p className="text-xs text-gray-400">Prevents unplanned motor replacements</p>
            </div>

            <div className="bg-gradient-to-br from-[#7655d6] to-[#5b39c2] rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-2">Custom fault profiles</h3>
              <p className="text-sm mb-4">
                We can tune detection thresholds or train on your facility’s data for specific motors, pumps, or
                production lines.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-sm font-medium underline underline-offset-4"
              >
                Talk to us about your equipment
                <span className="ml-1">→</span>
              </a>
            </div>
          </div>

          <p className="text-center mt-10 text-sm text-gray-500">
            Flow: edge node → local processing → custom dashboards &amp; alerts.
          </p>
        </div>
      </section>

      {/* Industry stats (reactive maintenance) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">The Cost of Reactive Maintenance</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[#7655d6] mb-2">$50K</div>
                <div className="text-sm text-gray-600">Average cost per hour of unplanned downtime</div>
                <div className="text-xs text-gray-500 mt-1">Source: Aberdeen Research</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#7655d6] mb-2">80%</div>
                <div className="text-sm text-gray-600">Of maintenance spending is reactive</div>
                <div className="text-xs text-gray-500 mt-1">Source: McKinsey</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#7655d6] mb-2">3-5x</div>
                <div className="text-sm text-gray-600">ROI from predictive maintenance</div>
                <div className="text-xs text-gray-500 mt-1">Source: Deloitte</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#7655d6] mb-2">36%</div>
                <div className="text-sm text-gray-600">Reduction in maintenance costs</div>
                <div className="text-xs text-gray-500 mt-1">Source: PwC</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">Ready to solve these challenges at your facility?</p>
            <a
              href="#contact"
              className="px-6 py-3 bg-[#7655d6] hover:bg-[#5d3db8] text-white rounded text-lg font-semibold transition-colors inline-flex items-center"
            >
              Start Preventing Failures <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The Smart Choice for Mid-Market Manufacturers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              EdgePredict delivers enterprise-grade results with transparent pricing and rapid deployment, positioning
              perfectly between basic vibration sensors and overpriced enterprise solutions.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold">Basic Vibration</th>
                  <th className="text-center p-4 font-semibold bg-[#7655d6] text-white rounded-t-lg">EdgePredict</th>
                  <th className="text-center p-4 font-semibold">Enterprise Solutions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium">Initial Investment</td>
                  <td className="text-center p-4">$1K - $5K</td>
                  <td className="text-center p-4 bg-[#7655d6]/10 font-semibold">Setup + $199/mo</td>
                  <td className="text-center p-4">$100K - $500K</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Installation Time</td>
                  <td className="text-center p-4">1–2 days</td>
                  <td className="text-center p-4 bg-[#7655d6]/10 font-semibold">&lt; 1 hour / asset</td>
                  <td className="text-center p-4">2–6 months</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Prediction Capability</td>
                  <td className="text-center p-4">Basic thresholds</td>
                  <td className="text-center p-4 bg-[#7655d6]/10 font-semibold">Early fault detection</td>
                  <td className="text-center p-4">Model-based, complex setup</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Learning Capability</td>
                  <td className="text-center p-4">Static thresholds</td>
                  <td className="text-center p-4 bg-[#7655d6]/10 font-semibold">Configurable rules &amp; signatures</td>
                  <td className="text-center p-4">Generic models</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Implementation Risk</td>
                  <td className="text-center p-4">Low – basic setup</td>
                  <td className="text-center p-4 bg-[#7655d6]/10 font-semibold">Low – clamp &amp; monitor</td>
                  <td className="text-center p-4">High – complex integration</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24 bg-[#7655d6]" id="pricing">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Transparent Pricing. No Hidden Fees.</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            While competitors hide behind &quot;request a quote,&quot; we believe in upfront, honest pricing that helps you
            make informed decisions.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-white text-gray-900">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-[#7655d6] mb-2">$199</div>
                  <div className="text-lg text-gray-600">per equipment/month</div>
                  <div className="text-sm text-gray-500">(billed annually)</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Edge electrical signature analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Early fault detection on motors/pumps
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Local edge processing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    &lt; 1 hour / asset install
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="px-4 py-2 bg-[#7655d6] hover:bg-[#5d3db8] text-white rounded text-sm font-medium transition-colors"
                >
                  Start Your Pilot
                </a>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white text-gray-900">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-[#7655d6] mb-2">$1K</div>
                  <div className="text-lg text-gray-600">one-time setup fee</div>
                  <div className="text-sm text-gray-500">per facility</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    On-site installation &amp; training
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Integration with existing systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    System configuration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Flexible pilot program
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors border border-[#7655d6] bg-background text-[#7655d6] shadow-sm hover:bg-[#7655d6] hover:text-white h-9 px-4 py-2 w-full"
                >
                  Contact Sales
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-sm opacity-75">No minimum contracts • Proven ROI before you buy</div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="py-16 lg:py-24" id="contact">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Prevent Your Next Equipment Failure?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our pilot program and see EdgePredict in action at your facility. Baseline evaluation with transparent
            pricing and no long-term commitment.
          </p>
          <a
            href="https://calendly.com/andersonmoffitt/15min?month=2025-07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#7655d6] hover:bg-[#5d3db8] text-white px-8 py-3 mr-4 mb-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Start Your Pilot <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <div className="mt-6 text-sm text-gray-500">
            <a href="mailto:contact@edgepredict.io" className="hover:text-[#7655d6]">
              contact@edgepredict.io
            </a>{" "}
            |
            <a href="tel:7034016262" className="hover:text-[#7655d6] ml-2">
              (703) 401-6262
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <img
                src="https://ext.same-assets.com/4220051708/2409708753.png"
                alt="EdgePredict"
                className="h-8 mb-6 brightness-0 invert"
              />
              <p className="text-gray-300 text-sm">
                Edge-based predictive maintenance for mid-market manufacturers.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Equipment Health
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Predictive Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Edge Processing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Food &amp; Beverage
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Chemical Processing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Paper Mills
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Panel Distributors
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pilot Program
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">
              © 2025 EdgePredict. All rights reserved. | Built for mid-market manufacturers by engineers who understand
              your challenges.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
