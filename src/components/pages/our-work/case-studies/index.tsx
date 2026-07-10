import CaseStudyCard from '@/components/pages/our-work/shared/CaseStudyCard';
import MotionSection from '@/components/shared/motion/MotionSection';
import PageClosingCta from '@/components/shared/PageClosingCta';
import PageHero from '@/components/shared/PageHero';
import { CASE_STUDIES, CASE_STUDIES_HERO } from '@/constants/component/our-work-cases-data';
import { OUR_WORK_CTA } from '@/constants/component/our-work-data';

export default function CaseStudiesPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHero {...CASE_STUDIES_HERO} />

      <MotionSection className="relative overflow-hidden bg-neutral-950 py-2xl">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-secondary/20 blur-[100px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-primary/15 blur-[90px]"
        />
        <div className="site-container relative grid grid-cols-1 gap-lg md:grid-cols-2">
          {CASE_STUDIES.map((study, index) => (
            <CaseStudyCard key={study.slug} study={study} index={index} variant="dark" />
          ))}
        </div>
      </MotionSection>

      <PageClosingCta {...OUR_WORK_CTA} />
    </div>
  );
}
