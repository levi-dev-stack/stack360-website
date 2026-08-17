'use client';

import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState } from 'react';
import { EASE_OUT_EXPO } from '@/components/shared/motion/variants';
import { NAVIGATION_DATA } from '@/constants/component/navigation';
import { cn } from '@/styles/tailwind.utils';
import { isPathActive } from '@/utils/url';
import NavbarItemMobile from './NavbarItemMobile';
import NavItemDesktop from './NavItemDesktop';
import Stack360Logo from './Stack360Logo';

export default function PremiumNavbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();
  const reduced = useReducedMotion();
  const mobileNavId = useId();

  const isContactActive = isPathActive(pathname, '/contact');

  const handleMouseEnter = (label: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 120);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  useEffect(() => {
    if (!pathname) {
      return;
    }

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
      className="js-only sticky top-0 z-50 w-full border-b border-neutral-200 bg-neutral-50/90 backdrop-blur-md shadow-xs"
    >
      <div className="site-container flex h-18 items-center justify-between gap-xl lg:gap-2xl">
        <Stack360Logo animateWordmark={false} />

        <nav
          className="hidden h-full flex-1 items-center justify-center gap-xs md:flex lg:gap-sm"
          aria-label="Main navigation"
        >
          {NAVIGATION_DATA.map((item) => (
            <NavItemDesktop
              key={item.label}
              item={item}
              isDropdownOpen={activeDropdown === item.label}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onCloseDropdown={() => setActiveDropdown(null)}
            />
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-sm">
          <motion.div
            whileHover={reduced ? undefined : { scale: 1.02 }}
            whileTap={reduced ? undefined : { scale: 0.98 }}
            className="hidden sm:block"
          >
            <Link
              href="/contact"
              aria-current={isContactActive ? 'page' : undefined}
              className={cn(
                'inline-flex min-h-10 items-center gap-2 rounded-sm border px-md py-xs text-xs font-bold uppercase tracking-wider transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                isContactActive
                  ? 'border-primary bg-primary-dark text-white ring-2 ring-primary/30'
                  : 'border-transparent bg-primary text-white hover:bg-primary-dark shadow-sm'
              )}
            >
              {isContactActive && <span className="h-2 w-2 rounded-full bg-white animate-pulse" />}
              <span>Contact Us</span>
            </Link>
          </motion.div>

          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-800 transition-colors hover:border-neutral-300 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden"
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
            className="border-t border-neutral-200/80 bg-neutral-50 md:hidden"
          >
            <div className="site-container max-h-[min(75vh,36rem)] overflow-y-auto py-md">
              <ul className="space-y-xs">
                {NAVIGATION_DATA.map((item) => (
                  <NavbarItemMobile
                    key={item.label}
                    item={item}
                    expanded={mobileExpanded === item.label}
                    onToggle={() =>
                      setMobileExpanded((current) => (current === item.label ? null : item.label))
                    }
                    onNavigate={closeMobile}
                  />
                ))}
              </ul>

              <Link
                href="/contact"
                onClick={closeMobile}
                aria-current={isContactActive ? 'page' : undefined}
                className={cn(
                  'mt-md flex min-h-11 items-center justify-center gap-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all',
                  isContactActive
                    ? 'border border-primary bg-primary-dark text-white ring-2 ring-primary/30'
                    : 'bg-primary text-white shadow-sm'
                )}
              >
                {isContactActive && (
                  <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                )}
                <span>Contact Us</span>
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
