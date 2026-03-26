import Link from "next/link";

export const metadata = {
  title: "Terms of Service — EdgePredict",
  description: "EdgePredict terms of service.",
};

export default function TermsPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm font-semibold text-[#7655d6] uppercase tracking-widest mb-4">
            Legal
          </p>
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-slate-500 text-sm mb-10">Last updated: March 2025</p>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-700 text-sm leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Acceptance of Terms</h2>
              <p>
                By creating an account or using the EdgePredict platform, you agree to these Terms
                of Service. If you are using EdgePredict on behalf of a company, you represent that
                you have authority to bind that company to these terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Use of the Platform</h2>
              <p>
                EdgePredict grants you a non-exclusive, non-transferable license to use the platform
                for your internal maintenance management operations. You may not reverse engineer,
                resell, or sublicense the platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Free Tier</h2>
              <p>
                The free Planner tier is provided at no cost and may be used indefinitely. We reserve
                the right to modify or discontinue the free tier with reasonable notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Motor Monitoring Pilot Program</h2>
              <p>
                The 60-day free pilot provides hardware on a loan basis. Hardware must be returned
                in working condition if you elect not to continue after the pilot period. You are
                responsible for hardware during the pilot. Intentional damage or loss will be billed
                at cost.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Paid Subscriptions</h2>
              <p>
                Pro ($99/mo) and Monitor ($200/mo per motor) subscriptions are billed monthly.
                You may cancel at any time. No refunds are issued for partial billing periods.
                Volume discounts are available for 5 or more monitored motors.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Data Ownership</h2>
              <p>
                You own the data you enter into EdgePredict. We do not claim ownership of your
                operational data, maintenance records, or motor health data. Upon account deletion,
                we will provide a data export upon request.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Limitation of Liability</h2>
              <p>
                EdgePredict is a monitoring and management tool. We are not liable for equipment
                failures, production losses, or damages that occur regardless of platform data.
                Always apply professional engineering judgment to maintenance decisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Contact</h2>
              <p>
                Questions about these terms? Reach us at{" "}
                <a href="mailto:contact@edgepredict.io" className="text-[#7655d6] hover:underline">
                  contact@edgepredict.io
                </a>
                .
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <Link href="/" className="text-[#7655d6] hover:underline text-sm font-medium">
              Back to EdgePredict
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
