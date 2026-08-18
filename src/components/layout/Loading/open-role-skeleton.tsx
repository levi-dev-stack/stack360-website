const SKELETON_ROW_KEYS = ['row-a', 'row-b', 'row-c', 'row-d'] as const;
const SKELETON_FILTER_KEYS = ['filter-a', 'filter-b', 'filter-c', 'filter-d'] as const;

export function OpenRolesTableSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-xl border border-neutral-200/80 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-215 table-fixed border-collapse text-left">
          <thead>
            <tr className="border-b border-neutral-200 bg-neutral-100/70">
              <th className="px-xl py-md first:pl-xl" scope="col">
                <div className="h-3 w-10 rounded bg-neutral-200" />
              </th>
              <th className="px-xl py-md" scope="col">
                <div className="h-3 w-10 rounded bg-neutral-200" />
              </th>
              <th className="hidden px-xl py-md md:table-cell" scope="col">
                <div className="h-3 w-16 rounded bg-neutral-200" />
              </th>
              <th className="hidden px-xl py-md sm:table-cell" scope="col">
                <div className="h-3 w-20 rounded bg-neutral-200" />
              </th>
              <th className="hidden px-xl py-md sm:table-cell" scope="col">
                <div className="h-3 w-16 rounded bg-neutral-200" />
              </th>
              <th className="hidden px-xl py-md lg:table-cell" scope="col">
                <div className="h-3 w-12 rounded bg-neutral-200" />
              </th>
              <th className="px-xl py-md last:pr-xl" scope="col">
                <div className="ml-auto h-3 w-12 rounded bg-neutral-200" />
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200/60">
            {SKELETON_ROW_KEYS.map((key) => (
              <tr key={key}>
                <td className="px-xl py-lg first:pl-xl">
                  <div className="space-y-sm">
                    <div className="h-4 w-4/5 max-w-xs rounded-md bg-neutral-200" />
                    <div className="h-3 w-2/5 rounded-md bg-neutral-200/70 sm:hidden" />
                  </div>
                </td>
                <td className="px-xl py-lg">
                  <div className="h-6 w-20 rounded-full bg-neutral-200/80" />
                </td>
                <td className="hidden px-xl py-lg md:table-cell">
                  <div className="h-4 w-20 rounded-md bg-neutral-200/80" />
                </td>
                <td className="hidden px-xl py-lg sm:table-cell">
                  <div className="h-4 w-24 rounded-md bg-neutral-200/80" />
                </td>
                <td className="hidden px-xl py-lg sm:table-cell">
                  <div className="h-4 w-28 rounded-md bg-neutral-200/80" />
                </td>
                <td className="hidden px-xl py-lg lg:table-cell">
                  <div className="h-3 w-24 rounded-md bg-neutral-200/70" />
                </td>
                <td className="px-xl py-lg last:pr-xl">
                  <div className="ml-auto h-4 w-14 rounded-md bg-neutral-200/80" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export const OpenRolesSkeleton = () => {
  return (
    <section className="border-t border-neutral-200 bg-neutral-100/50 py-2xl">
      <div className="site-container">
        <div className="mb-lg flex animate-pulse flex-col gap-md sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl space-y-2">
            <div className="h-3 w-28 rounded-md bg-neutral-200" />
            <div className="h-8 w-56 rounded-lg bg-neutral-200 md:w-64" />
          </div>
          <div className="h-6 w-24 rounded-full bg-neutral-200" />
        </div>

        <div className="mb-md flex animate-pulse gap-sm">
          <div className="h-12 min-w-0 flex-1 rounded-xl bg-neutral-200/80" />
          <div className="h-12 w-12 shrink-0 rounded-xl bg-neutral-200/70 sm:w-28" />
        </div>

        <div className="mb-4.5 grid animate-pulse grid-cols-2 gap-xs sm:grid-cols-4 sm:gap-sm">
          {SKELETON_FILTER_KEYS.map((key) => (
            <div key={key} className="h-12 w-full rounded-lg bg-neutral-200/70" />
          ))}
        </div>

        <OpenRolesTableSkeleton />
      </div>
    </section>
  );
};

export default OpenRolesSkeleton;
