'use client';

import { ArrowDown } from 'lucide-react';
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
    <nav
      aria-label="Jump to project domain"
      className="rounded-lg border border-neutral-300 bg-neutral-100 p-md md:p-lg"
    >
      <MotionStagger className="flex flex-col gap-md">
        <MotionStaggerItem>
          <div className="flex flex-wrap items-end justify-between gap-sm border-b border-neutral-300 pb-md">
            <div className="min-w-0 space-y-xs">
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
                Domains · {PORTFOLIO_GROUPS.length}
              </p>
              <p className="text-base font-bold tracking-tight text-neutral-900 md:text-lg">
                Jump to a shipped category
              </p>
            </div>
            <p className="ext-pretty text-xs leading-relaxed text-neutral-600">
              Pick a domain to scroll straight to those projects.
            </p>
          </div>
        </MotionStaggerItem>

        <MotionStaggerItem>
          <ul className="flex flex-wrap gap-sm">
            {PORTFOLIO_GROUPS.map((group) => (
              <li key={group.id}>
                <a
                  href={`#${group.id}`}
                  onClick={(event) => handleJump(event, group.id)}
                  className="group inline-flex items-center gap-sm rounded-sm border border-neutral-300 bg-neutral-50 px-md py-sm text-sm font-semibold text-neutral-800 transition-[border-color,background-color,color] duration-200 hover:border-primary hover:bg-white hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {group.category}
                  <ArrowDown
                    size={14}
                    strokeWidth={2.25}
                    aria-hidden
                    className="text-neutral-400 transition-colors group-hover:text-primary"
                  />
                </a>
              </li>
            ))}
          </ul>
        </MotionStaggerItem>
      </MotionStagger>
    </nav>
  );
}
