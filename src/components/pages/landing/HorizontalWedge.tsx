'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { WedgeCard, type WedgeCardProps } from '@/components/shared/WedgeCard';

interface HorizontalWedgeTrackProps {
  sectionTitle: string;
  sectionHighlight: string;
  sectionSubtitle: string;
  cards: WedgeCardProps[];
}

export default function HorizontalWedgeTrack({
  sectionTitle,
  sectionHighlight,
  sectionSubtitle,
  cards,
}: HorizontalWedgeTrackProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxShift, setMaxShift] = useState(0);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
    if (reduced) {
      setMaxShift(0);
      return;
    }

    const updateShift = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;

      if (!viewport || !track) {
        return;
      }

      const nextShift = Math.max(0, track.scrollWidth - viewport.clientWidth);
      setMaxShift(nextShift);
    };

    updateShift();

    const resizeObserver = new ResizeObserver(updateShift);
    if (viewportRef.current) {
      resizeObserver.observe(viewportRef.current);
    }
    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener('resize', updateShift);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateShift);
    };
  }, [reduced]);

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxShift]);

  if (reduced) {
    return (
      <section className="site-section bg-neutral-black py-2xl">
        <div className="site-container space-y-xl">
          <div className="w-full space-y-sm">
            <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-tight text-neutral-50 md:text-5xl">
              {sectionTitle}{' '}
              <span className="font-medium italic text-primary underline decoration-neutral-800 decoration-2 underline-offset-4">
                {sectionHighlight}
              </span>
            </h2>
            <p className="max-w-4xl text-sm leading-relaxed text-neutral-400">{sectionSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 gap-lg md:grid-cols-2 xl:grid-cols-3">
            {cards.map((card, idx) => (
              <WedgeCard key={`${card.title}-${idx}`} {...card} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <div ref={targetRef} className="relative h-[180vh] bg-neutral-black">
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden">
        <div className="site-container flex h-full flex-col justify-center">
          <div className="mb-xl w-full space-y-sm">
            <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-tight text-neutral-50 md:text-5xl">
              {sectionTitle}{' '}
              <span className="font-medium italic text-primary underline decoration-neutral-800 decoration-2 underline-offset-4">
                {sectionHighlight}
              </span>
            </h2>
            <p className="max-w-4xl text-sm leading-relaxed text-neutral-400">{sectionSubtitle}</p>
          </div>

          <div ref={viewportRef} className="relative w-full overflow-visible">
            <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-lg">
              {cards.map((card, idx) => (
                <WedgeCard key={`${card.title}-${idx}`} {...card} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
