import {
  Department,
  Designation,
  JobType,
  WorkMode,
} from '@/components/pages/work-with-us/careers/enums';
import { formatEnumLabel } from '@/utils/string';

export const JOB_TYPE_OPTIONS = Object.values(JobType).map((value) => ({
  value,
  label: formatEnumLabel(value),
}));
export const WORK_MODE_OPTIONS = Object.values(WorkMode).map((value) => ({
  value,
  label: formatEnumLabel(value),
}));
export const DEPARTMENT_OPTIONS = Object.values(Department).map((value) => ({
  value,
  label: formatEnumLabel(value),
}));
export const DESIGNATION_OPTIONS = Object.values(Designation).map((value) => ({
  value,
  label: formatEnumLabel(value),
}));
