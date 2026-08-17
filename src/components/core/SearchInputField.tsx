'use client';

import { Search } from 'lucide-react';
import { type ChangeEvent, useEffect, useId, useState } from 'react';
import { cn } from '@/styles/tailwind.utils';
import {
  getSearchInputLengthError,
  SEARCH_INPUT_MAX_LENGTH,
  sanitizeSearchInput,
  stripSearchInputSpecialChars,
} from '@/utils/string';

interface SearchInputFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
  id?: string;
  maxLength?: number;
  disabled?: boolean;
}

export default function SearchInputField({
  value,
  onChange,
  placeholder = 'Search...',
  label = 'Search',
  className,
  id,
  maxLength = SEARCH_INPUT_MAX_LENGTH,
  disabled = false,
}: SearchInputFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;
  const [lengthError, setLengthError] = useState<string | null>(null);

  useEffect(() => {
    if (!getSearchInputLengthError(value, maxLength)) {
      setLengthError(null);
    }
  }, [value, maxLength]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const raw = event.target.value;
    const withoutSpecialChars = stripSearchInputSpecialChars(raw);
    const lengthErrorMessage = getSearchInputLengthError(withoutSpecialChars, maxLength);

    setLengthError(lengthErrorMessage);
    onChange(sanitizeSearchInput(raw, maxLength));
  };

  return (
    <div className={cn('group', className, disabled && 'opacity-60')}>
      <div className="relative">
        <label htmlFor={inputId} className="sr-only">
          {label}
        </label>
        <Search
          aria-hidden
          className={cn(
            'pointer-events-none absolute left-md top-1/2 size-4 -translate-y-1/2 transition-colors duration-200',
            lengthError ? 'text-danger' : 'text-neutral-400 group-focus-within:text-primary'
          )}
        />
        <input
          id={inputId}
          type="search"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={Boolean(lengthError)}
          aria-describedby={lengthError ? errorId : undefined}
          className={cn(
            'w-full min-h-12 rounded-xl border bg-neutral-50 py-3.5 pl-11 pr-md text-sm text-neutral-900 shadow-xs outline-none transition-colors duration-200 placeholder:text-neutral-400 hover:bg-white focus:bg-white focus:ring-1 disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-400 disabled:placeholder:text-neutral-300 disabled:border-neutral-200',
            lengthError
              ? 'border-danger hover:border-danger focus:border-danger focus:ring-danger/30'
              : 'border-neutral-200 hover:border-neutral-300 focus:border-primary focus:ring-primary'
          )}
        />
      </div>
      {lengthError ? (
        <p id={errorId} className="mt-xs text-xs font-medium text-danger" role="alert">
          {lengthError}
        </p>
      ) : null}
    </div>
  );
}
