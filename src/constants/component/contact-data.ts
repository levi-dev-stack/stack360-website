export const CONTACT_HERO = {
  eyebrow: 'Contact',
  title: 'Talk to us about your next build.',
  description:
    'Whether you need a dedicated engineering pod or a full product partner, our team responds fast with clear next steps — no sales maze.',
} as const;

export const CONTACT_CTA = {
  title: 'Prefer to explore before we meet?',
  description:
    'Review our case studies and partnership model — then reach out when you are ready to scope.',
  primary: { label: 'Partner with us', href: '/work-with-us/software-partner' },
  secondary: { label: 'See our work', href: '/our-work/case-studies' },
} as const;

export const CONTACT_CHANNELS = [
  {
    label: 'Phone',
    value: '+44 7404350490',
    href: 'tel:+447404350490',
    hint: 'Available 24/7 for project inquiries',
  },
  {
    label: 'Email',
    value: 'sales@stack360.co',
    href: 'mailto:sales@stack360.co',
    hint: 'We reply within one business day',
  },
] as const;

export const CONTACT_OFFICES = [
  // {
  //   country: 'Pakistan',
  //   role: 'Global Delivery Center',
  //   flagSrc: 'https://flagcdn.com/pk.svg',
  //   address: '82-G, First Floor, DHA Phase 1, Lahore, Punjab, Pakistan',
  // },
  {
    country: 'United Kingdom',
    role: 'Regional Office',
    flagSrc: 'https://flagcdn.com/gb.svg',
    address: '58 St. Johns Road, Barking, Essex, IG11 7XL, United Kingdom',
  },
] as const;

export const CONTACT_FORM_FIELDS = [
  { id: 'name', label: 'Full name', type: 'text', placeholder: 'Jane Smith' },
  { id: 'email', label: 'Work email', type: 'email', placeholder: 'jane@company.com' },
  { id: 'company', label: 'Company', type: 'text', placeholder: 'Acme Inc.' },
] as const;
