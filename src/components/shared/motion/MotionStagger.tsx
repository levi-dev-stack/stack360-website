'use client';

import type { HTMLMotionProps } from 'motion/react';
import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
import { useMotionVisible } from '@/hooks/use-motion-visible';
import { cn } from '@/styles/tailwind.utils';
import { EASE_OUT_EXPO, fadeUp, motionVariants, scaleIn, staggerContainer } from './variants';

interface MotionStaggerProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
}

export function MotionStagger({ children, className, ...props }: MotionStaggerProps) {
  const reduced = useReducedMotion();
  const { ref, visible } = useMotionVisible<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      variants={motionVariants(reduced, staggerContainer)}
      initial={false}
      animate={visible ? 'show' : 'hidden'}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface MotionStaggerItemProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  variant?: 'fadeUp' | 'scaleIn';
}

export function MotionStaggerItem({
  children,
  className,
  variant = 'fadeUp',
  ...props
}: MotionStaggerItemProps) {
  const reduced = useReducedMotion();
  const itemVariants =
    variant === 'scaleIn' ? motionVariants(reduced, scaleIn) : motionVariants(reduced, fadeUp);

  return (
    <motion.div variants={itemVariants} className={cn(className)} {...props}>
      {children}
    </motion.div>
  );
}

interface MotionRevealProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
}

export function MotionReveal({ children, className, delay = 0, ...props }: MotionRevealProps) {
  const { ref, visible } = useMotionVisible<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay, ease: EASE_OUT_EXPO }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
