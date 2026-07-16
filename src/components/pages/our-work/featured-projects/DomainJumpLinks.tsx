'use client';

import { useReducedMotion } from 'motion/react';
import { type MouseEvent, useEffect } from 'react';
import { MotionStagger, MotionStaggerItem } from '@/components/shared/motion/MotionStagger';
import { PORTFOLIO_GROUPS } from '@/constants/component/our-work-portfolio-data';

function scrollToDomainSection(id: string, smooth: boolean) {
  const target = document.getElementById(id);
  if (!target) {
    return;
  }

  target.scrollIntoView({
    behavior: smooth ? 'smooth' : 'instant',
    block: 'start',
  });

  window.history.replaceState(null, '', `#${id}`);
}

export default function DomainJumpLinks() {
  const reduced = useReducedMotion();
  const smooth = !reduced;

  const handleJump = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    scrollToDomainSection(id, smooth);
  };

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      scrollToDomainSection(hash, smooth);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [smooth]);

  return (
    <MotionStagger className="flex flex-wrap items-center gap-sm">
      <MotionStaggerItem>
        <span className="mr-xs font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-500">
          Domains
        </span>
      </MotionStaggerItem>
      {PORTFOLIO_GROUPS.map((group) => (
        <MotionStaggerItem key={group.id}>
          <a
            href={`#${group.id}`}
            onClick={(event) => handleJump(event, group.id)}
            className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-md py-xs text-xs font-semibold text-neutral-700 transition-colors hover:border-primary/40 hover:text-primary"
          >
            {group.category}
          </a>
        </MotionStaggerItem>
      ))}
    </MotionStagger>
  );
}
