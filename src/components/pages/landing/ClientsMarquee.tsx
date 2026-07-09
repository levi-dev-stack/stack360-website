'use client';

import { motion } from 'motion/react';

interface Client {
  name: string;
  logo?: string;
}

interface Stat {
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '95%', label: 'Retention Rate' },
];

const CLIENTS: Client[] = [
  { name: 'TechCorp' },
  { name: 'GlobalLogistics' },
  { name: 'FinSync' },
  { name: 'Modern' },
  { name: 'NovaBank' },
  { name: 'Quantia' },
  { name: 'Hyperloop' },
  { name: 'Vertex AI' },
];

export default function ClientsMarquee() {
  const track = [...CLIENTS, ...CLIENTS];

  return (
    <section className="w-full border-t border-neutral-200 bg-neutral-100">
      <div className="flex w-full items-stretch">
        <div className="flex shrink-0 items-center gap-lg border-r border-neutral-200 bg-neutral-50 px-lg py-md sm:gap-xl sm:px-xl">
          {STATS.map((stat) => (
            <div key={stat.label} className="whitespace-nowrap">
              <p className="text-2xl font-bold leading-none text-primary">{stat.value}</p>
              <p className="mt-xs text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="relative flex-1 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-neutral-100 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-neutral-100 to-transparent" />

          <motion.div
            className="flex w-max items-center gap-2xl py-md pl-2xl"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          >
            {track.map((client, index) => (
              <div key={`${client.name}-${index}`} className="flex shrink-0 items-center gap-sm">
                {client.logo && (
                  <span
                    aria-hidden="true"
                    style={{ backgroundImage: `url(${client.logo})` }}
                    className="h-6 w-6 bg-contain bg-center bg-no-repeat opacity-60 grayscale"
                  />
                )}
                <span className="whitespace-nowrap text-lg font-bold uppercase tracking-wide text-neutral-400 transition-colors hover:text-neutral-600">
                  {client.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
