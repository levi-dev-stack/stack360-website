'use client';

import { useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';

/**
 * Motion entrance animations only after mount, and only when the user
 * allows motion. SSR / no-JS / reduced-motion stay at the visible end state
 * so content is in the HTML and on screen without JavaScript.
 */
export function useCanAnimate(): boolean {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted && reduced === false;
}
