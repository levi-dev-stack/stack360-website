import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import type { ReactNode } from 'react';
import Stack360Logo from './Navbar/Stack360Logo';

type SocialLink =
  | { label: string; href: string; slug: string }
  | { label: string; href: string; icon: ReactNode };

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" role="img" className={className} fill="currentColor">
      <title>LinkedIn</title>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/stack360',
    icon: <LinkedInIcon className="h-4 w-4" />,
  },
  { label: 'GitHub', slug: 'github', href: 'https://github.com/stack360co' },
  { label: 'X', slug: 'x', href: 'https://x.com/stack360' },
];

const EXPLORE_LINKS = [
  { label: 'What We Build', href: '/what-we-build' },
  { label: 'Who We Help', href: '/who-we-help' },
  { label: 'Case Studies', href: '/our-work/case-studies' },
  { label: 'Blog', href: '/our-work/blog' },
] as const;

const COMPANY_LINKS = [
  { label: 'Who We Are', href: '/who-we-are' },
  { label: 'Looking for a Career', href: '/work-with-us/careers', badge: 'Hiring' },
  { label: 'Looking for a software partner', href: '/work-with-us/software-partner' },
] as const;

const OFFICES = [
  {
    country: 'Pakistan',
    role: 'Global Delivery Center',
    flagSrc: 'https://flagcdn.com/pk.svg',
    address: '82-G, First Floor, DHA Phase 1, Lahore, Punjab, Pakistan',
    contactLabel: '+92 331 11 11 753',
    contactHref: 'tel:+923311111753',
    contactIcon: 'phone' as const,
  },
  {
    country: 'United Kingdom',
    role: 'Regional Office',
    flagSrc: 'https://flagcdn.com/gb.svg',
    address: '58 St. Johns Road, Barking, Essex, IG11 7XL, United Kingdom',
    contactLabel: 'sales@stack360.co',
    contactHref: 'mailto:sales@stack360.co',
    contactIcon: 'mail' as const,
  },
] as const;

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

function OfficeCard({
  country,
  role,
  flagSrc,
  address,
  contactLabel,
  contactHref,
  contactIcon,
}: (typeof OFFICES)[number]) {
  const ContactIcon = contactIcon === 'phone' ? Phone : Mail;

  return (
    <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-xl shadow-card transition-colors hover:border-neutral-700">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:opacity-125"
      />

      <div className="relative space-y-lg">
        <div className="flex items-start justify-between gap-md">
          <div className="flex items-center gap-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900">
              <Image
                src={flagSrc}
                alt={`${country} flag`}
                width={28}
                height={20}
                unoptimized
                className="h-5 w-7 rounded-[2px] object-cover shadow-sm"
              />
            </div>
            <div>
              <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
                {role}
              </span>
              <h3 className="text-lg font-bold tracking-tight text-neutral-50">{country}</h3>
            </div>
          </div>
          <MapPin
            size={16}
            className="shrink-0 text-neutral-600 transition-colors group-hover:text-primary"
          />
        </div>

        <p className="text-sm leading-relaxed text-neutral-400">{address}</p>

        <a
          href={contactHref}
          className="inline-flex items-center gap-sm rounded-md border border-neutral-800 bg-neutral-900 px-md py-sm text-sm font-medium text-neutral-200 transition-colors hover:border-primary/30 hover:text-primary"
        >
          <ContactIcon size={14} className="text-primary" />
          {contactLabel}
        </a>
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

          <div className="grid grid-cols-1 gap-lg md:grid-cols-2">
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
              Privacy Framework
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
