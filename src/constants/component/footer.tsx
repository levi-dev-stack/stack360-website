import type { ReactNode } from 'react';

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" role="img" className={className} fill="currentColor">
      <title>LinkedIn</title>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

type SocialLink =
  | { label: string; href: string; slug: string }
  | { label: string; href: string; icon: ReactNode };

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/stack360co',
    icon: <LinkedInIcon className="h-4 w-4" />,
  },
  { label: 'GitHub', slug: 'github', href: 'https://github.com/stack360co' },
  { label: 'X', slug: 'x', href: 'https://x.com/stack360' },
];

export const EXPLORE_LINKS = [
  { label: 'What We Build', href: '/what-we-build' },
  { label: 'Who We Help', href: '/who-we-help' },
  { label: 'Case Studies', href: '/our-work/case-studies' },
  { label: 'Blog', href: '/our-work/blog' },
] as const;

export const COMPANY_LINKS = [
  { label: 'Who We Are', href: '/who-we-are' },
  { label: 'Looking for a Career', href: '/work-with-us/careers', badge: 'Hiring' },
  { label: 'Looking for a software partner', href: '/work-with-us/software-partner' },
  { label: 'Hire talent', href: '/work-with-us/hire' },
] as const;

export const OFFICES = [
  {
    number: '01',
    country: 'Pakistan',
    role: 'Global Delivery Center',
    flagSrc: 'https://flagcdn.com/pk.svg',
    address: '82-G, First Floor, DHA Phase 1, Lahore, Punjab, Pakistan',
    stats: [
      { value: 'LHR', label: 'City hub' },
      { value: 'PK', label: 'Region' },
      { value: '+92', label: 'Direct line', href: 'tel:+923311111753' },
    ],
  },
  {
    number: '02',
    country: 'United Kingdom',
    role: 'Regional Office',
    flagSrc: 'https://flagcdn.com/gb.svg',
    address: '58 St. Johns Road, Barking, Essex, IG11 7XL, United Kingdom',
    stats: [
      { value: 'ESX', label: 'County' },
      { value: 'UK', label: 'Region' },
      { value: 'SALES', label: 'Channel', href: 'mailto:sales@stack360.co' },
    ],
  },
] as const;
