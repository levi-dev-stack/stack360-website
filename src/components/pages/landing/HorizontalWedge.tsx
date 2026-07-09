'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
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

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-68%']);

  return (
    <div ref={targetRef} className="relative h-[300vh] bg-neutral-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center lg:px-xl">
        <div className="mx-auto w-full mb-xl space-y-sm">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary block">
            WHY STACK360
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-neutral-50 max-w-3xl leading-tight">
            {sectionTitle}{' '}
            <span className="text-primary italic font-medium underline decoration-neutral-800 decoration-2 underline-offset-4">
              {sectionHighlight}
            </span>
          </h2>
          <p className="text-sm text-neutral-400 max-w-5xl leading-relaxed">{sectionSubtitle}</p>
        </div>

        <div className="mx-auto max-w-content w-full overflow-visible relative">
          <motion.div style={{ x }} className="flex gap-lg w-max pr-xl">
            {cards.map((card, idx) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explain later>
              <WedgeCard key={idx} {...card} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
