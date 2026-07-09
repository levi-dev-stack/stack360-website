'use client';

import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
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
    <header
      ref={headerRef}
      className="relative z-50 w-full border-b border-neutral-200 bg-neutral-50"
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
                <Link
                  key={item.label}
                  href={item.href ?? '/'}
                  className={cn(
                    'rounded-sm px-sm py-xs text-sm font-medium transition-colors lg:px-md',
                    isItemSelected
                      ? 'bg-primary/10 text-primary'
                      : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                  )}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.label} className="relative flex h-full items-center">
                <button
                  type="button"
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                  onClick={() => toggleDropdown(item.label)}
                  className={cn(
                    'cursor-pointer inline-flex h-full items-center gap-xs rounded-sm px-sm py-xs text-sm font-medium transition-colors lg:px-md',
                    isDropdownOpen
                      ? 'bg-neutral-100 text-neutral-900'
                      : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                  )}
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden
                    className={cn(
                      'h-3.5 w-3.5 transition-transform duration-200',
                      isDropdownOpen
                        ? 'rotate-180 text-neutral-700'
                        : isItemSelected
                          ? 'text-primary'
                          : 'text-neutral-400'
                    )}
                  />
                </button>

                {isDropdownOpen && item.columns && (
                  <div className="fixed left-1/2 top-18 z-50 flex w-[min(70rem,calc(100vw-3rem))] -translate-x-1/2 flex-row overflow-hidden rounded-b-md border border-t-0 border-neutral-200 bg-neutral-50 shadow-card">
                    <div className="grid max-h-[60vh] flex-1 grid-cols-2 gap-xl overflow-y-auto p-xl">
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
                                <li key={subItem.title}>
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
                                        isSubItemSelected ? 'text-neutral-700' : 'text-neutral-600'
                                      )}
                                    >
                                      {subItem.desc}
                                    </p>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {item.imagePreview && (
                      <div className="flex w-[32%] flex-col justify-between border-l border-neutral-200 bg-neutral-100 p-xl">
                        <div className="space-y-md">
                          <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                            Studio Vision
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

                        <div className="pt-md">
                          <Link
                            href={item.href ?? '/'}
                            onClick={() => setActiveDropdown(null)}
                            className="group/link inline-flex items-center text-xs font-bold text-primary hover:text-primary-dark"
                          >
                            Discover Studio Standards
                            <span className="ml-xs transition-transform group-hover/link:translate-x-xs">
                              →
                            </span>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center">
          <Link
            href="/contact"
            className="rounded-sm border border-transparent bg-primary px-lg py-sm text-sm font-bold text-neutral-50 shadow-sm transition-all hover:bg-primary-dark active:scale-[0.98]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
