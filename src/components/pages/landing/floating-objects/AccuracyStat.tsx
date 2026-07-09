import FloatingObject from '@/components/shared/FloatingObjects';

export default function AccuracyStat() {
  return (
    <FloatingObject
      className="right-[6%] bottom-[18%] text-right xl:right-[9%]"
      floatY={[0, 12, 0]}
      floatDuration={5.5}
    >
      <p className="text-3xl font-bold text-primary-tint">99.8%</p>
      <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Accuracy</p>
    </FloatingObject>
  );
}
