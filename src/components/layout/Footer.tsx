import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { COMPANY_LINKS, EXPLORE_LINKS, OFFICES, SOCIAL_LINKS } from '@/constants/component/footer';
import Stack360Logo from './Navbar/Stack360Logo';

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 text-neutral-500 transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary hover:shadow-sm"
    >
      <span className="sr-only">{label}</span>
      {children}
    </a>
  );
}

function SimpleIcon({ slug }: { slug: string }) {
  const iconUrl = `https://cdn.simpleicons.org/${slug}`;

  return (
    <span
      aria-hidden
      className="h-4 w-4 bg-current transition-colors"
      style={{
        WebkitMaskImage: `url(${iconUrl})`,
        maskImage: `url(${iconUrl})`,
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
      }}
    />
  );
}

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string; badge?: string }[];
}) {
  return (
    <div className="space-y-md">
      <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
        {title}
      </span>
      <ul className="space-y-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-xs text-sm text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {link.label}
              {link.badge && (
                <span className="font-mono text-[9px] font-bold uppercase tracking-wide text-primary">
                  {link.badge}
                </span>
              )}
              {!link.badge && (
                <ArrowUpRight
                  size={12}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function OfficeRow({ country, role, flagSrc, address, stats }: (typeof OFFICES)[number]) {
  return (
    <article className="group flex min-w-0 flex-1 flex-col gap-sm py-md sm:flex-row sm:items-start sm:gap-lg sm:py-0">
      <div className="flex shrink-0 items-center gap-sm sm:w-40 sm:flex-col sm:items-start sm:gap-xs">
        <Image
          src={flagSrc}
          alt=""
          width={28}
          height={20}
          unoptimized
          className="h-4 w-6 rounded-[2px] object-cover ring-1 ring-neutral-300"
        />
        <div>
          <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-primary">
            {role}
          </p>
          <h3 className="text-base font-bold tracking-tight text-neutral-900">{country}</h3>
        </div>
      </div>

      <div className="min-w-0 flex-1 space-y-sm">
        <p className="flex gap-xs text-sm leading-snug text-neutral-600">
          <MapPin size={14} className="mt-0.5 shrink-0 text-neutral-400" aria-hidden />
          <span className="text-pretty">{address}</span>
        </p>
        <p className="flex flex-wrap items-center gap-x-sm gap-y-xs font-mono text-[11px] text-neutral-500">
          {stats.map((stat, index) => {
            const value =
              'href' in stat && stat.href ? (
                <a
                  key={stat.label}
                  href={stat.href}
                  className="font-bold text-neutral-700 transition-colors hover:text-primary"
                >
                  {stat.value}
                </a>
              ) : (
                <span key={stat.label} className="font-bold text-neutral-700">
                  {stat.value}
                </span>
              );

            return (
              <span key={stat.label} className="inline-flex items-center gap-sm">
                {index > 0 && (
                  <span className="text-neutral-300" aria-hidden>
                    ·
                  </span>
                )}
                <span className="uppercase tracking-wider">{stat.label}</span>
                {value}
              </span>
            );
          })}
        </p>
      </div>
    </article>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-section border-t border-neutral-200 bg-neutral-50">
      <div className="site-container py-2xl">
        <div className="grid grid-cols-1 gap-2xl lg:grid-cols-12 lg:gap-xl">
          <div className="space-y-lg lg:col-span-4">
            <Stack360Logo />
            <p className=" text-sm leading-relaxed text-neutral-500">
              An architectural technology partner engineering high-velocity production systems,
              enterprise structures, and scalable multi-tenant digital networks.
            </p>
            <div className="flex items-center gap-sm">
              {SOCIAL_LINKS.map((social) => (
                <SocialIcon key={social.label} href={social.href} label={social.label}>
                  {'icon' in social ? social.icon : <SimpleIcon slug={social.slug} />}
                </SocialIcon>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-xl lg:col-span-8">
            <FooterLinkColumn title="Explore" links={EXPLORE_LINKS} />
            <FooterLinkColumn title="Company" links={COMPANY_LINKS} />

            <div className="space-y-md">
              <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
                Direct Channels
              </span>
              <div className="space-y-sm">
                <a
                  href="tel:+923311111753"
                  className="group block rounded-md border border-neutral-200 bg-neutral-50 p-sm transition-all hover:border-primary/20 hover:bg-white hover:shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-neutral-400 group-hover:text-primary transition-colors">
                      Voice Comms
                    </span>
                    <ArrowRight
                      size={10}
                      className="text-neutral-300 transition-transform group-hover:translate-x-xs group-hover:text-primary"
                    />
                  </div>
                  <p className="mt-xs text-sm font-bold text-neutral-800 tracking-tight font-mono">
                    +92 331 11 11 753
                  </p>
                </a>

                <a
                  href="mailto:sales@stack360.co"
                  className="group block rounded-md border border-neutral-200 bg-neutral-50 p-sm transition-all hover:border-primary/20 hover:bg-white hover:shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-neutral-400 group-hover:text-primary transition-colors">
                      Inbound Mail
                    </span>
                    <ArrowRight
                      size={10}
                      className="text-neutral-300 transition-transform group-hover:translate-x-xs group-hover:text-primary"
                    />
                  </div>
                  <p className="mt-xs text-sm font-bold text-neutral-800 tracking-tight font-mono">
                    sales@stack360.co
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2xl border-t border-neutral-200 pt-xl">
          <div className="mb-md flex flex-wrap items-baseline justify-between gap-sm">
            <h2 className="text-lg font-bold tracking-tight text-neutral-900">
              Where we build from
            </h2>
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              2 studios · follow-the-sun
            </span>
          </div>

          <div className="overflow-hidden rounded-md border border-neutral-200 bg-neutral-100/60 px-md sm:px-lg">
            <div className="divide-y divide-neutral-200 sm:grid sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              {OFFICES.map((office) => (
                <div key={office.country} className="sm:px-lg sm:first:pl-0 sm:last:pr-0 py-3">
                  <OfficeRow {...office} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-neutral-200 bg-neutral-100/80">
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/2 h-24 w-24 -translate-y-1/2 opacity-[0.04]"
        >
          <Image
            src="/favicon.svg"
            alt=""
            width={96}
            height={96}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="site-container relative flex flex-col items-center justify-between gap-md p-lg sm:flex-row">
          <p className="font-mono text-xs text-neutral-500">
            © {currentYear} Stack360 Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-md font-mono text-xs text-neutral-500">
            <Link href="/terms" className="transition-colors hover:text-primary">
              Terms of Use
            </Link>
            <span className="text-neutral-300">/</span>
            <Link href="/privacy" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
