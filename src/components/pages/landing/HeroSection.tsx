import FloatingObjects from './floating-objects';
import HeroContent from './HeroContent';

export default function HeroSection() {
  return (
    <section className="site-section relative flex w-full flex-1 items-center justify-center overflow-hidden py-2xl">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,var(--token-neutral-50)_0%,var(--token-neutral-50)_28%,color-mix(in_srgb,var(--token-neutral-100)_42%,var(--token-neutral-50))_62%,var(--token-neutral-100)_100%)]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_88%_52%_at_50%_0%,color-mix(in_srgb,var(--token-primary)_13%,transparent),transparent_72%)]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_38%_34%_at_88%_72%,color-mix(in_srgb,var(--token-secondary)_6%,transparent),transparent_68%)]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(0 0 0 / 0.028) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(0 0 0 / 0.028) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
          maskImage: 'linear-gradient(180deg, black 0%, black 45%, transparent 88%)',
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[38%] h-[28rem] w-[min(72rem,100vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-tint/18 blur-[100px]"
        style={{
          maskImage: 'linear-gradient(180deg, black 0%, transparent 78%)',
        }}
      />

      <div className="site-container relative flex min-h-[calc(100vh-250px)] w-full items-center justify-center">
        <FloatingObjects />
        <HeroContent />
      </div>
    </section>
  );
}
