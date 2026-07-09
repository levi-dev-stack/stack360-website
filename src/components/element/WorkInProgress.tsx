'use client';

import { ArrowLeft, Hammer } from 'lucide-react';
import { motion, type Variants } from 'motion/react';
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

export default function WorkInProgress() {
  const pathname = usePathname();
  const lastSegment = pathname.split('/').filter(Boolean).at(-1);
  const title = lastSegment ? formatSegment(lastSegment) : 'Home';

  return (
    <section className="relative w-full min-h-[calc(100vh-4.5rem)] px-lg py-2xl lg:px-2xl">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative mx-auto w-full max-w-5xl"
      >
        <div className="w-full rounded-lg border border-neutral-200 bg-neutral-50 p-lg shadow-sm md:p-xl">
          <div className="flex w-full flex-col items-center text-center">
            <motion.div
              variants={itemVariants}
              className="mb-lg inline-flex items-center gap-sm rounded-sm border border-primary/25 bg-primary-tint/15 px-md py-xs"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-primary motion-safe:animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                In development
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-lg w-full space-y-sm">
              <p className="font-mono text-xs text-neutral-500">
                <span className="text-neutral-400">Route</span>{' '}
                <span className="text-neutral-700">{pathname}</span>
              </p>
              <h1 className="w-full text-balance text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
                {title}
              </h1>
            </motion.div>

            <motion.div
              variants={itemVariants}
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

            <motion.div variants={itemVariants} className="w-full">
              <div className="mb-sm flex items-center justify-between font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                <span>Progress</span>
                <span className="text-primary">Staging</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-200">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  initial={{ width: '0%' }}
                  animate={{ width: '38%' }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                />
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-xl w-full border-t border-neutral-200 pt-lg"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-sm text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden />
                Back to home
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
