'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

const ROTATING_PHRASES = ['Deliver Value.', 'Scale Fast.', 'Innovate Daily.', 'Drive Growth.'];

export default function RotatingHighlight() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % ROTATING_PHRASES.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={ROTATING_PHRASES[index]}
          initial={{ y: '-110%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '110%', opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-linear-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent"
        >
          {ROTATING_PHRASES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
