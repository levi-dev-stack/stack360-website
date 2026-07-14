'use client';

import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import { type RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { EASE_OUT_EXPO, viewport } from '@/components/shared/motion/variants';
import { cn } from '@/styles/tailwind.utils';

export interface GalleryPhoto {
  src: string;
  alt: string;
  /** Intrinsic pixel size — lets each photo render uncropped with no layout shift. */
  width: number;
  height: number;
  caption?: string;
}

interface MasonryGalleryProps {
  photos: readonly GalleryPhoto[];
}

/** Subtle, deterministic scatter (md+ only) so the collage reads hand-arranged, not gridded. */
const TILT_CLASS = [
  'md:[--tilt:-2.2deg]',
  'md:[--tilt:1.6deg]',
  'md:[--tilt:-1deg]',
  'md:[--tilt:2deg]',
  'md:[--tilt:-1.6deg]',
  'md:[--tilt:1.1deg]',
  'md:[--tilt:-2deg]',
  'md:[--tilt:1.8deg]',
];

export default function MasonryGallery({ photos }: MasonryGalleryProps) {
  const reduced = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const open = useCallback((index: number) => setActiveIndex(index), []);
  const close = useCallback(() => setActiveIndex(null), []);

  return (
    <>
      <div className="columns-1 gap-lg sm:columns-2 lg:columns-3">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.src}
            initial={reduced ? false : { opacity: 0, y: 20, scale: 0.97 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
            viewport={reduced ? undefined : viewport}
            transition={{
              duration: 0.55,
              delay: Math.min(index, 12) * 0.05,
              ease: EASE_OUT_EXPO,
            }}
            className="mb-lg break-inside-avoid"
          >
            <button
              type="button"
              ref={(el) => {
                triggerRefs.current[index] = el;
              }}
              onClick={() => open(index)}
              aria-label={`Expand photo: ${photo.caption ?? photo.alt}`}
              className={cn(
                'group relative block w-full overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 shadow-sm outline-none',
                'transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
                'hover:z-10 hover:shadow-card focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                reduced
                  ? undefined
                  : [
                      TILT_CLASS[index % TILT_CLASS.length],
                      'transform-[rotate(var(--tilt,0deg))]',
                      'hover:transform-[rotate(0deg)_translateY(-6px)_scale(1.02)]',
                    ]
              )}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={cn(
                  'h-auto w-full',
                  reduced ? undefined : 'transition-transform duration-700 group-hover:scale-[1.04]'
                )}
              />

              <span className="pointer-events-none absolute right-sm top-sm flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-neutral-950/60 text-neutral-50 opacity-0 backdrop-blur-sm transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <Expand size={15} strokeWidth={2.25} />
              </span>

              {photo.caption ? (
                <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-linear-to-t from-neutral-950/85 via-neutral-950/40 to-transparent px-md pb-sm pt-xl text-left font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-50 opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {photo.caption}
                </span>
              ) : null}
            </button>
          </motion.div>
        ))}
      </div>

      <Lightbox
        photos={photos}
        index={activeIndex}
        onClose={close}
        onNavigate={setActiveIndex}
        returnFocusRefs={triggerRefs}
      />
    </>
  );
}

interface LightboxProps {
  photos: readonly GalleryPhoto[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
  returnFocusRefs: RefObject<(HTMLButtonElement | null)[]>;
}

function Lightbox({ photos, index, onClose, onNavigate, returnFocusRefs }: LightboxProps) {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const isOpen = index !== null;
  const count = photos.length;

  useEffect(() => setMounted(true), []);

  const goPrev = useCallback(() => {
    onNavigate(((index ?? 0) - 1 + count) % count);
  }, [index, count, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate(((index ?? 0) + 1) % count);
  }, [index, count, onNavigate]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        goPrev();
      } else if (event.key === 'ArrowRight') {
        goNext();
      }
    };

    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose, goPrev, goNext]);

  const handleClose = useCallback(() => {
    const returnTarget = index !== null ? returnFocusRefs.current?.[index] : null;
    onClose();
    returnTarget?.focus();
  }, [index, onClose, returnFocusRefs]);

  if (!mounted) {
    return null;
  }

  const photo = index !== null ? photos[index] : null;

  return createPortal(
    <AnimatePresence>
      {isOpen && photo ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={photo.caption ?? photo.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
          onClick={handleClose}
          className="fixed inset-0 z-100 flex items-center justify-center bg-neutral-950/92 p-lg backdrop-blur-md sm:p-2xl"
        >
          <button
            type="button"
            ref={closeRef}
            onClick={handleClose}
            aria-label="Close"
            className="absolute right-lg top-lg z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-neutral-50 outline-none transition-colors hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-primary"
          >
            <X size={20} />
          </button>

          {count > 1 ? (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  goPrev();
                }}
                aria-label="Previous photo"
                className="absolute left-lg top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-neutral-50 outline-none transition-colors hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-primary sm:left-xl"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  goNext();
                }}
                aria-label="Next photo"
                className="absolute right-lg top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-neutral-50 outline-none transition-colors hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-primary sm:right-xl"
              >
                <ChevronRight size={22} />
              </button>
            </>
          ) : null}

          <motion.figure
            key={photo.src}
            initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
            onClick={(event) => event.stopPropagation()}
            className="flex max-h-full max-w-full flex-col items-center gap-md"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="92vw"
              quality={90}
              className="h-auto max-h-[82vh] w-auto max-w-[92vw] rounded-md object-contain shadow-card"
            />
            {photo.caption ? (
              <figcaption className="flex items-center gap-sm text-center">
                <span className="text-sm font-semibold text-neutral-50">{photo.caption}</span>
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                  {(index ?? 0) + 1} / {count}
                </span>
              </figcaption>
            ) : (
              <figcaption className="font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                {(index ?? 0) + 1} / {count}
              </figcaption>
            )}
          </motion.figure>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
