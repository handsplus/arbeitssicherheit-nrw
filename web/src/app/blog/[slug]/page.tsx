import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS, getBlogPost } from "@/data/blog-posts";
import { SITE, CONTACT } from "@/lib/constants";
import { BlogPostBody } from "@/components/blog/BlogPostBody";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { RelatedOnSite } from "@/components/content/RelatedOnSite";
import { IconArrowRight } from "@/components/Icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const url = `${SITE.url}/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      locale: "de_DE",
      type: "article",
      siteName: SITE.name,
      publishedTime: post.datePublished,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const url = `${SITE.url}/blog/${slug}`;
  const blogPostingLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url,
    datePublished: post.datePublished,
    inLanguage: "de-DE",
    isAccessibleForFree: true,
    author: {
      "@type": "Organization",
      name: CONTACT.company,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      name: CONTACT.company,
      url: SITE.url,
    },
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <BreadcrumbJsonLd
        items={[
          { name: "Start", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingLd) }}
      />
      <p className="text-sm font-semibold uppercase tracking-widest text-nrw-gruen">
        <Link href="/blog" className="hover:underline">
          Blog
        </Link>
      </p>
      <h1 className="mt-2 text-3xl font-bold leading-tight text-nrw-grau-900 md:text-4xl">
        {post.title}
      </h1>
      <p className="mt-4 text-sm text-nrw-grau-500">
        Stand: {new Date(post.datePublished).toLocaleDateString("de-DE", { dateStyle: "long" })} ·
        Köln &amp; NRW
      </p>
      <article className="prose mt-10 max-w-none prose-headings:text-nrw-grau-900 prose-p:text-nrw-grau-700 prose-li:text-nrw-grau-700 prose-a:text-nrw-gruen">
        <BlogPostBody slug={slug} />
      </article>
      <div className="mt-12 flex flex-wrap gap-4 border-t border-nrw-grau-200 pt-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-nrw-gruen hover:underline"
        >
          Alle Artikel
          <IconArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <Link
          href="/beratung-buchen"
          className="inline-flex items-center gap-2 text-sm font-semibold text-nrw-gruen hover:underline"
        >
          Erstberatung
          <IconArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
      <RelatedOnSite
        className="mt-14"
        links={[
          { href: "/faq", label: "FAQ", description: "Kurzantworten" },
          { href: "/leistungen", label: "Leistungen", description: "FaSi, BSB, SiGeKo" },
          { href: "/wissen", label: "Wissen", description: "Ressourcen & Tools" },
        ]}
      />
    </div>
  );
}
