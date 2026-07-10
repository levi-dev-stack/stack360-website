import { LANDING_STATS } from '@/constants/component/landing-data';

export default function StatsStrip() {
  return (
    <section
      className="site-section w-full border-y border-neutral-200 bg-neutral-50"
      aria-label="Company metrics"
    >
      <div className="site-container grid grid-cols-2 gap-lg py-xl md:grid-cols-4">
        {LANDING_STATS.map((stat) => (
          <div key={stat.label} className="text-center md:text-left">
            <p className="font-mono text-3xl font-black tracking-tight text-primary md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-xs font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
