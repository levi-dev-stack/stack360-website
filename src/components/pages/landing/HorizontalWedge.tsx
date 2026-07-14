'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { WedgeCard, type WedgeCardProps } from '@/components/shared/WedgeCard';
import { useResponsive } from '@/hooks/core/use-responsive';
import { useCanAnimate } from '@/hooks/use-can-animate';

interface HorizontalWedgeTrackProps {
  sectionTitle: string;
  sectionHighlight: string;
  sectionSubtitle: string;
  cards: WedgeCardProps[];
}

type HeadingProps = Omit<HorizontalWedgeTrackProps, 'cards'>;

function WedgeHeading({ sectionTitle, sectionHighlight, sectionSubtitle }: HeadingProps) {
  return (
    <div className="w-full space-y-sm">
      <h2 className="max-w-3xl text-balance text-3xl font-black leading-tight tracking-tight text-neutral-50 md:text-4xl lg:text-5xl">
        {sectionTitle}{' '}
        <span className="font-medium italic text-primary underline decoration-neutral-800 decoration-2 underline-offset-4">
          {sectionHighlight}
        </span>
      </h2>
      <p className="max-w-4xl text-sm leading-relaxed text-neutral-400">{sectionSubtitle}</p>
    </div>
  );
}

/**
 * Mobile / tablet / no-JS / reduced-motion: a natural, vertically-scrolling
 * grid. The cards flow to the container width so they fit small screens.
 */
function VerticalWedges({ cards, ...heading }: HorizontalWedgeTrackProps) {
  return (
    <section className="site-section bg-neutral-black py-2xl">
      <div className="site-container space-y-xl">
        <WedgeHeading {...heading} />
        <div className="grid grid-cols-1 gap-lg sm:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, idx) => (
            <WedgeCard key={`${card.title}-${idx}`} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Desktop-only enhancement: the section pins while vertical scroll is
 * translated into horizontal movement across the wedge track. Card height is
 * viewport-relative so the heading never gets clipped on short laptop screens.
 */
function PinnedWedges({ cards, ...heading }: HorizontalWedgeTrackProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxShift, setMaxShift] = useState(0);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxShift]);

  useEffect(() => {
    const updateShift = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;

      if (!viewport || !track) {
        return;
      }

      setMaxShift(Math.max(0, track.scrollWidth - viewport.clientWidth));
    };

    updateShift();

    const resizeObserver = new ResizeObserver(updateShift);
    if (viewportRef.current) {
      resizeObserver.observe(viewportRef.current);
    }
    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener('resize', updateShift);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateShift);
    };
  }, []);

  return (
    <div ref={targetRef} className="relative h-[180vh] bg-neutral-black">
      <div className="sticky top-0 flex h-screen min-h-160 w-full flex-col justify-center overflow-hidden">
        <div className="site-container flex h-full flex-col justify-center gap-[clamp(1.5rem,4vh,2.75rem)]">
          <div className="shrink-0">
            <WedgeHeading {...heading} />
          </div>

          <div ref={viewportRef} className="relative w-full overflow-visible">
            <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-lg">
              {cards.map((card, idx) => (
                <div
                  key={`${card.title}-${idx}`}
                  className="h-[clamp(20rem,56vh,30rem)] w-[min(85vw,26rem)] shrink-0"
                >
                  <WedgeCard {...card} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HorizontalWedgeTrack(props: HorizontalWedgeTrackProps) {
  const canAnimate = useCanAnimate();
  const { isDesktop } = useResponsive();

  if (canAnimate && isDesktop) {
    return <PinnedWedges {...props} />;
  }

  return <VerticalWedges {...props} />;
}
