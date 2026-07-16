'use client';

import {
  Briefcase,
  CircleDollarSign,
  Contact,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  type LucideIcon,
  Music,
  Share2,
  ShoppingCart,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

interface Industry {
  name: string;
  icon: LucideIcon;
}

const INDUSTRIES: Industry[] = [
  { name: 'eCommerce', icon: ShoppingCart },
  { name: 'Fintech', icon: CircleDollarSign },
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Social Networking', icon: Share2 },
  { name: 'Education', icon: GraduationCap },
  { name: 'Hospitality', icon: Contact },
  { name: 'Entertainment', icon: Music },
  { name: 'Government', icon: Landmark },
  { name: 'Real Estate', icon: Home },
  { name: 'Business', icon: Briefcase },
];

export default function ClientsMarquee() {
  const track = [...INDUSTRIES, ...INDUSTRIES];
  const reduced = useReducedMotion();

  return (
    <section
      className="site-section w-full bg-[linear-gradient(90deg,var(--token-primary)_0%,var(--token-primary-light)_22%,var(--token-neutral-50)_48%,var(--token-neutral-100)_100%)]"
      aria-labelledby="clients-marquee-label"
    >
      <div className="flex min-h-14 w-full items-stretch sm:min-h-16">
        <div className="site-inset-left flex max-w-38 shrink-0 items-center py-md pr-lg sm:max-w-none lg:pr-xl">
          <p
            id="clients-marquee-label"
            className="font-mono text-[13px] font-bold uppercase leading-snug tracking-widest text-neutral-50 sm:text-[15px]"
          >
            Industries we serve
          </p>
        </div>

        <div className="relative flex min-w-0 flex-1 items-center overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-neutral-100 to-transparent"
          />

          <ul className="sr-only">
            {INDUSTRIES.map((industry) => (
              <li key={industry.name}>{industry.name}</li>
            ))}
          </ul>

          <motion.div
            aria-hidden
            className="flex w-max items-center gap-xl py-md pl-lg pr-lg sm:gap-2xl sm:pl-xl"
            animate={reduced ? undefined : { x: ['0%', '-50%'] }}
            transition={reduced ? undefined : { duration: 28, repeat: Infinity, ease: 'linear' }}
          >
            {track.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={`${industry.name}-${index}`}
                  className="flex shrink-0 items-center gap-sm"
                >
                  <Icon
                    aria-hidden
                    className="size-5 shrink-0 text-neutral-500 sm:size-6"
                    strokeWidth={1.75}
                  />
                  <span className="whitespace-nowrap text-base font-bold uppercase tracking-wide text-neutral-600 transition-colors hover:text-neutral-900 sm:text-lg">
                    {industry.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
