import FloatingObject from '@/components/shared/FloatingObjects';

export default function AccuracyStat() {
  return (
    <FloatingObject
      className="right-0 bottom-[21%]"
      floatY={[0, 9, 0]}
      floatDuration={6.1}
      contentClassName="-rotate-2 rounded-md border border-neutral-200 bg-neutral-50/90 px-sm py-xs text-right shadow-sm backdrop-blur-sm"
    >
      <p className="text-xl font-bold leading-none text-primary-tint">99.8%</p>
      <p className="mt-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-neutral-500">
        Accuracy
      </p>
    </FloatingObject>
  );
}
