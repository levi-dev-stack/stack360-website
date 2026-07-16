/** Our Work insights — blog, news, learning (sourced from LinkedIn company posts). */

import { SITE_SOCIAL } from '@/constants/site';

export const BLOG_HERO = {
  eyebrow: 'Our Work',
  title: 'Engineering &',
  highlight: 'growth notes.',
  description:
    'Thought pieces from the studio — marketing, product craft, and how we think about building digital systems that last.',
} as const;

export const NEWS_HERO = {
  eyebrow: 'Our Work',
  title: 'Studio',
  highlight: 'news.',
  description:
    'Partnerships, hiring, campus outreach, and milestones from the Stack360 studio in Lahore and beyond.',
} as const;

/** Named photo sections derived from asset filenames — use these headers on the page. */
export const NEWS_SECTIONS = [
  {
    slug: 'umt-career-fest',
    title: 'UMT Career Fest',
    description:
      'Stack360 at the 12th UMT Mega Career Fest — campus outreach, hiring conversations, and recognition moments with the next generation of builders.',
    date: '2026-01',
    images: [
      {
        src: '/assets/news/umt-recruitment-drive-1.jpg',
        alt: 'Stack360 team member at the 12th UMT Mega Career Fest backdrop',
      },
      {
        src: '/assets/news/umt-recruitmentnt-drive.JPG',
        alt: 'Award presentation at the 12th UMT Mega Career Fest',
      },
    ],
  },
  {
    slug: 'uet-career-fest',
    title: 'UET Career Fest',
    description:
      'Stack360 at the 12th UET Mega Career Fest — campus outreach, hiring conversations, and recognition moments with the next generation of builders.',
    date: '2026-05',
    images: [
      {
        src: '/assets/news/uet-recruitment-drive-1.jpeg',
        alt: 'Stack360 team speaking with students at a UET recruitment drive booth',
      },
    ],
  },
] as const;

export const NEWS_ITEMS = [
  {
    slug: 'mou-umt',
    title: 'MoU signed with University of Management and Technology (UMT)',
    excerpt:
      'Stack360 officially signed an MoU with UMT — an industry–academia partnership to empower future talent and create opportunities for learning, research, and technological advancement.',
    date: '2026-06',
    category: 'Partnership',
    source: 'LinkedIn',
    sourceUrl: SITE_SOCIAL.linkedin,
  },
] as const;

export const LEARNING_HERO = {
  eyebrow: 'Our Work',
  title: 'Learning',
  highlight: 'sessions.',
  description:
    'Internal workshops and public-facing sessions where the team sharpens craft — from agentic coding tools to delivery discipline.',
} as const;

/** Named photo sections for learning sessions — headers for page content. */
export const LEARNING_SECTIONS = [
  // {
  //   slug: 'agentic-tools-session',
  //   title: 'Agentic Tools Workshop',
  //   description:
  //     'An in-studio session on coding smarter with agentic AI tools — the team focused on real workflow gains, not slide decks.',
  //   date: '2026-01',
  //   images: [
  //     {
  //       src: '/assets/learning-session/IMG_5601.jpg',
  //       alt: 'Stack360 engineers attending an internal agentic tools learning session',
  //     },
  //   ],
  // },
] as const;

export const LEARNING_SESSIONS = [
  {
    slug: 'agentic-tools-productivity',
    title: 'Development and productivity using agentic tools',
    excerpt:
      'An exclusive Stack360 session on coding smarter with agentic AI tools — including Cursor — focused on real workflow gains for engineering teams.',
    date: '2026-06',
    category: 'Workshop',
    topics: ['Cursor', 'Agentic AI', 'Developer productivity'],
    source: 'LinkedIn',
    sourceUrl: SITE_SOCIAL.linkedin,
  },
  {
    slug: 'qa-craft-basics',
    title: 'Quality as a delivery gate — SQA craft at Stack360',
    excerpt:
      'How we treat manual and automated testing (including Selenium) as release gates — not afterthoughts — so every ship meets production standards.',
    date: '2026-05',
    category: 'Practice',
    topics: ['QA', 'Selenium', 'Release gates'],
    source: 'LinkedIn',
    sourceUrl: SITE_SOCIAL.linkedin,
  },
  {
    slug: 'industry-academia-bridge',
    title: 'Bridging education and industry',
    excerpt:
      'From UMT partnership to UET outreach — how we invest in the next generation of builders through collaboration, mentoring, and real project exposure.',
    date: '2026-06',
    category: 'Talk',
    topics: ['Talent', 'Partnerships', 'Mentorship'],
    source: 'LinkedIn',
    sourceUrl: SITE_SOCIAL.linkedin,
  },
] as const;
