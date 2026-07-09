'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
import { cn } from '@/styles/tailwind.utils';
import { floatCard } from './variants';

interface FloatingObjectProps {
  className?: string;
  contentClassName?: string;
  floatY?: [number, number, number];
  floatDuration?: number;
  children: ReactNode;
}

export default function FloatingObject({
  className,
  contentClassName,
  floatY = [0, -14, 0],
  floatDuration = 6,
  children,
}: FloatingObjectProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      variants={floatCard}
      initial="hidden"
      animate="show"
      className={cn('pointer-events-none absolute z-0 hidden lg:block', className)}
    >
      <motion.div
        animate={reduced ? undefined : { y: floatY }}
        transition={
          reduced ? undefined : { duration: floatDuration, repeat: Infinity, ease: 'easeInOut' }
        }
        className={contentClassName}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
