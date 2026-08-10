'use client';

export interface WedgePoint {
  primary: string;
  secondary: string;
}

export interface WedgeCardProps {
  number: string;
  tagline: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  points: WedgePoint[];
}

export function WedgeCard({ number, tagline, title, description, icon, points }: WedgeCardProps) {
  return (
    <div className="group relative flex h-full min-h-88 w-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white p-lg shadow-xs transition-all duration-300 hover:border-primary/30 hover:shadow-md">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-linear-to-b from-primary/10 via-primary/5 to-transparent blur-2xl transition-opacity duration-500 group-hover:from-primary/20 group-hover:via-primary/10" />

      <div className="relative shrink-0">
        <div className="flex items-center justify-between">
          <span className="font-mono text-4xl font-black tracking-tight text-primary/25">
            {number}
          </span>
          <div className="text-xl text-primary transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        </div>

        <div className="mt-lg space-y-xs">
          <span className="block font-mono text-[13px] font-bold uppercase tracking-widest text-primary">
            {tagline}
          </span>
          <h3 className="text-balance text-xl font-bold tracking-tight text-neutral-900">
            {title}
          </h3>
          <p className="mt-md text-pretty text-sm leading-relaxed text-neutral-600">
            {description}
          </p>
        </div>
      </div>

      {points.length > 0 && (
        <ul className="relative mt-auto flex flex-col gap-0 border-t border-neutral-200/80 pt-md">
          {points.map((point) => (
            <li
              key={point.primary}
              className="grid grid-cols-[auto_1fr] items-start gap-x-sm gap-y-0.5 border-b border-neutral-100 py-sm last:border-b-0 last:pb-0 first:pt-0"
            >
              <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <div className="min-w-0">
                <p className="text-sm font-bold tracking-tight text-neutral-900">{point.primary}</p>
                <p className="mt-0.5 text-[11px] leading-snug text-neutral-500">
                  {point.secondary}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
