'use client';

import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

/** Icon (32) + gap + stack360-text wordmark — reserved so hover never shifts layout. */
const LOGO_SLOT_WIDTH = '9.25rem';

export default function Stack360Logo({ animateWordmark = true }: { animateWordmark?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const reduced = useReducedMotion();

  // When animation is disabled, always show the wordmark.
  // When animation is enabled, show it only on hover/focus.
  const showWordmark = !animateWordmark || isHovered;
  const shouldAnimate = animateWordmark && !reduced;

  return (
    <Link
      href="/"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      className="group relative flex h-8 shrink-0 items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      style={{ width: LOGO_SLOT_WIDTH }}
    >
      <div className="relative z-10 h-8 w-8 shrink-0 transition-transform duration-200 group-hover:scale-105">
        <Image
          src="/favicon.svg"
          alt="Stack360 Logo"
          width={32}
          height={32}
          priority
          className="h-auto w-auto rounded-sm object-contain"
        />
      </div>

      <motion.div
        initial={false}
        animate={{
          opacity: showWordmark ? 1 : 0,
          scaleX: showWordmark ? 1 : 0,
          x: showWordmark ? 0 : -8,
        }}
        transition={
          shouldAnimate
            ? {
                type: 'spring',
                stiffness: 220,
                damping: 22,
                restDelta: 0.01,
              }
            : { duration: 0 }
        }
        style={{ transformOrigin: 'left center' }}
        className="absolute top-1/2 left-10 -translate-y-1/2 overflow-hidden whitespace-nowrap"
        aria-hidden={!showWordmark}
      >
        <Image
          src="/stack360-text.svg"
          alt=""
          width={108}
          height={20}
          className="h-5 w-auto select-none object-contain"
          priority
        />
      </motion.div>
    </Link>
  );
}
