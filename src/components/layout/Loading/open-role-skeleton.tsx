export const OpenRolesSkeleton = () => {
  return (
    <section className="animate-pulse border-t border-neutral-200 bg-neutral-100/50 py-2xl">
      <div className="site-container">
        {/* Header Skeleton */}
        <div className="mb-lg flex flex-col gap-md sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl space-y-2">
            <div className="h-3 w-28 rounded-md bg-neutral-200" />
            <div className="h-8 w-56 rounded-lg bg-neutral-200 md:w-64" />
          </div>
          <div className="h-6 w-24 rounded-full bg-neutral-200" />
        </div>

        {/* Search Bar Skeleton */}
        <div className="mb-md">
          <div className="h-11 w-full rounded-xl bg-neutral-200/80" />
        </div>

        {/* Filters Skeleton */}
        <div className="mb-xl grid grid-cols-2 gap-xs sm:grid-cols-4 sm:gap-sm">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={`skeleton-${i * i}`} className="h-10 w-full rounded-lg bg-neutral-200/70" />
          ))}
        </div>

        {/* Job Cards Skeleton Stack */}
        <div className="space-y-md">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={`skeleton-${i * i}`}
              className="rounded-xl border border-neutral-200/60 bg-neutral-50 p-lg"
            >
              <div className="flex flex-col gap-md md:flex-row md:items-center md:justify-between">
                {/* Left Side: Title & Subtitles */}
                <div className="space-y-2.5">
                  <div className="h-5 w-48 rounded-md bg-neutral-200 md:w-64" />
                  <div className="h-4 w-36 rounded-md bg-neutral-200/70" />
                  <div className="h-3 w-20 rounded-md bg-neutral-200/50" />
                </div>

                {/* Right Side: Badges & CTA */}
                <div className="flex items-center justify-between gap-md md:justify-end">
                  <div className="h-6 w-16 rounded-md bg-neutral-200" />
                  <div className="h-5 w-24 rounded-md bg-neutral-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenRolesSkeleton;
