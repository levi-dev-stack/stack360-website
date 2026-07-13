'use client';

import { ArrowLeft, Clock, ListOrdered } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import Link from 'next/link';
import {
  EASE_OUT_EXPO,
  fadeUp,
  motionVariants,
  staggerContainer,
} from '@/components/shared/motion/variants';
import type { BlogPost } from '@/constants/component/blog-posts-data';

interface BlogArticleProps {
  post: BlogPost;
}

function formatDate(iso: string): string {
  const date = new Date(`${iso}T12:00:00`);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogArticle({ post }: BlogArticleProps) {
  const reduced = useReducedMotion();

  return (
    <article className="flex w-full flex-col">
      <header className="site-section border-b border-neutral-200 bg-linear-to-b from-neutral-50 via-neutral-50 to-neutral-100 py-2xl">
        <div className="site-container max-w-5xl">
          <motion.div
            variants={motionVariants(reduced, staggerContainer)}
            initial={false}
            animate="show"
            className="space-y-lg"
          >
            <motion.div variants={motionVariants(reduced, fadeUp)}>
              <Link
                href="/our-work/blog"
                className="inline-flex items-center gap-xs text-xs font-bold text-neutral-600 transition-colors hover:text-primary"
              >
                <ArrowLeft size={14} aria-hidden />
                Back to blog
              </Link>
            </motion.div>

            <motion.div variants={motionVariants(reduced, fadeUp)} className="space-y-md">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                {post.category}
              </p>
              <h1 className="text-balance text-4xl font-black leading-tight tracking-tight text-neutral-900 md:text-5xl">
                {post.title}
              </h1>
              <ul className="flex flex-wrap items-center gap-x-lg gap-y-sm font-mono text-xs text-neutral-500">
                <li>{formatDate(post.date)}</li>
                <li className="inline-flex items-center gap-1">
                  <Clock size={12} aria-hidden />
                  {post.readTime} read
                </li>
                <li className="inline-flex items-center gap-1">
                  <ListOrdered size={12} aria-hidden />
                  {post.sections.length} sections
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </header>

      <div className="site-section py-2xl">
        <div className="site-container max-w-5xl">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
            className="space-y-2xl"
          >
            <p className="text-pretty text-lg leading-relaxed text-neutral-700">{post.intro}</p>

            <ol className="space-y-xl">
              {post.sections.map((section, index) => (
                <li key={section.heading} className="space-y-sm">
                  <h2 className="flex items-baseline gap-md text-balance text-xl font-bold tracking-tight text-neutral-900">
                    <span className="font-mono text-sm font-bold text-primary tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {section.heading}
                  </h2>
                  <p className="max-w-[70ch] text-pretty text-base leading-relaxed text-neutral-600">
                    {section.body}
                  </p>
                </li>
              ))}
            </ol>

            <footer className="space-y-md border-t border-neutral-200 pt-xl">
              <h2 className="text-xl font-bold tracking-tight text-neutral-900">
                {post.conclusion.heading}
              </h2>
              {post.conclusion.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="max-w-[70ch] text-pretty text-base leading-relaxed text-neutral-600"
                >
                  {paragraph}
                </p>
              ))}
            </footer>
          </motion.div>
        </div>
      </div>
    </article>
  );
}
