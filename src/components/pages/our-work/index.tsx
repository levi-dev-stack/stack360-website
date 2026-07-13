import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import CaseStudyCard from '@/components/pages/our-work/shared/CaseStudyCard';
import MotionSection from '@/components/shared/motion/MotionSection';
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from '@/components/shared/motion/MotionStagger';
import PageClosingCta from '@/components/shared/PageClosingCta';
import { CASE_STUDIES } from '@/constants/component/our-work-cases-data';
import {
  OUR_WORK_CHAPTERS,
  OUR_WORK_CTA,
  OUR_WORK_HERO,
} from '@/constants/component/our-work-data';

export default function OurWorkPage() {
  const previewCases = CASE_STUDIES.slice(0, 3);

  return (
    <div className="flex w-full flex-col">
      <section className="site-section relative overflow-hidden border-b border-neutral-200 bg-neutral-50">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_100%_0%,color-mix(in_srgb,var(--token-primary)_14%,transparent),transparent_58%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_0%_100%,color-mix(in_srgb,var(--token-secondary)_8%,transparent),transparent_70%)]"
        />
        <div className="site-container relative py-2xl">
          <MotionReveal className="max-w-3xl">
            <p className="font-sans text-sm font-bold tracking-tight text-neutral-900">
              Stack<span className="text-primary">360</span>
              <span className="mx-sm text-neutral-300">/</span>
              <span className="text-neutral-600">Our Work</span>
            </p>
            <h1 className="mt-md text-balance text-4xl font-black leading-[1.05] tracking-tight text-neutral-900 md:text-5xl">
              {OUR_WORK_HERO.title} <span className="text-primary">{OUR_WORK_HERO.highlight}</span>
            </h1>
            <p className="mt-lg text-pretty text-base leading-relaxed text-neutral-600">
              {OUR_WORK_HERO.description}
            </p>
          </MotionReveal>
        </div>
      </section>

      <MotionSection className="border-b border-neutral-800 bg-neutral-950 py-2xl">
        <div className="site-container space-y-xl">
          <MotionReveal className="flex flex-col justify-between gap-md sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-black tracking-tight text-neutral-50">
                Recent outcomes
              </h2>
              <p className="mt-sm text-sm text-neutral-400">
                Production systems with metrics clients can defend internally.
              </p>
            </div>
            <Link
              href="/our-work/case-studies"
              className="inline-flex items-center gap-xs text-sm font-bold text-primary hover:text-primary-light"
            >
              All case studies
              <ArrowUpRight size={14} />
            </Link>
          </MotionReveal>
          <div className="grid grid-cols-1 gap-lg md:grid-cols-2 lg:grid-cols-3">
            {previewCases.map((study, index) => (
              <CaseStudyCard key={study.slug} study={study} index={index} variant="dark" />
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="py-2xl">
        <div className="site-container">
          <MotionReveal className="mb-xl max-w-content">
            <h2 className="text-2xl font-black tracking-tight text-neutral-900">
              Explore the archive
            </h2>
            <p className="mt-sm text-sm leading-relaxed text-neutral-600">
              Portfolios and insights — pick a lane and go deeper.
            </p>
          </MotionReveal>
          <MotionStagger className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-3">
            {OUR_WORK_CHAPTERS.map((chapter) => (
              <MotionStaggerItem key={chapter.href}>
                <Link
                  href={chapter.href}
                  className="group flex h-full flex-col justify-between rounded-xl border border-neutral-200 bg-neutral-50 p-lg transition-colors hover:border-primary/30 hover:bg-white"
                >
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-neutral-900 group-hover:text-primary">
                      {chapter.title}
                    </h3>
                    <p className="mt-sm text-sm leading-relaxed text-neutral-600">
                      {chapter.blurb}
                    </p>
                  </div>
                  <span className="mt-lg inline-flex items-center gap-xs text-xs font-bold text-primary">
                    {chapter.cta}
                    <ArrowUpRight
                      size={12}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </Link>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </MotionSection>

      <PageClosingCta {...OUR_WORK_CTA} />
    </div>
  );
}
