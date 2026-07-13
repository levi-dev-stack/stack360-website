import FaqAccordion from '@/components/pages/our-work/shared/FaqAccordion';
import JsonLd from '@/components/seo/JsonLd';
import MotionSection from '@/components/shared/motion/MotionSection';
import { MotionReveal } from '@/components/shared/motion/MotionStagger';
import PageClosingCta from '@/components/shared/PageClosingCta';
import PageHero from '@/components/shared/PageHero';
import { FAQS, FAQS_CTA, FAQS_HERO } from '@/constants/component/our-work-faqs-data';
import { breadcrumbJsonLd, faqPageJsonLd } from '@/lib/seo/json-ld';

export default function FaqsPage() {
  return (
    <div className="flex w-full flex-col">
      <JsonLd
        data={[
          faqPageJsonLd(FAQS, '/our-work/faqs'),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Our Work', path: '/our-work' },
            { name: 'FAQs', path: '/our-work/faqs' },
          ]),
        ]}
      />
      <PageHero {...FAQS_HERO} />
      <MotionSection className="py-2xl">
        <div className="site-container grid grid-cols-1 gap-2xl lg:grid-cols-12">
          <MotionReveal className="lg:col-span-4">
            <h2 className="text-2xl font-black tracking-tight text-neutral-900">
              Answers before the call
            </h2>
            <p className="mt-md text-sm leading-relaxed text-neutral-600">
              Sourced from how we work with clients on web, mobile, design, marketing, and quality —
              so expectations stay clear.
            </p>
          </MotionReveal>
          <div className="lg:col-span-8">
            <FaqAccordion items={FAQS} />
          </div>
        </div>
      </MotionSection>
      <PageClosingCta {...FAQS_CTA} />
    </div>
  );
}
