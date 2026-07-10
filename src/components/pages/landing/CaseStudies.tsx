'use client';

import { motion, useReducedMotion } from 'motion/react';
import Link from 'next/link';
import BrandIcon from '@/components/shared/BrandIcon';
import {
  fadeUp,
  motionVariants,
  staggerContainer,
  viewport,
} from '@/components/shared/motion/variants';
import { LANDING_CASE_STUDIES } from '@/constants/component/landing-data';

function CaseStudyCard({
  study,
  index,
}: {
  study: (typeof LANDING_CASE_STUDIES)[number];
  index: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={reduced ? undefined : viewport}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex flex-col rounded-xl border border-neutral-800 bg-neutral-900 p-lg transition-colors hover:border-neutral-700"
    >
      <div className="mb-md flex items-start justify-between gap-md">
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
          {study.tag}
        </span>
        <div className="text-right">
          <p className="font-mono text-xl font-black text-neutral-50">{study.metric}</p>
          <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-neutral-500">
            {study.metricLabel}
          </p>
        </div>
      </div>

      <h3 className="text-lg font-bold tracking-tight text-neutral-50">{study.title}</h3>
      <p className="mt-sm flex-1 text-sm leading-relaxed text-neutral-400">{study.description}</p>

      <div className="mt-lg flex items-center justify-between border-t border-neutral-800 pt-md">
        <div className="flex items-center gap-sm">
          {study.stack.map((slug) => (
            <span
              key={slug}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-800 bg-neutral-950"
              title={slug}
            >
              <BrandIcon slug={slug} size={16} variant="stack-dark" />
            </span>
          ))}
        </div>
        <Link
          href="/our-work/case-studies"
          className="text-xs font-bold text-neutral-500 transition-colors group-hover:text-primary"
        >
          View case →
        </Link>
      </div>
    </motion.article>
  );
}

export default function CaseStudiesSection() {
  const reduced = useReducedMotion();

  return (
    <section className="site-section relative w-full overflow-hidden bg-neutral-950 py-2xl">
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-secondary/20 blur-[120px]" />

      <div className="site-container relative">
        <motion.div
          variants={motionVariants(reduced, staggerContainer)}
          initial="hidden"
          whileInView="show"
          viewport={reduced ? undefined : viewport}
          className="mb-2xl flex flex-col gap-lg lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl space-y-md">
            <motion.span
              variants={motionVariants(reduced, fadeUp)}
              className="block font-mono text-xs font-bold uppercase tracking-widest text-primary"
            >
              Our work
            </motion.span>
            <motion.h2
              variants={motionVariants(reduced, fadeUp)}
              className="text-balance text-3xl font-black leading-[1.05] tracking-tight text-neutral-50 md:text-4xl"
            >
              Success stories with measurable outcomes.
            </motion.h2>
            <motion.p
              variants={motionVariants(reduced, fadeUp)}
              className="text-sm leading-relaxed text-neutral-400"
            >
              Real platforms shipped for eCommerce, operations, marketplaces, and health — with
              metrics that survived production.
            </motion.p>
          </div>

          <motion.div variants={motionVariants(reduced, fadeUp)}>
            <Link
              href="/our-work/case-studies"
              className="group inline-flex items-center gap-sm rounded-full bg-secondary px-lg py-md text-sm font-bold text-neutral-50 shadow-md transition-colors hover:bg-secondary-light"
            >
              Explore all cases
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-50/20 transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 gap-lg md:grid-cols-2">
          {LANDING_CASE_STUDIES.map((study, index) => (
            <CaseStudyCard key={study.slug} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
