export const OUR_WORK_HERO = {
  title: 'Proof over',
  highlight: 'promises.',
  description:
    'Case studies, featured systems, client outcomes, and studio insights — the evidence behind Stack360 as an engineering partner.',
} as const;

export const OUR_WORK_CHAPTERS = [
  {
    title: 'Case Studies',
    blurb: 'Deep dives into problems, architecture, and measurable results.',
    href: '/our-work/case-studies',
    cta: 'Browse cases',
    tone: 'dark' as const,
  },
  {
    title: 'Featured Projects',
    blurb: 'Highest-tier systems selected for engineering depth and impact.',
    href: '/our-work/featured-projects',
    cta: 'View featured',
    tone: 'light' as const,
  },
  {
    title: 'Client Success',
    blurb: 'Partners describing the outcomes they saw after launch.',
    href: '/our-work/client-success-stories',
    cta: 'Read stories',
    tone: 'light' as const,
  },
  {
    title: 'Blog',
    blurb: 'Studio notes on growth, craft, and building for the long term.',
    href: '/our-work/blog',
    cta: 'Read blog',
    tone: 'light' as const,
  },
  {
    title: 'News',
    blurb: 'Partnerships, hiring, and campus milestones from the studio.',
    href: '/our-work/news',
    cta: 'See news',
    tone: 'light' as const,
  },
  {
    title: 'Learning Sessions',
    blurb: 'Workshops and practice sessions that sharpen how we ship.',
    href: '/our-work/learning-sessions',
    cta: 'Explore sessions',
    tone: 'light' as const,
  },
  {
    title: 'FAQs',
    blurb: 'Clear answers on services, quality, and how engagements work.',
    href: '/our-work/faqs',
    cta: 'Open FAQs',
    tone: 'light' as const,
  },
] as const;

export const OUR_WORK_CTA = {
  title: 'Ready to build the next success story?',
  description:
    'Partner with a studio that ships production systems — and stays accountable after launch.',
  primary: { label: 'Talk to us', href: '/contact' },
  secondary: { label: 'Case studies', href: '/our-work/case-studies' },
} as const;
