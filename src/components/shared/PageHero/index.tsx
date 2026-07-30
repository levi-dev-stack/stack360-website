'use client';

import { motion, useReducedMotion } from 'motion/react';
import Link from 'next/link';
import { fadeUp, motionVariants, staggerContainer } from '@/components/shared/motion/variants';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  cta?: { label: string; href: string };
}

export default function PageHero({ eyebrow, title, highlight, description, cta }: PageHeroProps) {
  const reduced = useReducedMotion();

  return (
    <section className="site-section border-b border-neutral-200 bg-linear-to-b from-neutral-50 via-neutral-50 to-neutral-100 py-2xl">
      <div className="site-container">
        {/*
          initial={false}: hero copy is in the HTML at full opacity for SSR / no-JS / LCP.
          Stagger entrance is intentionally skipped — visibility beats decoration here.
        */}
        <motion.div
          variants={motionVariants(reduced, staggerContainer)}
          initial={false}
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
          {cta ? (
            <motion.div variants={motionVariants(reduced, fadeUp)}>
              <Link
                href={cta.href}
                className="inline-flex min-h-11 items-center justify-center rounded-sm bg-primary px-lg py-sm text-sm font-bold text-neutral-50 transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {cta.label}
              </Link>
            </motion.div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
