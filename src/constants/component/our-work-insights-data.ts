/** Our Work insights — blog, news, learning (sourced from LinkedIn company posts). */

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

export const NEWS_ITEMS = [
  {
    slug: 'mou-umt',
    title: 'MoU signed with University of Management and Technology (UMT)',
    excerpt:
      'Stack360 officially signed an MoU with UMT — an industry–academia partnership to empower future talent and create opportunities for learning, research, and technological advancement.',
    date: '2026-06',
    category: 'Partnership',
    source: 'LinkedIn',
    sourceUrl: 'https://www.linkedin.com/company/stack360co',
  },
  {
    slug: 'hiring-sqa',
    title: 'We are hiring SQA Engineers in DHA Phase-1, Lahore',
    excerpt:
      'Open roles: SQA Trainee (0–6 months) and SQA Associate (1 year). Learn from experienced professionals, work with modern testing tools, and grow inside a friendly full-time team. CVs: Careers@teamstack360.co',
    date: '2026-06',
    category: 'Careers',
    source: 'LinkedIn',
    sourceUrl: 'https://www.linkedin.com/company/stack360co',
  },
  {
    slug: 'uet-job-fair',
    title: 'Campus collaboration at UET Lahore',
    excerpt:
      'Our team connected with students at the University of Engineering and Technology, Lahore — sharing how Stack360 provides end-to-end support to turn potential into real-world impact.',
    date: '2026-05',
    category: 'Community',
    source: 'LinkedIn',
    sourceUrl: 'https://www.linkedin.com/company/stack360co',
  },
] as const;

export const LEARNING_HERO = {
  eyebrow: 'Our Work',
  title: 'Learning',
  highlight: 'sessions.',
  description:
    'Internal workshops and public-facing sessions where the team sharpens craft — from agentic coding tools to delivery discipline.',
} as const;

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
    sourceUrl: 'https://www.linkedin.com/company/stack360co',
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
    sourceUrl: 'https://www.linkedin.com/company/stack360co',
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
    sourceUrl: 'https://www.linkedin.com/company/stack360co',
  },
] as const;
