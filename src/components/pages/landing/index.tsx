import CaseStudiesSection from '@/components/pages/landing/CaseStudies';
import ClientsMarquee from '@/components/pages/landing/ClientsMarquee';
import HeroSection from '@/components/pages/landing/HeroSection';

export default function LandingPage() {
  return (
    <div className="flex min-h-[calc(100vh-4.5rem)] w-full flex-col">
      <HeroSection />
      <ClientsMarquee />
      <CaseStudiesSection />
    </div>
  );
}
