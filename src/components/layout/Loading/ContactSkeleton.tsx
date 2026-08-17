export function ContactSkeleton() {
  return (
    <section className="py-2xl animate-pulse">
      <div className="site-container grid grid-cols-1 gap-2xl lg:grid-cols-12">
        <div className="space-y-xl lg:col-span-5">
          <div className="space-y-md">
            <div className="h-8 w-48 rounded-md bg-neutral-200" />
            <div className="space-y-xs">
              <div className="h-4 w-full rounded bg-neutral-200" />
              <div className="h-4 w-5/6 rounded bg-neutral-200" />
            </div>
          </div>

          <div className="space-y-md">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="flex items-start gap-md rounded-lg border border-neutral-200 bg-neutral-50 p-lg"
              >
                <div className="h-11 w-11 shrink-0 rounded-md bg-neutral-200" />
                <div className="flex-1 space-y-xs">
                  <div className="h-3 w-16 rounded bg-neutral-200" />
                  <div className="h-5 w-36 rounded bg-neutral-200" />
                  <div className="h-3 w-48 rounded bg-neutral-200" />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-md sm:grid-cols-2">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="flex h-full flex-col justify-between rounded-lg border border-neutral-200 bg-neutral-50 p-md"
              >
                <div className="space-y-sm">
                  <div className="flex items-center gap-sm">
                    <div className="h-4 w-6 rounded-xs bg-neutral-200" />
                    <div className="h-3 w-20 rounded bg-neutral-200" />
                  </div>
                  <div className="h-4 w-28 rounded bg-neutral-200" />
                </div>
                <div className="mt-md space-y-xs">
                  <div className="h-3 w-full rounded bg-neutral-200" />
                  <div className="h-3 w-3/4 rounded bg-neutral-200" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-xl shadow-sm">
            <div className="mb-lg space-y-sm">
              <div className="h-8 w-64 rounded-md bg-neutral-200" />
              <div className="space-y-xs">
                <div className="h-4 w-full rounded bg-neutral-200" />
                <div className="h-4 w-4/5 rounded bg-neutral-200" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-md sm:grid-cols-2">
              <div>
                <div className="mb-xs h-3 w-16 rounded bg-neutral-200" />
                <div className="h-11 w-full rounded-md bg-neutral-200" />
              </div>

              <div>
                <div className="mb-xs h-3 w-16 rounded bg-neutral-200" />
                <div className="h-11 w-full rounded-md bg-neutral-200" />
              </div>

              <div className="sm:col-span-2">
                <div className="mb-xs h-3 w-20 rounded bg-neutral-200" />
                <div className="h-11 w-full rounded-md bg-neutral-200" />
              </div>

              <div className="sm:col-span-2">
                <div className="mb-xs flex justify-between">
                  <div className="h-3 w-24 rounded bg-neutral-200" />
                  <div className="h-3 w-28 rounded bg-neutral-200" />
                </div>
                <div className="h-32 w-full rounded-md bg-neutral-200" />
              </div>
            </div>

            <div className="mt-lg flex justify-end">
              <div className="h-11 w-36 rounded-md bg-neutral-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
