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
  alt: string;
}

const TRUST_BADGES: readonly TrustBadge[] = [
  { src: '/assets/badges/clutch.webp', alt: 'Clutch — Top Web Development Company 2024' },
  { src: '/assets/badges/Goodfirms.webp', alt: 'GoodFirms — Top Rated Web Development Company' },
  { src: '/assets/badges/Upwork.webp', alt: 'Upwork — Top Rated Seller' },
  { src: '/assets/badges/Fiverr.webp', alt: 'Fiverr — Top Rated Seller' },
  { src: '/assets/badges/crunchbase.webp', alt: 'Crunchbase — Verified Company' },
];

export default function TrustBadges() {
  const reduced = useReducedMotion();
  const { ref, visible } = useMotionVisible<HTMLElement>();

  return (
    <motion.section
      ref={ref}
      className="site-section border-t border-neutral-200 bg-linear-to-b from-neutral-50 to-neutral-100 py-2xl"
      aria-labelledby="recognition-heading"
    >
      <div className="site-container flex flex-col items-center gap-xl text-center">
        <motion.div
          variants={motionVariants(reduced, fadeUp)}
          initial={false}
          animate={visible ? 'show' : 'hidden'}
        >
          <h2
            id="recognition-heading"
            className="text-balance text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl"
          >
            Top-rated on the platforms that vet software partners.
          </h2>
          <p className="text-pretty text-sm leading-relaxed text-neutral-600">
            Independent, verified recognition from Clutch, GoodFirms, Upwork, Fiverr, and Crunchbase
            — not self-awarded seals.
          </p>
        </motion.div>

        <motion.ul
          variants={motionVariants(reduced, staggerContainer)}
          initial={false}
          animate={visible ? 'show' : 'hidden'}
          className="flex flex-wrap items-center justify-center gap-md sm:gap-lg"
        >
          {TRUST_BADGES.map((badge) => (
            <motion.li key={badge.src} variants={motionVariants(reduced, scaleIn)}>
              <div className="rounded-xl bg-neutral-50 p-sm shadow-sm ring-1 ring-neutral-200 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <div className="relative h-16 w-16 sm:h-20 sm:w-20">
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
}
