import { CornerDownRight } from 'lucide-react';
import type { ChallengeSolution } from '@/constants/component/our-work-portfolio-data';
import { cn } from '@/styles/tailwind.utils';

interface ChallengeSolutionListProps {
  items: readonly ChallengeSolution[];
  className?: string;
}

/**
 * Renders challenge → solution pairs line by line.
 * Challenge copy is set in the brand orange; the resolving solution is near-black.
 * Challenge text uses primary-dark at a semibold weight so it clears AA large-text
 * contrast on both the paper and warm-paper fields.
 */
export default function ChallengeSolutionList({ items, className }: ChallengeSolutionListProps) {
  return (
    <ul
      className={cn('divide-y divide-neutral-200 rounded-lg border border-neutral-200', className)}
    >
      {items.map((item) => (
        <li key={item.challenge} className="grid gap-sm p-lg sm:gap-md">
          <div className="flex flex-col gap-xs sm:flex-row sm:gap-md">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary sm:w-20 sm:shrink-0 sm:pt-0.5">
              Challenge
            </span>
            <p className="text-pretty text-sm font-semibold leading-relaxed text-primary-dark sm:flex-1">
              {item.challenge}
            </p>
          </div>
          <div className="flex flex-col gap-xs sm:flex-row sm:gap-md">
            <span className="flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-500 sm:w-20 sm:shrink-0 sm:pt-0.5">
              <CornerDownRight size={11} aria-hidden className="text-neutral-400" />
              Solution
            </span>
            <p className="text-pretty text-sm leading-relaxed text-neutral-900 sm:flex-1">
              {item.solution}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
