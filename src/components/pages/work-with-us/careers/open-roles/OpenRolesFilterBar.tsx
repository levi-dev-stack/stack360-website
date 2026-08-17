'use client';

import { DropdownOptions } from '@/components/core';
import { MotionStaggerItem } from '@/components/shared/motion';
import {
  DEPARTMENT_OPTIONS,
  DESIGNATION_OPTIONS,
  JOB_TYPE_OPTIONS,
  WORK_MODE_OPTIONS,
} from '@/constants/dropdown';

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
  return (
    <MotionStaggerItem className="mb-4.5 grid grid-cols-2 gap-xs sm:grid-cols-4 sm:gap-sm">
      <DropdownOptions
        label="Job Type"
        value={selectedJobType}
        onChange={onJobTypeChange}
        options={JOB_TYPE_OPTIONS}
      />
      <DropdownOptions
        label="Work Mode"
        value={selectedMode}
        onChange={onWorkModeChange}
        options={WORK_MODE_OPTIONS}
      />
      <DropdownOptions
        label="Department"
        value={selectedDept}
        onChange={onDepartmentChange}
        options={DEPARTMENT_OPTIONS}
      />
      <DropdownOptions
        label="Designation"
        value={selectedDesignation}
        onChange={onDesignationChange}
        options={DESIGNATION_OPTIONS}
      />
    </MotionStaggerItem>
  );
}
