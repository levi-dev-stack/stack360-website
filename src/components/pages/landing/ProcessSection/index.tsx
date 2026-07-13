import { Compass, Cpu, Layers, type LucideIcon, Rocket } from 'lucide-react';
import { LANDING_PROCESS } from '@/constants/component/landing-data';
import { cn } from '@/styles/tailwind.utils';

const PROCESS_ICONS: Record<number, LucideIcon> = {
  0: Compass,
  1: Layers,
  2: Cpu,
  3: Rocket,
};

function ProcessStep({ step, index }: { step: (typeof LANDING_PROCESS)[number]; index: number }) {
  const IconComponent = PROCESS_ICONS[index] || Compass;

  return (
    <li className="group relative flex flex-col pt-4">
      <div className="relative mb-md flex items-center">
        <div
          className={cn(
            'z-10 flex h-12 w-12 items-center justify-center rounded-xl border bg-white shadow-sm',
            'border-neutral-200 text-neutral-500 transition-all duration-300 ease-out',
            'group-hover:scale-110 group-hover:border-primary/40 group-hover:text-primary group-hover:shadow-md',
            'group-focus-within:scale-110 group-focus-within:border-primary/40 group-focus-within:text-primary',
            'motion-reduce:transition-colors motion-reduce:group-hover:scale-100 motion-reduce:group-focus-within:scale-100'
          )}
        >
          <IconComponent className="h-5 w-5 stroke-[1.75]" aria-hidden />
        </div>

        <span className="ml-md font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400 transition-colors duration-300 group-hover:text-neutral-600">
          Phase 0{index + 1}
        </span>
      </div>

      <div
        className={cn(
          'rounded-2xl border border-transparent p-sm transition-all duration-300 ease-out',
          'group-hover:border-neutral-200/60 group-hover:bg-white/50',
          'group-focus-within:border-neutral-200/60 group-focus-within:bg-white/50'
        )}
      >
        <h3 className="text-base font-bold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-primary">
          {step.title}
        </h3>
        <p className="mt-xs text-sm leading-relaxed text-neutral-600">{step.description}</p>
      </div>
    </li>
  );
}

/**
 * Server Component — process markup in first HTML paint.
 * Interactivity = Tailwind hover/focus transitions (works with JS off).
 */
export default function ProcessSection() {
  return (
    <section className="site-section w-full border-t border-neutral-200 bg-neutral-50 py-2xl">
      <div className="site-container">
        <div className="mb-3xl flex flex-col gap-lg md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-md">
            <h2 className="text-balance text-3xl font-black tracking-tight text-neutral-900 md:text-4xl">
              A delivery process built for predictability.
            </h2>
          </div>
          <p className="max-w-content text-sm leading-relaxed text-neutral-600 md:text-base">
            No black-box sprints. Every phase has clear outputs, owners, and review gates before we
            move forward.
          </p>
        </div>

        <ol className="relative grid grid-cols-1 gap-xl sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute top-[26px] hidden h-[2px] w-full bg-neutral-200/70 lg:block"
            aria-hidden
          />

          {LANDING_PROCESS.map((step, index) => (
            <ProcessStep key={step.step || index} step={step} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}
