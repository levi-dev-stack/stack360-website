'use client';

import { motion, useReducedMotion } from 'motion/react';
import { fadeUp, motionVariants, staggerContainer } from '@/components/shared/motion/variants';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
}

export default function PageHero({ eyebrow, title, highlight, description }: PageHeroProps) {
  const reduced = useReducedMotion();

  return (
    <section className="site-section border-b border-neutral-200 bg-linear-to-b from-neutral-50 via-neutral-50 to-neutral-100 py-2xl">
      <div className="site-container">
        <motion.div
          variants={motionVariants(reduced, staggerContainer)}
          initial="hidden"
          animate="show"
          className="max-w-3xl space-y-md"
        >
          <motion.span
            variants={motionVariants(reduced, fadeUp)}
            className="block font-mono text-xs font-bold uppercase tracking-widest text-primary"
          >
            {eyebrow}
          </motion.span>
          <motion.h1
            variants={motionVariants(reduced, fadeUp)}
            className="text-balance text-4xl font-black leading-tight tracking-tight text-neutral-900 md:text-5xl"
          >
            {title}
            {highlight && (
              <>
                {' '}
                <span className="text-primary">{highlight}</span>
              </>
            )}
          </motion.h1>
          <motion.p
            variants={motionVariants(reduced, fadeUp)}
            className="max-w-3xl text-base leading-relaxed text-neutral-600"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
