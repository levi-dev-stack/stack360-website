'use client';

import { ArrowUpRight, Briefcase, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { DropdownOptions, SearchInputField } from '@/components/core';
import { MotionSection, MotionStagger, MotionStaggerItem } from '@/components/shared/motion';
import MotionCard from '@/components/shared/motion/MotionCard';
import { CAREERS_OPEN_ROLES } from '@/constants/component/careers-data';
import { useQueryParams } from '@/hooks/core';
import { Department, Designation, JobType, WorkMode } from './enums';
import type { Job } from './type';

const JOB_TYPE_OPTIONS = Object.values(JobType).map((value) => ({ value, label: value }));
const WORK_MODE_OPTIONS = Object.values(WorkMode).map((value) => ({ value, label: value }));
const DEPARTMENT_OPTIONS = Object.values(Department).map((value) => ({ value, label: value }));
const DESIGNATION_OPTIONS = Object.values(Designation).map((value) => ({ value, label: value }));

const QUERY_KEYS = {
  search: 'search',
  jobType: 'jobType',
  workMode: 'workMode',
  department: 'department',
  designation: 'designation',
} as const;

function allowedOrEmpty<T extends string>(value: string, allowed: readonly T[]): T | '' {
  return allowed.includes(value as T) ? (value as T) : '';
}

const OpenRoles = () => {
  const { getParam, setParams } = useQueryParams({ method: 'replace' });

  const searchFromUrl = getParam(QUERY_KEYS.search);
  const rawJobType = getParam(QUERY_KEYS.jobType);
  const rawWorkMode = getParam(QUERY_KEYS.workMode);
  const rawDepartment = getParam(QUERY_KEYS.department);
  const rawDesignation = getParam(QUERY_KEYS.designation);

  const selectedJobType = allowedOrEmpty(rawJobType, Object.values(JobType));
  const selectedMode = allowedOrEmpty(rawWorkMode, Object.values(WorkMode));
  const selectedDept = allowedOrEmpty(rawDepartment, Object.values(Department));
  const selectedDesignation = allowedOrEmpty(rawDesignation, Object.values(Designation));

  const [searchTerm, setSearchTerm] = useState(searchFromUrl);

  useEffect(() => {
    setSearchTerm(searchFromUrl);
  }, [searchFromUrl]);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setParams({ [QUERY_KEYS.search]: searchTerm });
    }, 300);

    return () => window.clearTimeout(id);
  }, [searchTerm, setParams]);

  useEffect(() => {
    const invalid: Record<string, string> = {};

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

    if (Object.keys(invalid).length > 0) {
      setParams(invalid);
    }
  }, [
    rawDepartment,
    rawDesignation,
    rawJobType,
    rawWorkMode,
    selectedDept,
    selectedDesignation,
    selectedJobType,
    selectedMode,
    setParams,
  ]);

  const filteredRoles = useMemo(() => {
    if (!CAREERS_OPEN_ROLES) {
      return [];
    }

    return (CAREERS_OPEN_ROLES as Job[]).filter((role) => {
      const query = searchTerm.toLowerCase();
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
  }, [searchTerm, selectedJobType, selectedMode, selectedDept, selectedDesignation]);

  const hasRoles = filteredRoles.length > 0;

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
          <SearchInputField
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search by title, skill, or keyword..."
            label="Search open roles"
          />
        </MotionStaggerItem>

        <MotionStaggerItem className="mb-xl grid grid-cols-2 gap-xs sm:grid-cols-4 sm:gap-sm">
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

        {hasRoles ? (
          <MotionStagger className="space-y-md">
            {filteredRoles.map((role) => (
              <MotionStaggerItem key={role.id}>
                <Link href={`/careers/${role.id}`} className="block">
                  <MotionCard className="group rounded-xl border border-neutral-200/80 bg-neutral-50 p-lg transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white hover:shadow-md hover:shadow-primary/5">
                    <div className="flex flex-col gap-md md:flex-row md:items-center md:justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-xs">
                          <h3 className="text-lg font-bold text-neutral-900 transition-colors group-hover:text-primary">
                            {role.title}
                          </h3>
                          <ArrowUpRight className="size-4 text-primary opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                        </div>
                        <p className="text-sm font-medium text-neutral-600">
                          {[role.department, role.location].filter(Boolean).join(' · ')}
                        </p>
                        <p className="font-mono text-xs text-neutral-500">{role.postedAgo}</p>
                      </div>

                      <div className="flex items-center justify-between gap-md md:justify-end">
                        <span className="rounded-md border border-neutral-200 bg-neutral-100 px-sm py-xs font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-600 group-hover:bg-neutral-50">
                          {role.jobType}
                        </span>
                        <div className="flex items-center gap-xs text-sm font-bold text-primary transition-colors group-hover:text-primary-dark">
                          <span>View Details</span>
                          <ChevronRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </MotionCard>
                </Link>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        ) : (
          <MotionStaggerItem>
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50/50 p-3 px-lg py-3xl text-center shadow-inner">
              <div className="mb-md flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
                <Briefcase className="h-6 w-6 stroke-[1.5]" />
              </div>
              <h3 className="text-base font-bold text-neutral-900">No matching openings found</h3>
              <p className="mt-xs max-w-content text-sm leading-relaxed text-neutral-500">
                Try adjusting your search criteria or filters to find open opportunities.
              </p>
            </div>
          </MotionStaggerItem>
        )}
      </div>
    </MotionSection>
  );
};

export default OpenRoles;
