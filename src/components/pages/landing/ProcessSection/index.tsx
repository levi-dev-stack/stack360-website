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
    <li className="group relative flex flex-col">
      <div
        className={cn(
          'flex h-full flex-col justify-between rounded-xl border border-neutral-200 bg-neutral-50 p-lg transition-colors duration-300',
          'hover:border-primary/25 hover:bg-white',
          'motion-reduce:transition-none'
        )}
      >
        <div>
          {/* Top Header Row */}
          <div className="mb-md flex items-center justify-between">
            <span
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 bg-white text-primary shadow-xs',
                'transition-[border-color,background-color,transform] duration-300',
                'group-hover:scale-105 group-hover:border-primary/40 group-hover:bg-primary/5',
                'motion-reduce:group-hover:scale-100'
              )}
            >
              <IconComponent className="h-5 w-5 stroke-[1.75]" aria-hidden />
            </span>

            <span className="font-mono text-sm font-bold uppercase tracking-wider text-neutral-900 transition-colors duration-300 group-hover:text-primary">
              Phase 0{index + 1}
            </span>
          </div>

          {/* Content */}
          <h3 className="text-base font-bold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-primary">
            {step.title}
          </h3>
          <p className="mt-sm text-pretty text-sm leading-relaxed text-neutral-600">
            {step.description}
          </p>
        </div>
      </div>
    </li>
  );
}

export default function ProcessSection() {
  return (
    <section className="site-section relative w-full overflow-hidden border-t border-neutral-200 bg-neutral-50 py-2xl">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,var(--token-neutral-50)_0%,var(--token-neutral-50)_40%,color-mix(in_srgb,var(--token-neutral-100)_55%,var(--token-neutral-50))_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,color-mix(in_srgb,var(--token-primary)_10%,transparent),transparent_65%)]"
      />

      <div className="site-container relative">
        <div className="mb-2xl flex flex-col gap-lg md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-md">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
              How We Work
            </p>
            <h2 className="text-balance text-3xl font-black tracking-tight text-neutral-900 md:text-4xl">
              A Product Development Process Built Around Your Goals
            </h2>
          </div>
          <p className="max-w-prose text-pretty text-sm leading-relaxed text-neutral-600 md:text-base">
            From strategy to launch and beyond, our product development process keeps every stage
            focused, transparent, and aligned with your business goals.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-lg sm:grid-cols-2 lg:grid-cols-4">
          {LANDING_PROCESS.map((step, index) => (
            <ProcessStep key={step.step || index} step={step} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}
