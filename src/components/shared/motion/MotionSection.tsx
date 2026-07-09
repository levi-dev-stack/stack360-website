'use client';

import type { HTMLMotionProps } from 'motion/react';
import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { cn } from '@/styles/tailwind.utils';
import { EASE_OUT_EXPO, viewport } from './variants';

interface MotionSectionProps extends HTMLMotionProps<'section'> {
  children: ReactNode;
  delay?: number;
}

export default function MotionSection({
  children,
  className,
  delay = 0,
  ...props
}: MotionSectionProps) {
  const reduced = useReducedMotion();

  return (
    <motion.section
      initial={reduced ? false : { opacity: 0, y: 32 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={reduced ? undefined : viewport}
      transition={{ duration: 0.6, delay, ease: EASE_OUT_EXPO }}
      className={cn('site-section', className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}
