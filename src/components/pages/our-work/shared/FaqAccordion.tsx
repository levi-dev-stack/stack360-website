'use client';

import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useId, useState } from 'react';
import { EASE_OUT_EXPO } from '@/components/shared/motion/variants';
import { cn } from '@/styles/tailwind.utils';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: readonly FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const baseId = useId();
  const reduced = useReducedMotion();

  return (
    <div className="divide-y divide-neutral-200 border-y border-neutral-200">
      {items.map((item) => {
        const open = openId === item.id;
        const panelId = `${baseId}-${item.id}-panel`;
        const buttonId = `${baseId}-${item.id}-button`;

        return (
          <div key={item.id} className="py-md">
            <button
              type="button"
              id={buttonId}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenId(open ? null : item.id)}
              className="flex w-full items-start justify-between gap-md text-left"
            >
              <span className="text-base font-bold tracking-tight text-neutral-900">
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: reduced ? 0 : 0.28, ease: EASE_OUT_EXPO }}
                className={cn(
                  'mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border border-neutral-200 text-neutral-600',
                  open && 'border-primary/30 bg-primary/5 text-primary'
                )}
              >
                <ChevronDown size={16} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.section
                  id={panelId}
                  aria-labelledby={buttonId}
                  initial={reduced ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduced ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: EASE_OUT_EXPO }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pt-md pb-sm text-pretty text-sm leading-relaxed text-neutral-600">
                    {item.answer}
                  </p>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
