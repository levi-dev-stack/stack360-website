'use client';

import type { HTMLMotionProps } from 'motion/react';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { useMotionVisible } from '@/hooks/use-motion-visible';
import { cn } from '@/styles/tailwind.utils';
import { EASE_OUT_EXPO } from './variants';

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
  const { ref, visible } = useMotionVisible<HTMLElement>();

  return (
    <motion.section
      ref={ref}
      initial={false}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.6, delay, ease: EASE_OUT_EXPO }}
      className={cn('site-section', className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}
