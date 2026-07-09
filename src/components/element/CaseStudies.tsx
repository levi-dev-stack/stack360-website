'use client';

import { motion } from 'motion/react';
import { cn } from '@/styles/tailwind.utils';

/* ────────────────────────────────────────────────────────────
   Chart geometry + deterministic series (no Math.random, so SSR
   and client render identically — avoids hydration mismatches).
   ──────────────────────────────────────────────────────────── */

const CHART_W = 320;
const CHART_H = 170;
const N = 48;

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
const smoothstep = (t: number) => t * t * (3 - 2 * t);

// Hockey-stick "organic traffic" curve: flat early, explosive later,
// with volatility that grows over time.
function trafficSeries(seed: number): number[] {
  return Array.from({ length: N }, (_, i) => {
    const t = i / (N - 1);
    const base = 6 + 82 * t ** 3.1;
    const vol = (Math.sin(i * 1.9 + seed) + 0.6 * Math.sin(i * 0.7 + seed)) * (2 + 9 * t);
    return clamp(base + vol, 2, 98);
  });
}

// Smoother, lower "domain rating" line.
function drSeries(seed: number): number[] {
  return Array.from({ length: N }, (_, i) => {
    const t = i / (N - 1);
    const base = 8 + 32 * smoothstep(t);
    return clamp(base + Math.sin(i * 1.2 + seed) * 1.1, 2, 58);
  });
}

