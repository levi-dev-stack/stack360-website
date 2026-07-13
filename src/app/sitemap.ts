import type { MetadataRoute } from 'next';

const BASE = 'https://www.stack360.co';

const ROUTES = [
  '/',
  '/contact',
  '/terms',
  '/privacy',
  '/what-we-build',
  '/what-we-build/erp',
  '/what-we-build/crm',
  '/what-we-build/ai-solutions',
  '/what-we-build/saas',
  '/what-we-build/custom-software',
  '/what-we-build/mobile-apps',
  '/what-we-build/web-apps',
  '/what-we-build/cloud',
  '/what-we-build/devops',
  '/what-we-build/automation',
  '/who-we-help',
  '/who-we-help/industries',
  '/who-we-help/startups',
  '/who-we-help/smes',
  '/who-we-help/enterprises',
  '/our-work',
  '/our-work/case-studies',
  '/our-work/featured-projects',
  '/our-work/client-success-stories',
  '/our-work/blog',
  '/our-work/news',
  '/our-work/learning-sessions',
  '/our-work/faqs',
  '/who-we-are',
  '/who-we-are/history',
  '/who-we-are/culture',
  '/who-we-are/how-we-work',
  '/work-with-us',
  '/work-with-us/software-partner',
  '/work-with-us/hire',
  '/work-with-us/careers',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${BASE}${path === '/' ? '' : path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path.split('/').length <= 2 ? 0.8 : 0.6,
  }));
}
