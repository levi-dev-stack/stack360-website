'use client';

import { ChevronDown, Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState } from 'react';
import {
  dropdownPanel,
  EASE_OUT_EXPO,
  fadeUp,
  motionVariants,
  staggerContainer,
} from '@/components/shared/motion/variants';
import { NAVIGATION_DATA } from '@/constants/component/navigation';
import { cn } from '@/styles/tailwind.utils';
import Stack360Logo from './Stack360Logo';

export default function PremiumNavbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const mobileNavId = useId();

  const isPathActive = (href?: string) => {
    if (!href) {
      return false;
    }
    if (href === '/') {
      return pathname === '/';
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown((current) => (current === label ? null : label));
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  // Close menus after client-side navigation.
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the route-change signal
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (!activeDropdown && !mobileOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        if (mobileOpen) {
          setMobileOpen(false);
          setMobileExpanded(null);
          menuButtonRef.current?.focus();
        }
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [activeDropdown, mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  return (
    <motion.header
      ref={headerRef}
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
      className="js-only relative z-50 w-full border-b border-neutral-200 bg-neutral-50 shadow-xs"
    >
      <div className="site-container flex h-18 items-center justify-between gap-xl lg:gap-2xl">
        <Stack360Logo />

        <nav
          className="hidden h-full flex-1 items-center justify-center gap-sm md:flex lg:gap-md"
          aria-label="Main navigation"
        >
          {NAVIGATION_DATA.map((item) => {
            const isDropdownOpen = activeDropdown === item.label;
            const hasActiveSubItem = item.columns?.some((col) =>
              col.items.some((subItem) => isPathActive(subItem.href))
            );
            const isItemSelected = isPathActive(item.href) || Boolean(hasActiveSubItem);

            if (item.type === 'link') {
              return (
                <motion.div key={item.label} whileHover={reduced ? undefined : { y: -1 }}>
                  <Link
                    href={item.href ?? '/'}
                    className={cn(
                      'relative rounded-sm px-sm py-xs text-sm font-medium transition-colors lg:px-md',
                      isItemSelected
                        ? 'bg-primary/10 text-primary'
                        : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                    )}
                  >
                    {isItemSelected && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-sm bg-primary/10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                </motion.div>
              );
            }

            return (
              <div key={item.label} className="relative flex h-full items-center">
                <motion.button
                  type="button"
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                  onClick={() => toggleDropdown(item.label)}
                  whileHover={reduced ? undefined : { y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    'relative inline-flex h-full cursor-pointer items-center gap-xs rounded-sm px-sm py-xs text-sm font-medium transition-colors lg:px-md',
                    isDropdownOpen
                      ? 'bg-neutral-100 text-neutral-900'
                      : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                  )}
                >
                  {isItemSelected && !isDropdownOpen && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-sm bg-primary/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span
                    className={cn(
                      'relative z-10',
                      isItemSelected && !isDropdownOpen ? 'text-primary' : undefined
                    )}
                  >
                    {item.label}
                  </span>
                  <ChevronDown
                    aria-hidden
                    className={cn(
                      'relative z-10 h-3.5 w-3.5 transition-transform duration-200',
                      isDropdownOpen
                        ? 'rotate-180 text-neutral-700'
                        : isItemSelected
                          ? 'text-primary'
                          : 'text-neutral-400'
                    )}
                  />
                </motion.button>

                <AnimatePresence>
                  {isDropdownOpen && item.columns && (
                    <motion.div
                      key={item.label}
                      variants={motionVariants(reduced, dropdownPanel)}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="fixed left-1/2 top-18 z-50 flex w-[min(70rem,calc(100vw-3rem))] -translate-x-1/2 flex-row overflow-hidden rounded-b-md border border-t-0 border-neutral-200 bg-neutral-50 shadow-card"
                    >
                      <motion.div
                        variants={motionVariants(reduced, staggerContainer)}
                        initial="hidden"
                        animate="show"
                        className="grid max-h-[60vh] flex-1 grid-cols-2 gap-xl overflow-y-auto p-xl"
                      >
                        {item.columns.map((col) => (
                          <div key={col.title ?? col.items[0]?.title} className="space-y-md">
                            {col.title && (
                              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500">
                                {col.title}
                              </h4>
                            )}
                            <ul className="space-y-sm">
                              {col.items.map((subItem) => {
                                const isSubItemSelected = isPathActive(subItem.href);

                                return (
                                  <motion.li
                                    key={subItem.title}
                                    variants={motionVariants(reduced, fadeUp)}
                                  >
                                    <Link
                                      href={subItem.href}
                                      onClick={() => setActiveDropdown(null)}
                                      className={cn(
                                        'group/item block rounded-md p-sm transition-colors',
                                        isSubItemSelected ? 'bg-primary/10' : 'hover:bg-neutral-100'
                                      )}
                                    >
                                      <div
                                        className={cn(
                                          'text-sm font-semibold transition-colors',
                                          isSubItemSelected
                                            ? 'text-primary'
                                            : 'text-neutral-900 group-hover/item:text-primary'
                                        )}
                                      >
                                        {subItem.title}
                                      </div>
                                      <p
                                        className={cn(
                                          'mt-xs text-xs leading-relaxed',
                                          isSubItemSelected
                                            ? 'text-neutral-700'
                                            : 'text-neutral-600'
                                        )}
                                      >
                                        {subItem.desc}
                                      </p>
                                    </Link>
                                  </motion.li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </motion.div>

                      {item.imagePreview && (
                        <motion.div
                          initial={reduced === false ? { opacity: 0, x: 16 } : false}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.1, ease: EASE_OUT_EXPO }}
                          className="flex w-[32%] flex-col justify-between border-l border-neutral-200 bg-neutral-100 p-xl"
                        >
                          <div className="space-y-md">
                            <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                              Our Vision
                            </span>
                            <div className="group relative aspect-16/10 w-full overflow-hidden rounded-md border border-neutral-200 bg-neutral-300">
                              <Image
                                src={item.imagePreview.src}
                                alt={item.imagePreview.alt}
                                width={600}
                                height={375}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                            <p className="pt-xs text-xs leading-relaxed font-medium text-neutral-600">
                              {item.imagePreview.caption}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-sm">
          <motion.div
            whileHover={reduced ? undefined : { scale: 1.03 }}
            whileTap={reduced ? undefined : { scale: 0.97 }}
            className="hidden sm:block"
          >
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center rounded-sm border border-transparent bg-primary px-lg py-sm text-sm font-bold text-neutral-50 shadow-sm transition-all hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Contact Us
            </Link>
          </motion.div>

          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-neutral-200 text-neutral-800 transition-colors hover:border-neutral-300 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls={mobileNavId}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id={mobileNavId}
            aria-label="Mobile navigation"
            initial={reduced === false ? { height: 0, opacity: 0 } : false}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduced === false ? { height: 0, opacity: 0 } : undefined}
            transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
            className="border-t border-neutral-200 bg-neutral-50 md:hidden"
          >
            <div className="site-container max-h-[min(70vh,32rem)] overflow-y-auto py-md">
              <ul className="space-y-xs">
                {NAVIGATION_DATA.map((item) => {
                  const expanded = mobileExpanded === item.label;
                  const panelId = `${mobileNavId}-${item.label.replace(/\s+/g, '-').toLowerCase()}`;

                  if (item.type === 'link') {
                    return (
                      <li key={item.label}>
                        <Link
                          href={item.href ?? '/'}
                          onClick={closeMobile}
                          className={cn(
                            'flex min-h-11 items-center rounded-md px-md text-sm font-semibold transition-colors',
                            isPathActive(item.href)
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
                    <li key={item.label} className="rounded-md border border-neutral-200">
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-controls={panelId}
                        onClick={() =>
                          setMobileExpanded((current) =>
                            current === item.label ? null : item.label
                          )
                        }
                        className="flex min-h-11 w-full items-center justify-between gap-sm px-md text-left text-sm font-semibold text-neutral-900"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          aria-hidden
                          className={cn(
                            'h-4 w-4 text-neutral-600 transition-transform',
                            expanded && 'rotate-180'
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
                            className="overflow-hidden border-t border-neutral-200"
                          >
                            {item.href && (
                              <Link
                                href={item.href}
                                onClick={closeMobile}
                                className="block px-md py-sm text-xs font-bold text-primary"
                              >
                                Overview
                              </Link>
                            )}
                            <ul className="space-y-xs px-sm pb-sm">
                              {item.columns.flatMap((col) =>
                                col.items.map((subItem) => (
                                  <li key={subItem.href}>
                                    <Link
                                      href={subItem.href}
                                      onClick={closeMobile}
                                      className={cn(
                                        'block rounded-md px-sm py-sm transition-colors',
                                        isPathActive(subItem.href)
                                          ? 'bg-primary/10'
                                          : 'hover:bg-neutral-100'
                                      )}
                                    >
                                      <span
                                        className={cn(
                                          'block text-sm font-semibold',
                                          isPathActive(subItem.href)
                                            ? 'text-primary'
                                            : 'text-neutral-900'
                                        )}
                                      >
                                        {subItem.title}
                                      </span>
                                      <span className="mt-xs block text-xs leading-relaxed text-neutral-600">
                                        {subItem.desc}
                                      </span>
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
                })}
              </ul>

              <Link
                href="/contact"
                onClick={closeMobile}
                className="mt-md flex min-h-11 items-center justify-center rounded-sm bg-primary px-lg text-sm font-bold text-neutral-50"
              >
                Contact Us
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
