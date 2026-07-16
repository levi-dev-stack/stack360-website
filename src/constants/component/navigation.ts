export interface NavSubItem {
  title: string;
  desc: string;
  href: string;
}

export interface NavSection {
  label: string;
  type: 'link' | 'dropdown';
  href?: string;
  columns?: { title?: string; items: NavSubItem[] }[];
  imagePreview?: { src: string; alt: string; caption: string };
}

export const NAVIGATION_DATA: NavSection[] = [
  {
    label: 'What We Build',
    type: 'dropdown',
    href: '/what-we-build',
    imagePreview: {
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
      alt: 'System Custom Architecture',
      caption: 'Building complex high-performance systems from the ground up.',
    },
    columns: [
      {
        title: 'Core Ecosystems',
        items: [
          {
            title: 'ERP',
            desc: 'Centralized enterprise resource engines designed for scalability.',
            href: '/what-we-build/erp',
          },
          {
            title: 'CRM',
            desc: 'Smarter customer relationship tracking optimized for pipeline velocity.',
            href: '/what-we-build/crm',
          },
          {
            title: 'AI Solutions',
            desc: 'Custom neural integrations and intelligent automated workflows.',
            href: '/what-we-build/ai-solutions',
          },
          {
            title: 'SaaS',
            desc: 'Multi-tenant cloud products engineered for subscription scale.',
            href: '/what-we-build/saas',
          },
          {
            title: 'Custom Software',
            desc: 'Bespoke digital tailoring solving complex foundational bottlenecks.',
            href: '/what-we-build/custom-software',
          },
        ],
      },
      {
        title: 'Platform & Infrastructure',
        items: [
          {
            title: 'Mobile Apps',
            desc: 'Native-grade portable applications built for iOS and Android environments.',
            href: '/what-we-build/mobile-apps',
          },
          {
            title: 'Web Apps',
            desc: 'High-speed, modular web applications built with dynamic architecture.',
            href: '/what-we-build/web-apps',
          },
          {
            title: 'Cloud',
            desc: 'Resilient serverless distribution structures mapped to modern frameworks.',
            href: '/what-we-build/cloud',
          },
          {
            title: 'DevOps',
            desc: 'Automated CI/CD pipelines keeping code testing stable.',
            href: '/what-we-build/devops',
          },
          {
            title: 'Automation',
            desc: 'Scraping manual tasks out of day-to-day work operations.',
            href: '/what-we-build/automation',
          },
        ],
      },
    ],
  },
  {
    label: 'Who We Help',
    type: 'dropdown',
    href: '/who-we-help',
    imagePreview: {
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
      alt: 'Collaborative Workspace',
      caption: 'Partnering across stages—from pre-seed to enterprise ecosystems.',
    },
    columns: [
      {
        items: [
          {
            title: 'Industries',
            desc: 'Domain-focused execution covering Healthcare, FinTech, and Logistics.',
            href: '/who-we-help/industries',
          },
          {
            title: 'Startups',
            desc: 'Agile MVP structures and lightning-fast product path discoveries.',
            href: '/who-we-help/startups',
          },
          {
            title: 'SMEs',
            desc: 'Expanding operational scale through custom system modernization.',
            href: '/who-we-help/smes',
          },
          {
            title: 'Enterprises',
            desc: 'Massive legacy transitions engineered cleanly without downtime.',
            href: '/who-we-help/enterprises',
          },
        ],
      },
    ],
  },
  {
    label: 'Our Work',
    type: 'dropdown',
    href: '/our-work',
    imagePreview: {
      src: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop',
      alt: 'Case Showcase',
      caption: 'Explore real-world case studies detailing deep system metrics.',
    },
    columns: [
      {
        title: 'Portfolios',
        items: [
          {
            title: 'Case Studies',
            desc: 'Deep deep-dives explaining performance problems and technical answers.',
            href: '/our-work/case-studies',
          },
          {
            title: 'Featured Projects',
            desc: 'A showcase spotlighting our absolute highest tier engineering tasks.',
            href: '/our-work/featured-projects',
          },
          {
            title: 'Client Success Stories',
            desc: 'Real statistical returns generated for our industry partners.',
            href: '/our-work/client-success-stories',
          },
        ],
      },
      {
        title: 'Insights',
        items: [
          {
            title: 'Blog',
            desc: 'Engineering thought pieces covering fullstack architectures.',
            href: '/our-work/blog',
          },
          // {
          //   title: 'News',
          //   desc: 'Studio announcements, system updates, and scaling milestones.',
          //   href: '/our-work/news',
          // },
          // {
          //   title: 'Learning Sessions',
          //   desc: 'Public documentation reviews and live internal developer recordings.',
          //   href: '/our-work/learning-sessions',
          // },
          {
            title: 'FAQs',
            desc: 'Straightforward answers regarding contracts, handoffs, and sprint setups.',
            href: '/our-work/faqs',
          },
        ],
      },
    ],
  },
  {
    label: 'Who We Are',
    type: 'dropdown',
    href: '/who-we-are',
    imagePreview: {
      src: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=600&auto=format&fit=crop',
      alt: 'Engineering Lab',
      caption: 'A disciplined team centered around technical integrity.',
    },
    columns: [
      {
        items: [
          {
            title: 'History',
            desc: 'Tracing our path from a minor technical garage up to a complex engineering firm.',
            href: '/who-we-are/history',
          },
          {
            title: 'Culture',
            desc: 'A zero-fluff workspace prioritizing neat git histories and clean execution.',
            href: '/who-we-are/culture',
          },
          {
            title: 'How We Work',
            desc: 'Inside look at our daily iterations, architectural planning, and staging lines.',
            href: '/who-we-are/how-we-work',
          },
        ],
      },
    ],
  },
  {
    label: 'Work With Us',
    type: 'dropdown',
    href: '/work-with-us',
    imagePreview: {
      src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
      alt: 'Hiring Process Flowchart',
      caption: 'Let us build together, or help build the future of our firm.',
    },
    columns: [
      {
        title: 'For Partners',
        items: [
          {
            title: 'Looking for a software partner',
            desc: 'Review our Feature Projects, Client Success Stories, and Case Studies to initiate contract development pipelines.',
            href: '/work-with-us/software-partner',
          },
          {
            title: 'Hire talent',
            desc: 'Select skills and engagement length — get shortlists of vetted full-time engineers.',
            href: '/work-with-us/hire',
          },
        ],
      },
      {
        title: 'For Builders',
        items: [
          {
            title: 'Looking for a Career',
            desc: 'Browse Open Positions, check out modern Internship options, and learn our strict Hiring Process.',
            href: '/work-with-us/careers',
          },
        ],
      },
    ],
  },
];
