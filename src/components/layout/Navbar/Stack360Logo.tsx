'use client';

import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SITE_NAME } from '@/constants/site';

const LOGO_SLOT_WIDTH = '9.25rem';

export default function Stack360Logo({ animateWordmark = true }: { animateWordmark?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const showWordmark = !animateWordmark || isHovered || !isMounted;
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
      <motion.div
        animate={{
          x: isHovered && shouldAnimate ? -6 : 0,
          scale: isHovered ? 1.04 : 1,
        }}
        transition={
          shouldAnimate
            ? {
                type: 'spring',
                stiffness: 380,
                damping: 26,
                mass: 0.8,
              }
            : { duration: 0 }
        }
        className="relative z-10 h-8 w-8 shrink-0"
      >
        <Image
          src="/favicon.svg"
          alt={`${SITE_NAME} Logo`}
          width={32}
          height={32}
          priority
          className="h-auto w-auto rounded-sm object-contain"
        />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          opacity: showWordmark ? 1 : 0,
          x: showWordmark ? 0 : -22,
          scale: showWordmark ? 1 : 0.94,
          filter: showWordmark ? 'blur(0px)' : 'blur(8px)',
        }}
        transition={
          shouldAnimate
            ? {
                type: 'spring',
                stiffness: 320,
                damping: 24,
                mass: 0.9,
                opacity: { duration: showWordmark ? 0.25 : 0.15 },
                filter: { duration: showWordmark ? 0.25 : 0.15 },
              }
            : { duration: 0 }
        }
        style={{ transformOrigin: 'left center' }}
        className="absolute top-1/2 left-8 -translate-y-1/2 overflow-hidden whitespace-nowrap pl-2"
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
