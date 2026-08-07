import Link from 'next/link';
import BrandIcon from '@/components/shared/BrandIcon';
import { LANDING_SERVICES } from '@/constants/component/landing-data';

type ServiceItem = (typeof LANDING_SERVICES)[number]['items'][number];

function ServiceRow({ item }: { item: ServiceItem }) {
  return (
    <Link
      href={item.href}
      className="group relative flex h-full flex-col justify-between rounded-xl border border-neutral-200 bg-neutral-50 p-lg shadow-xs outline-none transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:shadow-md focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <div>
        <div className="flex items-start justify-between gap-md">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-neutral-200 bg-white text-primary shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:border-primary/40 group-hover:bg-primary/5 motion-reduce:group-hover:scale-100">
            <BrandIcon slug={item.icon} size={18} variant="service" />
          </span>

          <span
            aria-hidden
            className="font-mono text-sm font-bold text-primary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:group-hover:translate-x-0"
          >
            →
          </span>
        </div>

        <div className="mt-md space-y-xs">
          <h4 className="text-base font-bold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-primary">
            {item.title}
          </h4>
          <p className="text-pretty text-sm leading-relaxed text-neutral-600">{item.description}</p>
        </div>
      </div>

      <div className="mt-xl flex flex-wrap gap-xs border-t border-neutral-100 pt-md">
        {item.skills.map((skill) => (
          <span
            key={skill.slug}
            className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200/80 bg-white px-xs py-0.5 text-[11px] font-medium text-neutral-600 transition-colors duration-300 group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:text-neutral-800"
          >
            <BrandIcon slug={skill.slug} size={12} variant="tech" fallbackSlug={item.icon} />
            {skill.name}
          </span>
        ))}
      </div>
    </Link>
  );
}

export default function ServicesSection() {
  return (
    <section className="site-section relative w-full overflow-hidden border-t border-neutral-200 bg-neutral-50 py-2xl">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,var(--token-neutral-50)_0%,var(--token-neutral-50)_40%,color-mix(in_srgb,var(--token-neutral-100)_55%,var(--token-neutral-50))_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,color-mix(in_srgb,var(--token-primary)_10%,transparent),transparent_65%)]"
      />

      <div className="site-container relative z-10">
        <div className="mb-2xl max-w-3xl space-y-md">
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
            Services & Expertise
          </p>
          <h2 className="text-balance text-3xl font-black tracking-tight text-neutral-900 md:text-4xl">
            Build Better Products With The Right Technology And Expertise
          </h2>
          <p className="max-w-prose text-pretty text-sm leading-relaxed text-neutral-600 md:text-base">
            We combine product strategy, engineering, cloud, automation, and AI to build technology
            that drives measurable business growth.
          </p>
        </div>

        <div className="space-y-2xl">
          {LANDING_SERVICES.map((group) => (
            <div key={group.category} className="space-y-md">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500">
                {group.category}
              </h3>

              <ul className="grid grid-cols-1 gap-lg md:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <li key={item.title} className="flex flex-col">
                    <ServiceRow item={item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
