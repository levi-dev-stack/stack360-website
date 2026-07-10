'use client';

import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import MotionCard from '@/components/shared/motion/MotionCard';
import { EASE_OUT_EXPO, viewport } from '@/components/shared/motion/variants';

export interface Leader {
  name: string;
  role: string;
  image: { src: string; alt: string };
}

interface LeaderCardsProps {
  leaders: readonly Leader[];
}

export default function LeaderCards({ leaders }: LeaderCardsProps) {
  const reduced = useReducedMotion();

  return (
    <div className="grid grid-cols-1 gap-lg sm:grid-cols-2 lg:grid-cols-3">
      {leaders.map((leader, index) => (
        <motion.article
          key={leader.name}
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={reduced ? undefined : viewport}
          transition={{ duration: 0.5, delay: index * 0.08, ease: EASE_OUT_EXPO }}
        >
          <MotionCard className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 shadow-sm">
            <div className="relative aspect-4/5 overflow-hidden bg-neutral-200">
              <Image
                src={leader.image.src}
                alt={leader.image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="border-t border-neutral-200 p-lg">
              <h3 className="text-lg font-bold tracking-tight text-neutral-900">{leader.name}</h3>
              <p className="mt-xs font-mono text-[10px] font-bold uppercase tracking-wider text-primary">
                {leader.role}
              </p>
            </div>
          </MotionCard>
        </motion.article>
      ))}
    </div>
  );
}
