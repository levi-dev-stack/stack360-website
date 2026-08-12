'use client';

import { Check, ChevronDown, X } from 'lucide-react';
import { type KeyboardEvent, useEffect, useId, useMemo, useRef, useState } from 'react';
import { useClickOutside } from '@/hooks/core';
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
  const listboxId = `${selectId}-listbox`;
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const placeholder = allOptionLabel ?? `${label} (All)`;
  const selectValue = !value || options.some((option) => option.value === value) ? value : '';
  const selectedOption = options.find((option) => option.value === selectValue);
  const displayLabel = selectedOption?.label ?? placeholder;
  const hasSelection = Boolean(selectValue);

  const menuOptions = useMemo(
    () => [{ value: '', label: placeholder }, ...options],
    [options, placeholder]
  );

  useClickOutside(containerRef, () => setIsOpen(false));

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const selectedIndex = menuOptions.findIndex((option) => option.value === selectValue);
    setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
    listboxRef.current?.focus();
  }, [isOpen, menuOptions, selectValue]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    optionRefs.current[activeIndex]?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex, isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const handleSelect = (nextValue: string) => {
    const isAllowed = !nextValue || options.some((option) => option.value === nextValue);
    onChange(isAllowed ? nextValue : '');
    closeMenu();
  };

  const handleClear = () => {
    onChange('');
    closeMenu();
  };

  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === 'Enter') {
      event.preventDefault();
      setIsOpen(true);
      return;
    }

    if (event.key === ' ' && !isOpen) {
      event.preventDefault();
      setIsOpen(true);
    }
  };

  const handleListKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setActiveIndex((index) => Math.min(index + 1, menuOptions.length - 1));
        break;
      case 'ArrowUp':
        event.preventDefault();
        setActiveIndex((index) => Math.max(index - 1, 0));
        break;
      case 'Home':
        event.preventDefault();
        setActiveIndex(0);
        break;
      case 'End':
        event.preventDefault();
        setActiveIndex(menuOptions.length - 1);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (menuOptions[activeIndex]) {
          handleSelect(menuOptions[activeIndex].value);
        }
        break;
      case 'Escape':
        event.preventDefault();
        closeMenu();
        break;
      case 'Tab':
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  const optionClassName = (isSelected: boolean, isActive: boolean) =>
    cn(
      'flex w-full items-center gap-sm rounded-lg px-md py-2.5 text-left text-sm transition-colors duration-150 outline-none',
      isSelected
        ? 'bg-primary/8 font-semibold text-primary'
        : 'font-medium text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900',
      isActive && !isSelected && 'bg-neutral-100',
      isActive && isSelected && 'bg-primary/12'
    );

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <label htmlFor={selectId} className="sr-only">
        {label}
      </label>
      <button
        ref={triggerRef}
        type="button"
        id={selectId}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={handleTriggerKeyDown}
        className={cn(
          'flex w-full min-h-12 cursor-pointer items-center rounded-lg border border-neutral-200 bg-neutral-50 py-3.5 pl-md pr-10 text-left text-sm font-semibold shadow-xs outline-none transition-colors duration-200 hover:border-neutral-300 hover:bg-white focus-visible:border-primary focus-visible:bg-white focus-visible:ring-1 focus-visible:ring-primary',
          hasSelection ? 'text-neutral-900' : 'text-neutral-600'
        )}
      >
        <span className="truncate">{displayLabel}</span>
      </button>

      {hasSelection ? (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            handleClear();
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              event.stopPropagation();
              handleClear();
            }
          }}
          aria-label={`Clear ${label} filter`}
          className="absolute right-md top-1/2 inline-flex size-6 -translate-y-1/2 items-center justify-center rounded-md text-neutral-400 transition-colors hover:bg-neutral-200/70 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
        >
          <X className="size-3.5 shrink-0" aria-hidden />
        </button>
      ) : (
        <ChevronDown
          aria-hidden
          className={cn(
            'pointer-events-none absolute right-md top-1/2 size-4 -translate-y-1/2 text-neutral-400 transition-transform duration-200',
            isOpen && 'rotate-180 text-primary'
          )}
        />
      )}

      {isOpen ? (
        <div className="absolute top-[calc(100%+0.375rem)] right-0 left-0 z-50 overflow-hidden rounded-xl border border-neutral-200/90 bg-white shadow-lg shadow-neutral-900/10">
          <div
            ref={listboxRef}
            id={listboxId}
            role="listbox"
            aria-label={label}
            aria-activedescendant={`${selectId}-option-${activeIndex}`}
            tabIndex={0}
            onKeyDown={handleListKeyDown}
            className="max-h-60 overflow-y-auto p-xs outline-none focus:outline-none"
          >
            {menuOptions.map((option, index) => {
              const isSelected = selectValue === option.value;
              const isActive = activeIndex === index;

              return (
                <div key={option.value || '__all__'} role="presentation">
                  <button
                    ref={(element) => {
                      optionRefs.current[index] = element;
                    }}
                    id={`${selectId}-option-${index}`}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    tabIndex={-1}
                    onClick={() => handleSelect(option.value)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={optionClassName(isSelected, isActive)}
                  >
                    <span className="flex size-4 shrink-0 items-center justify-center">
                      {isSelected ? <Check className="size-3.5" aria-hidden /> : null}
                    </span>
                    <span className="truncate">{option.label}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
