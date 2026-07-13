/** Capability pages under /what-we-build — sourced from stack360.co/services where available. */

export type CapabilitySlug =
  | 'erp'
  | 'crm'
  | 'ai-solutions'
  | 'saas'
  | 'custom-software'
  | 'mobile-apps'
  | 'web-apps'
  | 'cloud'
  | 'devops'
  | 'automation';

export interface CapabilityFaq {
  id: string;
  question: string;
  answer: string;
}

export interface CapabilityProjectRef {
  slug: string;
  title: string;
  subtitle: string;
  metric: string;
  metricLabel: string;
  href: string;
}

export interface CapabilityPageData {
  slug: CapabilitySlug;
  hero: {
    eyebrow: string;
    title: string;
    highlight?: string;
    description: string;
  };
  capabilitiesTitle: string;
  capabilitiesIntro: string;
  capabilities: { title: string; description: string }[];
  processTitle: string;
  processIntro: string;
  process: { title: string; description: string }[];
  tech: string[];
  projects: CapabilityProjectRef[];
  faqs: CapabilityFaq[];
  cta: {
    title: string;
    description: string;
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
}

const PROJECT = {
  autobuffy: {
    slug: 'autobuffy',
    title: 'Autobuffy',
    subtitle: 'Selling auto parts in the USA',
    metric: '2×',
    metricLabel: 'Website speed & traffic',
    href: '/our-work/case-studies#autobuffy',
  },
  coachCatalyst: {
    slug: 'coach-catalyst',
    title: 'Coach Catalyst',
    subtitle: 'Fitness management',
    metric: '3×',
    metricLabel: 'Daily active users',
    href: '/our-work/case-studies#coach-catalyst',
  },
  atc: {
    slug: 'atc',
    title: 'ATC — Air Traffic Controller',
    subtitle: 'Project & HR management',
    metric: '40%',
    metricLabel: 'Faster project & HR coordination',
    href: '/our-work/case-studies#atc',
  },
  buffyhub: {
    slug: 'buffyhub',
    title: 'BuffyHub',
    subtitle: 'Unified e-commerce control plane',
    metric: '12+',
    metricLabel: 'Marketplaces in one dashboard',
    href: '/our-work/case-studies#buffyhub',
  },
  cercle: {
    slug: 'cercle',
    title: 'Cercle',
    subtitle: 'Sustainable fashion rental',
    metric: '60%',
    metricLabel: 'Reduction in manual workflows',
    href: '/our-work/case-studies#cercle',
  },
} as const satisfies Record<string, CapabilityProjectRef>;

const defaultCta = (system: string) =>
  ({
    title: `Ready to scope ${system}?`,
    description:
      'Share constraints, timeline, and stack preferences. We respond with a concrete next step — not a brochure.',
    primary: { label: 'Start a conversation', href: '/contact' },
    secondary: { label: 'Hire talent', href: '/work-with-us/hire' },
  }) as const;

export const CAPABILITY_PAGES: Record<CapabilitySlug, CapabilityPageData> = {
  'web-apps': {
    slug: 'web-apps',
    hero: {
      eyebrow: 'What We Build · Web Apps',
      title: 'Web systems that',
      highlight: 'hold up in production.',
      description:
        'We craft tailored websites and web applications that are visually clear, highly functional, and optimized across devices — built for partners who need durable architecture, not throwaway marketing sites.',
    },
    capabilitiesTitle: 'Web development services',
    capabilitiesIntro:
      'From experience design through full-stack delivery and ongoing maintenance — one studio accountable for the surface and the systems behind it.',
    capabilities: [
      {
        title: 'Experience design',
        description:
          'User-focused interfaces that improve interaction and reduce friction across the customer journey.',
      },
      {
        title: 'Frontend development',
        description:
          'Responsive, interactive frontends with React, Next.js, Vue, Angular, and TypeScript — measured for performance.',
      },
      {
        title: 'Backend development',
        description:
          'Secure APIs and data layers with Node.js, Laravel, Ruby on Rails, and similar stacks your team can own.',
      },
      {
        title: 'Full-stack delivery',
        description:
          'End-to-end ownership when you need one partner across client, server, and deployment.',
      },
      {
        title: 'E-commerce platforms',
        description:
          'Custom or platform-backed stores with payment integrations, catalog UX, and inventory workflows.',
      },
      {
        title: 'Maintenance & updates',
        description:
          'Ongoing hardening, dependency updates, and performance work so the product stays production-ready.',
      },
    ],
    processTitle: 'How we ship web products',
    processIntro:
      'Clear roadmap, deliberate build, then launch with support — so partners and client stakeholders stay aligned.',
    process: [
      {
        title: 'Project initiation',
        description:
          'Requirements, audience, and success metrics become a precise roadmap before a line of code ships.',
      },
      {
        title: 'Design and build',
        description:
          'Interfaces and backends land together so UX and system constraints stay honest with each other.',
      },
      {
        title: 'Launch & support',
        description:
          'Controlled release, monitoring, and iteration so the product stays fast and secure after go-live.',
      },
    ],
    tech: ['react', 'nextdotjs', 'vuedotjs', 'angular', 'nodedotjs', 'typescript', 'tailwindcss'],
    projects: [PROJECT.autobuffy, PROJECT.buffyhub, PROJECT.cercle],
    faqs: [
      {
        id: 'web-tech',
        question: 'Which technologies do you use for web development?',
        answer:
          'Frontend: HTML5, CSS3, JavaScript, React, Next.js, Vue, Angular, and Tailwind. Backend: Node.js, Laravel, Ruby on Rails, and related services — chosen to match your team’s ownership model.',
      },
      {
        id: 'web-seo',
        question: 'Will my website be SEO-friendly and mobile responsive?',
        answer:
          'Yes. We build responsive layouts and apply technical SEO foundations — structure, performance, and crawlability — as part of delivery, not an afterthought.',
      },
      {
        id: 'web-ecom',
        question: 'Do you develop eCommerce websites?',
        answer:
          'Absolutely. WooCommerce, Shopify, Magento, or fully custom stacks tailored to catalog complexity and checkout requirements.',
      },
      {
        id: 'web-apps',
        question: 'Can you build web applications and portals?',
        answer:
          'Yes — dashboards, SaaS surfaces, and internal portals with authentication, roles, and secure data flows.',
      },
      {
        id: 'web-perf',
        question: 'How do you ensure fast loading and performance?',
        answer:
          'Image optimization, code-splitting, lazy loading, CDN usage, and SSR/SSG where they earn their keep — validated with measurable budgets, not slogans.',
      },
    ],
    cta: defaultCta('a web system'),
  },

  'mobile-apps': {
    slug: 'mobile-apps',
    hero: {
      eyebrow: 'What We Build · Mobile Apps',
      title: 'Mobile products built for',
      highlight: 'store-ready quality.',
      description:
        'Expertly crafted iOS, Android, and hybrid applications — user-friendly, efficient, and ready for App Store and Play Store submission with a backend your team can operate.',
    },
    capabilitiesTitle: 'Mobile app development',
    capabilitiesIntro:
      'Native when the platform demands it; cross-platform when shared velocity wins — with API design and store deployment included.',
    capabilities: [
      {
        title: 'iOS development',
        description:
          'Swift-native apps tuned for Apple Human Interface patterns, performance, and App Store compliance.',
      },
      {
        title: 'Android development',
        description:
          'Kotlin-first Android apps focused on smooth interaction across a wide device base.',
      },
      {
        title: 'Hybrid & cross-platform',
        description:
          'React Native and Flutter when one codebase should serve both platforms without sacrificing UX.',
      },
      {
        title: 'API integration',
        description:
          'Secure auth, offline sync, and real-time features wired to Node, Firebase, or Rails backends.',
      },
      {
        title: 'App store deployment',
        description:
          'Submission, compliance checks, and release hygiene for Google Play and the Apple App Store.',
      },
    ],
    processTitle: 'App delivery process',
    processIntro:
      'Vision → plan → design → build → test → deploy. Partners get visibility at each gate.',
    process: [
      {
        title: 'Initial planning',
        description:
          'Scope, goals, and platform strategy aligned to budget and go-to-market constraints.',
      },
      {
        title: 'Design and development',
        description:
          'Intuitive UI paired with robust application code and a maintainable module structure.',
      },
      {
        title: 'Quality assurance',
        description:
          'Device-matrix testing and bug triage so releases feel stable before customers see them.',
      },
    ],
    tech: ['swift', 'kotlin', 'reactnative', 'flutter', 'firebase', 'nodedotjs'],
    projects: [PROJECT.coachCatalyst, PROJECT.cercle, PROJECT.autobuffy],
    faqs: [
      {
        id: 'mobile-native',
        question: 'Do you build native or cross-platform apps?',
        answer:
          'Both. Native with Swift and Kotlin when platform depth matters; React Native or Flutter when shared delivery speed is the priority.',
      },
      {
        id: 'mobile-offline',
        question: 'Can my app support offline functionality?',
        answer:
          'Yes. Local storage and sync strategies keep core flows usable without a network, then reconcile when connectivity returns.',
      },
      {
        id: 'mobile-security',
        question: 'How do you ensure app security?',
        answer:
          'Encrypted transport, secure APIs, OAuth2-style auth patterns, and vulnerability testing as part of the release cycle.',
      },
      {
        id: 'mobile-stores',
        question: 'Will you handle deployment to app stores?',
        answer:
          'Yes — full submission support for Play Store and App Store, including compliance and listing optimization.',
      },
      {
        id: 'mobile-backend',
        question: 'Can you build and integrate a custom backend?',
        answer:
          'Yes. Scalable backends with Node.js, Firebase, or Ruby on Rails for auth, real-time features, and analytics.',
      },
    ],
    cta: defaultCta('a mobile product'),
  },

  devops: {
    slug: 'devops',
    hero: {
      eyebrow: 'What We Build · DevOps',
      title: 'Automate delivery.',
      highlight: 'Reduce release risk.',
      description:
        'Maximize team productivity with DevOps that covers assessment, automation, and ongoing management — CI/CD, infrastructure as code, and observability that partners can trust.',
    },
    capabilitiesTitle: 'DevOps solutions',
    capabilitiesIntro:
      'We close the gap between “works on my machine” and production-grade release cadence.',
    capabilities: [
      {
        title: 'DevOps assessment',
        description:
          'Current-state review of pipelines, environments, and ownership — with a prioritized remediation plan.',
      },
      {
        title: 'DevOps automation',
        description:
          'Automate build, test, and deploy so releases stay fast without trading away quality gates.',
      },
      {
        title: 'DevOps management',
        description:
          'Ongoing ownership of delivery environments: continuous integration, deployment, and operational hygiene.',
      },
      {
        title: 'CI/CD pipelines',
        description:
          'GitHub Actions, GitLab CI, Jenkins, and similar — wired to your branching model and compliance needs.',
      },
      {
        title: 'Containers & orchestration',
        description:
          'Docker and Kubernetes setups that keep services isolated, reproducible, and scalable.',
      },
    ],
    processTitle: 'Streamline. Automate. Optimize.',
    processIntro: 'End-to-end DevOps so development and operations move as one system.',
    process: [
      {
        title: 'Plan & strategy',
        description:
          'Assess workflows and define a roadmap that accelerates delivery without ignoring risk.',
      },
      {
        title: 'Automation & deployment',
        description:
          'CI/CD and infrastructure automation for reliable releases with minimal downtime.',
      },
      {
        title: 'Monitor & optimize',
        description:
          'Continuous monitoring, security feedback, and iterative improvements to reliability.',
      },
    ],
    tech: ['docker', 'kubernetes', 'amazonaws', 'github', 'terraform'],
    projects: [PROJECT.autobuffy, PROJECT.atc, PROJECT.buffyhub],
    faqs: [
      {
        id: 'devops-scope',
        question: 'What services are included in your DevOps offering?',
        answer:
          'CI/CD setup, cloud infrastructure automation, environment configuration, Docker containerization, Kubernetes orchestration, and monitoring.',
      },
      {
        id: 'devops-speed',
        question: 'How do you improve deployment efficiency?',
        answer:
          'Automated pipelines with Jenkins, GitLab CI/CD, or GitHub Actions reduce manual error and shorten the path from commit to production.',
      },
      {
        id: 'devops-iac',
        question: 'Do you offer infrastructure automation and management?',
        answer:
          'Yes — Infrastructure as Code with Terraform and Ansible for consistent provisioning across environments.',
      },
      {
        id: 'devops-cloud',
        question: 'Can you assist with cloud platform setup and migration?',
        answer:
          'We configure AWS, Azure, or GCP and migrate applications, data, and services with controlled cutovers.',
      },
      {
        id: 'devops-k8s',
        question: 'Can you help with containerized microservices?',
        answer:
          'Yes. Docker-based packaging and Kubernetes management for isolated, scalable, reproducible deployments.',
      },
    ],
    cta: defaultCta('DevOps delivery'),
  },

  'ai-solutions': {
    slug: 'ai-solutions',
    hero: {
      eyebrow: 'What We Build · AI Solutions',
      title: 'AI that serves the',
      highlight: 'business system.',
      description:
        'Tailored AI and data science solutions that turn raw data into actionable intelligence — predictive models, NLP, recommendation systems, and the data engineering underneath.',
    },
    capabilitiesTitle: 'AI & data science services',
    capabilitiesIntro:
      'We design for production use: clean pipelines, validated models, and interfaces your operators can trust.',
    capabilities: [
      {
        title: 'Predictive analytics',
        description:
          'Forecast trends and demand with models grounded in your historical and live data.',
      },
      {
        title: 'Machine learning models',
        description:
          'Custom ML trained and validated for the metrics that matter to your product or ops team.',
      },
      {
        title: 'Natural language processing',
        description:
          'Classification, extraction, and conversational interfaces when language is the interface.',
      },
      {
        title: 'Big data analytics',
        description:
          'Pipelines and analysis layers that keep large, messy datasets usable for decisions.',
      },
      {
        title: 'Recommendation systems',
        description:
          'Personalization engines that improve engagement without opaque black-box hand-waving.',
      },
      {
        title: 'Data engineering',
        description: 'Ingestion, cleaning, and warehouse/lake design so models have reliable fuel.',
      },
    ],
    processTitle: 'Plan. Build. Improve.',
    processIntro:
      'Discover insight, design the system, then iterate in production — partners stay in the loop on model quality.',
    process: [
      {
        title: 'Insight discovery',
        description:
          'Explore the data landscape to find patterns worth acting on — and dead ends worth skipping.',
      },
      {
        title: 'Solution design',
        description:
          'Bespoke AI architecture matched to constraints: latency, privacy, cost, and team ownership.',
      },
      {
        title: 'Implementation & iteration',
        description:
          'Deploy, measure, and refine with validation protocols your stakeholders can audit.',
      },
    ],
    tech: ['python', 'tensorflow', 'pytorch', 'huggingface', 'langchain'],
    projects: [PROJECT.coachCatalyst, PROJECT.cercle, PROJECT.autobuffy],
    faqs: [
      {
        id: 'ai-services',
        question: 'What data science services do you provide?',
        answer:
          'Analysis, predictive modeling, ML solutions, visualization, data engineering, and business-intelligence dashboards aligned to your goals.',
      },
      {
        id: 'ai-tools',
        question: 'Which tools and technologies do you use?',
        answer:
          'Python (Pandas, NumPy, Scikit-learn, TensorFlow), R, SQL, Power BI, Tableau, Spark, and cloud ML services such as AWS SageMaker or Google Vertex AI.',
      },
      {
        id: 'ai-quality',
        question: 'How do you ensure model quality and reliability?',
        answer:
          'Train/test splits, cross-validation, A/B testing where appropriate, and ongoing performance tracking for accuracy and bias.',
      },
      {
        id: 'ai-messy',
        question: 'Can you work with unstructured or messy data?',
        answer:
          'Yes — cleaning and preprocessing for text, images, logs, and time series, plus integration from APIs, IoT, and cloud storage.',
      },
      {
        id: 'ai-dashboards',
        question: 'Do you help with dashboarding and real-time analytics?',
        answer:
          'We build interactive dashboards in Power BI, Tableau, or custom web apps so operators can act on live signals.',
      },
    ],
    cta: defaultCta('an AI system'),
  },

  erp: {
    slug: 'erp',
    hero: {
      eyebrow: 'What We Build · ERP',
      title: 'ERP that matches how',
      highlight: 'you actually operate.',
      description:
        'Centralized enterprise resource systems for partners and client orgs that need finance, inventory, HR, and operations in one coherent architecture — not a maze of disconnected apps.',
    },
    capabilitiesTitle: 'ERP capabilities',
    capabilitiesIntro:
      'We design modules around real workflows, then integrate them so data stays consistent across the business.',
    capabilities: [
      {
        title: 'Core resource planning',
        description:
          'Inventory, procurement, and production planning with clear ownership and audit trails.',
      },
      {
        title: 'Finance & reporting',
        description:
          'Ledgers, invoicing, and operational reporting that leadership can trust without spreadsheet reconciliation.',
      },
      {
        title: 'HR & workforce modules',
        description:
          'People ops, attendance, and role-based access wired into the same system of record.',
      },
      {
        title: 'Integration layer',
        description:
          'APIs and connectors to CRM, e-commerce, and banking rails — so ERP is the hub, not an island.',
      },
      {
        title: 'Migration & cutover',
        description:
          'Legacy extraction, dual-run periods, and staged go-lives that protect day-to-day operations.',
      },
    ],
    processTitle: 'ERP engagement shape',
    processIntro:
      'Discovery first — then modular delivery so each release reduces operational risk.',
    process: [
      {
        title: 'Process mapping',
        description:
          'Document current systems, pain points, and compliance constraints before choosing modules.',
      },
      {
        title: 'Modular build',
        description:
          'Ship high-value domains first; expand when adoption and data quality prove out.',
      },
      {
        title: 'Stabilize & train',
        description:
          'Harden permissions, reporting, and operator training so the system sticks after launch.',
      },
    ],
    tech: ['nodedotjs', 'postgresql', 'react', 'amazonaws', 'docker'],
    projects: [PROJECT.atc, PROJECT.buffyhub, PROJECT.autobuffy],
    faqs: [
      {
        id: 'erp-custom',
        question: 'Do you customize existing ERPs or build from scratch?',
        answer:
          'Both. We extend platforms when they fit, and build bespoke cores when your domain rules make off-the-shelf tooling more expensive than owning the architecture.',
      },
      {
        id: 'erp-migrate',
        question: 'Can you migrate from spreadsheets or legacy ERPs?',
        answer:
          'Yes — with staged data migration, validation scripts, and dual-run windows so operations stay online.',
      },
      {
        id: 'erp-roles',
        question: 'How do you handle roles and permissions?',
        answer:
          'Role-based access designed with your org chart and audit requirements — not a single shared admin account.',
      },
    ],
    cta: defaultCta('an ERP'),
  },

  crm: {
    slug: 'crm',
    hero: {
      eyebrow: 'What We Build · CRM',
      title: 'CRM tuned for',
      highlight: 'pipeline velocity.',
      description:
        'Customer relationship systems that sales, success, and partner teams actually use — clean pipeline stages, account context, and integrations that keep revenue data honest.',
    },
    capabilitiesTitle: 'CRM capabilities',
    capabilitiesIntro:
      'We optimize for adoption: fewer clicks, clearer stages, and data that syncs with the rest of your stack.',
    capabilities: [
      {
        title: 'Pipeline & opportunity tracking',
        description:
          'Stages, forecasts, and ownership rules that match how your revenue team actually sells.',
      },
      {
        title: 'Account & contact intelligence',
        description: 'Unified customer history across deals, tickets, and product usage signals.',
      },
      {
        title: 'Automation & sequences',
        description:
          'Tasking, reminders, and outreach workflows that remove manual follow-up drag.',
      },
      {
        title: 'Integrations',
        description:
          'Email, calendar, billing, and product analytics connected so CRM stays the source of truth.',
      },
      {
        title: 'Partner / channel portals',
        description:
          'Shared visibility for software partners and resellers without exposing the whole internal CRM.',
      },
    ],
    processTitle: 'CRM delivery',
    processIntro: 'Map the revenue motion, then build the system around it.',
    process: [
      {
        title: 'Revenue process workshop',
        description:
          'Align sales, success, and leadership on stages, SLAs, and reporting definitions.',
      },
      {
        title: 'Configure & custom build',
        description:
          'Ship the CRM core, then layer automations and integrations that earn their keep.',
      },
      {
        title: 'Adoption & iteration',
        description:
          'Train teams, measure usage, and refine fields so the CRM does not become shelfware.',
      },
    ],
    tech: ['react', 'nodedotjs', 'postgresql', 'amazonaws', 'stripe'],
    projects: [PROJECT.atc, PROJECT.coachCatalyst, PROJECT.autobuffy],
    faqs: [
      {
        id: 'crm-vs-saas',
        question: 'Should we use Salesforce/HubSpot or a custom CRM?',
        answer:
          'If your motion fits a platform, we implement and integrate it. If your domain logic fights the platform tax, we build a focused CRM that your team will actually open every day.',
      },
      {
        id: 'crm-migrate',
        question: 'Can you migrate from spreadsheets or another CRM?',
        answer:
          'Yes — with field mapping, deduplication, and staged cutover so pipeline history survives the move.',
      },
      {
        id: 'crm-reporting',
        question: 'What reporting do you support?',
        answer:
          'Pipeline health, conversion by stage, owner performance, and partner-sourced revenue — exported or dashboarded to your preference.',
      },
    ],
    cta: defaultCta('a CRM'),
  },

  saas: {
    slug: 'saas',
    hero: {
      eyebrow: 'What We Build · SaaS',
      title: 'SaaS platforms engineered',
      highlight: 'for subscription scale.',
      description:
        'Multi-tenant products with durable tenancy models, billing, roles, and onboarding — built so founders and software partners can grow without rewriting the core every year.',
    },
    capabilitiesTitle: 'SaaS platform work',
    capabilitiesIntro:
      'We treat tenancy, auth, billing, and observability as first-class architecture — not features bolted on later.',
    capabilities: [
      {
        title: 'Multi-tenant architecture',
        description:
          'Isolation models (shared DB, schema-per-tenant, or hybrid) chosen for cost, compliance, and scale.',
      },
      {
        title: 'Auth, roles & onboarding',
        description:
          'Invite flows, RBAC, and first-run experiences that reduce time-to-value for new accounts.',
      },
      {
        title: 'Billing & entitlements',
        description:
          'Stripe-ready plans, metered usage, and feature gates that stay consistent with your pricing.',
      },
      {
        title: 'Admin & operator consoles',
        description:
          'Internal tools for support and ops so your team can manage tenants without engineering tickets.',
      },
      {
        title: 'Growth instrumentation',
        description:
          'Product analytics and lifecycle hooks so product managers can see what ships and what sticks.',
      },
    ],
    processTitle: 'From MVP to durable SaaS',
    processIntro:
      'Ship a credible first release, then harden tenancy and billing as real customers arrive.',
    process: [
      {
        title: 'Product & tenancy design',
        description:
          'Clarify ICP, entitlements, and data isolation before scaffolding the application core.',
      },
      {
        title: 'MVP build',
        description:
          'Core workflows, auth, and billing for early customers — with room to scale the model.',
      },
      {
        title: 'Scale & harden',
        description:
          'Performance, observability, and operational tooling as usage and tenant count grow.',
      },
    ],
    tech: ['nextdotjs', 'nodedotjs', 'postgresql', 'stripe', 'amazonaws', 'docker'],
    projects: [PROJECT.coachCatalyst, PROJECT.cercle, PROJECT.buffyhub],
    faqs: [
      {
        id: 'saas-tenant',
        question: 'How do you approach multi-tenancy?',
        answer:
          'We pick the isolation model from compliance and cost constraints — then encode it in schema, auth, and testing so tenant bleed is structurally hard.',
      },
      {
        id: 'saas-billing',
        question: 'Can you integrate subscription billing?',
        answer:
          'Yes — Stripe and similar processors, with entitlements that stay in sync with plan changes and failed payments.',
      },
      {
        id: 'saas-white-label',
        question: 'Do you support white-label or partner-facing SaaS?',
        answer:
          'We build partner portals and branding layers when channel distribution is part of the go-to-market.',
      },
    ],
    cta: defaultCta('a SaaS product'),
  },

  'custom-software': {
    slug: 'custom-software',
    hero: {
      eyebrow: 'What We Build · Custom Software',
      title: 'Software shaped to',
      highlight: 'your constraints.',
      description:
        'Bespoke systems when off-the-shelf tools force workarounds. We design for your domain rules, integrations, and the teams who will own the codebase after handoff.',
    },
    capabilitiesTitle: 'Where custom wins',
    capabilitiesIntro:
      'We build when the problem is specific enough that generic products become expensive in time and risk.',
    capabilities: [
      {
        title: 'Domain-specific platforms',
        description:
          'Workflows, data models, and permissions that mirror how your industry actually operates.',
      },
      {
        title: 'Internal tools & ops systems',
        description:
          'Project, HR, and operations tooling — like ATC — that remove spreadsheet gravity.',
      },
      {
        title: 'Integration hubs',
        description:
          'Control planes that unify vendors, inventory, and channels when the business spans many systems.',
      },
      {
        title: 'Legacy modernization',
        description:
          'Incremental replacement of brittle systems with clear strangler patterns and rollback plans.',
      },
      {
        title: 'Partner-ready delivery',
        description:
          'Documentation, environments, and handoff so your engineers or ours can keep shipping.',
      },
    ],
    processTitle: 'Custom engagement',
    processIntro: 'Architecture first — then iterative delivery with visible milestones.',
    process: [
      {
        title: 'Problem framing',
        description:
          'Define the bottleneck, success metrics, and build-vs-buy decision with technical honesty.',
      },
      {
        title: 'Architecture & spike',
        description:
          'Prove risky integrations early; lock the shape of the system before full production build.',
      },
      {
        title: 'Iterative delivery',
        description:
          'Ship vertical slices, review with stakeholders, and harden for production ownership.',
      },
    ],
    tech: ['rubyonrails', 'react', 'nodedotjs', 'postgresql', 'amazonaws'],
    projects: [PROJECT.atc, PROJECT.buffyhub, PROJECT.cercle],
    faqs: [
      {
        id: 'custom-when',
        question: 'When should we choose custom software?',
        answer:
          'When domain rules, integrations, or competitive differentiation make SaaS workarounds cost more than owning the system — we help you make that call before writing code.',
      },
      {
        id: 'custom-own',
        question: 'Who owns the IP and codebase?',
        answer:
          'Client-owned IP is the default for build engagements. We document architecture and transfer environments so your team can operate independently.',
      },
      {
        id: 'custom-partner',
        question: 'Can you work as an extension of our engineering team?',
        answer:
          'Yes — dedicated pods that match your rituals, or full ownership when you need a complete delivery partner. See Hire Talent for staffing-shaped needs.',
      },
    ],
    cta: defaultCta('a custom system'),
  },

  cloud: {
    slug: 'cloud',
    hero: {
      eyebrow: 'What We Build · Cloud',
      title: 'Cloud architecture that',
      highlight: 'stays operable.',
      description:
        'Resilient cloud distribution for modern applications — landing zones, migrations, and runtime design that partners can operate without tribal knowledge.',
    },
    capabilitiesTitle: 'Cloud capabilities',
    capabilitiesIntro: 'We design for reliability and cost visibility — not cloud spend theater.',
    capabilities: [
      {
        title: 'Landing zones & foundations',
        description:
          'Accounts, networking, identity, and baseline security so new workloads land cleanly.',
      },
      {
        title: 'Application hosting',
        description:
          'Compute, containers, and serverless patterns matched to traffic shape and team skills.',
      },
      {
        title: 'Data & storage design',
        description: 'Databases, object storage, and backup strategies with clear RPO/RTO targets.',
      },
      {
        title: 'Migration & cutover',
        description:
          'Lift-and-improve migrations with rehearsal, rollback, and measured downtime windows.',
      },
      {
        title: 'Cost & observability',
        description:
          'Tagging, budgets, and monitoring so spend and incidents are visible to engineering and finance.',
      },
    ],
    processTitle: 'Cloud engagement',
    processIntro: 'Assess → design → migrate → operate.',
    process: [
      {
        title: 'Cloud assessment',
        description:
          'Current workloads, risk, and cost drivers mapped before recommending a target architecture.',
      },
      {
        title: 'Target design',
        description:
          'Reference architecture, IaC plan, and security baseline aligned to your compliance needs.',
      },
      {
        title: 'Migrate & operate',
        description:
          'Controlled cutovers, then runbooks and monitoring so the environment stays healthy.',
      },
    ],
    tech: ['amazonaws', 'docker', 'kubernetes', 'terraform', 'github'],
    projects: [PROJECT.autobuffy, PROJECT.buffyhub, PROJECT.coachCatalyst],
    faqs: [
      {
        id: 'cloud-providers',
        question: 'Which cloud providers do you support?',
        answer:
          'AWS, Azure, and GCP. We pick based on your existing footprint, team skills, and workload needs — not brand preference.',
      },
      {
        id: 'cloud-lockin',
        question: 'How do you avoid unnecessary lock-in?',
        answer:
          'Portable packaging (containers), IaC, and clear service boundaries. We use managed services when the operational win is real — and document exit paths.',
      },
      {
        id: 'cloud-cost',
        question: 'Can you help control cloud spend?',
        answer:
          'Yes — rightsizing, reserved capacity where it pays, and visibility so product decisions account for runtime cost.',
      },
    ],
    cta: defaultCta('cloud architecture'),
  },

  automation: {
    slug: 'automation',
    hero: {
      eyebrow: 'What We Build · Automation',
      title: 'Remove manual work from',
      highlight: 'day-to-day operations.',
      description:
        'Automation that earns its keep — integrations, scheduled jobs, and workflow engines that delete repetitive ops without creating a fragile spaghetti of scripts.',
    },
    capabilitiesTitle: 'Automation capabilities',
    capabilitiesIntro:
      'We automate measurable bottlenecks: handoffs, data entry, notifications, and cross-system sync.',
    capabilities: [
      {
        title: 'Workflow automation',
        description:
          'Multi-step business processes orchestrated with clear retries, logging, and human checkpoints.',
      },
      {
        title: 'System integrations',
        description:
          'Connect CRM, ERP, e-commerce, and messaging so data moves without copy-paste.',
      },
      {
        title: 'Ops & rental / logistics flows',
        description:
          'Domain automations like Cercle’s rental management — where manual steps previously dominated.',
      },
      {
        title: 'Coaching & client management',
        description:
          'Automated progress tracking and nutrition-app sync patterns as in Coach Catalyst.',
      },
      {
        title: 'Monitoring & alerting',
        description:
          'Failure visibility so automations fail loudly — not silently — when upstream systems change.',
      },
    ],
    processTitle: 'Automation delivery',
    processIntro: 'Find the costly manual path, automate the proven path, then observe.',
    process: [
      {
        title: 'Bottleneck audit',
        description:
          'Time, error rate, and handoff cost measured so we automate the right work first.',
      },
      {
        title: 'Build & integrate',
        description:
          'Reliable jobs and workflows with auth, idempotency, and rollback where needed.',
      },
      {
        title: 'Observe & expand',
        description:
          'Dashboards and alerts; expand coverage only when the first automations prove stable.',
      },
    ],
    tech: ['nodedotjs', 'python', 'zapier', 'n8n', 'amazonaws', 'redis'],
    projects: [PROJECT.cercle, PROJECT.coachCatalyst, PROJECT.atc],
    faqs: [
      {
        id: 'auto-tools',
        question: 'Do you use Zapier/n8n or custom code?',
        answer:
          'Both. Low-code tools for fast, low-risk workflows; custom services when volume, security, or complexity outgrows the tool.',
      },
      {
        id: 'auto-fragile',
        question: 'How do you keep automations from becoming fragile?',
        answer:
          'Idempotent handlers, structured logging, alerts on failure, and ownership docs — so changes upstream do not silently break ops.',
      },
      {
        id: 'auto-roi',
        question: 'How do you measure ROI?',
        answer:
          'Hours saved, error reduction, and cycle-time improvement against the pre-automation baseline — reported in language finance and ops both accept.',
      },
    ],
    cta: defaultCta('automation'),
  },
};

export function getCapabilityPage(slug: CapabilitySlug): CapabilityPageData {
  return CAPABILITY_PAGES[slug];
}
