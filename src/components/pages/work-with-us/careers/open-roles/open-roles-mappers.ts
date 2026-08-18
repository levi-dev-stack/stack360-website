import { formatPostedAgo } from '@/utils/date';
import type { Job } from '../type';
import type {
  Suite360JobsFilters,
  Suite360NamedEntity,
  Suite360OrganizationJob,
} from './fetch-open-roles-catalog';

const WORK_MODE_LABELS: Record<string, string> = {
  OnSite: 'On-site',
  Remote: 'Remote',
  Hybrid: 'Hybrid',
};

export function formatWorkModeLabel(mode: string | undefined): string {
  if (!mode) {
    return '';
  }

  return WORK_MODE_LABELS[mode] ?? mode.replace(/([a-z])([A-Z])/g, '$1-$2');
}

export function toNamedOptions(items: Suite360NamedEntity[] | undefined) {
  return (items ?? []).map((item) => ({ value: item.id, label: item.name }));
}

function nameById(items: Suite360NamedEntity[] | undefined, id: string) {
  return items?.find((item) => item.id === id)?.name ?? '';
}

export function toOpenRole(job: Suite360OrganizationJob, filters: Suite360JobsFilters | null): Job {
  const department = filters?.departments?.find((item) => item.id === job.departmentId);
  const designation =
    department?.designations.find((item) => item.id === job.designationId) ??
    filters?.departments
      ?.flatMap((item) => item.designations)
      .find((item) => item.id === job.designationId);

  return {
    id: job.id,
    title: job.title ?? '',
    referenceNumber: job.referenceNumber ?? '',
    postedAgo: formatPostedAgo(job.postedDate),
    mode: formatWorkModeLabel(job.modeType),
    department: department?.name ?? '',
    designation: designation?.name ?? '',
    jobType: nameById(filters?.jobTypes, job.jobTypeId),
  };
}
