'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import {
  EASE_OUT_EXPO,
  fadeUp,
  motionVariants,
  slideFromRight,
  staggerContainer,
  viewport,
} from '@/components/shared/motion/variants';

interface CtaLink {
  label: string;
  href: string;
}

interface PageClosingCtaProps {
  title: string;
  description: string;
  primary: CtaLink;
  secondary?: CtaLink;
}

export default function PageClosingCta({
  title,
  description,
  primary,
  secondary,
}: PageClosingCtaProps) {
  const reduced = useReducedMotion();

  return (
    <motion.section
      initial={reduced ? false : { opacity: 0 }}
      whileInView={reduced ? undefined : { opacity: 1 }}
      viewport={reduced ? undefined : viewport}
      transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
      className="site-section border-t border-neutral-200 bg-neutral-950 py-2xl"
    >
      <div className="site-container flex flex-col items-start justify-between gap-lg md:flex-row md:items-center">
        <motion.div
          variants={motionVariants(reduced, staggerContainer)}
          initial="hidden"
          whileInView="show"
          viewport={reduced ? undefined : viewport}
          className="max-w-3xl space-y-sm"
        >
          <motion.h2
            variants={motionVariants(reduced, fadeUp)}
            className="text-balance text-2xl font-bold tracking-tight text-neutral-50"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={motionVariants(reduced, fadeUp)}
            className="text-sm leading-relaxed text-neutral-400"
          >
            {description}
          </motion.p>
        </motion.div>

        <motion.div
          variants={motionVariants(reduced, slideFromRight)}
          initial="hidden"
          whileInView="show"
          viewport={reduced ? undefined : viewport}
          className="flex flex-wrap gap-sm"
        >
          <motion.div whileHover={reduced ? undefined : { scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href={primary.href}
              className="inline-block rounded-sm bg-primary px-xl py-md text-sm font-bold text-neutral-50 shadow-md transition-colors hover:bg-primary-dark"
            >
              {primary.label}
            </Link>
          </motion.div>
          {secondary && (
            <motion.div
              whileHover={reduced ? undefined : { scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href={secondary.href}
                className="inline-block rounded-sm border border-neutral-700 px-xl py-md text-sm font-bold text-neutral-50 transition-colors hover:border-neutral-500"
              >
                {secondary.label}
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
