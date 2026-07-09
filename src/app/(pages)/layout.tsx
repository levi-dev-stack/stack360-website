import PremiumNavbar from '@/components/layout/Navbar';

export const metadata = {
  title: 'Stack360 | Custom Software Architecture Studio',
  description: 'Architecting complex software ecosystems for enterprise scale.',
  keywords:
    'custom software architecture, software development, software engineering, software architecture, software development company, software engineering company, software architecture company, software development company, software engineering company, software architecture company',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-100 selection:bg-primary/20 selection:text-primary">
      <PremiumNavbar />
      <main className="min-h-[calc(100vh-4.5rem)] w-full">{children}</main>
    </div>
  );
}
