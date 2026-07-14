export const LANDING_STATS = [
  { value: '200+', label: 'Projects delivered' },
  { value: '200+', label: 'Active clients' },
  { value: '10+', label: 'Years building' },
  { value: '98%', label: 'Client satisfaction' },
] as const;

export const LANDING_SERVICES = [
  {
    category: 'Core Ecosystems',
    items: [
      {
        title: 'ERP',
        description: 'Centralized enterprise resource engines designed for scalability.',
        icon: 'erp',
        href: '/what-we-build/erp',
        skills: [
          { name: 'Ruby on Rails', slug: 'rubyonrails' },
          { name: '.NET', slug: 'dotnet' },
          { name: 'PostgreSQL', slug: 'postgresql' },
          { name: 'Docker', slug: 'docker' },
        ],
      },
      {
        title: 'CRM',
        description: 'Smarter customer relationship tracking optimized for pipeline velocity.',
        icon: 'crm',
        href: '/what-we-build/crm',
        skills: [
          { name: 'React', slug: 'react' },
          { name: 'Node.js', slug: 'nodedotjs' },
          { name: 'Ruby on Rails', slug: 'rubyonrails' },
          { name: 'PostgreSQL', slug: 'postgresql' },
        ],
      },
      {
        title: 'SaaS',
        description: 'Multi-tenant cloud products engineered for subscription scale.',
        icon: 'saas',
        href: '/what-we-build/saas',
        skills: [
          { name: 'Next.js', slug: 'nextdotjs' },
          { name: 'Node.js', slug: 'nodedotjs' },
          { name: 'Stripe', slug: 'stripe' },
          { name: 'Docker', slug: 'docker' },
        ],
      },
      {
        title: 'Custom Software',
        description: 'Bespoke digital tailoring solving complex foundational bottlenecks.',
        icon: 'custom',
        href: '/what-we-build/custom-software',
        skills: [
          { name: 'React', slug: 'react' },
          { name: 'Python', slug: 'python' },
          { name: 'Ruby on Rails', slug: 'rubyonrails' },
          { name: 'Docker', slug: 'docker' },
        ],
      },
    ],
  },
  {
    category: 'Platform & Infrastructure',
    items: [
      {
        title: 'Mobile Apps',
        description: 'Native-grade portable applications built for iOS and Android environments.',
        icon: 'mobile',
        href: '/what-we-build/mobile-apps',
        skills: [
          { name: 'Flutter', slug: 'flutter' },
          { name: 'React Native', slug: 'reactnative' },
          { name: 'Swift', slug: 'swift' },
          { name: 'Kotlin', slug: 'kotlin' },
        ],
      },
      {
        title: 'Web Apps',
        description: 'High-speed, modular web applications built with dynamic architecture.',
        icon: 'web',
        href: '/what-we-build/web-apps',
        skills: [
          { name: 'React', slug: 'react' },
          { name: 'Next.js', slug: 'nextdotjs' },
          { name: 'Vue.js', slug: 'vuedotjs' },
          { name: 'Angular', slug: 'angular' },
        ],
      },
      {
        title: 'Cloud',
        description: 'Resilient serverless distribution structures mapped to modern frameworks.',
        icon: 'cloud',
        href: '/what-we-build/cloud',
        skills: [
          { name: 'Docker', slug: 'docker' },
          { name: 'Kubernetes', slug: 'kubernetes' },
          { name: 'Terraform', slug: 'terraform' },
          { name: 'AWS', slug: 'amazonaws' },
        ],
      },
      {
        title: 'DevOps',
        description: 'Automated CI/CD pipelines keeping code testing stable.',
        icon: 'devops',
        href: '/what-we-build/devops',
        skills: [
          { name: 'Docker', slug: 'docker' },
          { name: 'Kubernetes', slug: 'kubernetes' },
          { name: 'GitHub', slug: 'github' },
          { name: 'Terraform', slug: 'terraform' },
        ],
      },
      {
        title: 'Automation',
        description: 'Scraping manual tasks out of day-to-day work operations.',
        icon: 'automation',
        href: '/what-we-build/automation',
        skills: [
          { name: 'Python', slug: 'python' },
          { name: 'Node.js', slug: 'nodedotjs' },
          { name: 'Zapier', slug: 'zapier' },
          { name: 'n8n', slug: 'n8n' },
        ],
      },
      {
        title: 'Staff Augmentation',
        description:
          'Embed vetted engineers into your team fast — scale capacity without long-term hiring risk.',
        icon: 'staff',
        href: '/work-with-us/software-partner',
        skills: [
          { name: 'React', slug: 'react' },
          { name: 'Node.js', slug: 'nodedotjs' },
          { name: 'Python', slug: 'python' },
          { name: 'Flutter', slug: 'flutter' },
        ],
      },
    ],
  },
  {
    category: 'Artificial Intelligence & ML',
    items: [
      {
        title: 'AI Solutions',
        description: 'Custom neural integrations and intelligent automated workflows.',
        icon: 'ai',
        href: '/what-we-build/ai-solutions',
        skills: [
          { name: 'Python', slug: 'python' },
          { name: 'PyTorch', slug: 'pytorch' },
          { name: 'OpenAI', slug: 'openai' },
          { name: 'TensorFlow', slug: 'tensorflow' },
        ],
      },
      {
        title: 'Model Training & Tuning',
        description:
          'Custom model architecture, fine-tuning LLMs, and hyperparameter optimization for domain-specific tasks.',
        icon: 'training',
        href: '/what-we-build/ai-solutions',
        skills: [
          { name: 'PyTorch', slug: 'pytorch' },
          { name: 'Hugging Face', slug: 'huggingface' },
          { name: 'Python', slug: 'python' },
          { name: 'TensorFlow', slug: 'tensorflow' },
        ],
      },
      {
        title: 'AI Integration',
        description:
          'Embedding intelligent agents, semantic search, and cognitive features seamlessly into existing products.',
        icon: 'integration',
        href: '/what-we-build/ai-solutions',
        skills: [
          { name: 'OpenAI', slug: 'openai' },
          { name: 'Python', slug: 'python' },
          { name: 'LangChain', slug: 'langchain' },
          { name: 'React', slug: 'react' },
        ],
      },
      {
        title: 'MLOps & Pipelines',
        description:
          'Automated data ingestion, continuous training loops, and scalable inference deployment.',
        icon: 'mlops',
        href: '/what-we-build/ai-solutions',
        skills: [
          { name: 'Docker', slug: 'docker' },
          { name: 'Kubernetes', slug: 'kubernetes' },
          { name: 'Hugging Face', slug: 'huggingface' },
          { name: 'Python', slug: 'python' },
        ],
      },
    ],
  },
] as const;

