'use client';

import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { EASE_OUT_EXPO } from '@/components/shared/motion/variants';
import { LANDING_TESTIMONIALS } from '@/constants/component/landing-data';

export default function TestimonialsCarousel() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const total = LANDING_TESTIMONIALS.length;
  const current = LANDING_TESTIMONIALS[active];

  const goTo = useCallback(
    (index: number) => {
      setActive((index + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (reduced) {
      return;
    }

    const timer = window.setInterval(() => {
      setActive((i) => (i + 1) % total);
    }, 8000);

    return () => window.clearInterval(timer);
  }, [reduced, total]);

  return (
    <section className="site-section relative w-full overflow-hidden bg-neutral-black py-2xl">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-primary/10 blur-[100px]"
      />

      <div className="site-container relative">
        <div className="mb-xl flex flex-col gap-lg sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl space-y-md">
            <span className="block font-mono text-xs font-bold uppercase tracking-widest text-primary">
              Voices
            </span>
            <h2 className="text-balance text-3xl font-black tracking-tight text-neutral-50 md:text-4xl">
              What our partners <span className="font-medium italic text-primary">say.</span>
            </h2>
          </div>

          <div className="flex items-center gap-sm sm:shrink-0">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-700 text-neutral-400 transition-colors hover:border-primary/40 hover:text-primary"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-700 text-neutral-400 transition-colors hover:border-primary/40 hover:text-primary"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="relative min-h-[20rem] md:min-h-[18rem]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={active}
              initial={reduced ? false : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduced ? undefined : { opacity: 0, x: -24 }}
              transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
              className="grid grid-cols-1 overflow-hidden rounded-2xl border border-neutral-800 bg-linear-to-br from-neutral-800 to-neutral-900 md:grid-cols-[minmax(12rem,28%)_1fr]"
            >
              <div className="relative aspect-4/3 md:aspect-auto md:min-h-[18rem]">
                <Image
                  src={current.avatar}
                  alt={`${current.name}, ${current.role} at ${current.company}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 280px"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-linear-to-t from-neutral-900/60 to-transparent md:bg-linear-to-r"
                />
              </div>

              <div className="flex flex-col justify-between gap-lg p-lg md:p-xl">
                <div>
                  <Quote
                    size={28}
                    className="mb-md text-primary"
                    fill="currentColor"
                    strokeWidth={0}
                    aria-hidden
                  />
                  <blockquote className="max-w-3xl text-pretty text-lg font-medium leading-relaxed text-neutral-100 md:text-2xl">
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="flex flex-col gap-md sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-bold text-neutral-50">
                      {current.name} · {current.role}
                    </p>
                    <p className="mt-xs text-sm text-neutral-500">
                      {current.company} · {current.industry}
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <p className="text-sm tracking-tight text-primary" aria-hidden>
                      {'★'.repeat(current.rating)}
                    </p>
                    <p className="font-mono text-xs font-bold text-neutral-400">
                      {current.rating}.0 / 5.0
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-lg flex justify-center gap-sm">
          {LANDING_TESTIMONIALS.map((item, index) => (
            <button
              key={item.company}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show testimonial from ${item.name}`}
              aria-current={index === active ? 'true' : undefined}
              className={`h-2 rounded-full transition-all ${
                index === active ? 'w-8 bg-primary' : 'w-2 bg-neutral-700 hover:bg-neutral-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
