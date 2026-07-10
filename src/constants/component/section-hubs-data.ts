import type { SectionHubProps } from '@/components/shared/SectionHub';

export const WHAT_WE_BUILD_HUB: SectionHubProps = {
  crumb: 'What We Build',
  title: 'Systems we architect',
  highlight: 'end to end.',
  description:
    'ERP, CRM, AI, SaaS, and the platform layer underneath — one studio accountable for the full stack. Capability pages are shipping in stages; start a conversation for the systems you need now.',
  chapters: [
    {
      title: 'ERP',
      blurb: 'Centralized enterprise resource engines designed for scalability.',
      href: '/what-we-build/erp',
      cta: 'Coming soon',
      status: 'soon',
    },
    {
      title: 'CRM',
      blurb: 'Customer relationship systems optimized for pipeline velocity.',
      href: '/what-we-build/crm',
      cta: 'Coming soon',
      status: 'soon',
    },
    {
      title: 'AI Solutions',
      blurb: 'Custom model integrations and intelligent automated workflows.',
      href: '/what-we-build/ai-solutions',
      cta: 'Coming soon',
      status: 'soon',
    },
    {
      title: 'SaaS',
      blurb: 'Multi-tenant cloud products engineered for subscription scale.',
      href: '/what-we-build/saas',
      cta: 'Coming soon',
      status: 'soon',
    },
    {
      title: 'Custom Software',
      blurb: 'Bespoke systems that remove foundational bottlenecks.',
      href: '/what-we-build/custom-software',
      cta: 'Coming soon',
      status: 'soon',
    },
    {
      title: 'Mobile Apps',
      blurb: 'Native-grade applications for iOS and Android.',
      href: '/what-we-build/mobile-apps',
      cta: 'Coming soon',
      status: 'soon',
    },
    {
      title: 'Web Apps',
      blurb: 'High-speed modular web applications with durable architecture.',
      href: '/what-we-build/web-apps',
      cta: 'Coming soon',
      status: 'soon',
    },
    {
      title: 'Cloud',
      blurb: 'Resilient cloud distribution mapped to modern frameworks.',
      href: '/what-we-build/cloud',
      cta: 'Coming soon',
      status: 'soon',
    },
    {
      title: 'DevOps',
      blurb: 'CI/CD pipelines that keep delivery stable and repeatable.',
      href: '/what-we-build/devops',
      cta: 'Coming soon',
      status: 'soon',
    },
    {
      title: 'Automation',
      blurb: 'Remove manual work from day-to-day operations.',
      href: '/what-we-build/automation',
      cta: 'Coming soon',
      status: 'soon',
    },
  ],
  cta: {
    title: 'Need a system scoped?',
    description: 'Tell us what you are building. We will map capability to a concrete next step.',
    primary: { label: 'Contact us', href: '/contact' },
    secondary: { label: 'See our work', href: '/our-work' },
  },
};

export const WHO_WE_HELP_HUB: SectionHubProps = {
  crumb: 'Who We Help',
  title: 'Partners by stage',
  highlight: 'and domain.',
  description:
    'From pre-seed MVPs to enterprise migrations — we match delivery shape to the risk profile of the organization.',
  chapters: [
    {
      title: 'Industries',
      blurb: 'Healthcare, FinTech, and Logistics with domain-aligned execution.',
      href: '/who-we-help/industries',
      cta: 'Explore industries',
    },
    {
      title: 'Startups',
      blurb: 'Agile MVP structures and fast product-path discovery.',
      href: '/who-we-help/startups',
      cta: 'For startups',
    },
    {
      title: 'SMEs',
      blurb: 'Operational scale through custom system modernization.',
      href: '/who-we-help/smes',
      cta: 'For SMEs',
    },
    {
      title: 'Enterprises',
      blurb: 'Legacy transitions engineered without unnecessary downtime.',
      href: '/who-we-help/enterprises',
      cta: 'For enterprises',
    },
  ],
  cta: {
    title: 'Find the right engagement model.',
    description: 'Share your stage and constraints — we will recommend a delivery shape.',
    primary: { label: 'Start a conversation', href: '/contact' },
    secondary: { label: 'Software partner', href: '/work-with-us/software-partner' },
  },
};

export const WHO_WE_ARE_HUB: SectionHubProps = {
  crumb: 'Who We Are',
  title: 'The studio behind',
  highlight: 'the systems.',
  description:
    'A disciplined engineering team centered on technical integrity — history, culture, and how we actually ship.',
  chapters: [
    {
      title: 'History',
      blurb: 'From a technical garage to a complex engineering firm.',
      href: '/who-we-are/history',
      cta: 'Our history',
    },
    {
      title: 'Culture',
      blurb: 'A zero-fluff workspace that prioritizes clean execution.',
      href: '/who-we-are/culture',
      cta: 'Our culture',
    },
    {
      title: 'How We Work',
      blurb: 'Daily iterations, architectural planning, and staging lines.',
      href: '/who-we-are/how-we-work',
      cta: 'How we work',
    },
  ],
  cta: {
    title: 'Want to build with us?',
    description: 'Partner with the studio or join the team.',
    primary: { label: 'Work with us', href: '/work-with-us' },
    secondary: { label: 'Careers', href: '/work-with-us/careers' },
  },
};

export const WORK_WITH_US_HUB: SectionHubProps = {
  crumb: 'Work With Us',
  title: 'Partner or',
  highlight: 'join the bench.',
  description:
    'Engage Stack360 as your software partner — or explore open roles if you want to build here.',
  chapters: [
    {
      title: 'Software partner',
      blurb: 'Review outcomes and initiate a development engagement.',
      href: '/work-with-us/software-partner',
      cta: 'Become a partner',
    },
    {
      title: 'Careers',
      blurb: 'Open positions, internships, and our hiring process.',
      href: '/work-with-us/careers',
      cta: 'View careers',
    },
  ],
  cta: {
    title: 'Ready when you are.',
    description: 'Tell us what you need — a build partner or a role on the team.',
    primary: { label: 'Contact us', href: '/contact' },
    secondary: { label: 'Our work', href: '/our-work' },
  },
};
