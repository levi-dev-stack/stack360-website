import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import MotionCard from '@/components/shared/motion/MotionCard';
import MotionSection from '@/components/shared/motion/MotionSection';
import { MotionStagger, MotionStaggerItem } from '@/components/shared/motion/MotionStagger';
import PageClosingCta from '@/components/shared/PageClosingCta';
import PageHero from '@/components/shared/PageHero';
import {
  CASE_STUDIES_DETAILS,
  CASE_STUDIES_DETAILS_HERO,
} from '@/constants/component/our-work-case-studies-data';
import { OUR_WORK_CTA } from '@/constants/component/our-work-data';

export default function CaseStudiesPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHero {...CASE_STUDIES_DETAILS_HERO} />

      <MotionSection className="border-b border-neutral-200 py-2xl">
        <div className="site-container">
          <MotionStagger className="grid grid-cols-1 gap-lg md:grid-cols-2">
            {CASE_STUDIES_DETAILS.map((study) => (
              <MotionStaggerItem key={study.slug} className="h-full">
                <Link
                  href={`/our-work/case-studies/${study.slug}`}
                  className="group block h-full"
                  aria-label={`Read the ${study.name} case study`}
                >
                  <MotionCard className="flex h-full flex-col rounded-xl border border-neutral-200 bg-neutral-50 p-xl transition-colors group-hover:border-primary/35 group-hover:bg-white">
                    <div className="flex items-start justify-between gap-md">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
                        {study.industry}
                      </span>
                      <div className="text-right">
                        <p className="font-mono text-xl font-black tracking-tight text-neutral-900">
                          {study.metric}
                        </p>
                        <p className="mt-xs font-mono text-[9px] font-bold uppercase tracking-wider text-neutral-500">
                          {study.metricLabel}
                        </p>
                      </div>
                    </div>

                    <h2 className="mt-lg text-balance text-2xl font-bold tracking-tight text-neutral-900 group-hover:text-primary">
                      {study.name}
                    </h2>
                    <p className="mt-sm flex-1 text-pretty text-sm leading-relaxed text-neutral-600">
                      {study.tagline}
                    </p>

                    <span className="mt-lg inline-flex items-center gap-xs text-sm font-bold text-primary">
                      View case study
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </MotionCard>
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
