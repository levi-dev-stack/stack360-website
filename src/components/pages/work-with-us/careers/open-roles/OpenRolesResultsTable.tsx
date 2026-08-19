'use client';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { OpenRolesTableSkeleton } from '@/components/layout/Loading/open-role-skeleton';
import { MotionStaggerItem } from '@/components/shared/motion';
import { routes } from '@/constants/routes';
import type { Job } from '../type';
import { OPEN_ROLES_TD_CLASS, OPEN_ROLES_TH_CLASS } from './constants';
import OpenRolesEmptyState from './OpenRolesEmptyState';

interface OpenRolesResultsTableProps {
  roles: Job[];
  isLoading: boolean;
  hasCatalog: boolean;
  onClearFilters: () => void;
}

function roleMetaLine(role: Job): string {
  return [role.jobType, role.mode, role.department, role.designation].filter(Boolean).join(' · ');
}

function RoleCard({ role }: { role: Job }) {
  const href = routes.suite360.jobs.getInformation(role.id);
  const meta = roleMetaLine(role);

  return (
    <li>
      <Link
        href={href}
        target="_blank"
        className="flex min-h-17 items-center gap-[calc(0.75rem+0.35vw)] rounded-xl border border-neutral-200/80 bg-white px-[clamp(0.875rem,calc(0.7rem+1vw),1.25rem)] py-[clamp(0.875rem,calc(0.7rem+0.4vw),1.15rem)] shadow-sm transition-colors duration-200 hover:border-primary/25 hover:bg-neutral-50/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <div className="min-w-0 flex-1 max-w-[calc(100%-3.25rem)]">
          <span className="block text-pretty text-sm font-semibold leading-snug text-neutral-900">
            {role.title}
          </span>
          {meta ? (
            <span className="mt-[calc(0.25rem+0.1vw)] block text-xs leading-relaxed text-neutral-500">
              {meta}
            </span>
          ) : null}
          {role.postedAgo ? (
            <span className="mt-[calc(0.35rem+0.1vw)] inline-flex font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500">
              {role.postedAgo}
            </span>
          ) : null}
        </div>
        <span
          aria-hidden
          className="flex size-[calc(2.25rem+0.2vw)] shrink-0 items-center justify-center rounded-md text-primary"
        >
          <ChevronRight className="size-5" />
        </span>
        <span className="sr-only">View role</span>
      </Link>
    </li>
  );
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
        <>
          <ul className="grid gap-[calc(0.5rem+0.35vw)] md:hidden">
            {roles.map((role) => (
              <RoleCard key={role.id} role={role} />
            ))}
          </ul>

          <div className="hidden overflow-hidden rounded-xl border border-neutral-200/80 bg-white shadow-sm md:block">
            <div className="overflow-x-auto">
              <table className="w-full min-w-220 table-fixed border-collapse text-left">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-100/70">
                    <th scope="col" className={`${OPEN_ROLES_TH_CLASS} w-[24%]`}>
                      Role
                    </th>
                    <th scope="col" className={`${OPEN_ROLES_TH_CLASS} w-[12%]`}>
                      Type
                    </th>
                    <th scope="col" className={`${OPEN_ROLES_TH_CLASS} w-[12%]`}>
                      Mode
                    </th>
                    <th scope="col" className={`${OPEN_ROLES_TH_CLASS} w-[14%]`}>
                      Department
                    </th>
                    <th scope="col" className={`${OPEN_ROLES_TH_CLASS} w-[16%]`}>
                      Designation
                    </th>
                    <th scope="col" className={`${OPEN_ROLES_TH_CLASS} w-[12%]`}>
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
                        <Link
                          href={routes.suite360.jobs.getInformation(role.id)}
                          target="_blank"
                          className="block min-w-0 pr-sm"
                        >
                          <span className="font-semibold leading-snug text-neutral-900 transition-colors group-hover:text-primary">
                            {role.title}
                          </span>
                        </Link>
                      </td>
                      <td className={OPEN_ROLES_TD_CLASS}>
                        <span className="inline-flex whitespace-nowrap rounded-full border border-neutral-200 bg-neutral-50 px-sm py-xs text-xs font-medium text-neutral-700">
                          {role.jobType}
                        </span>
                      </td>
                      <td className={`${OPEN_ROLES_TD_CLASS} leading-relaxed text-neutral-600`}>
                        {role.mode}
                      </td>
                      <td className={`${OPEN_ROLES_TD_CLASS} text-neutral-600`}>
                        {role.department}
                      </td>
                      <td className={`${OPEN_ROLES_TD_CLASS} text-neutral-600`}>
                        {role.designation}
                      </td>
                      <td className={`${OPEN_ROLES_TD_CLASS} text-neutral-500`}>
                        {role.postedAgo}
                      </td>
                      <td className={`${OPEN_ROLES_TD_CLASS} text-right`}>
                        <Link
                          href={routes.suite360.jobs.getInformation(role.id)}
                          target="_blank"
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
        </>
      ) : (
        <OpenRolesEmptyState
          variant={hasCatalog ? 'no-matches' : 'no-catalog'}
          onResetFilters={onClearFilters}
        />
      )}
    </MotionStaggerItem>
  );
}
