import Link from 'next/link';
import { LANDING_CTA } from '@/constants/component/landing-data';

export default function LandingCta() {
  return (
    <section className="site-section relative w-full overflow-hidden border-t border-neutral-800 bg-neutral-950 py-2xl">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-secondary/15 blur-[100px]"
      />

      <div className="site-container relative flex flex-col items-start justify-between gap-xl lg:flex-row lg:items-center">
        <div className="max-w-3xl space-y-md">
          <h2 className="text-balance text-3xl font-black tracking-tight text-neutral-50 md:text-4xl">
            {LANDING_CTA.title}
          </h2>
          <p className="text-sm leading-relaxed text-neutral-400">{LANDING_CTA.description}</p>
        </div>

        <div className="flex flex-wrap gap-md">
          <Link
            href={LANDING_CTA.primary.href}
            className="inline-flex items-center rounded-sm bg-primary px-xl py-md text-sm font-bold text-neutral-50 shadow-md transition-colors hover:bg-primary-dark"
          >
            {LANDING_CTA.primary.label}
          </Link>
          <Link
            href={LANDING_CTA.secondary.href}
            className="inline-flex items-center rounded-sm border border-neutral-600 px-xl py-md text-sm font-bold text-neutral-100 transition-colors hover:border-neutral-400"
          >
            {LANDING_CTA.secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
