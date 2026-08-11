import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import HeroSectionLoading from '@/components/layout/Loading/HeroSectionLoading';
import ClientsMarquee from '@/components/pages/landing/ClientsMarquee';
import HorizontalWedgeTrack from '@/components/pages/landing/HorizontalWedge';
import ProcessSection from '@/components/pages/landing/ProcessSection';
import SectionSkeleton from '@/components/pages/landing/SectionSkeleton';
import ServicesSection from '@/components/pages/landing/ServicesSection';
import TrustBadges from '@/components/pages/landing/TrustBadges';
import WhyChooseSection from '@/components/pages/landing/WhyChooseSection';
import PageClosingCta from '@/components/shared/PageClosingCta';
import { LANDING_CTA } from '@/constants/component/landing-data';
import { MOCK_WEDGES } from '@/constants/component/wedge-data';

const HeroSection = dynamic(() => import('@/components/pages/landing/HeroSection'), {
  loading: () => <HeroSectionLoading />,
});

const CaseStudiesSection = dynamic(() => import('@/components/pages/landing/CaseStudies'), {
  loading: () => <SectionSkeleton variant="tall" className="bg-neutral-950" />,
});

const TestimonialsSection = dynamic(
  () => import('@/components/pages/landing/TestimonialsSection'),
  {
    loading: () => <SectionSkeleton variant="carousel" className="bg-neutral-950" />,
  }
);

export default function LandingPage() {
  return (
    <div className="flex min-h-[calc(100vh-4.5rem)] w-full flex-col">
      <Suspense fallback={<HeroSectionLoading />}>
        <HeroSection />
      </Suspense>
      <ClientsMarquee />

      <ServicesSection />
      <WhyChooseSection />

      <HorizontalWedgeTrack
        sectionTitle="Most software firms write code."
        sectionHighlight="We engineer outcomes."
        sectionSubtitle="We combine product strategy, engineering expertise, AI capabilities, and business insight to build technology that delivers measurable results."
        cards={MOCK_WEDGES}
      />

      <ProcessSection />

      <Suspense fallback={<SectionSkeleton variant="tall" className="bg-neutral-950" />}>
        <CaseStudiesSection />
      </Suspense>

      <TrustBadges />

      <Suspense fallback={<SectionSkeleton variant="carousel" className="bg-neutral-950" />}>
        <TestimonialsSection />
      </Suspense>

      <PageClosingCta
        title={LANDING_CTA.title}
        description={LANDING_CTA.description}
        primary={LANDING_CTA.primary}
        secondary={LANDING_CTA.secondary}
      />
    </div>
  );
}
