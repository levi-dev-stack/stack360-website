import { Building2, Mail, MapPin, Phone } from 'lucide-react';
import HireForm from '@/components/pages/work-with-us/hire/HireForm';
import MotionCard from '@/components/shared/motion/MotionCard';
import MotionSection from '@/components/shared/motion/MotionSection';
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from '@/components/shared/motion/MotionStagger';
import PageClosingCta from '@/components/shared/PageClosingCta';
import PageHero from '@/components/shared/PageHero';
import {
  HIRE_CONTACT,
  HIRE_CTA,
  HIRE_HERO,
  HIRE_PROMISE,
} from '@/constants/component/hire-talent-data';

const CONTACT_ICONS = {
  map: MapPin,
  phone: Phone,
  mail: Mail,
  building: Building2,
} as const;

export default function HireTalentPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow={HIRE_HERO.eyebrow}
        title={HIRE_HERO.title}
        highlight={HIRE_HERO.highlight}
        description={HIRE_HERO.description}
      />

      <MotionSection className="border-b border-neutral-200 py-2xl">
        <div className="site-container grid grid-cols-1 gap-2xl lg:grid-cols-12">
          <div className="space-y-xl lg:col-span-5">
            <MotionStagger>
              <MotionStaggerItem>
                <h2 className="text-balance text-2xl font-bold tracking-tight text-neutral-900">
                  Recruit the top 1% of elite software engineers
                </h2>
              </MotionStaggerItem>
              <MotionStaggerItem>
                <p className="mt-md max-w-prose text-pretty text-sm leading-relaxed text-neutral-600">
                  English-speaking, full-time remote engineers for partners and client teams — from
                  designer to senior developer, architect, tech lead, or director. Overlap with U.S.
                  time zones when your cadence needs it.
                </p>
              </MotionStaggerItem>
              <MotionStaggerItem>
                <p className="mt-md inline-flex rounded-md border border-primary/20 bg-primary/5 px-md py-sm font-mono text-xs font-bold tracking-wider text-primary">
                  {HIRE_PROMISE}
                </p>
              </MotionStaggerItem>
            </MotionStagger>

            <MotionStagger className="space-y-md">
              {HIRE_CONTACT.map((item) => {
                const Icon = CONTACT_ICONS[item.icon];
                const href = 'href' in item ? item.href : undefined;
                const body = href ? (
                  <a
                    href={href}
                    className="text-sm leading-relaxed text-neutral-900 hover:text-primary"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm leading-relaxed text-neutral-800">{item.value}</p>
                );

                return (
                  <MotionStaggerItem key={item.label}>
                    <div className="flex gap-md">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-primary/20 bg-primary/5 text-primary">
                        <Icon size={16} aria-hidden />
                      </span>
                      <div>
                        <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                          {item.label}
                        </p>
                        {body}
                      </div>
                    </div>
                  </MotionStaggerItem>
                );
              })}
            </MotionStagger>
          </div>

          <MotionReveal className="lg:col-span-7">
            <MotionCard
              interactive={false}
              className="rounded-xl border border-neutral-200 bg-neutral-50 p-xl shadow-sm"
            >
              <HireForm />
            </MotionCard>
          </MotionReveal>
        </div>
      </MotionSection>

      <PageClosingCta {...HIRE_CTA} />
    </div>
  );
}
