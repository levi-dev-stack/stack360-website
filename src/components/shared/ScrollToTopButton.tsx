'use client';

import { ChevronUp } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';
import { EASE_OUT_EXPO } from '@/components/shared/motion/variants';

const SHOW_AFTER_PX = 320;

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={reduced ? false : { opacity: 0, y: 10, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduced ? undefined : { opacity: 0, y: 10, scale: 0.92 }}
          transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
          whileTap={
            reduced
              ? undefined
              : {
                  scale: 0.93,
                  y: 1,
                  transition: { duration: 0.05 },
                }
          }
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to top"
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-lg border-2 border-neutral-300 bg-neutral-50 text-neutral-900 shadow-sm transition-colors hover:border-neutral-500 hover:bg-white active:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <ChevronUp size={20} strokeWidth={2.5} aria-hidden />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
