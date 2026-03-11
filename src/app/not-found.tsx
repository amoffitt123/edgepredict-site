import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      <div className="max-w-lg mx-auto px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#a78fe8] mb-4">404</p>
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Page not found.</h1>
        <p className="text-lg text-gray-400 mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-8 py-4 bg-[#7655d6] hover:bg-[#5d3db8] text-white rounded-xl font-semibold text-base transition-colors"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}
