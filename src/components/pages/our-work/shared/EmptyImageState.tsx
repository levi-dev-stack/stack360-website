import { ImageIcon } from 'lucide-react';
import { cn } from '@/styles/tailwind.utils';

interface EmptyImageStateProps {
  label: string;
  /** Tailwind aspect utility, e.g. "aspect-video" or "aspect-square". */
  aspect?: string;
  className?: string;
}

/**
 * Placeholder shown until real screenshots exist. Dashed frame + centered chip
 * on a faint dotted field so it reads as an intentional slot, not a broken image.
 */
export default function EmptyImageState({
  label,
  aspect = 'aspect-video',
  className,
}: EmptyImageStateProps) {
  return (
    <div
      className={cn(
        'relative flex w-full flex-col items-center justify-center gap-sm overflow-hidden rounded-xl border border-dashed border-neutral-300 bg-neutral-50 text-center',
        aspect,
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(color-mix(in srgb, var(--token-neutral-400) 45%, transparent) 1px, transparent 1px)',
          backgroundSize: '14px 14px',
        }}
      />
      <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 shadow-sm">
        <ImageIcon size={18} aria-hidden className="text-neutral-400" />
      </span>
      <p className="relative font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-500">
        {label}
      </p>
      <p className="relative px-md text-xs text-neutral-500">Screenshot coming soon</p>
    </div>
  );
}
