'use client';

import { motion, useReducedMotion } from 'motion/react';

interface Client {
  name: string;
  logo?: string;
}

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
  const reduced = useReducedMotion();

  return (
    <section
      className="site-section w-full border-t border-neutral-200 bg-neutral-100"
      aria-labelledby="clients-marquee-label"
    >
      <div className="flex min-h-14 w-full items-stretch sm:min-h-16">
        <div className="site-inset-left flex shrink-0 items-center border-r border-neutral-200 bg-neutral-950 py-md pr-lg lg:pr-xl">
          <p
            id="clients-marquee-label"
            className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-50"
          >
            Trusted by
          </p>
        </div>

        <div className="relative flex min-w-0 flex-1 items-center overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-neutral-100 to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-neutral-100 to-transparent"
          />

          <motion.div
            className="flex w-max items-center gap-xl py-md pl-lg pr-lg sm:gap-2xl sm:pl-xl"
            animate={reduced ? undefined : { x: ['0%', '-50%'] }}
            transition={reduced ? undefined : { duration: 22, repeat: Infinity, ease: 'linear' }}
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
                <span className="whitespace-nowrap text-base font-bold uppercase tracking-wide text-neutral-500 transition-colors hover:text-neutral-700 sm:text-lg">
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
