'use client';

import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import { EASE_OUT_EXPO, viewport } from '@/components/shared/motion/variants';

export interface InsightSectionImage {
  src: string;
  alt: string;
}

export interface InsightSection {
  slug: string;
  title: string;
  description: string;
  date: string;
  images: readonly InsightSectionImage[];
}

interface InsightSectionGalleryProps {
  sections: readonly InsightSection[];
}

export default function InsightSectionGallery({ sections }: InsightSectionGalleryProps) {
  const reduced = useReducedMotion();

  return (
    <div className="space-y-2xl">
      {sections.map((section, sectionIndex) => (
        <motion.section
          key={section.slug}
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={reduced ? undefined : viewport}
          transition={{
            duration: 0.55,
            delay: Math.min(sectionIndex, 4) * 0.06,
            ease: EASE_OUT_EXPO,
          }}
          className="space-y-xl"
        >
          <header className="max-w-3xl space-y-sm">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
              {section.date}
            </p>
            <h2 className="text-balance text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
              {section.title}
            </h2>
            <p className="text-pretty text-sm leading-relaxed text-neutral-600">
              {section.description}
            </p>
          </header>

          <div
            className={
              section.images.length === 1
                ? 'grid grid-cols-1'
                : 'grid grid-cols-1 gap-lg md:grid-cols-2'
            }
          >
            {section.images.map((image, imageIndex) => (
              <motion.figure
                key={image.src}
                initial={reduced ? false : { opacity: 0, scale: 0.98 }}
                whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
                viewport={reduced ? undefined : viewport}
                transition={{
                  duration: 0.5,
                  delay: imageIndex * 0.08,
                  ease: EASE_OUT_EXPO,
                }}
                className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50"
              >
                <div
                  className={
                    section.images.length === 1
                      ? 'relative aspect-16/10 md:aspect-[2.2/1]'
                      : 'relative aspect-4/5 sm:aspect-4/3'
                  }
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={section.images.length === 1 ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </motion.figure>
            ))}
          </div>
        </motion.section>
      ))}
    </div>
  );
}
