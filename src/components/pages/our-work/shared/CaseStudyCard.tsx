'use client';

import { motion, useReducedMotion } from 'motion/react';
import Link from 'next/link';
import BrandIcon from '@/components/shared/BrandIcon';
import { EASE_OUT_EXPO, viewport } from '@/components/shared/motion/variants';
import type { CASE_STUDIES } from '@/constants/component/our-work-cases-data';
import { cn } from '@/styles/tailwind.utils';

type CaseStudy = (typeof CASE_STUDIES)[number];

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
  variant?: 'dark' | 'light';
}

export default function CaseStudyCard({ study, index, variant = 'dark' }: CaseStudyCardProps) {
  const reduced = useReducedMotion();
  const dark = variant === 'dark';

  return (
    <motion.article
      id={study.slug}
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={reduced ? undefined : viewport}
      transition={{ duration: 0.5, delay: Math.min(index, 6) * 0.06, ease: EASE_OUT_EXPO }}
      whileHover={reduced ? undefined : { y: -3 }}
      className={cn(
        'group flex scroll-mt-28 flex-col rounded-xl border p-lg transition-colors',
        dark
          ? 'border-neutral-800 bg-neutral-900 hover:border-neutral-700'
          : 'border-neutral-200 bg-neutral-50 hover:border-primary/25 hover:bg-white'
      )}
    >
      <div className="mb-md flex items-start justify-between gap-md">
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
          {study.tag}
        </span>
        <div className="text-right">
          <p
            className={cn(
              'font-mono text-xl font-black',
              dark ? 'text-neutral-50' : 'text-neutral-900'
            )}
          >
            {study.metric}
          </p>
          <p
            className={cn(
              'font-mono text-[9px] font-bold uppercase tracking-wider',
              dark ? 'text-neutral-400' : 'text-neutral-600'
            )}
          >
            {study.metricLabel}
          </p>
        </div>
      </div>

      <h3
        className={cn(
          'text-lg font-bold tracking-tight',
          dark ? 'text-neutral-50' : 'text-neutral-900'
        )}
      >
        {study.title}
      </h3>
      <p
        className={cn(
          'mt-xs font-mono text-[10px] font-bold uppercase tracking-wider',
          dark ? 'text-neutral-400' : 'text-neutral-600'
        )}
      >
        {study.subtitle}
      </p>
      <p
        className={cn(
          'mt-sm flex-1 text-sm leading-relaxed',
          dark ? 'text-neutral-400' : 'text-neutral-600'
        )}
      >
        {study.description}
      </p>

      <div
        className={cn(
          'mt-lg flex items-center justify-between border-t pt-md',
          dark ? 'border-neutral-800' : 'border-neutral-200'
        )}
      >
        <div className="flex flex-wrap items-center gap-sm">
          {study.stack.map((slug) => (
            <span
              key={slug}
              className={cn(
                'flex h-8 w-8 items-center justify-center rounded-md border',
                dark ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-neutral-50'
              )}
              title={slug}
            >
              <BrandIcon slug={slug} size={16} variant={dark ? 'stack-dark' : 'tech'} />
            </span>
          ))}
        </div>
        <Link
          href={study.href}
          className={cn(
            'text-xs font-bold transition-colors',
            dark
              ? 'text-neutral-400 group-hover:text-primary'
              : 'text-neutral-600 group-hover:text-primary'
          )}
        >
          Details →
        </Link>
      </div>
    </motion.article>
  );
}
