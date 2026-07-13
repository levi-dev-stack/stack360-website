import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import FaqAccordion from '@/components/pages/our-work/shared/FaqAccordion';
import BrandIcon from '@/components/shared/BrandIcon';
import MotionCard from '@/components/shared/motion/MotionCard';
import MotionSection from '@/components/shared/motion/MotionSection';
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from '@/components/shared/motion/MotionStagger';
import PageClosingCta from '@/components/shared/PageClosingCta';
import PageHero from '@/components/shared/PageHero';
import type { CapabilityPageData, CapabilitySlug } from '@/constants/component/what-we-build-data';

/** BrandIcon service slugs (short keys in SERVICE_ICONS). */
const SERVICE_ICON: Record<CapabilitySlug, string> = {
  erp: 'erp',
  crm: 'crm',
  'ai-solutions': 'ai',
  saas: 'saas',
  'custom-software': 'custom',
  'mobile-apps': 'mobile',
  'web-apps': 'web',
  cloud: 'cloud',
  devops: 'devops',
  automation: 'automation',
};

function formatTechLabel(slug: string) {
  return slug
    .replace(/dotjs$/i, '.js')
    .replace(/^amazonaws$/i, 'AWS')
    .replace(/^reactnative$/i, 'React Native')
    .replace(/^nextdotjs$/i, 'Next.js')
    .replace(/^nodedotjs$/i, 'Node.js')
    .replace(/^vuedotjs$/i, 'Vue.js')
    .replace(/^rubyonrails$/i, 'Rails')
    .replace(/^tailwindcss$/i, 'Tailwind')
    .replace(/^huggingface$/i, 'Hugging Face')
    .replace(/^openjdk$/i, 'Java');
}

interface CapabilityPageProps {
  data: CapabilityPageData;
}

