import InsightList from '@/components/pages/our-work/shared/InsightList';
import InsightSectionGallery from '@/components/pages/our-work/shared/InsightSectionGallery';
import MotionSection from '@/components/shared/motion/MotionSection';
import { MotionStagger, MotionStaggerItem } from '@/components/shared/motion/MotionStagger';
import PageClosingCta from '@/components/shared/PageClosingCta';
import PageHero from '@/components/shared/PageHero';
import { OUR_WORK_CTA } from '@/constants/component/our-work-data';
import { NEWS_HERO, NEWS_ITEMS, NEWS_SECTIONS } from '@/constants/component/our-work-insights-data';

export default function NewsPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHero {...NEWS_HERO} />

      <MotionSection className="py-2xl">
        <div className="site-container space-y-2xl">
          <MotionStagger className="max-w-3xl space-y-sm">
            <MotionStaggerItem>
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900">From the field</h2>
            </MotionStaggerItem>
            <MotionStaggerItem>
              <p className="text-sm leading-relaxed text-neutral-600">
                Campus drives and partnership moments — the people side of how Stack360 grows.
              </p>
            </MotionStaggerItem>
          </MotionStagger>
          <InsightSectionGallery sections={NEWS_SECTIONS} />
        </div>
      </MotionSection>

      <MotionSection className="border-t border-neutral-200 bg-neutral-100/50 py-2xl">
        <div className="site-container">
          <InsightList items={NEWS_ITEMS} />
        </div>
      </MotionSection>

      <PageClosingCta {...OUR_WORK_CTA} />
    </div>
  );
}
