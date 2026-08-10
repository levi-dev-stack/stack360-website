import BlueprintGrid from '../BlueprintGrid';

export default function InitialLoadingScreen() {
  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-50 selection:bg-primary/20 selection:text-primary">
      <BlueprintGrid />

      <div className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-neutral-50/90 backdrop-blur-md">
        <div className="site-container flex h-18 items-center justify-between gap-xl lg:gap-2xl">
          <div className="flex items-center gap-xs">
            <img
              src="/favicon.svg"
              alt="Stack360 Logo"
              className="h-7 w-7 animate-pulse object-contain opacity-80"
            />
            <img
              src="/stack360-text.svg"
              alt="Stack360"
              className="h-5 animate-pulse object-contain opacity-80"
            />
          </div>

          <div className="hidden h-full flex-1 items-center justify-center gap-md md:flex">
            <div className="h-4 w-16 animate-pulse rounded-md bg-neutral-200/70" />
            <div className="h-4 w-20 animate-pulse rounded-md bg-neutral-200/70" />
            <div className="h-4 w-24 animate-pulse rounded-md bg-neutral-200/70" />
            <div className="h-4 w-16 animate-pulse rounded-md bg-neutral-200/70" />
          </div>

          <div className="flex shrink-0 items-center">
            <div className="hidden h-11 w-28 animate-pulse rounded-sm bg-neutral-200/80 sm:block" />
            <div className="h-11 w-11 animate-pulse rounded-sm bg-neutral-200/80 md:hidden" />
          </div>
        </div>
      </div>

      <main className="relative z-10 flex flex-1 items-center justify-center p-md">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,var(--token-neutral-50)_0%,var(--token-neutral-50)_40%,color-mix(in_srgb,var(--token-neutral-100)_55%,var(--token-neutral-50))_100%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,color-mix(in_srgb,var(--token-primary)_12%,transparent),transparent_70%)]"
        />

        <div className="relative z-10 flex flex-col items-center justify-center space-y-lg text-center">
          <div className="relative flex items-center justify-center">
            <div className="absolute h-20 w-20 animate-ping rounded-full bg-primary/10 transition-all duration-1000" />

            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-neutral-200 bg-white p-md shadow-md">
              <img
                src="/favicon.svg"
                alt="Stack360 Icon"
                className="h-full w-full animate-pulse object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col items-center space-y-sm">
            <img
              src="/stack360-text.svg"
              alt="Stack360"
              className="h-6 object-contain opacity-90"
            />

            <div className="h-1 w-32 overflow-hidden rounded-full bg-neutral-200">
              <div className="h-full w-full origin-left-right animate-[pulse_1.5s_ease-in-out_infinite] rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
