import { Cloud, Headphones, Lock, Network, Users } from 'lucide-react';

export const ENTERPRISES_HERO = {
  eyebrow: 'Who We Help',
  title: 'Enterprise-grade security,',
  highlight: 'startup agility.',
  description:
    'Dedicated engineering pods for organizations that cannot afford downtime — compliant architecture, legacy integration, and delivery velocity without enterprise bureaucracy.',
} as const;

export const ENTERPRISES_DIFFERENTIATORS = [
  {
    title: 'SOC 2 & ISO aligned practices',
    description:
      'Access controls, audit logging, secure SDLC, and documentation built for enterprise security reviews from sprint one.',
    icon: <Lock className="h-5 w-5" />,
  },
  {
    title: 'Scalable cloud architecture',
    description:
      'Multi-region deployments, auto-scaling, and cost governance on AWS, Azure, and GCP — designed for peak load, not best-case demos.',
    icon: <Cloud className="h-5 w-5" />,
  },
  {
    title: 'Dedicated delivery teams',
    description:
      'Named pods with continuity — engineers who learn your domain, not a rotating bench of strangers.',
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: 'Legacy integration',
    description:
      'API layers, event buses, and phased migrations that connect ERP, CRM, and mainframe systems without breaking production.',
    icon: <Network className="h-5 w-5" />,
  },
  {
    title: '24/7 production support',
    description:
      'On-call coverage, incident runbooks, and SLA-backed response for mission-critical systems.',
    icon: <Headphones className="h-5 w-5" />,
  },
] as const;

export const ENTERPRISES_TRUST = {
  cloudPartners: ['AWS', 'Azure', 'GCP'],
  clients: ['NovaBank', 'GlobalLogistics', 'FinSync', 'TechCorp', 'Quantia', 'Vertex AI'],
  sla: {
    title: 'Long-term SLA partnerships',
    description:
      'Multi-year engagements with defined uptime targets, escalation paths, and quarterly architecture reviews — guaranteed continuity for programs that outlive any single release.',
  },
} as const;

export const ENTERPRISES_CTA = {
  title: 'Need an enterprise delivery partner?',
  description:
    'Bring us your compliance requirements, integration map, and uptime targets. We will propose a dedicated pod and SLA framework your procurement team can approve.',
  primary: { label: 'Talk to us', href: '/contact' },
  secondary: { label: 'Partner with us', href: '/work-with-us/software-partner' },
} as const;
