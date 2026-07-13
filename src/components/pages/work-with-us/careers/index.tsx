'use client';

import { Briefcase } from 'lucide-react';
import Link from 'next/link';
import MotionCard from '@/components/shared/motion/MotionCard';
import MotionSection from '@/components/shared/motion/MotionSection';
import { MotionStagger, MotionStaggerItem } from '@/components/shared/motion/MotionStagger';
import PageClosingCta from '@/components/shared/PageClosingCta';
import PageHero from '@/components/shared/PageHero';
import {
  CAREERS_BENEFITS,
  CAREERS_CTA,
  CAREERS_HERO,
  CAREERS_OPEN_ROLES,
  CAREERS_PROCESS,
} from '@/constants/component/careers-data';

export default function CareersPage() {
  const hasOpenRoles = CAREERS_OPEN_ROLES && CAREERS_OPEN_ROLES.length > 0;

  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow={CAREERS_HERO.eyebrow}
        title={CAREERS_HERO.title}
        highlight={CAREERS_HERO.highlight}
        description={CAREERS_HERO.description}
      />

      {/* Benefits Section */}
      <MotionSection className="py-2xl">
        <div className="site-container">
          <MotionStagger className="mb-xl max-w-3xl space-y-sm">
            <MotionStaggerItem>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
                Why Stack360
              </span>
            </MotionStaggerItem>
            <MotionStaggerItem>
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                Build products that reach production
              </h2>
            </MotionStaggerItem>
            <MotionStaggerItem>
              <p className="text-sm leading-relaxed text-neutral-600">
                We hire engineers who care about architecture, delivery discipline, and the details
                that survive a production launch.
              </p>
            </MotionStaggerItem>
          </MotionStagger>

          <MotionStagger className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-4">
            {CAREERS_BENEFITS.map((benefit) => (
              <MotionStaggerItem key={benefit.title}>
                <MotionCard className="rounded-lg border border-neutral-200 bg-neutral-50 p-lg">
                  <div className="mb-md flex h-10 w-10 items-center justify-center rounded-md border border-primary/20 bg-primary/5 text-primary">
                    {benefit.icon}
                  </div>
                  <h3 className="text-base font-bold text-neutral-900">{benefit.title}</h3>
                  <p className="mt-sm text-sm leading-relaxed text-neutral-600">
                    {benefit.description}
                  </p>
                </MotionCard>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </MotionSection>

      {/* Open Roles Section */}
      <MotionSection className="border-t border-neutral-200 bg-neutral-100/50 py-2xl">
        <div className="site-container">
          <MotionStagger className="mb-xl flex flex-col gap-md sm:flex-row sm:items-end sm:justify-between">
            <MotionStaggerItem className="max-w-3xl space-y-sm">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
                Open roles
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                Current opportunities
              </h2>
            </MotionStaggerItem>
            <MotionStaggerItem>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
                {hasOpenRoles ? 'Hiring' : 'Fully Staffed'}
              </span>
            </MotionStaggerItem>
          </MotionStagger>

          {hasOpenRoles ? (
            <MotionStagger className="space-y-md">
              {CAREERS_OPEN_ROLES.map((role) => (
                <MotionStaggerItem key={role.title}>
                  <MotionCard className="group rounded-xl border border-neutral-200 bg-neutral-50 p-lg transition-colors hover:border-primary/30">
                    <div className="flex flex-col gap-md md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary">
                          {role.title}
                        </h3>
                        <p className="mt-xs text-sm text-neutral-600">
                          {role.team} · {role.location}
                        </p>
                        <p className="mt-xs font-mono text-xs text-neutral-500">{role.stack}</p>
                      </div>
                      <div className="flex items-center gap-md">
                        <span className="rounded-sm border border-neutral-200 bg-neutral-50 px-sm py-xs font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                          {role.type}
                        </span>
                        <Link
                          href={`/contact?role=${encodeURIComponent(role.title)}`}
                          className="rounded-sm bg-primary px-lg py-sm text-sm font-bold text-neutral-50 transition-all hover:bg-primary-dark hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.98]"
                        >
                          Apply
                        </Link>
                      </div>
                    </div>
                  </MotionCard>
                </MotionStaggerItem>
              ))}
            </MotionStagger>
          ) : (
            /* Clean, beautifully integrated Empty State */
            <MotionStaggerItem>
              <div className="flex flex-col p-3 items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50/50 px-lg py-3xl text-center shadow-inner">
                <div className="mb-md flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
                  <Briefcase className="h-6 w-6 stroke-[1.5]" />
                </div>
                <h3 className="text-base font-bold text-neutral-900">
                  No active openings right now
                </h3>
                <p className="mt-xs text-sm leading-relaxed text-neutral-500 max-w-content">
                  We aren&apos;t actively looking for specific roles today, but we love meeting
                  brilliant operators. Send us an open application.
                </p>
              </div>
            </MotionStaggerItem>
          )}
        </div>
      </MotionSection>

      {/* Hiring Process Section */}
      <MotionSection className="py-2xl">
        <div className="site-container">
          <MotionStagger className="mb-xl max-w-3xl space-y-sm">
            <MotionStaggerItem>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
                Hiring process
              </span>
            </MotionStaggerItem>
            <MotionStaggerItem>
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                Straightforward, technical, respectful of your time
              </h2>
            </MotionStaggerItem>
          </MotionStagger>

          <MotionStagger className="grid grid-cols-1 gap-lg md:grid-cols-3">
            {CAREERS_PROCESS.map((step) => (
              <MotionStaggerItem key={step.step}>
                <MotionCard className="rounded-xl border border-neutral-200 bg-neutral-50 p-lg">
                  <span className="font-mono text-3xl font-black text-primary/30">{step.step}</span>
                  <h3 className="mt-sm text-lg font-bold text-neutral-900">{step.title}</h3>
                  <p className="mt-sm text-sm leading-relaxed text-neutral-600">
                    {step.description}
                  </p>
                </MotionCard>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </MotionSection>

      <PageClosingCta {...CAREERS_CTA} />
    </div>
  );
}
