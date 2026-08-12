import type { Department, Designation, JobType, WorkMode } from './enums';

export interface Job {
  id: string;
  title: string;
  postedAgo: string;
  mode: WorkMode;
  location: string;
  department: Department;
  designation: Designation;
  jobType: JobType;
}
