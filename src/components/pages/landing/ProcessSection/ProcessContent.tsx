'use client';

import { motion, useReducedMotion } from 'motion/react';
import {
  fadeUp,
  motionVariants,
  staggerContainer,
  viewport,
} from '@/components/shared/motion/variants';
import { LANDING_PROCESS } from '@/constants/component/landing-data';

export default function ProcessContent() {
  const reduced = useReducedMotion();

  return (
    <section className="site-section w-full border-t border-neutral-200 bg-white py-2xl">
      <div className="site-container">
        <motion.div
          variants={motionVariants(reduced, staggerContainer)}
          initial="hidden"
          whileInView="show"
          viewport={reduced ? undefined : viewport}
          className="mb-2xl flex flex-col gap-lg md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-3xl space-y-md">
            <motion.span
              variants={motionVariants(reduced, fadeUp)}
              className="block font-mono text-xs font-bold uppercase tracking-widest text-primary"
            >
              How we work
            </motion.span>
            <motion.h2
              variants={motionVariants(reduced, fadeUp)}
              className="text-balance text-3xl font-black tracking-tight text-neutral-900 md:text-4xl"
            >
              A delivery process built for predictability.
            </motion.h2>
          </div>
          <motion.p
            variants={motionVariants(reduced, fadeUp)}
            className="max-w-content text-sm leading-relaxed text-neutral-500"
          >
            No black-box sprints. Every phase has clear outputs, owners, and review gates before we
            move forward.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-4">
          {LANDING_PROCESS.map((step, index) => (
            <motion.article
              key={step.step}
              initial={reduced ? false : { opacity: 0, y: 28 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={reduced ? undefined : viewport}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-xl border border-neutral-200 bg-neutral-50 p-lg"
            >
              <span className="font-mono text-4xl font-black tracking-tight text-primary/25">
                {step.step}
              </span>
              <h3 className="mt-md text-lg font-bold tracking-tight text-neutral-900">
                {step.title}
              </h3>
              <p className="mt-sm text-sm leading-relaxed text-neutral-500">{step.description}</p>
              {index < LANDING_PROCESS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-neutral-300 lg:block"
                />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
