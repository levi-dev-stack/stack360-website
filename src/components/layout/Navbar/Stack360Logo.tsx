'use client';

import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

/** Icon (32) + gap (8) + "Stack360" wordmark — reserved so hover never shifts layout. */
const LOGO_SLOT_WIDTH = '8.75rem';

export default function Stack360Logo() {
  const [isHovered, setIsHovered] = useState(false);
  const reduced = useReducedMotion();

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
          width: isHovered ? 'auto' : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={
          reduced
            ? { duration: 0 }
            : {
                type: 'spring',
                stiffness: 180,
                damping: 18,
                restDelta: 0.01,
              }
        }
        className="absolute top-1/2 left-10 -translate-y-1/2 overflow-hidden whitespace-nowrap"
        aria-hidden={!isHovered}
      >
        <span className="select-none font-sans text-lg font-bold tracking-tight text-neutral-950">
          Stack<span className="text-primary">360</span>
        </span>
      </motion.div>
    </Link>
  );
}
