import { Check } from 'lucide-react';
import ChallengeSolutionList from '@/components/pages/our-work/shared/ChallengeSolutionList';
import BrandIcon from '@/components/shared/BrandIcon';
import type { PortfolioProject } from '@/constants/component/our-work-portfolio-data';
import { cn } from '@/styles/tailwind.utils';

interface PortfolioProjectCardProps {
  project: PortfolioProject;
  /** Card surface — contrasts against the alternating section background. */
  surface?: 'paper' | 'warm';
}

export default function PortfolioProjectCard({
  project,
  surface = 'paper',
}: PortfolioProjectCardProps) {
  return (
    <article
      id={project.slug}
      className={cn(
        'flex h-full scroll-mt-28 flex-col rounded-xl border border-neutral-200 p-lg transition-colors hover:border-primary/25 sm:p-xl',
        surface === 'warm' ? 'bg-neutral-100' : 'bg-neutral-50'
      )}
    >
      <header className="flex items-start justify-between gap-md">
        <div className="min-w-0">
          <h3 className="text-balance text-xl font-bold tracking-tight text-neutral-900">
            {project.name}
          </h3>
          <p className="mt-xs font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500">
            {project.industry} · {project.duration}
          </p>
        </div>
        <div className="shrink-0 text-right">
          <p className="font-mono text-2xl font-black leading-none tracking-tight text-primary">
            {project.metric}
          </p>
          <p className="mt-xs font-mono text-[9px] font-bold uppercase tracking-wider text-neutral-500">
            {project.metricLabel}
          </p>
        </div>
      </header>

      <p className="mt-md text-pretty text-sm leading-relaxed text-neutral-600">
        {project.requirement}
      </p>

      <div className="mt-md flex flex-wrap items-center gap-sm">
        {project.stack.map((slug) => (
          <span
            key={slug}
            title={slug}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50"
          >
            <BrandIcon slug={slug} size={16} variant="tech" />
          </span>
        ))}
      </div>

      <div className="mt-lg">
        <p className="mb-sm font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-500">
          Challenges &amp; Solutions
        </p>
        <ChallengeSolutionList items={project.challenges} />
      </div>

      <div className="mt-lg grid gap-lg sm:grid-cols-2">
        <div>
          <p className="mb-sm font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-500">
            Key features
          </p>
          <ul className="space-y-xs">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-sm text-sm leading-relaxed text-neutral-700">
                <Check size={15} aria-hidden className="mt-0.5 shrink-0 text-primary" />
                <span className="text-pretty">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-sm font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-500">
            Result
          </p>
          <p className="text-pretty text-sm leading-relaxed text-neutral-900">{project.result}</p>
        </div>
      </div>
    </article>
  );
}
