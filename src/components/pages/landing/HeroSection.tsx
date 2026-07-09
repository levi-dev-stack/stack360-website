import FloatingObjects from './floating-objects';
import HeroContent from './HeroContent';

export default function HeroSection() {
  return (
    <section className="relative flex flex-1 w-full items-center justify-center overflow-hidden bg-linear-to-b from-neutral-50 via-neutral-50 to-neutral-100 px-md py-2xl">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-160 w-160 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-tint/25 blur-[120px]" />

      <FloatingObjects />
      <HeroContent />
    </section>
  );
}
