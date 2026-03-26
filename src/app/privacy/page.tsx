import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — EdgePredict",
  description: "EdgePredict privacy policy.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm font-semibold text-[#7655d6] uppercase tracking-widest mb-4">
            Legal
          </p>
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-slate-500 text-sm mb-10">Last updated: March 2025</p>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-700 text-sm leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Information We Collect</h2>
              <p>
                We collect information you provide when creating an account, submitting work orders,
                or contacting us. This includes name, email address, company name, and operational
                data entered into the platform such as assets, work orders, and maintenance records.
              </p>
              <p className="mt-3">
                When you use our motor monitoring hardware, we collect time-series electrical
                signature data from your motors. This data is processed on the edge device and
                transmitted to our cloud infrastructure for display and alerting.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Operate and improve the EdgePredict platform</li>
                <li>Send maintenance alerts and notifications you configure</li>
                <li>Provide customer support</li>
                <li>Analyze platform usage to improve features</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Data Storage and Security</h2>
              <p>
                Your data is stored in cloud infrastructure with encryption at rest and in transit.
                Motor sensor data is transmitted over cellular connections secured with TLS. We use
                Cloudflare Tunnel for secure connectivity between edge hardware and our servers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Data Sharing</h2>
              <p>
                We do not sell your data. We do not share your operational data with third parties
                except as required to operate the service (e.g., cloud infrastructure providers)
                or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of your data at any time by
                contacting us at{" "}
                <a href="mailto:contact@edgepredict.io" className="text-[#7655d6] hover:underline">
                  contact@edgepredict.io
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Contact</h2>
              <p>
                Questions about this policy? Reach us at{" "}
                <a href="mailto:contact@edgepredict.io" className="text-[#7655d6] hover:underline">
                  contact@edgepredict.io
                </a>{" "}
                or{" "}
                <a href="tel:+17034016262" className="text-[#7655d6] hover:underline">
                  (703) 401-6262
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
