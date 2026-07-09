import FloatingObject from '@/components/shared/FloatingObjects';

export default function PhoneMockup() {
  return (
    <FloatingObject
      className="left-[5%] bottom-[16%] xl:left-[8%]"
      floatY={[0, 16, 0]}
      floatDuration={7}
      contentClassName="h-40 w-24 rounded-2xl border border-neutral-200 bg-neutral-50 p-sm shadow-card"
    >
      <div className="flex h-full flex-col items-center justify-center gap-sm rounded-xl bg-neutral-100">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-tint/40 text-primary">
          <span className="text-lg">◈</span>
        </div>
        <div className="h-1.5 w-12 rounded-full bg-neutral-300" />
        <div className="h-1.5 w-8 rounded-full bg-neutral-200" />
      </div>
    </FloatingObject>
  );
}
