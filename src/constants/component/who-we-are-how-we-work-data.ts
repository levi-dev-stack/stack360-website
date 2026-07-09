export const HOW_WE_WORK_HERO = {
  eyebrow: 'Who We Are',
  title: 'How we work',
  highlight: 'with clarity and accountability.',
  description:
    'Pioneering thinkers and problem solvers guide every engagement — with transparent process, tailored delivery, and engineering discipline from kickoff to production.',
} as const;

export const HOW_WE_WORK_PRINCIPLES = [
  {
    title: 'Understand first',
    description:
      'We map your constraints, users, and business goals before writing code — so the solution fits the problem, not a template.',
  },
  {
    title: 'Simplify the complex',
    description:
      'We break down intricate workflows into clear systems, actionable milestones, and measurable outcomes your team can trust.',
  },
  {
    title: 'Build for the long term',
    description:
      'Solutions are designed to scale — technically and operationally — so today’s delivery does not become tomorrow’s bottleneck.',
  },
  {
    title: 'Partner, not hand off',
    description:
      'We align with your objectives over quarters and years, staying accountable as your product and team evolve.',
  },
] as const;

export const HOW_WE_WORK_PROCESS = [
  {
    step: '01',
    title: 'Discovery & alignment',
    description: 'Scope, stakeholders, and success metrics defined in plain language.',
  },
  {
    step: '02',
    title: 'Architecture & planning',
    description: 'Technical design, sprint rhythm, and delivery plan you can defend internally.',
  },
  {
    step: '03',
    title: 'Build & validate',
    description: 'Iterative delivery with demos, QA, and production-grade engineering practices.',
  },
  {
    step: '04',
    title: 'Scale & support',
    description: 'Handover, observability, and ongoing partnership as your product grows.',
  },
] as const;

export const HOW_WE_WORK_LEADERS = [
  {
    name: 'M. Awais Aslam',
    role: 'Co-Founder',
    image: {
      src: '/assets/who-we-are/leaders/awais-aslam.png',
      alt: 'M. Awais Aslam, Co-Founder of Stack360',
    },
  },
  {
    name: 'Ali Haider',
    role: 'Co-Founder & CTO',
    image: {
      src: '/assets/who-we-are/leaders/ali-haider.png',
      alt: 'Ali Haider, Co-Founder and CTO of Stack360',
    },
  },
  {
    name: 'Tayyab Zia',
    role: 'Head Software Engineer',
    image: {
      src: '/assets/who-we-are/leaders/tayyab-zia.png',
      alt: 'Tayyab Zia, Head Software Engineer at Stack360',
    },
  },
] as const;

export const HOW_WE_WORK_CTA = {
  title: 'Ready to work with our team?',
  description:
    'We craft tailored software solutions that drive growth, streamline operations, and set you up for long-term success.',
  primary: { label: 'Talk to us', href: '/contact' },
  secondary: { label: 'Partner with us', href: '/work-with-us/software-partner' },
} as const;
