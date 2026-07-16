import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import {
  COMPANY_LINKS,
  CONTACT,
  type FooterLink,
  OFFICES,
  SERVICE_LINKS,
  SOCIAL_LINKS,
} from '@/constants/component/footer';
import { SITE_NAME } from '@/constants/site';
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

  return (
    <footer className="site-section border-t-2 border-primary bg-neutral-50">
      <div className="site-container py-2xl">
        <div className="grid grid-cols-1 gap-2xl sm:grid-cols-2 lg:grid-cols-12 lg:gap-xl">
          <div className="space-y-lg lg:col-span-4">
            <Stack360Logo animateWordmark={false} />

            <div className="space-y-lg">
              {OFFICES.map((office) => (
                <div key={office.label} className="flex gap-sm">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden />
                  <div className="text-sm leading-relaxed text-neutral-600">
                    <p className="font-bold text-neutral-900">{office.label}:</p>
                    {office.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}

              <a
                href={CONTACT.phone.href}
                className="flex items-center gap-sm text-sm text-neutral-700 transition-colors hover:text-primary"
              >
                <Phone size={16} className="shrink-0 text-primary" aria-hidden />
                {CONTACT.phone.label}
              </a>
            </div>

            <div className="border-t border-neutral-200 pt-lg">
              <a
                href={CONTACT.email.href}
                className="flex items-center gap-sm text-sm text-neutral-700 transition-colors hover:text-primary"
              >
                <Mail size={16} className="shrink-0 text-primary" aria-hidden />
                {CONTACT.email.label}
              </a>
            </div>
          </div>

          <FooterLinkColumn title="Services" links={SERVICE_LINKS} className="lg:col-span-3" />
          <FooterLinkColumn title="Company" links={COMPANY_LINKS} className="lg:col-span-2" />

          <div className="space-y-lg lg:col-span-3">
            <h2 className="text-base font-bold tracking-tight text-neutral-900">Follow us</h2>
            <div className="flex items-center gap-md">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 text-neutral-900 transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                >
                  {social.icon}
                </a>
              ))}
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
