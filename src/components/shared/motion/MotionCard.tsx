'use client';

import type { HTMLMotionProps } from 'motion/react';
import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
import { cn } from '@/styles/tailwind.utils';
import { EASE_OUT_EXPO } from './variants';

interface MotionCardProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  interactive?: boolean;
}

export default function MotionCard({
  children,
  className,
  interactive = true,
  ...props
}: MotionCardProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      whileHover={
        reduced || !interactive
          ? undefined
          : { y: -4, transition: { duration: 0.25, ease: EASE_OUT_EXPO } }
      }
      whileTap={reduced || !interactive ? undefined : { scale: 0.995 }}
      className={cn(interactive && 'transition-shadow duration-300 hover:shadow-card', className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
