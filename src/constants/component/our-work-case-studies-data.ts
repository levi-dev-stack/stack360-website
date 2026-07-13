/**
 * In-depth case studies — content sourced from stack360.co/case-studies.
 * The list page shows project names; each links to a detail route
 * at /our-work/case-studies/[slug].
 */

import type { ChallengeSolution } from '@/constants/component/our-work-portfolio-data';

export interface CaseStudyFeature {
  title: string;
  description: string;
}

export interface TechItem {
  label: string;
  /** Simple Icons / BrandIcon slug; omit when no reliable glyph exists. */
  slug?: string;
}

export interface TechGroup {
  category: string;
  items: TechItem[];
}

export interface CaseStudyDetail {
  slug: string;
  name: string;
  tagline: string;
  industry: string;
  platform: string;
  durationHours: string;
  members: string;
  domain: string;
  domainHref: string;
  metric: string;
  metricLabel: string;
  clientRequirement: string;
  /** Number of empty gallery slots to render until real screenshots exist. */
  imageCount: number;
  challenges: ChallengeSolution[];
  features: CaseStudyFeature[];
  results: string[];
  tech: TechGroup[];
}

export const CASE_STUDIES_DETAILS_HERO = {
  eyebrow: 'Our Work · Case Studies',
  title: 'Real platforms,',
  highlight: 'real results.',
  description:
    'Deep dives into systems we modernized — the constraints we inherited, the challenges we hit, and the solutions we shipped. Pick a project to read the full engineering story.',
} as const;

