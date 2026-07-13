import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogArticle from '@/components/pages/our-work/blog/BlogArticle';
import PageClosingCta from '@/components/shared/PageClosingCta';
import { getBlogPost, getBlogSlugs } from '@/constants/component/blog-posts-data';
import { OUR_WORK_CTA } from '@/constants/component/our-work-data';
import { pageMeta } from '@/constants/seo';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    return {};
  }

  return pageMeta({
    title: post.title,
    description: post.excerpt,
    path: `/our-work/blog/${post.slug}`,
    keywords: [post.category, 'Stack360 blog', ...post.sections.map((s) => s.heading)],
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    notFound();
  }

  return (
    <div className="flex w-full flex-col">
      <BlogArticle post={post} />
      <PageClosingCta {...OUR_WORK_CTA} />
    </div>
  );
}
