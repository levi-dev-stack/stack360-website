'use client';

import { UserRound } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';
import MotionSection from '@/components/shared/motion/MotionSection';
import { EASE_OUT_EXPO, viewport } from '@/components/shared/motion/variants';
import PageClosingCta from '@/components/shared/PageClosingCta';
import PageHero from '@/components/shared/PageHero';
import { LANDING_TESTIMONIALS, type Testimonial } from '@/constants/component/landing-data';
import { SUCCESS_STORIES, SUCCESS_STORIES_HERO } from '@/constants/component/our-work-cases-data';
import { OUR_WORK_CTA } from '@/constants/component/our-work-data';

const PLACEHOLDER = '—';

function isFilledTestimonial(item: Testimonial): boolean {
  return ![item.quote, item.role, item.company, item.industry].some(
    (value) => value.trim() === PLACEHOLDER || value.trim() === '-'
  );
}

const SUCCESS_TESTIMONIALS: Testimonial[] = [
  ...LANDING_TESTIMONIALS.filter(isFilledTestimonial),
  ...SUCCESS_STORIES,
];

interface StoryAvatarProps {
  src?: string;
  alt: string;
}

function StoryAvatar({ src, alt }: StoryAvatarProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;

  return (
    <div className="relative size-16 shrink-0 overflow-hidden rounded-md border border-neutral-200 bg-neutral-100">
      {showImage ? (
        <Image
          src={src as string}
          alt={alt}
          fill
          sizes="64px"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center bg-neutral-100"
        >
          <UserRound size={20} strokeWidth={1.5} className="text-neutral-400" />
        </div>
      )}
    </div>
  );
}

export default function ClientSuccessStoriesPage() {
  const reduced = useReducedMotion();

  return (
    <div className="flex w-full flex-col">
      <PageHero {...SUCCESS_STORIES_HERO} />

      <MotionSection className="py-lg">
        <div className="site-container divide-y divide-neutral-200 border-y border-neutral-200">
          {SUCCESS_TESTIMONIALS.map((story) => (
            <motion.blockquote
              key={`${story.company}-${story.name}`}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={reduced ? undefined : viewport}
              transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
              className="grid gap-md py-md md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:items-center md:gap-lg"
            >
              <div className="flex items-center gap-md">
                <StoryAvatar
                  src={story.avatar}
                  alt={`${story.name}, ${story.role} at ${story.company}`}
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-neutral-900">{story.name}</p>
                  <p className="mt-xs font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                    {story.role} · {story.company}
                  </p>
                  <p className="mt-xs truncate text-xs text-neutral-500">{story.industry}</p>
                  <p className="mt-xs font-mono text-[11px] font-bold text-primary">
                    <span className="sr-only">{story.rating} out of 5 stars</span>
                    <span aria-hidden>{'★'.repeat(story.rating)}</span>
                    <span className="ml-xs text-neutral-400" aria-hidden>
                      {story.rating}.0
                    </span>
                  </p>
                </div>
              </div>
              <p className="text-pretty text-sm leading-snug text-neutral-700 md:text-[0.9375rem] md:leading-relaxed">
                “{story.quote}”
              </p>
            </motion.blockquote>
          ))}
        </div>
      </MotionSection>

      <PageClosingCta {...OUR_WORK_CTA} />
    </div>
  );
}
