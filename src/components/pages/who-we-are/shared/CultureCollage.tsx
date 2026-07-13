'use client';

import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import { EASE_OUT_EXPO, viewport } from '@/components/shared/motion/variants';
import { cn } from '@/styles/tailwind.utils';

export interface CollagePhoto {
  src: string;
  alt: string;
  /** Pre-authored collage placement — looks random, stays SSR-stable. */
  span?: 'sm' | 'md' | 'lg' | 'tall' | 'wide';
  rotate?: '-2' | '-1' | '0' | '1' | '2';
}

interface CultureCollageProps {
  photos: readonly CollagePhoto[];
}

const SPAN_CLASS: Record<NonNullable<CollagePhoto['span']>, string> = {
  sm: 'md:col-span-1 md:row-span-1 aspect-square',
  md: 'md:col-span-1 md:row-span-1 aspect-4/5',
  lg: 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto md:min-h-[22rem]',
  tall: 'md:col-span-1 md:row-span-2 aspect-3/4 md:aspect-auto md:min-h-[28rem]',
  wide: 'md:col-span-2 md:row-span-1 aspect-16/10',
};

const ROTATE_CLASS: Record<NonNullable<CollagePhoto['rotate']>, string> = {
  '-2': 'md:rotate-[-2deg]',
  '-1': 'md:rotate-[-1deg]',
  '0': 'md:rotate-0',
  '1': 'md:rotate-1',
  '2': 'md:rotate-2',
};

export default function CultureCollage({ photos }: CultureCollageProps) {
  const reduced = useReducedMotion();

  return (
    <div className="grid grid-cols-1 gap-md sm:grid-cols-2 md:grid-cols-4 md:gap-lg md:py-md">
      {photos.map((photo, index) => {
        const span = photo.span ?? 'md';
        const rotate = photo.rotate ?? '0';

        return (
          <motion.figure
            key={photo.src}
            initial={reduced ? false : { opacity: 0, y: 18, scale: 0.97 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
            viewport={reduced ? undefined : viewport}
            transition={{
              duration: 0.55,
              delay: Math.min(index, 10) * 0.04,
              ease: EASE_OUT_EXPO,
            }}
            className={cn(
              'group relative z-0 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 shadow-sm transition-[transform,z-index,box-shadow] duration-500 hover:z-10 hover:shadow-card',
              SPAN_CLASS[span],
              reduced ? undefined : ROTATE_CLASS[rotate],
              reduced ? undefined : 'hover:rotate-0'
            )}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.figure>
        );
      })}
    </div>
  );
}
