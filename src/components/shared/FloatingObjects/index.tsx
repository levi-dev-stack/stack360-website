'use client';

import { motion } from 'motion/react';
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
  return (
    <motion.div
      variants={floatCard}
      initial="hidden"
      animate="show"
      className={cn('pointer-events-none absolute hidden lg:block', className)}
    >
      <motion.div
        animate={{ y: floatY }}
        transition={{ duration: floatDuration, repeat: Infinity, ease: 'easeInOut' }}
        className={contentClassName}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
