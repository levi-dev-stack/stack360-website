'use client';

import { Search } from 'lucide-react';
import { type ChangeEvent, useId } from 'react';
import { cn } from '@/styles/tailwind.utils';

interface SearchInputFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
  id?: string;
}

export default function SearchInputField({
  value,
  onChange,
  placeholder = 'Search...',
  label = 'Search',
  className,
  id,
}: SearchInputFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={cn('group relative', className)}>
      <label htmlFor={inputId} className="sr-only">
        {label}
      </label>
      <Search
        aria-hidden
        className="pointer-events-none absolute left-md top-1/2 size-4 -translate-y-1/2 text-neutral-400 transition-colors duration-200 group-focus-within:text-primary"
      />
      <input
        id={inputId}
        type="search"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full min-h-12 cursor-text rounded-xl border border-neutral-200 bg-neutral-50 py-3.5 pl-11 pr-md text-sm text-neutral-900 shadow-xs outline-none transition-colors duration-200 placeholder:text-neutral-400 hover:border-neutral-300 hover:bg-white focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary"
      />
    </div>
  );
}
