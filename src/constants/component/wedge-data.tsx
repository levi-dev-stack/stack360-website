import { Globe2, Layers, ShieldAlert, Terminal } from 'lucide-react';

export const MOCK_WEDGES = [
  {
    number: '01',
    tagline: 'Wedge One',
    title: 'AI-First, By Design.',
    description:
      'Agentic systems, RAG architectures, GenAI copilots — already in production. One deployed agent handles 50K+ customer interactions per day across web, app, and SMS.',
    icon: <Terminal />,
    stats: [
      { value: '50K+', label: 'Daily Ints' },
      { value: '85%', label: 'Accuracy' },
      { value: '5K+', label: "Doc's Rad'd" },
    ],
  },
  {
    number: '02',
    tagline: 'Wedge Two',
    title: 'Built. Not Just Billed.',
    description:
      'We own and license our own products — PACT ERP and QuickHCM — running across F&B, Manufacturing, and 1,000+ HR professionals in the GCC. We pay for production at scale ourselves.',
    icon: <Layers />,
    stats: [
      { value: '3', label: 'Live Products' },
      { value: '1K+', label: 'HR Pros' },
      { value: '3', label: 'GCC Markets' },
    ],
  },
  {
    number: '03',
    tagline: 'Wedge Three',
    title: 'Enterprise + Gov Grade.',
    description:
      'UAE Fujairah HR Dept, Abu Dhabi Chamber, Regulated FinTech (StcPay, Bank Respublika), Enterprise health (Almoasa Health KSA). We pass procurement.',
    icon: <ShieldAlert />,
    stats: [
      { value: '15+', label: 'Regulated' },
      { value: '2', label: 'Gov Clients' },
      { value: 'ISO', label: '9001-Aligned' },
    ],
  },
  {
    number: '04',
    tagline: 'Wedge Four',
    title: 'Global Delivery, One Team.',
    description:
      'Lahore engineering hub, UK regional office, and follow-the-sun delivery under one accountable studio. Single roadmap, single PM, single invoice — no handoff chaos.',
    icon: <Globe2 />,
    stats: [
      { value: '2', label: 'Offices' },
      { value: '24/7', label: 'Coverage' },
      { value: '1', label: 'Account Team' },
    ],
  },
];
