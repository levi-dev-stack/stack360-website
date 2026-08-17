'use client';

import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useId } from 'react';
import { EASE_OUT_EXPO } from '@/components/shared/motion/variants';
import type { NavSection } from '@/constants/component/navigation';
import { cn } from '@/styles/tailwind.utils';
import { isPathActive } from '@/utils/url';

interface NavbarItemMobileProps {
  item: NavSection;
  expanded: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}

export default function NavbarItemMobile({
  item,
  expanded,
  onToggle,
  onNavigate,
}: NavbarItemMobileProps) {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const panelId = useId();

  if (item.type === 'link') {
    return (
      <li>
        <Link
          href={item.href ?? '/'}
          onClick={onNavigate}
          className={cn(
            'flex min-h-11 items-center rounded-lg px-md text-sm font-semibold transition-colors',
            isPathActive(pathname, item.href)
              ? 'bg-primary/10 text-primary'
              : 'text-neutral-800 hover:bg-neutral-100'
          )}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="rounded-lg border border-neutral-200/80 bg-white">
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex min-h-11 w-full items-center justify-between gap-sm px-md text-left text-sm font-semibold text-neutral-900"
      >
        <span>{item.label}</span>
        <ChevronDown
          aria-hidden
          strokeWidth={2}
          className={cn(
            'size-4 shrink-0 text-neutral-500 transition-all duration-200',
            expanded && 'rotate-180 text-primary'
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {expanded && item.columns && (
          <motion.div
            id={panelId}
            initial={reduced === false ? { height: 0, opacity: 0 } : false}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduced === false ? { height: 0, opacity: 0 } : undefined}
            transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
            className="overflow-hidden border-t border-neutral-200/80 bg-neutral-50/50"
          >
            <ul className="space-y-xs px-sm pb-sm">
              {item.columns.flatMap((col) =>
                col.items.map((subItem) => (
                  <li key={subItem.href}>
                    <Link
                      href={subItem.href}
                      onClick={onNavigate}
                      className={cn(
                        'block rounded-md px-sm py-sm transition-colors',
                        isPathActive(pathname, subItem.href)
                          ? 'bg-primary/10'
                          : 'hover:bg-neutral-100'
                      )}
                    >
                      <span
                        className={cn(
                          'block text-sm font-semibold',
                          isPathActive(pathname, subItem.href) ? 'text-primary' : 'text-neutral-900'
                        )}
                      >
                        {subItem.title}
                      </span>
                      {subItem.desc && (
                        <span className="mt-xs block text-xs leading-relaxed text-neutral-500">
                          {subItem.desc}
                        </span>
                      )}
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
