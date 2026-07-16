import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import DomainJumpLinks from '@/components/pages/our-work/featured-projects/DomainJumpLinks';
import PortfolioProjectCard from '@/components/pages/our-work/shared/PortfolioProjectCard';
import MotionSection from '@/components/shared/motion/MotionSection';
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from '@/components/shared/motion/MotionStagger';
import PageClosingCta from '@/components/shared/PageClosingCta';
import PageHero from '@/components/shared/PageHero';
import { OUR_WORK_CTA } from '@/constants/component/our-work-data';
import {
  FEATURED_PROJECTS_HERO,
  PORTFOLIO_GROUPS,
} from '@/constants/component/our-work-portfolio-data';
import { cn } from '@/styles/tailwind.utils';

export default function FeaturedProjectsPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHero {...FEATURED_PROJECTS_HERO} />

      {/* Domain index — quick jump to each grouped section */}
      <MotionSection className="border-b border-neutral-200 py-xl">
        <div className="site-container">
          <DomainJumpLinks />
        </div>
      </MotionSection>

      {PORTFOLIO_GROUPS.map((group, index) => {
        const warmSection = index % 2 === 1;
        const cardSurface = warmSection ? 'paper' : 'warm';
        const singleProject = group.projects.length === 1;

        return (
          <MotionSection
            key={group.id}
            id={group.id}
            className={cn(
              'scroll-mt-20 border-b border-neutral-200 py-2xl',
              warmSection ? 'bg-neutral-100' : 'bg-neutral-50'
            )}
          >
            <div className="site-container">
              <MotionReveal className="mb-xl flex flex-col gap-md border-b border-neutral-200 pb-lg lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-content">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
                    {group.domain}
                  </span>
                  <h2 className="mt-sm text-balance text-3xl font-black tracking-tight text-neutral-900">
                    {group.category}
                  </h2>
                  <p className="mt-sm text-pretty text-sm leading-relaxed text-neutral-600">
                    {group.blurb}
                  </p>
                </div>
                <Link
                  href={group.capability.href}
                  className="inline-flex shrink-0 items-center gap-xs text-sm font-bold text-primary hover:text-primary-dark"
                >
                  Explore {group.capability.label}
                  <ArrowUpRight size={14} />
                </Link>
              </MotionReveal>

              <MotionStagger
                className={cn('grid grid-cols-1 gap-lg', !singleProject && 'lg:grid-cols-2')}
              >
                {group.projects.map((project) => (
                  <MotionStaggerItem key={project.slug} className="h-full">
                    <PortfolioProjectCard project={project} surface={cardSurface} />
                  </MotionStaggerItem>
                ))}
              </MotionStagger>
            </div>
          </MotionSection>
        );
      })}

      <PageClosingCta {...OUR_WORK_CTA} />
    </div>
  );
}
