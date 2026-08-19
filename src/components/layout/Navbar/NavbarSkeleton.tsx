import Image from 'next/image';

export default function NavbarSkeleton() {
  return (
    <header className="relative z-50 w-full border-b border-neutral-200 bg-neutral-50 shadow-xs">
      <div className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-neutral-50/90 backdrop-blur-md">
        <div className="site-container flex h-18 items-center justify-between gap-xl lg:gap-2xl">
          <div className="flex items-center gap-x-sm">
            <div className="relative mt-1 h-9 w-9">
              <Image
                src="/favicon.svg"
                alt="Stack360 Logo"
                fill
                sizes="36px"
                className="animate-pulse object-contain opacity-80"
                priority
              />
            </div>
            <Image
              src="/stack360-text.svg"
              alt="Stack360"
              width={108}
              height={20}
              className="h-5 w-auto animate-pulse object-contain opacity-80"
              priority
            />
          </div>

          <div className="hidden h-full flex-1 items-center justify-center gap-lg md:flex">
            <div className="flex items-center gap-xs">
              <div className="h-4 w-28 animate-pulse rounded-md bg-neutral-200/80" />
              <div className="h-2 w-2 animate-pulse rounded-xs bg-neutral-200/60" />
            </div>

            <div className="flex items-center gap-xs">
              <div className="h-4 w-24 animate-pulse rounded-md bg-neutral-200/80" />
              <div className="h-2 w-2 animate-pulse rounded-xs bg-neutral-200/60" />
            </div>

            <div className="flex items-center gap-xs">
              <div className="h-4 w-18 animate-pulse rounded-md bg-neutral-200/80" />
              <div className="h-2 w-2 animate-pulse rounded-xs bg-neutral-200/60" />
            </div>

            <div className="flex items-center gap-xs">
              <div className="h-4 w-24 animate-pulse rounded-md bg-neutral-200/80" />
              <div className="h-2 w-2 animate-pulse rounded-xs bg-neutral-200/60" />
            </div>

            <div className="flex items-center gap-xs">
              <div className="h-4 w-26 animate-pulse rounded-md bg-neutral-200/80" />
              <div className="h-2 w-2 animate-pulse rounded-xs bg-neutral-200/60" />
            </div>
          </div>

          <div className="flex shrink-0 items-center">
            <div className="hidden h-11 w-28 animate-pulse rounded-sm bg-neutral-200/80 sm:block" />
            <div className="h-11 w-11 animate-pulse rounded-sm bg-neutral-200/80 md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
}
