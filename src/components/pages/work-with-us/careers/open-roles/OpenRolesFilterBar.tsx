'use client';

import { useMemo } from 'react';
import { DropdownOptions } from '@/components/core';
import { MotionStaggerItem } from '@/components/shared/motion';
import { formatWorkModeLabel, toNamedOptions } from './open-roles-mappers';
import { useOpenRolesCatalog } from './open-roles-provider';

interface OpenRolesFilterBarProps {
  selectedJobType: string;
  selectedMode: string;
  selectedDept: string;
  selectedDesignation: string;
  onJobTypeChange: (value: string) => void;
  onWorkModeChange: (value: string) => void;
  onDepartmentChange: (value: string) => void;
  onDesignationChange: (value: string) => void;
}

export default function OpenRolesFilterBar({
  selectedJobType,
  selectedMode,
  selectedDept,
  selectedDesignation,
  onJobTypeChange,
  onWorkModeChange,
  onDepartmentChange,
  onDesignationChange,
}: OpenRolesFilterBarProps) {
  const { filters } = useOpenRolesCatalog();
  const data = filters.data;

  const workModeOptions = useMemo(
    () =>
      (data?.workModes ?? []).map((mode) => ({ value: mode, label: formatWorkModeLabel(mode) })),
    [data?.workModes]
  );

  const jobTypeOptions = useMemo(() => toNamedOptions(data?.jobTypes), [data?.jobTypes]);

  const departmentOptions = useMemo(() => toNamedOptions(data?.departments), [data?.departments]);

  const designationOptions = useMemo(() => {
    const departments = data?.departments ?? [];
    const source = selectedDept
      ? departments.filter((dept) => dept.id === selectedDept)
      : departments;

    return source.flatMap((dept) =>
      dept.designations.map((role) => ({
        value: role.id,
        label: selectedDept ? role.name : `${dept.name} · ${role.name}`,
      }))
    );
  }, [data?.departments, selectedDept]);

  return (
    <MotionStaggerItem className="mb-4.5 grid grid-cols-2 gap-xs sm:grid-cols-4 sm:gap-sm">
      <DropdownOptions
        label="Job Type"
        value={selectedJobType}
        onChange={onJobTypeChange}
        options={jobTypeOptions}
      />
      <DropdownOptions
        label="Work Mode"
        value={selectedMode}
        onChange={onWorkModeChange}
        options={workModeOptions}
      />
      <DropdownOptions
        label="Department"
        value={selectedDept}
        onChange={onDepartmentChange}
        options={departmentOptions}
      />
      <DropdownOptions
        label="Designation"
        value={selectedDesignation}
        onChange={onDesignationChange}
        options={designationOptions}
      />
    </MotionStaggerItem>
  );
}
