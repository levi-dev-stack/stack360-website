'use client';

import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { EASE_OUT_EXPO, viewport } from '@/components/shared/motion/variants';

export interface InsightItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  source: string;
  sourceUrl: string;
  topics?: readonly string[];
}

interface InsightListProps {
  items: readonly InsightItem[];
}

export default function InsightList({ items }: InsightListProps) {
  const reduced = useReducedMotion();

  return (
    <div className="divide-y divide-neutral-200 border-y border-neutral-200">
      {items.map((item, index) => (
        <motion.article
          key={item.slug}
          initial={reduced ? false : { opacity: 0, x: -12 }}
          whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
          viewport={reduced ? undefined : viewport}
          transition={{ duration: 0.45, delay: Math.min(index, 8) * 0.05, ease: EASE_OUT_EXPO }}
          className="group grid grid-cols-1 gap-md py-xl sm:grid-cols-12 sm:gap-lg"
        >
          <div className="sm:col-span-3">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
              {item.category}
            </p>
            <p className="mt-xs font-mono text-xs text-neutral-500">{item.date}</p>
          </div>
          <div className="sm:col-span-9">
            <h3 className="text-balance text-xl font-bold tracking-tight text-neutral-900 transition-colors group-hover:text-primary">
              {item.title}
            </h3>
            <p className="mt-sm max-w-3xl text-pretty text-sm leading-relaxed text-neutral-600">
              {item.excerpt}
            </p>
            {item.topics && (
              <ul className="mt-md flex flex-wrap gap-sm">
                {item.topics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-sm border border-neutral-200 bg-neutral-50 px-sm py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-600"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            )}
            <a
              href={item.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-md inline-flex items-center gap-xs text-xs font-bold text-primary transition-colors hover:text-primary-dark"
            >
              View on {item.source}
              <ArrowUpRight size={12} />
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
