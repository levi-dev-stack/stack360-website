import type { Metadata } from 'next';
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, SITE_URL } from '@/constants/site';

type PageMetaInput = {
  /** Segment title (template appends `| Stack360`) unless `absoluteTitle` set. */
  title?: string;
  absoluteTitle?: string;
  description: string;
  /** Path for canonical + OG url, e.g. `/contact` or `/`. */
  path: string;
  keywords?: string | string[];
};

/**
 * Build page Metadata with Open Graph, Twitter, and canonical.
 * Nested OG/Twitter do not inherit page title/description — set explicitly.
 */
export function pageMeta({
  title,
  absoluteTitle,
  description,
  path,
  keywords,
}: PageMetaInput): Metadata {
  const canonical = path === '/' ? '/' : path;
  const shareTitle = absoluteTitle ?? (title ? `${title} | ${SITE_NAME}` : SITE_NAME);

  return {
    ...(absoluteTitle ? { title: { absolute: absoluteTitle } } : title ? { title } : {}),
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      locale: 'en_US',
      url: canonical,
      title: shareTitle,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: shareTitle,
      description,
    },
  };
}

/**
 * Central SEO registry for the App Router.
 * Page files: `export const metadata = seo.<key>`
 * Layouts: `export const metadata = seo.root` / `seo.pages`
 */
