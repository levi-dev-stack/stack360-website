'use client';

import { X } from 'lucide-react';
import { SearchInputField } from '@/components/core';
import { MotionStaggerItem } from '@/components/shared/motion';

interface OpenRolesSearchBarProps {
  searchInput: string;
  onSearchChange: (value: string) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
  disabled?: boolean;
}

export default function OpenRolesSearchBar({
  searchInput,
  onSearchChange,
  onClearFilters,
  hasActiveFilters,
  disabled = false,
}: OpenRolesSearchBarProps) {
  return (
    <MotionStaggerItem className="mb-md">
      <div className="flex items-start gap-sm">
        <SearchInputField
          value={searchInput}
          onChange={onSearchChange}
          placeholder="Search by title, skill, or keyword..."
          label="Search open roles"
          disabled={disabled}
          className="min-w-0 flex-1"
        />
        <button
          type="button"
          onClick={onClearFilters}
          disabled={disabled || !hasActiveFilters}
          aria-label="Clear search and filters"
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-xs rounded-xl border border-neutral-200 bg-neutral-50 px-md text-sm font-semibold text-neutral-700 shadow-xs transition-colors hover:border-neutral-300 hover:bg-white hover:text-primary disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:border-neutral-200 disabled:hover:bg-neutral-50 disabled:hover:text-neutral-700 sm:px-lg"
        >
          <X className="size-4 shrink-0" aria-hidden />
          <span className="hidden sm:inline">Clear all</span>
        </button>
      </div>
    </MotionStaggerItem>
  );
}
