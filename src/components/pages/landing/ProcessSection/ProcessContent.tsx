'use client';

import { Compass, Cpu, Layers, type LucideIcon, Rocket } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import {
  fadeUp,
  motionVariants,
  staggerContainer,
  viewport,
} from '@/components/shared/motion/variants';
import { LANDING_PROCESS } from '@/constants/component/landing-data';
import { cn } from '@/styles/tailwind.utils';

const PROCESS_ICONS: Record<number, LucideIcon> = {
  0: Compass,
  1: Layers,
  2: Cpu,
  3: Rocket,
};

export default function ProcessContent() {
  const reduced = useReducedMotion();

  return (
    <section className="site-section w-full border-t border-neutral-200 bg-neutral-50 py-2xl">
      <div className="site-container">
        <motion.div
          variants={motionVariants(reduced, staggerContainer)}
          initial="hidden"
          whileInView="show"
          viewport={reduced ? undefined : viewport}
          className="mb-3xl flex flex-col gap-lg md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-3xl space-y-md">
            <motion.h2
              variants={motionVariants(reduced, fadeUp)}
              className="text-balance text-3xl font-black tracking-tight text-neutral-900 md:text-4xl"
            >
              A delivery process built for predictability.
            </motion.h2>
          </div>
          <motion.p
            variants={motionVariants(reduced, fadeUp)}
            className="max-w-content text-sm leading-relaxed text-neutral-600 md:text-base"
          >
            No black-box sprints. Every phase has clear outputs, owners, and review gates before we
            move forward.
          </motion.p>
        </motion.div>

        {/* Timeline Grid */}
        <ol className="relative grid grid-cols-1 gap-xl sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute top-[26px] hidden h-[2px] w-full bg-neutral-200/70 lg:block"
            aria-hidden="true"
          />

          {LANDING_PROCESS.map((step, index) => {
            const IconComponent = PROCESS_ICONS[index] || Compass;

            return (
              <motion.li
                key={step.step || index}
                initial={reduced ? false : { opacity: 0, y: 28 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={reduced ? undefined : viewport}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col pt-4"
              >
                <div className="relative mb-md flex items-center">
                  <div
                    className={cn(
                      'z-10 flex h-12 w-12 items-center justify-center rounded-xl border bg-white shadow-sm transition-all duration-300',
                      'border-neutral-200 text-neutral-500 group-hover:scale-110 group-hover:border-primary/40 group-hover:text-primary group-hover:shadow-md'
                    )}
                  >
                    <IconComponent className="h-5 w-5 stroke-[1.75]" />
                  </div>

                  <span className="ml-md font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-neutral-600 transition-colors">
                    Phase 0{index + 1}
                  </span>
                </div>

                <div className="rounded-2xl border border-transparent p-sm transition-all duration-300 group-hover:border-neutral-200/60 group-hover:bg-white/50 group-hover:p-sm">
                  <h3 className="text-base font-bold tracking-tight text-neutral-900 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="mt-xs text-sm leading-relaxed text-neutral-600">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
