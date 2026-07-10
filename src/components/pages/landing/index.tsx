import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import ClientsMarquee from '@/components/pages/landing/ClientsMarquee';
import HeroSection from '@/components/pages/landing/HeroSection';
import HorizontalWedgeTrack from '@/components/pages/landing/HorizontalWedge';
import LandingCta from '@/components/pages/landing/LandingCta';
import SectionSkeleton from '@/components/pages/landing/SectionSkeleton';
import { MOCK_WEDGES } from '@/constants/component/wedge-data';

const ServicesSection = dynamic(() => import('@/components/pages/landing/ServicesSection'), {
  loading: () => <SectionSkeleton variant="tall" className="bg-neutral-50" />,
});

const ProcessSection = dynamic(() => import('@/components/pages/landing/ProcessSection'), {
  loading: () => <SectionSkeleton variant="default" className="bg-white" />,
});

const CaseStudiesSection = dynamic(() => import('@/components/pages/landing/CaseStudies'), {
  loading: () => <SectionSkeleton variant="tall" className="bg-neutral-950" />,
});

const TestimonialsSection = dynamic(
  () => import('@/components/pages/landing/TestimonialsSection'),
  {
    loading: () => <SectionSkeleton variant="carousel" className="bg-neutral-black" />,
  }
);

export default function LandingPage() {
  return (
    <div className="flex min-h-[calc(100vh-4.5rem)] w-full flex-col">
      <HeroSection />
      <ClientsMarquee />

      <Suspense fallback={<SectionSkeleton variant="tall" className="bg-neutral-50" />}>
        <ServicesSection />
      </Suspense>

      <HorizontalWedgeTrack
        sectionTitle="Most software firms write code."
        sectionHighlight="We engineer outcomes."
        sectionSubtitle="The category is full of generalists. We compete on wedges almost no one else can credibly claim together."
        cards={MOCK_WEDGES}
      />

      <Suspense fallback={<SectionSkeleton variant="default" className="bg-white" />}>
        <ProcessSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton variant="tall" className="bg-neutral-950" />}>
        <CaseStudiesSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton variant="carousel" className="bg-neutral-black" />}>
        <TestimonialsSection />
      </Suspense>

      <LandingCta />
    </div>
  );
}
