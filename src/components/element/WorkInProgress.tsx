'use client';

import { ArrowLeft, Hammer } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function formatSegment(segment: string): string {
  return segment
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const instantContainer: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

const instantItem: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

export default function WorkInProgress() {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const lastSegment = pathname.split('/').filter(Boolean).at(-1);
  const title = lastSegment ? formatSegment(lastSegment) : 'Home';

  return (
    <section className="relative w-full min-h-[calc(100vh-4.5rem)] px-lg py-2xl lg:px-2xl">
      <motion.div
        variants={reduced ? instantContainer : containerVariants}
        initial="hidden"
        animate="visible"
        className="relative mx-auto w-full max-w-5xl"
      >
        <div className="w-full rounded-lg border border-neutral-200 bg-neutral-50 p-lg shadow-sm md:p-xl">
          <div className="flex w-full flex-col items-center text-center">
            <motion.div
              variants={reduced ? instantItem : itemVariants}
              className="mb-lg inline-flex items-center gap-sm font-mono text-xs font-bold uppercase tracking-wider text-primary"
            >
              <span className="h-2 w-2 shrink-0 bg-primary" />
              <span>In development</span>
            </motion.div>

            <motion.div
              variants={reduced ? instantItem : itemVariants}
              className="mb-lg w-full space-y-sm"
            >
              <p className="font-mono text-xs text-neutral-600">
                <span className="text-neutral-600">Route</span>{' '}
                <span className="text-neutral-800">{pathname}</span>
              </p>
              <h1 className="w-full text-balance text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
                {title}
              </h1>
            </motion.div>

            <motion.div
              variants={reduced ? instantItem : itemVariants}
              className="mb-xl flex w-full items-center justify-center gap-md rounded-md border border-neutral-200 bg-neutral-100 px-lg py-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary-tint/30 text-primary">
                <Hammer className="h-5 w-5" aria-hidden />
              </div>
              <div className="min-w-0 flex-1 text-left">
                <p className="text-sm font-semibold text-neutral-900">Page under construction</p>
                <p className="mt-xs text-sm leading-relaxed text-neutral-600">
                  We are building this section to match our engineering standards. Check back soon
                  or explore what is already live.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={reduced ? instantItem : itemVariants}
              className="mt-sm w-full border-t border-neutral-200 pt-lg"
            >
              <div className="flex flex-wrap items-center justify-center gap-md">
                <Link
                  href="/"
                  className="inline-flex min-h-11 items-center gap-sm text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden />
                  Back to home
                </Link>
                <Link
                  href="/our-work"
                  className="inline-flex min-h-11 items-center text-sm font-semibold text-neutral-700 transition-colors hover:text-primary"
                >
                  Browse our work
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-11 items-center rounded-sm bg-primary px-lg text-sm font-bold text-neutral-50"
                >
                  Contact us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
