'use client';

import { ChevronDown } from 'lucide-react';
import { type ChangeEvent, useId } from 'react';
import { cn } from '@/styles/tailwind.utils';

export interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownOptionsProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly DropdownOption[];
  allOptionLabel?: string;
  className?: string;
  id?: string;
}

export default function DropdownOptions({
  label,
  value,
  onChange,
  options,
  allOptionLabel,
  className,
  id,
}: DropdownOptionsProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const placeholder = allOptionLabel ?? `${label} (All)`;
  const selectValue = !value || options.some((option) => option.value === value) ? value : '';

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextValue = event.target.value;
    const isAllowed = !nextValue || options.some((option) => option.value === nextValue);
    onChange(isAllowed ? nextValue : '');
  };

  return (
    <div className={cn('relative', className)}>
      <label htmlFor={selectId} className="sr-only">
        {label}
      </label>
      <select
        id={selectId}
        value={selectValue}
        onChange={handleChange}
        className="w-full min-h-12 cursor-pointer appearance-none rounded-lg border border-neutral-200 bg-neutral-50 py-3.5 pl-md pr-10 text-sm font-semibold text-neutral-700 shadow-xs outline-none transition-colors duration-200 hover:border-neutral-300 hover:bg-white hover:text-neutral-900 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-60"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        aria-hidden
        className="pointer-events-none absolute right-md top-1/2 size-4 -translate-y-1/2 text-neutral-400"
      />
    </div>
  );
}
