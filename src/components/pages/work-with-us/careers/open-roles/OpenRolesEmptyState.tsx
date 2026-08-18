'use client';

import { Briefcase, Search } from 'lucide-react';

interface OpenRolesEmptyStateProps {
  variant: 'no-matches' | 'no-catalog';
  onResetFilters: () => void;
}

export default function OpenRolesEmptyState({ variant, onResetFilters }: OpenRolesEmptyStateProps) {
  const isNoMatches = variant === 'no-matches';
  const Icon = isNoMatches ? Search : Briefcase;

  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200/80 bg-white shadow-sm">
      <div className="px-xl py-2xl sm:py-3xl">
        <div className="mx-auto flex flex-col items-center text-center">
          <div className="mb-md flex size-14 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 text-neutral-400">
            <Icon className="size-6 stroke-[1.5]" aria-hidden />
          </div>
          <h3 className="text-balance text-base font-bold text-neutral-900">
            {isNoMatches ? 'No matching roles found' : 'No open openings right now'}
          </h3>
          <p className="mt-sm text-pretty text-sm leading-relaxed text-neutral-600">
            {isNoMatches
              ? 'Try adjusting your search terms or clearing your filters to see open opportunities.'
              : "We aren't actively hiring for specific roles, but we're always looking for talent."}
          </p>
          {isNoMatches && (
            <button
              type="button"
              onClick={onResetFilters}
              className="mt-lg inline-flex min-h-11 items-center justify-center rounded-sm border border-neutral-200 bg-white px-lg py-sm text-sm font-semibold text-neutral-800 transition-colors hover:border-primary/30 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
