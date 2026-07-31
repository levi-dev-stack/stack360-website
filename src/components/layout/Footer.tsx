// footer.tsx
import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  COMPANY_LINKS,
  CONTACT,
  type FooterLink,
  OFFICES,
  SERVICE_LINKS,
  SOCIAL_LINKS,
} from '@/constants/component/footer';
import {
  SITE_NAME,
  SITE_PHONE,
  SITE_PHONE_2,
  SITE_PHONE_E164,
  SITE_PHONE_E164_2,
  SITE_PHONE_USA,
} from '@/constants/site'; // Adjust import path if needed
import { cn } from '@/styles/tailwind.utils';
import Stack360Logo from './Navbar/Stack360Logo';

function FooterLinkColumn({
  title,
  links,
  className,
}: {
  title: string;
  links: FooterLink[];
  className?: string;
}) {
  return (
    <div className={cn('space-y-lg', className)}>
      <h2 className="text-base font-bold tracking-tight text-neutral-900">{title}</h2>
      <ul className="space-y-md">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-neutral-600 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Clean numbers for tel/wa URLs
  const waUk1 = SITE_PHONE_E164.replace(/[^0-9]/g, '');
  const waUk2 = SITE_PHONE_E164_2.replace(/[^0-9]/g, '');
  const waUsa = SITE_PHONE_USA.replace(/[^0-9]/g, '');

  return (
    <footer className="site-section border-t-2 border-primary bg-neutral-50">
      <div className="site-container py-2xl">
        <div className="grid grid-cols-1 gap-2xl sm:grid-cols-2 lg:grid-cols-12 lg:gap-xl">
          {/* Left Column: Brand, Office Addresses & Local Phone Numbers */}
          <div className="space-y-lg lg:col-span-5">
            <Stack360Logo animateWordmark={false} />

            <div className="space-y-xl">
              {OFFICES.map((office) => {
                const isUSA =
                  office.label.toLowerCase().includes('usa') ||
                  office.label.toLowerCase().includes('us');
                const flagCode = isUSA ? 'us' : 'gb';

                return (
                  <div key={office.label} className="space-y-xs">
                    <div className="flex items-center gap-xs">
                      <Image
                        src={`https://flagcdn.com/w40/${flagCode}.png`}
                        alt={`${office.label} flag`}
                        width={20}
                        height={14}
                        className="h-3.5 w-5 rounded-[2px] object-cover shadow-xs"
                      />
                      <p className="font-bold text-neutral-900 text-sm ml-1">{office.label}:</p>
                    </div>

                    <div className="flex gap-sm pl-6">
                      <MapPin size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden />
                      <div className="text-sm leading-relaxed text-neutral-600">
                        {office.lines.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>

                    {/* Country-Specific Direct Numbers */}
                    <div className="pl-6 pt-xs space-y-1">
                      {isUSA ? (
                        <a
                          href={`https://wa.me/${waUsa}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-sm text-sm text-neutral-700 transition-colors hover:text-primary"
                        >
                          <Phone size={14} className="shrink-0 text-primary" aria-hidden />
                          <span>{SITE_PHONE_USA}</span>
                        </a>
                      ) : (
                        <>
                          <a
                            href={`https://wa.me/${waUk1}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-sm text-sm text-neutral-700 transition-colors hover:text-primary"
                          >
                            <Phone size={14} className="shrink-0 text-primary" aria-hidden />
                            <span>{SITE_PHONE}</span>
                          </a>
                          <a
                            href={`https://wa.me/${waUk2}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-sm text-sm text-neutral-700 transition-colors hover:text-primary"
                          >
                            <Phone size={14} className="shrink-0 text-primary" aria-hidden />
                            <span>{SITE_PHONE_2}</span>
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <FooterLinkColumn title="Services" links={SERVICE_LINKS} className="lg:col-span-3" />
          <FooterLinkColumn title="Company" links={COMPANY_LINKS} className="lg:col-span-2" />

          {/* Right Column: Social Links & Email */}
          <div className="space-y-xl lg:col-span-2">
            <div className="space-y-lg">
              <h2 className="text-base font-bold tracking-tight text-neutral-900">Follow us</h2>
              <div className="flex items-center gap-md">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="z-1 flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 text-neutral-900 transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-md border-t border-neutral-200 pt-lg">
              <h2 className="text-base font-bold tracking-tight text-neutral-900">Email</h2>
              <a
                href={CONTACT.email.href}
                className="flex items-center gap-sm text-sm text-neutral-700 transition-colors hover:text-primary"
              >
                <Mail size={16} className="shrink-0 text-primary" aria-hidden />
                {CONTACT.email.label}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-2xl border-t border-neutral-200 pt-xl">
          <p className="text-center text-sm text-neutral-600">
            © {currentYear} {SITE_NAME}. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
