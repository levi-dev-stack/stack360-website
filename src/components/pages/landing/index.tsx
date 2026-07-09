import CaseStudiesSection from '@/components/pages/landing/CaseStudies';
import ClientsMarquee from '@/components/pages/landing/ClientsMarquee';
import HeroSection from '@/components/pages/landing/HeroSection';
import { MOCK_WEDGES } from '@/constants/component/wedge-data';
import HorizontalWedgeTrack from './HorizontalWedge';

export default function LandingPage() {
  return (
    <div className="flex min-h-[calc(100vh-4.5rem)] w-full flex-col">
      <HeroSection />
      <ClientsMarquee />
      <CaseStudiesSection />
      <HorizontalWedgeTrack
        sectionTitle="Most software firms write code."
        sectionHighlight="We engineer outcomes."
        sectionSubtitle="The category is full of generalists. We compete on wedges almost no one else can credibly claim together."
        cards={MOCK_WEDGES}
      />
    </div>
  );
}
