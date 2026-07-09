'use client';

import { motion, type Variants } from 'motion/react';
import { usePathname } from 'next/navigation';

function formatSegment(segment: string): string {
  return segment
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function WorkInProgress() {
  const pathname = usePathname();
  const lastSegment = pathname.split('/').filter(Boolean).at(-1);
  const title = lastSegment ? formatSegment(lastSegment) : 'Home';

  // Animation definitions matching modern orchestration rules
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="relative min-h-[75vh] w-full flex items-center justify-center overflow-hidden bg-neutral-50 px-md py-2xl">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none select-none mix-blend-difference">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-2xl border border-neutral-200 bg-neutral-50 p-lg md:p-xl rounded-md shadow-card overflow-hidden"
      >
        <div className="absolute top-xs left-xs font-mono text-[9px] text-neutral-300 pointer-events-none">
          + SEC_SHL_04
        </div>
        <div className="absolute bottom-xs right-xs font-mono text-[9px] text-neutral-300 pointer-events-none">
          SYS_STABLE_{'//'}_2026
        </div>

        <div className="flex flex-col items-center text-center">
          <motion.div
            variants={itemVariants}
            className="mb-md inline-flex items-center gap-xs rounded-sm border border-primary/20 bg-primary-tint/10 px-md py-xs text-xs font-mono font-bold uppercase tracking-widest text-primary"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            BUILD_IN_PROGRESS
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-xs w-full mb-md">
            <span className="block font-mono text-[11px] text-neutral-400 tracking-wider">
              PATHNAME: <span className="text-neutral-600">{pathname}</span>
            </span>
            <h1 className="text-3xl font-black tracking-tight text-neutral-900 md:text-4xl">
              {title} Module
            </h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="w-full bg-neutral-100 border border-neutral-200 rounded-sm p-md font-mono text-xs text-left text-neutral-600 mb-lg space-y-xs"
          >
            <div className="flex items-center justify-between border-b border-neutral-200/60 pb-xs mb-xs">
              <span className="text-[10px] text-neutral-400 font-bold">STAGING_LOGS</span>
              <span className="text-[10px] text-primary font-bold">COMPILING...</span>
            </div>
            <p className="text-neutral-400">› Mounting architectural grid blocks...</p>
            <p className="text-neutral-500">› Injecting core Tailwind variables definitions.</p>
            <p className="text-primary-dark font-medium animate-pulse">
              › Syncing layout dependencies to {title.toLowerCase()}.config
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm leading-relaxed text-neutral-500 max-w-md"
          >
            This module interface is undergoing system blueprint calibration. We are assembling
            custom components to lock in our strict design framework standards.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-xl pt-md border-t border-neutral-200/60 w-full"
          >
            <a
              href="/"
              className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-wider text-primary hover:text-primary-dark transition-colors group"
            >
              <motion.span
                className="mr-xs block"
                animate={{ x: [0, -4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: 'easeInOut',
                }}
              >
                ←
              </motion.span>
              Return to Core Dashboard
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
