import { Bot, Layers, type LucideIcon, Target, TrendingUp } from 'lucide-react';
import { LANDING_WHY_CHOOSE } from '@/constants/component/landing-data';
import { cn } from '@/styles/tailwind.utils';

const REASON_ICONS: Record<(typeof LANDING_WHY_CHOOSE.reasons)[number]['id'], LucideIcon> = {
  'business-first': Target,
  'end-to-end': Layers,
  'ai-ready': Bot,
  'built-to-scale': TrendingUp,
};

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

        <div className="grid grid-cols-1 gap-lg md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = REASON_ICONS[reason.id];

            return (
              <div
                key={reason.id}
                className={cn(
                  'group flex flex-col justify-between rounded-xl border border-neutral-200 bg-neutral-50 p-lg transition-colors duration-300',
                  'hover:border-primary/25 hover:bg-white',
                  'motion-reduce:transition-none'
                )}
              >
                <div>
                  <span
                    className={cn(
                      'mb-md flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 bg-white text-primary shadow-xs',
                      'transition-[border-color,background-color,transform] duration-300',
                      'group-hover:scale-105 group-hover:border-primary/40 group-hover:bg-primary/5',
                      'motion-reduce:group-hover:scale-100'
                    )}
                  >
                    <Icon className="h-5 w-5 stroke-[1.75]" aria-hidden />
                  </span>

                  <h3 className="text-base font-bold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-primary">
                    {reason.title}
                  </h3>

                  <p className="mt-sm text-pretty text-sm leading-relaxed text-neutral-600">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
