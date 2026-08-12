'use client';

import type { HTMLMotionProps } from 'motion/react';
import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
import { cn } from '@/styles/tailwind.utils';

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
      whileTap={reduced || !interactive ? undefined : { scale: 0.995 }}
      className={cn(interactive && 'transition-all duration-300', className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