export default function CapabilityPage({ data }: CapabilityPageProps) {
  const iconSlug = SERVICE_ICON[data.slug];
  const [lead, ...rest] = data.capabilities;

  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        highlight={data.hero.highlight}
        description={data.hero.description}
      />

      {/* Capabilities — asymmetric: sticky intro + lead feature + grid */}
      <MotionSection className="border-b border-neutral-200 py-2xl">
        <div className="site-container grid grid-cols-1 gap-2xl lg:grid-cols-12">
          <MotionStagger className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <MotionStaggerItem>
              <span className="mb-md flex h-12 w-12 items-center justify-center rounded-md border border-primary/20 bg-primary/5">
                <BrandIcon slug={iconSlug} size={24} variant="service" />
              </span>
            </MotionStaggerItem>
            <MotionStaggerItem>
              <h2 className="text-balance text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
                {data.capabilitiesTitle}
              </h2>
            </MotionStaggerItem>
            <MotionStaggerItem>
              <p className="mt-md max-w-prose text-pretty text-sm leading-relaxed text-neutral-600">
                {data.capabilitiesIntro}
              </p>
            </MotionStaggerItem>
          </MotionStagger>

          <div className="space-y-md lg:col-span-8">
            {lead ? (
              <MotionReveal>
                <MotionCard className="rounded-xl border border-neutral-200 bg-neutral-100 p-xl">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
                    Core capability
                  </p>
                  <h3 className="mt-sm text-xl font-bold tracking-tight text-neutral-900">
                    {lead.title}
                  </h3>
                  <p className="mt-md max-w-prose text-pretty text-sm leading-relaxed text-neutral-600">
                    {lead.description}
                  </p>
                </MotionCard>
              </MotionReveal>
            ) : null}

            <MotionStagger className="grid grid-cols-1 gap-md sm:grid-cols-2">
              {rest.map((item) => (
                <MotionStaggerItem key={item.title}>
                  <MotionCard className="flex h-full flex-col rounded-lg border border-neutral-200 bg-neutral-50 p-lg transition-colors hover:border-primary/25">
                    <h3 className="text-base font-bold text-neutral-900">{item.title}</h3>
                    <p className="mt-sm flex-1 text-sm leading-relaxed text-neutral-600">
                      {item.description}
                    </p>
                  </MotionCard>
                </MotionStaggerItem>
              ))}
            </MotionStagger>
          </div>
        </div>
      </MotionSection>

      {/* Process — numbered sequence (order carries meaning) */}
      <MotionSection className="border-b border-neutral-200 bg-neutral-100 py-2xl">
        <div className="site-container">
          <MotionStagger className="mb-xl max-w-3xl">
            <MotionStaggerItem>
              <h2 className="text-balance text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
                {data.processTitle}
              </h2>
            </MotionStaggerItem>
            <MotionStaggerItem>
              <p className="mt-sm text-pretty text-sm leading-relaxed text-neutral-600">
                {data.processIntro}
              </p>
            </MotionStaggerItem>
          </MotionStagger>

          <MotionStagger className="grid grid-cols-1 gap-md md:grid-cols-3">
            {data.process.map((step, index) => (
              <MotionStaggerItem key={step.title}>
                <MotionCard className="relative h-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 p-lg shadow-sm">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-1 -top-2 font-mono text-6xl font-black leading-none text-primary/15"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="relative font-mono text-xs font-bold tracking-widest text-primary">
                    Step {index + 1}
                  </p>
                  <h3 className="relative mt-sm text-lg font-bold text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="relative mt-sm text-sm leading-relaxed text-neutral-600">
                    {step.description}
                  </p>
                </MotionCard>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </MotionSection>

      {/* Tech — continuous strip on paper */}
      <MotionSection className="border-b border-neutral-200 py-2xl">
        <div className="site-container">
          <div className="flex flex-col gap-xl lg:flex-row lg:items-end lg:justify-between">
            <MotionStagger className="">
              <MotionStaggerItem>
                <h2 className="text-balance text-2xl font-bold tracking-tight text-neutral-900">
                  Tech we ship with
                </h2>
              </MotionStaggerItem>
              <MotionStaggerItem>
                <p className="mt-sm text-sm leading-relaxed text-neutral-600">
                  Stack choices follow your ownership model — tools we use most in this lane.
                </p>
              </MotionStaggerItem>
            </MotionStagger>

            <MotionStagger className="flex flex-wrap gap-sm">
              {data.tech.map((slug) => (
                <MotionStaggerItem key={slug}>
                  <span className="inline-flex items-center gap-sm rounded-md border border-neutral-200 bg-neutral-50 px-md py-sm shadow-sm">
                    <BrandIcon slug={slug} size={18} variant="tech" />
                    <span className="text-xs font-semibold text-neutral-800">
                      {formatTechLabel(slug)}
                    </span>
                  </span>
                </MotionStaggerItem>
              ))}
            </MotionStagger>
          </div>
        </div>
      </MotionSection>

      {/* Projects — light instrumentation (no full black field) */}
      <MotionSection className="border-b border-neutral-200 bg-linear-to-b from-neutral-50 to-neutral-100 py-2xl">
        <div className="site-container">
          <MotionStagger className="mb-xl flex flex-col gap-md sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <MotionStaggerItem>
                <h2 className="text-balance text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
                  Related projects
                </h2>
              </MotionStaggerItem>
              <MotionStaggerItem>
                <p className="mt-sm text-sm leading-relaxed text-neutral-600">
                  Systems we shipped in this lane — open a case study for depth.
                </p>
              </MotionStaggerItem>
            </div>
            <MotionStaggerItem>
              <Link
                href="/our-work/case-studies"
                className="inline-flex items-center gap-xs text-sm font-bold text-primary hover:text-primary-dark"
              >
                All case studies
                <ArrowUpRight size={14} />
              </Link>
            </MotionStaggerItem>
          </MotionStagger>

          <MotionStagger className="grid grid-cols-1 gap-md md:grid-cols-3">
            {data.projects.map((project) => (
              <MotionStaggerItem key={project.slug}>
                <Link href={project.href} className="group block h-full">
                  <MotionCard className="flex h-full flex-col rounded-xl border border-neutral-200 bg-neutral-50 p-lg transition-colors group-hover:border-primary/35">
                    <div className="flex items-baseline justify-between gap-sm">
                      <p className="font-mono text-2xl font-black text-primary">{project.metric}</p>
                      <ArrowUpRight
                        size={16}
                        className="text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                      />
                    </div>
                    <p className="mt-xs font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                      {project.metricLabel}
                    </p>
                    <h3 className="mt-lg text-lg font-bold text-neutral-900 group-hover:text-primary">
                      {project.title}
                    </h3>
                    <p className="mt-xs text-sm text-neutral-600">{project.subtitle}</p>
                  </MotionCard>
                </Link>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </MotionSection>

      <MotionSection className="py-2xl">
        <div className="site-container max-w-3xl">
          <MotionStagger className="mb-xl">
            <MotionStaggerItem>
              <h2 className="text-balance text-2xl font-bold tracking-tight text-neutral-900">
                Frequently asked questions
              </h2>
            </MotionStaggerItem>
            <MotionStaggerItem>
              <p className="mt-sm text-sm leading-relaxed text-neutral-600">
                Straight answers for partners and client buyers scoping this capability.
              </p>
            </MotionStaggerItem>
          </MotionStagger>
          <FaqAccordion items={data.faqs} />
        </div>
      </MotionSection>

      <PageClosingCta {...data.cta} />
    </div>
  );
}
