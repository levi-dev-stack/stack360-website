/** Canonical site origin — used by metadata, sitemap, robots, and JSON-LD. */
export const SITE_URL = 'https://www.stack360.co';
export const SITE_NAME = 'Stack360';
export const SITE_TAGLINE = 'Custom Software Architecture Studio';

export const SITE_DESCRIPTION =
  'Custom software architecture studio — ERP, CRM, AI, SaaS, cloud, and DevOps for partners and product teams.';

export const SITE_EMAIL = 'sales@stack360.co';
export const SITE_PHONE = '+44 7404350490';
export const SITE_PHONE_E164 = '+447404350490';

export const SITE_SOCIAL = {
  linkedin: 'https://www.linkedin.com/company/stack360co',
  github: 'https://github.com/stack360co',
  x: 'https://x.com/stack360',
} as const;

export const SITE_OFFICES = [
  // {
  //   country: 'Pakistan',
  //   role: 'Global Delivery Center',
  //   streetAddress: '82-G, First Floor, DHA Phase 1',
  //   addressLocality: 'Lahore',
  //   addressRegion: 'Punjab',
  //   addressCountry: 'PK',
  // },
  {
    country: 'United Kingdom',
    role: 'Regional Office',
    streetAddress: '58 St. Johns Road',
    addressLocality: 'Barking',
    addressRegion: 'Essex',
    postalCode: 'IG11 7XL',
    addressCountry: 'GB',
  },
] as const;
