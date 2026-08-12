'use client';

import { Briefcase, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { OpenRolesTableSkeleton } from '@/components/layout/Loading/open-role-skeleton';
import { MotionStaggerItem } from '@/components/shared/motion';
import { formatEnumLabel } from '@/utils/string';
import type { Job } from '../type';
import { OPEN_ROLES_TD_CLASS, OPEN_ROLES_TH_CLASS } from './constants';

interface OpenRolesResultsTableProps {
  roles: Job[];
  isLoading: boolean;
  hasActiveFilters: boolean;
  onClearFilters: () => void;
}

export default function OpenRolesResultsTable({
  roles,
  isLoading,
  hasActiveFilters,
  onClearFilters,
}: OpenRolesResultsTableProps) {
  const hasRoles = roles.length > 0;

  return (
    <MotionStaggerItem>
      {isLoading ? (
        <OpenRolesTableSkeleton />
      ) : (
        <div className="overflow-hidden rounded-xl border border-neutral-200/80 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-190 table-fixed border-collapse text-left">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-100/70">
                  <th scope="col" className={`${OPEN_ROLES_TH_CLASS} w-[34%]`}>
                    Role
                  </th>
                  <th scope="col" className={`${OPEN_ROLES_TH_CLASS} hidden w-[14%] sm:table-cell`}>
                    Department
                  </th>
                  <th scope="col" className={`${OPEN_ROLES_TH_CLASS} hidden w-[20%] md:table-cell`}>
                    Location
                  </th>
                  <th scope="col" className={`${OPEN_ROLES_TH_CLASS} w-[14%]`}>
                    Type
                  </th>
                  <th scope="col" className={`${OPEN_ROLES_TH_CLASS} hidden w-[12%] sm:table-cell`}>
                    Posted
                  </th>
                  <th scope="col" className={`${OPEN_ROLES_TH_CLASS} w-[10%] text-right`}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200/60">
                {hasRoles ? (
                  roles.map((role) => (
                    <tr
                      key={role.id}
                      className="group transition-colors duration-200 hover:bg-neutral-50/80"
                    >
                      <td className={OPEN_ROLES_TD_CLASS}>
                        <Link href={`/careers/${role.id}`} className="block min-w-0 pr-sm">
                          <span className="font-semibold leading-snug text-neutral-900 transition-colors group-hover:text-primary">
                            {role.title}
                          </span>
                          <span className="mt-xs block text-xs leading-relaxed text-neutral-500 sm:hidden">
                            {[formatEnumLabel(role.department), role.location]
                              .filter(Boolean)
                              .join(' · ')}
                          </span>
                        </Link>
                      </td>
                      <td
                        className={`${OPEN_ROLES_TD_CLASS} hidden text-neutral-600 sm:table-cell`}
                      >
                        {formatEnumLabel(role.department)}
                      </td>
                      <td
                        className={`${OPEN_ROLES_TD_CLASS} hidden leading-relaxed text-neutral-600 md:table-cell`}
                      >
                        {role.location}
                      </td>
                      <td className={OPEN_ROLES_TD_CLASS}>
                        <span className="inline-flex whitespace-nowrap rounded-full border border-neutral-200 bg-neutral-50 px-sm py-xs text-xs font-medium text-neutral-700">
                          {formatEnumLabel(role.jobType)}
                        </span>
                      </td>
                      <td
                        className={`${OPEN_ROLES_TD_CLASS} hidden text-neutral-500 sm:table-cell`}
                      >
                        {role.postedAgo}
                      </td>
                      <td className={`${OPEN_ROLES_TD_CLASS} text-right`}>
                        <Link
                          href={`/careers/${role.id}`}
                          className="inline-flex items-center gap-xs font-semibold text-primary transition-colors hover:text-primary-dark"
                        >
                          <span>View</span>
                          <ChevronRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-xl py-2xl sm:py-3xl">
                      <div className="mx-auto flex flex-col items-center text-center">
                        <div className="mb-md flex size-14 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 text-neutral-400">
                          <Briefcase className="size-6 stroke-[1.5]" aria-hidden />
                        </div>
                        <h3 className="text-base font-bold text-neutral-900">
                          No matching openings
                        </h3>
                        <p className="mt-sm text-sm leading-relaxed text-neutral-500">
                          {hasActiveFilters
                            ? 'Nothing matches your current search or filters. Try broadening your criteria.'
                            : 'There are no open roles at the moment. Check back soon.'}
                        </p>
                        {hasActiveFilters ? (
                          <button
                            type="button"
                            onClick={onClearFilters}
                            className="mt-lg rounded-lg border border-neutral-200 bg-white px-lg py-sm text-sm font-semibold text-neutral-700 transition-colors hover:border-primary/30 hover:text-primary"
                          >
                            Clear search & filters
                          </button>
                        ) : null}
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </MotionStaggerItem>
  );
}
