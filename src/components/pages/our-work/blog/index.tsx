import BlogList from '@/components/pages/our-work/blog/BlogList';
import MotionSection from '@/components/shared/motion/MotionSection';
import PageClosingCta from '@/components/shared/PageClosingCta';
import PageHero from '@/components/shared/PageHero';
import { BLOG_POSTS } from '@/constants/component/blog-posts-data';
import { OUR_WORK_CTA } from '@/constants/component/our-work-data';
import { BLOG_HERO } from '@/constants/component/our-work-insights-data';

export default function BlogPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHero {...BLOG_HERO} />
      <MotionSection className="border-b border-neutral-200 py-2xl">
        <div className="site-container">
          <BlogList posts={BLOG_POSTS} />
        </div>
      </MotionSection>
      <PageClosingCta {...OUR_WORK_CTA} />
    </div>
  );
}