export const LANDING_TECH_STACK = [
  'react',
  'vuedotjs',
  'nodedotjs',
  'nextdotjs',
  'python',
  'pytorch',
  'openai',
  'angular',
  'rubyonrails',
  'dotnet',
  'swift',
  'android',
  'laravel',
  'openjdk',
] as const;

export const LANDING_PROCESS = [
  {
    step: '01',
    title: 'Discover',
    description:
      'We map goals, constraints, and success metrics — then define a scope your stakeholders can sign off on.',
  },
  {
    step: '02',
    title: 'Architect',
    description:
      'System design, stack selection, and delivery plan — documented before a single sprint starts.',
  },
  {
    step: '03',
    title: 'Build',
    description:
      'Iterative development with QA gates, transparent demos, and weekly velocity you can track.',
  },
  {
    step: '04',
    title: 'Ship & Scale',
    description:
      'Production launch, monitoring, and ongoing optimization — with a team that stays accountable.',
  },
] as const;

export const LANDING_CASE_STUDIES = [
  {
    slug: 'atc',
    tag: 'Operations',
    title: 'ATC — Air Traffic Controller',
    metric: '40% faster',
    metricLabel: 'Project & HR coordination',
    description:
      'A centralized management tool for HR, project management, invoicing, and real-time updates with seamless communication integrations.',
    stack: ['rubyonrails', 'redis', 'kubernetes', 'trello'],
  },
  {
    slug: 'autobuffy',
    tag: 'eCommerce',
    title: 'Autobuffy',
    metric: '2× traffic',
    metricLabel: 'Website speed & growth',
    description:
      'Modern auto-parts commerce for the USA — affordable, high-quality inventory with streamlined search and checkout.',
    stack: ['rubyonrails', 'angular', 'kubernetes', 'postgresql'],
  },
  {
    slug: 'buffyhub',
    tag: 'Marketplace',
    title: 'BuffyHub',
    metric: '12+ channels',
    metricLabel: 'Unified in one dashboard',
    description:
      'Centralized e-commerce operations — inventory, orders, brands, and vendors managed from a single control plane.',
    stack: ['rubyonrails', 'github', 'kubernetes', 'postgresql'],
  },
  {
    slug: 'coach-catalyst',
    tag: 'HealthTech',
    title: 'Coach Catalyst',
    metric: '3× DAU',
    metricLabel: 'Daily active user growth',
    description:
      'Fitness coaching platform with automated client management, progress tracking, and nutrition app integrations.',
    stack: ['rubyonrails', 'vuedotjs', 'kubernetes', 'stripe'],
  },
] as const;

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  rating: number;
  /**
   * Real client photo. Local asset (e.g. '/assets/testimonials/kyle-david.jpg') or a
   * remote URL (its host must be whitelisted in `next.config.ts` → images.remotePatterns).
   * Leave undefined when the client hasn't shared a photo — the carousel shows a fallback
   * user icon instead.
   */
  avatar?: string;
}

