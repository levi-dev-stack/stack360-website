export const LANDING_STATS = [
  { value: '200+', label: 'Projects delivered' },
  { value: '200+', label: 'Active clients' },
  { value: '10+', label: 'Years building' },
  { value: '98%', label: 'Client satisfaction' },
] as const;

export const LANDING_SERVICES = [
  {
    category: 'Software Development',
    items: [
      {
        title: 'Web Development',
        description:
          'CMS, eCommerce, and custom web platforms engineered for performance, security, and scale.',
        icon: 'nextdotjs',
      },
      {
        title: 'Mobile App Development',
        description:
          'Production-grade Android and iOS apps — native and cross-platform — tailored to your product roadmap.',
        icon: 'flutter',
      },
      {
        title: 'DevOps',
        description:
          'CI/CD pipelines, cloud infrastructure, and observability so releases stay fast and reliable.',
        icon: 'docker',
      },
    ],
  },
  {
    category: 'Design & Solutions',
    items: [
      {
        title: 'UI/UX Design',
        description:
          'Interfaces that are intuitive, accessible, and conversion-aware — not just visually polished.',
        icon: 'figma',
      },
      {
        title: 'Graphics Designing',
        description:
          'Brand systems, marketing assets, and product visuals aligned with your digital experience.',
        icon: 'sketch',
      },
      {
        title: 'Social Media Designing',
        description:
          'Feed-ready creatives, story templates, and campaign visuals built for consistency across every channel.',
        icon: 'instagram',
      },
    ],
  },
  {
    category: 'Support',
    items: [
      {
        title: 'QA & Testing',
        description:
          'Manual and automated testing with Selenium and rigorous release gates before every ship.',
        icon: 'selenium',
      },
      {
        title: 'Digital Marketing',
        description:
          'SEO, content, and social strategies that compound traffic and qualified pipeline over time.',
        icon: 'google',
      },
      {
        title: 'Data Science',
        description:
          'Analytics pipelines, ML models, and decision systems that turn raw data into product leverage.',
        icon: 'python',
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

export const LANDING_TESTIMONIALS = [
  {
    quote:
      'Stack360 built ATC exactly as we envisioned. Their team handled complex HR workflows and real-time updates, significantly improving our internal processes.',
    name: 'Kyle David',
    role: 'CEO',
    company: 'ATC',
    industry: 'Operations · United States',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    rating: 5,
  },
  {
    quote:
      "Stack360's expert developers transformed our auto parts business with Autobuffy. Their tech solutions solved our search and payment challenges, driving more customer engagement.",
    name: 'Chetan',
    role: 'CEO',
    company: 'Autobuffy',
    industry: 'eCommerce · United States',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
  },
  {
    quote:
      "Stack360's team streamlined our entire e-commerce operations with BuffyHub. Their efficient development solved our data management challenges, boosting our productivity.",
    name: 'Chetan',
    role: 'CEO',
    company: 'BuffyHub',
    industry: 'Marketplace · United States',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    rating: 5,
  },
  {
    quote:
      "Thanks to Stack360's skilled developers, Cercle's platform launched flawlessly. They solved our scalability and automation issues, making rental management seamless.",
    name: 'Ritesh Goyal',
    role: 'CEO',
    company: 'Cercle',
    industry: 'Fashion rental · Global',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    rating: 5,
  },
  {
    quote:
      'Stack360 delivered a robust system that automated our coaching processes. Their seamless integration of nutrition and progress tracking features made our services more efficient.',
    name: 'Kane Sivesind',
    role: 'CEO',
    company: 'Coach Catalyst',
    industry: 'Fitness · United States',
    avatar: 'https://randomuser.me/api/portraits/men/61.jpg',
    rating: 5,
  },
] as const;

export const LANDING_CTA = {
  title: 'Struggling to find a trusted tech partner?',
  description:
    'Poor development leads to missed deadlines and frustration. Stack360 delivers scalable, high-performance solutions — on time, every time.',
  primary: { label: 'Explore Our Services', href: '/what-we-build' },
  secondary: { label: 'See Our Work', href: '/our-work/case-studies' },
} as const;
