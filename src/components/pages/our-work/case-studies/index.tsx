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

      <MotionSection className="border-b border-neutral-200 py-2xl">
        <div className="site-container grid grid-cols-1 gap-lg md:grid-cols-2">
          {CASE_STUDIES.map((study, index) => (
            <CaseStudyCard key={study.slug} study={study} index={index} variant="light" />
          ))}
        </div>
      </MotionSection>

      <PageClosingCta {...OUR_WORK_CTA} />
    </div>
  );
}
