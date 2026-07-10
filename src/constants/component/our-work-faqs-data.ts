/** Our Work FAQs — sourced from stack360.co homepage. */

export const FAQS_HERO = {
  eyebrow: 'Our Work',
  title: 'Frequently asked',
  highlight: 'questions.',
  description:
    'Straightforward answers on services, delivery, quality, and how we partner — so you know what working with Stack360 looks like before the first call.',
} as const;

export const FAQS = [
  {
    id: 'web-services',
    question: 'What web development services are part of your offerings?',
    answer:
      'We offer a wide range of web development services including website design, CMS development, eCommerce development, and more — engineered for a seamless online experience.',
  },
  {
    id: 'mobile',
    question: 'Can you develop both Android and iOS apps?',
    answer:
      'Absolutely. Our mobile developers build high-quality, fully functional Android and iOS apps — native and cross-platform — tailored to your business needs.',
  },
  {
    id: 'uiux',
    question: 'Can your team design a user-friendly interface for my website or app?',
    answer:
      'Yes. Our graphic and UI/UX designers create attractive, intuitive, easy-to-navigate interfaces so users get the best experience possible.',
  },
  {
    id: 'marketing',
    question: 'What types of marketing strategies do you specialize in?',
    answer:
      'Our marketers specialize across digital marketing, content marketing, social media marketing, and SEO — to improve online presence and reach.',
  },
  {
    id: 'performance',
    question: 'Can Stack360 help improve the performance of my existing website?',
    answer:
      'Definitely. We enhance performance with modern technologies and optimization techniques — improving speed, SEO, and user engagement.',
  },
  {
    id: 'quality',
    question: 'How do you ensure the quality of your projects?',
    answer:
      'Quality is a top priority. We implement thorough manual and automated testing — including tools like Selenium — so each project meets and exceeds industry standards and client expectations.',
  },
] as const;

export const FAQS_CTA = {
  title: 'Still have questions?',
  description:
    'Tell us what you are building. We will follow up with a scoped next step — not a generic brochure.',
  primary: { label: 'Talk to us', href: '/contact' },
  secondary: { label: 'See case studies', href: '/our-work/case-studies' },
} as const;
