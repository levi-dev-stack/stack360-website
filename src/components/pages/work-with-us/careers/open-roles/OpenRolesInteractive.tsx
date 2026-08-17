'use client';

import { MotionStagger } from '@/components/shared/motion';
import OpenRolesFilterBar from './OpenRolesFilterBar';
import OpenRolesResultsTable from './OpenRolesResultsTable';
import OpenRolesSearchBar from './OpenRolesSearchBar';
import { useOpenRolesFilters } from './use-open-roles-filters';

export default function OpenRolesInteractive() {
  const {
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
    setJobType,
    setWorkMode,
    setDepartment,
    setDesignation,
  } = useOpenRolesFilters();

  const isSearchDisabled = filteredRoles.length === 0 && !hasActiveFilters;

  return (
    <MotionStagger>
      <OpenRolesSearchBar
        searchInput={searchInput}
        onSearchChange={setSearchInput}
        onClearFilters={clearFilters}
        hasActiveFilters={hasActiveFilters}
        disabled={isSearchDisabled}
      />
      <OpenRolesFilterBar
        selectedJobType={selectedJobType}
        selectedMode={selectedMode}
        selectedDept={selectedDept}
        selectedDesignation={selectedDesignation}
        onJobTypeChange={setJobType}
        onWorkModeChange={setWorkMode}
        onDepartmentChange={setDepartment}
        onDesignationChange={setDesignation}
        disabled={isSearchDisabled}
      />
      <OpenRolesResultsTable
        roles={filteredRoles}
        isLoading={isTableLoading}
        hasActiveFilters={hasActiveFilters}
        onClearFilters={clearFilters}
      />
    </MotionStagger>
  );
}
