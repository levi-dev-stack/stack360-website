import { ArrowUpRight, Mail, Phone } from 'lucide-react';
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

function OfficeCard({ number, country, role, flagSrc, address, stats }: (typeof OFFICES)[number]) {
  return (
    <div className="group relative flex h-full min-h-70 flex-col justify-between overflow-hidden rounded-xl border border-neutral-700 bg-linear-to-b from-neutral-800 to-neutral-900 p-lg shadow-card transition-colors hover:border-neutral-600">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-opacity duration-500 group-hover:bg-primary/20"
      />

      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="font-mono text-4xl font-black tracking-tight text-primary/30">
            {number}
          </span>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-600/80 bg-neutral-700/60 transition-transform duration-300 group-hover:scale-105">
            <Image
              src={flagSrc}
              alt={`${country} flag`}
              width={28}
              height={20}
              unoptimized
              className="h-5 w-7 rounded-[2px] object-cover shadow-sm"
            />
          </div>
        </div>

        <div className="mt-lg space-y-xs">
          <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
            {role}
          </span>
          <h3 className="text-xl font-bold tracking-tight text-neutral-50">{country}</h3>
          <p className="mt-md text-sm leading-relaxed text-neutral-400">{address}</p>
        </div>
      </div>

      <div className="relative grid grid-cols-3 gap-sm border-t border-neutral-700/60 pt-md font-mono">
        {stats.map((stat) => {
          const content = (
            <>
              <div className="text-lg font-black text-neutral-100">{stat.value}</div>
              <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-500">
                {stat.label}
              </div>
            </>
          );

          if ('href' in stat && stat.href) {
            return (
              <a
                key={stat.label}
                href={stat.href}
                className="space-y-[2px] transition-colors hover:text-primary [&:hover_div]:text-primary"
              >
                {content}
              </a>
            );
          }

          return (
            <div key={stat.label} className="space-y-[2px]">
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-section border-t border-neutral-200 bg-neutral-50">
      <div className="site-container py-2xl">
        <div className="grid grid-cols-1 gap-2xl lg:grid-cols-12 lg:gap-xl">
          <div className="space-y-lg lg:col-span-5">
            <Stack360Logo />
            <p className="max-w-4xl text-base leading-relaxed text-neutral-600">
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

          <div className="grid grid-cols-2 gap-xl sm:grid-cols-3 lg:col-span-7">
            <FooterLinkColumn title="Explore" links={EXPLORE_LINKS} />
            <FooterLinkColumn title="Company" links={COMPANY_LINKS} />
            <div className="col-span-2 space-y-md sm:col-span-1">
              <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
                Direct Channels
              </span>
              <ul className="space-y-md">
                <li>
                  <a
                    href="tel:+923311111753"
                    className="group flex items-center gap-sm text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 transition-colors group-hover:border-primary/30 group-hover:bg-primary/5">
                      <Phone size={14} className="text-neutral-400 group-hover:text-primary" />
                    </span>
                    +92 331 11 11 753
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sales@stack360.co"
                    className="group flex items-center gap-sm text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 transition-colors group-hover:border-primary/30 group-hover:bg-primary/5">
                      <Mail size={14} className="text-neutral-400 group-hover:text-primary" />
                    </span>
                    sales@stack360.co
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-2xl border-t border-neutral-200 pt-2xl">
          <div className="mb-lg flex items-end justify-between gap-md">
            <div>
              <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
                Global Presence
              </span>
              <h2 className="mt-xs text-2xl font-black tracking-tight text-neutral-900">
                Where we build from
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-lg md:grid-cols-2">
            {OFFICES.map((office) => (
              <OfficeCard key={office.country} {...office} />
            ))}
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
