import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import PageClosingCta from '@/components/shared/PageClosingCta';
import MotionCard from '@/components/shared/motion/MotionCard';
import MotionSection from '@/components/shared/motion/MotionSection';
import { MotionStagger, MotionStaggerItem } from '@/components/shared/motion/MotionStagger';
import {
  ENTERPRISES_CTA,
  ENTERPRISES_DIFFERENTIATORS,
  ENTERPRISES_HERO,
  ENTERPRISES_TRUST,
} from '@/constants/component/who-we-help-enterprises-data';

export default function EnterprisesPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow={ENTERPRISES_HERO.eyebrow}
        title={ENTERPRISES_HERO.title}
        highlight={ENTERPRISES_HERO.highlight}
        description={ENTERPRISES_HERO.description}
      />

      <MotionSection className="py-2xl">
        <div className="site-container">
          <MotionStagger className="mb-xl max-w-3xl">
            <MotionStaggerItem>
              <h2 className="text-balance text-2xl font-bold tracking-tight text-neutral-900">
                Enterprise differentiators
              </h2>
            </MotionStaggerItem>
            <MotionStaggerItem>
              <p className="mt-sm text-sm leading-relaxed text-neutral-600">
                Compliance, scale, integration depth, and always-on support — without the
                procurement drag of a traditional systems integrator.
              </p>
            </MotionStaggerItem>
          </MotionStagger>

          <MotionStagger className="grid grid-cols-1 gap-md md:grid-cols-2 lg:grid-cols-3">
            {ENTERPRISES_DIFFERENTIATORS.map((item) => (
              <MotionStaggerItem key={item.title}>
                <MotionCard className="rounded-lg border border-neutral-200 bg-neutral-50 p-lg">
                  <div className="mb-md flex h-10 w-10 items-center justify-center rounded-md border border-primary/20 bg-primary/5 text-primary">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-neutral-900">{item.title}</h3>
                  <p className="mt-sm text-sm leading-relaxed text-neutral-600">
                    {item.description}
                  </p>
                </MotionCard>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </MotionSection>

      <MotionSection className="border-t border-neutral-200 bg-neutral-950 py-2xl">
        <div className="site-container space-y-2xl">
          <MotionStagger className="max-w-3xl space-y-sm">
            <MotionStaggerItem>
              <h2 className="text-balance text-2xl font-bold tracking-tight text-neutral-50">
                Trusted by teams at scale
              </h2>
            </MotionStaggerItem>
            <MotionStaggerItem>
              <p className="text-sm leading-relaxed text-neutral-400">
                Long-term partnerships with organizations that demand uptime, auditability, and
                engineering depth across cloud platforms.
              </p>
            </MotionStaggerItem>
          </MotionStagger>

          <MotionStagger className="grid grid-cols-1 gap-2xl lg:grid-cols-2">
            <MotionStaggerItem>
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                Cloud partnerships
              </p>
              <div className="mt-md flex flex-wrap gap-sm">
                {ENTERPRISES_TRUST.cloudPartners.map((partner) => (
                  <span
                    key={partner}
                    className="rounded-md border border-neutral-700 bg-neutral-900 px-lg py-sm font-mono text-sm font-bold text-neutral-200"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </MotionStaggerItem>

            <MotionStaggerItem>
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                Client programs
              </p>
              <div className="mt-md flex flex-wrap gap-sm">
                {ENTERPRISES_TRUST.clients.map((client) => (
                  <span
                    key={client}
                    className="rounded-md border border-neutral-800 bg-neutral-900/50 px-md py-sm text-sm font-semibold text-neutral-300"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </MotionStaggerItem>
          </MotionStagger>

          <MotionStaggerItem>
            <MotionCard
              interactive={false}
              className="rounded-xl border border-neutral-800 bg-neutral-900 p-lg"
            >
              <h3 className="text-lg font-bold text-neutral-50">{ENTERPRISES_TRUST.sla.title}</h3>
              <p className="mt-sm max-w-3xl text-sm leading-relaxed text-neutral-400">
                {ENTERPRISES_TRUST.sla.description}
              </p>
            </MotionCard>
          </MotionStaggerItem>
        </div>
      </MotionSection>

      <MotionSection className="border-t border-neutral-200 py-xl">
        <div className="site-container">
          <MotionStaggerItem>
            <p className="text-sm text-neutral-600">
              Need sector-specific compliance? Explore{' '}
              <Link
                href="/who-we-help/industries"
                className="font-bold text-primary hover:text-primary-dark"
              >
                industry solutions
              </Link>{' '}
              or compare{' '}
              <Link
                href="/who-we-help/smes"
                className="font-bold text-primary hover:text-primary-dark"
              >
                SME engagement models
              </Link>
              .
            </p>
          </MotionStaggerItem>
        </div>
      </MotionSection>

      <PageClosingCta {...ENTERPRISES_CTA} />
    </div>
  );
}
