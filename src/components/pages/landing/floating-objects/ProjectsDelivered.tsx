import FloatingObject from '@/components/shared/FloatingObjects';

const STAT_CARD =
  'rounded-md border border-neutral-200 bg-neutral-50/90 px-sm py-xs shadow-sm backdrop-blur-sm';

export default function ProjectsDelivered() {
  return (
    <FloatingObject
      className="bottom-[27%] left-0"
      floatY={[0, 7, 0]}
      floatDuration={7.2}
      contentClassName={`rotate-2 ${STAT_CARD}`}
    >
      <p className="text-xl font-bold leading-none text-primary">200+</p>
      <p className="mt-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-neutral-500">
        Projects delivered
      </p>
    </FloatingObject>
  );
}
