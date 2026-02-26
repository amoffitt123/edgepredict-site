import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4 text-xl font-bold tracking-tight">
              <span className="text-purple-400">Edge</span><span className="text-white">Predict</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Non-invasive motor condition monitoring using Electrical Signature Analysis.
              Built for reliability engineers and maintenance managers.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/products" className="hover:text-white transition-colors">Motor Monitoring</Link></li>
              <li><Link href="/pilot" className="hover:text-white transition-colors">Pilot Program</Link></li>
              <li><Link href="/calculator" className="hover:text-white transition-colors">Downtime Calculator</Link></li>
              <li><Link href="/security" className="hover:text-white transition-colors">Security &amp; IT</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/calculator" className="hover:text-white transition-colors">Downtime Calculator</Link></li>
              <li><Link href="/security" className="hover:text-white transition-colors">Security Overview</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Sales</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="text-gray-300 font-medium">Anderson Moffitt</li>
              <li className="text-gray-500 text-xs">Founder &amp; CTO</li>
              <li className="mt-2">
                <a href="mailto:anderson@edgepredict.io" className="hover:text-white transition-colors">
                  anderson@edgepredict.io
                </a>
              </li>
              <li>
                <a href="mailto:contact@edgepredict.io" className="hover:text-white transition-colors">
                  contact@edgepredict.io
                </a>
              </li>
              <li>
                <a href="tel:7034016262" className="hover:text-white transition-colors">
                  (703) 401-6262
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} EdgePredict. All rights reserved. | edgepredict.io
          </div>
          <div className="flex space-x-6 text-sm text-gray-500 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
