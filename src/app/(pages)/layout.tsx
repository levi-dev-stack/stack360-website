import BlueprintGrid from '@/components/layout/BlueprintGrid';
import Footer from '@/components/layout/Footer';
import PremiumNavbar from '@/components/layout/Navbar';
import NoJsSiteNav from '@/components/layout/Navbar/NoJsSiteNav';
import ChatAssistant from '@/components/shared/ChatAssistant';

export const metadata = {
  title: 'Stack360 | Custom Software Architecture Studio',
  description: 'Architecting complex software ecosystems for enterprise scale.',
  keywords: 'custom software architecture, software development, ERP, CRM, AI solutions, SaaS',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-neutral-50 selection:bg-primary/20 selection:text-primary">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-md focus:top-md focus:z-100 focus:rounded-sm focus:bg-primary focus:px-md focus:py-sm focus:text-sm focus:font-bold focus:text-neutral-50"
      >
        Skip to main content
      </a>
      <BlueprintGrid />

      <div className="sticky top-0 z-50 w-full">
        <PremiumNavbar />
        {/* Only parsed/shown when JS is disabled — never visible with scripting on */}
        <noscript>
          <NoJsSiteNav />
        </noscript>
      </div>

      <main id="main-content" className="relative z-10 min-h-[calc(100vh-4.5rem)] w-full">
        {children}
      </main>
      <Footer />
      <div className="js-only">
        <ChatAssistant />
      </div>
    </div>
  );
}