export const CASE_STUDIES_DETAILS: CaseStudyDetail[] = [
  {
    slug: 'autobuffy',
    name: 'AutoBuffy',
    tagline:
      'A user-friendly platform that simplifies finding and purchasing auto parts online, with a diverse selection so customers find exactly what they need.',
    industry: 'eCommerce · Auto Parts',
    platform: 'Web',
    durationHours: '28,000 hrs',
    members: '6',
    domain: 'eCommerce · Web Development',
    domainHref: '/what-we-build/web-apps',
    metric: '+50%',
    metricLabel: 'Sales via Buy Now, Pay Later',
    clientRequirement:
      'AutoBuffy, a leading eCommerce store for auto parts, reached out to enhance website functionality and user experience — faster part search across a huge catalog, flexible payment options, stronger technical SEO, higher-availability infrastructure, and real-time inventory synchronization.',
    imageCount: 6,
    challenges: [
      {
        challenge:
          'Searching for a part by make, year, and model was slow because of excessively large database tables holding detailed part information.',
        solution:
          'Caching alone did not help, so we integrated Elasticsearch, refined the database structure, and added indexing to accelerate search dramatically.',
      },
      {
        challenge:
          'Unlike most US eCommerce platforms, the system had no “buy now, pay later” payment method.',
        solution:
          'We implemented Klarna Buy Now, Pay Later integrated with Stripe, thoroughly tested for reliability and a smooth checkout.',
      },
      {
        challenge:
          'Serious SEO gaps from missing technical SEO, compounded by an outdated Angular 8 frontend.',
        solution:
          'We added Server-Side Rendering and upgraded Angular from 8 to 13 in 20 days, boosting SEO performance and sales.',
      },
      {
        challenge:
          'An inadequate server structure struggled with heavy API call and IO volume, slowing the site under traffic.',
        solution:
          'We introduced AWS load balancers and auto-scaling, and split UI and admin onto separate servers so user experience stays unaffected during heavy admin uploads.',
      },
      {
        challenge:
          'Large files were uploaded to the server first and then to S3 — a slow, costly round trip.',
        solution:
          'We implemented direct-to-S3 uploads from the frontend, cutting server cost and utilization for file uploads.',
      },
      {
        challenge:
          'Inventory updates were manual via FTP, CSV, and Excel; real-time updates without manual work were critical.',
        solution:
          'We built a new microservice automating inventory for all parts and vendors with real-time updates and APIs for seamless synchronization.',
      },
    ],
    features: [
      {
        title: 'Geolocation-based part recommendations',
        description:
          'Detects the user’s location to instantly suggest the most popular parts and kits in their area, making search faster and more relevant.',
      },
      {
        title: 'Real-time inventory microservice',
        description:
          'Keeps inventory synced with vendor portals for always up-to-date availability, with dedicated APIs for authenticated users and admins.',
      },
      {
        title: 'Buy Now, Pay Later',
        description:
          'Offers PayPal, AfterPay, debit, and credit options — boosting sales by 50% while giving customers financial flexibility.',
      },
      {
        title: 'Streamlined returns process',
        description:
          'A well-defined return workflow resolves issues quickly, making shopping hassle-free and reinforcing trust.',
      },
      {
        title: 'AI-powered support chatbot',
        description:
          'Personalizes responses by location and demographics for a highly relevant, engaging support experience.',
      },
      {
        title: 'Advanced parts search algorithm',
        description:
          'Delivers real-time, relevant suggestions as users type, so they instantly find the right parts across a vast catalog.',
      },
      {
        title: 'Streamlined content management',
        description:
          'Lets the SEO team update SEO attributes in real time, making it easy to optimize content and improve visibility.',
      },
    ],
    results: [
      'Streamlined search drastically reduced search times and increased user satisfaction.',
      'Flexible payment solutions broadened the customer base and boosted sales.',
      'Advanced SEO strategies raised visibility, increasing clicks and engagement.',
      'System reliability held up even during peak loads.',
      'Inventory management reached real-time accuracy and operational efficiency.',
    ],
    tech: [
      {
        category: 'Frontend',
        items: [
          { label: 'HTML5', slug: 'html5' },
          { label: 'CSS3', slug: 'css3' },
          { label: 'REST' },
          { label: 'Bootstrap', slug: 'bootstrap' },
          { label: 'Angular', slug: 'angular' },
          { label: 'TypeScript', slug: 'typescript' },
        ],
      },
      {
        category: 'Backend',
        items: [
          { label: 'Rails', slug: 'rubyonrails' },
          { label: 'Node.js', slug: 'nodedotjs' },
          { label: '.NET', slug: 'dotnet' },
        ],
      },
      {
        category: 'Database',
        items: [
          { label: 'PostgreSQL', slug: 'postgresql' },
          { label: 'AWS RDS', slug: 'amazonaws' },
          { label: 'Elasticsearch', slug: 'elasticsearch' },
          { label: 'Redis', slug: 'redis' },
        ],
      },
      {
        category: 'Integrations',
        items: [
          { label: 'Twilio', slug: 'twilio' },
          { label: 'SendGrid' },
          { label: 'Stripe', slug: 'stripe' },
          { label: 'AfterShip' },
          { label: 'PayPal', slug: 'paypal' },
          { label: 'UPS' },
          { label: 'USPS' },
          { label: 'FedEx', slug: 'fedex' },
          { label: 'Slack', slug: 'slack' },
          { label: 'Sentry', slug: 'sentry' },
        ],
      },
      {
        category: 'Server',
        items: [
          { label: 'AWS', slug: 'amazonaws' },
          { label: 'S3', slug: 'amazonaws' },
          { label: 'OpenSearch' },
        ],
      },
    ],
  },
  {
    slug: 'coach-catalyst',
    name: 'Coach Catalyst',
    tagline:
      'An online platform that streamlines coaching — a centralized hub for scheduling, communication, and progress tracking with a clean, intuitive interface.',
    industry: 'Management · Coaching',
    platform: 'Web',
    durationHours: '4,272 hrs',
    members: '2',
    domain: 'Coaching · Web Development',
    domainHref: '/what-we-build/web-apps',
    metric: 'Vue 2 → 3',
    metricLabel: 'Migrated + new revenue stream',
    clientRequirement:
      'CoachCatalyst needed its coaching platform modernized — a faster, more intuitive UI, a Stripe Connect marketplace so coaches get paid directly, an integrated community module, a rewritten real-time chat, and a full migration to Vue 3.',
    imageCount: 4,
    challenges: [
      {
        challenge:
          'The site was not user-friendly and loaded slowly; users struggled to complete tasks, hurting engagement.',
        solution:
          'We redesigned for clarity and optimized performance — code optimization, fewer HTTP requests, and optimized media — to improve speed and responsiveness.',
      },
      {
        challenge:
          'A marketplace was needed that integrates Stripe Connect for direct coach-to-client payments, with a scalable, secure schema.',
        solution:
          'We designed an efficient relational schema and integrated Stripe Connect with OAuth onboarding and secure payout processing.',
      },
      {
        challenge:
          'Integrating a community module was complex because the project structure was never planned for it.',
        solution:
          'We used a phased, modular approach — isolating community components and integrating them step by step.',
      },
      {
        challenge:
          'The custom chat module was written in CoffeeScript, lacked usability, and needed performance work.',
        solution:
          'We migrated chat to Vue.js with real-time updates and efficient data fetching for smooth, responsive UX under load.',
      },
      {
        challenge:
          'Upgrading from Vue 2 to Vue 3 introduced new syntax, features, and optimizations to reconcile carefully.',
        solution:
          'We refactored components to the Composition API, updated directives and plugins for compatibility, and reduced bundle size for faster loads.',
      },
    ],
    features: [
      {
        title: 'Client management',
        description:
          'Keeps client info, progress, and communication in one place, so coaches can update details and message clients from a single view.',
      },
      {
        title: 'Program creation',
        description:
          'Lets coaches build custom plans matched to each client’s goals, ability, and fitness level.',
      },
      {
        title: 'Messaging & communication',
        description:
          'In-app messages, notifications, and updates keep coaches and clients connected and informed.',
      },
      {
        title: 'Communities',
        description:
          'Clients join interest-based groups, connect with peers, and share progress — driving ongoing engagement.',
      },
      {
        title: 'Progress tracking',
        description:
          'Data analytics, charts, and visualizations surface performance and achievements over time.',
      },
      {
        title: 'Calendar & scheduling',
        description:
          'An integrated calendar manages appointments, sessions, and events in one place.',
      },
    ],
    results: [
      'A more intuitive, enjoyable experience lifted engagement and satisfaction.',
      'Faster loads and smoother modules kept more users on the site.',
      'Improved usability attracted new users and expanded the user base.',
      'Positive changes strengthened reputation and brand perception.',
      'The Stripe Connect marketplace opened new revenue for coaches and the platform.',
      'Scalability and performance work positioned the platform for international expansion.',
    ],
    tech: [
      {
        category: 'Frontend',
        items: [
          { label: 'HTML5', slug: 'html5' },
          { label: 'CSS3', slug: 'css3' },
          { label: 'Tailwind UI', slug: 'tailwindcss' },
          { label: 'Vue 2 & 3', slug: 'vuedotjs' },
          { label: 'Vue Router', slug: 'vuedotjs' },
          { label: 'Vuex' },
        ],
      },
      { category: 'Backend', items: [{ label: 'Rails', slug: 'rubyonrails' }] },
      {
        category: 'Database',
        items: [
          { label: 'PostgreSQL', slug: 'postgresql' },
          { label: 'Redis', slug: 'redis' },
          { label: 'AWS RDS', slug: 'amazonaws' },
        ],
      },
      { category: 'Integrations', items: [{ label: 'Stripe', slug: 'stripe' }] },
      {
        category: 'Project management',
        items: [
          { label: 'Trello', slug: 'trello' },
          { label: 'Jira', slug: 'jira' },
        ],
      },
      { category: 'Hosting', items: [{ label: 'AWS', slug: 'amazonaws' }] },
    ],
  },
  {
    slug: 'atc',
    name: 'ATC — Air Traffic Controller',
    tagline:
      'An internal management tool for project handling and HR — a centralized hub for invoicing, email, messaging, and real-time updates via SignalR.',
    industry: 'Management & Services',
    platform: 'Web',
    durationHours: '2,800 hrs',
    members: '3',
    domain: 'Operations · CRM Systems',
    domainHref: '/what-we-build/crm',
    metric: 'Unified',
    metricLabel: 'HR, invoicing & real-time ops',
    clientRequirement:
      'The client needed their internal management tool restructured — simpler client modules over a cleaner database, automated service-rate and invoice handling, a modern DevExtreme UI, and SQL-optimized analytics for fast dashboards.',
    imageCount: 4,
    challenges: [
      {
        challenge:
          'Intricate client-module configuration plus redundant database structures made the system hard to manage.',
        solution:
          'We introduced a V2 module structure, reduced database redundancy, and shipped a friendlier UI for simpler operations.',
      },
      {
        challenge:
          'Managing changes in service rates and keeping accurate rate history for predictive invoicing was difficult.',
        solution:
          'We used Hangfire jobs to auto-update per-user rates and added logging so admins can monitor rate changes over time.',
      },
      {
        challenge:
          'Transitioning from CoreUI to DevExtreme UI risked breaking functionality and aesthetics.',
        solution:
          'We analyzed DevExtreme, prioritized critical components, and migrated iteratively with testing — improving UX without losing functionality.',
      },
      {
        challenge:
          'LINQ-based analytics across many tables degraded performance and slowed page loads.',
        solution:
          'We restructured LINQ into optimized SQL and added caching to cut database load and speed up query execution.',
      },
    ],
    features: [
      {
        title: 'Email integration',
        description:
          'Connects Mailgun so users receive emails inside the dashboard, with detailed logs for opens, IPs, and click-through rates.',
      },
      {
        title: 'Client dashboard analytics',
        description:
          'Detailed invoice and feedback statistics help clients track finances and make informed decisions.',
      },
      {
        title: 'Document creation',
        description:
          'Zoho Writer integration for template design, PDF/Docx export, email merge, e-signing, and postal mail via SendGrid.',
      },
      {
        title: 'Resource management',
        description:
          'Assign and adjust hours by project and availability, track time per member, and reallocate to hit timelines.',
      },
      {
        title: 'Leaves management',
        description:
          'Handle leave requests from admins or employees, with analytics into leave trends and usage patterns.',
      },
      {
        title: 'Zoho Books integration',
        description:
          'Auto-syncs data with Zoho Books to track billable hours, oversee projects, and generate precise invoices.',
      },
    ],
    results: [
      'Streamlined module structure and optimized database improved system efficiency.',
      'Automated rate management and email integration smoothed overall workflow.',
      'A revamped UI and dashboard analytics gave a more intuitive, informative experience.',
      'Streamlined leave management reduced administrative burden for HR.',
      'Resource management improvements drove higher efficiency and productivity.',
      'Robust allocation, tracking, analytics, and financial insight lifted project performance.',
    ],
    tech: [
      {
        category: 'Frontend',
        items: [
          { label: 'HTML5', slug: 'html5' },
          { label: 'CSS3', slug: 'css3' },
          { label: 'Vue.js', slug: 'vuedotjs' },
          { label: 'CoreUI' },
          { label: 'DevExtreme UI' },
        ],
      },
      {
        category: 'Backend',
        items: [
          { label: 'ASP.NET Core', slug: 'dotnet' },
          { label: 'Docker', slug: 'docker' },
          { label: 'Hangfire' },
          { label: 'Entity Framework' },
        ],
      },
      {
        category: 'Database',
        items: [
          { label: 'PostgreSQL', slug: 'postgresql' },
          { label: 'Redis', slug: 'redis' },
        ],
      },
      { category: 'Version control', items: [{ label: 'Azure DevOps', slug: 'azuredevops' }] },
      {
        category: 'Integrations',
        items: [
          { label: 'Amazon S3', slug: 'amazonaws' },
          { label: 'Zoho', slug: 'zoho' },
        ],
      },
      {
        category: 'Project management',
        items: [{ label: 'Trello', slug: 'trello' }, { label: 'Microsoft Teams' }],
      },
    ],
  },
  {
    slug: 'buffyhub',
    name: 'BuffyHub',
    tagline:
      'A unified eCommerce platform that centralizes inventory, orders, brands, and vendors in one place to streamline operations for businesses and consumers.',
    industry: 'eCommerce',
    platform: 'Web App',
    durationHours: '3,344 hrs',
    members: '2',
    domain: 'eCommerce · Web Development',
    domainHref: '/what-we-build/web-apps',
    metric: 'Multi-channel',
    metricLabel: 'Amazon · eBay · Walmart synced',
    clientRequirement:
      'BuffyHub needed a unified eCommerce control plane — a scalable system for large volumes of inventory, orders, brands, and vendors, hardened security, seamless multi-marketplace integration, and performance optimization as traffic grew.',
    imageCount: 6,
    challenges: [
      {
        challenge:
          'The platform needed a powerful, scalable system to manage vast inventory, order, brand, and vendor data.',
        solution:
          'We used AWS services such as Amazon RDS and S3 to efficiently manage and store that data.',
      },
      {
        challenge:
          'Growing users and activity demanded infrastructure that could scale without downtime.',
        solution:
          'We used EC2 and Elastic Load Balancer to distribute traffic and scale compute, keeping the platform highly available.',
      },
      {
        challenge: 'Inadequate security risked the confidentiality and integrity of stored data.',
        solution:
          'We implemented encryption, authentication, and authorization so data stays confidential and inaccessible to unauthorized users.',
      },
      {
        challenge: 'No single solution could integrate all the different eCommerce applications.',
        solution:
          'We used APIs and webhooks to connect payment gateways, shipping providers, and inventory systems for seamless data exchange.',
      },
      {
        challenge: 'Slow loads and unresponsive features hurt the user experience.',
        solution:
          'We applied caching, minification, and lazy loading to significantly improve speed and satisfaction.',
      },
      {
        challenge:
          'Thorough testing was essential to guarantee functionality, usability, and security.',
        solution:
          'We used unit, integration, and acceptance testing to catch issues early and raise overall quality.',
      },
      {
        challenge: 'Evolving requirements demanded a platform that could adapt seamlessly.',
        solution:
          'We adopted agile methods (Scrum and Kanban) to keep the platform flexible as needs changed.',
      },
    ],
    features: [
      {
        title: 'Centralized management',
        description:
          'Manage all inventory, orders, brands, and vendors in one place to streamline eCommerce operations.',
      },
      {
        title: 'Security',
        description:
          'Encryption, authentication, and authorization safeguard the privacy of user data.',
      },
      {
        title: 'Scalability',
        description:
          'AWS EC2 and Elastic Load Balancer distribute traffic and keep the platform scalable as it grows.',
      },
      {
        title: 'Centralized inventory',
        description: 'A single system integrates inventory from various sources and locations.',
      },
      {
        title: 'Order management',
        description: 'A comprehensive system consolidates orders from all sales channels.',
      },
      {
        title: 'Third-party integrations',
        description:
          'Seamless integration with payment gateways, shipping carriers, and tax-compliance apps.',
      },
    ],
    results: [
      'Optimized backend processes delivered faster loads and better overall performance.',
      'Robust encryption, authentication, and authorization safeguarded user data.',
      'AWS services and load balancing let the platform handle more traffic and scale effectively.',
      'Seamless third-party integrations enhanced functionality and user experience.',
      'Usability, navigation, and visual design improvements made the platform more intuitive.',
      'APIs and webhooks enabled seamless data exchange across eCommerce applications.',
    ],
    tech: [
      {
        category: 'Frontend',
        items: [
          { label: 'HTML5', slug: 'html5' },
          { label: 'CSS3', slug: 'css3' },
          { label: 'Bootstrap', slug: 'bootstrap' },
          { label: 'Vanilla JS', slug: 'javascript' },
          { label: 'ERB Template' },
        ],
      },
      { category: 'Backend', items: [{ label: 'Ruby on Rails', slug: 'rubyonrails' }] },
      { category: 'Database', items: [{ label: 'PostgreSQL', slug: 'postgresql' }] },
      {
        category: 'DevOps',
        items: [{ label: 'GitHub', slug: 'github' }, { label: 'Capistrano' }],
      },
      { category: 'Server', items: [{ label: 'AWS', slug: 'amazonaws' }] },
      {
        category: 'Integrations',
        items: [
          { label: 'Amazon', slug: 'amazon' },
          { label: 'eBay', slug: 'ebay' },
          { label: 'Walmart', slug: 'walmart' },
          { label: 'Shippo' },
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudyDetail | undefined {
  return CASE_STUDIES_DETAILS.find((study) => study.slug === slug);
}

export function getCaseStudySlugs(): string[] {
  return CASE_STUDIES_DETAILS.map((study) => study.slug);
}
