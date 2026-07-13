/** Our Work — case studies & featured projects (sourced from stack360.co). */

export const CASE_STUDIES_HERO = {
  eyebrow: 'Our Work',
  title: 'Our success',
  highlight: 'stories.',
  description:
    'We recruit top-tier tech talent, streamline development cycles, and deliver measurable outcomes — from eCommerce and fitness platforms to internal operations systems.',
} as const;

export const CASE_STUDIES = [
  {
    slug: 'autobuffy',
    featured: true,
    tag: 'eCommerce',
    title: 'Autobuffy',
    subtitle: 'Selling auto parts in the USA',
    metric: '2×',
    metricLabel: 'Website speed & traffic',
    description:
      'Autobuffy was created to make it easier to find affordable, high-quality auto parts using modern technology in the USA — with streamlined search and checkout.',
    stack: ['rubyonrails', 'angular', 'amazonaws', 'postgresql'],
    href: '/our-work/case-studies/autobuffy',
  },
  {
    slug: 'coach-catalyst',
    featured: true,
    tag: 'HealthTech',
    title: 'Coach Catalyst',
    subtitle: 'Fitness management',
    metric: '3×',
    metricLabel: 'Daily active users',
    description:
      'Streamlining fitness coaching with automated client management, progress tracking, and seamless integration with nutrition apps.',
    stack: ['rubyonrails', 'vuedotjs', 'amazonaws', 'stripe', 'postgresql'],
    href: '/our-work/case-studies/coach-catalyst',
  },
  {
    slug: 'atc',
    featured: true,
    tag: 'Operations',
    title: 'ATC — Air Traffic Controller',
    subtitle: 'Project & HR management',
    metric: '40%',
    metricLabel: 'Faster project & HR coordination',
    description:
      'ATC is a management tool developed for project handling and HR management — centralized workflows, invoicing, and real-time updates with communication integrations.',
    stack: ['rubyonrails', 'redis', 'amazonaws', 'stripe', 'trello'],
    href: '/our-work/case-studies/atc',
  },
  {
    slug: 'buffyhub',
    featured: true,
    tag: 'Marketplace',
    title: 'BuffyHub',
    subtitle: 'Unified e-commerce control plane',
    metric: '12+',
    metricLabel: 'Marketplaces in one dashboard',
    description:
      'BuffyHub is a unified e-commerce platform that centralizes inventory, orders, brands, and vendors into one place.',
    stack: ['rubyonrails', 'github', 'amazonaws', 'postgresql'],
    href: '/our-work/case-studies/buffyhub',
  },
  {
    slug: 'cercle',
    featured: true,
    tag: 'Fashion',
    title: 'Cercle',
    subtitle: 'Sustainable fashion rental',
    metric: '60%',
    metricLabel: 'Reduction in manual workflows',
    description:
      'Cercle is a fashion rental platform promoting sustainability by allowing users to borrow luxury fashion instead of buying — with scalable automation for rental management.',
    stack: ['rubyonrails', 'nextdotjs', 'amazonaws', 'stripe'],
    href: '/our-work/featured-projects#cercle',
  },
] as const;

export const FEATURED_PROJECTS_HERO = {
  eyebrow: 'Our Work',
  title: 'Featured',
  highlight: 'projects.',
  description:
    'Highest-impact systems we have shipped — selected for engineering depth, measurable outcomes, and production durability.',
} as const;

export const FEATURED_PROJECTS = CASE_STUDIES.filter((c) => c.featured);

export const SUCCESS_STORIES_HERO = {
  eyebrow: 'Our Work',
  title: 'Client success',
  highlight: 'in their words.',
  description:
    'Real returns from partners who trusted Stack360 with complex products — from internal ops tools to consumer platforms.',
} as const;

export const SUCCESS_STORIES = [
  {
    quote:
      'Stack360 built ATC exactly as we envisioned. Their team handled complex HR workflows and real-time updates, significantly improving our internal processes.',
    name: 'Kyle David',
    role: 'CEO',
    company: 'ATC',
    industry: 'Operations · United States',
    metric: '40% faster coordination',
    relatedSlug: 'atc',
    relatedHref: '/our-work/case-studies/atc',
  },
  {
    quote:
      "Stack360's expert developers transformed our auto parts business with Autobuffy. Their tech solutions solved our search and payment challenges, driving more customer engagement.",
    name: 'Chetan',
    role: 'CEO',
    company: 'Autobuffy',
    industry: 'eCommerce · United States',
    metric: '2× speed & traffic',
    relatedSlug: 'autobuffy',
    relatedHref: '/our-work/case-studies/autobuffy',
  },
  {
    quote:
      "Stack360's team streamlined our entire e-commerce operations with BuffyHub. Their efficient development solved our data management challenges, boosting our productivity.",
    name: 'Chetan',
    role: 'CEO',
    company: 'BuffyHub',
    industry: 'Marketplace · United States',
    metric: '12+ channels unified',
    relatedSlug: 'buffyhub',
    relatedHref: '/our-work/case-studies/buffyhub',
  },
  {
    quote:
      "Thanks to Stack360's skilled developers, Cercle's platform launched flawlessly. They solved our scalability and automation issues, making rental management seamless.",
    name: 'Ritesh Goyal',
    role: 'CEO',
    company: 'Cercle',
    industry: 'Fashion rental · Global',
    metric: '60% fewer manual workflows',
    relatedSlug: 'cercle',
    relatedHref: '/our-work/featured-projects#cercle',
  },
  {
    quote:
      'Stack360 delivered a robust system that automated our coaching processes. Their seamless integration of nutrition and progress tracking features made our services more efficient.',
    name: 'Kane Sivesind',
    role: 'CEO',
    company: 'Coach Catalyst',
    industry: 'Fitness · United States',
    metric: '3× daily active users',
    relatedSlug: 'coach-catalyst',
    relatedHref: '/our-work/case-studies/coach-catalyst',
  },
] as const;
