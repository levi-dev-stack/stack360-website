'use client';

import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import {
  fadeUp,
  motionVariants,
  scaleIn,
  staggerContainer,
} from '@/components/shared/motion/variants';
import { useMotionVisible } from '@/hooks/use-motion-visible';

interface TrustBadge {
  src: string;
  label: string;
  alt: string;
}

const TRUST_BADGES: readonly TrustBadge[] = [
  {
    src: '/assets/badges/clutch.webp',
    label: 'Clutch — Top Web Development Company 2024',
    alt: 'Clutch Top Web Development Company 2024 badge',
  },
  {
    src: '/assets/badges/Goodfirms.webp',
    label: 'GoodFirms — Top Rated Web Development',
    alt: 'GoodFirms Top Rated Web Development Company badge',
  },
  {
    src: '/assets/badges/Upwork.webp',
    label: 'Upwork — Top Rated Seller',
    alt: 'Upwork Top Rated Seller badge',
  },
  {
    src: '/assets/badges/Fiverr.webp',
    label: 'Fiverr — Top Rated Seller',
    alt: 'Fiverr Top Rated Seller badge',
  },
];

export default function TrustBadges() {
  const reduced = useReducedMotion();
  const { ref, visible } = useMotionVisible<HTMLElement>();

  return (
    <motion.section
      ref={ref}
      className="site-section border-t border-neutral-200 bg-neutral-50 py-2xl md:py-3xl"
      aria-labelledby="recognition-heading"
    >
      <div className="site-container flex flex-col items-center gap-xl md:gap-2xl">
        <motion.div
          variants={motionVariants(reduced, fadeUp)}
          initial={false}
          animate={visible ? 'show' : 'hidden'}
          className="max-w-3xl text-center"
        >
          <h2
            id="recognition-heading"
            className="text-balance text-3xl font-black tracking-tight text-neutral-900 md:text-4xl lg:text-[2.75rem] lg:leading-tight"
          >
            Top-rated on the platforms that{' '}
            <span className="text-primary">vet software partners.</span>
          </h2>
          <p className="mt-md text-pretty text-base leading-relaxed text-neutral-700 md:text-lg">
            Independent, verified recognition from Clutch, GoodFirms, Upwork, and Fiverr — not
            self-awarded seals.
          </p>
        </motion.div>

        <motion.div
          variants={motionVariants(reduced, staggerContainer)}
          initial={false}
          animate={visible ? 'show' : 'hidden'}
          className="w-full max-w-6xl bg-neutral-200"
        >
          <motion.ul className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_BADGES.map((badge) => (
              <motion.li
                key={badge.src}
                variants={motionVariants(reduced, scaleIn)}
                className="group flex min-h-56 flex-col items-center justify-between gap-lg bg-neutral-50 p-xl transition-colors duration-300 ease-out hover:bg-white sm:min-h-64 md:min-h-72 md:p-2xl lg:min-h-80"
              >
                <p className="text-center font-mono text-[10px] font-bold uppercase leading-snug tracking-[0.12em] text-neutral-600 sm:text-xs">
                  {badge.label}
                </p>

                <div className="relative flex w-full flex-1 items-center justify-center">
                  <div className="relative h-28 w-full max-w-[220px] transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:h-32 md:h-40 lg:h-44 lg:max-w-[260px]">
                    <Image
                      src={badge.src}
                      alt={badge.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 260px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
