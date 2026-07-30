import { Bot, Layers, type LucideIcon, Target, TrendingUp } from 'lucide-react';
import { LANDING_WHY_CHOOSE } from '@/constants/component/landing-data';
import { cn } from '@/styles/tailwind.utils';

const REASON_ICONS: Record<(typeof LANDING_WHY_CHOOSE.reasons)[number]['id'], LucideIcon> = {
  'business-first': Target,
  'end-to-end': Layers,
  'ai-ready': Bot,
  'built-to-scale': TrendingUp,
};

/**
 * Server Component — why-choose markup in first HTML paint.
 * Hover / focus affordances are pure CSS so the section works with JS off.
 */
export default function WhyChooseSection() {
  const { eyebrow, title, highlight, description, reasons } = LANDING_WHY_CHOOSE;

  return (
    <section
      className="site-section relative w-full overflow-hidden border-t border-neutral-200 py-2xl"
      aria-labelledby="why-choose-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,var(--token-neutral-50)_0%,var(--token-neutral-50)_40%,color-mix(in_srgb,var(--token-neutral-100)_55%,var(--token-neutral-50))_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,color-mix(in_srgb,var(--token-primary)_10%,transparent),transparent_65%)]"
      />

      <div className="site-container relative">
        <header className="mb-2xl max-w-3xl space-y-md">
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
            {eyebrow}
          </p>
          <h2
            id="why-choose-heading"
            className="text-balance text-3xl font-black tracking-tight text-neutral-900 md:text-4xl"
          >
            {title} <span className="text-primary">{highlight}</span>
          </h2>
          <p className="max-w-prose text-pretty text-sm leading-relaxed text-neutral-600 md:text-base">
            {description}
          </p>
        </header>

        <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
          {reasons.map((reason) => {
            const Icon = REASON_ICONS[reason.id];

            return (
              <li key={reason.id}>
                <div
                  className={cn(
                    'group flex gap-md py-lg transition-[background-color] duration-300 md:gap-lg md:py-xl',
                    'hover:bg-white/80',
                    'motion-reduce:transition-none'
                  )}
                >
                  <span
                    className={cn(
                      'mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-neutral-200 bg-white text-primary shadow-sm',
                      'transition-[border-color,background-color,transform] duration-300',
                      'group-hover:scale-105 group-hover:border-primary/40 group-hover:bg-primary/5',
                      'motion-reduce:group-hover:scale-100'
                    )}
                  >
                    <Icon className="h-5 w-5 stroke-[1.75]" aria-hidden />
                  </span>

                  <div className="min-w-0 space-y-xs">
                    <h3 className="text-base font-bold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-primary">
                      {reason.title}
                    </h3>
                    <p className="text-pretty text-sm leading-relaxed text-neutral-600">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
