'use client';

import { ArrowRight, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  dropdownPanel,
  fadeUp,
  motionVariants,
  staggerContainer,
} from '@/components/shared/motion/variants';
import type { NavSection } from '@/constants/component/navigation';
import { cn } from '@/styles/tailwind.utils';
import { isPathActive } from '@/utils/url';

interface NavItemDesktopProps {
  item: NavSection;
  isDropdownOpen: boolean;
  onMouseEnter: (label: string) => void;
  onMouseLeave: () => void;
  onCloseDropdown: () => void;
}

export default function NavItemDesktop({
  item,
  isDropdownOpen,
  onMouseEnter,
  onMouseLeave,
  onCloseDropdown,
}: NavItemDesktopProps) {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const hasActiveSubItem = item.columns?.some((col) =>
    col.items.some((subItem) => isPathActive(pathname, subItem.href))
  );
  const isItemSelected = isPathActive(pathname, item.href) || Boolean(hasActiveSubItem);

  if (item.type === 'link') {
    return (
      <div className="relative flex h-full items-center">
        <Link
          href={item.href ?? '/'}
          className={cn(
            'relative inline-flex items-center rounded-md px-sm py-xs text-sm font-semibold transition-all duration-200 lg:px-md',
            isItemSelected ? 'text-primary' : 'text-neutral-700 hover:text-neutral-950'
          )}
        >
          {isItemSelected && (
            <motion.span
              layoutId="nav-active-bg"
              className="absolute inset-0 rounded-md bg-primary/10"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
          <span className="relative z-10">{item.label}</span>
        </Link>
      </div>
    );
  }

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: hover-driven desktop dropdown
    <div
      className="relative flex h-full items-center"
      onMouseEnter={() => onMouseEnter(item.label)}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={cn(
          'group/nav relative inline-flex h-9 items-center gap-xs rounded-md px-sm py-xs text-sm font-semibold transition-colors duration-200 lg:px-md hover:cursor-pointer',
          isDropdownOpen || isItemSelected
            ? 'text-primary'
            : 'text-neutral-700 hover:text-neutral-950'
        )}
      >
        {isItemSelected && !isDropdownOpen && (
          <motion.span
            layoutId="nav-active-bg"
            className="absolute inset-0 rounded-md bg-primary/10"
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}
        <span className="relative z-10">{item.label}</span>
        <ChevronDown
          aria-hidden
          strokeWidth={2.25}
          className={cn(
            'relative z-10 size-3.5 shrink-0 transition-all duration-300 ease-out',
            isDropdownOpen
              ? 'rotate-180 text-primary'
              : 'text-neutral-400 group-hover/nav:text-neutral-700'
          )}
        />
      </div>

      {isDropdownOpen && (
        <motion.span
          layoutId="dropdown-arrow"
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-full z-50 mt-xs -translate-x-1/2 -translate-y-[calc(100%-1px)]"
          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
        >
          <svg
            width="16"
            height="9"
            viewBox="0 0 16 9"
            className="block overflow-visible"
            aria-hidden="true"
          >
            <path d="M0 9 L8 0.5 L16 9 Z" fill="#f6f0ed" />
            <path
              d="M0.75 8.25 L8 1.25 L15.25 8.25"
              className="stroke-neutral-300"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.span>
      )}

      <AnimatePresence>
        {isDropdownOpen && item.columns && (
          <motion.div
            key={item.label}
            variants={motionVariants(reduced, dropdownPanel)}
            initial="hidden"
            animate="show"
            exit="exit"
            className="absolute left-1/2 top-full z-40 w-[min(48rem,calc(100vw-2rem))] -translate-x-1/2 pt-xs"
            onMouseEnter={() => onMouseEnter(item.label)}
            onMouseLeave={onMouseLeave}
          >
            <div className="overflow-hidden rounded-2xl border border-neutral-300/80 bg-linear-to-b from-neutral-100/90 via-white to-white p-lg shadow-2xl shadow-neutral-900/15 backdrop-blur-xl">
              <motion.div
                variants={motionVariants(reduced, staggerContainer)}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 gap-lg"
              >
                {item.columns.map((col) => (
                  <div key={col.title ?? col.items[0]?.title} className="space-y-sm">
                    {col.title && (
                      <h4 className="px-sm font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                        {col.title}
                      </h4>
                    )}
                    <ul className="space-y-xs">
                      {col.items.map((subItem) => {
                        const isSubItemSelected = isPathActive(pathname, subItem.href);

                        return (
                          <motion.li key={subItem.title} variants={motionVariants(reduced, fadeUp)}>
                            <Link
                              href={subItem.href}
                              onClick={onCloseDropdown}
                              className={cn(
                                'group/item flex flex-col rounded-lg p-sm transition-all duration-200',
                                isSubItemSelected
                                  ? 'bg-neutral-200/60 shadow-2xs'
                                  : 'hover:bg-neutral-200/40'
                              )}
                            >
                              <div
                                className={cn(
                                  'flex items-center justify-between text-sm font-bold transition-colors',
                                  isSubItemSelected
                                    ? 'text-primary'
                                    : 'text-neutral-900 group-hover/item:text-primary'
                                )}
                              >
                                <span>{subItem.title}</span>
                                <ArrowRight
                                  aria-hidden
                                  strokeWidth={2}
                                  className="size-3.5 shrink-0 -translate-x-1 text-neutral-400 opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:text-primary group-hover/item:opacity-100"
                                />
                              </div>
                              {subItem.desc && (
                                <p className="mt-0.5 text-xs leading-relaxed text-neutral-600 line-clamp-2">
                                  {subItem.desc}
                                </p>
                              )}
                            </Link>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
