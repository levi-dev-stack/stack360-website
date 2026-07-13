import InsightList from '@/components/pages/our-work/shared/InsightList';
// import InsightSectionGallery from '@/components/pages/our-work/shared/InsightSectionGallery';
import MotionSection from '@/components/shared/motion/MotionSection';
// import { MotionStagger, MotionStaggerItem } from '@/components/shared/motion/MotionStagger';
import PageClosingCta from '@/components/shared/PageClosingCta';
import PageHero from '@/components/shared/PageHero';
import { OUR_WORK_CTA } from '@/constants/component/our-work-data';
import {
  LEARNING_HERO,
  // LEARNING_SECTIONS,
  LEARNING_SESSIONS,
} from '@/constants/component/our-work-insights-data';

export default function LearningSessionsPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHero {...LEARNING_HERO} />

      {/* <MotionSection className="relative overflow-hidden py-2xl">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--token-primary)_8%,transparent),transparent)]"
        />
        <div className="site-container relative space-y-2xl">
          <MotionStagger className="max-w-3xl space-y-sm">
            <MotionStaggerItem>
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                Inside the sessions
              </h2>
            </MotionStaggerItem>
            <MotionStaggerItem>
              <p className="text-sm leading-relaxed text-neutral-600">
                Moments from workshops where the team sharpens craft together.
              </p>
            </MotionStaggerItem>
          </MotionStagger>
          <InsightSectionGallery sections={LEARNING_SECTIONS} />
        </div>
      </MotionSection> */}

      <MotionSection className="border-t border-neutral-200 bg-neutral-100/50 py-2xl">
        <div className="site-container">
          <InsightList items={LEARNING_SESSIONS} />
        </div>
      </MotionSection>

      <PageClosingCta {...OUR_WORK_CTA} />
    </div>
  );
}
