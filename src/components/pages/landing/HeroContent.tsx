'use client';

import { motion } from 'motion/react';
import { container, fadeUp } from '@/components/shared/FloatingObjects/variants';
import RotatingHighlight from './RotatingHighlight';

const AVATAR_COLORS = ['#e77725', '#ef9e60', '#1d3fab'];

export default function HeroContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center justify-center text-center h-[calc(100vh-260px)]"
    >
      <motion.div variants={fadeUp} className="mb-lg flex items-center">
        <span className="font-sans text-2xl font-black tracking-tight text-neutral-950 select-none">
          Stack<span className="text-primary">360</span>
        </span>
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="text-4xl font-bold leading-tight tracking-tight text-neutral-900 md:text-5xl lg:text-[4rem]"
      >
        Build Digital Products That <RotatingHighlight />
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="mt-lg w-full text-base leading-relaxed text-neutral-500"
      >
        From high-scale AI solutions to dedicated expert teams, we help market leaders launch faster
        and innovate with engineering confidence.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="mt-xl flex items-center gap-md rounded-md border border-neutral-200 bg-neutral-50 px-md py-sm shadow-sm"
      >
        <div className="flex items-center">
          {AVATAR_COLORS.map((color, i) => (
            <span
              // biome-ignore lint/suspicious/noArrayIndexKey: static avatar dots
              key={i}
              style={{ backgroundColor: color, marginLeft: i === 0 ? 0 : -8 }}
              className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-neutral-50 text-[8px] font-bold text-neutral-50"
            />
          ))}
          <span className="-ml-2 flex h-6 items-center rounded-full border-2 border-neutral-50 bg-neutral-900 px-xs text-[9px] font-bold text-neutral-50">
            +500
          </span>
        </div>
        <div className="flex items-center gap-xs">
          <span className="text-sm tracking-tight text-primary">★★★★★</span>
          <span className="text-sm font-bold text-neutral-900">5.0</span>
        </div>
        <span className="h-4 w-px bg-neutral-200" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
          Trusted by 500+ companies
        </span>
      </motion.div>

      <motion.div variants={fadeUp} className="mt-xl flex flex-col items-center gap-md sm:flex-row">
        <motion.a
          href="/work-with-us/software-partner"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="rounded-sm bg-primary px-xl py-md text-sm font-bold text-neutral-50 shadow-md transition-colors hover:bg-primary-dark hover:text-neutral-50"
        >
          Start Your Project
        </motion.a>
        <motion.a
          href="/our-work"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="rounded-sm border border-neutral-300 bg-neutral-50 px-xl py-md text-sm font-bold text-neutral-800 transition-colors hover:border-neutral-400 hover:text-neutral-900"
        >
          View Our Work
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
