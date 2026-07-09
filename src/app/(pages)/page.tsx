'use client';

import { AnimatePresence, motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { useEffect, useState } from 'react';
import ClientsMarquee from '@/components/element/ClientsMarquee';
import CaseStudiesSection from '@/components/element/CaseStudies';

const ROTATING_PHRASES = ['Deliver Value.', 'Scale Fast.', 'Innovate Daily.', 'Drive Growth.'];

function RotatingHighlight() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % ROTATING_PHRASES.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={ROTATING_PHRASES[index]}
          initial={{ y: '-110%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '110%', opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-linear-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent"
        >
          {ROTATING_PHRASES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const floatCard: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HomePage() {
  return (
    <div className="flex min-h-[calc(100vh-4.5rem)] w-full flex-col">
      <section className="relative flex flex-1 w-full items-center justify-center overflow-hidden bg-linear-to-b from-neutral-50 via-neutral-50 to-neutral-100 px-md py-2xl">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-160 w-160 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-tint/25 blur-[120px]" />

        {/* ── Floating decor: code snippet (top-left) ── */}
        <motion.div
          variants={floatCard}
          initial="hidden"
          animate="show"
          className="pointer-events-none absolute left-[5%] top-[16%] hidden lg:block xl:left-[7%]"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-lg border border-neutral-200 bg-neutral-50/80 p-md shadow-card backdrop-blur-sm"
          >
            <pre className="font-mono text-xs leading-relaxed text-neutral-400">
              <span className="text-neutral-500">const</span> engine ={' '}
              <span className="text-primary">new</span> Stack360();{'\n'}
              {'  '}engine.scale(
              <span className="text-primary-dark">&apos;unlimited&apos;</span>);
              {'\n'}
              {'  '}engine.deploy();
            </pre>
          </motion.div>
        </motion.div>

        {/* ── Floating decor: phone mockup (mid-left) ── */}
        <motion.div
          variants={floatCard}
          initial="hidden"
          animate="show"
          className="pointer-events-none absolute left-[5%] bottom-[16%] hidden lg:block xl:left-[8%]"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="h-40 w-24 rounded-2xl border border-neutral-200 bg-neutral-50 p-sm shadow-card"
          >
            <div className="flex h-full flex-col items-center justify-center gap-sm rounded-xl bg-neutral-100">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-tint/40 text-primary">
                <span className="text-lg">◈</span>
              </div>
              <div className="h-1.5 w-12 rounded-full bg-neutral-300" />
              <div className="h-1.5 w-8 rounded-full bg-neutral-200" />
            </div>
          </motion.div>
        </motion.div>

        {/* ── Floating decor: AI Performance card (top-right) ── */}
        {/* <motion.div
        variants={floatCard}
        initial="hidden"
        animate="show"
        className="pointer-events-none absolute right-[5%] top-[16%] hidden lg:block xl:right-[7%]"
      >
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-56 rounded-lg border border-neutral-200 bg-neutral-50 p-md shadow-card"
        >
          <div className="mb-sm flex items-center justify-between">
            <div className="flex items-center gap-xs">
              <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-primary-tint/40 text-[10px] text-primary">
                ▤
              </span>
              <span className="text-xs font-bold text-neutral-800">
                AI Performance
              </span>
            </div>
            <span className="text-[10px] font-bold text-success">▲ 24.8%</span>
          </div>

          <div className="relative h-20 w-full">
            <svg
              viewBox="0 0 200 80"
              className="h-full w-full"
              preserveAspectRatio="none"
              role="img"
              aria-label="AI performance trend line"
            >
              <defs>
                <linearGradient id="aiArea" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor="var(--token-primary)"
                    stopOpacity="0.35"
                  />
                  <stop
                    offset="100%"
                    stopColor="var(--token-primary)"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>
              <motion.path
                d="M0,62 L25,54 L50,58 L75,40 L100,46 L125,28 L150,32 L175,16 L200,10 L200,80 L0,80 Z"
                fill="url(#aiArea)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
              <motion.path
                d="M0,62 L25,54 L50,58 L75,40 L100,46 L125,28 L150,32 L175,16 L200,10"
                fill="none"
                stroke="var(--token-primary)"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.6, ease: 'easeInOut' }}
              />
            </svg>
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.7 }}
              className="absolute right-0 top-[12.5%] h-2 w-2 -translate-y-1/2 rounded-full bg-primary ring-4 ring-primary/20"
            />
          </div>
        </motion.div>
      </motion.div> */}

        {/* ── Floating decor: accuracy stat (bottom-right) ── */}
        <motion.div
          variants={floatCard}
          initial="hidden"
          animate="show"
          className="pointer-events-none absolute right-[6%] bottom-[18%] hidden text-right lg:block xl:right-[9%]"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="text-3xl font-bold text-primary-tint">99.8%</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              Accuracy
            </p>
          </motion.div>
        </motion.div>

        {/* ── Center content ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="mb-lg flex items-center gap-sm">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Digital Excellence
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-bold leading-tight tracking-tight text-neutral-900 md:text-5xl lg:text-[4rem]"
          >
            Build Digital Products That <RotatingHighlight />
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="mt-lg w-full text-base leading-relaxed text-neutral-500"
          >
            From high-scale AI solutions to dedicated expert teams, we help market leaders launch
            faster and innovate with engineering confidence.
          </motion.p>

          {/* Rating pill */}
          <motion.div
            variants={fadeUp}
            className="mt-xl flex items-center gap-md rounded-full border border-neutral-200 bg-neutral-50 px-md py-sm shadow-sm"
          >
            <div className="flex items-center">
              {['#e77725', '#ef9e60', '#1d3fab'].map((c, i) => (
                <span
                  // biome-ignore lint/suspicious/noArrayIndexKey: static avatar dots
                  key={i}
                  style={{ backgroundColor: c, marginLeft: i === 0 ? 0 : -8 }}
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

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-xl flex flex-col items-center gap-md sm:flex-row"
          >
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
      </section>

      <ClientsMarquee />

      <CaseStudiesSection />
    </div>
  );
}
