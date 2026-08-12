'use client';

import { Briefcase, ChevronRight, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { DropdownOptions, SearchInputField } from '@/components/core';
import { OpenRolesTableSkeleton } from '@/components/layout/Loading/open-role-skeleton';
import { MotionSection, MotionStagger, MotionStaggerItem } from '@/components/shared/motion';
import { CAREERS_OPEN_ROLES } from '@/constants/component/careers-data';
import { useQueryParams } from '@/hooks/core';
import { allowedOrEmpty } from '@/utils/array';
import { formatEnumLabel, sanitizeSearchInput } from '@/utils/string';
import { Department, Designation, JobType, WorkMode } from './enums';
import type { Job } from './type';

const JOB_TYPE_OPTIONS = Object.values(JobType).map((value) => ({
  value,
  label: formatEnumLabel(value),
}));
const WORK_MODE_OPTIONS = Object.values(WorkMode).map((value) => ({
  value,
  label: formatEnumLabel(value),
}));
const DEPARTMENT_OPTIONS = Object.values(Department).map((value) => ({
  value,
  label: formatEnumLabel(value),
}));
const DESIGNATION_OPTIONS = Object.values(Designation).map((value) => ({
  value,
  label: formatEnumLabel(value),
}));

const QUERY_KEYS = {
  search: 'search',
  jobType: 'jobType',
  workMode: 'workMode',
  department: 'department',
  designation: 'designation',
} as const;

const TABLE_LOAD_MS = 320;
const FILTER_LOAD_MS = 280;

const OpenRoles = () => {
  const { getParam, setParams } = useQueryParams({ method: 'replace' });
  const hasSanitizedUrl = useRef(false);
  const skipInitialSearchSync = useRef(true);
  const prevFilterSignature = useRef('');

  const [isTableReady, setIsTableReady] = useState(false);
  const [isFilterPending, setIsFilterPending] = useState(false);

  const rawSearchFromUrl = getParam(QUERY_KEYS.search);
  const searchFromUrl = sanitizeSearchInput(rawSearchFromUrl);
  const rawJobType = getParam(QUERY_KEYS.jobType);
  const rawWorkMode = getParam(QUERY_KEYS.workMode);
  const rawDepartment = getParam(QUERY_KEYS.department);
  const rawDesignation = getParam(QUERY_KEYS.designation);

  const selectedJobType = allowedOrEmpty(rawJobType, Object.values(JobType));
  const selectedMode = allowedOrEmpty(rawWorkMode, Object.values(WorkMode));
  const selectedDept = allowedOrEmpty(rawDepartment, Object.values(Department));
  const selectedDesignation = allowedOrEmpty(rawDesignation, Object.values(Designation));

  const [searchInput, setSearchInput] = useState(searchFromUrl);
  const [debouncedSearch, setDebouncedSearch] = useState(searchFromUrl);

  useEffect(() => {
    const id = window.setTimeout(() => setIsTableReady(true), TABLE_LOAD_MS);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    setSearchInput(searchFromUrl);
    setDebouncedSearch(searchFromUrl);
  }, [searchFromUrl]);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setDebouncedSearch(searchInput);
    }, 300);

    return () => window.clearTimeout(id);
  }, [searchInput]);

  useEffect(() => {
    if (hasSanitizedUrl.current) {
      return;
    }

    const invalid: Record<string, string> = {};

    if (rawSearchFromUrl && rawSearchFromUrl !== searchFromUrl) {
      invalid[QUERY_KEYS.search] = searchFromUrl;
    }

    if (rawJobType && !selectedJobType) {
      invalid[QUERY_KEYS.jobType] = '';
    }
    if (rawWorkMode && !selectedMode) {
      invalid[QUERY_KEYS.workMode] = '';
    }
    if (rawDepartment && !selectedDept) {
      invalid[QUERY_KEYS.department] = '';
    }
    if (rawDesignation && !selectedDesignation) {
      invalid[QUERY_KEYS.designation] = '';
    }

    if (Object.keys(invalid).length === 0) {
      hasSanitizedUrl.current = true;
      return;
    }

    hasSanitizedUrl.current = true;
    setParams(invalid);
  }, [
    rawDepartment,
    rawDesignation,
    rawJobType,
    rawSearchFromUrl,
    rawWorkMode,
    searchFromUrl,
    selectedDept,
    selectedDesignation,
    selectedJobType,
    selectedMode,
    setParams,
  ]);

  useEffect(() => {
    if (skipInitialSearchSync.current) {
      skipInitialSearchSync.current = false;
      return;
    }

    setParams({ [QUERY_KEYS.search]: debouncedSearch });
  }, [debouncedSearch, setParams]);

  const filteredRoles = useMemo(() => {
    if (!CAREERS_OPEN_ROLES) {
      return [];
    }

    return (CAREERS_OPEN_ROLES as Job[]).filter((role) => {
      const query = debouncedSearch.toLowerCase();
      const matchesSearch =
        !query ||
        role.title.toLowerCase().includes(query) ||
        role.location.toLowerCase().includes(query) ||
        role.department.toLowerCase().includes(query);

      const matchesType = !selectedJobType || role.jobType === selectedJobType;
      const matchesMode = !selectedMode || role.mode === selectedMode;
      const matchesDept = !selectedDept || role.department === selectedDept;
      const matchesDesig = !selectedDesignation || role.designation === selectedDesignation;

      return matchesSearch && matchesType && matchesMode && matchesDept && matchesDesig;
    });
  }, [debouncedSearch, selectedJobType, selectedMode, selectedDept, selectedDesignation]);

  const hasRoles = filteredRoles.length > 0;
  const hasActiveFilters = Boolean(
    searchInput ||
      debouncedSearch ||
      selectedJobType ||
      selectedMode ||
      selectedDept ||
      selectedDesignation
  );

  const filterSignature = [
    debouncedSearch,
    selectedJobType,
    selectedMode,
    selectedDept,
    selectedDesignation,
  ].join('|');

  const isSearchPending = searchInput !== debouncedSearch;

  useEffect(() => {
    if (!isTableReady) {
      prevFilterSignature.current = filterSignature;
      return;
    }

    if (prevFilterSignature.current === filterSignature) {
      return;
    }

    prevFilterSignature.current = filterSignature;
    setIsFilterPending(true);

    const id = window.setTimeout(() => setIsFilterPending(false), FILTER_LOAD_MS);
    return () => window.clearTimeout(id);
  }, [filterSignature, isTableReady]);

  const isTableLoading = !isTableReady || isSearchPending || isFilterPending;

  const clearFilters = () => {
    setSearchInput('');
    setDebouncedSearch('');
    setParams({
      [QUERY_KEYS.search]: '',
      [QUERY_KEYS.jobType]: '',
      [QUERY_KEYS.workMode]: '',
      [QUERY_KEYS.department]: '',
      [QUERY_KEYS.designation]: '',
    });
  };

  const thClass =
    'px-xl py-md text-[11px] font-bold uppercase tracking-widest text-neutral-600 first:pl-xl last:pr-xl';
  const tdClass = 'px-xl py-lg align-middle text-sm first:pl-xl last:pr-xl';

  return (
    <MotionSection className="border-t border-neutral-200 bg-neutral-100/50 py-2xl">
      <div className="site-container">
        <MotionStagger className="mb-lg flex flex-col gap-md sm:flex-row sm:items-end sm:justify-between">
          <MotionStaggerItem className="max-w-3xl space-y-xs">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
              Current Opportunities
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 md:text-3xl">
              Search Jobs Here
            </h2>
          </MotionStaggerItem>
          <MotionStaggerItem>
            <span className="rounded-full border border-primary/20 bg-primary/10 px-md py-xs font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
              {CAREERS_OPEN_ROLES?.length
                ? `${CAREERS_OPEN_ROLES.length} Open Roles`
                : 'Fully Staffed'}
            </span>
          </MotionStaggerItem>
        </MotionStagger>

        <MotionStaggerItem className="mb-md">
          <div className="flex items-start gap-sm">
            <SearchInputField
              value={searchInput}
              onChange={setSearchInput}
              placeholder="Search by title, skill, or keyword..."
              label="Search open roles"
              className="min-w-0 flex-1"
            />
            <button
              type="button"
              onClick={clearFilters}
              disabled={!hasActiveFilters}
              aria-label="Clear search and filters"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-xs rounded-xl border border-neutral-200 bg-neutral-50 px-md text-sm font-semibold text-neutral-700 shadow-xs transition-colors hover:border-neutral-300 hover:bg-white hover:text-primary disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:border-neutral-200 disabled:hover:bg-neutral-50 disabled:hover:text-neutral-700 sm:px-lg"
            >
              <X className="size-4 shrink-0" aria-hidden />
              <span className="hidden sm:inline">Clear all</span>
            </button>
          </div>
        </MotionStaggerItem>

        <MotionStaggerItem className="mb-4.5 grid grid-cols-2 gap-xs sm:grid-cols-4 sm:gap-sm">
          <DropdownOptions
            label="Job Type"
            value={selectedJobType}
            onChange={(value) => setParams({ [QUERY_KEYS.jobType]: value })}
            options={JOB_TYPE_OPTIONS}
          />
          <DropdownOptions
            label="Work Mode"
            value={selectedMode}
            onChange={(value) => setParams({ [QUERY_KEYS.workMode]: value })}
            options={WORK_MODE_OPTIONS}
          />
          <DropdownOptions
            label="Department"
            value={selectedDept}
            onChange={(value) => setParams({ [QUERY_KEYS.department]: value })}
            options={DEPARTMENT_OPTIONS}
          />
          <DropdownOptions
            label="Designation"
            value={selectedDesignation}
            onChange={(value) => setParams({ [QUERY_KEYS.designation]: value })}
            options={DESIGNATION_OPTIONS}
          />
        </MotionStaggerItem>

        <MotionStaggerItem>
          {isTableLoading ? (
            <OpenRolesTableSkeleton />
          ) : (
            <div className="overflow-hidden rounded-xl border border-neutral-200/80 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] table-fixed border-collapse text-left">
                  <thead>
                    <tr className="border-b border-neutral-200 bg-neutral-100/70">
                      <th scope="col" className={`${thClass} w-[34%]`}>
                        Role
                      </th>
                      <th scope="col" className={`${thClass} hidden w-[14%] sm:table-cell`}>
                        Department
                      </th>
                      <th scope="col" className={`${thClass} hidden w-[20%] md:table-cell`}>
                        Location
                      </th>
                      <th scope="col" className={`${thClass} w-[14%]`}>
                        Type
                      </th>
                      <th scope="col" className={`${thClass} hidden w-[12%] sm:table-cell`}>
                        Posted
                      </th>
                      <th scope="col" className={`${thClass} w-[10%] text-right`}>
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200/60">
                    {hasRoles ? (
                      filteredRoles.map((role) => (
                        <tr
                          key={role.id}
                          className="group transition-colors duration-200 hover:bg-neutral-50/80"
                        >
                          <td className={tdClass}>
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
                          <td className={`${tdClass} hidden text-neutral-600 sm:table-cell`}>
                            {formatEnumLabel(role.department)}
                          </td>
                          <td
                            className={`${tdClass} hidden leading-relaxed text-neutral-600 md:table-cell`}
                          >
                            {role.location}
                          </td>
                          <td className={tdClass}>
                            <span className="inline-flex whitespace-nowrap rounded-full border border-neutral-200 bg-neutral-50 px-sm py-xs text-xs font-medium text-neutral-700">
                              {formatEnumLabel(role.jobType)}
                            </span>
                          </td>
                          <td className={`${tdClass} hidden text-neutral-500 sm:table-cell`}>
                            {role.postedAgo}
                          </td>
                          <td className={`${tdClass} text-right`}>
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
                                onClick={clearFilters}
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
      </div>
    </MotionSection>
  );
};

export default OpenRoles;
