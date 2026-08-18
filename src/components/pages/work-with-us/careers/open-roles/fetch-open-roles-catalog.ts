import { routes } from '@/constants/routes';

const SUITE360_REVALIDATE_SECONDS = 60;

interface Suite360Envelope<T> {
  data?: T;
  success?: boolean;
  serialized?: boolean;
  responseClass?: string;
  errors?: unknown[];
}

export interface Suite360NamedEntity {
  id: string;
  name: string;
}

export interface Suite360Department extends Suite360NamedEntity {
  designations: Suite360NamedEntity[];
}

export interface Suite360JobsFilters {
  workModes: string[];
  jobTypes: Suite360NamedEntity[];
  departments: Suite360Department[];
}

export interface Suite360OrganizationJob {
  id: string;
  referenceNumber: string;
  title: string;
  departmentId: string;
  designationId: string;
  jobTypeId: string;
  modeType: string;
  status: string;
  experienceLevel: string;
  educationLevel: string;
  postedDate: string;
  expiryDate: string;
  numberOfPositions: string;
}

export interface Suite360FetchResult<T> {
  data: T;
  error: string | null;
}

export interface OpenRolesCatalog {
  filters: Suite360FetchResult<Suite360JobsFilters | null>;
  jobs: Suite360FetchResult<Suite360OrganizationJob[]>;
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  return 'Something went wrong while loading open roles.';
}

function formatSuite360Errors(errors: unknown[] | undefined): string | null {
  if (!errors?.length) {
    return null;
  }

  return errors.map((item) => (typeof item === 'string' ? item : JSON.stringify(item))).join(', ');
}

async function fetchSuite360<T>(url: string): Promise<{ payload: T | null; error: string | null }> {
  try {
    const response = await fetch(url, {
      next: { revalidate: SUITE360_REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      return {
        payload: null,
        error: `Unable to load jobs data (${response.status}).`,
      };
    }

    const body = (await response.json()) as Suite360Envelope<T>;

    if (body.success === false) {
      return {
        payload: null,
        error: formatSuite360Errors(body.errors) ?? 'The jobs service returned an error.',
      };
    }

    return {
      payload: body.data ?? null,
      error: formatSuite360Errors(body.errors),
    };
  } catch (error) {
    console.error(`Suite360 request failed: ${url}`, error);
    return {
      payload: null,
      error: getErrorMessage(error),
    };
  }
}

export async function fetchOpenRolesCatalog(): Promise<OpenRolesCatalog> {
  const [filtersResult, jobsResult] = await Promise.all([
    fetchSuite360<Suite360JobsFilters>(routes.suite360.jobs.filters),
    fetchSuite360<Suite360OrganizationJob[]>(routes.suite360.jobs.organization),
  ]);

  return {
    filters: {
      data: filtersResult.payload,
      error: filtersResult.error,
    },
    jobs: {
      data: Array.isArray(jobsResult.payload) ? jobsResult.payload : [],
      error: jobsResult.error,
    },
  };
}
