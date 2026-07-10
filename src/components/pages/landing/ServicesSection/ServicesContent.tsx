'use client';

import { motion, useReducedMotion } from 'motion/react';
import BrandIcon from '@/components/shared/BrandIcon';
import {
  fadeUp,
  motionVariants,
  staggerContainer,
  viewport,
} from '@/components/shared/motion/variants';
import { LANDING_SERVICES, LANDING_TECH_STACK } from '@/constants/component/landing-data';

export default function ServicesContent() {
  const reduced = useReducedMotion();

  return (
    <section className="site-section w-full bg-neutral-50 py-2xl">
      <div className="site-container">
        <motion.div
          variants={motionVariants(reduced, staggerContainer)}
          initial="hidden"
          whileInView="show"
          viewport={reduced ? undefined : viewport}
          className="mb-2xl max-w-4xl space-y-md"
        >
          <motion.h2
            variants={motionVariants(reduced, fadeUp)}
            className="text-balance text-3xl font-black tracking-tight text-neutral-900 md:text-4xl"
          >
            Services engineered for every stage of your product.
          </motion.h2>
          <motion.p
            variants={motionVariants(reduced, fadeUp)}
            className="text-sm leading-relaxed text-neutral-600"
          >
            From web and mobile to DevOps, design, QA, and data — one studio accountable for the
            full stack.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-2xl lg:grid-cols-3">
          {LANDING_SERVICES.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={reduced ? undefined : viewport}
              transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
              className="space-y-md"
            >
              <h3 className="border-b border-neutral-200 pb-sm font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-600">
                {group.category}
              </h3>
              <ul className="space-y-md">
                {group.items.map((item) => (
                  <li
                    key={item.title}
                    className="group rounded-lg border border-neutral-200 bg-neutral-50 p-md transition-colors hover:border-primary/25 hover:bg-neutral-50"
                  >
                    <div className="mb-sm flex items-center gap-sm">
                      <span className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50">
                        <BrandIcon slug={item.icon} size={22} variant="service" />
                      </span>
                      <h4 className="text-sm font-bold text-neutral-900">{item.title}</h4>
                    </div>
                    <p className="text-sm leading-relaxed text-neutral-600">{item.description}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={reduced ? undefined : viewport}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-2xl rounded-xl border border-neutral-200 bg-neutral-50 p-lg"
        >
          <p className="mb-lg font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-600">
            The right tech stack for every visionary project
          </p>
          <div className="flex flex-wrap gap-md">
            {LANDING_TECH_STACK.map((slug) => (
              <div
                key={slug}
                className="group flex h-12 w-12 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 transition-colors hover:border-primary/30 hover:bg-white"
                title={slug}
              >
                <BrandIcon slug={slug} size={20} variant="tech" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
