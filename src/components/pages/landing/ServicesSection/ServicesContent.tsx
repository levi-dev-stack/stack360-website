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
import { LANDING_SERVICES } from '@/constants/component/landing-data';

type ServiceItem = (typeof LANDING_SERVICES)[number]['items'][number];

function ServiceRow({ item }: { item: ServiceItem }) {
  return (
    <Link
      href={item.href}
      className="group flex h-full items-start gap-md rounded-lg px-md py-md transition-colors hover:bg-primary/5"
    >
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-neutral-200 bg-white">
        <BrandIcon slug={item.icon} size={16} variant="service" />
      </span>
      <span className="min-w-0 space-y-sm">
        <span className="block text-sm font-bold text-neutral-900 transition-colors group-hover:text-primary">
          {item.title}
        </span>
        <span className="block text-sm leading-relaxed text-neutral-600">{item.description}</span>
        <span className="flex flex-wrap gap-xs pt-xs">
          {item.skills.map((skill) => (
            <span
              key={skill.slug}
              className="inline-flex items-center gap-1.5 rounded-sm border border-neutral-200 bg-white px-sm py-0.5 text-[11px] text-neutral-600"
            >
              <BrandIcon slug={skill.slug} size={12} variant="tech" />
              {skill.name}
            </span>
          ))}
        </span>
      </span>
    </Link>
  );
}

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
            ERP, CRM, AI, SaaS, and the platform layer underneath — one studio accountable for the
            full stack.
          </motion.p>
        </motion.div>

        <div className="space-y-2xl">
          {LANDING_SERVICES.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={reduced ? undefined : viewport}
              transition={{ duration: 0.5, delay: groupIndex * 0.06 }}
              className="space-y-md"
            >
              <h3 className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                {group.category}
              </h3>
              <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-xs">
                {group.items.map((item) => (
                  <li key={item.title}>
                    <ServiceRow item={item} />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
