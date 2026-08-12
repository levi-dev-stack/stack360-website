'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { CAREERS_OPEN_ROLES } from '@/constants/component/careers-data';
import { useQueryParams } from '@/hooks/core';
import { allowedOrEmpty } from '@/utils/array';
import { sanitizeSearchInput } from '@/utils/string';
import { Department, Designation, JobType, WorkMode } from '../enums';
import type { Job } from '../type';
import {
  OPEN_ROLES_FILTER_LOAD_MS,
  OPEN_ROLES_QUERY_KEYS,
  OPEN_ROLES_SEARCH_DEBOUNCE_MS,
  OPEN_ROLES_TABLE_LOAD_MS,
} from './constants';

export function useOpenRolesFilters() {
  const { getParam, setParams } = useQueryParams({ method: 'replace' });
  const hasSanitizedUrl = useRef(false);
  const skipInitialSearchSync = useRef(true);
  const prevFilterSignature = useRef('');

  const [isTableReady, setIsTableReady] = useState(false);
  const [isFilterPending, setIsFilterPending] = useState(false);

  const rawSearchFromUrl = getParam(OPEN_ROLES_QUERY_KEYS.search);
  const searchFromUrl = sanitizeSearchInput(rawSearchFromUrl);
  const rawJobType = getParam(OPEN_ROLES_QUERY_KEYS.jobType);
  const rawWorkMode = getParam(OPEN_ROLES_QUERY_KEYS.workMode);
  const rawDepartment = getParam(OPEN_ROLES_QUERY_KEYS.department);
  const rawDesignation = getParam(OPEN_ROLES_QUERY_KEYS.designation);

  const selectedJobType = allowedOrEmpty(rawJobType, Object.values(JobType));
  const selectedMode = allowedOrEmpty(rawWorkMode, Object.values(WorkMode));
  const selectedDept = allowedOrEmpty(rawDepartment, Object.values(Department));
  const selectedDesignation = allowedOrEmpty(rawDesignation, Object.values(Designation));

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
    if (hasSanitizedUrl.current) {
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

    setParams({ [OPEN_ROLES_QUERY_KEYS.search]: debouncedSearch });
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

  return {
    searchInput,
    setSearchInput,
    selectedJobType,
    selectedMode,
    selectedDept,
    selectedDesignation,
    filteredRoles,
    hasActiveFilters,
    isTableLoading,
    clearFilters,
    setJobType: (value: string) => setParams({ [OPEN_ROLES_QUERY_KEYS.jobType]: value }),
    setWorkMode: (value: string) => setParams({ [OPEN_ROLES_QUERY_KEYS.workMode]: value }),
    setDepartment: (value: string) => setParams({ [OPEN_ROLES_QUERY_KEYS.department]: value }),
    setDesignation: (value: string) => setParams({ [OPEN_ROLES_QUERY_KEYS.designation]: value }),
  };
}
