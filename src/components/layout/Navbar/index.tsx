/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
/** biome-ignore-all lint/a11y/useValidAnchor: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/styles/tailwind.utils';

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
  // { label: 'Home', type: 'link', href: '/' },
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

  return (
    <header className="relative z-50 w-full border-b border-neutral-200 bg-neutral-50">
      <div className="flex h-18 w-full items-center justify-between px-lg lg:px-xl">
        {/* Brand Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="font-sans text-xl font-bold tracking-tight text-neutral-950 hover:text-neutral-950"
          >
            Stack<span className="text-primary">360</span>
          </Link>
        </div>

        {/* Central Navigation Items */}
        <nav className="hidden h-full md:flex items-center space-x-xs relative">
          {NAVIGATION_DATA.map((item) => {
            const isDropdownOpen = activeDropdown === item.label;

            if (item.type === 'link') {
              return (
                <Link
                  key={item.label}
                  href={item.href ?? '#'}
                  className="px-md py-sm text-sm font-semibold tracking-wide text-neutral-700 transition-colors duration-150 hover:text-primary rounded-sm"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div
                key={item.label}
                className="h-full flex items-center"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {/* Tab Indicator cleaned up via `cn` */}
                <button
                  className={cn(
                    'relative flex items-center h-full px-md text-sm font-semibold tracking-wide transition-all duration-150 border-t-2 border-b-2 border-transparent focus:outline-none text-neutral-700 hover:text-primary',
                    isDropdownOpen && 'border-t-primary text-primary bg-neutral-50 font-bold'
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      'ml-xs text-[10px] transition-transform duration-200 text-neutral-400 downwards-arrow',
                      isDropdownOpen && 'rotate-180 text-primary'
                    )}
                  >
                    ▼
                  </span>
                </button>

                {/* Centered Dropdown Overlay (70% Window Width) */}
                {isDropdownOpen && item.columns && (
                  <div className="fixed left-1/2 top-18 w-[70vw] -translate-x-1/2 border border-t-0 border-neutral-200 bg-neutral-50 shadow-card rounded-b-md overflow-hidden flex flex-row animate-in fade-in slide-in-from-top-1 duration-150">
                    {/* Grid Columns */}
                    <div className="flex-1 grid grid-cols-2 gap-lg p-lg bg-neutral-50 max-h-[60vh] overflow-y-auto">
                      {item.columns.map((col, colIdx) => (
                        <div key={colIdx} className="space-y-sm">
                          {col.title && (
                            <h4 className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
                              {col.title}
                            </h4>
                          )}
                          <ul className="space-y-md">
                            {col.items.map((subItem) => (
                              <li key={subItem.title} className="group/item">
                                <Link
                                  href={subItem.href}
                                  className="block rounded-sm p-sm transition-colors hover:bg-neutral-100"
                                >
                                  <div className="flex items-center text-sm font-semibold text-neutral-900 transition-colors group-hover/item:text-primary">
                                    {subItem.title}
                                  </div>
                                  <p className="mt-xs text-xs leading-normal text-neutral-500">
                                    {subItem.desc}
                                  </p>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Image Preview Box Pane */}
                    {item.imagePreview && (
                      <div className="w-[32%] bg-neutral-100 p-lg border-l border-neutral-200 flex flex-col justify-between">
                        <div className="space-y-sm">
                          <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase block">
                            Studio Vision
                          </span>
                          <div className="aspect-16/10 w-full overflow-hidden rounded-md bg-neutral-300 border border-neutral-200 relative group">
                            <img
                              src={item.imagePreview.src}
                              alt={item.imagePreview.alt}
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <p className="text-xs leading-relaxed text-neutral-600 font-medium pt-xs">
                            {item.imagePreview.caption}
                          </p>
                        </div>

                        <div className="pt-sm">
                          <Link
                            href={item.href ?? '#'}
                            className="inline-flex items-center text-xs font-bold text-primary group/link hover:text-primary-dark"
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

        {/* Call to Action Button */}
        <div className="flex items-center">
          <Link
            href="/contact"
            className="bg-primary text-neutral-50 px-md py-sm text-sm font-bold rounded-sm border border-transparent shadow-sm hover:bg-primary-dark hover:text-neutral-50 transition-all active:scale-[0.98]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
