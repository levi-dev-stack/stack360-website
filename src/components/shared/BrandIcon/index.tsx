'use client';

import {
  Bot,
  Box,
  Brain,
  CircuitBoard,
  Cloud,
  CloudCog,
  Code2,
  ContactRound,
  Cpu,
  CreditCard,
  Database,
  GitBranch,
  Globe,
  Layers,
  Layout,
  LayoutGrid,
  type LucideIcon,
  Package,
  Palette,
  Server,
  Share2,
  Smartphone,
  Sparkles,
  TestTube2,
  TrendingUp,
  Users,
  Workflow,
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/styles/tailwind.utils';

/**
 * Map app slugs → Simple Icons CDN slugs.
 * Broken/missing CDN brands are remapped (e.g. reactnative → react) or listed in
 * LOCAL_ONLY_SLUGS so we never request a 404 URL.
 */
const SLUG_ALIASES: Record<string, string> = {
  adobe: 'sketch',
  adobeillustrator: 'sketch',
  // No dedicated React Native glyph on Simple Icons — use React.
  reactnative: 'react',
  openjdk: 'openjdk',
  rubyonrails: 'rubyonrails',
  vuedotjs: 'vuedotjs',
  nodedotjs: 'nodedotjs',
  nextdotjs: 'nextdotjs',
  postgresql: 'postgresql',
  dotnet: 'dotnet',
  angular: 'angular',
  github: 'github',
  trello: 'trello',
  redis: 'redis',
  stripe: 'stripe',
  react: 'react',
  flutter: 'flutter',
  figma: 'figma',
  selenium: 'selenium',
  google: 'google',
  python: 'python',
  android: 'android',
  swift: 'swift',
  laravel: 'laravel',
  instagram: 'instagram',
  pytorch: 'pytorch',
  huggingface: 'huggingface',
  kotlin: 'kotlin',
  terraform: 'terraform',
  tensorflow: 'tensorflow',
  kubernetes: 'kubernetes',
  docker: 'docker',
  zapier: 'zapier',
  n8n: 'n8n',
  langchain: 'langchain',
  typescript: 'typescript',
  tailwindcss: 'tailwindcss',
  firebase: 'firebase',
};

/** Brands removed from / blocked on cdn.simpleicons.org — use Lucide only. */
const LOCAL_ONLY_SLUGS = new Set(['amazonaws', 'amazonwebservices', 'aws', 'openai', 'chatgpt']);

/** Category / capability icons — always Lucide, never brand logos. */
const SERVICE_ICONS: Record<string, LucideIcon> = {
  erp: Layers,
  crm: ContactRound,
  ai: Brain,
  training: Cpu,
  integration: Bot,
  mlops: CircuitBoard,
  saas: Package,
  custom: Code2,
  mobile: Smartphone,
  web: Globe,
  cloud: Cloud,
  devops: CloudCog,
  automation: Workflow,
  staff: Users,
};

const FALLBACK_ICONS: Record<string, LucideIcon> = {
  ...SERVICE_ICONS,
  amazonaws: CloudCog,
  amazonwebservices: CloudCog,
  aws: CloudCog,
  docker: CloudCog,
  adobe: Palette,
  adobeillustrator: Palette,
  sketch: Palette,
  kubernetes: CloudCog,
  openjdk: Code2,
  oracle: Code2,
  java: Code2,
  rubyonrails: Code2,
  ruby: Code2,
  postgresql: Database,
  redis: Server,
  trello: LayoutGrid,
  stripe: CreditCard,
  angular: Code2,
  github: GitBranch,
  vuedotjs: Code2,
  nodedotjs: Code2,
  nextdotjs: Code2,
  react: Code2,
  reactnative: Code2,
  kotlin: Smartphone,
  terraform: CloudCog,
  tensorflow: Brain,
  dotnet: Code2,
  flutter: Smartphone,
  figma: Layout,
  selenium: TestTube2,
  google: TrendingUp,
  python: Brain,
  android: Smartphone,
  swift: Smartphone,
  laravel: Code2,
  instagram: Share2,
  openai: Sparkles,
  chatgpt: Sparkles,
  pytorch: Brain,
  huggingface: Brain,
  langchain: Bot,
  typescript: Code2,
  tailwindcss: Palette,
  firebase: Server,
  zapier: Workflow,
  n8n: Workflow,
};

type BrandIconVariant = 'service' | 'tech' | 'stack-dark';

const VARIANT_COLOR: Record<BrandIconVariant, string | undefined> = {
  service: undefined,
  tech: undefined,
  'stack-dark': '9f9f9f',
};

interface BrandIconProps {
  slug: string;
  size?: number;
  variant?: BrandIconVariant;
  className?: string;
}

function resolveSlug(slug: string) {
  return SLUG_ALIASES[slug] ?? slug;
}

function FallbackIcon({
  slug,
  size,
  variant,
  className,
}: {
  slug: string;
  size: number;
  variant: BrandIconVariant;
  className?: string;
}) {
  const resolved = resolveSlug(slug);
  const Icon = FALLBACK_ICONS[slug] ?? FALLBACK_ICONS[resolved] ?? Box;

  return (
    <Icon
      size={size}
      aria-hidden
      className={cn(
        variant === 'service' && 'text-primary',
        variant === 'tech' && 'text-neutral-600',
        variant === 'stack-dark' && 'text-neutral-400',
        className
      )}
    />
  );
}

export default function BrandIcon({
  slug,
  size = 20,
  variant = 'service',
  className,
}: BrandIconProps) {
  const [failed, setFailed] = useState(false);
  const resolved = resolveSlug(slug);
  const color = VARIANT_COLOR[variant];
  const isServiceIcon = slug in SERVICE_ICONS;
  const useLocalOnly = LOCAL_ONLY_SLUGS.has(slug) || LOCAL_ONLY_SLUGS.has(resolved);
  const src = color
    ? `https://cdn.simpleicons.org/${resolved}/${color}`
    : `https://cdn.simpleicons.org/${resolved}`;

  // Service icons, known-missing CDN brands, and failed loads → Lucide.
  if (isServiceIcon || useLocalOnly || failed) {
    return <FallbackIcon slug={slug} size={size} variant={variant} className={className} />;
  }

  return (
    // biome-ignore lint/performance/noImgElement: external brand SVG with onError fallback
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      className={cn('object-contain', className)}
      onError={() => setFailed(true)}
    />
  );
}
