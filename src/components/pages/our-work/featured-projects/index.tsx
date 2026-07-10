import Link from 'next/link';
import CaseStudyCard from '@/components/pages/our-work/shared/CaseStudyCard';
import BrandIcon from '@/components/shared/BrandIcon';
import MotionSection from '@/components/shared/motion/MotionSection';
import { MotionReveal } from '@/components/shared/motion/MotionStagger';
import PageClosingCta from '@/components/shared/PageClosingCta';
import PageHero from '@/components/shared/PageHero';
import {
  FEATURED_PROJECTS,
  FEATURED_PROJECTS_HERO,
} from '@/constants/component/our-work-cases-data';
import { OUR_WORK_CTA } from '@/constants/component/our-work-data';

export default function FeaturedProjectsPage() {
  const [lead, ...rest] = FEATURED_PROJECTS;

  return (
    <div className="flex w-full flex-col">
      <PageHero {...FEATURED_PROJECTS_HERO} />

      {lead && (
        <MotionSection className="relative overflow-hidden border-b border-neutral-800 bg-neutral-950 py-2xl">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--token-primary)_18%,transparent)_0%,transparent_42%,color-mix(in_srgb,var(--token-secondary)_12%,transparent)_100%)]"
          />
          <div className="site-container relative grid grid-cols-1 items-end gap-2xl lg:grid-cols-12">
            <MotionReveal className="lg:col-span-7">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
                Spotlight · {lead.tag}
              </span>
              <h2 className="mt-md text-balance text-3xl font-black tracking-tight text-neutral-50 md:text-4xl">
                {lead.title}
              </h2>
              <p className="mt-xs font-mono text-xs font-bold uppercase tracking-wider text-neutral-400">
                {lead.subtitle}
              </p>
              <p className="mt-lg max-w-2xl text-sm leading-relaxed text-neutral-300">
                {lead.description}
              </p>
              <div className="mt-lg flex flex-wrap items-center gap-sm">
                {lead.stack.map((slug) => (
                  <span
                    key={slug}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-700 bg-neutral-900"
                  >
                    <BrandIcon slug={slug} size={18} variant="stack-dark" />
                  </span>
                ))}
              </div>
              <Link
                href={lead.href}
                className="mt-xl inline-flex rounded-sm bg-primary px-xl py-md text-sm font-bold text-neutral-50 transition-colors hover:bg-primary-dark"
              >
                Open case study
              </Link>
            </MotionReveal>
            <MotionReveal className="lg:col-span-5">
              <div className="rounded-xl border border-neutral-700 bg-neutral-900/80 p-xl backdrop-blur-sm">
                <p className="font-mono text-5xl font-black tracking-tight text-neutral-50">
                  {lead.metric}
                </p>
                <p className="mt-sm font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
                  {lead.metricLabel}
                </p>
              </div>
            </MotionReveal>
          </div>
        </MotionSection>
      )}

      <MotionSection className="py-2xl">
        <div className="site-container grid grid-cols-1 gap-lg md:grid-cols-2">
          {rest.map((study, index) => (
            <CaseStudyCard key={study.slug} study={study} index={index} variant="light" />
          ))}
        </div>
      </MotionSection>

      <PageClosingCta {...OUR_WORK_CTA} />
    </div>
  );
}