function toPath(series: number[], close = false): string {
  const line = series
    .map((v, i) => {
      const x = (i / (N - 1)) * CHART_W;
      const y = CHART_H - (v / 100) * CHART_H;
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');
  return close ? `${line} L${CHART_W},${CHART_H} L0,${CHART_H} Z` : line;
}

interface Accent {
  line: string;
  soft: string;
  chipText: string;
  color: string;
}

const ACCENTS: Record<'secondary' | 'primary', Accent> = {
  secondary: {
    line: 'stroke-secondary',
    soft: 'stroke-secondary-light',
    chipText: 'text-secondary',
    color: 'var(--token-secondary)',
  },
  primary: {
    line: 'stroke-primary',
    soft: 'stroke-primary-light',
    chipText: 'text-primary',
    color: 'var(--token-primary)',
  },
};

interface CaseStudy {
  tag: string;
  title: string;
  drFrom: number;
  drTo: number;
  traffic: string;
  accent: keyof typeof ACCENTS;
  seed: number;
  axis: string[];
  marker: { fraction: number; date: string; dr: string; traffic: string };
}

const CASE_STUDIES: CaseStudy[] = [
  {
    tag: 'FinTech Optimization',
    title: "Boosting SuperAnnotate's Position to The 1st On Search Results",
    drFrom: 39,
    drTo: 72,
    traffic: '1000%',
    accent: 'secondary',
    seed: 1.4,
    axis: ['22 May 2020', '16 Jan 2022', '13 Sep 2023', '10 May 2025'],
    marker: {
      fraction: 0.4,
      date: 'Dec 23, 2021',
      dr: '36.0',
      traffic: '3,064',
    },
  },
  {
    tag: 'AI Infrastructure',
    title: 'How 90 Backlinks Helped an AI Generation Client Improve Ranking',
    drFrom: 52,
    drTo: 63,
    traffic: '368%',
    accent: 'primary',
    seed: 5.1,
    axis: ['22 May 2020', '16 Jan 2022', '13 Sep 2023', '10 May 2025'],
    marker: {
      fraction: 0.52,
      date: 'Mar 17, 2022',
      dr: '71.0',
      traffic: '27,950',
    },
  },
];

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const accent = ACCENTS[study.accent];
  const traffic = trafficSeries(study.seed);
  const dr = drSeries(study.seed);
  const markerIdx = clamp(Math.round(study.marker.fraction * (N - 1)), 0, N - 1);
  const markerLeft = (markerIdx / (N - 1)) * 100;
  const markerTop = 100 - traffic[markerIdx];
  const gradientId = `case-area-${index}`;

  return (
    <div className="flex flex-col rounded-lg border border-neutral-200 bg-neutral-100 p-md shadow-sm transition-shadow hover:shadow-card">
      {/* Header metric chips */}
      <div className="mb-sm flex items-center justify-between text-sm font-bold text-neutral-800">
        <span className="inline-flex items-center gap-xs">
          <span className={accent.chipText}>◈</span>
          DR <span className="text-neutral-400">{study.drFrom}</span>
          <span className="text-neutral-400">→</span>
          {study.drTo}
        </span>
        <span className="inline-flex items-center gap-xs">
          <span className={accent.chipText}>▤</span>
          Traffic
          <span className="rounded-sm bg-success/15 px-xs py-px text-xs font-bold text-success">
            ↑ {study.traffic}
          </span>
        </span>
      </div>

      {/* Plot */}
      <div className="relative aspect-16/10 w-full overflow-hidden rounded-md border border-neutral-200 bg-neutral-50">
        {/* Horizontal gridlines */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-xs">
          {[0, 1, 2, 3].map((row) => (
            <div key={row} className="border-b border-dashed border-neutral-200" />
          ))}
        </div>
        {/* Vertical gridlines */}
        <div className="pointer-events-none absolute inset-0 flex justify-between p-xs">
          {[0, 1, 2, 3].map((col) => (
            <div key={col} className="border-r border-dashed border-neutral-200" />
          ))}
        </div>

        {/* Line + area (stroke stays crisp via non-scaling-stroke) */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox={`0 0 ${CHART_W} ${CHART_H}`}
          preserveAspectRatio="none"
        >
          <title>{`${study.title} performance chart`}</title>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={accent.color} stopOpacity="0.28" />
              <stop offset="100%" stopColor={accent.color} stopOpacity="0" />
            </linearGradient>
          </defs>

          <motion.path
            d={toPath(traffic, true)}
            fill={`url(#${gradientId})`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
          />
          <motion.path
            d={toPath(dr)}
            fill="none"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            className={cn(accent.soft, 'opacity-70')}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: index * 0.15 }}
          />
          <motion.path
            d={toPath(traffic)}
            fill="none"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            className={accent.line}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.3,
              ease: 'easeOut',
              delay: 0.1 + index * 0.15,
            }}
          />
        </svg>

        {/* Marker vertical line */}
        <div
          style={{ left: `${markerLeft}%` }}
          className="pointer-events-none absolute inset-y-0 w-px border-l border-dashed border-neutral-400/60"
        />
        {/* Marker dot */}
        <motion.div
          style={{ left: `${markerLeft}%`, top: `${markerTop}%` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 + index * 0.15 }}
          className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-neutral-50 bg-neutral-900 shadow-sm"
        />

        {/* Tooltip */}
        <motion.div
          style={{ left: `${markerLeft}%` }}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.1 + index * 0.15 }}
          className="absolute top-[14%] z-10 -translate-x-1/2 space-y-[3px] rounded-md border border-neutral-800 bg-neutral-950 p-sm text-[10px] font-mono text-neutral-50 shadow-card"
        >
          <div className="mb-[3px] border-b border-neutral-800 pb-[3px] font-bold uppercase tracking-wider text-neutral-400">
            {study.marker.date}
          </div>
          <p className="flex items-center gap-xs whitespace-nowrap">
            <span className={cn('text-sm leading-none', accent.chipText)}>•</span>
            Domain Rating
            <span className="font-bold text-neutral-50">{study.marker.dr}</span>
          </p>
          <p className="flex items-center gap-xs whitespace-nowrap">
            <span className="text-sm leading-none text-success">•</span>
            Organic traffic
            <span className="font-bold text-neutral-50">{study.marker.traffic}</span>
          </p>
        </motion.div>

        {/* X-axis labels */}
        <div className="pointer-events-none absolute inset-x-0 bottom-1 flex justify-between px-sm font-mono text-[9px] text-neutral-400">
          {study.axis.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-md flex flex-1 flex-col">
        <span className="mb-xs block font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400">
          {study.tag}
        </span>
        <h3 className="text-base font-bold leading-snug tracking-tight text-neutral-900 transition-colors group-hover:text-primary">
          {study.title}
        </h3>
        <div className="mt-auto flex justify-end border-t border-neutral-200 pt-sm">
          <a
            href="/our-work/case-studies"
            className="group/link inline-flex items-center gap-xs text-xs font-bold text-neutral-500 transition-colors hover:text-primary"
          >
            Read more
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-neutral-50 transition-transform group-hover/link:translate-x-xs">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudiesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-950 px-md py-2xl lg:px-2xl">
      {/* Ambient accent glow */}
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-secondary/20 blur-[120px]" />

      <div className="relative grid grid-cols-1 gap-xl lg:grid-cols-12">
        {/* Left info column */}
        <div className="flex flex-col justify-between gap-lg lg:col-span-4 lg:pr-lg">
          <div className="space-y-md">
            <span className="inline-flex items-center rounded-full bg-neutral-50/10 px-md py-xs text-xs font-bold uppercase tracking-widest text-neutral-50">
              Our Work
            </span>
            <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-neutral-50 lg:text-5xl">
              Real case studies with real results.
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-neutral-400">
              Explore our clients&apos; success stories with custom architecture, infrastructure
              scale, and SEO — and learn how we helped them grow.
            </p>
          </div>

          <div>
            <a
              href="/our-work/case-studies"
              className="group inline-flex items-center gap-sm rounded-full bg-secondary px-lg py-md text-sm font-bold text-neutral-50 shadow-md transition-colors hover:bg-secondary-light hover:text-neutral-50"
            >
              Explore more
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-50/20 transition-transform group-hover:translate-x-xs">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-lg md:grid-cols-2 lg:col-span-8">
          {CASE_STUDIES.map((study, index) => (
            <CaseStudyCard key={study.title} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
