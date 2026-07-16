'use client';

import { motion, useReducedMotion } from 'motion/react';
import Link from 'next/link';
import MotionSection from '@/components/shared/motion/MotionSection';
import { EASE_OUT_EXPO, viewport } from '@/components/shared/motion/variants';
import PageClosingCta from '@/components/shared/PageClosingCta';
import PageHero from '@/components/shared/PageHero';
import { SUCCESS_STORIES, SUCCESS_STORIES_HERO } from '@/constants/component/our-work-cases-data';
import { OUR_WORK_CTA } from '@/constants/component/our-work-data';
import { cn } from '@/styles/tailwind.utils';

export default function ClientSuccessStoriesPage() {
  const reduced = useReducedMotion();

  return (
    <div className="flex w-full flex-col">
      <PageHero {...SUCCESS_STORIES_HERO} />

      <MotionSection className="py-2xl">
        <div className="site-container space-y-2xl">
          {SUCCESS_STORIES.map((story, index) => {
            const flip = index % 2 === 1;
            return (
              <motion.blockquote
                key={`${story.company}-${story.name}`}
                initial={reduced ? false : { opacity: 0, y: 24 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={reduced ? undefined : viewport}
                transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                className={cn(
                  'grid grid-cols-1 gap-lg border-t border-neutral-200 pt-2xl lg:grid-cols-12 lg:gap-xl',
                  flip && 'lg:[direction:rtl] lg:*:[direction:ltr]'
                )}
              >
                <div className="lg:col-span-4">
                  <p className="font-mono text-2xl font-black tracking-tight text-primary">
                    {story.metric}
                  </p>
                  <p className="mt-lg text-sm font-bold text-neutral-900">{story.name}</p>
                  <p className="mt-xs font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                    {story.role} · {story.company}
                  </p>
                  <p className="mt-xs text-xs text-neutral-500">{story.industry}</p>
                  <Link
                    href={story.relatedHref}
                    className="mt-md inline-flex text-xs font-bold text-primary hover:text-primary-dark"
                  >
                    Related case →
                  </Link>
                </div>
                <p className="text-pretty text-lg leading-relaxed text-neutral-700 lg:col-span-8 lg:text-xl">
                  “{story.quote}”
                </p>
              </motion.blockquote>
            );
          })}
        </div>
      </MotionSection>

      <PageClosingCta {...OUR_WORK_CTA} />
    </div>
  );
}