export const seo = {
  root: {
    title: {
      default: `${SITE_NAME} | ${SITE_TAGLINE}`,
      template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon.svg', type: 'image/svg+xml' },
      ],
      apple: [{ url: '/apple-icon.png' }],
    },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      locale: 'en_US',
      title: `${SITE_NAME} | ${SITE_TAGLINE}`,
      description: SITE_DESCRIPTION,
      url: '/',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${SITE_NAME} | ${SITE_TAGLINE}`,
      description: SITE_DESCRIPTION,
    },
  },

  pages: {
    description:
      'Architecting complex software ecosystems for enterprise scale — ERP, CRM, AI, SaaS, and the platform layer underneath.',
    keywords: 'custom software architecture, software development, ERP, CRM, AI solutions, SaaS',
  },

  home: pageMeta({
    absoluteTitle: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description:
      'Stack360 designs and builds complex software ecosystems — ERP, CRM, AI, SaaS, mobile, web, cloud, and DevOps — for startups, SMEs, and enterprises.',
    path: '/',
  }),

  contact: pageMeta({
    title: 'Contact',
    description:
      'Talk to Stack360 about your next build — partnerships desk for project inquiries and talent requests.',
    path: '/contact',
  }),

  terms: pageMeta({
    title: 'Terms of Use',
    description:
      'Terms governing use of the Stack360 website and engagement with our software architecture services.',
    path: '/terms',
  }),

  privacy: pageMeta({
    title: 'Privacy Policy',
    description:
      'How Stack360 collects and uses contact and inquiry information when you use our website or request talent or project support.',
    path: '/privacy',
  }),

  whatWeBuild: pageMeta({
    title: 'What We Build',
    description:
      'ERP, CRM, AI, SaaS, mobile, web, cloud, DevOps, and automation — systems Stack360 architects end to end.',
    path: '/what-we-build',
  }),

  whatWeBuildErp: pageMeta({
    title: 'ERP Solutions',
    description:
      'Custom ERP architecture for inventory, finance, HR, and operations — built for SMEs and enterprises that outgrew spreadsheets and bolted-on tools.',
    path: '/what-we-build/erp',
  }),

  whatWeBuildCrm: pageMeta({
    title: 'CRM Solutions',
    description:
      'Custom CRM systems for pipeline velocity, account management, and revenue ops — for sales-led teams and software partners.',
    path: '/what-we-build/crm',
  }),

  whatWeBuildAiSolutions: pageMeta({
    title: 'AI Solutions',
    description:
      'Custom AI, ML, NLP, and data engineering — models and pipelines that turn operational data into decisions for product and partner teams.',
    path: '/what-we-build/ai-solutions',
  }),

  whatWeBuildSaas: pageMeta({
    title: 'SaaS Platforms',
    description:
      'Multi-tenant SaaS architecture — billing, roles, onboarding, and scale — for founders and partners shipping subscription products.',
    path: '/what-we-build/saas',
  }),

  whatWeBuildCustomSoftware: pageMeta({
    title: 'Custom Software',
    description:
      'Bespoke software systems that remove foundational bottlenecks — for enterprises, SMEs, and partners who need domain-specific architecture.',
    path: '/what-we-build/custom-software',
  }),

  whatWeBuildMobileApps: pageMeta({
    title: 'Mobile Apps',
    description:
      'Native and cross-platform mobile apps — iOS, Android, React Native, and Flutter — for product teams and software partners.',
    path: '/what-we-build/mobile-apps',
  }),

  whatWeBuildWebApps: pageMeta({
    title: 'Web Apps',
    description:
      'Scalable web applications and sites — React, Next.js, Node, and full-stack delivery for partners and product teams.',
    path: '/what-we-build/web-apps',
  }),

  whatWeBuildCloud: pageMeta({
    title: 'Cloud Architecture',
    description:
      'AWS, Azure, and GCP architecture — migration, resilience, and cost-aware design for product teams and software partners.',
    path: '/what-we-build/cloud',
  }),

  whatWeBuildDevops: pageMeta({
    title: 'DevOps',
    description:
      'CI/CD, containerization, IaC, and cloud operations that make delivery repeatable for engineering partners and product orgs.',
    path: '/what-we-build/devops',
  }),

  whatWeBuildAutomation: pageMeta({
    title: 'Automation',
    description:
      'Workflow automation, RPA-style process removal, and integration bots that cut manual ops for SMEs, enterprises, and partners.',
    path: '/what-we-build/automation',
  }),

  whoWeHelp: pageMeta({
    title: 'Who We Help',
    description:
      'Stack360 partners with startups, SMEs, and enterprises across Healthcare, FinTech, and Logistics.',
    path: '/who-we-help',
  }),

  whoWeHelpIndustries: pageMeta({
    title: 'Industry Software Solutions',
    description:
      'Future-proof software for Healthcare, FinTech, E-commerce, Logistics, and more. HIPAA and PCI-DSS aligned delivery with proven, measurable outcomes.',
    path: '/who-we-help/industries',
    keywords:
      'industry software development, healthcare software, fintech development, ecommerce platform, logistics software, HIPAA compliant software, PCI-DSS development',
  }),

  whoWeHelpStartups: pageMeta({
    title: 'Startup MVP Development',
    description:
      'From zero to funded — build investor-ready MVPs in weeks. Scalable architecture, transparent pricing, and agile delivery for startups that need to move fast.',
    path: '/who-we-help/startups',
    keywords:
      'startup MVP development, investor-ready software, startup software partner, agile MVP, scalable startup architecture, funded startup development',
  }),

  whoWeHelpSmes: pageMeta({
    title: 'SME Digital Transformation',
    description:
      'Scale your business with tailored tech — legacy modernization, automation, and custom software without operational disruption. Proven ROI and flexible engagement models.',
    path: '/who-we-help/smes',
    keywords:
      'SME software development, digital transformation SME, legacy modernization, business automation, custom software SME, ROI software development',
  }),

  whoWeHelpEnterprises: pageMeta({
    title: 'Enterprise Software Development',
    description:
      'Enterprise-grade security with startup agility. SOC 2 and ISO aligned delivery, dedicated teams, legacy integration, and 24/7 support on AWS, Azure, and GCP.',
    path: '/who-we-help/enterprises',
    keywords:
      'enterprise software development, SOC 2 software partner, ISO compliant development, dedicated development team, legacy system integration, enterprise cloud migration',
  }),

  ourWork: pageMeta({
    title: 'Our Work',
    description:
      'Case studies, featured projects, client success stories, and studio insights from Stack360.',
    path: '/our-work',
  }),

  ourWorkCaseStudies: pageMeta({
    title: 'Case Studies',
    description:
      'See how Stack360 helped clients succeed — Autobuffy, Coach Catalyst, ATC, BuffyHub, Cercle, and more.',
    path: '/our-work/case-studies',
  }),

  ourWorkFeaturedProjects: pageMeta({
    title: 'Featured Projects',
    description:
      'Highest-impact systems Stack360 has shipped — engineering depth with measurable outcomes.',
    path: '/our-work/featured-projects',
  }),

  ourWorkClientSuccessStories: pageMeta({
    title: 'Client Success Stories',
    description: 'Partners describing the outcomes they saw after launching with Stack360.',
    path: '/our-work/client-success-stories',
  }),

  ourWorkBlog: pageMeta({
    title: 'Blog',
    description: 'Studio notes on growth, craft, and building digital systems that last.',
    path: '/our-work/blog',
  }),

  ourWorkNews: pageMeta({
    title: 'News',
    description: 'Partnerships, hiring, and campus milestones from the Stack360 studio.',
    path: '/our-work/news',
  }),

  ourWorkLearningSessions: pageMeta({
    title: 'Learning Sessions',
    description: 'Workshops and practice sessions that sharpen how Stack360 ships software.',
    path: '/our-work/learning-sessions',
  }),

  ourWorkFaqs: pageMeta({
    title: 'FAQs',
    description: 'Answers on Stack360 services, quality, performance, and how engagements work.',
    path: '/our-work/faqs',
  }),

  whoWeAre: pageMeta({
    title: 'Who We Are',
    description: 'History, culture, and how Stack360 ships complex software systems.',
    path: '/who-we-are',
  }),

  whoWeAreHistory: pageMeta({
    title: 'Our History',
    description:
      'From a technical garage to a custom software architecture studio — the Stack360 story.',
    path: '/who-we-are/history',
  }),

  whoWeAreCulture: pageMeta({
    title: 'Our Culture',
    description:
      'A zero-fluff engineering culture — clean execution, architectural honesty, and delivery discipline.',
    path: '/who-we-are/culture',
  }),

  whoWeAreHowWeWork: pageMeta({
    title: 'How We Work',
    description:
      'Daily iterations, architectural planning, and staging discipline — how Stack360 ships systems.',
    path: '/who-we-are/how-we-work',
  }),

  workWithUs: pageMeta({
    title: 'Work With Us',
    description: 'Engage Stack360 as a software partner or explore careers at the studio.',
    path: '/work-with-us',
  }),

  workWithUsSoftwarePartner: pageMeta({
    title: 'Software Partner',
    description:
      'Engage Stack360 as your software partner — staff augmentation and full product delivery for roadmap-critical systems.',
    path: '/work-with-us/software-partner',
  }),

  workWithUsHire: pageMeta({
    title: 'Hire Talent',
    description:
      'Hire vetted full-time remote software engineers — React, Angular, Node, Python, .NET, Java, and more. Shortlists in 2 days.',
    path: '/work-with-us/hire',
  }),

  workWithUsCareers: pageMeta({
    title: 'Careers',
    description:
      'Open roles, internships, and the Stack360 hiring process — join a studio that ships complex systems with discipline.',
    path: '/work-with-us/careers',
  }),
} satisfies Record<string, Metadata>;

export type SeoKey = keyof typeof seo;
