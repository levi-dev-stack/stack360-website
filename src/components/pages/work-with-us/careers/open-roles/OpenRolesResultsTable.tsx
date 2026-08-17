'use client';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { OpenRolesTableSkeleton } from '@/components/layout/Loading/open-role-skeleton';
import { MotionStaggerItem } from '@/components/shared/motion';
import { formatEnumLabel } from '@/utils/string';
import type { Job } from '../type';
import { OPEN_ROLES_TD_CLASS, OPEN_ROLES_TH_CLASS } from './constants';
import OpenRolesEmptyState from './OpenRolesEmptyState';

interface OpenRolesResultsTableProps {
  roles: Job[];
  isLoading: boolean;
  hasCatalog: boolean;
  onClearFilters: () => void;
}

export default function OpenRolesResultsTable({
  roles,
  isLoading,
  hasCatalog,
  onClearFilters,
}: OpenRolesResultsTableProps) {
  const hasRoles = roles.length > 0;

  return (
    <MotionStaggerItem>
      {isLoading ? (
        <OpenRolesTableSkeleton />
      ) : hasRoles ? (
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
                {roles.map((role) => (
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
                    <td className={`${OPEN_ROLES_TD_CLASS} hidden text-neutral-600 sm:table-cell`}>
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
                    <td className={`${OPEN_ROLES_TD_CLASS} hidden text-neutral-500 sm:table-cell`}>
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <OpenRolesEmptyState
          variant={hasCatalog ? 'no-matches' : 'no-catalog'}
          onResetFilters={onClearFilters}
        />
      )}
    </MotionStaggerItem>
  );
}
