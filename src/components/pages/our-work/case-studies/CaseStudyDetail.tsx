import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import Link from 'next/link';
import ChallengeSolutionList from '@/components/pages/our-work/shared/ChallengeSolutionList';
import EmptyImageState from '@/components/pages/our-work/shared/EmptyImageState';
import BrandIcon from '@/components/shared/BrandIcon';
import MotionCard from '@/components/shared/motion/MotionCard';
import MotionSection from '@/components/shared/motion/MotionSection';
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from '@/components/shared/motion/MotionStagger';
import type { CaseStudyDetail } from '@/constants/component/our-work-case-studies-data';

interface CaseStudyDetailProps {
  study: CaseStudyDetail;
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-xs p-lg">
      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-500">
        {label}
      </span>
      <span className="text-lg font-bold tracking-tight text-neutral-900">{value}</span>
    </div>
  );
}

export default function CaseStudyDetailView({ study }: CaseStudyDetailProps) {
  const galleryThumbs = Math.max(0, study.imageCount - 1);

  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="site-section border-b border-neutral-200 bg-linear-to-b from-neutral-50 via-neutral-50 to-neutral-100 py-2xl">
        <div className="site-container">
          <MotionReveal>
            <p className="font-sans text-sm font-bold tracking-tight text-neutral-900">
              <Link href="/our-work/case-studies" className="text-neutral-600 hover:text-primary">
                Case Studies
              </Link>
              <span className="mx-sm text-neutral-300">/</span>
              <span className="text-neutral-900">{study.name}</span>
            </p>
          </MotionReveal>

          <div className="mt-lg grid grid-cols-1 gap-xl lg:grid-cols-12 lg:items-end">
            <MotionReveal className="lg:col-span-8">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
                {study.domain}
              </span>
              <h1 className="mt-sm text-balance text-4xl font-black leading-[1.05] tracking-tight text-neutral-900 md:text-5xl">
                {study.name}
              </h1>
              <p className="mt-md max-w-prose text-pretty text-base leading-relaxed text-neutral-600">
                {study.tagline}
              </p>
            </MotionReveal>
            <MotionReveal className="lg:col-span-4 lg:text-right" delay={0.05}>
              <p className="font-mono text-5xl font-black tracking-tight text-primary">
                {study.metric}
              </p>
              <p className="mt-sm font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                {study.metricLabel}
              </p>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Gallery — empty states until real screenshots exist */}
      <MotionSection className="border-b border-neutral-200 py-2xl">
        <div className="site-container">
          <MotionReveal>
            <EmptyImageState label="Primary view" aspect="aspect-[16/8]" />
          </MotionReveal>
          {galleryThumbs > 0 && (
            <MotionStagger className="mt-md grid grid-cols-2 gap-md sm:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: galleryThumbs }).map((_, index) => (
                <MotionStaggerItem
                  // biome-ignore lint/suspicious/noArrayIndexKey: fixed-length placeholder grid
                  key={`thumb-${index}`}
                >
                  <EmptyImageState label={`View ${index + 2}`} aspect="aspect-[4/3]" />
                </MotionStaggerItem>
              ))}
            </MotionStagger>
          )}
        </div>
      </MotionSection>

      {/* Timeline / stats + client requirement */}
      <MotionSection className="border-b border-neutral-200 py-2xl">
        <div className="site-container grid grid-cols-1 gap-xl lg:grid-cols-12">
          <MotionReveal className="lg:col-span-5">
            <div className="grid grid-cols-2 divide-x divide-y divide-neutral-200 overflow-hidden rounded-xl border border-neutral-200 [&>*:nth-child(-n+2)]:border-t-0 [&>*:nth-child(odd)]:border-l-0">
              <Stat label="Timeline" value={study.durationHours} />
              <Stat label="Team size" value={`${study.members} members`} />
              <Stat label="Platform" value={study.platform} />
              <Stat label="Industry" value={study.industry} />
            </div>
          </MotionReveal>
          <MotionReveal className="lg:col-span-7" delay={0.05}>
            <p className="mb-sm font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-500">
              Client requirement
            </p>
            <p className="max-w-prose text-pretty text-base leading-relaxed text-neutral-700">
              {study.clientRequirement}
            </p>
          </MotionReveal>
        </div>
      </MotionSection>

      {/* Challenges & Solutions */}
      <MotionSection className="border-b border-neutral-200 bg-neutral-100 py-2xl">
        <div className="site-container">
          <MotionReveal className="mb-xl max-w-content">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
              Challenges &amp; solutions
            </h2>
            <p className="mt-sm text-pretty text-sm leading-relaxed text-neutral-600">
              What we inherited, and exactly how each constraint was resolved.
            </p>
          </MotionReveal>
          <MotionReveal>
            <ChallengeSolutionList items={study.challenges} className="bg-neutral-50" />
          </MotionReveal>
        </div>
      </MotionSection>

      {/* Key features */}
      <MotionSection className="border-b border-neutral-200 py-2xl">
        <div className="site-container">
          <MotionReveal className="mb-xl max-w-2xl">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
              Key features
            </h2>
          </MotionReveal>
          <MotionStagger className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-3">
            {study.features.map((feature) => (
              <MotionStaggerItem key={feature.title} className="h-full">
                <MotionCard className="flex h-full flex-col rounded-xl border border-neutral-200 bg-neutral-50 p-lg transition-colors hover:border-primary/25">
                  <h3 className="text-base font-bold text-neutral-900">{feature.title}</h3>
                  <p className="mt-sm flex-1 text-pretty text-sm leading-relaxed text-neutral-600">
                    {feature.description}
                  </p>
                </MotionCard>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </MotionSection>

      {/* Results */}
      <MotionSection className="border-b border-neutral-200 bg-neutral-100/50 py-2xl">
        <div className="site-container">
          <MotionReveal className="mb-xl max-w-2xl">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
              Results
            </h2>
          </MotionReveal>
          <MotionStagger className="grid grid-cols-1 gap-md md:grid-cols-2">
            {study.results.map((result) => (
              <MotionStaggerItem key={result}>
                <div className="flex h-full gap-md rounded-xl border border-neutral-200 bg-neutral-50 p-lg">
                  <Check size={16} aria-hidden className="mt-0.5 shrink-0 text-primary" />
                  <p className="text-pretty text-sm leading-relaxed text-neutral-700">{result}</p>
                </div>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </MotionSection>

      {/* Tech stacks */}
      <MotionSection className="border-b border-neutral-200 py-2xl">
        <div className="site-container">
          <MotionReveal className="mb-xl max-w-2xl">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
              Technology stack
            </h2>
          </MotionReveal>
          <MotionStagger className="space-y-lg">
            {study.tech.map((group) => (
              <MotionStaggerItem key={group.category}>
                <div className="grid grid-cols-1 gap-md border-t border-neutral-200 pt-lg sm:grid-cols-[10rem_1fr]">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-500 sm:pt-sm">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-sm">
                    {group.items.map((item) => (
                      <span
                        key={item.label}
                        className="inline-flex items-center gap-sm rounded-md border border-neutral-200 bg-neutral-50 px-md py-sm shadow-sm"
                      >
                        {item.slug ? <BrandIcon slug={item.slug} size={16} variant="tech" /> : null}
                        <span className="text-xs font-semibold text-neutral-800">{item.label}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </MotionStaggerItem>
            ))}
          </MotionStagger>

          <MotionReveal className="mt-2xl flex flex-wrap items-center justify-between gap-md border-t border-neutral-200 pt-xl">
            <Link
              href="/our-work/case-studies"
              className="inline-flex items-center gap-xs text-sm font-bold text-neutral-700 hover:text-primary"
            >
              <ArrowLeft size={15} />
              All case studies
            </Link>
            <Link
              href={study.domainHref}
              className="inline-flex items-center gap-xs text-sm font-bold text-primary hover:text-primary-dark"
            >
              Explore this capability
              <ArrowUpRight size={15} />
            </Link>
          </MotionReveal>
        </div>
      </MotionSection>
    </div>
  );
}
