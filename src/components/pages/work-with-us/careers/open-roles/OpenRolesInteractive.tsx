'use client';

import { MotionStagger, MotionStaggerItem } from '@/components/shared/motion';
import OpenRolesFilterBar from './OpenRolesFilterBar';
import OpenRolesHeader from './OpenRolesHeader';
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
    totalRoleCount,
    hasActiveFilters,
    isTableLoading,
    clearFilters,
    setJobType,
    setWorkMode,
    setDepartment,
    setDesignation,
  } = useOpenRolesFilters();

  const hasCatalog = totalRoleCount > 0;
  const visibleRoleCount = hasActiveFilters ? filteredRoles.length : totalRoleCount;
  const resultsStatus = isTableLoading
    ? 'Updating open roles'
    : hasCatalog
      ? `${filteredRoles.length} matching ${filteredRoles.length === 1 ? 'role' : 'roles'}`
      : 'No open roles right now';

  return (
    <MotionStagger>
      <MotionStaggerItem>
        <OpenRolesHeader roleCount={visibleRoleCount} />
      </MotionStaggerItem>

      {hasCatalog ? (
        <OpenRolesSearchBar
          searchInput={searchInput}
          onSearchChange={setSearchInput}
          onClearFilters={clearFilters}
          hasActiveFilters={hasActiveFilters}
        />
      ) : null}

      {hasCatalog ? (
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
      ) : null}

      <output className="sr-only" aria-live="polite">
        {resultsStatus}
      </output>

      <OpenRolesResultsTable
        roles={filteredRoles}
        isLoading={isTableLoading}
        hasCatalog={hasCatalog}
        onClearFilters={clearFilters}
      />
    </MotionStagger>
  );
}
