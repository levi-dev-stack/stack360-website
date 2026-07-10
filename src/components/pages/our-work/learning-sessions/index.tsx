import InsightList from '@/components/pages/our-work/shared/InsightList';
import MotionSection from '@/components/shared/motion/MotionSection';
import PageClosingCta from '@/components/shared/PageClosingCta';
import PageHero from '@/components/shared/PageHero';
import { OUR_WORK_CTA } from '@/constants/component/our-work-data';
import { LEARNING_HERO, LEARNING_SESSIONS } from '@/constants/component/our-work-insights-data';

export default function LearningSessionsPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHero {...LEARNING_HERO} />
      <MotionSection className="relative overflow-hidden py-2xl">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--token-primary)_8%,transparent),transparent)]"
        />
        <div className="site-container relative">
          <InsightList items={LEARNING_SESSIONS} />
        </div>
      </MotionSection>
      <PageClosingCta {...OUR_WORK_CTA} />
    </div>
  );
}
