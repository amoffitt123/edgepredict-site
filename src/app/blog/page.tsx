import Link from "next/link";
import { getSortedPosts } from "@/lib/blog/posts";

export const metadata = {
  title: "Blog — EdgePredict",
  description:
    "Maintenance engineering insights, product updates, and the thinking behind EdgePredict.",
};

const categoryColors: Record<string, string> = {
  Product: "bg-[#7655d6]/10 text-[#7655d6]",
  Engineering: "bg-blue-100 text-blue-700",
  Industry: "bg-emerald-100 text-emerald-700",
  Company: "bg-gray-100 text-gray-700",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getSortedPosts();

  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-gray-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">From the Shop Floor</h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Maintenance engineering insights, product updates, and the thinking behind EdgePredict.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category]}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readingTime} min read</span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#7655d6] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{formatDate(post.date)}</span>
                    <span className="text-xs font-semibold text-[#7655d6] group-hover:underline">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
