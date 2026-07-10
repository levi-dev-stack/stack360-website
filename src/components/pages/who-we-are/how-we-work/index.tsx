import LeaderCards from '@/components/pages/who-we-are/shared/LeaderCards';
import MotionCard from '@/components/shared/motion/MotionCard';
import MotionSection from '@/components/shared/motion/MotionSection';
import { MotionStagger, MotionStaggerItem } from '@/components/shared/motion/MotionStagger';
import PageClosingCta from '@/components/shared/PageClosingCta';
import PageHero from '@/components/shared/PageHero';
import {
  HOW_WE_WORK_CTA,
  HOW_WE_WORK_HERO,
  HOW_WE_WORK_LEADERS,
  HOW_WE_WORK_PRINCIPLES,
  HOW_WE_WORK_PROCESS,
} from '@/constants/component/who-we-are-how-we-work-data';

export default function HowWeWorkPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow={HOW_WE_WORK_HERO.eyebrow}
        title={HOW_WE_WORK_HERO.title}
        highlight={HOW_WE_WORK_HERO.highlight}
        description={HOW_WE_WORK_HERO.description}
      />

      <MotionSection className="py-2xl">
        <div className="site-container">
          <MotionStagger className="mb-xl max-w-3xl space-y-sm">
            <MotionStaggerItem>
              <span className="block font-mono text-xs font-bold uppercase tracking-widest text-primary">
                Principles
              </span>
            </MotionStaggerItem>
            <MotionStaggerItem>
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                Innovative solutions shaping your future
              </h2>
            </MotionStaggerItem>
            <MotionStaggerItem>
              <p className="text-sm leading-relaxed text-neutral-600">
                Pioneering thinkers and problem solvers guide our company through tailored delivery,
                transparent communication, and engineering standards that hold up in production.
              </p>
            </MotionStaggerItem>
          </MotionStagger>

          <MotionStagger className="grid grid-cols-1 gap-lg md:grid-cols-2">
            {HOW_WE_WORK_PRINCIPLES.map((principle) => (
              <MotionStaggerItem key={principle.title}>
                <MotionCard className="rounded-xl border border-neutral-200 bg-neutral-50 p-lg">
                  <h3 className="text-lg font-bold text-neutral-900">{principle.title}</h3>
                  <p className="mt-sm text-sm leading-relaxed text-neutral-600">
                    {principle.description}
                  </p>
                </MotionCard>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </MotionSection>

      <MotionSection className="border-t border-neutral-200 bg-neutral-100/50 py-2xl">
        <div className="site-container">
          <MotionStagger className="mb-xl max-w-3xl space-y-sm">
            <MotionStaggerItem>
              <span className="block font-mono text-xs font-bold uppercase tracking-widest text-primary">
                Delivery model
              </span>
            </MotionStaggerItem>
            <MotionStaggerItem>
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                From discovery to long-term partnership
              </h2>
            </MotionStaggerItem>
          </MotionStagger>

          <MotionStagger className="grid grid-cols-1 gap-lg md:grid-cols-2 lg:grid-cols-4">
            {HOW_WE_WORK_PROCESS.map((step) => (
              <MotionStaggerItem key={step.step}>
                <MotionCard className="rounded-xl border border-neutral-200 bg-neutral-50 p-lg shadow-sm">
                  <span className="font-mono text-3xl font-black text-primary/30">{step.step}</span>
                  <h3 className="mt-sm text-base font-bold text-neutral-900">{step.title}</h3>
                  <p className="mt-sm text-sm leading-relaxed text-neutral-600">
                    {step.description}
                  </p>
                </MotionCard>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </MotionSection>

      <MotionSection className="py-2xl">
        <div className="site-container space-y-xl">
          <MotionStagger className="max-w-3xl space-y-sm">
            <MotionStaggerItem>
              <span className="block font-mono text-xs font-bold uppercase tracking-widest text-primary">
                Leadership
              </span>
            </MotionStaggerItem>
            <MotionStaggerItem>
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                Meet our leaders
              </h2>
            </MotionStaggerItem>
            <MotionStaggerItem>
              <p className="text-sm leading-relaxed text-neutral-600">
                They are pioneering thinkers and problem solvers dedicated to guiding our company
                through innovative solutions and teamwork.
              </p>
            </MotionStaggerItem>
          </MotionStagger>
          <LeaderCards leaders={HOW_WE_WORK_LEADERS} />
        </div>
      </MotionSection>

      <PageClosingCta {...HOW_WE_WORK_CTA} />
    </div>
  );
}
