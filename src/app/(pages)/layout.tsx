import PremiumNavbar from '@/components/layout/Navbar';

export const metadata = {
  title: 'Stack360 | Custom Software Architecture Studio',
  description: 'Architecting complex software ecosystems for enterprise scale.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-100 selection:bg-primary/20 selection:text-primary">
      {/* 1. Global Persistent Navigation */}
      <PremiumNavbar />

      {/* 2. Structured Content Wrapper (Centers the 70% layout seamlessly with the Navbar content constraints) */}
      <main className="mx-auto max-w-content border-x border-neutral-200 bg-neutral-50 min-h-[calc(100vh-4.5rem)]">
        {children}
      </main>
    </div>
  );
}
