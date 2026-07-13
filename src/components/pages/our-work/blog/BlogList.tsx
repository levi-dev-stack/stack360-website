'use client';

import { ArrowRight, BookOpen, Clock, ListOrdered } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import Link from 'next/link';
import { EASE_OUT_EXPO, viewport } from '@/components/shared/motion/variants';
import type { BlogPost } from '@/constants/component/blog-posts-data';

interface BlogListProps {
  posts: readonly BlogPost[];
}

function formatDate(iso: string): string {
  const date = new Date(`${iso}T12:00:00`);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function BlogList({ posts }: BlogListProps) {
  const reduced = useReducedMotion();
  const ordered = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  if (ordered.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-neutral-300 bg-neutral-100/60 px-lg py-2xl text-center">
        <p className="text-base font-semibold text-neutral-800">No posts published yet</p>
        <p className="mt-sm text-sm text-neutral-600">
          New notes land here as we publish — check back soon.
        </p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-neutral-200 border-y border-neutral-200">
      {ordered.map((post, index) => (
        <motion.article
          key={post.slug}
          initial={reduced ? false : { opacity: 0, x: -12 }}
          whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
          viewport={reduced ? undefined : viewport}
          transition={{
            duration: 0.45,
            delay: Math.min(index, 8) * 0.05,
            ease: EASE_OUT_EXPO,
          }}
          className="group"
        >
          <Link
            href={`/our-work/blog/${post.slug}`}
            className="grid grid-cols-1 gap-md rounded-sm py-xl text-neutral-700 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:grid-cols-12 sm:gap-lg hover:text-neutral-900"
          >
            <div className="space-y-sm sm:col-span-3">
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
                {post.category}
              </p>
              <p className="font-mono text-xs text-neutral-500">{formatDate(post.date)}</p>
              <ul className="flex flex-wrap gap-sm pt-xs">
                <li className="inline-flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                  <Clock size={10} aria-hidden />
                  {post.readTime}
                </li>
                <li className="inline-flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                  <ListOrdered size={10} aria-hidden />
                  {post.sections.length} sections
                </li>
              </ul>
            </div>

            <div className="sm:col-span-9">
              <div className="flex items-start justify-between gap-md">
                <h2 className="text-balance text-xl font-bold tracking-tight text-neutral-900 transition-colors group-hover:text-primary md:text-2xl">
                  {post.title}
                </h2>
                <span className="mt-1 shrink-0 text-primary opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100">
                  <ArrowRight size={18} aria-hidden />
                </span>
              </div>
              <p className="mt-sm max-w-3xl text-pretty text-sm leading-relaxed text-neutral-600">
                {post.excerpt}
              </p>
              <span className="mt-md inline-flex items-center gap-xs text-xs font-bold text-primary">
                <BookOpen size={12} aria-hidden />
                Read article
              </span>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
}
