'use client';

import { type UseInViewOptions, useInView, useReducedMotion } from 'motion/react';
import { type RefObject, useEffect, useRef, useState } from 'react';
import { viewport } from '@/components/shared/motion/variants';
import { useCanAnimate } from '@/hooks/use-can-animate';

/**
 * SSR / no-JS / reduced-motion: always visible.
 * With JS: after layout measurement, hide off-screen nodes until they enter view.
 * `ready` prevents a one-frame flash-hide for above-the-fold content.
 */
export function useMotionVisible<T extends Element = HTMLElement>(
  options: UseInViewOptions = viewport
): { ref: RefObject<T | null>; visible: boolean } {
  const ref = useRef<T | null>(null);
  const canAnimate = useCanAnimate();
  const reduced = useReducedMotion();
  const inView = useInView(ref, options);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!canAnimate) {
      return;
    }
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, [canAnimate]);

  const visible = !canAnimate || reduced === true || !ready || inView;

  return { ref, visible };
}
