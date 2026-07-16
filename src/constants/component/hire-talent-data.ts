export const HIRE_HERO = {
  eyebrow: 'Work With Us · Hire Talent',
  title: 'Hire reliable developers.',
  highlight: 'Close the talent gap.',
  description:
    'Skip slow hiring cycles. Stack360 connects partners and client teams with vetted, full-time engineers ready to join your workflow and deliver from day one.',
} as const;

export const HIRE_PROMISE = 'Get shortlists within 2 days. Hire in as fast as 1 week.';

export const HIRE_CONTACT = [
  // {
  //   label: 'Pakistan office',
  //   value: '82-G, First Floor, DHA Phase 1, Lahore, Pakistan',
  //   icon: 'map' as const,
  // },
  {
    label: 'UK office',
    value: '58 St. Johns Road, Barking, Essex, IG11 7XL, United Kingdom',
    icon: 'building' as const,
  },
  {
    label: 'Phone',
    value: '+44 7404350490',
    href: 'tel:+447404350490',
    icon: 'phone' as const,
  },
  {
    label: 'Email',
    value: 'sales@stack360.co',
    href: 'mailto:sales@stack360.co',
    icon: 'mail' as const,
  },
] as const;

export const HIRE_SKILLS = [
  { id: 'react', label: 'React', iconSlug: 'react' },
  { id: 'angular', label: 'Angular', iconSlug: 'angular' },
  { id: 'nodejs', label: 'Node.js', iconSlug: 'nodedotjs' },
  { id: 'ruby', label: 'Ruby', iconSlug: 'rubyonrails' },
  { id: 'dotnet', label: '.NET', iconSlug: 'dotnet' },
  { id: 'python', label: 'Python', iconSlug: 'python' },
  { id: 'java', label: 'Java', iconSlug: 'openjdk' },
  { id: 'others', label: 'Others', iconSlug: null },
] as const;

export type HireSkillId = (typeof HIRE_SKILLS)[number]['id'];

export const HIRE_NEED_OPTIONS = [
  {
    id: 'long-term',
    label: 'Long-term staffing / team member',
  },
  {
    id: 'medium-term',
    label: 'Medium-term (6 to 12 months)',
  },
  {
    id: 'short-term',
    label: 'Short-term (less than 6 months)',
  },
] as const;

export type HireNeedId = (typeof HIRE_NEED_OPTIONS)[number]['id'];

export const HIRE_CTA = {
  title: 'Start your project without hiring delays',
  description:
    'Access engineers who blend into your workflow — whether you are growing fast or clearing a backlog.',
  primary: { label: 'Contact us', href: '/contact' },
  secondary: { label: 'See our work', href: '/our-work/case-studies' },
} as const;
