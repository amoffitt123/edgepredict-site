import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getSortedPosts, type BlogPost } from "@/lib/blog/posts";
import type { Metadata } from "next";

const categoryColors: Record<string, string> = {
  Product: "bg-[#7655d6]/10 text-[#7655d6]",
  Engineering: "bg-blue-100 text-blue-700",
  Industry: "bg-emerald-100 text-emerald-700",
  Company: "bg-gray-100 text-gray-700",
};

const categoryBanners: Record<string, string> = {
  Product: "from-[#7655d6] to-[#5d3db8]",
  Engineering: "from-blue-600 to-blue-800",
  Industry: "from-emerald-600 to-emerald-800",
  Company: "from-gray-700 to-gray-900",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  const posts = getSortedPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found — EdgePredict" };
  return {
    title: `${post.title} — EdgePredict Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.edgepredict.io/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} — EdgePredict Blog`,
      description: post.excerpt,
      url: `https://www.edgepredict.io/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["EdgePredict Team"],
      siteName: "EdgePredict",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} — EdgePredict Blog`,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const paragraphs = post.content.trim().split(/\n\n+/);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "EdgePredict",
      url: "https://www.edgepredict.io",
    },
    publisher: {
      "@type": "Organization",
      name: "EdgePredict",
      url: "https://www.edgepredict.io",
    },
    url: `https://www.edgepredict.io/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.edgepredict.io/blog/${post.slug}`,
    },
  };

  return (
    <main className="bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Category color banner */}
      <div className={`h-2 w-full bg-gradient-to-r ${categoryBanners[post.category]}`} />

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Back link */}
        <Link
          href="/blog"
          className="text-sm text-gray-500 hover:text-[#7655d6] transition-colors inline-flex items-center gap-1 mb-8"
        >
          ← All Posts
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-sm font-semibold px-3 py-1.5 rounded-full ${categoryColors[post.category]}`}>
              {post.category}
            </span>
            <span className="text-sm text-gray-400">{post.readingTime} min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="font-medium text-gray-700">EdgePredict Team</span>
            <span>·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-gray max-w-none">
          {paragraphs.map((para, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-5 text-base">
              {para.trim()}
            </p>
          ))}
        </article>

        {/* Bottom CTA */}
        <div className="mt-16 border-t border-gray-200 pt-12">
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to try EdgePredict?
            </h2>
            <p className="text-gray-600 mb-6">
              Free maintenance management platform. No credit card. No time limit.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://tools.edgepredict.io/signup"
                className="px-6 py-3 bg-[#7655d6] hover:bg-[#5d3db8] text-white rounded-xl font-semibold text-sm transition-colors"
              >
                Get Started Free
              </a>
              <Link
                href="/blog"
                className="px-6 py-3 border border-gray-300 text-gray-700 hover:border-[#7655d6] hover:text-[#7655d6] rounded-xl font-semibold text-sm transition-colors"
              >
                Read More Posts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
