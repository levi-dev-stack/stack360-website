export default async function NavbarSkeleton() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <header className="relative z-50 w-full border-b border-neutral-200 bg-neutral-50 shadow-xs">
      <div className="site-container flex h-18 items-center justify-between gap-xl lg:gap-2xl">
        {/* Logo Skeleton */}
        <div className="h-8 w-36 rounded-md bg-neutral-200/60 animate-pulse" />

        {/* Desktop Links Skeleton */}
        <div className="hidden h-full flex-1 items-center justify-center gap-md md:flex">
          <div className="h-4 w-16 rounded-md bg-neutral-200/60 animate-pulse" />
          <div className="h-4 w-20 rounded-md bg-neutral-200/60 animate-pulse" />
          <div className="h-4 w-24 rounded-md bg-neutral-200/60 animate-pulse" />
          <div className="h-4 w-16 rounded-md bg-neutral-200/60 animate-pulse" />
        </div>

        {/* CTA Button Skeleton */}
        <div className="flex shrink-0 items-center">
          <div className="hidden h-11 w-28 rounded-sm bg-neutral-200/60 animate-pulse sm:block" />
          <div className="h-11 w-11 rounded-sm bg-neutral-200/60 animate-pulse md:hidden" />
        </div>
      </div>
    </header>
  );
}
