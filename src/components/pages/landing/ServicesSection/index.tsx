import Link from 'next/link';
import BrandIcon from '@/components/shared/BrandIcon';
import { LANDING_SERVICES } from '@/constants/component/landing-data';

type ServiceItem = (typeof LANDING_SERVICES)[number]['items'][number];

function ServiceRow({ item }: { item: ServiceItem }) {
  return (
    <Link
      href={item.href}
      className="group relative flex h-full items-start gap-md rounded-lg border border-neutral-200/80 bg-neutral-50 px-md py-md shadow-sm outline-none transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out hover:-translate-y-1 hover:border-primary/35 hover:bg-white hover:shadow-md focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-50 active:translate-y-0 active:shadow-sm motion-reduce:transition-colors motion-reduce:hover:translate-y-0"
    >
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-neutral-200 bg-white text-primary shadow-sm transition-[transform,border-color,background-color,color] duration-300 group-hover:scale-110 group-hover:border-primary/40 group-hover:bg-primary/5 group-active:scale-100 motion-reduce:group-hover:scale-100">
        <BrandIcon slug={item.icon} size={16} variant="service" />
      </span>

      <span className="min-w-0 flex-1 space-y-sm">
        <span className="flex items-start justify-between gap-sm">
          <span className="block text-sm font-bold text-neutral-900 transition-colors duration-300 group-hover:text-primary">
            {item.title}
          </span>
          <span
            aria-hidden
            className="mt-0.5 shrink-0 font-mono text-xs font-bold text-primary opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:group-hover:translate-x-0"
          >
            →
          </span>
        </span>

        <span className="block text-sm leading-relaxed text-neutral-600 transition-colors duration-300 group-hover:text-neutral-700">
          {item.description}
        </span>

        <span className="flex flex-wrap gap-xs pt-xs">
          {item.skills.map((skill) => (
            <span
              key={skill.slug}
              className="inline-flex items-center gap-1.5 rounded-sm border border-neutral-200 bg-white px-sm py-0.5 text-[11px] text-neutral-600 transition-[border-color,background-color,color] duration-300 group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:text-neutral-800"
            >
              <BrandIcon slug={skill.slug} size={12} variant="tech" />
              {skill.name}
            </span>
          ))}
        </span>
      </span>
    </Link>
  );
}

/**
 * Server Component — full services markup ships in the HTML so content
 * is visible and crawlable with JavaScript disabled. Card interactivity
 * is pure Tailwind (hover / focus / active) and works without JS.
 */
export default function ServicesSection() {
  return (
    <section className="site-section w-full bg-neutral-50 py-2xl">
      <div className="site-container">
        <div className="mb-2xl max-w-4xl space-y-md">
          <h2 className="text-balance text-3xl font-black tracking-tight text-neutral-900 md:text-4xl">
            Services engineered for every stage of your product.
          </h2>
          <p className="text-sm leading-relaxed text-neutral-600">
            ERP, CRM, AI, SaaS, and the platform layer underneath — one studio accountable for the
            full stack.
          </p>
        </div>

        <div className="space-y-2xl">
          {LANDING_SERVICES.map((group) => (
            <div key={group.category} className="space-y-md">
              <h3 className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                {group.category}
              </h3>
              <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-sm">
                {group.items.map((item) => (
                  <li key={item.title} className="min-h-full">
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
