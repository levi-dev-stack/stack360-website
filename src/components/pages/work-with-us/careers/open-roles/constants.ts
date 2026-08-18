export const OPEN_ROLES_QUERY_KEYS = {
  search: 'search',
  jobType: 'jobType',
  workMode: 'workMode',
  department: 'department',
  designation: 'designation',
} as const;

export const OPEN_ROLES_TABLE_LOAD_MS = 320;
export const OPEN_ROLES_FILTER_LOAD_MS = 280;
export const OPEN_ROLES_SEARCH_DEBOUNCE_MS = 300;

export const OPEN_ROLES_TH_CLASS =
  'px-xl py-md text-[11px] font-bold uppercase tracking-widest text-neutral-600 first:pl-xl last:pr-xl';

export const OPEN_ROLES_TD_CLASS = 'px-xl py-lg align-middle text-sm first:pl-xl last:pr-xl';
