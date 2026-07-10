'use client';

import type { HTMLMotionProps } from 'motion/react';
import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
import { cn } from '@/styles/tailwind.utils';
import {
  EASE_OUT_EXPO,
  fadeUp,
  motionVariants,
  scaleIn,
  staggerContainer,
  viewport,
} from './variants';

interface MotionStaggerProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
}

export function MotionStagger({ children, className, ...props }: MotionStaggerProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      variants={motionVariants(reduced, staggerContainer)}
      initial="hidden"
      whileInView="show"
      viewport={reduced ? undefined : viewport}
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
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={reduced ? undefined : viewport}
      transition={{ duration: 0.5, delay, ease: EASE_OUT_EXPO }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
