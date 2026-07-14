'use client';

export interface WedgeStat {
  value: string;
  label: string;
}

export interface WedgeCardProps {
  number: string;
  tagline: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  stats: WedgeStat[];
}

export function WedgeCard({ number, tagline, title, description, icon, stats }: WedgeCardProps) {
  return (
    <div className="group relative flex h-full min-h-88 w-full flex-col justify-between overflow-hidden rounded-xl border border-neutral-800 bg-linear-to-b from-neutral-900 to-neutral-950 p-lg shadow-card">
      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-opacity duration-500 group-hover:bg-primary/20" />

      <div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-4xl font-black text-primary/30 tracking-tight">
            {number}
          </span>
          <div className="text-primary text-xl transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        </div>

        {/* Headline Body Copy */}
        <div className="mt-lg space-y-xs">
          <span className="block font-mono text-[10px] uppercase tracking-widest text-primary font-bold">
            {tagline}
          </span>
          <h3 className="text-xl font-bold tracking-tight text-neutral-50">{title}</h3>
          <p className="mt-md text-sm leading-relaxed text-neutral-400">{description}</p>
        </div>
      </div>

      {/* Dynamic Statistics Footer Block */}
      {stats.length > 0 && (
        <div className="grid grid-cols-3 gap-sm pt-md border-t border-neutral-800/60 font-mono">
          {stats.map((stat, sIdx) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explain later>
            <div key={sIdx} className="space-y-[2px]">
              <div className="text-lg font-black text-neutral-100">{stat.value}</div>
              <div className="text-[9px] uppercase tracking-wider text-neutral-500 font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
