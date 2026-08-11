export default function GeneralLoadingScreen() {
  return (
    <div className="relative w-full overflow-hidden py-2xl">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,var(--token-neutral-50)_0%,var(--token-neutral-50)_40%,color-mix(in_srgb,var(--token-neutral-100)_55%,var(--token-neutral-50))_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,color-mix(in_srgb,var(--token-primary)_10%,transparent),transparent_65%)]"
      />

      <div className="site-container relative z-10 space-y-2xl">
        <div className="max-w-3xl space-y-md">
          <div className="h-3 w-28 animate-pulse rounded-full bg-primary/20" />
          <div className="h-10 w-3/4 animate-pulse rounded-lg bg-neutral-200/80 md:h-12" />
          <div className="space-y-sm pt-xs">
            <div className="h-4 w-full animate-pulse rounded-md bg-neutral-200/60" />
            <div className="h-4 w-5/6 animate-pulse rounded-md bg-neutral-200/60" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-lg sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: Skeleton placeholder items
              key={idx}
              className="flex h-full min-h-88 flex-col justify-between rounded-xl border border-neutral-200 bg-neutral-50 p-lg shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 animate-pulse rounded-md bg-neutral-200/80" />
                  <div className="h-4 w-12 animate-pulse rounded-md bg-neutral-200/60" />
                </div>

                <div className="mt-lg space-y-sm">
                  <div className="h-5 w-2/3 animate-pulse rounded-md bg-neutral-200/80" />
                  <div className="h-4 w-full animate-pulse rounded-md bg-neutral-200/60" />
                  <div className="h-4 w-4/5 animate-pulse rounded-md bg-neutral-200/60" />
                </div>
              </div>

              <div className="mt-xl border-t border-neutral-200/60 pt-md">
                <div className="flex flex-wrap gap-xs">
                  <div className="h-6 w-16 animate-pulse rounded-md bg-neutral-200/70" />
                  <div className="h-6 w-20 animate-pulse rounded-md bg-neutral-200/70" />
                  <div className="h-6 w-14 animate-pulse rounded-md bg-neutral-200/70" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
