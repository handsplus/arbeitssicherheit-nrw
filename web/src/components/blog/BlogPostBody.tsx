import { BLOG_ARTICLE_COMPONENTS } from "./articleRegistry";

/** Artikeltexte (Server Component) – slug kommt aus `blog-posts.ts` */
export function BlogPostBody({ slug }: { slug: string }) {
  const render = BLOG_ARTICLE_COMPONENTS[slug];
  return render ? render() : null;
}
