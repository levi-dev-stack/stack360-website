'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useQueryParams } from '@/hooks/core';
import { allowedOrEmpty } from '@/utils/array';
import { sanitizeSearchInput } from '@/utils/string';
import {
  OPEN_ROLES_FILTER_LOAD_MS,
  OPEN_ROLES_QUERY_KEYS,
  OPEN_ROLES_SEARCH_DEBOUNCE_MS,
  OPEN_ROLES_TABLE_LOAD_MS,
} from './constants';
import { toOpenRole } from './open-roles-mappers';
import { useOpenRolesCatalog } from './open-roles-provider';

export function useOpenRolesFilters() {
  const { filters, jobs } = useOpenRolesCatalog();
  const { getParam, setParams } = useQueryParams({ method: 'replace' });
  const hasSanitizedUrl = useRef(false);
  const skipSearchSync = useRef(true);
  const prevFilterSignature = useRef('');

  const [isTableReady, setIsTableReady] = useState(false);
  const [isFilterPending, setIsFilterPending] = useState(false);

  const jobTypeIds = useMemo(
    () => filters.data?.jobTypes?.map((item) => item.id) ?? [],
    [filters.data?.jobTypes]
  );
  const workModes = useMemo(() => filters.data?.workModes ?? [], [filters.data?.workModes]);
  const departmentIds = useMemo(
    () => filters.data?.departments?.map((item) => item.id) ?? [],
    [filters.data?.departments]
  );
  const designationIds = useMemo(
    () =>
      filters.data?.departments?.flatMap((dept) => dept.designations.map((item) => item.id)) ?? [],
    [filters.data?.departments]
  );

  const rawSearchFromUrl = getParam(OPEN_ROLES_QUERY_KEYS.search);
  const searchFromUrl = sanitizeSearchInput(rawSearchFromUrl);
  const rawJobType = getParam(OPEN_ROLES_QUERY_KEYS.jobType);
  const rawWorkMode = getParam(OPEN_ROLES_QUERY_KEYS.workMode);
  const rawDepartment = getParam(OPEN_ROLES_QUERY_KEYS.department);
  const rawDesignation = getParam(OPEN_ROLES_QUERY_KEYS.designation);

  const selectedJobType = allowedOrEmpty(rawJobType, jobTypeIds);
  const selectedMode = allowedOrEmpty(rawWorkMode, workModes);
  const selectedDept = allowedOrEmpty(rawDepartment, departmentIds);
  const selectedDesignation = allowedOrEmpty(rawDesignation, designationIds);

  const [searchInput, setSearchInput] = useState(searchFromUrl);
  const [debouncedSearch, setDebouncedSearch] = useState(searchFromUrl);

  useEffect(() => {
    const id = window.setTimeout(() => setIsTableReady(true), OPEN_ROLES_TABLE_LOAD_MS);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    setSearchInput(searchFromUrl);
    setDebouncedSearch(searchFromUrl);
  }, [searchFromUrl]);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setDebouncedSearch(searchInput);
    }, OPEN_ROLES_SEARCH_DEBOUNCE_MS);

    return () => window.clearTimeout(id);
  }, [searchInput]);

  useEffect(() => {
    if (hasSanitizedUrl.current || !filters.data) {
      return;
    }

    const invalid: Record<string, string> = {};

    if (rawSearchFromUrl && rawSearchFromUrl !== searchFromUrl) {
      invalid[OPEN_ROLES_QUERY_KEYS.search] = searchFromUrl;
    }

    if (rawJobType && !selectedJobType) {
      invalid[OPEN_ROLES_QUERY_KEYS.jobType] = '';
    }
    if (rawWorkMode && !selectedMode) {
      invalid[OPEN_ROLES_QUERY_KEYS.workMode] = '';
    }
    if (rawDepartment && !selectedDept) {
      invalid[OPEN_ROLES_QUERY_KEYS.department] = '';
    }
    if (rawDesignation && !selectedDesignation) {
      invalid[OPEN_ROLES_QUERY_KEYS.designation] = '';
    }

    if (Object.keys(invalid).length === 0) {
      hasSanitizedUrl.current = true;
      return;
    }

    hasSanitizedUrl.current = true;
    setParams(invalid);
  }, [
    filters.data,
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
    if (skipSearchSync.current) {
      skipSearchSync.current = false;
      return;
    }

    if (searchFromUrl === debouncedSearch) {
      return;
    }

    setParams({ [OPEN_ROLES_QUERY_KEYS.search]: debouncedSearch });
  }, [debouncedSearch, searchFromUrl, setParams]);

  const catalogJobs = jobs.data;
  const totalRoleCount = catalogJobs.length;

  const filteredRoles = useMemo(() => {
    if (!catalogJobs.length) {
      return [];
    }

    const query = debouncedSearch.toLowerCase();

    return catalogJobs
      .filter((role) => {
        const display = toOpenRole(role, filters.data);
        const matchesSearch =
          !query ||
          display.title.toLowerCase().includes(query) ||
          display.department.toLowerCase().includes(query) ||
          display.designation.toLowerCase().includes(query) ||
          display.jobType.toLowerCase().includes(query) ||
          display.mode.toLowerCase().includes(query) ||
          role.referenceNumber?.toLowerCase().includes(query);

        const matchesType = !selectedJobType || role.jobTypeId === selectedJobType;
        const matchesMode = !selectedMode || role.modeType === selectedMode;
        const matchesDept = !selectedDept || role.departmentId === selectedDept;
        const matchesDesig = !selectedDesignation || role.designationId === selectedDesignation;

        return matchesSearch && matchesType && matchesMode && matchesDept && matchesDesig;
      })
      .map((role) => toOpenRole(role, filters.data));
  }, [
    catalogJobs,
    debouncedSearch,
    filters.data,
    selectedDesignation,
    selectedDept,
    selectedJobType,
    selectedMode,
  ]);

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

    const id = window.setTimeout(() => setIsFilterPending(false), OPEN_ROLES_FILTER_LOAD_MS);
    return () => window.clearTimeout(id);
  }, [filterSignature, isTableReady]);

  const isTableLoading = !isTableReady || isSearchPending || isFilterPending;

  const clearFilters = () => {
    setSearchInput('');
    setDebouncedSearch('');
    setParams({
      [OPEN_ROLES_QUERY_KEYS.search]: '',
      [OPEN_ROLES_QUERY_KEYS.jobType]: '',
      [OPEN_ROLES_QUERY_KEYS.workMode]: '',
      [OPEN_ROLES_QUERY_KEYS.department]: '',
      [OPEN_ROLES_QUERY_KEYS.designation]: '',
    });
  };

  const setDepartment = (value: string) => {
    const designationStillValid =
      !selectedDesignation ||
      !value ||
      Boolean(
        filters.data?.departments
          ?.find((dept) => dept.id === value)
          ?.designations.some((item) => item.id === selectedDesignation)
      );

    setParams({
      [OPEN_ROLES_QUERY_KEYS.department]: value,
      ...(designationStillValid ? {} : { [OPEN_ROLES_QUERY_KEYS.designation]: '' }),
    });
  };

  return {
    searchInput,
    setSearchInput,
    selectedJobType,
    selectedMode,
    selectedDept,
    selectedDesignation,
    filteredRoles,
    totalRoleCount,
    hasActiveFilters,
    isTableLoading,
    clearFilters,
    setJobType: (value: string) => setParams({ [OPEN_ROLES_QUERY_KEYS.jobType]: value }),
    setWorkMode: (value: string) => setParams({ [OPEN_ROLES_QUERY_KEYS.workMode]: value }),
    setDepartment,
    setDesignation: (value: string) => setParams({ [OPEN_ROLES_QUERY_KEYS.designation]: value }),
  };
}
