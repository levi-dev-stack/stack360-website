'use client';

import {
  Box,
  Brain,
  CloudCog,
  Code2,
  CreditCard,
  Database,
  GitBranch,
  Layout,
  LayoutGrid,
  type LucideIcon,
  Palette,
  Server,
  Share2,
  Smartphone,
  TestTube2,
  TrendingUp,
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/styles/tailwind.utils';

const SLUG_ALIASES: Record<string, string> = {
  amazonaws: 'kubernetes',
  amazonwebservices: 'kubernetes',
  adobe: 'sketch',
  adobeillustrator: 'sketch',
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
};

const FALLBACK_ICONS: Record<string, LucideIcon> = {
  amazonaws: CloudCog,
  amazonwebservices: CloudCog,
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
  const src = color
    ? `https://cdn.simpleicons.org/${resolved}/${color}`
    : `https://cdn.simpleicons.org/${resolved}`;

  if (failed) {
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
