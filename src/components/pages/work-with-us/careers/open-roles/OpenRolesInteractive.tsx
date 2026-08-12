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

  return (
    <MotionStagger>
      <OpenRolesSearchBar
        searchInput={searchInput}
        onSearchChange={setSearchInput}
        onClearFilters={clearFilters}
        hasActiveFilters={hasActiveFilters}
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
