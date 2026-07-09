import { cn } from '@/styles/tailwind.utils';

interface BlueprintGridProps {
  className?: string;
}

export default function BlueprintGrid({ className }: BlueprintGridProps) {
  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 opacity-[0.35]', className)}
      style={{
        backgroundImage:
          'linear-gradient(to right, var(--token-neutral-200) 1px, transparent 1px), linear-gradient(to bottom, var(--token-neutral-200) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    />
  );
}
