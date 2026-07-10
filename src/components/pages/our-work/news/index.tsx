import InsightList from '@/components/pages/our-work/shared/InsightList';
import MotionSection from '@/components/shared/motion/MotionSection';
import PageClosingCta from '@/components/shared/PageClosingCta';
import PageHero from '@/components/shared/PageHero';
import { OUR_WORK_CTA } from '@/constants/component/our-work-data';
import { NEWS_HERO, NEWS_ITEMS } from '@/constants/component/our-work-insights-data';

export default function NewsPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHero {...NEWS_HERO} />
      <MotionSection className="py-2xl">
        <div className="site-container">
          <InsightList items={NEWS_ITEMS} />
        </div>
      </MotionSection>
      <PageClosingCta {...OUR_WORK_CTA} />
    </div>
  );
}
