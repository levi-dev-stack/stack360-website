import Image from 'next/image';
import MotionCard from '@/components/shared/motion/MotionCard';
import MotionSection from '@/components/shared/motion/MotionSection';
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from '@/components/shared/motion/MotionStagger';
import PageClosingCta from '@/components/shared/PageClosingCta';
import PageHero from '@/components/shared/PageHero';
import {
  HISTORY_CTA,
  HISTORY_HERO,
  HISTORY_MILESTONES,
  HISTORY_STATS,
  HISTORY_VISION,
} from '@/constants/component/who-we-are-history-data';

export default function HistoryPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow={HISTORY_HERO.eyebrow}
        title={HISTORY_HERO.title}
        highlight={HISTORY_HERO.highlight}
        description={HISTORY_HERO.description}
      />

      <MotionSection className="border-b border-neutral-200 py-2xl">
        <div className="site-container">
          <MotionStagger className="grid grid-cols-2 gap-lg lg:grid-cols-4">
            {HISTORY_STATS.map((stat) => (
              <MotionStaggerItem key={stat.label}>
                <MotionCard className="rounded-lg border border-neutral-200 bg-neutral-50 p-lg text-center shadow-sm">
                  <p className="text-3xl font-black text-primary">{stat.value}</p>
                  <p className="mt-xs font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                    {stat.label}
                  </p>
                </MotionCard>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </MotionSection>

      <MotionSection className="py-2xl">
        <div className="site-container grid grid-cols-1 gap-2xl lg:grid-cols-12">
          <MotionReveal className="lg:col-span-5">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900">Our journey</h2>
            <p className="mt-md max-w-3xl text-sm leading-relaxed text-neutral-600">
              From a focused engineering studio to a global delivery partner — built on shipped
              products, retained clients, and teams that stay accountable after launch.
            </p>
          </MotionReveal>

          <MotionStagger className="space-y-lg lg:col-span-7">
            {HISTORY_MILESTONES.map((milestone) => (
              <MotionStaggerItem key={milestone.title}>
                <MotionCard className="rounded-xl border border-neutral-200 bg-neutral-50 p-lg">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
                    {milestone.year}
                  </span>
                  <h3 className="mt-sm text-lg font-bold text-neutral-900">{milestone.title}</h3>
                  <p className="mt-sm text-sm leading-relaxed text-neutral-600">
                    {milestone.description}
                  </p>
                </MotionCard>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </MotionSection>

      <MotionSection className="border-t border-neutral-200 bg-neutral-100/50 py-2xl">
        <div className="site-container">
          <MotionReveal>
            <MotionCard
              interactive={false}
              className="grid grid-cols-1 items-center gap-xl rounded-xl border border-neutral-200 bg-neutral-50 p-xl lg:grid-cols-12 lg:gap-2xl"
            >
              <div className="relative aspect-4/5 overflow-hidden rounded-lg border border-neutral-200 lg:col-span-4">
                <Image
                  src={HISTORY_VISION.image.src}
                  alt={HISTORY_VISION.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>

              <MotionStagger className="space-y-md lg:col-span-8">
                <MotionStaggerItem>
                  <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                    {HISTORY_VISION.title}
                  </h2>
                </MotionStaggerItem>
                {HISTORY_VISION.paragraphs.map((paragraph) => (
                  <MotionStaggerItem key={paragraph.slice(0, 40)}>
                    <p className="text-sm leading-relaxed text-neutral-600">{paragraph}</p>
                  </MotionStaggerItem>
                ))}
              </MotionStagger>
            </MotionCard>
          </MotionReveal>
        </div>
      </MotionSection>

      <PageClosingCta {...HISTORY_CTA} />
    </div>
  );
}
