export const CULTURE_HERO = {
  eyebrow: 'Who We Are',
  title: 'A workplace built for',
  highlight: 'craft and collaboration.',
  description:
    'We thrive on diversity, straightforward problem-solving, and environments where engineers do their best work — in the hall, the meeting room, and the spaces between.',
} as const;

export const CULTURE_GOAL = {
  title: 'Our goal',
  paragraphs: [
    'At Stack360, our aim is simple: boost your business success. We deliver solutions that streamline processes, improve efficiency, and strengthen your digital presence.',
    'We pride ourselves on a straightforward approach to problem-solving — simplifying complexity and offering clear, actionable insight so your business reaches its full potential.',
    'Ultimately, we foster long-term partnerships. We aim to be more than a vendor; we want to be part of your success story, aligning our work with your objectives so you stay ahead in a fast-paced world.',
  ],
} as const;

export const CULTURE_OFFICE_PHOTOS = [
  {
    src: '/assets/who-we-are/office/hr-department.png',
    alt: 'Stack360 HR department workspace',
    caption: 'HR & operations',
  },
  {
    src: '/assets/who-we-are/office/dev-hall.png',
    alt: 'Developers working in the main engineering hall',
    caption: 'Engineering hall',
  },
  {
    src: '/assets/who-we-are/office/dev-hall-way.png',
    alt: 'Development hallway at Stack360 Lahore office',
    caption: 'Dev corridor',
  },
  {
    src: '/assets/who-we-are/office/meeting-room.png',
    alt: 'Team meeting room for architecture reviews',
    caption: 'Meeting room',
  },
  {
    src: '/assets/who-we-are/office/gaming-area.png',
    alt: 'Recreation and gaming area for team breaks',
    caption: 'Recreation space',
  },
  {
    src: '/assets/who-we-are/office/tour-2.png',
    alt: 'Office tour showing collaborative workspace',
    caption: 'Studio tour',
  },
  {
    src: '/assets/who-we-are/office/collision.png',
    alt: 'Leadership collaboration session',
    caption: 'Leadership sync',
  },
  {
    src: '/assets/who-we-are/office/collision-haider.png',
    alt: 'Technical leadership discussion',
    caption: 'Technical review',
  },
] as const;

/** PicsArt-style collage — placement is intentionally irregular, not sectioned by name. */
export const CULTURE_COLLAGE_PHOTOS = [
  {
    src: '/assets/culture/tour.JPG',
    alt: 'Stack360 team on an outdoor retreat holding the company banner',
    span: 'wide' as const,
    rotate: '-1' as const,
  },
  {
    src: '/assets/culture/IMG_3329.jpg',
    alt: 'Two Stack360 teammates in the studio lobby',
    span: 'tall' as const,
    rotate: '2' as const,
  },
  {
    src: '/assets/culture/DSC_0144.JPG',
    alt: 'Stack360 team members posing in the office',
    span: 'md' as const,
    rotate: '-2' as const,
  },
  {
    src: '/assets/culture/IMG_5568.jpg',
    alt: 'Team members collaborating on laptops during a studio session',
    span: 'tall' as const,
    rotate: '1' as const,
  },
  {
    src: '/assets/culture/DSC_0208.JPG',
    alt: 'Large Stack360 team group photo in the office',
    span: 'lg' as const,
    rotate: '0' as const,
  },
  {
    src: '/assets/culture/DSC_0062.JPG',
    alt: 'Stack360 teammates in traditional attire at the office',
    span: 'md' as const,
    rotate: '1' as const,
  },
  {
    src: '/assets/culture/IMG_5569.jpg',
    alt: 'Two Stack360 colleagues sharing a casual moment',
    span: 'sm' as const,
    rotate: '-1' as const,
  },
  {
    src: '/assets/culture/DSC_0149.JPG',
    alt: 'Two Stack360 teammates at a desk in the studio',
    span: 'wide' as const,
    rotate: '2' as const,
  },
] as const;

export const CULTURE_FOUNDER = {
  name: 'Azmat Rana',
  role: 'CEO & Founder',
  image: {
    src: '/assets/who-we-are/leaders/azmat-rana.png',
    alt: 'Azmat Rana, CEO and Founder of Stack360',
  },
  quote:
    'Our team works tirelessly to develop solutions that meet immediate needs and ensure long-term success for every partner we serve.',
} as const;

export const CULTURE_CTA = {
  title: 'Culture that ships',
  description:
    'See how collaboration, craft, and accountability translate into the delivery model we bring to every client engagement.',
  primary: { label: 'How we work', href: '/who-we-are/how-we-work' },
  secondary: { label: 'Talk to us', href: '/contact' },
} as const;
