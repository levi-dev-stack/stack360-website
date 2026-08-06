'use client';

import { ChevronLeft, ChevronRight, Pause, Play, Quote, UserRound } from 'lucide-react';
import { AnimatePresence, motion, type PanInfo, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { EASE_OUT_EXPO } from '@/components/shared/motion/variants';
import { LANDING_TESTIMONIALS } from '@/constants/component/landing-data';

interface TestimonialAvatarProps {
  src?: string;
  alt: string;
}

function TestimonialAvatar({ src, alt }: TestimonialAvatarProps) {
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setLoading(true);
    setFailed(false);
  }, []);

  const showImage = Boolean(src) && !failed;

  return (
    <div className="relative aspect-4/3 h-full min-h-56 overflow-hidden bg-neutral-900 md:aspect-auto md:min-h-0">
      {/* Tailwind Skeleton Loader */}
      {loading && showImage && (
        <div className="absolute inset-0 z-10 flex animate-pulse items-center justify-center bg-neutral-800">
          <div className="h-12 w-12 rounded-full bg-neutral-700/60" />
        </div>
      )}

      {showImage ? (
        <>
          <Image
            src={src as string}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 280px"
            className={`object-cover transition-opacity duration-300 ${
              loading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => setLoading(false)}
            onError={() => {
              setLoading(false);
              setFailed(true);
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-linear-to-t from-neutral-900/60 to-transparent md:bg-linear-to-r"
          />
        </>
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-neutral-800 to-neutral-900"
        >
          <div className="pointer-events-none absolute inset-0 bg-primary/5" />
          <span className="relative flex h-20 w-20 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800/80 text-neutral-400 shadow-sm">
            <UserRound size={34} strokeWidth={1.5} />
          </span>
        </div>
      )}
    </div>
  );
}

export default function TestimonialsCarousel() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
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

  // Handle swipe gestures
  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const swipeThreshold = 50;
    const velocityThreshold = 200;

    if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      next();
    } else if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
      prev();
    }
  };

  useEffect(() => {
    if (reduced || paused) {
      return;
    }

    const timer = window.setInterval(() => {
      setActive((i) => (i + 1) % total);
    }, 8000);

    return () => window.clearInterval(timer);
  }, [reduced, paused, total]);

  return (
    <section className="site-section relative w-full overflow-hidden border-t border-neutral-800 bg-linear-to-b from-neutral-black to-neutral-950 py-2xl">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-primary/10 blur-[80px]"
      />

      <div className="site-container relative">
        <div className="mb-xl flex flex-col gap-lg sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl space-y-md">
            <h2 className="text-balance text-3xl font-black tracking-tight text-neutral-50 md:text-4xl">
              What our partners <span className="font-medium italic text-primary">say.</span>
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-sm sm:shrink-0">
            {!reduced && (
              <button
                type="button"
                onClick={() => setPaused((value) => !value)}
                aria-label={paused ? 'Play testimonials' : 'Pause testimonials'}
                aria-pressed={paused}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-700 text-neutral-300 transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {paused ? <Play size={16} aria-hidden /> : <Pause size={16} aria-hidden />}
              </button>
            )}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-700 text-neutral-300 transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-700 text-neutral-300 transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Outer fixed height frame */}
        <div
          className="relative h-[520px] w-full sm:h-[480px] md:h-[360px]"
          aria-live="polite"
          aria-atomic="true"
        >
          {/* Mobile Overlay Directional Controls */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-700/80 bg-neutral-900/80 text-neutral-200 shadow-lg backdrop-blur-xs transition-transform active:scale-95 sm:hidden"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-700/80 bg-neutral-900/80 text-neutral-200 shadow-lg backdrop-blur-xs transition-transform active:scale-95 sm:hidden"
          >
            <ChevronRight size={20} />
          </button>

          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={active}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
              initial={reduced ? false : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduced ? undefined : { opacity: 0, x: -24 }}
              transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
              className="absolute inset-0 grid h-full w-full touch-pan-y select-none grid-cols-1 overflow-hidden rounded-2xl border border-neutral-800 bg-linear-to-br from-neutral-800 to-neutral-900 md:grid-cols-[minmax(12rem,28%)_1fr]"
            >
              <TestimonialAvatar
                key={current.avatar ?? current.name}
                src={current.avatar}
                alt={`${current.name}, ${current.role} at ${current.company}`}
              />

              <div className="flex h-full flex-col justify-between gap-md overflow-y-auto p-lg md:p-xl">
                <div>
                  <Quote
                    size={28}
                    className="mb-md text-primary"
                    fill="currentColor"
                    strokeWidth={0}
                    aria-hidden
                  />
                  <blockquote className="max-w-3xl text-pretty text-base font-medium leading-relaxed text-neutral-100 sm:text-lg md:text-xl lg:text-2xl">
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="flex flex-col gap-md sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-bold text-neutral-50">
                      {[current.name, current.role].filter(Boolean).join(' · ')}
                    </p>
                    {[current.company, current.industry].some(Boolean) && (
                      <p className="mt-xs text-sm text-neutral-400">
                        {[current.company, current.industry].filter(Boolean).join(' · ')}
                      </p>
                    )}
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
              key={item.name}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show testimonial from ${item.name}`}
              aria-current={index === active ? 'true' : undefined}
              className="flex h-11 w-11 items-center justify-center"
            >
              <span
                className={`block h-2 rounded-full transition-all ${
                  index === active ? 'w-8 bg-primary' : 'w-2 bg-neutral-700 hover:bg-neutral-500'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
