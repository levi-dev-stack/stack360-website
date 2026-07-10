'use client';

import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import {
  dropdownPanel,
  EASE_OUT_EXPO,
  fadeUp,
  motionVariants,
  staggerContainer,
} from '@/components/shared/motion/variants';
import { cn } from '@/styles/tailwind.utils';
import Stack360Logo from './Stack360Logo';

interface SubItem {
  title: string;
  desc: string;
  href: string;
}

interface NavSection {
  label: string;
  type: 'link' | 'dropdown';
  href?: string;
  columns?: { title?: string; items: SubItem[] }[];
  imagePreview?: { src: string; alt: string; caption: string };
}

const NAVIGATION_DATA: NavSection[] = [
  {
    label: 'What We Build',
    type: 'dropdown',
    href: '/what-we-build',
    imagePreview: {
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
      alt: 'System Custom Architecture',
      caption: 'Building complex high-performance systems from the ground up.',
    },
    columns: [
      {
        title: 'Core Ecosystems',
        items: [
          {
            title: 'ERP',
            desc: 'Centralized enterprise resource engines designed for scalability.',
            href: '/what-we-build/erp',
          },
          {
            title: 'CRM',
            desc: 'Smarter customer relationship tracking optimized for pipeline velocity.',
            href: '/what-we-build/crm',
          },
          {
            title: 'AI Solutions',
            desc: 'Custom neural integrations and intelligent automated workflows.',
            href: '/what-we-build/ai-solutions',
          },
          {
            title: 'SaaS',
            desc: 'Multi-tenant cloud products engineered for subscription scale.',
            href: '/what-we-build/saas',
          },
          {
            title: 'Custom Software',
            desc: 'Bespoke digital tailoring solving complex foundational bottlenecks.',
            href: '/what-we-build/custom-software',
          },
        ],
      },
      {
        title: 'Platform & Infrastructure',
        items: [
          {
            title: 'Mobile Apps',
            desc: 'Native-grade portable applications built for iOS and Android environments.',
            href: '/what-we-build/mobile-apps',
          },
          {
            title: 'Web Apps',
            desc: 'High-speed, modular web applications built with dynamic architecture.',
            href: '/what-we-build/web-apps',
          },
          {
            title: 'Cloud',
            desc: 'Resilient serverless distribution structures mapped to modern frameworks.',
            href: '/what-we-build/cloud',
          },
          {
            title: 'DevOps',
            desc: 'Automated CI/CD pipelines keeping code testing stable.',
            href: '/what-we-build/devops',
          },
          {
            title: 'Automation',
            desc: 'Scraping manual tasks out of day-to-day work operations.',
            href: '/what-we-build/automation',
          },
        ],
      },
    ],
  },
  {
    label: 'Who We Help',
    type: 'dropdown',
    href: '/who-we-help',
    imagePreview: {
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
      alt: 'Collaborative Workspace',
      caption: 'Partnering across stages—from pre-seed to enterprise ecosystems.',
    },
    columns: [
      {
        items: [
          {
            title: 'Industries',
            desc: 'Domain-focused execution covering Healthcare, FinTech, and Logistics.',
            href: '/who-we-help/industries',
          },
          {
            title: 'Startups',
            desc: 'Agile MVP structures and lightning-fast product path discoveries.',
            href: '/who-we-help/startups',
          },
          {
            title: 'SMEs',
            desc: 'Expanding operational scale through custom system modernization.',
            href: '/who-we-help/smes',
          },
          {
            title: 'Enterprises',
            desc: 'Massive legacy transitions engineered cleanly without downtime.',
            href: '/who-we-help/enterprises',
          },
        ],
      },
    ],
  },
  {
    label: 'Our Work',
    type: 'dropdown',
    href: '/our-work',
    imagePreview: {
      src: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop',
      alt: 'Case Showcase',
      caption: 'Explore real-world case studies detailing deep system metrics.',
    },
    columns: [
      {
        title: 'Portfolios',
        items: [
          {
            title: 'Case Studies',
            desc: 'Deep deep-dives explaining performance problems and technical answers.',
            href: '/our-work/case-studies',
          },
          {
            title: 'Featured Projects',
            desc: 'A showcase spotlighting our absolute highest tier engineering tasks.',
            href: '/our-work/featured-projects',
          },
          {
            title: 'Client Success Stories',
            desc: 'Real statistical returns generated for our industry partners.',
            href: '/our-work/client-success-stories',
          },
        ],
      },
      {
        title: 'Insights',
        items: [
          {
            title: 'Blog',
            desc: 'Engineering thought pieces covering fullstack architectures.',
            href: '/our-work/blog',
          },
          {
            title: 'News',
            desc: 'Studio announcements, system updates, and scaling milestones.',
            href: '/our-work/news',
          },
          {
            title: 'Learning Sessions',
            desc: 'Public documentation reviews and live internal developer recordings.',
            href: '/our-work/learning-sessions',
          },
          {
            title: 'FAQs',
            desc: 'Straightforward answers regarding contracts, handoffs, and sprint setups.',
            href: '/our-work/faqs',
          },
        ],
      },
    ],
  },
  {
    label: 'Who We Are',
    type: 'dropdown',
    href: '/who-we-are',
    imagePreview: {
      src: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=600&auto=format&fit=crop',
      alt: 'Engineering Lab',
      caption: 'A disciplined team centered around technical integrity.',
    },
    columns: [
      {
        items: [
          {
            title: 'History',
            desc: 'Tracing our path from a minor technical garage up to a complex engineering firm.',
            href: '/who-we-are/history',
          },
          {
            title: 'Culture',
            desc: 'A zero-fluff workspace prioritizing neat git histories and clean execution.',
            href: '/who-we-are/culture',
          },
          {
            title: 'How We Work',
            desc: 'Inside look at our daily iterations, architectural planning, and staging lines.',
            href: '/who-we-are/how-we-work',
          },
        ],
      },
    ],
  },
  {
    label: 'Work With Us',
    type: 'dropdown',
    href: '/work-with-us',
    imagePreview: {
      src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
      alt: 'Hiring Process Flowchart',
      caption: 'Let us build together, or help build the future of our firm.',
    },
    columns: [
      {
        title: 'For Partners',
        items: [
          {
            title: 'Looking for a software partner',
            desc: 'Review our Feature Projects, Client Success Stories, and Case Studies to initiate contract development pipelines.',
            href: '/work-with-us/software-partner',
          },
        ],
      },
      {
        title: 'For Builders',
        items: [
          {
            title: 'Looking for a Career',
            desc: 'Browse Open Positions, check out modern Internship options, and learn our strict Hiring Process.',
            href: '/work-with-us/careers',
          },
        ],
      },
    ],
  },
];

export default function PremiumNavbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const reduced = useReducedMotion();

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

  useEffect(() => {
    if (!activeDropdown) {
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
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [activeDropdown]);

  return (
    <motion.header
      ref={headerRef}
      initial={reduced ? false : { y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
      className="relative z-50 w-full border-b border-neutral-200 bg-white shadow-xs"
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
                    'relative cursor-pointer inline-flex h-full items-center gap-xs rounded-sm px-sm py-xs text-sm font-medium transition-colors lg:px-md',
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
                  <span className="relative z-10">{item.label}</span>
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
                          initial={reduced ? false : { opacity: 0, x: 16 }}
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

        <div className="flex shrink-0 items-center">
          <motion.div whileHover={reduced ? undefined : { scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="rounded-sm border border-transparent bg-primary px-lg py-sm text-sm font-bold text-neutral-50 shadow-sm transition-all hover:bg-primary-dark"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
