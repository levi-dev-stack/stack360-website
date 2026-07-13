import Image from 'next/image';
import Link from 'next/link';
import { NAVIGATION_DATA } from '@/constants/component/navigation';

/**
 * Rendered only inside <noscript> — mirrors the primary navbar chrome
 * so no-JS browsing still feels on-brand.
 */
export default function NoJsSiteNav() {
  return (
    <header className="relative z-50 w-full border-b border-neutral-200 bg-neutral-50 shadow-xs">
      <div className="site-container flex h-18 items-center justify-between gap-xl lg:gap-2xl">
        <Link
          href="/"
          className="flex h-8 w-8 shrink-0 items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label="Stack360 home"
        >
          <Image
            src="/favicon.svg"
            alt="Stack360"
            width={32}
            height={32}
            priority
            className="h-8 w-8 rounded-sm object-contain"
          />
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center gap-sm md:flex lg:gap-md"
          aria-label="Site"
        >
          {NAVIGATION_DATA.map((section) =>
            section.href ? (
              <Link
                key={section.label}
                href={section.href}
                className="rounded-sm px-sm py-xs text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 lg:px-md"
              >
                {section.label}
              </Link>
            ) : null
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-sm">
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center rounded-sm border border-transparent bg-primary px-lg py-sm text-sm font-bold text-neutral-50 shadow-sm transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Stacked links for narrow viewports (no hamburger without JS) */}
      <nav className="border-t border-neutral-200 md:hidden" aria-label="Site sections">
        <ul className="site-container flex flex-col gap-xs py-md">
          {NAVIGATION_DATA.map((section) =>
            section.href ? (
              <li key={section.label}>
                <Link
                  href={section.href}
                  className="flex min-h-11 items-center rounded-md px-md text-sm font-semibold text-neutral-800 transition-colors hover:bg-neutral-100"
                >
                  {section.label}
                </Link>
              </li>
            ) : null
          )}
        </ul>
      </nav>
    </header>
  );
}
