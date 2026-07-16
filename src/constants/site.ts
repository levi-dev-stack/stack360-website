/** Canonical site origin — used by metadata, sitemap, robots, and JSON-LD. */
// export const SITE_URL = 'https://www.stack360.co';
export const SITE_URL = 'https://stack360static.netlify.app';
export const SITE_NAME = 'Stack360';
/** Page title / brand line from https://www.stack360.co/ */
export const SITE_TAGLINE = 'Your Reliable Software Development Agency';

/** Meta description aligned with the live Stack360 homepage positioning. */
export const SITE_DESCRIPTION =
  'Stack360 provides world-class software development and staff augmentation services. Build faster, scale smarter, and deliver exceptional results with our expert tech talent.';

/** Sales inbox — display value and mailto target. */
export const SITE_EMAIL = 'sales@stack360.co';
export const SITE_EMAIL_HREF = `mailto:${SITE_EMAIL}` as const;

/** UK phone — display, E.164, and tel: link. */
export const SITE_PHONE = '+44 7404350490';
export const SITE_PHONE_E164 = '+447404350490';
export const SITE_PHONE_HREF = `tel:${SITE_PHONE_E164}` as const;

export const SITE_SOCIAL = {
  linkedin: 'https://www.linkedin.com/company/stack360co',
  github: 'https://github.com/stack360co',
  x: 'https://x.com/stack360',
  instagram: 'https://www.instagram.com/stack360co',
  facebook: 'https://www.facebook.com/stack360co',
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