export const LANDING_TESTIMONIALS: readonly Testimonial[] = [
  {
    quote:
      'Stack360 built ATC exactly as we envisioned. Their team handled complex HR workflows and real-time updates, significantly improving our internal processes.',
    name: 'Kyle David',
    role: 'CEO',
    company: 'ATC',
    industry: 'Operations · United States',
    rating: 5,
  },
  {
    quote:
      "Stack360's expert developers transformed our auto parts business with Autobuffy. Their tech solutions solved our search and payment challenges, driving more customer engagement.",
    name: 'Chetan',
    role: 'CEO',
    company: 'Autobuffy',
    industry: 'eCommerce · United States',
    rating: 5,
  },
  {
    quote:
      "Stack360's team streamlined our entire e-commerce operations with BuffyHub. Their efficient development solved our data management challenges, boosting our productivity.",
    name: 'Chetan',
    role: 'CEO',
    company: 'BuffyHub',
    industry: 'Marketplace · United States',
    rating: 5,
  },
  {
    quote:
      "Thanks to Stack360's skilled developers, Cercle's platform launched flawlessly. They solved our scalability and automation issues, making rental management seamless.",
    name: 'Ritesh Goyal',
    role: 'CEO',
    company: 'Cercle',
    industry: 'Fashion rental · Global',
    rating: 5,
  },
  {
    quote:
      'Stack360 delivered a robust system that automated our coaching processes. Their seamless integration of nutrition and progress tracking features made our services more efficient.',
    name: 'Kane Sivesind',
    role: 'CEO',
    company: 'Coach Catalyst',
    industry: 'Fitness · United States',
    rating: 5,
  },
];

export const LANDING_CTA = {
  title: 'Struggling to find a trusted tech partner?',
  description:
    'Poor development leads to missed deadlines and frustration. Stack360 delivers scalable, high-performance solutions — on time, every time.',
  primary: { label: 'Explore Our Services', href: '/what-we-build' },
  secondary: { label: 'See Our Work', href: '/our-work/case-studies' },
} as const;
