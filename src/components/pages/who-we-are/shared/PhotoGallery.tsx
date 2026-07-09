'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import MotionCard from '@/components/shared/motion/MotionCard';
import { EASE_OUT_EXPO, viewport } from '@/components/shared/motion/variants';

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
}

interface PhotoGalleryProps {
  photos: readonly GalleryPhoto[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const reduced = useReducedMotion();

  return (
    <div className="grid grid-cols-1 gap-lg sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo, index) => (
        <motion.figure
          key={photo.src}
          initial={reduced ? false : { opacity: 0, y: 16, scale: 0.98 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
          viewport={reduced ? undefined : viewport}
          transition={{ duration: 0.5, delay: index * 0.05, ease: EASE_OUT_EXPO }}
          className="group"
        >
          <MotionCard className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 shadow-sm">
            <div className="relative aspect-4/3 overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <figcaption className="border-t border-neutral-200 px-md py-sm font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500">
              {photo.caption}
            </figcaption>
          </MotionCard>
        </motion.figure>
      ))}
    </div>
  );
}
